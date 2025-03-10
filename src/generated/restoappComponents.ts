/**
 * Generated by @openapi-codegen
 *
 * @version 1.0
 */
import * as reactQuery from "@tanstack/react-query";
import {
  useRestoappContext,
  RestoappContext,
  queryKeyFn,
} from "./restoappContext";
import { deepMerge } from "./restoappUtils";
import type * as Fetcher from "./restoappFetcher";
import { restoappFetch } from "./restoappFetcher";
import type * as Schemas from "./restoappSchemas";

type QueryFnOptions = {
  signal?: AbortController["signal"];
};

export type CreateReservationError = Fetcher.ErrorWrapper<undefined>;

export type CreateReservationVariables = {
  body?: Schemas.RepoReservation;
} & RestoappContext["fetcherOptions"];

/**
 * create reservation full info
 */
export const fetchCreateReservation = (
  variables: CreateReservationVariables,
  signal?: AbortSignal,
) =>
  restoappFetch<
    string,
    CreateReservationError,
    Schemas.RepoReservation,
    {},
    {},
    {}
  >({ url: "/reservations/create", method: "post", ...variables, signal });

/**
 * create reservation full info
 */
export const useCreateReservation = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      string,
      CreateReservationError,
      CreateReservationVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useRestoappContext();
  return reactQuery.useMutation<
    string,
    CreateReservationError,
    CreateReservationVariables
  >({
    mutationFn: (variables: CreateReservationVariables) =>
      fetchCreateReservation(deepMerge(fetcherOptions, variables)),
    ...options,
  });
};

export type CreateRestaurantError = Fetcher.ErrorWrapper<undefined>;

export type CreateRestaurantVariables = {
  body?: Schemas.RepoRestaurant;
} & RestoappContext["fetcherOptions"];

/**
 * create restaurant full info
 */
export const fetchCreateRestaurant = (
  variables: CreateRestaurantVariables,
  signal?: AbortSignal,
) =>
  restoappFetch<
    string,
    CreateRestaurantError,
    Schemas.RepoRestaurant,
    {},
    {},
    {}
  >({ url: "/restaurants/create", method: "post", ...variables, signal });

/**
 * create restaurant full info
 */
export const useCreateRestaurant = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      string,
      CreateRestaurantError,
      CreateRestaurantVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useRestoappContext();
  return reactQuery.useMutation<
    string,
    CreateRestaurantError,
    CreateRestaurantVariables
  >({
    mutationFn: (variables: CreateRestaurantVariables) =>
      fetchCreateRestaurant(deepMerge(fetcherOptions, variables)),
    ...options,
  });
};

export type GetRestaurantPathParams = {
  /**
   * restaurant uuid
   */
  uuid: string;
};

export type GetRestaurantError = Fetcher.ErrorWrapper<undefined>;

export type GetRestaurantVariables = {
  pathParams: GetRestaurantPathParams;
} & RestoappContext["fetcherOptions"];

/**
 * get restaurant full info
 */
export const fetchGetRestaurant = (
  variables: GetRestaurantVariables,
  signal?: AbortSignal,
) =>
  restoappFetch<
    Schemas.RepoRestaurantWithTables,
    GetRestaurantError,
    undefined,
    {},
    {},
    GetRestaurantPathParams
  >({ url: "/restaurants/{uuid}", method: "get", ...variables, signal });

/**
 * get restaurant full info
 */
export function getRestaurantQuery(variables: GetRestaurantVariables): {
  queryKey: reactQuery.QueryKey;
  queryFn: (
    options: QueryFnOptions,
  ) => Promise<Schemas.RepoRestaurantWithTables>;
};

export function getRestaurantQuery(
  variables: GetRestaurantVariables | reactQuery.SkipToken,
): {
  queryKey: reactQuery.QueryKey;
  queryFn:
    | ((options: QueryFnOptions) => Promise<Schemas.RepoRestaurantWithTables>)
    | reactQuery.SkipToken;
};

export function getRestaurantQuery(
  variables: GetRestaurantVariables | reactQuery.SkipToken,
) {
  return {
    queryKey: queryKeyFn({
      path: "/restaurants/{uuid}",
      operationId: "getRestaurant",
      variables,
    }),
    queryFn:
      variables === reactQuery.skipToken
        ? reactQuery.skipToken
        : ({ signal }: QueryFnOptions) => fetchGetRestaurant(variables, signal),
  };
}

/**
 * get restaurant full info
 */
export const useSuspenseGetRestaurant = <
  TData = Schemas.RepoRestaurantWithTables,
>(
  variables: GetRestaurantVariables,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Schemas.RepoRestaurantWithTables,
      GetRestaurantError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { queryOptions, fetcherOptions } = useRestoappContext(options);
  return reactQuery.useSuspenseQuery<
    Schemas.RepoRestaurantWithTables,
    GetRestaurantError,
    TData
  >({
    ...getRestaurantQuery(deepMerge(fetcherOptions, variables)),
    ...options,
    ...queryOptions,
  });
};

/**
 * get restaurant full info
 */
export const useGetRestaurant = <TData = Schemas.RepoRestaurantWithTables,>(
  variables: GetRestaurantVariables | reactQuery.SkipToken,
  options?: Omit<
    reactQuery.UseQueryOptions<
      Schemas.RepoRestaurantWithTables,
      GetRestaurantError,
      TData
    >,
    "queryKey" | "queryFn" | "initialData"
  >,
) => {
  const { queryOptions, fetcherOptions } = useRestoappContext(options);
  return reactQuery.useQuery<
    Schemas.RepoRestaurantWithTables,
    GetRestaurantError,
    TData
  >({
    ...getRestaurantQuery(
      variables === reactQuery.skipToken
        ? variables
        : deepMerge(fetcherOptions, variables),
    ),
    ...options,
    ...queryOptions,
  });
};

export type CreateTableError = Fetcher.ErrorWrapper<undefined>;

export type CreateTableVariables = {
  body?: Schemas.RepoTable;
} & RestoappContext["fetcherOptions"];

/**
 * create table full info
 */
export const fetchCreateTable = (
  variables: CreateTableVariables,
  signal?: AbortSignal,
) =>
  restoappFetch<string, CreateTableError, Schemas.RepoTable, {}, {}, {}>({
    url: "/tables/create",
    method: "post",
    ...variables,
    signal,
  });

/**
 * create table full info
 */
export const useCreateTable = (
  options?: Omit<
    reactQuery.UseMutationOptions<
      string,
      CreateTableError,
      CreateTableVariables
    >,
    "mutationFn"
  >,
) => {
  const { fetcherOptions } = useRestoappContext();
  return reactQuery.useMutation<string, CreateTableError, CreateTableVariables>(
    {
      mutationFn: (variables: CreateTableVariables) =>
        fetchCreateTable(deepMerge(fetcherOptions, variables)),
      ...options,
    },
  );
};

export type QueryOperation = {
  path: "/restaurants/{uuid}";
  operationId: "getRestaurant";
  variables: GetRestaurantVariables | reactQuery.SkipToken;
};
