import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const dir = path.join(process.cwd(), "static/img/photography");

  const files = fs.readdirSync(dir)
    .filter(f => /\.(webp|jpg|jpeg|png)$/i.test(f));

  res.status(200).json(
    files.map(f => ({
      src: `/static/img/photography/${f}`,
      caption: ""
    }))
  );
}
