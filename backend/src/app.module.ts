import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Section, SectionSchema } from './section.schema';
import { SectionService } from './section.service';
import { SectionController } from './section.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/website_ideas'),
    MongooseModule.forFeature([{ name: Section.name, schema: SectionSchema }]),
  ],
  controllers: [AppController, SectionController],
  providers: [AppService, SectionService],
})
export class AppModule {}
