# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Technical Question

### Scales to handle thousands of requests per second

I would approach this scenario from two sides, first is application side and second is database side. From the application side, I would think about increasing system resources like CPU, Memory and IOPs. But best option would be horizontal scaling. I would convert the application to a container-based application with microservices architecture. So it will have the ability to auto scale when necessary. Docker and Kubernetes will help the application to achieve it. From the database side, there are several options we can try. Initially I would try properly indexing tables, which will help with speeding up slow queries. I would implement auto scaling on database instances too. Based on the request coming to the database we can increase the number of instances we use. If most of the requests are get requests, we can use more read replicas and less numbers of write replicas or vice versa. If we still have issues with data loading based on number of requests, a more advanced solution would be to partition tables based on a key like user created date or ID prefixes.


### Provides real-time updates to clients as new data is available

To provide real time updates, applications need to know when data changes on the database. If the application can track differences between data that are displayed in the application currently and data in the database, we can give real time updates to users.  ApolloClient provides an option called data subscriptions that helps to implement real time updates to users using Web Sockets. It basically compares application and database data and updates applications when there is a difference. This would be a possible solution.

