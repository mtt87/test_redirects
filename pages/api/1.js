export default function handler(req, res) {
  if (process.env.VERCEL === "1") {
    res.redirect(`https://${process.env.VERCEL_URL}/api/2`, 301);
  } else {
    res.redirect("http://localhost:3000/api/2", 301);
  }
}
