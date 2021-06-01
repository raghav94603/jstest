
class food
{
constructor()
{
    var food_name;
    var f_quantity;
}
getFoodname()
{
    return this.food_name;
}
setfoodName(food_name)
{
    this.food_name=food_name;
}
getquantity()
{
    return this.f_quantity;
}
setQuantity(f_quantity)
{
this.f_quantity=this.f_quantity;
}
}

var inputt=new food();
inputt.setfoodName("Pizza");
inputt.setQuantity(8);
console.log(inputt.getFoodname()+" "+inputt.getquantity());
