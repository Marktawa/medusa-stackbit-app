function stackbit_process_cwd_shim() { return "/workspace/medusa-stackbit-app/tutorial-nextjs-files" }
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.js
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);

// .stackbit/models/button.js
var button = {
  type: "object",
  fields: [
    { name: "label", type: "string" },
    { name: "url", type: "string" },
    { name: "theme", type: "enum", options: ["default", "outline"] }
  ]
};

// .stackbit/models/hero.js
var hero = {
  type: "object",
  fields: [
    { name: "heading", type: "string" },
    { name: "body", type: "markdown" },
    {
      name: "image",
      type: "object",
      fields: [
        { name: "src", type: "image" },
        { name: "alt", type: "string" }
      ]
    },
    { name: "button", type: "model", models: ["button"] },
    { name: "theme", type: "enum", options: ["imgLeft", "imgRight"] }
  ]
};

// .stackbit/models/page.js
var page = {
  type: "page",
  hideContent: true,
  urlPath: "/{slug}",
  fields: [
    { name: "title", type: "string", required: true },
    {
      name: "sections",
      type: "list",
      items: {
        type: "model",
        models: ["hero", "stats"]
      }
    }
  ]
};

// .stackbit/models/stats.js
var stats = {
  type: "object",
  fields: [
    { name: "heading", type: "string" },
    { name: "body", type: "markdown" },
    {
      name: "stats",
      type: "list",
      items: {
        type: "object",
        fields: [
          { name: "label", type: "string" },
          { name: "value", type: "string" }
        ]
      }
    },
    { name: "theme", type: "enum", options: ["primary", "dark"] }
  ]
};

// stackbit.config.js
var stackbit_config_default = {
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  cmsName: "git",
  pagesDir: "content/pages",
  assets: {
    referenceType: "static",
    staticDir: "public",
    uploadDir: "images",
    publicPath: "/"
  },
  models: { button, hero, page, stats }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=stackbit.config.OZJSTMMN.cjs.map
