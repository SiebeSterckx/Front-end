#Dockerfile front-end
FROM node:17-alpine
ENV PATH /app/node_modules/.bin:$PATH
WORKDIR /workdir
COPY package*.json ./
RUN npm install --silent
copy . .
CMD ["npm", "start"]
