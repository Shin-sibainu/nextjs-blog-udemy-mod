// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default (req, res) => {
  // res.status(200).json({ text: "Hello" });
  const email = req.body.email;
  //データベース等にemailを保存する
};
