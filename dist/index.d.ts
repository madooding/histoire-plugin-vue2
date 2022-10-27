import type { Plugin } from 'histoire';
import type { Story, Variant } from '@histoire/shared';
export declare function HstVue(): Plugin;
declare type Vue2StorySetupReturn = Record<string, any> | void;
export declare type Vue2StorySetupHandler = (payload: {
    app?: Vue;
    story?: Story;
    variant?: Variant;
}) => Promise<Vue2StorySetupReturn> | Vue2StorySetupReturn;
export declare function defineSetupVue2(handler: Vue2StorySetupHandler): Vue2StorySetupHandler;
export {};
