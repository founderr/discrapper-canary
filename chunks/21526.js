"use strict";
r.r(t), r.d(t, {
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
    return v
  },
  setCollectiblesCategoryItemsViewed: function() {
    return L
  }
});
var n = r("872717"),
  l = r("913144"),
  i = r("54239"),
  s = r("448993"),
  a = r("514296"),
  u = r("407788"),
  o = r("489134"),
  c = r("49111");
r("853987"), r("426497"), r("775416"), r("216719");
let d = e => {
    let {
      openInLayer: t = !0,
      ...r
    } = e;
    l.default.dispatch({
      type: "COLLECTIBLES_SHOP_OPEN",
      ...r
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
      let t = await n.default.get({
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
      let e = await n.default.get(c.Endpoints.COLLECTIBLES_PURCHASES);
      l.default.dispatch({
        type: "COLLECTIBLES_PURCHASES_FETCH_SUCCESS",
        purchases: e.body.map(o.default.fromServer)
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
      let r = await n.default.get({
        url: c.Endpoints.COLLECTIBLES_PRODUCTS(e),
        query: null != t ? {
          country_code: t
        } : {}
      });
      l.default.dispatch({
        type: "COLLECTIBLES_PRODUCT_FETCH_SUCCESS",
        product: u.default.fromServer(r.body)
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
      let r = await n.default.put({
        url: c.Endpoints.COLLECTIBLES_CLAIM,
        body: {
          sku_id: e
        }
      });
      l.default.dispatch({
        type: "COLLECTIBLES_CLAIM_SUCCESS",
        skuId: e,
        purchases: null === (t = r.body) || void 0 === t ? void 0 : t.map(o.default.fromServer)
      })
    } catch (t) {
      throw l.default.dispatch({
        type: "COLLECTIBLES_CLAIM_FAILURE",
        skuId: e,
        error: t
      }), new s.APIError(t)
    }
  }, v = async (e, t) => {
    try {
      let r = await n.default.get({
        url: c.Endpoints.COLLECTIBLES_VALID_GIFT_RECIPIENT,
        query: {
          sku_id: t,
          recipient_id: e
        }
      });
      return r.body.valid
    } catch (e) {
      throw new s.APIError(e)
    }
  }, L = e => {
    l.default.dispatch({
      type: "COLLECTIBLES_CATEGORY_ITEMS_VIEWED",
      ...e
    })
  }