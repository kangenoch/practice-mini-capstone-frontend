export function ProductsNew() {
  return (
    <div>
      <h1>Products New</h1>
      <form action="#" method="POST">
        <label htmlFor="html">Name: </label>
        <input type="text" name="name" />
        <br></br>

        <label htmlFor="html">Price: </label>
        <input type="text" name="price" />
        <br></br>

        <label htmlFor="html">Description: </label>
        <textarea id="description" name="description" />
        <br></br>

        <label htmlFor="html">Image URL: </label>
        <input type="text" name="image_url" />
        <br></br>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
