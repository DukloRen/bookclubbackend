import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
@Injectable()
export class MemberService {
  async create(createMemberDto: CreateMemberDto) {
    try {
      const member = await prisma.members.create({
        data: {
          name: createMemberDto.name,
          gender: createMemberDto.gender,
          birth_date: createMemberDto.birth_date,
          created_at: new Date()
        }
      })
      return member
    }
    catch{
      throw new BadRequestException()
    }
  }

  async findAll() {
    const members =  await prisma.members.findMany({
      select: {
        id: true,
        name: true,
        gender: true,
        birth_date: true,
        created_at: true
      }
    })
    return members
  }

  async payment(id: string){
    try {
      const payment = await prisma.payment.create({
        data: {
          member_id: parseInt(id),
          amount: 5000,
          paid_at: new Date(),
        }
      })
      return payment
    }
    catch{
      throw new NotFoundException()
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} member`;
  }

  update(id: number, updateMemberDto: UpdateMemberDto) {
    return `This action updates a #${id} member`;
  }

  remove(id: number) {
    return `This action removes a #${id} member`;
  }
}
