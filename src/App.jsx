export default function App() {
  const gallerys = [
    {src : "images/pic1.jpg",alt : "Closeup of a human eye"},
    {src : "images/pic2.jpg",alt : "Rock that looks like a wave"},
    {src : "images/pic3.jpg",alt : "Purple and white pansies"},
    {src : "images/pic4.jpg",alt : "Section of wall from a pharoah's tomb"},
    {src : "images/pic5.jpg",alt : "Large moth on a leaf"}
  ];
  return (
    <>
      <h1>Image gallery example</h1>
      <div className="full-img">
        <img
          className="displayed-img"
          src="images/pic1.jpg"
          alt="Closeup of a human eye"
        />
        <div className="overlay"></div>
        <button className="dark">Darken</button>
      </div>
      <div className="thumb-bar">
        {gallerys.map((image,index) => {
          return (
            <img key = {index} src = {image.src} alt = {image.alt}/>
          );
        })}
      </div>
    </>
  );
}