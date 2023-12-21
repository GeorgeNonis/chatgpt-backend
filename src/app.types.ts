export interface YouI {
  from: 'You';
}
export interface MeowGPTType {
  from: 'MeowGPT';
  isPrinted: boolean;
}
export type ConvI = {
  message: string;
  id: string;
} & (YouI | MeowGPTType);

export interface ConversationI {
  id: string;
  messages: ConvI[] | any[];
}
