<form>
    <div class="form-group row">
        <label for="name" class="col-4 col-form-label">Name</label>
        <div class="col-8">
            <input id="name" name="name" type="text" class="form-control" required="required" value="{{ $article->name ?? '' }}">
        </div>
    </div>
    <div class="form-group row">
        <label for="description" class="col-4 col-form-label">Description</label>
        <div class="col-8">
            <textarea id="description" name="description" cols="40" rows="5" class="form-control" required="required">{{ $article->description ?? '' }}</textarea>
        </div>
    </div>
    <div class="form-group row">
        <label for="price" class="col-4 col-form-label">Price</label>
        <div class="col-8">
            <div class="input-group">
                <div class="input-group-prepend">
                    <div class="input-group-text">
                        <i class="fa fa-dollar"></i>
                    </div>
                </div>
                <input id="price" name="price" placeholder="00.0" type="text" class="form-control" required="required" value="{{ $article->price ?? '' }}">
            </div>
        </div>
    </div>
    <div class="form-group row">
        <label for="total_in_shelf" class="col-4 col-form-label">Total in shelf</label>
        <div class="col-8">
            <input id="total_in_shelf" name="total_in_shelf" type="text" class="form-control" required="required" value="{{ $article->total_in_shelf ?? '' }}">
        </div>
    </div>
    <div class="form-group row">
        <label for="total_in_vault" class="col-4 col-form-label">Total in Vault</label>
        <div class="col-8">
            <input id="total_in_vault" name="total_in_vault" type="text" class="form-control" required="required" value="{{ $article->total_in_vault ?? '' }}">
        </div>
    </div>
    <div class="form-group row">
        <div class="offset-4 col-8">
            <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
    </div>
</form>
