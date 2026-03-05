const { PrismaClient } = require("@prisma/client");
const products = require("./products.json");

const prisma = new PrismaClient();

async function main() {
  console.log("Deleting existing products...");
  await prisma.product.deleteMany();

  console.log("Seeding products...");
  await prisma.product.createMany({
    data: products,
  });

  console.log("Seeding complete.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
