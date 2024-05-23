import { Router } from "express";
import { SearchService } from "../clients/users";
import { UsersService } from "../clients/users";

const router = Router();

interface SearchUsersQuery {
  authorization: string;
  version: "2021-07-28";
  companyId: string;
  query?: string;
  skip: string;
  limit: string;
  locationId?: string;
  type?: string;
  role?: string;
  ids?: string;
  sort?: string;
  sortDirection?: string;
}

router.get("/users/search", async (req, res) => {
  const query: SearchUsersQuery = req.query as any;
  try {
    const result = await SearchService.searchUsers(
      authorization as string,
      "2021-07-28",
      companyId as string,
      query as string,
      skip as string,
      limit as string,
      locationId as string,
      type as string,
      role as string,
      ids as string,
      sort as string,
      sortDirection as string,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/users/:userId", async (req, res) => {
  const { authorization, version } = req.headers;
  const { userId } = req.params;
  try {
    const result = await UsersService.getUser(
      authorization as string,
      version as "2021-07-28",
      userId as string,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/users/:userId", async (req, res) => {
  const { authorization, version } = req.headers;
  const { userId } = req.params;
  const requestBody = req.body;
  try {
    const result = await UsersService.updateUser(
      authorization as string,
      version as "2021-07-28",
      userId as string,
      requestBody,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.delete("/users/:userId", async (req, res) => {
  const { authorization, version } = req.headers;
  const { userId } = req.params;
  try {
    const result = await UsersService.deleteUser(
      authorization as string,
      version as "2021-07-28",
      userId as string,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/users/", async (req, res) => {
  const { authorization, version } = req.headers;
  const { locationId } = req.query;
  try {
    const result = await UsersService.getUserByLocation(
      authorization as string,
      version as "2021-07-28",
      locationId as string,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/users/", async (req, res) => {
  const { authorization, version } = req.headers;
  const requestBody = req.body;
  try {
    const result = await UsersService.createUser(
      authorization as string,
      version as "2021-07-28",
      requestBody,
    );
    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
