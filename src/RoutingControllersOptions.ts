import {ClassTransformOptions} from "class-transformer";
import {ValidatorOptions} from "class-validator";
import {AuthorizationChecker} from "./AuthorizationChecker";
import {CurrentUserChecker} from "./CurrentUserChecker";

/**
 * Routing controller initialization options.
 */
export interface RoutingControllersOptions {

    /**
     * Global route prefix, for example '/api'.
     */
    routePrefix?: string;

    /**
     * List of controllers to register in the framework or directories from where to import all your controllers.
     */
    controllers?: Function[]|string[];

    /**
     * List of middlewares to register in the framework or directories from where to import all your middlewares.
     */
    middlewares?: Function[]|string[];

    /**
     * Indicates if class-transformer should be used to perform serialization / deserialization.
     */
    classTransformer?: boolean;

    /**
     * Global class transformer options passed to class-transformer during classToPlain operation.
     * This operation is being executed when server returns response to user.
     */
    classToPlainTransformOptions?: ClassTransformOptions;

    /**
     * Global class transformer options passed to class-transformer during plainToClass operation.
     * This operation is being executed when parsing user parameters.
     */
    plainToClassTransformOptions?: ClassTransformOptions;

    /**
     * Indicates if class-validator should be used to auto validate objects injected into params.
     * You can also directly pass validator options to enable validator with a given options.
     */
    validation?: boolean|ValidatorOptions;

    /**
     * Indicates if development mode is enabled.
     * By default its enabled if your NODE_ENV is not equal to "production".
     */
    development?: boolean;

    /**
     * Indicates if default routing-controller's error handler is enabled or not.
     * Enabled by default.
     */
    defaultErrorHandler?: boolean;

    /**
     * Map of error overrides.
     */
    errorOverridingMap?: { [key: string]: any };

    /**
     * Special function used to check user authorization roles per request.
     * Must return true or promise with boolean true resolved for authorization to succeed.
     */
    authorizationChecker?: AuthorizationChecker;

    /**
     * Special function used to get currently authorized user.
     */
    currentUserChecker?: CurrentUserChecker;
    
}