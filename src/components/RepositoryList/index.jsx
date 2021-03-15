import RepositoryItem from "../RepositoryItem";

export default function RepositoryList() {

  var repository = {
    name: "O repo",
    description: "Não sei",
    link: "https://kentcdodds.com/blog/optimize-react-re-renders"
  }
  return (
    <section className="repository-list">
      <h1>Repositories List</h1>
      <ul>
        <RepositoryItem repository={repository}/>          
        <RepositoryItem repository={repository}/>          
        <RepositoryItem repository={repository}/>          
        <RepositoryItem repository={repository}/>          
        <RepositoryItem repository={repository}/>          
      </ul>
    </section>
  );
}
