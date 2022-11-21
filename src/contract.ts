import { NearBindgen, near, call, view } from 'near-sdk-js'
import { ONE_NEAR, nftArtMessage} from './model'

@NearBindgen({})
class Aight {
  messages: nftArtMessage[] = [];
  numberOfBids: number = 0;

  @view({}) // Public read-only method: Returns the counter value.
  get_number_of_bids(): number {
    return this.numberOfBids;
  }


  // Public - Adds a new message.
  @call({payableFunction: true})
  add_message({ text }: { text: string }) {
    // If the user attaches more than 0.01N the message is premium
    const premium = near.attachedDeposit() >= BigInt(ONE_NEAR);
  
    const sender = near.predecessorAccountId();
    const bidAmount = near.attachedDeposit().toString();

    const message = new nftArtMessage({premium, sender, text, bidAmount});
    //if (premium) this.messages.push(message);
    this.messages.push(message);
    this.numberOfBids += 1;
  }
  
  // Returns an array of messages.
  @view({})
  get_messages({ from_index = 0, limit = 100 }: { from_index: number, limit: number }): nftArtMessage[] {
    return this.messages.slice(from_index, from_index + limit);
  }
}