<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class DeleteController extends Controller
{
    public function delete(Request $req) {
        $username = $req->input('username');

        User::where('username', $username)->delete();

        return 'success';
    }
}
