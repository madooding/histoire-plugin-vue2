function t() {
  return {
    name: "@histoire/plugin-vue2",
    defaultConfig() {
      return {
        supportMatch: [
          {
            id: "vue",
            patterns: ["**/*.vue"],
            pluginIds: ["vue2"]
          }
        ]
      };
    },
    supportPlugin: {
      id: "vue2",
      moduleName: "@histoire/plugin-vue2",
      setupFn: "setupVue2",
      importStoryComponent: (e, u) => `const Comp${u} = () => import(${JSON.stringify(e.moduleId)})`
    }
  };
}
function n(e) {
  return e;
}
export {
  t as HstVue,
  n as defineSetupVue2
};
