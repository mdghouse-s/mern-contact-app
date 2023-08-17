
# FROM node:18.12.1-buster-slim AS builder

FROM node:16.20-alpine AS build
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# RUN touch /var/run/nginx.pid
# RUN chown -R nginx:nginx /var/run/nginx.pid /usr/share/nginx/html /var/cache/nginx /var/log/nginx /etc/nginx/conf.d
# USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]