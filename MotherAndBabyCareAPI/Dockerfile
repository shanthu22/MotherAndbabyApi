# Use official Node.js image as the base image
FROM node:14

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port on which your Node.js application runs
EXPOSE 3001
# Command to run the application
CMD ["npm", "start"]
