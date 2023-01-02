export default `const dummyProductObject = {
productId: '1111',
  name: 'Bambuser Hoodie',
  brand: 'Bambuser',
  shortDescription: 'Worlds best hoodie',
  description: 'Jacket in sweatshirt fabric with a jersey-lined drawstring hood, zip down the front, side pockets and ribbing at the cuffs and hem.',
  defaultVariationIndex: 0,
  price: 100,
  price_discount: true,
  colors: [{
      variationId: '1111-black',
      name: 'Black Bambuser Hoodie',
      colorName: 'black',
      colorHexCode: '#000000',
      images: [
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-front.png',
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-right.jpeg',
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-back.jpeg',
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/black-hoodie-left.jpeg'
      ],
      sizes: [{
          sizeId: '1111-black-small',
          currency: 'SEK',
          current: 100,
          original: 120,
          name: 'Small',
          quantityInStock: 9
        },
        {
          sizeId: '1111-black-xlarge',
          currency: 'SEK',
          current: 100,
          original: 120,
          name: 'X-Large',
          quantityInStock: 3
        }
      ]
    },
    {
      variationId: '1111-white',
      name: 'White Bambuser Hoodie',
      colorName: 'white',
      colorHexCode: '#FFFFFF',
      images: [
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-front.png',
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-right.jpeg',
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-back.jpeg',
        'https://demo.bambuser.shop/wp-content/uploads/2021/07/white-hoodie-left.jpeg'
      ],
      sizes: [{
          sizeId: '1111-white-small',
          currency: 'SEK',
          current: 100,
          original: 120,
          name: 'Small',
          quantityInStock: 8
        },
        {
          sizeId: '1111-white-xlarge',
          currency: 'SEK',
          current: 100,
          original: 120,
          name: 'X-Large',
          quantityInStock: 0
        }
      ]
    }
  ]
};

const storeApi = {};
storeApi.getProduct = (productIdentifier) => {
  return Promise.resolve(dummyProductObject);
};
storeApi.addToCart = (sku) => {
  return Promise.resolve({ success: true });
};
storeApi.updateItemInCart = (sku, quantity) => {
  return Promise.resolve({ success: true });
};
storeApi.removeItemFromCart = (sku, quantity) => {
  return Promise.resolve({ success: true });
};
storeApi.getCartState = () => {
  return Promise.resolve(0);
};
window.onBambuserLiveShoppingReady = (player) => {
  player.configure({
    currency: 'USD', 

    locale: 'en-US',
    buttons: {
      dismiss: player.BUTTON.MINIMIZE, 
      checkout: player.BUTTON.MINIMIZE
    }
  });
  player.on(player.EVENT.PROVIDE_PRODUCT_DATA, (event) => {
    event.products.forEach(({
      ref: sku,
      url,
      id: bambuserId   
    }) => {
     storeApi.getProduct(sku).then(yourProduct => {
        player.updateProduct(bambuserId, (productFactory) =>
        productFactory
        .product((productDetailFactory) =>
          productDetailFactory
          .name(yourProduct.name)
          .brandName(yourProduct.brand)
          .introduction(yourProduct.shortDescription)
          .description(yourProduct.description)
          .sku(yourProduct.productId)
          .defaultVariationIndex(0)
          .variations((variationFactory) =>
            yourProduct.colors.map((variation) =>
              variationFactory()
              .attributes((attributeFactory) =>
                attributeFactory
                .colorName(variation.colorName)
                .colorHexCode(variation.colorHexCode)
              )
              .imageUrls(variation.images)
              .name(variation.name)
              .sku(variation.variationId)
              .sizes((sizeFactory) =>
                variation.sizes.map((size) =>
                  sizeFactory()
                  .name(size.name)
                  .inStock(size.quantityInStock > 0)
                  .sku(size.sizeId)
                  .price((priceFactory) =>
                    priceFactory
                    .current(size.current)
                    .original(size.original)
                    .currency(size.currency)
                  )
                )
              )
            )
          )
        )
      )
     });
    });
  });
  player.on(player.EVENT.ADD_TO_CART, (addedItem, callback) => {
    storeApi.addToCart(addedItem.sku)
      .then(() => callback(true))
      .catch(error => {
        if (error.message === yourOutOfStockErrorMessage) {
          callback({
            success: false,
            reason: 'out-of-stock',
          });
        } else {
          callback(false);
        }
      });
  });
  player.on(player.EVENT.UPDATE_ITEM_IN_CART, (updatedItem, callback) => {
    if (updatedItem.quantity > 0) {
      storeApi.updateItemInCart({
          sku: updatedItem.sku,
          quantity: updatedItem.quantity,
        })
        .then(() => {
          callback(true);
        })
        .catch(function(error) {
          if (error.type === 'out-of-stock') {
            callback({
              success: false,
              reason: 'out-of-stock',
            });
          } else {
            callback(false);
          }
        });
    }
    if (updatedItem.quantity === 0) {
      storeApi.removeItemFromCart(updatedItem.sku)
        .then(() => {
          callback(true);
        })
        .catch(() => {
          callback(false);
        });
    }
  });
  player.on(player.EVENT.CHECKOUT, () => {
    player.showCheckout(window.location.origin + '/cart');
  });
  player.on(player.EVENT.SYNC_CART_STATE, () => {
    storeApi.getCartState().then((response) => {
      if (response.item_count == 0) {
        player.updateCart({
          items: []
        });
      }
    });
  });
};
(function() {
  if (!window.initBambuserLiveShopping) {
    window.initBambuserLiveShopping = function(item) {
      window.initBambuserLiveShopping.queue.push(item);
    };
    window.initBambuserLiveShopping.queue = [];
    const scriptNode = document.createElement('script');
    scriptNode['src'] = 'https://lcx-embed.bambuser.com/brand-name/embed.js';
    document.body.appendChild(scriptNode);
  }
  window.initBambuserLiveShopping({
    showId: '3liU6PomTpJ9dzLr90BN',
    type: 'overlay'
  });
})();`