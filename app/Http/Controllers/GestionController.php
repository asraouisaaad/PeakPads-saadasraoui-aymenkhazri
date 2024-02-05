<?php

namespace App\Http\Controllers;

use App\Models\Produit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Symfony\Contracts\Service\Attribute\Required;

class GestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function loginform()
    {
        return view('login');
    }
    /**
     * Display a listing of the resource.
     */
    public function loginstore(Request $request)
    {
        
        $loge=$request->validate([
    
            'login' =>"required|min:5|max:30",
            'type' =>"required",
            'password' => "required|min:5|max:30",
        ]);

            
        if (Auth::attempt($loge)) {

             return redirect()->route('index');
         }
        }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $Produits= Produit::all();
        return view ('layout.index', [
            'produits' => $Produits
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view("layout.create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $formFields=$request->validate([
            'libelle'=>'required|min:3',
            'prix'=>'required|max:200',
            'quantite'=>'required|max:2000',
            'description'=>'required',
            'type'=>'required',
            'image'=>'image|required|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if($request->hasFile('image')){
            $formFields['image']= $request->file('image')->store('images','public');
        }
        Produit::create([
            'libelle'=>$formFields['libelle'],
            'prix'=>$formFields['prix'],
            'quantite'=>$formFields['quantite'],
            'description'=>$formFields['description'],
            'type'=>$formFields['type'],
            'image'=>$formFields['image'],
        ]);

        return redirect()->route('index')->with('message','Product created successfully');
   
    }

    /**
     * Display the specified resource.
     */
    public function show(Produit $produit)
    {
        return view('layout.show', ['produit' => $produit]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(produit $produit)
    {
        return view('layout.edit', ['produit' => $produit]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Produit $produit)
    {
        $FormFields = $request->validate([
            'libelle'=>'required|min:3',
            'prix'=>'required|max:200',
            'quantite'=>'required|max:2000',
            'description'=>'required|max:2000',
            'type'=>'required',
            'image'=>'image|required|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
        if($request->hasFile("image")){
            if ($produit->image) {
                Storage::disk('public')->delete($produit->image);
            }
            $FormFields['image']=$request->file("image")->store('images',"public");
        }
        $produit->fill($FormFields)->save();
        return redirect()->route('index')->with('message', 'Product updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Produit $produit)
    {
        // dd($produit);
        if ($produit->image) {
            Storage::disk('public')->delete($produit->image);
        }
        $produit->delete();
        return redirect()->route('index')->with('message', 'Product deleted successfully');
    }
}
