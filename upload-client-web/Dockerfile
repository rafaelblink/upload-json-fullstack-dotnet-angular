FROM node AS builder
COPY . ./upload-client-web
WORKDIR /upload-client-web
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx
COPY --from=builder /upload-client-web/dist/upload-client-web/ /usr/share/nginx/html
