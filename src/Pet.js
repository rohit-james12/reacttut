import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, location, images, id }) => {
  let hero = "http://pet-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    // <div>
    //   <h1>{name}</h1>
    //   <h2>{animal}</h2>
    //   <h2>{breed}</h2>
    //   <h3>{location}</h3>
    //   <img src={images[0]} alt="None" />
    // </div>
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
