# markdown-view-vue-showdown-02
We can markdown text to htlm view on browser

Nuxt Minimal Starter

## 参考にしたHP
- Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
- [フロントエンド開発にNuxt３を使おう #初心者 - Qiita](https://qiita.com/KoutaKawaguchi1101/items/e2d138403544e545c177)
- [Nuxt3 × Vuetify3 × LangChain × OpenAIでチャットボットを作成してみた #langchain - Qiita](https://qiita.com/tatsuki-tsuchiyama/items/a156b3d633e3dd89696d)


- [ercel AI SDKを使って簡単にチャット風アプリを作るところまでやってみた #Next.js - Qiita](https://qiita.com/yohei_nakamura/items/d8650d0b2d2ad08bf405)

- [Getting Started: Nuxt #nuxt-quickstart](https://sdk.vercel.ai/docs/getting-started/nuxt#nuxt-quickstart)

- [Vuetify3 の基本 - Zenn](https://zenn.dev/bbled/books/vuetify3_book)

## Setup

Make sure to install dependencies:

```bash

# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


## Vuetify3の導入

次に、作成したNuxt3プロジェクトにVuetify3を導入します。

1. 以下のコマンドで、Vuetify3の最新版と、スタイルを適用するのに別途必要なmdiとSASSを開発用の依存関係としてインストールします。

```bash
npm install vuetify@next mdi @mdi/font sass --save-dev
```

2. pluginsディレクトリをルートディレクトリ直下に作成し、その中にvuetify.tsファイルを作成します。vuetify.tsは以下のようにします。

```bash:vuetify.ts
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
    });

    nuxtApp.vueApp.use(vuetify);
});
```

続きは、[Nuxt3 × Vuetify3 × LangChain × OpenAIでチャットボットを作成してみた #langchain - Qiita](https://qiita.com/tatsuki-tsuchiyama/items/a156b3d633e3dd89696d#vuetify3の導入)　を参照してください！！