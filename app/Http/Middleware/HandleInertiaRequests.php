<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // Add shared props here (e.g., auth, flash messages, etc.)
            'auth' => [
                'user' => $request->user(),
            ],
        ]);
    }

    /**
     * Define the assets that are included by default.
     *
     * @return array
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }
}