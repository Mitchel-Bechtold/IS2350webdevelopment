name: Deploy to GitHub Pages

on:
  push:
    branches: ["main", "develop"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        working-directory: my-react-app
        run: npm ci

      - name: Build React app
        working-directory: my-react-app
        run: npm run build

      - name: Assemble site
        run: |
          mkdir -p _site
          rsync -a --exclude='_site' --exclude='.git' --exclude='.github' --exclude='my-react-app/node_modules' --exclude='my-react-app/src' ./ _site/
          rm -rf _site/my-react-app
          mkdir -p _site/my-react-app
          cp -r my-react-app/dist _site/my-react-app/dist

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: _site

  deploy:
    needs: build
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v5
