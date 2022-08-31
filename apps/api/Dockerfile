FROM node:18-slim as builder
WORKDIR /api
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM node:18-slim as runner
WORKDIR /api
COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile
COPY --from=builder /api/dist ./dist/
CMD ["node", "."]
