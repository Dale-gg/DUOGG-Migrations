# FROM alpine
FROM node:12-alpine

RUN apk add --no-cache bash postgresql=12.2-r0

# ------------------------------------------
# change the working directory
# ------------------------------------------
WORKDIR /usr/src/app/migrations

ARG NODE_AUTH_TOKEN

# ------------------------------------------
# copy content
# ------------------------------------------
COPY . .

RUN echo "//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}" >> .npmrc

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
