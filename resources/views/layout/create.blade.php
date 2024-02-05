@extends('layout.main')
@section('main')
    <div class="container mt-5">
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li class="text-danger">{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form method="POST" action="{{ route('store') }}" enctype="multipart/form-data">
            @csrf

            <div class="form-group">
                <label for="libelle">Libelle</label>
                <input type="text" class="form-control" name="libelle" placeholder="Libelle">
            </div>

            <div class="form-group">
                <label for="prix">Prix</label>
                <input type="text" class="form-control" name="prix" placeholder="Prix">
            </div>

            <div class="form-group">
                <label for="quantite">Quantite</label>
                <input type="text" class="form-control" name="quantite" placeholder="Quantite">
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" name="description" placeholder="Description" cols="30" rows="10"></textarea>
            </div>

            <div class="form-group">
                <label for="type">Type</label>
                <select class="form-control" name="type">
                    <option value="electronique">Electronique</option>
                    <option value="eletricite">Eletricite</option>
                    <option value="informatique">Informatique</option>
                </select>
            </div>

            <div class="form-group">
                <label for="image">Image</label>
                <input type="file" class="form-control-file" name="image">
            </div>

            <button type="submit" class="btn btn-primary">Create Product</button>
        </form>
    </div>
@endsection
