///Done by Michael

const checkout = () => {
  axios.post('/api/pizza')
  .then((res) => {
    console.log("POST ", res);

  })
  .catch((err) => {
    console.log(err, "error")
  })
}