<div class="form-group row">
    <label for="name" class="col-4 col-form-label">Name</label>
    <div class="col-8">
        <input id="name" name="name" type="text" class="form-control" required="required" value="{{ $store->name ?? '' }}">
    </div>
</div>
<div class="form-group row">
    <label for="address" class="col-4 col-form-label">Address</label>
    <div class="col-8">
        <textarea id="address" name="address" cols="40" rows="5" class="form-control" aria-describedby="addressHelpBlock" required="required">{{ $store->address ?? '' }}</textarea>
        <span id="addressHelpBlock" class="form-text text-muted">Enter the store address</span>
    </div>
</div>
<div class="form-group row">
    <div class="offset-4 col-8">
        <button name="submit" type="submit" class="btn btn-primary">Submit</button>
    </div>
</div>
