import { Document, Types } from 'mongoose';

export type Example = {
  id: string;
  associatedDefinitionsSchemas: string[];
  associatedWords: string[];
  english?: string;
  igbo?: string;
  meaning?: string;
  nsibidi?: string;
  nsibidiCharacters: string[];
  pronunciations: Pronunciation[];
  updatedAt: Date;
};

type Pronunciation = {
  _id: string;
  approvals: string[];
  audio: string;
  denials: string[];
  review: boolean;
  speaker: string;
};

export interface ExampleDocument extends Example, Document<any> {
  _id: Types.ObjectId;
  __v: number;
  id: string;
}
