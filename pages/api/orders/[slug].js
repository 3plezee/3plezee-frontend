import { API_URL } from "../../../utils/data";

const myHeaders = new Headers({
  "Content-Type": "application/json",
  Authorization: "your-token",
});
const order = async (req, res) => {
  // requestMethod = req.
  let { slug } = req.query;

  if (req.method === "PATCH") {
    const body = req.body;

    try {
      const apiRes = await fetch(`${API_URL}/dashboard/order/${slug}`, {
        method: "PATCH",
        headers: new Headers({
          Accept: "application/json",
          "content-type": "application/json",
          Authorization: `${req.headers.authorization}`,
        }),
        body: body,
      });
      const data = await apiRes.json();
      if (apiRes.status === 200) {
        return res.status(200).json({ data: data.data });
      } else {
        return res.status(apiRes.status).json({ error: data.error });
      }
    } catch {
      return res.status(500).json({ error: "something went wrong " });
    }
  } else if (req.method === "GET") {
    try {
      const apiRes = await fetch(`${API_URL}/dashboard/order/${slug}`, {
        method: "GET",
        headers: new Headers({
          // Authorization: `${req.headers.authorization}`,
        }),
      });
      const data = await apiRes.json();
      if (apiRes.status === 200) {
        return res.status(200).json({ data: data.data });
      } else {
        return res.status(apiRes.status).json({ error: data.error });
      }
    } catch {
      return res.status(500).json({ error: "something went wrong " });
    }
  } else {
    res.setHeader("Allow", ["PATCH", "GET"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
export default order;
