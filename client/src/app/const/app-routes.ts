/**
 * Defines the structure for route parameter definitions.
 * Each key represents a path parameter name, and the value is `undefined` to indicate
 * that the actual value will be determined at runtime.
 */
export type ParamDef = Record<string, undefined>;

/**
 * Generic interface for defining a route.
 * @template PathParams A record of path parameters, extending `ParamDef`,
 * indicating the parameters expected in the route's path.
 */
export interface RouteDef<PathParams extends ParamDef> {
  path: string;
  pathParams: PathParams;
}

/**
 * A utility type that represents any route definition, allowing flexibility
 * across different routes without specifying exact path parameters upfront.
 */
export type AnyRouteDef = RouteDef<ParamDef>;

/**
 * A type representing the collection of all routes in the application.
 * It maps route names to their respective `AnyRouteDef` definitions.
 */
export type AppRoutes = Record<string, AnyRouteDef>;

/**
 * A constant record defining the application's routes.
 * Each route is specified with a `path` and `pathParams`. The `pathParams` object
 * outlines the expected dynamic segments of the path, even if they are not used,
 * to maintain a consistent structure across routes.
 */
export const APP_ROUTES = {
  LANDING_PAGE: {
    path: '/',
    pathParams: {},
  },
  NOT_FOUND: {
    path: '/not-found',
    pathParams: {},
  },
} as const satisfies AppRoutes;
