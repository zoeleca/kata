class Item {
    //Parent Class
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn; //number of days we have to sell the item
        this.quality = quality 
    }

    reducePrice(percent){

    }

    updateQuality() {
        //Decrease the quality if an item as the 'sellIn' value decrease
            if (this.sellIn > 0) {
                this.quality <= 1 ? this.quality -= this.quality : this.quality -= 1;
                } else {
               this.quality <= 2 ? this.quality -= this.quality : this.quality -= 2;
        }
    }
}


//special Items
class AgedBrie extends Item {

    constructor(sellIn, quality) {
        super('Aged Brie', sellIn, quality)
    }

    updateQuality() {
      //  super.updateQuality()
        //Increase the quality of 'agedbrie' as the 'sellIn' value decrease
            if (this.sellIn > 0) {
                this.quality < 50 ? this.quality += 1 : this.quality = 50; //error '=='
            } else {
                this.quality < 49 ? this.quality += 2 : this.quality = 50;
            }
    }
}    

class BackstagePass extends Item{
    constructor(sellIn, quality) {
        super('Backstage passes', sellIn, quality)
    }

    updateQuality() {
         //Increase the quality of 'backstagePass' as the 'sellIn' value decrease
        if (this.sellIn >= 1) {
            if (this.sellIn <6) {
                this.quality <48 ? this.quality += 3 : this.quality == 50
            } 
            else if (this.sellIn <= 10) {
                this.quality += 2;
            } 
            else if (this.sellIn >10) {
                this.quality += 1;
            } 
            //Increase the quality of 'backstagePass' as the 'sellIn' value decrease
        } else this.quality -= this.quality
    }
 }

class Sulfuras extends Item{
    constructor(sellIn, quality) {
        super('Sulfuras', sellIn, quality);
    }

    //Quality & SellIn values ALWAYS stay the same 
    updateQuality(){
    /*    this.sellIn = this.sellIn;
        this.quality = 80*/
    }
}

class Conjured extends Item {
    constructor(sellIn, quality) {
        super('Conjured', sellIn, quality);
    }

    //Decrease the quality twice as fast as other items when the 'sellIn' value decrease
    updateQuality(){
        console.error('sellin <0 ')
        if (this.quality <= 2) {
            this.quality -= this.quality;
        } else {
            this.quality -= 2
        }
    }
}


//
class Shop {
    //put the items in an array
    constructor(items = []) {
        this.items = items;
    }

    updateQuality(){
        //updating quality for each items
        for(let item of this.items){
            item.updateQuality();
        }
    }

}


module.exports = {
    Item,
    AgedBrie,
    BackstagePass,
    Sulfuras,
    Conjured,
    Shop
}