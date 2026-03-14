# STEP 1: Build Stage
# We use 'slim' instead of 'alpine' to fix the Exit Code 254 compatibility issue
FROM node:18-slim as build

# Set working directory
WORKDIR /app

# Increase Node's memory limit to ensure the build doesn't crash
ENV NODE_OPTIONS="--max-old-space-size=2048"

# Fix permissions for the npm cache to avoid permission-based silent crashes
RUN mkdir -p /app/.npm-cache && chmod -R 777 /app/.npm-cache
ENV NPM_CONFIG_CACHE=/app/.npm-cache

# Copy dependency files
COPY package*.json ./

# Install dependencies with stability flags
RUN npm install --legacy-peer-deps --no-audit --loglevel notice

# Copy the rest of the source code
COPY . .

# Run the build (react-scripts will output to a folder named 'build')
RUN npm run build

# STEP 2: Production Stage (Serving with Nginx)
FROM nginx:stable-alpine

# Copy the generated 'build' folder to the Nginx html directory
# This matches your "build": "react-scripts build" command
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]