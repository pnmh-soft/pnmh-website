export default defineAppConfig({
    ui: {
        colors: {
            primary: 'cyan',
            secondary: 'teal',
            neutral: 'slate',
        }
    },
    icon: {
        size: '24px',
        class: 'icon',
        mode: 'css',
        aliases: {
            'nuxt': 'logos:nuxt-icon',
        },
        cssLayer: 'base',
    }
});
