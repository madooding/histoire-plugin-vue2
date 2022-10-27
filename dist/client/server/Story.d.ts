import { PropType } from 'vue';
import type { ServerStory } from '@histoire/shared';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: any;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    group: {
        type: StringConstructor;
        default: any;
    };
    layout: {
        type: PropType<import("@histoire/shared").StoryLayout>;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconColor: {
        type: StringConstructor;
        default: any;
    };
    docsOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    story: ServerStory;
}, {}, {}, {}, import("vue/types/v3-component-options").ComponentOptionsMixin, import("vue/types/v3-component-options").ComponentOptionsMixin, {}, string, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: any;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    group: {
        type: StringConstructor;
        default: any;
    };
    layout: {
        type: PropType<import("@histoire/shared").StoryLayout>;
        default: any;
    };
    icon: {
        type: StringConstructor;
        default: any;
    };
    iconColor: {
        type: StringConstructor;
        default: any;
    };
    docsOnly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    id: string;
    title: string;
    group: string;
    layout: import("@histoire/shared").StoryLayout;
    icon: string;
    iconColor: string;
    docsOnly: boolean;
}>;
export default _default;
