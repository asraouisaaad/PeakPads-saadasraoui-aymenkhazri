@extends('layout.main')
@section('main')

<h1 class="text-center mt-5">Information sur le produit ID: {{ $produit['id'] }}</h1>

<div class="container mt-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <img src="{{ asset("storage/".$produit['image']) }}" class="img-fluid" alt="Product Image">
        </div>

        <div class="col-md-6">
            <table class="table table-bordered">
                <thead class="thead-dark">
                    <tr>
                        <th>Référence</th>
                        <th>Libelle</th>
                        <th>Prix</th>
                        <th>Quantite</th>
                        <th>Description</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ $produit['id'] }}</td>
                        <td>{{ $produit['libelle'] }}</td>
                        <td>{{ $produit['prix'] }}</td>
                        <td>{{ $produit['quantite'] }}</td>
                        <td>{{ $produit['description'] }}</td>
                        <td>{{ $produit['type'] }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

@endsection
