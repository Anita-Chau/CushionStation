var User        = require('../models/user');
var Category    = require('../models/categories');
var Department  = require('../models/department');
var Product     = require('../models/product');
var Variant     = require('../models/variant');
var mongoose    = require('mongoose');
var colour      = require('colour');


//mongoose.connect('mongodb://localhost/shoppingApp');
mongoose.connect('mongodb://localhost/cushionStation', { useNewUrlParser: true, useCreateIndex: true, });

function deleteVariants(callback)
{
    Variant.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting variants from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Variants deleted".red)
            callback()
        }
    });
}
function deleteCategories(callback)
{
    Category.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting category from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Categories deleted".red)
            callback()
        }
    });
}
function deleteDepartments(callback)
{
    Department.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting department from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Departments deleted".red)
            callback()
        }
    });
}

function deleteUsers(callback)
{
    User.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting user from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Users deleted".red)
            callback()
        }
    });
}
function deleteProducts(callback)
{
    Product.deleteMany({}, function(e, result)
    {
        if (e)
        {
            console.log("Failed on deleting product from db\nError:".error, e.message.error + "\n")
        }
        else
        {
            console.log("Products deleted".red)
            callback()
        }
    });
}

function insertCategories(callback)
{
    var categories =
    [
        new Category({
            categoryName        : 'Bed'
        }),
        new Category({
            categoryName        : 'Lounging'
        }),
        new Category({
            categoryName        : 'Emoji'
        }),
        new Category({
            categoryName        : 'Other'
        })
    ]

    for (let i = 0; i < categories.length; i++){
        categories[i].save(function(e, r) {
            if (i === categories.length - 1){
                console.log("Categories inserted".green)
                callback();
            }
        });
    }
}

function insertDepartments(callback)
{
    var departments =
    [
        new Department({
            departmentName      : 'Cushion',
            categories          : 'Bed,Lounging'

        }),
        new Department({
            departmentName      : 'Plush',
            categories          : 'Emoji,Other'
        })
    ]

    for (let i = 0; i < departments.length; i++){
        departments[i].save(function(e, r) {
            if (i === departments.length - 1){
                console.log("Departments inserted".green)
                callback();
            }
        });
    }
}

function insertProducts(callback)
{
    var products =
    [
        new Product({
            _id: "5bedf31cc14d7822b39d9d43",
            imagePath: `/uploads/7568644802_1_1_1.jpg`,
            title: 'Today Has Been Cancelled Pillow',
            description: 'Today has been cancelled. Go back to bed. Perfect bed pillow. 100% sheep feathers. ',
            price: 35.95,
            color: 'Black',
            size: 'S, L',
            quantity: 10,
            department: 'Cushion',
            category: 'Bed',
        }),
        new Product({
            _id: "5bedf3b9c14d7822b39d9d45",
            imagePath: `/uploads/5644641800_2_5_1.jpg`,
            title: 'Inspirational Chair Cushion',
            description: 'Some words to lay against when you want to absorb some inspiration through osmosis. ',
            price: 24.99,
            color: 'Wild Things Sleep',
            size: 'S,M,L',
            quantity: 15,
            department: 'Cushion',
            category: 'Lounging',
        }),
        new Product({
            _id: "5bedf448c14d7822b39d9d47",
            imagePath: `/uploads/7568469251_2_1_1.jpg`,
            title: 'Puppy Plush Set',
            description: 'Man\'s best friend(s). ',
            price: 59.99,
            color: 'Kawaii Corgi',
            size: 'OS',
            quantity: 90,
            department: 'Plush',
            category: 'Other',
        }),
        new Product({
            _id: "5bedf55bc14d7822b39d9d4b",
            imagePath: `/uploads/8197757093_2_2_1.jpg`,
            title: 'Hate You the Least',
            description: 'For that special person you love to hate and hate to love. Personalizable. ',
            price: 79.99,
            color: 'White',
            size: 'S,L',
            quantity: 4,
            department: 'Cushion',
            category: 'Lounging',
        }),
        new Product({
            _id: "5bedf5eec14d7822b39d9d4e",
            imagePath: `/uploads/1775300615_1_1_1.jpg`,
            title: 'Smiley Face Emoji',
            description: 'As original emoji as it gets.',
            price: 19.99,
            color: 'Heart',
            size: 'S,M,L',
            quantity: 5,
            department: 'Plush',
            category: 'Emoji',
        }),
        new Product({
            _id: "5bedf6b5c14d7822b39d9d51",
            imagePath: `/uploads/6186352407_2_1_1.jpg`,
            title: 'Hug Me Please',
            description: 'When you\'re feeling extra socially introverted.',
            price: 19.99,
            color: 'Cactus',
            size: 'OS',
            quantity: 80,
            department: 'Cushion',
            category: 'Lounging',
        }),
        new Product({
            _id: "5bedf720c14d7822b39d9d52",
            imagePath: `/uploads/5575380406_1_1_1.jpg`,
            title: 'Food Plush',
            description: 'Find a mellow yellow plush to be your best buddy. Or get the whole set if you want some best buddies. ',
            price: 35.99,
            color: 'Mango',
            size: 'S,M,L',
            quantity: 8,
            department: 'Plush',
            category: 'Other',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d55",
            imagePath: `/uploads/3548350700_2_1_1.jpg`,
            title: 'Rainbow Poo Emoji',
            description: 'Made from real rainbows.',
            price: 99.99,
            color: 'Rainbow',
            size: 'S,L',
            quantity: 12,
            department: 'Plush',
            category: 'Emoji',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d56",
            imagePath: `/uploads/5575380508_1_1_1.jpg`,
            title: 'Gamer Dad',
            description: 'For new dads, old dads, and all dads in between.',
            price: 29.99,
            color: 'Game',
            size: 'OS',
            quantity: 10,
            department: 'Cushion',
            category: 'Lounging',
        }),
        new Product({
            _id: "5bedf7ecc14d7822b39d9d57",
            imagePath: `/uploads/7568644811_1_1_1.jpg`,
            title: 'OG Player',
            description: 'For that gamer friend who\'s always a sore winner.',
            price: 34.99,
            color: 'White',
            size: 'S,L',
            quantity: 15,
            department: 'Cushion',
            category: 'Other',
        })
    ];

    for (let i = 0; i < products.length; i++){
        products[i].save(function(e, r) {
            if (i === products.length - 1){
                console.log("Products inserted".green)
                callback();
            }
        });
    }
}

function insertVariants(callback)
{
    var variants =
    [
        new Variant({
            productID: '5bedf31cc14d7822b39d9d43',
            imagePath: `/uploads/7568644710_1_1_1.jpg`,
            color: 'White',
            size: 'S,L',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf3b9c14d7822b39d9d45',
            imagePath: `/uploads/5644641735_2_5_1.jpg`,
            color: 'Essence of Chair',
            size: 'S,L',
            quantity: 12,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: `/uploads/7568469605_2_1_1.jpg`,
            color: 'Happy Corgi',
            size: 'OS',
            quantity: 4,
        }),
        new Variant({
            productID: '5bedf448c14d7822b39d9d47',
            imagePath: `/uploads/7568469822_2_1_1.jpg`,
            color: 'Slightly Angry Corgi',
            size: 'OS',
            quantity: 5,
        }),
        new Variant({
            productID: '5bedf5eec14d7822b39d9d4e',
            imagePath: `/uploads/1775300806_2_1_1.jpg`,
            color: 'Tired',
            size: 'S,L',
            quantity: 35,
        }),
        new Variant({
            productID: '5bedf720c14d7822b39d9d52',
            imagePath: `/uploads/5575380407_1_1_1.jpg`,
            color: 'Lazy Egg',
            size: 'S,M,L',
            quantity: 5,
        })
    ];

    for (let i = 0; i < variants.length; i++){
        variants[i].save(function(e, r) {
            if (i === variants.length - 1){
                console.log("Variants inserted".green)
                callback();
            }
        });
    }
}

function insertAdmin(callback)
{
    var newUser1 = new User({
        username    : 'anita@admin.com',
        password    : 'admin',
        fullname    : 'Anita Chau',
        admin       : true
    });
    User.createUser(newUser1, function(err, user){
        if(err) throw err;
        console.log("Admin user inserted".green)
        console.log("Username: ", user.username + "\n" , "Password: admin");
        callback()
    });

    var newUser2 = new User({
        username    : 'chris@admin.com',
        password    : 'admin',
        fullname    : 'Chris Geddes',
        admin       : true
    });
    User.createUser(newUser2, function(err, user){
        if(err) throw err;
        console.log("Admin user inserted".green)
        console.log("Username: ", user.username + "\n" , "Password: admin");
        callback()
    });
}


function deleteDBEntitites(callback)
{
    deleteVariants(function()
    {
        deleteCategories(function()
        {
            deleteDepartments(function()
            {
                deleteUsers(function()
                {
                    deleteProducts(function()
                    {
                        insertCategories(function()
                        {
                            insertDepartments(function()
                            {
                                insertProducts(function()
                                {
                                    insertVariants(function()
                                    {
                                        insertAdmin(callback)
                                    })
                                })
                            })
                        })
                    });
                })
            })
        })
    })
}



deleteDBEntitites(exit)


function exit() {
    mongoose.disconnect();
}
