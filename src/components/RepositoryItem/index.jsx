export default function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{ repository?.name ?? 'Ok Default!'}</strong>
      <p>{ repository?.description ?? 'Ok Default!'}</p>

      <a href={ repository?.link ?? 'Ok Default!'}>Link to repository</a>
    </li>
  );
}
