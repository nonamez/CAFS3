const ALLOWED_CATEGORIES = ['T-shirts', 'Pants', 'Sweaters', 'Shoes'];

let shoes = new Product(
    'Champion',
    39.95,
    'Shoes',
    'https://pigu.lt/lt/grozis-ir-mada/vyriski-batai-avalyne/sportbaciai/champion-vyriski-kedai-jaunt-melyni?id=52426564'
);

let sweater = new Product('Helly Hansen Bluza Logo Hoodie');

// sweater.setName('Helly Hansen Bluza Logo Hoodie');
sweater.setPrice(79.95);
sweater.setCategory('Sweaters');
sweater.setUrl('https://pigu.lt/lt/dzemperiai-vyrams/helly-hansen-vyriskas-dzemperis-bluza-logo-hoodie?id=26551177');

let products = [
    new Product(
        'Helly Hansen Crew',
        44.95,
        'T-shirts',
        'https://pigu.lt/lt/vyriski-marskineliai/helly-hansen-vyriski-marskineliai-crew-melyni?id=46843739'
    ),

    // https://en.wikipedia.org/wiki/Method_chaining
    (new Product)
        .setName('Texpak')
        .setPrice(29.95)
        .setCategory('Pants')
        .setUrl('https://pigu.lt/lt/vyriski-drabuziai/vyriska-sportine-apranga/vyriskos-sportines-kelnes-texpak-tamsiai-pilkos-907167611?id=43315058'),

    sweater,
    shoes,

    (
        new Product(
            'Nike Tee Just do It Swoosh',
            19.59,
        )
    ).setCategory('T-shirts').setUrl('https://pigu.lt/lt/vyriski-marskineliai/nike-vyriski-sportiniai-marskineliai-tee-just-do?id=33013136')
];

// console.log(products);

for (let p of products) {
    console.log(p.getName(), p.getPrice(), p.getSalePrice());
}