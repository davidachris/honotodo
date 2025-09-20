import { HTTPException } from "hono/http-exception";

export enum StatusCode {
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  ContentTooLarge = 413,
  URITooLong = 414,
  UnsupportedMediaType = 415,
  RangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  Teapot = 418,
  MisdirectedRequest = 421,
  UnprocessableContent = 422,
  Locked = 423,
  FailedDependency = 424,
  TooEarly = 425,
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
}

export const httpError = (
  statusCode: StatusCode,
  message?: string,
  headers?: HeadersInit
) => {
  switch (statusCode) {
    case StatusCode.BadRequest:
      return new HTTPException(StatusCode.BadRequest, {
        message: message,
        res: new Response(null, {
          status: StatusCode.BadRequest,
          statusText: "Bad Request",
          headers,
        }),
      });
    case StatusCode.Unauthorized:
      return new HTTPException(StatusCode.Unauthorized, {
        message: message,
        res: new Response(null, {
          status: StatusCode.Unauthorized,
          statusText: "Unauthorized",
          headers,
        }),
      });
    case StatusCode.PaymentRequired:
      return new HTTPException(StatusCode.PaymentRequired, {
        message: message,
        res: new Response(null, {
          status: StatusCode.PaymentRequired,
          statusText: "Payment Required",
          headers,
        }),
      });
    case StatusCode.Forbidden:
      return new HTTPException(StatusCode.Forbidden, {
        message: message,
        res: new Response(null, {
          status: StatusCode.Forbidden,
          statusText: "Forbidden",
          headers,
        }),
      });
    case StatusCode.NotFound:
      return new HTTPException(StatusCode.NotFound, {
        message: message,
        res: new Response(null, {
          status: StatusCode.NotFound,
          statusText: "Not Found",
          headers,
        }),
      });
    case StatusCode.MethodNotAllowed:
      return new HTTPException(StatusCode.MethodNotAllowed, {
        message: message,
        res: new Response(null, {
          status: StatusCode.MethodNotAllowed,
          statusText: "Method Not Allowed",
          headers,
        }),
      });
    case StatusCode.NotAcceptable:
      return new HTTPException(StatusCode.NotAcceptable, {
        message: message,
        res: new Response(null, {
          status: StatusCode.NotAcceptable,
          statusText: "Not Acceptable",
          headers,
        }),
      });
    case StatusCode.ProxyAuthenticationRequired:
      return new HTTPException(StatusCode.ProxyAuthenticationRequired, {
        message: message,
        res: new Response(null, {
          status: StatusCode.ProxyAuthenticationRequired,
          statusText: "Proxy Authentication Required",
          headers,
        }),
      });
    case StatusCode.RequestTimeout:
      return new HTTPException(StatusCode.RequestTimeout, {
        message: message,
        res: new Response(null, {
          status: StatusCode.RequestTimeout,
          statusText: "Request Timeout",
          headers,
        }),
      });
    case StatusCode.Conflict:
      return new HTTPException(StatusCode.Conflict, {
        message: message,
        res: new Response(null, {
          status: StatusCode.Conflict,
          statusText: "Conflict",
          headers,
        }),
      });
    case StatusCode.Gone:
      return new HTTPException(StatusCode.Gone, {
        message: message,
        res: new Response(null, {
          status: StatusCode.Gone,
          statusText: "Gone",
          headers,
        }),
      });
    case StatusCode.LengthRequired:
      return new HTTPException(StatusCode.LengthRequired, {
        message: message,
        res: new Response(null, {
          status: StatusCode.LengthRequired,
          statusText: "Length Required",
          headers,
        }),
      });
    case StatusCode.PreconditionFailed:
      return new HTTPException(StatusCode.PreconditionFailed, {
        message: message,
        res: new Response(null, {
          status: StatusCode.PreconditionFailed,
          statusText: "Precondition Failed",
          headers,
        }),
      });
    case StatusCode.ContentTooLarge:
      return new HTTPException(StatusCode.ContentTooLarge, {
        message: message,
        res: new Response(null, {
          status: StatusCode.ContentTooLarge,
          statusText: "Content Too Large",
          headers,
        }),
      });
    case StatusCode.URITooLong:
      return new HTTPException(StatusCode.URITooLong, {
        message: message,
        res: new Response(null, {
          status: StatusCode.URITooLong,
          statusText: "URI Too Long",
          headers,
        }),
      });
    case StatusCode.UnsupportedMediaType:
      return new HTTPException(StatusCode.UnsupportedMediaType, {
        message: message,
        res: new Response(null, {
          status: StatusCode.UnsupportedMediaType,
          statusText: "Unsupported Media Type",
          headers,
        }),
      });
    case StatusCode.RangeNotSatisfiable:
      return new HTTPException(StatusCode.RangeNotSatisfiable, {
        message: message,
        res: new Response(null, {
          status: StatusCode.RangeNotSatisfiable,
          statusText: "Range Not Satisfiable",
          headers,
        }),
      });
    case StatusCode.ExpectationFailed:
      return new HTTPException(StatusCode.ExpectationFailed, {
        message: message,
        res: new Response(null, {
          status: StatusCode.ExpectationFailed,
          statusText: "Expectation Failed",
          headers,
        }),
      });
    case StatusCode.Teapot:
      return new HTTPException(StatusCode.Teapot, {
        message: message,
        res: new Response(null, {
          status: StatusCode.Teapot,
          statusText: "I'm a teapot",
          headers,
        }),
      });
    case StatusCode.MisdirectedRequest:
      return new HTTPException(StatusCode.MisdirectedRequest, {
        message: message,
        res: new Response(null, {
          status: StatusCode.MisdirectedRequest,
          statusText: "Misdirected Request",
          headers,
        }),
      });
    case StatusCode.UnprocessableContent:
      return new HTTPException(StatusCode.UnprocessableContent, {
        message: message,
        res: new Response(null, {
          status: StatusCode.UnprocessableContent,
          statusText: "Unprocessable Content",
          headers,
        }),
      });
    case StatusCode.Locked:
      return new HTTPException(StatusCode.Locked, {
        message: message,
        res: new Response(null, {
          status: StatusCode.Locked,
          statusText: "Locked",
          headers,
        }),
      });
    case StatusCode.FailedDependency:
      return new HTTPException(StatusCode.FailedDependency, {
        message: message,
        res: new Response(null, {
          status: StatusCode.FailedDependency,
          statusText: "Failed Dependency",
          headers,
        }),
      });
    case StatusCode.TooEarly:
      return new HTTPException(StatusCode.TooEarly, {
        message: message,
        res: new Response(null, {
          status: StatusCode.TooEarly,
          statusText: "Too Early",
          headers,
        }),
      });
    case StatusCode.UpgradeRequired:
      return new HTTPException(StatusCode.UpgradeRequired, {
        message: message,
        res: new Response(null, {
          status: StatusCode.UpgradeRequired,
          statusText: "Upgrade Required",
          headers,
        }),
      });
    case StatusCode.PreconditionRequired:
      return new HTTPException(StatusCode.PreconditionRequired, {
        message: message,
        res: new Response(null, {
          status: StatusCode.PreconditionRequired,
          statusText: "Precondition Required",
          headers,
        }),
      });
    case StatusCode.TooManyRequests:
      return new HTTPException(StatusCode.TooManyRequests, {
        message: message,
        res: new Response(null, {
          status: StatusCode.TooManyRequests,
          statusText: "Too Many Requests",
          headers,
        }),
      });
    case StatusCode.RequestHeaderFieldsTooLarge:
      return new HTTPException(StatusCode.RequestHeaderFieldsTooLarge, {
        message: message,
        res: new Response(null, {
          status: StatusCode.RequestHeaderFieldsTooLarge,
          statusText: "Request Header Fields Too Large",
          headers,
        }),
      });
    case StatusCode.UnavailableForLegalReasons:
      return new HTTPException(StatusCode.UnavailableForLegalReasons, {
        message: message,
        res: new Response(null, {
          status: StatusCode.UnavailableForLegalReasons,
          statusText: "Unavailable For Legal Reasons",
          headers,
        }),
      });
    case StatusCode.NotImplemented:
      return new HTTPException(StatusCode.NotImplemented, {
        message: message,
        res: new Response(null, {
          status: StatusCode.NotImplemented,
          statusText: "Not Implemented",
          headers,
        }),
      });
    case StatusCode.BadGateway:
      return new HTTPException(StatusCode.BadGateway, {
        message: message,
        res: new Response(null, {
          status: StatusCode.BadGateway,
          statusText: "Bad Gateway",
          headers,
        }),
      });
    case StatusCode.ServiceUnavailable:
      return new HTTPException(StatusCode.ServiceUnavailable, {
        message: message,
        res: new Response(null, {
          status: StatusCode.ServiceUnavailable,
          statusText: "Service Unavailable",
          headers,
        }),
      });
    case StatusCode.GatewayTimeout:
      return new HTTPException(StatusCode.GatewayTimeout, {
        message: message,
        res: new Response(null, {
          status: StatusCode.GatewayTimeout,
          statusText: "Gateway Timeout",
          headers,
        }),
      });
    case StatusCode.HTTPVersionNotSupported:
      return new HTTPException(StatusCode.HTTPVersionNotSupported, {
        message: message,
        res: new Response(null, {
          status: StatusCode.HTTPVersionNotSupported,
          statusText: "HTTP Version Not Supported",
          headers,
        }),
      });
    case StatusCode.VariantAlsoNegotiates:
      return new HTTPException(StatusCode.VariantAlsoNegotiates, {
        message: message,
        res: new Response(null, {
          status: StatusCode.VariantAlsoNegotiates,
          statusText: "Variant Also Negotiates",
          headers,
        }),
      });
    case StatusCode.InsufficientStorage:
      return new HTTPException(StatusCode.InsufficientStorage, {
        message: message,
        res: new Response(null, {
          status: StatusCode.InsufficientStorage,
          statusText: "Insufficient Storage",
          headers,
        }),
      });
    case StatusCode.LoopDetected:
      return new HTTPException(StatusCode.LoopDetected, {
        message: message,
        res: new Response(null, {
          status: StatusCode.LoopDetected,
          statusText: "Loop Detected",
          headers,
        }),
      });
    case StatusCode.NotExtended:
      return new HTTPException(StatusCode.NotExtended, {
        message: message,
        res: new Response(null, {
          status: StatusCode.NotExtended,
          statusText: "Not Extended",
          headers,
        }),
      });
    case StatusCode.NetworkAuthenticationRequired:
      return new HTTPException(StatusCode.NetworkAuthenticationRequired, {
        message: message,
        res: new Response(null, {
          status: StatusCode.NetworkAuthenticationRequired,
          statusText: "Network Authentication Required",
          headers,
        }),
      });
    default:
      return new HTTPException(StatusCode.InternalServerError, {
        message: message,
        res: new Response(null, {
          status: StatusCode.InternalServerError,
          statusText: "Internal Server Error",
          headers,
        }),
      });
  }
};
