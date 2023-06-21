import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

import { addMember } from "../slices/memberSlice";

import Layout from "../components/Layout";

const HomePage = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(
      addMember({
        id: 1,
        name: "Cenk",
        lastName: "SARI",
        emailAddress: "cenk@cenksari.com",
      })
    );
  };

  return (
    <Layout>
      <section>
        <h1>Add Data</h1>
        <p>
          <button type="button" onClick={() => handleLogin()}>
            Add
          </button>
        </p>
      </section>
    </Layout>
  );
};

export default HomePage;
