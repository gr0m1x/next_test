// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  // res.json({ name: req.query.name ?? 'John Doe' })
  res.json(
    [{ name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' },
    { name:'John Doe' }]
    )
}
