FROM alpine
# FROM node:12-alpine

RUN apk add --no-cache bash postgresql=12.2-r0 nodejs yarn

# ------------------------------------------
# change the working directory
# ------------------------------------------
WORKDIR /node-app

# ------------------------------------------
# copy content
# ------------------------------------------
COPY . .

# ------------------------------------------
# install dependences
# ------------------------------------------
RUN yarn install --production=true --non-interactive --silent

# ------------------------------------------
# yarn entrypoint
# ------------------------------------------
#ENTRYPOINT ["yarn"]

CMD ["/bin/bash"]
