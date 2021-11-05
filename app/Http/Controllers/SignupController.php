<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class SignupController extends Controller
{
    public function register(Request $req) {
        $username = $req->input('username');
        $email = $req->input('email');
        $password = $req->input('password');

        // Store pasword as hashes
        $passwordHash = hash('sha256', $password);

        $data = array(
            'username' => $username,
            'email' => $email,
            'password_hash' => $passwordHash
        );

        User::insert($data);

        return 'success';
    }
}
