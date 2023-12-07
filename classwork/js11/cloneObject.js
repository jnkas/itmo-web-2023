const post = {
  id: 1,
  text: 'My first post',
  author: {
    id: 2,
    name: 'John Doe',
  },
  comments: [
    {
      id: 3,
      text: 'And first comment',
    },
    {
      id: 5,
      text: 'Second comment',
    },
  ],
}

let clonedObject = {}
// clonedObject = {...post}
clonedObject = Object.assign({}, post)
clonedObject.author = Object.assign({}, post.author)

clonedObject.comments = []
post.comments.forEach((el) => {
  let newObj = Object.assign({}, el)
  clonedObject.comments.push(newObj)
})

// тут ваш код

function check() {
  console.log(post)

  clonedObject.text = '0'
  clonedObject.author.id = 9
  clonedObject.comments[1].text = 'iiii'

  console.log(clonedObject)
}

const carObject = {
  color: 'red',
  complect: {
    airbag: true,
    transmission: 'automatic',
  },
  getCarTransmission: () => {
    return carObject.complect.transmission === 'automatic' ? 'автомат' : 'ручная'
  },
}

carObject.complect.transmission


