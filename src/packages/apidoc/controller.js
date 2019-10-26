import fs from 'fs'
import settings from '../../../settings'

const apiPath = settings.rootPath + '/public/apidoc/index.html'

async function show(req, res) {
  console.log(apiPath)
  fs.readFile(apiPath, function (error, data) {
    if (error) {
      console.log(error)
      throw error
    }
    res.write(data)
    res.end()
    res.send()
  })
}

export default {
  show
}