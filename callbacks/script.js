class rectangle
{
    constructor(len,ber)
    {
        this.len=len
        this.ber=ber
    }
    set len(len)
    {
        if(len>0)
        {
            this._len=len
        }
        else{
            console.log("invalid number")
        }

    }
    set ber(ber)
    {
        if(ber>0)
        {
            this._ber=ber
        }
        else{
            console.log("invalid number")
        }

    }
    get len(){
    return this._len;
    }
    get ber()
    {
        return this._ber;
    }

    
}
let obj=new rectangle(1,3)
console.log(obj.len)
console.log(obj.ber)