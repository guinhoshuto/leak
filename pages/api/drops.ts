// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'node:path'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  // res: NextApiResponse<Data>
  res: any
) {
  const drops_dir = path.join(process.cwd(), 'pages/drops')
  console.log(drops_dir)
  fs.readdir(drops_dir, (err, files) => {
    // if (err) return res.status(200).json(err)
    console.log(files)

    files.forEach((f:any) => {
      console.log(f)
      })
  })

  res.status(200).json({ name: 'John Doe' })
}
