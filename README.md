## REVVEKA Site (Next.js / React / Tailwind)

### Требования
- Node.js 18+ (рекомендуется LTS)
- npm (поставляется с Node)

### Установка
```bash
npm install
```

### Режим разработки
```bash
npm run dev
```
Приложение откроется на http://localhost:3000.

### Сборка и запуск (production)
```bash
npm run build
# PORT можно задать через переменную окружения, по умолчанию 3000
PORT=3000 npm run start
```
`next start` автоматически читает `process.env.PORT`.

### Линт
```bash
npm run lint
```

### Скрипты (package.json)
- `dev` — локальная разработка
- `build` — production-сборка
- `start` — запуск собранного приложения (`next start`)
- `lint` — ESLint

### Деплой
- В `next.config.ts` задано `output: "standalone"`, чтобы собрать минимальный набор для запуска (`.next/standalone`).
- Для сервера достаточно: `npm install`, `npm run build`, затем `PORT=<port> npm run start`.

### Полезное
- Игнорируемые файлы перечислены в `.gitignore` (node_modules, .next, env и т.д.).
