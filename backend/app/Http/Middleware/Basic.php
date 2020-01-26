<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class Basic
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $auth_user = 'my_user';
        $auth_pass = 'my_password';

        if ($request->getUser() == $auth_user && $request->getPassword() == $auth_pass) {
            return $next($request);
        }
        return new Response([
            'error_msg' => 'Not authorized',
            'error_code' => 401,
            'success' => FALSE
        ], 401);
    }
}
