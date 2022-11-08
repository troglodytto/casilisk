export declare const CONVERTERS: {
    SNAKE: (string?: string) => string;
    CAMEL: (string?: string) => string;
    KEBAB: (string?: string) => string;
    PASCAL: (string?: string) => string;
    MACRO: (string?: string) => string;
};
declare const casilisk: <T extends Record<string, any> = Object, O = any>(object: T, convertor?: (string?: string) => string) => O;
export default casilisk;
