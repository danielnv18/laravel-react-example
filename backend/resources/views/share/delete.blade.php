<form action="{{ route($route, $model) }}" method="POST">
    @csrf
    @method('DELETE')
    <button name="submit" type="submit" class="btn btn-danger">Delete</button>
</form>
