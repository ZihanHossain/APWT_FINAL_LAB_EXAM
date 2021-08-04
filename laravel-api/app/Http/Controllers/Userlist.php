<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class Userlist extends Controller
{
    public function getUserList()
    {
        $users = User::all();

        return response()->json($users, 200);
    }

    public function addUser(Request $req)
    {
        $user = new User();

        $user->id = $req->id;
        $user->name = $req->name;
        $user->dept = $req->dept;

        $user->save();

        $users = User::all();

        return response()->json($users, 200);
    }

    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();

        $users = User::all();

        return response()->json($users, 200);
    }

    public function editUser()
    {
        $user = User::find(1);

        $user->name = 'Peep';
        $user->dept = 'Big Peep';

        $user->save();

        $user = User::find(1);

        return response()->json($user, 200);
    }
}