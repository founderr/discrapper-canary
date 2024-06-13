"use strict";
i.r(t), i.d(t, {
  ApplicationDirectoryStore: function() {
    return R
  }
});
var l = i("735250"),
  a = i("470079"),
  n = i("120356"),
  s = i.n(n),
  r = i("442837"),
  o = i("481060"),
  c = i("765717"),
  d = i("283836"),
  u = i("507608"),
  p = i("147496"),
  f = i("519896"),
  m = i("270144"),
  _ = i("171246"),
  h = i("55563"),
  I = i("147890"),
  g = i("272242"),
  v = i("981631"),
  A = i("689938"),
  E = i("892768");

function R(e) {
  let {
    appId: t,
    guildId: i
  } = e, {
    subscriptionGroupListing: a
  } = (0, m.useActiveSubscriptionListingForApplication)(t, i), {
    subs: n,
    otps: r
  } = (0, d.useRefreshedStorefrontProducts)(t, i);
  return (0, l.jsxs)(l.Fragment, {
    children: [n.length > 0 && null != a && (0, l.jsxs)("div", {
      className: E.productSection,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: A.default.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, l.jsx)("div", {
        className: s()(E.productList, E.subList),
        children: n.map(e => (0, l.jsx)(u.SubscriptionCardContainer, {
          appId: t,
          groupListingId: a.id,
          guildId: i,
          listing: e,
          groupListingType: (0, _.isApplicationUserSubscription)(a.sku_flags) ? "user" : "guild",
          onDetails: () => {
            (0, I.goToApplicationStoreSku)({
              applicationId: t,
              skuId: e.id
            })
          }
        }, e.id))
      })]
    }), r.length > 0 && (0, l.jsxs)("div", {
      className: E.productSection,
      children: [(0, l.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        color: "header-secondary",
        children: A.default.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, l.jsx)("div", {
        className: s()(E.productList, E.itemList),
        children: r.map(e => (0, l.jsx)(u.ProductCardContainer, {
          skuId: e.sku.id,
          appId: t,
          onDetails: () => {
            (0, I.goToApplicationStoreSku)({
              applicationId: t,
              skuId: e.sku.id
            })
          }
        }, e.id))
      })]
    }), (0, l.jsx)(c.default, {
      path: v.Routes.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      exact: !0,
      render: e => (0, l.jsx)(T, {
        ...e,
        subscriptionGroupListing: null != a ? a : void 0
      })
    })]
  })
}

function T(e) {
  let {
    match: {
      params: {
        applicationId: t,
        skuId: i
      }
    },
    subscriptionGroupListing: n
  } = e, s = (0, r.useStateFromStores)([h.default], () => h.default.get(i), [i]), c = a.useId();
  return a.useLayoutEffect(() => {
    if (null != s) switch (s.type) {
      case v.SKUTypes.CONSUMABLE:
      case v.SKUTypes.DURABLE:
        return function(e, t, i) {
          (0, o.openModal)(e => {
            let {
              onClose: a,
              transitionState: n
            } = e;
            return (0, l.jsx)(p.ItemDetailsModal, {
              appId: t,
              skuId: i,
              onClose: a,
              transitionState: n
            })
          }, {
            modalKey: e,
            onCloseCallback() {
              (0, I.goToApplicationSection)({
                applicationId: t,
                section: g.ApplicationDirectoryProfileSections.STORE
              })
            }
          })
        }(c, t, i);
      case v.SKUTypes.SUBSCRIPTION: {
        var e;
        if (null == n) return;
        let a = null === (e = n.subscription_listings) || void 0 === e ? void 0 : e.find(e => e.id === i);
        if (null == a) return;
        return function(e, t, i, a) {
          (0, o.openModal)(e => {
            let {
              onClose: n,
              transitionState: s
            } = e;
            return (0, l.jsx)(f.SubscriptionDetailsModal, {
              appId: t,
              groupListingId: i.id,
              groupListingType: (0, _.isApplicationUserSubscription)(i.sku_flags) ? "user" : "guild",
              skuId: a.id,
              onClose: n,
              transitionState: s
            })
          }, {
            modalKey: e,
            onCloseCallback() {
              (0, I.goToApplicationSection)({
                applicationId: t,
                section: g.ApplicationDirectoryProfileSections.STORE
              })
            }
          })
        }(c, t, n, a)
      }
    }
  }, [t, c, s, i, n]), a.useLayoutEffect(() => () => {
    (0, o.closeModal)(c)
  }, [c]), null
}