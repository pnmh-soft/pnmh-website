export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: {enabled: true},
    pages: true,
    modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/fonts", "@nuxt/image"],
    css: [
        "~/assets/css/main.css",
    ],
    i18n: {
        defaultLocale: "pl",
        locales: [
            { code: "en", name: "English", file: "en.json" },
            { code: "pl", name: "Polish", file: "pl.json" }
        ]
    }
});