import topics from "../../../data/topic.json";
import { useRouter } from "next/router";

export default function handler(req, res) {
  const id = Number(req.query.id);
  const topic = topics.filter((e) => {
    return e.id === id ? true : false;
  });
  res.status(200).json(topic);
}
