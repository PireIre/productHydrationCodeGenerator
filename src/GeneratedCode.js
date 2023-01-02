import { CopyBlock, dracula } from "react-code-blocks";

function GeneratedCode( {productInfo, showId, checkoutUrl } ) {
  
  function toObject(arr) {
    var rv = {};
    for (var i = 0; i < arr.length; ++i)
    rv[i] = arr[i];
    return rv;
  }
  
  const productCode = `const dummyProductObject = 
    ${JSON.stringify(toObject(productInfo))}
  
    const storeApi = {};
    storeApi.getProduct = (productIdentifier) => {
      return Promise.resolve(dummyProductObject[productIdentifier]);
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
              .name(yourProduct.title)
              .brandName(yourProduct.brand)
              .description(yourProduct.description)
              .sku(sku)
              .defaultVariationIndex(0)
              .variations((variationFactory) =>
                yourProduct.colors.map((variation) =>
                  variationFactory()
                  .attributes((attributeFactory) =>
                    attributeFactory
                    .colorName(variation.name)
                    .colorHexCode(variation.colorHexCode)
                  )
                  .imageUrls(variation.images)
                  .name(variation.name)
                  .sku(sku)
                  .sizes((sizeFactory) =>
                    variation.sizes.map((size) =>
                      sizeFactory()
                      .name(size.name)
                      .inStock(size.quantityInStock > 0)
                      .sku(sku)
                      .price((priceFactory) =>
                        priceFactory
                        .current(yourProduct.discountedPrice)
                        .original(yourProduct.price)
                        .currency(yourProduct.currency)
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
        player.showCheckout('${checkoutUrl}');
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
        showId: '${showId}',
        type: 'overlay'
      });
    })();`
    
  return (
    <CopyBlock
      text= {productCode}
      language="javascript"
      showLineNumbers={false}
      theme={dracula} 
    />
  );
}

export default GeneratedCode;