export function ProductsNew() {
  return (
    <div>
      <h1>Products New</h1>
      <form action="#" method="POST">
        <label for="html">Name: </label>

        <input type="text" name="name" />
        <br></br>
        <label for="html">Price: </label>

        <input type="text" name="price" />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
