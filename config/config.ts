import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  routes: routes,
  npmClient: "pnpm",
  plugins: [
    "@umijs/plugins/dist/initial-state",
    "@umijs/plugins/dist/model",
    "@umijs/plugins/dist/dva",
    "@umijs/plugins/dist/request",
    "@umijs/plugins/dist/locale",
    "@umijs/plugins/dist/tailwindcss",
    "@umijs/plugins/dist/antd",
  ],

  initialState: {},
  model: {},
  dva: {},
  request: {},
  locale: {
    default: "vi-VN",
  },
  antd: {
    theme: {
      token: {
        // Seed Token
        colorPrimary: "#cc3366",
        fontFamily: "Inter",
        // borderRadius: 2,

        // // Alias Token
        // colorBgContainer: '#f6ffed',
      },
      hashed: false,
    },
  },
  tailwindcss: {},
});
