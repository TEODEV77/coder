(() => {
  let client = {
    firstName: "TEO",
    nickname: "TEODEV77",
    city: "Colombia",
    coins: 70,
  };

  let keys = Object.keys(client);
  console.log(keys);

  let values = Object.values(client);
  console.log(values);

  let entries = Object.entries(client);
  console.log(entries);
})();
