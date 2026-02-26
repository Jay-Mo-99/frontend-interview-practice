import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function goToPage(pageName: string) {
    navigate(`/${pageName}`);
  }
  return (
    <>
      <h1>Pagination</h1>
      <button onClick={() => goToPage("Offset")}>Offset</button>
      <button onClick={() => goToPage("Cursor")}>Cursor</button>
    </>
  );
}
