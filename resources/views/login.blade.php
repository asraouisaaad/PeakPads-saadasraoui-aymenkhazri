@extends('layout.main')

@section('main')

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <form method="POST" action="{{ route('loginstore') }}">
                @csrf
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Login</label>
                    <input type="text" class="form-control" name="login" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password">
                </div>
                <div class="mb-3">
                    <label for="type" class="form-label">User Type</label>
                    <select class="form-select" aria-label="Default select example" name="type">
                        <option value="admin">Administrator</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary btn-lg">Submit</button>
            </form>
        </div>
    </div>
</div>

@endsection
