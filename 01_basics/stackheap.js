// Primitive type(stack memeory);
let myyoutubechannel="yashkumargoyal";
let anothername="yogesh";
anothername=myyoutubechannel;
anothername="chaiaurcode";

console.log(myyoutubechannel);
console.log(anothername);

// Heap memeory(NoN Primitive)
let userone={
    email:"yashmicrosoft.com",
    name:"yash goyal",
    id:123
}
let usertwo=userone;
usertwo.id=564;
usertwo.name="yogesh";

console.log(userone.id);
console.log(usertwo.id);