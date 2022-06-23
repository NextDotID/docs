default_locale := "en"

@start locale=default_locale:
    pnpm run start -- --locale {{locale}}

@build:
    pnpm build
