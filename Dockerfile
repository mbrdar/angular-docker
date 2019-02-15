# --- Build ----
FROM gmathieu/node-browsers:2.0.0 AS build

COPY package.json /usr/ui/
WORKDIR /usr/ui
RUN npm install

COPY ./ /usr/ui
RUN npm --version
RUN node --version
RUN npm run build

# ---- Run ----
FROM nginx:1.14-alpine

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY ./dev/nginx.conf /etc/nginx/nginx.conf

COPY --from=build  /usr/ui/dist/angular-docker /usr/share/nginx/html

RUN echo "mainFileName=\"\$(ls /usr/share/nginx/html/main*.js)\" && envsubst '\$BACKEND_API_URL \$DEFAULT_LANGUAGE ' < \${mainFileName} > \${mainFileName} && nginx -g 'daemon off;'" > run.sh

ENTRYPOINT ["sh", "run.sh"]
