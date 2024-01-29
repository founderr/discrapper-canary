"use strict";
n.r(t), n.d(t, {
  openCollectiblesShop: function() {
    return d
  },
  closeCollectiblesShop: function() {
    return f
  },
  productDetailsOpened: function() {
    return C
  },
  fetchCollectiblesCategories: function() {
    return E
  },
  fetchCollectiblesPurchases: function() {
    return h
  },
  fetchCollectiblesProduct: function() {
    return p
  },
  claimPremiumCollectiblesProduct: function() {
    return I
  },
  validateCollectiblesRecipient: function() {
    return L
  },
  setCollectiblesCategoryItemsViewed: function() {
    return v
  }
});
var r = n("872717"),
  l = n("913144"),
  i = n("54239"),
  s = n("448993"),
  a = n("514296"),
  o = n("407788"),
  u = n("489134"),
  c = n("49111");
n("853987"), n("426497"), n("775416"), n("216719");
let d = e => {
    let {
      openInLayer: t = !0,
      ...n
    } = e;
    l.default.dispatch({
      type: "COLLECTIBLES_SHOP_OPEN",
      ...n
    }), t && (0, i.pushLayer)(c.Layers.COLLECTIBLES_SHOP)
  },
  f = () => {
    l.default.dispatch({
      type: "COLLECTIBLES_SHOP_CLOSE"
    }), (0, i.popLayer)()
  },
  C = e => {
    l.default.dispatch({
      type: "COLLECTIBLES_PRODUCT_DETAILS_OPEN",
      item: e
    })
  },
  E = async e => {
    l.default.dispatch({
      type: "COLLECTIBLES_CATEGORIES_FETCH"
    });
    try {
      let t = await r.default.get({
        url: c.Endpoints.COLLECTIBLES_CATEGORIES,
        query: null != e ? {
          country_code: e
        } : {}
      });
      l.default.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_SUCCESS",
        categories: t.body.map(a.default.fromServer)
      })
    } catch (e) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_CATEGORIES_FETCH_FAILURE",
        error: e
      }), new s.APIError(e)
    }
  }, h = async () => {
    l.default.dispatch({
      type: "COLLECTIBLES_PURCHASES_FETCH"
    });
    try {
      let e = await r.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
      l.default.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: e.body.map(u.default.fromServer)
      })
    } catch (e) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_FAILURE",
        error: e
      }), new s.APIError(e)
    }
  }, p = async (e, t) => {
    l.default.dispatch({
      type: "COLLECTIBLES_PRODUCT_FETCH"
    });
    try {
      let n = await r.default.get({
        url: c.Endpoints.COLLECTIBLES_PRODUCTS(e),
        query: null != t ? {
          country_code: t
        } : {}
      });
      l.default.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        product: o.default.fromServer(n.body)
      })
    } catch (e) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_FAILURE",
        error: e
      }), new s.APIError(e)
    }
  }, I = async e => {
    l.default.dispatch({
      type: "COLLECTIBLES_CLAIM",
      skuId: e
    });
    try {
      var t;
      let n = await r.default.put({
        url: c.Endpoints.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        }
      });
      l.default.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null === (t = n.body) || void 0 === t ? void 0 : t.map(u.default.fromServer)
      })
    } catch (t) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), new s.APIError(t)
    }
  }, L = async (e, t) => {
    try {
      let n = await r.default.get({
        url: c.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        }
      });
      return n.body.valid
    } catch (e) {
      throw new s.APIError(e)
    }
  }, v = e => {
    l.default.dispatch({
      type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
      ...e
    })
  }