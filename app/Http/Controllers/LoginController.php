<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class LoginController extends Controller
{
    public function login(Request $req) {

        $username = $req->input('username');
        $password = $req->input('password');

        $passwordHash = hash('sha256', $password);

        $users = User::where('username', $username)->where('password_hash', $passwordHash)->get();

        if(sizeof($users) == 0) return 'fail';
        else return 'success';
    }
}
