// CampusEats task list
const tasks = [
  {
    name: "Design the menu screen",
    dueDate: "2026-09-20",
  },
  {
    name: "Build the orders API",
    dueDate: "2026-09-25",
  },
  {
    name: "Add user login",
    dueDate: "2026-09-22",
  },
];

console.log(`CampusEats has ${tasks.length} open tasks`);

tasks.forEach((task) => {
  console.log(`${task.name} - Due: ${task.dueDate}`);
});

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key must come from an environment variable,
// e.g. process.env.API_KEY — never hard-code secrets.