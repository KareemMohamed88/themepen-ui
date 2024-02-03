import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const projectsApi = createApi({
  reducerPath: "projectsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://v2-server.onrender.com/",
  }),
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => "projects",
    }),
  }),
});

export const { useGetAllProjectsQuery } = projectsApi;                                                                                                                                                                                                                                                                                                                                                                                                                                                    