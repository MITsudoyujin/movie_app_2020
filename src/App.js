import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Spagetti",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20130116_59%2Fdjelslsj_1358312238038BwSIh_JPEG%2F%25B0%25ED%25C3%25DF%25C0%25E5%25BD%25BA%25C6%25C4%25B0%25D4%25C6%25BC.jpg&type=b400",
    rating: 5,
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fldb.phinf.naver.net%2F20200327_234%2F1585268526599epEr2_PNG%2FMIZQpF7icRxg0hlKHpvbRYBz.PNG.png&type=b400",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Cola",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fpost.phinf.naver.net%2FMjAxNjExMjVfMTQ3%2FMDAxNDgwMDY2MTM4MDcy.W_7V-qdagBF5Ayd8lZnaNzJ7b0FLOMvt0WvXJzKUyegg.P3cld19FR0Pc3x1jUPKP1MZ7zF-pIfxZvRID9Mpq_Bsg.JPEG%2FItqNgLX7SC83d4FnkARJxetSvCIY.jpg&type=b400",
    rating: 3.9,
  },
  {
    id: 4,
    name: "Hamburger",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F469%2F2017%2F07%2F06%2F0000215313_001_20170709221652510.jpg&type=b400",
    rating: 4.6,
  },
];
function Food({ name, picture, rating }) {
  return (
    <div>
      <h2> I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
