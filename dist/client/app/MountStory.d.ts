import { PropType as _PropType } from '@histoire/vendors/vue';
import type { Story } from '@histoire/shared';
declare const _default: import("@histoire/vendors/vue").DefineComponent<{
    story: {
        type: _PropType<Story>;
        required: true;
    };
}, {
    el: import("@vue/reactivity").Ref<HTMLDivElement>;
}, unknown, {}, {}, import("@histoire/vendors/vue").ComponentOptionsMixin, import("@histoire/vendors/vue").ComponentOptionsMixin, {}, string, import("@histoire/vendors/vue").VNodeProps & import("@histoire/vendors/vue").AllowedComponentProps & import("@histoire/vendors/vue").ComponentCustomProps, Readonly<import("@histoire/vendors/vue").ExtractPropTypes<{
    story: {
        type: _PropType<Story>;
        required: true;
    };
}>>, {}>;
export default _default;
