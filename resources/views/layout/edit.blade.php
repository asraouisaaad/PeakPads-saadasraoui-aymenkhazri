@extends('layout.main')
@section('main')

<div class="container mt-5">
    <form method="POST" action="{{ route('update', $produit->id) }}" enctype="multipart/form-data">
        @csrf
        @method('PUT')

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
                <option value="electricite">Electricite</option>
                <option value="informatique">Informatique</option>
            </select>
        </div>

        <div class="form-group">
            <label for="image">Image</label>
            <input type="file" class="form-control-file" name="image">
        </div>

        <button type="submit" class="btn btn-primary">Edit Product</button>
    </form>
</div>
@endsection
