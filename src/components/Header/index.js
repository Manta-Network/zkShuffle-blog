// TODO: need update header link infos

export const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Posts',
    href: '/posts/',
  },
  {
    title: 'GitHub',
    href: 'https://github.com/Poseidon-ZKP',
  },
  {
    title: 'Twitter',
    href: 'https://twitter.com/poseidon_zk',
  },
];

function Header() {
  return (
    <div id="nav-border" className="container">
      <nav id="nav" className="nav justify-content-center">
        {links.map((item) => {
          return (
            <a key={item.title} className="nav-link" href={item.href}>
              {item.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
export default Header;
