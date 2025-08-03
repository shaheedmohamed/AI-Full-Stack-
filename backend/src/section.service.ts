import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section, SectionDocument } from './section.schema';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
  ) {}

  async create(idea: string): Promise<Section> {
    const sections = ['Hero', 'About', 'Contact'];
    const created = new this.sectionModel({ idea, sections });
    return created.save();
  }

  async findAll(): Promise<Section[]> {
    return this.sectionModel.find().exec();
  }
}
