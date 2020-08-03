import * as React from "react";
import axios from "axios";
interface ApiRespose {
  title: string;
  body: string;
  id: number;
}
const Api = () => {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      setComments(res.data);
    });
  }, []);

  return (
    <div>
      {comments.map((item: ApiRespose) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Api;
