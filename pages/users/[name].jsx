import Profile from "../Profile";
import css from "styled-jsx/css";

const style = css`
  .user-constents-wrapper {
    display: flex;
    padding: 20px;
  }

  .repos-wrapper {
    width: 100%;
    height: 100vh;
    overflow: scroll;
    padding: 0px 16px;
  }

  .repos-header {
    padding: 16px 0;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #303030;
  }

  .repos-count {
    display: inline-block;
    padding: 2px 5px;
    margin-left: 6px;
    font-size: 12px;
    font-weight: 600;
    line-height: 1;
    color: #303030;
    background-color: rgba(27, 31, 35, 0.08);
    border-radius: 20px;
  }
`;

const name = ({ user, repos }) => {
  if (!user) {
    return (<h1>null</h1>);
  }
  return (
    <div className="user-contents-wrapper">
      <Profile user={user} />
      <div className="repos-wrapper">
        <div className="repos-header">
          Repositories
          <span className="repos-count">{user.public_repos}</span>
        </div>
      </div>
      <style jsx>{style}</style>
    </div>
  );
};
export const getServerSideProps = async ({ query }) => {
    const { name } = query;
    try {
        let user;
        let repos;

        const userRes = await fetch(`https://api.github.com/users/${name}`);
        if (userRes.status === 200) {
            const user = await userRes.json();
            return { props: { user } };
        }
        const reposRes = await fetch(
            `https://api.github.com/users/${name}/repos?sort=updated&page=1&per_page=10`
        );
        if (repoRes === 200) {
            const repos = await reposRes.json();
            return { props: {repos} };
        }

        return { props: {} };
    } catch(e) {
        console.log(e);
        return { props: {} };
    }
};

export default name;