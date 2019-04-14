const resolver = {
  Query: {
    people: () => people,
    /**
     * @param {Object} person default parameter from graphQL
     * @param {Object} payload
     * @param {Number} payload.id
     */
    person: (person, payload) => getById(payload.id)
  }
};

const people = [
  {
    id: 1,
    name: "jjj",
    age: 26,
    gender: "male"
  },
  {
    id: 2,
    name: "jake",
    age: 21,
    gender: "female"
  },
  {
    id: 3,
    name: "naver",
    age: 200,
    gender: "male"
  }
];

const getById = id => {
  const filteredPeople = people.filter(person => id === person.id);
  return filteredPeople[0];
};

export default resolver;
