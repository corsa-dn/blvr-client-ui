# Bulvar Client UI

Клиентский интерфейс Bulvar на Nuxt 4 с SSR и предрендером отдельных страниц.

## Стек

- Nuxt 4, Vue 3, TypeScript
- Nuxt UI, Nuxt Image, Nuxt Fonts
- Pinia, FormKit Auto Animate

## Требования

- Node.js 18+
- npm или yarn

## Установка

```bash
# npm
npm install

# yarn
yarn install
```

## Разработка

```bash
# npm
npm run dev

# yarn
yarn dev
```

## Сборка и предпросмотр

```bash
# npm
npm run build
npm run preview

# yarn
yarn build
yarn preview
```

## Генерация статического сайта

```bash
# npm
npm run generate

# yarn
yarn generate
```

## Рендеринг и маршруты

- SSR включен по умолчанию.
- Предрендер: `/`, `/contacts`.
- Клиентский рендеринг: `/deals/**`.

## Структура проекта

- `app/` — страницы, компоненты, стили, assets
- `public/` — статические файлы
- `nuxt.config.ts` — конфигурация Nuxt, модули и route rules

## Полезные скрипты

- `dev` — запуск дев-сервера
- `build` — сборка
- `preview` — локальный предпросмотр сборки
- `generate` — статическая генерация
