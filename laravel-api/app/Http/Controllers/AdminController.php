<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function createEmployee(Request $req)
    {
        $employee = new Employee();

        $employee->id = $req->id;
        $employee->name = $req->name;
        $employee->number = $req->number;
        $employee->username = $req->username;
        $employee->password = $req->password;

        $employee->save();

        return response()->json($employee, 200);
    }

    public function employeeList()
    {
        $employees = Employee::all();

        return response()->json($employees, 200);
    }
}