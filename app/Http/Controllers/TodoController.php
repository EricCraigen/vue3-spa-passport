<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Todo::orderBy('created_at', 'DESC')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $new_todo = new Todo;
        $new_todo->name = $request->todo['name'];
        $new_todo->group = $request->todo['group'];
        $new_todo->status = $request->todo['status'];
        $new_todo->completed = false;
        $new_todo->save();

        return $new_todo;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function edit(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Todo $todo)
    {
        $existing_todo = Todo::find($todo['id']);
        if ($existing_todo) {
            $existing_todo->group = $request->todo['group'] ? $request->todo['group'] : null;
            $existing_todo->status = $request->todo['status'] ? $request->todo['status'] : null;
            $existing_todo->completed = $request->todo['completed'] ? true : false;
            $existing_todo->completed_at = $request->todo['completed'] ? now() : null;
            $existing_todo->save();
            return $existing_todo;
        } else {
            return "Todo not found!";
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Todo  $todo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Todo $todo)
    {
        // return $todo;
        // dd($todo);
        $existing_todo = Todo::find(1);
        if ($existing_todo) {
            $existing_todo->delete();
            return "Todo successfully deleted!";
        } else {
            return "Todo not found!";
        }
    }
}
