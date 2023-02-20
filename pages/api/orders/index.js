import { API_URL } from "../../../utils/data";

const myHeaders = new Headers({
  "Content-Type": "application/json",
  Authorization: "your-token",
});
const orders = async (req, res) => {
  // requestMethod = req.

  if (req.method === "GET") {
    try {
      const apiRes = await fetch(`${API_URL}/dashboard/orders/`, {
        method: "GET",
        headers: new Headers({
          Authorization: `${req.headers.authorization}`,
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
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
};
export default orders;
