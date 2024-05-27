
class Item {
    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality
    }

    /*updatequality(){}*/
}

class Shop {
    constructor(items = []) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            //generalise items and put special items together and then the other ones
            if (this.items[i].sellIn > 0) {
                if (this.items[i].name == 'Aged Brie') {
                    if (this.items[i].quality < 50)
                        this.items[i].quality += 1
                }
                else if (this.items[i].name == 'Backstage passes') {
                    if (this.items[i].sellIn < 50) {
                        this.items[i].quality += 1;
                    }
                    if (this.items[i].quality < 11) {
                        this.items[i].quality += 2;
                    }
                    if (this.items[i].quality < 6) {
                        this.items[i].quality += 3;
                    }
                }else if(this.items[i].name == 'Sulfuras'){
                        this.items[i].quality = this.items[i].quality;
                        this.items[i].sellIn = this.items[i].sellIn;
                }else {
                    if(this.items[i].quality <= 2){
                        this.items[i].quality -= this.items[i].quality;
                    }else{
                    this.items[i].quality -= 1;
                    }
                }


            }
            if (this.items[i].sellIn <= 0) {
                
                if (this.items[i].name == 'Aged Brie') {
                    if (this.items[i].quality < 50){
                        this.items[i].quality += 2}
                }else if (this.items[i].name == 'Backstage passes') {
                        this.items[i].quality -= this.items[i].quality;
                }else{
                    if(this.items[i].quality <= 2){
                        this.items[i].quality -= this.items[i].quality;
                    }else{
                    this.items[i].quality -= 2
                    }
                }
            }
        }
    }
}


module.exports = {
    Item,
    Shop
}

