(() => {
  let user = {
    name: "David",
    age: 28,
    country: "MX",
  };

  let entries = Object.entries(user);
  let values = Object.values(user);
  let keys = Object.keys(user);

  console.log("Values", values, "Keys", keys);
})();
