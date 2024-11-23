const socialMedia = [
  {
    icon:'facebook',
    href:''
  },
  {
    icon:'instagram',
    href:'https://www.instagram.com/hafizh.dev/'
  },
  {
    icon:'twitter',
    href:''
  },
  {
    icon:'linkedin',
    href:'https://www.linkedin.com/in/abdul-hafizh-mahfudin-a98a23248' 
  },
  {
    icon:'github',
    href:'https://github.com/hafidzahm' 
  }
]
const SocialMediaButton = ({icon, link}) => {
  return (
    <button onClick={() => window.open(link, '_blank')}>
      <i className={`fa-brands fa-${icon}`}></i>
    </button>
  )
}

const SocialMediaContainer = ({icon}) => {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeftPosition = socialMedia.slice(0, middleIndex)
  const socialRightPosition = socialMedia.slice(middleIndex)

  return (
    <>
        <div className="social-buttons">
          {socialLeftPosition.map((data, index) => (
            <SocialMediaButton icon={data.icon} key={index} link={data.href}/>
          ))}
        </div>

        <div className="social-buttons right">
          {socialRightPosition.map((data, index) => (
            <SocialMediaButton icon={data.icon} key={index} link={data.href}/>
          ))}
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
