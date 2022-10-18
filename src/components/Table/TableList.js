const Tablelist = (props) => {
  return props.users.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address.city}</td>
        <td>{user.company.name}</td>
      </tr>
    );
  });
};

export default Tablelist;
