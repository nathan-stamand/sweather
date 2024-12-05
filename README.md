# s'weather

## running locally

1. Clone this repository to your local machine
2. Open __two__ terminal processes (windows or tabs), enter the `client/` directory
   in one and the `server/` directory in the other.
3. Switch to Node v20
4. In each terminal process, run `npm install`
5. In the `server/` terminal instance, run `npm run start`. This will sync type
   files with the `client/` directory, then start the server.
6. In the `client/` terminal instance, run `npm run dev`. This will start the
   client server.
7. Go to [`http://localhost:3000`](http://localhost:3000) in your browser to see the frontend, or
   [`http://localhost:8000/graphql`](http://localhost:8000/graphql) to see the graphql sandbox.
