export default async (req, res) => {
  try {
    const resp = await fetch('https://api.yelp.com/v3/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer YDpYlPy0jvHccCw3lrxAPG2gXQcFJbDoXNSUo6F9P7a9h7fz2RD9ZKXzT0IALMXHYIYKB_iYF7jegXGRYKAHOJME4YyDA3_X_RPzbBuf76zzBhjhi1zlqBiZCiIYYHYx`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: req.body,
    });
    const data = await resp.json();
    return res.status(200).send(data);
  } catch (error) {
    console.error(error);
    return res.status(500).send(error);
  }
};
