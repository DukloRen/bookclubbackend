import { faker } from '@faker-js/faker';

import { PrismaClient, members, payment } from '@prisma/client'

const prisma = new PrismaClient()
async function Main(){
  for (let i = 0; i<15; i++){
    await prisma.payment.create({
      data: {
        member_id: faker.number.int({min: 1, max: 10}),
        amount: faker.number.int({min: 0, max: 10000}),
        paid_at: faker.date.recent()
      }
    })
  } prisma.$disconnect()
}

Main().then();
