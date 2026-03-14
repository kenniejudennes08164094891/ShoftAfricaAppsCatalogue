# Use a tiny Nginx image
FROM nginx:stable-alpine

# Copy the build folder that was created by the VPS natively
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]