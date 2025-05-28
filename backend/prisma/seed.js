import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const avengers = [
  {
    nombre: "Tony Stark",
    alias: "Iron Man",
    habilidades: "genio",
    actor: "Robert Downey Jr.",
  },
  {
    nombre: "Steve Rogers",
    alias: "Captain America",
    habilidades: "fuerza sobrehumana",
    actor: "Chris Evans",
  },
  {
    nombre: "Thor",
    alias: "Thor",
    habilidades: "dios del trueno",
    actor: "Chris Hemsworth",
  },
  {
    nombre: "Bruce Banner",
    alias: "Hulk",
    habilidades: "fuerza extrema",
    actor: "Mark Ruffalo",
  },
  {
    nombre: "Natasha Romanoff",
    alias: "Black Widow",
    habilidades: "espionaje",
    actor: "Scarlett Johansson",
  },
  {
    nombre: "Clint Barton",
    alias: "Hawkeye",
    habilidades: "puntería perfecta",
    actor: "Jeremy Renner",
  },
  {
    nombre: "Wanda Maximoff",
    alias: "Scarlet Witch",
    habilidades: "telequinesis",
    actor: "Elizabeth Olsen",
  },
  {
    nombre: "Vision",
    alias: "Vision",
    habilidades: "inteligencia artificial",
    actor: "Paul Bettany",
  },
  {
    nombre: "Peter Parker",
    alias: "Spider-Man",
    habilidades: "sentido arácnido",
    actor: "Tom Holland",
  },
];

async function main() {
  await prisma.avenger.createMany({
    data: avengers,
  });
  console.log("✔ Avengers insertados.");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
