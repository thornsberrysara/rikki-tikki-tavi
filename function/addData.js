const { createClient } = require("@astrajs/collections")

const collection = 'posts'

exports.handler = async function (event, context, callback) {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    keyspace: process.env.ASTRA_DB_KEYSPACE,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  })

  const posts = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection)

  const data = [
    {
      id: 0,
      name: "Spongebob Squarepants",
      username: "goofygoober",
      avatar: "https://i.imgur.com/GPS9GGd.png",
      is_followed: true,
      video: "https://i.imgur.com/hiksVHC.mp4",
      caption: "nothing better than a fresh coat of paint",
      likes: 10,
      comments: 2,
      timestamp: "2022-10-18T:14:46.020Z",
      button_visible: true
    },
    {
      id: 1,
      name: "Patrick Star",
      username: "pat",
      avatar: "https://i.imgur.com/K9bam21.png",
      is_followed: true,
      video: "https://i.imgur.com/P1AYAl7.mp4",
      caption: "teaching @squidward how to jellyfish lol",
      likes: 10,
      comments: 2,
      timestamp: "2022-10-17T:12:01.020Z",
      button_visible: true
    }
  ]

    try {
      for (let i = 0; i < data.length; i++) {
        await posts.create(data[i].id, data[i])
      }
        return {
          statusCode: 200
        }
    } catch (e) {
      console.error(e)
      return {
        statusCode: 500,
        body: JSON.stringify(e)
      }
    }
  
}
