new Vue({
    el: '#app',
    data: {
        search_input: '',
        products: {
            Offers: [
                {
                    image: "./images/products_images/dog_food.jpg",
                    category: "Offer 1",
                    description: "View full item.",
                    full_description: "Buy 3 bags of pedigree dog food for the price of 2 and get a plush toy for free!",
                    price: 20,
                }, {
                    image: "./images/products_images/cat_food.jpeg", category: "Offer 2",
                    description: "View full item.",
                    full_description: "Buy 3 bags of freskies cat food for the price of 2 and get a free cat bath service.",
                    price: 16,
                }, {
                    image: "./images/products_images/bird_food_offer.jpg", category: "Offer 3",
                    description: "View full item.",
                    full_description: "Buy 1 petnest for garden birds food bag and get the second for free.",
                    price: 6.75,
                },
            ],

            Food: [
                {
                    image: "./images/products_images/dog_food.jpg",
                    category: "Dogs",
                    description: "Pedigree dog food.",
                    full_description: "Pedigree dog food, 1 to 7 years, beef. 15KG",
                    price: 10,
                },
                {
                    image: "./images/products_images/cat_food.jpeg",
                    category: "Cats",
                    description: "Friskies cat food.",
                    full_description: "Friskies gravy swerlers, gravy-chicken-salmon cat food.",
                    price: 8,

                },
                {
                    image: "./images/products_images/bird_food.jpeg",
                    category: "Birds",
                    description: "Pennington classic wild bird food.",

                    price: 7.25,
                },
            ],

            Litter: [
                {
                    image: "./images/products_images/dog_litter.jpg",
                    category: "Dogs",
                    description: "This is dog litter product.",
                    full_description: "Puppy go Patty dog litter bag. 3.85KG ",
                    price: 23,
                }, {
                    image: "./images/products_images/cat_litter.jpg",
                    category: "Cats",
                    description: "This is cat litter product.",
                    full_description: "Febreze freshness cat odor control. 11.3KG ",
                    price: 37,
                }, {
                    image: "./images/products_images/bird_litter.jpg",
                    category: "Birds",
                    description: "This is bird litter product.",
                    full_description: "Paper litter 14 days bird odor control. 10L",
                    price: 19.99,
                },],

            "Care Products": [{
                image: "./images/products_images/dog_care_product.jpg",
                category: "Dogs",
                description: "This is dog care product.",
                full_description: "Fresh Breath dental health. 1L.",
                price: 39.99,
            }, {
                image: "./images/products_images/cat_care_product.jpg",
                category: "Cats",
                description: "This is cat care product.",
                full_description: "Oropharma cats eye care bathing solution. 500ml.",
                price: 29.5,
            }, {
                image: "./images/products_images/bird_care_product.jpg",
                category: "Birds",
                description: "This is bird care product.",
                full_description: "Johnson's essential bird multi-vitamins for cage birds",
                price: 11.89,
            },
            ],

            Accessories: [
                {
                    image: "./images/products_images/dog_accessories.jpg",
                    category: "Dogs",
                    description: "These are dog accessories.",
                    full_description: "Dogs full accessory package",
                    price: 119.99,
                }, {
                    image: "./images/products_images/cat_accessories.jpeg",
                    category: "Cats",
                    description: "This is cat accessories.",
                    full_description: "Cute cat necklace with bell.",
                    price: 7,
                }, {
                    image: "./images/products_images/bird_accessories.jpg",
                    category: "Birds",
                    description: "This is cage bird accessories.",
                    full_description: "Cage birds bells and hanger.",
                    price: 3.99,
                },
            ],

            Toys: [
                {
                    image: "./images/products_images/dog_toys.jpg",
                    category: "Dogs",
                    description: "Dogs toys plush.",

                    price: 25,
                }, {
                    image: "./images/products_images/cat_toys.jpg",
                    category: "Cats",
                    description: "AvoCATo Cat toy",

                    price: 31,
                }, {
                    image: "./images/products_images/bird_toys.jpg",
                    category: "Birds",
                    description: "Birds safe cage toys",

                    price: 16,
                },
            ]
        },

        selected_product: {},
    },
    methods: {
        selectProduct: function (product) {
            this.selected_product = product
        },
        scrollTo: function (element_id) {
            var targetElm = document.getElementById(element_id)
            var headerOffset = 100;
            var elementPosition = targetElm.getBoundingClientRect().top;
            var offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    },
    mounted() {
        console.log("mounted")
    },
    created() {
        console.log("created")
    },
    watch: {
        search_input: function () {
            console.log(this.search_input)
        }
    }
})