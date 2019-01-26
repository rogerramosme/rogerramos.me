FROM node AS base

RUN apt-get update && apt-get upgrade --yes && \
	apt-get install --yes autoconf checkinstall libpng-dev libtool make nasm pkg-config && \
	apt-get clean

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /app
COPY package*.json ./

FROM base AS dependencies
RUN npm install

FROM dependencies as source
COPY . .

FROM dependencies AS test
RUN npm run lintjs

FROM test AS release
RUN npm run build

FROM m4rcu5/lighttpd AS final
WORKDIR /var/www/localhost/htdocs
COPY lighttpd.conf /etc/lighttpd/lighttpd.conf
COPY --from=release /app/public .

EXPOSE 80

ENTRYPOINT ["/usr/sbin/lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]
