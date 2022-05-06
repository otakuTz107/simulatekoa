"use strict"
module.exports=class{ /* let sk=new SimulateKoa(); sk.init().use((a,next)=>{next(a)}).use((a,next)=>{}).start("aStr") */
  #fullfill=[]
  next(...arr){ let temp=this.#fullfill.shift(); if(temp){ arr.push(this.next.bind(this)); return temp(...arr) }else{return temp} }
  use(fn){ this.#fullfill.push(fn); return this }
  start(...arr){ this.next(...arr) }
  init(){ this.#fullfill=[]; return this }   /*可避免多次实例化该Class*/
}