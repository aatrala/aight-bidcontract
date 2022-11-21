
export const ONE_NEAR = '100000000000000000000000';


export class nftArtMessage {
  premium: boolean; // whether money is bid on the text
  sender: string; // who sent the text from which wallet
  text: string; // art text description
  status: string; // pending, processed
  bidAmount: string; 

  constructor({ premium, sender, text, bidAmount }: { premium: boolean, sender: string, text: string, bidAmount: string }) {
    this.premium = premium;
    this.sender = sender;
    this.text = text;
    this.status = "pending";
    this.bidAmount = bidAmount;
  }
}
