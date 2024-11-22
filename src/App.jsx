const SocialMediaButton = () => {
  return (
    <button>
      <i className="fa fa-discord"></i>
    </button>

  )
}
const CardTop = () => {
  return (
    <div className="top" >
      <div className="social-buttons right">
        <SocialMediaButton/>
        <SocialMediaButton/>
      </div>

      <div className="social-buttons">
        <button><i>GH</i></button>
        <button><i>X</i></button>
        <button><i>X</i></button>
      </div>

      <div className="text">
        <div className="name-wrapper">
          <div className="name">Black Cat</div></div>
        <div className="title">Meowengineer</div>
      </div>
    </div>
  );
};

const CardBottom = () => {
  return (
    <div className="bottom">
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea non earum
        nisi perspiciatis hic temporibus nemo ratione? Possimus, modi nostrum
        culpa recusandae, atque ut molestias ducimus architecto repellendus rem
        facere.
      </div>
      <div className="buttons">
        <button>phd</button>
        <button>meowngineer</button>
        <button>3dgeek</button>
      </div>
    </div>
  );
};

const Card = ({}) => {
  return (
    <div className="card">
      <CardTop  />
      <CardBottom />
    </div>
  );
};

const App = () => {
  return <Card />;
};

export default App;
