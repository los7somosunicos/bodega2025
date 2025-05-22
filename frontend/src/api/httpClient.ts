import { asset, Category, loan } from "@/models";

// http-client.ts
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

interface RequestOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: asset | loan | Category;
}

class HttpClient {
  private baseUrl: string;

  constructor(baseUrl: string = "http://localhost:3001/api/v1") {
    this.baseUrl = baseUrl;
  }

  public async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
    const { method = "GET", headers = {}, body } = options;

    const url = `${this.baseUrl}/${endpoint}`;

    const config: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, config);

      if (!response) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json() as Promise<T>;
    } catch (error) {
      console.error("Error in HTTP request:", error);
      throw error;
    }
  }

  // Métodos específicos para tus endpoints
  public async getArticles(): Promise<asset[]> {
    return this.request<asset[]>("asset");
  }

  public async getLoans(): Promise<loan[]> {
    return this.request<loan[]>("loan");
  }

  public async getCategories(): Promise<Category[]> {
    return this.request<Category[]>("category");
  }

  // Métodos genéricos para CRUD
  public async get<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint);
  }

  public async post<T>(endpoint: string, data: asset | loan | Category): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: data
    });
  }

  public async put<T>(endpoint: string, data: asset | loan | Category): Promise<T> {
    return this.request<T>(endpoint, {
      method: "PUT",
      body: data
    });
  }

  public async delete<T>(endpoint: string): Promise<T> {
    return this.request<T>(endpoint, {
      method: "DELETE"
    });
  }
}

export const httpClient = new HttpClient();
