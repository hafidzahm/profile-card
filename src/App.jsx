const SocialMediaButton = ({icon}) => {
  return (
    <button>
      <i className={`fa-brands fa-${icon}`}></i>
    </button>
  )
}
const CardTop = ({icon}) => {
  return (
    <div className="top" >
      <div className="social-buttons right">
        <SocialMediaButton icon='facebook'/>
        <SocialMediaButton icon='twitter'/>
        <SocialMediaButton icon='instagram'/>
      </div>

      <div className="social-buttons">
      <SocialMediaButton icon='github'/>
      <SocialMediaButton icon='linkedin'/>
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
