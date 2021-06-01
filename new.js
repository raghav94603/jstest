
class food
{
constructor()
{
    var food_name;
}
getFoodname()
{
    return this.food_name;
}
setfoodName(food_name)
{
    this.food_name=food_name;
}

}


var inputt=new food();
inputt.setfoodName("Pizza");
console.log(inputt.getFoodname());
