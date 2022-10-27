export declare const RouterLinkStub: import("vue").DefineComponent<{
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        required: true;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    exact: BooleanConstructor;
    exactPath: BooleanConstructor;
    append: BooleanConstructor;
    replace: BooleanConstructor;
    activeClass: StringConstructor;
    exactActiveClass: StringConstructor;
    exactPathActiveClass: StringConstructor;
    event: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
}, {}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    to: {
        type: (ObjectConstructor | StringConstructor)[];
        required: true;
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
    exact: BooleanConstructor;
    exactPath: BooleanConstructor;
    append: BooleanConstructor;
    replace: BooleanConstructor;
    activeClass: StringConstructor;
    exactActiveClass: StringConstructor;
    exactPathActiveClass: StringConstructor;
    event: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
}>>, {
    replace: boolean;
    tag: string;
    exact: boolean;
    exactPath: boolean;
    append: boolean;
    event: string | unknown[];
}>;
