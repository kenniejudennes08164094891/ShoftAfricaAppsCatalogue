# Step 1: Build the React app
FROM node:18-alpine as build
WORKDIR /app

# Create a cache directory and set permissions
RUN mkdir -p /.npm && chmod 777 /.npm
ENV NPM_CONFIG_CACHE=/.npm

COPY package*.json ./

# Use --no-audit to save memory and --loglevel notice for better error visibility
RUN npm install --legacy-peer-deps --no-audit --loglevel notice

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]