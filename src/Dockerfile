# Step 1: Build the React app
# We use 'slim' instead of 'alpine' for better stability with npm install
FROM node:18-slim as build

# Set working directory
WORKDIR /app

# Step 2: Fix for Error 254
# We increase memory limit for Node and set a safe cache location
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN mkdir -p /app/.npm-cache && chmod -R 777 /app/.npm-cache
ENV NPM_CONFIG_CACHE=/app/.npm-cache

# Copy dependency files
COPY package*.json ./

# Install with flags to prevent memory crashes
RUN npm install --legacy-peer-deps --no-audit --loglevel notice

# Copy source and build
COPY . .
RUN npm run build

# Step 3: Serve with Nginx
FROM nginx:stable-alpine
# react-scripts build outputs to 'build/', so we copy from there
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]