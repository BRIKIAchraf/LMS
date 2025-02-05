
#use the Aws Lambda Node.js 20 base image
FROM  public.ecr.aws/Lambda/nodejs:20 AS build

# set the working directory 
WORKDIR /app


#COpy package.json and package.lock.json
COPY npm install

# copy the rest of your application's source code 

COPY . .

#BUILD TYPESCRIPT FILES 
RUN npm run BUILD
#remove dev dependencies 
RUN npm prune --production 

#use a second stage to prepare the production image 

FROM public.erc.aws/Lambda/nodejs:20

# set the working directory 

WORKDIR ${LAMBDA_TASK_ROOT}

# Copy built javascript files and node_modules from the build image

#Copy built javascript files and node_modules freom the build stage

COPY --from=build /app/dist ${LAMBDA_TASK_ROOT}

COPY --from=build /app/node_modules ${LAMBDA_TASK_ROOT}/node_modules


#Copy package.json (optional)

COPY from build /app/package*.json ${LAMBDA_TASK_ROOT}

#Set environment variables (adjust as needed)

ENV NODE_ENV=production


# Command to start the lambda function 
 CMD ["index.handler"]
