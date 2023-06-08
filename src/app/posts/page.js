import { Fragment } from 'react';

/**
 * this is posts page
 * when you create a new article, you need add it to this page
 * and add a new page folder in pkz-blog/src/app/posts/ ,like pkz-blog/src/app/posts/spartan-ecdsa/
 *
 */
export const data = [
  {
    title: 'Introducing Zug ZK',
    href: '/posts/zug-zk/',
    date: 'June 8, 2023',
    tags: ['intro'],
  },
];

function page() {
  return (
    <div>
      <div id="content">
        <h1>Posts</h1>

        {data.map((item) => {
          return (
            <Fragment key={item.title}>
              <p></p>
              <div>
                <h3>
                  <a className="title" href={item.href}>
                    {item.title}
                  </a>
                </h3>

                <i data-feather="calendar"></i>
                <time>{item.date}</time>

                <i data-feather="tag"></i>
                <>
                  {item.tags.map((tagItem, index) => (
                    <a
                      key={index}
                      className="btn btn-sm btn-outline-dark tag-btn"
                    >
                      {tagItem}
                    </a>
                  ))}
                </>
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className="flexCenter">
        <p className="footer text-center">© 2023 Zug ZK</p>
      </div>
    </div>
  );
}

export default page;
