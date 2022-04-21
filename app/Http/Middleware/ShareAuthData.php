<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShareAuthData
{
    public function handle(Request $request, Closure $next)
    {
        Inertia::share('user_picture', function () {
            if (!Auth::user()) return '';
            return Auth::user()->adminlte_image();
        });

        return $next($request);
    }
}
