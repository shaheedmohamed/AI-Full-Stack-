import { Controller, Get, Post, Body } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  async create(@Body('idea') idea: string) {
    return this.sectionService.create(idea);
  }

  @Get()
  async findAll() {
    return this.sectionService.findAll();
  }
}
