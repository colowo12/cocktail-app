import Cocktails from "../components/Cocktails";

function Home({ data }) {
  return <Cocktails data={data} />;
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
  );
  const data = await res.json();

  return { props: { data } };
}

export default Home;
