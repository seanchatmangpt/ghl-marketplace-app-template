// @ts-nocheck

import axios, { AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import qs from "qs";
import { CalendarResourcesRoomsEquipmentsService } from "../services/CalendarResourcesRoomsEquipmentsService";
import { UpdateCalendarResourceDTO } from "../models/UpdateCalendarResourceDTO";
import { Model, TokenType } from "../../../model";
import { CreateCalendarResourceDTO } from "../models/CreateCalendarResourceDTO";
import { CalendarsService } from "../services/CalendarsService";
import { CalendarCreateDTO } from "../models/CalendarCreateDTO";
import { CalendarUpdateDTO } from "../models/CalendarUpdateDTO";
import { CalendarEventsService } from "../services/CalendarEventsService";
import { AppointmentEditSchema } from "../models/AppointmentEditSchema";
import { AppointmentCreateSchema } from "../models/AppointmentCreateSchema";
import { BlockSlotCreateSchema } from "../models/BlockSlotCreateSchema";
import { BlockSlotEditSchema } from "../models/BlockSlotEditSchema";
import { DeleteAppointmentSchema } from "../models/DeleteAppointmentSchema";
import { CalendarGroupsService } from "../services/CalendarGroupsService";
import { GroupDTO } from "../models/GroupDTO";
import { ValidateGroupSlugPostBody } from "../models/ValidateGroupSlugPostBody";
import { GroupUpdateDTO } from "../models/GroupUpdateDTO";
import { GroupStatusUpdateParams } from "../models/GroupStatusUpdateParams";

export class CalendarServiceLocator {
  private model: Model;

  constructor() {
    this.model = new Model();
  }

  /**
   * The function creates an instance of Axios with a base URL and interceptors for handling
   * authorization and refreshing access tokens.
   * @param {string} resourceId - The `resourceId` parameter is a string that represents the locationId or companyId you want
   * to make api call for.
   * @returns an instance of the Axios library with some custom request and response interceptors.
   */
  requests(resourceId: string) {
    const baseUrl =
      "https://stoplight.io/mocks/highlevel/integrations/39582850";

    if (!this.model.getAccessToken(resourceId)) {
      throw new Error("Installation not found for the following resource");
    }

    const axiosInstance = axios.create({
      baseURL: baseUrl,
    });

    axiosInstance.interceptors.request.use(
      async (requestConfig: InternalAxiosRequestConfig) => {
        try {
          requestConfig.headers["Authorization"] =
            `${TokenType.Bearer} ${this.model.getAccessToken(resourceId)}`;
        } catch (e) {
          console.error(e);
        }
        return requestConfig;
      },
    );

    axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          return this.refreshAccessToken(resourceId).then(() => {
            originalRequest.headers.Authorization = `Bearer ${this.model.getAccessToken(resourceId)}`;
            return axios(originalRequest);
          });
        }

        return Promise.reject(error);
      },
    );

    return axiosInstance;
  }

  private async refreshAccessToken(resourceId: string) {
    try {
      const resp = await axios.post(
        `https://stoplight.io/mocks/highlevel/integrations/39582850/oauth/token`,
        qs.stringify({
          client_id: process.env.GHL_APP_CLIENT_ID,
          client_secret: process.env.GHL_APP_CLIENT_SECRET,
          grant_type: "refresh_token",
          refresh_token: this.model.getRefreshToken(resourceId),
        }),
        { headers: { "content-type": "application/x-www-form-urlencoded" } },
      );
      this.model.setAccessToken(resourceId, resp.data.access_token);
      this.model.setRefreshToken(resourceId, resp.data.refresh_token);
    } catch (error: any) {
      console.error(error?.response?.data);
    }
  }

  private getParams(resourceId: string, params: Record<string, any>) {
    // const authorization = this.model.getAccessToken(resourceId);
    const authorization = `Bearer ${process.env.ACCESS_TOKEN}`;

    return {
      ...params,
      authorization,
      version: "2021-04-15",
    };
  }

  async getCalendarResourcesService(resourceId: string) {
    return {
      getCalendarResource: (resourceType: "equipments" | "rooms", id: string) =>
        CalendarResourcesRoomsEquipmentsService.getCalendarResource(
          this.getParams(resourceId, { resourceType, id }),
        ),
      updateCalendarResource: (
        resourceType: "equipments" | "rooms",
        id: string,
        requestBody: UpdateCalendarResourceDTO,
      ) =>
        CalendarResourcesRoomsEquipmentsService.updateCalendarResource(
          this.getParams(resourceId, { resourceType, id, requestBody }),
        ),
      deleteCalendarResource: (
        resourceType: "equipments" | "rooms",
        id: string,
      ) =>
        CalendarResourcesRoomsEquipmentsService.deleteCalendarResource(
          this.getParams(resourceId, { resourceType, id }),
        ),
      fetchCalendarResources: (
        resourceType: "equipments" | "rooms",
        locationId: string,
        limit: number,
        skip: number,
      ) =>
        CalendarResourcesRoomsEquipmentsService.fetchCalendarResources(
          this.getParams(resourceId, { resourceType, locationId, limit, skip }),
        ),
      createCalendarResource: (
        resourceType: "equipments" | "rooms",
        requestBody: CreateCalendarResourceDTO,
      ) =>
        CalendarResourcesRoomsEquipmentsService.createCalendarResource(
          this.getParams(resourceId, { resourceType, requestBody }),
        ),
    };
  }

  getCalendarsService(resourceId: string) {
    return {
      getCalendar: (calendarId: string) =>
        CalendarsService.getCalendar(
          this.getParams(resourceId, { calendarId }),
        ),
      getCalendars: (
        locationId: string,
        groupId?: string,
        showDrafted = true,
      ) =>
        CalendarsService.getCalendars(
          this.getParams(resourceId, { locationId, groupId, showDrafted }),
        ),
      createCalendar: (requestBody: CalendarCreateDTO) =>
        CalendarsService.createCalendar(
          this.getParams(resourceId, { requestBody }),
        ),
      updateCalendar: (calendarId: string, requestBody: CalendarUpdateDTO) =>
        CalendarsService.updateCalendar(
          this.getParams(resourceId, { calendarId, requestBody }),
        ),
      deleteCalendar: (calendarId: string) =>
        CalendarsService.deleteCalendar(
          this.getParams(resourceId, { calendarId }),
        ),
      getSlots: (
        calendarId: string,
        startDate: string,
        endDate: string,
        timezone?: string,
        userId?: string,
      ) =>
        CalendarsService.getSlots(
          this.getParams(resourceId, {
            calendarId,
            startDate,
            endDate,
            timezone,
            userId,
          }),
        ),
    };
  }

  async getCalendarEventsService(resourceId: string) {
    return {
      getCalendarEvents: (
        locationId: string,
        startTime: string,
        endTime: string,
        userId?: string,
        calendarId?: string,
        groupId?: string,
      ) =>
        CalendarEventsService.getCalendarEvents(
          this.getParams(resourceId, {
            locationId,
            startTime,
            endTime,
            userId,
            calendarId,
            groupId,
          }),
        ),
      getBlockedSlots: (
        locationId: string,
        startTime: string,
        endTime: string,
        userId?: string,
        calendarId?: string,
        groupId?: string,
      ) =>
        CalendarEventsService.getBlockedSlots(
          this.getParams(resourceId, {
            locationId,
            startTime,
            endTime,
            userId,
            calendarId,
            groupId,
          }),
        ),
      getAppointment: (eventId: string) =>
        CalendarEventsService.getAppointment(
          this.getParams(resourceId, { eventId }),
        ),
      editAppointment: (eventId: string, requestBody: AppointmentEditSchema) =>
        CalendarEventsService.editAppointment(
          this.getParams(resourceId, { eventId, requestBody }),
        ),
      createAppointment: (requestBody: AppointmentCreateSchema) =>
        CalendarEventsService.createAppointment(
          this.getParams(resourceId, { requestBody }),
        ),
      createBlockSlot: (requestBody: BlockSlotCreateSchema) =>
        CalendarEventsService.createBlockSlot(
          this.getParams(resourceId, { requestBody }),
        ),
      editBlockSlot: (eventId: string, requestBody: BlockSlotEditSchema) =>
        CalendarEventsService.editBlockSlot(
          this.getParams(resourceId, { eventId, requestBody }),
        ),
      deleteEvent: (eventId: string, requestBody: DeleteAppointmentSchema) =>
        CalendarEventsService.deleteEvent(
          this.getParams(resourceId, { eventId, requestBody }),
        ),
    };
  }

  async getCalendarGroupsService(resourceId: string) {
    return {
      getGroups: (locationId: string) =>
        CalendarGroupsService.getGroups(
          this.getParams(resourceId, { locationId }),
        ),
      createCalendarGroup: (requestBody: GroupDTO) =>
        CalendarGroupsService.createCalendarGroup(
          this.getParams(resourceId, { requestBody }),
        ),
      validateGroupsSlug: (requestBody: ValidateGroupSlugPostBody) =>
        CalendarGroupsService.validateGroupsSlug(
          this.getParams(resourceId, { requestBody }),
        ),
      deleteGroup: (groupId: string) =>
        CalendarGroupsService.deleteGroup(
          this.getParams(resourceId, { groupId }),
        ),
      editGroup: (groupId: string, requestBody: GroupUpdateDTO) =>
        CalendarGroupsService.editGroup(
          this.getParams(resourceId, { groupId, requestBody }),
        ),
      disableGroup: (groupId: string, requestBody: GroupStatusUpdateParams) =>
        CalendarGroupsService.disableGroup(
          this.getParams(resourceId, { groupId, requestBody }),
        ),
    };
  }
}
