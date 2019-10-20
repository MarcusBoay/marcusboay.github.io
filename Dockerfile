FROM node:12.11.1-alpine

#who knows what this is????
ENV COMPlus_EnableDiagnostics=0
WORKDIR /usr/share/marcusboay_dev_website

EXPOSE 5000
COPY . .
RUN cd /usr/share/marcusboay_dev_website
RUN yarn
RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "-l", "5000", "./build"]