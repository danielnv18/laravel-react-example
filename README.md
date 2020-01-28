# laravel-react-example

## Setup
The application has an API built in Laravel and a front-end in React

## Backend Setup
Enter the `backend` folder and run `composer install`. That should install the Laravel migrations and run the seeds. 
When that's is finish run `php artisan serve`. It should create a server in the URL `http://localhost:8000`

#Front-end Setup
Enter the `frontend` folder and run `npm install`. After that just run the development server by typing `npm run dev`

The Fron-end assumes that the backend run in `localhost` in the port `8000`. If that changes, please update the file `http/client.ts` with the correct URL.

One thing to notice is that the fronend asumes that the backend is in the same domain to avoid CORS errors by the browser
