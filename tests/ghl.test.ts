import { describe, it, expect, vi } from 'vitest';
import { GHL } from '../src/ghl';
import axios from 'axios';

describe('GHL Class', () => {
  it('should create a business client and make a request', async () => {
    const ghl = new GHL();
    const mockResponse = { data: { businesses: [] } };
    vi.spyOn(axios, 'create').mockReturnValue({
      interceptors: { request: { use: vi.fn() }, response: { use: vi.fn() } },
      get: vi.fn().mockResolvedValue(mockResponse),
    } as any);

    const client = ghl.getBusinessesClient('testResourceId');
    const response = await client.getBusinesses();
    expect(response).toEqual(mockResponse);
  });

  // Add more tests for other clients and methods...
});
