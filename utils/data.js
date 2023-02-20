export const API_URL = process.env.API_URL;

export const InstagramPics = [
  {
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612215327100-60fc5c4d7938?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1597633125097-5a9961e1f03d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    image:
      "https://images.unsplash.com/photo-1612722432474-b971cdcea546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];
export const LatestProducts = [
  {
    name: "BLUE COTTON LEGGINGS",
    slug: "blue-cotton-leggings",
    price: 500,
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI0fHxmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    description:
      "4 A pair of twill woven shorts featuring slanted front pockets, buttoned back pockets, a zip pocket, buttoned waist, and keychain loop.",
    inStock: true,
    attributes: [
      { name: "color", value: ["blue", "green", "yellow", "brown"] },
      { name: "size", value: ["X", "XX", "XL"] },
    ],

    category: "clothes",
    tags: ["stylish", "cool", "functional", "trendy"],
    similarProducts: [
      {
        name: "RIBBED BODYCON DRESS",
        price: 400,
        slug: "ribbed-bodycon-dress",
        images: [
          "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
        ],

        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        inStock: true,
      },
      {
        name: "CYAN CUFFED CHINO SHORTS",
        slug: "cyan-cuffed-chino-shorts",
        price: 200,
        images: [
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ],

        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
      {
        name: "RED COTTON LEGGINGS 2",
        price: 100,
        slug: "red-cotton-leggings-2",
        images: [
          "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
      {
        name: "RED COTTON LEGGINGS-3",
        price: 20,
        slug: "red-cotton-leggings-3",
        images: [
          "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
    ],
  },

  {
    name: "RIBBED BODYCON DRESS",
    price: 400,
    slug: "ribbed-bodycon-dress",
    images: [
      "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
      "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    description:
      "3 A pair of twill woven shorts featuring slanted front pockets, buttoned back pockets, a zip pocket, buttoned waist, and keychain loop.",
    inStock: true,
    tags: ["stylish", "cool", "functional", "trendy"],
    attributes: [
      { name: "color", value: ["blue", "green", "yellow", "brown"] },
      { name: "size", value: ["X", "XX", "XL"] },
    ],
    category: "clothes",
    similarProducts: [
      {
        name: "RIBBED BODYCON DRESS",
        price: 400,
        slug: "ribbed-bodycon-dress",
        images: [
          "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },

      {
        name: "CYAN CUFFED CHINO SHORTS",
        slug: "cyan-cuffed-chino-shorts",
        price: 200,
        images: [
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        category: "clothes",
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
      {
        name: "RED COTTON LEGGINGS 2",
        price: 100,
        slug: "red-cotton-leggings-2",
        images: [
          "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        category: "clothes",
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
      {
        name: "RED COTTON LEGGINGS-3",
        price: 20,
        slug: "red-cotton-leggings-3",
        images: [
          "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        category: "clothes",
      },
    ],
  },

  {
    name: "CYAN CUFFED CHINO SHORTS",
    slug: "cyan-cuffed-chino-shorts",
    tags: ["stylish", "cool", "functional", "trendy"],
    price: 200,
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    description:
      "5 A pair of twill woven shorts featuring slanted front pockets, buttoned back pockets, a zip pocket, buttoned waist, and keychain loop.",
    inStock: true,
    attributes: [
      { name: "color", value: ["blue", "green", "yellow", "brown"] },
      { name: "size", value: ["XS", "XX", "XL"] },
    ],
    category: "clothes",

    similarProducts: [
      {
        name: "RIBBED BODYCON DRESS",
        price: 400,
        slug: "ribbed-bodycon-dress",
        images: [
          "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
        ],
        inStock: true,

        category: "clothes",

        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },

      {
        name: "CYAN CUFFED CHINO SHORTS",
        slug: "cyan-cuffed-chino-shorts",
        price: 200,
        images: [
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        category: "clothes",
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
      {
        name: "RED COTTON LEGGINGS 2",
        price: 100,
        slug: "red-cotton-leggings-2",
        images: [
          "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        category: "clothes",
      },
      {
        name: "RED COTTON LEGGINGS-3",
        price: 20,
        slug: "red-cotton-leggings-3",
        images: [
          "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        description:
          "1 A pair of twill woven shorts featuring slanted front pockets, buttoned back pockets, a zip pocket, buttoned waist, and keychain loop.",
        inStock: true,
        category: "clothes",
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
    ],
  },

  {
    name: "RED COTTON LEGGINGS 2",
    tags: ["stylish", "cool", "functional", "trendy"],
    price: 100,
    slug: "red-cotton-leggings-2",
    images: [
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    ],
    description:
      "2 A pair of twill woven shorts featuring slanted front pockets, buttoned back pockets, a zip pocket, buttoned waist, and keychain loop.",
    inStock: true,
    attributes: [
      { name: "color", value: ["blue", "green", "yellow", "brown"] },
      { name: "size", value: ["X", "XX", "XL"] },
    ],
    category: "clothes",
    tags: ["stylish", "cool", "functional", "trendy"],
    similarProducts: [
      {
        name: "RIBBED BODYCON DRESS",
        price: 400,
        slug: "ribbed-bodycon-dress",
        images: [
          "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        category: "clothes",
      },
      {
        name: "CYAN CUFFED CHINO SHORTS",
        slug: "cyan-cuffed-chino-shorts",
        price: 200,
        images: [
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        category: "clothes",
      },
      {
        name: "RED COTTON LEGGINGS 2",
        price: 100,
        slug: "red-cotton-leggings-2",
        images: [
          "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        category: "clothes",
      },
      {
        name: "RED COTTON LEGGINGS-3",
        price: 20,
        slug: "red-cotton-leggings-3",
        images: [
          "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        category: "clothes",
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
    ],
  },

  {
    name: "RED COTTON LEGGINGS-3",
    tags: ["stylish", "cool", "functional", "trendy"],
    price: 20,
    slug: "red-cotton-leggings-3",
    images: [
      "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
    ],
    description:
      "1 A pair of twill woven shorts featuring slanted front pockets, buttoned back pockets, a zip pocket, buttoned waist, and keychain loop.",
    inStock: true,
    attributes: [
      { name: "color", value: ["blue", "green", "yellow", "brown"] },
      { name: "size", value: ["X", "XX", "XL"] },
    ],
    category: "clothes",

    similarProducts: [
      {
        name: "RIBBED BODYCON DRESS",
        price: 400,
        slug: "ribbed-bodycon-dress",
        images: [
          "https://cdn.shopify.com/s/files/1/0437/1913/1293/products/g-01_1080x.jpg?v=1595905296",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        category: "clothes",
      },
      {
        name: "CYAN CUFFED CHINO SHORTS",
        slug: "cyan-cuffed-chino-shorts",
        price: 200,
        images: [
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
        category: "clothes",
      },
      {
        name: "RED COTTON LEGGINGS 2",
        price: 100,
        slug: "red-cotton-leggings-2",
        images: [
          "https://images.unsplash.com/photo-1566206091558-7f218b696731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,

        category: "clothes",
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
      {
        name: "RED COTTON LEGGINGS-3",
        price: 20,
        slug: "red-cotton-leggings-3",
        images: [
          "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        ],
        inStock: true,
        category: "clothes",
        attributes: [
          { name: "color", value: ["blue", "green", "yellow", "brown"] },
          { name: "size", value: ["X", "XX", "XL"] },
        ],
      },
    ],
  },
  // {"name":"RED COTTON LEGGINGS", "price": 20, "image":"https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
  // {"name":"RED COTTON LEGGINGS", "price": 20, "image":"https://images.unsplash.com/photo-1545291730-faff8ca1d4b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
  // {"name":"RED COTTON LEGGINGS", "price": 20, "image":"https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
  // {"name":"RED COTTON LEGGINGS", "price": 20, "image":"https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
];
export const Categoryitems = [
  {
    name: "Accessories",
    image:
      "https://cdn.shopify.com/s/files/1/0437/1913/1293/files/acessories_1728x.jpg?v=1613575958",
  },
  {
    name: "Clothing",
    image:
      "	https://cdn.shopify.com/s/files/1/0437/1913/1293/files/clothing_1728x.jpg?v=1613575958",
  },
  {
    name: "Handbag",
    image:
      "	https://cdn.shopify.com/s/files/1/0437/1913/1293/files/handbag_1728x.jpg?v=1613575959",
  },
  {
    name: "Footware",
    image:
      "https://cdn.shopify.com/s/files/1/0437/1913/1293/files/footerwear_1728x.jpg?v=1613575958",
  },
];
