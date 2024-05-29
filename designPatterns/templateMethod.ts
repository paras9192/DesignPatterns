// in this pattern we make a abstruct class and then with this abstruct class to use it as a template and then we use it within the class then we able to use it through out the process.

export abstract class telivision { // it is a template
    abstract proterties :any
    powerOn(){
        return "it is now open.."
    }
    powerOff(){
        return "it is now close.."
    }
    channelUp(){
        return "channel is up now.."
    }
}
export class Samsung extends telivision{
    proterties= {
        height:"32inch",
        width:"32inch"
    }
  } 
  
