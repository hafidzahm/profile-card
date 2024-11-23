const SocialMediaButton = ({icon}) => {
  return (
    <button>
      <i className={`fa-brands fa-${icon}`}></i>
    </button>
  )
}

const SocialMediaContainer = ({icon}) => {
  return (
    <>
        <div className="social-buttons right">
        <SocialMediaButton icon='facebook' />
        <SocialMediaButton icon='twitter' />
        <SocialMediaButton icon='instagram'/>  
    </div>
    <div className="social-buttons">
              <SocialMediaButton icon='github'/>
        <SocialMediaButton icon='linkedin'/>
    </div>
    </>
  )
}
const CardTop = ({icon}) => {
  return (
    <div className="top" >
      <SocialMediaContainer icon={icon}/>

      <div className="text">
        <div className="name-wrapper">
          <div className="name">Black Cat</div></div>
        <div className="title">Meowengineer</div>
      </div>
    </div>
  );
};

const CardBottom = (nameBadge) => {
  return (
    <div className="bottom">
      <div className="desc">
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea non earum
        nisi perspiciatis hic temporibus nemo ratione? Possimus, modi nostrum
        culpa recusandae, atque ut molestias ducimus architecto repellendus rem
        facere.
        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea non earum
        nisi perspiciatis hic temporibus nemo ratione? Possimus, modi nostrum
        culpa recusandae, atque ut molestias ducimus architecto repellendus rem
        facere.
        </p>
      </div>

      <BadgeContainer nameBadge={nameBadge} />
    </div>
  );
};

const BadgeContainer = ({nameBadge}) => {
  return (
    <div className="buttons">
      <BadgeItem nameBadge={'PhD'} />
      <BadgeItem nameBadge={'Meowengineer'} />
      <BadgeItem nameBadge={'3DGeeek'} />
      </div>
  )
}

const BadgeItem = ({nameBadge}) => {
  return (
        <button>
          <div className="height">{nameBadge}</div>
        </button>
  )
}

const Card = () => {
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
