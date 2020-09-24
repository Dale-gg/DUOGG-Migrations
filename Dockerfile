# FROM alpine
FROM node:12-alpine

RUN apk add --no-cache bash postgresql-dev

# ------------------------------------------
# change the working directory
# ------------------------------------------
WORKDIR /usr/src/app/migrations

ARG NPM_AUTH_PKG

# ------------------------------------------
# copy content
# ------------------------------------------
COPY . .

RUN echo "//npm.pkg.github.com/:_authToken=${NPM_AUTH_PKG}" >> .npmrc

# ------------------------------------------
# install dependences
# ------------------------------------------
RUN yarn install --production=true --non-interactive --silent

RUN rm .npmrc

# ------------------------------------------
# yarn entrypoint
# ------------------------------------------
#ENTRYPOINT ["yarn"]

CMD ["/bin/bash"]
