# s'weather

## running locally

1. Clone this repository to your local machine.
2. Switch to Node v20 using whatever version manager you prefer.
3. Open __two__ terminal processes (windows or tabs), enter the `client/`
   directory in one and the `server/` directory in the other.
4. In each terminal process, run `npm install`.
5. In both directories, copy the `.env.example` file to a new sibling `.env`
   file.
6. In the `server/` terminal instance, run `npm run start`. This will sync type
   files with the `client/` directory, then start the server.
7. In the `client/` terminal instance, run `npm run dev`. This will start the
   client server.
8. Go to [`http://localhost:3000`](http://localhost:3000) in your browser to
   see the frontend, or
[`http://localhost:8000/graphql`](http://localhost:8000/graphql) to see the
graphql sandbox.
