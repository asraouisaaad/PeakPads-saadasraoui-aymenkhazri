@extends('layout.main')

@section('main')
<div class="container mt-5">
    <h1>Liste des produits</h1>
    <a href="{{ route('create') }}"><button class="btn btn-secondary">Create</button></a>

    <table class="table table-bordered">
        <thead class="thead-dark">
            <tr>
                <th>référence</th>
                <th>libellé</th>
                <th>prix</th>
                <th>quantité</th>
                <th>description</th>
                <th>type</th>
                <th>image</th>
                <th>actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($produits as $produit)
            <tr>
                <td>{{ $produit['id'] }}</td>
                <td>{{ $produit['libelle'] }}</td>
                <td>{{ $produit['prix'] }}</td>
                <td>{{ $produit['quantite'] }}</td>
                <td>{{ $produit['description'] }}</td>
                <td>{{ $produit['type'] }}</td>
                
                <td>
                    <img src="storage/{{ $produit['image'] }}" width="100" alt="image">
                </td>
        
                <td>
                    <a href="{{ route('edit', $produit['id']) }}"><button class="btn btn-primary">Edit</button></a>
                    <a href="{{ route('show', $produit['id']) }}"><button class="btn btn-success">Show</button></a>

                    <form method="POST" action="{{ route('product.destroy', $produit['id']) }}">
                        @csrf
                        @method('delete')

                        <button type="submit" class="btn btn-danger">Delete</button>

                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@endsection
