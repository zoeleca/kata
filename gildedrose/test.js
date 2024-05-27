const {Item, 
    AgedBrie,
    BackstagePass,
    Sulfuras, 
    Conjured,
    Shop} =  require('./GildedRoseRefacotred')

//Test suite for Shop Class 
describe('Shop', () =>{
    //test case for normal item
    test('Normal item quality decrease by 1 each day', () =>{
        const items =[new Item('Normal Item', 10, 20)]; 
        const shop = new Shop(items);
        shop.updateQuality();
        expect(items[0].quality).toBe(19);
    });
    // Test case for Aged Brie quality increase
    test('Aged Brie quality increases by 1 each day', () => {
        const items = [new AgedBrie(10, 20)]; 
        const shop = new Shop(items);
    shop.updateQuality();
        expect(items[0].quality).toBe(21);
    });

      // Test case for Aged Brie quality stop increasing when it reaches 50
    test('Aged Brie quality stop increasing when reaching 50', () => {
        const items = [new AgedBrie(-3, 49)]; 
        const shop = new Shop(items);
    shop.updateQuality();
        expect(items[0].quality).toBe(50);
    });

// Test case for Backstage passes quality increase
test('Backstage passes quality increases as concert approaches', () => {
    const items = [new BackstagePass(15, 20)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(21);
});

// Test case for normal item quality decrease after sellIn date
test('Normal item quality decreases by 2 after sellIn date', () => {
    const items = [new Item('Normal Item', 0, 20)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(18);
});

// Test case for Sulfuras quality and sellIn unchanged
test('Sulfuras quality and sellIn remain unchanged', () => {
    const items = [new Sulfuras(10, 80)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(10);
});

// Test case for Aged Brie quality increase nearing maximum quality
test('Aged Brie quality does not exceed 50', () => {
    const items = [new AgedBrie(10, 49)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(50);
});

// Test case for Backstage passes quality increase nearing maximum quality
test('Backstage passes quality does not exceed 50', () => {
    const items = [new BackstagePass (15, 49)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(50);
});

// Test case for normal item quality decrease nearing minimum quality
test('Normal item quality does not go below 0', () => {
    const items = [new Item('Normal Item', 10, 0)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(0);
});

// Test case for Sulfuras quality and sellIn remaining unchanged
test('Sulfuras quality and sellIn remain unchanged even after update', () => {
    const items = [new Sulfuras(10, 80)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(10);
});

// Test case for Aged Brie quality increase on the day of expiration
test('Aged Brie quality increases by 2 on the day of expiration', () => {
    const items = [new AgedBrie(0, 20)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(22);
});

// Test case for Backstage passes quality increase on the day of expiration
test('Backstage passes quality drops to 0 after the concert', () => {
    const items = [new BackstagePass(0, 49)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(0);
});

// Test case for Backstage passes quality increase on the day of expiration
test('Backstage passes quality stays at 49 even when one day left', () => {
    const items = [new BackstagePass(1, 49)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(49);
});

// Test case for Conjured item quality decrease nearing minimum quality
test('Conjured item quality does not go below 0', () => {
    const items = [new Conjured(10, 1)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(0);
});

// Test case for normal item quality decrease nearing minimum quality on the day of expiration
test('Normal item quality drops to 0 after the sellIn date', () => {
    const items = [new Item('Normal Item', 0, 1)]; 
    const shop = new Shop(items);
    shop.updateQuality();
    expect(items[0].quality).toBe(0);
});

})