i.d(n, {
  U: function() {
    return P
  }
});
var t = i(735250),
  l = i(470079),
  a = i(120356),
  s = i.n(a),
  r = i(442837),
  o = i(481060),
  c = i(765717),
  d = i(283836),
  u = i(507608),
  p = i(147496),
  _ = i(519896),
  m = i(270144),
  I = i(171246),
  h = i(55563),
  g = i(147890),
  E = i(272242),
  v = i(981631),
  A = i(689938),
  R = i(580954);

function P(e) {
  let {
    appId: n,
    guildId: i
  } = e, {
    subscriptionGroupListing: l
  } = (0, m.F5)(n, i), {
    subs: a,
    otps: r
  } = (0, d.q)(n, i);
  return (0, t.jsxs)(t.Fragment, {
    children: [a.length > 0 && null != l && (0, t.jsxs)("div", {
      className: R.productSection,
      children: [(0, t.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: A.Z.Messages.STOREFRONT_APP_SUBSCRIPTIONS
      }), (0, t.jsx)("div", {
        className: s()(R.productList, R.subList),
        children: a.map(e => (0, t.jsx)(u.zz, {
          appId: n,
          groupListingId: l.id,
          guildId: i,
          listing: e,
          groupListingType: (0, I.KW)(l.sku_flags) ? "user" : "guild",
          onDetails: () => {
            (0, g.goToApplicationStoreSku)({
              applicationId: n,
              skuId: e.id
            })
          }
        }, e.id))
      })]
    }), r.length > 0 && (0, t.jsxs)("div", {
      className: R.productSection,
      children: [(0, t.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: A.Z.Messages.STOREFRONT_APP_PRODUCTS
      }), (0, t.jsx)("div", {
        className: s()(R.productList, R.itemList),
        children: r.map(e => (0, t.jsx)(u.hd, {
          skuId: e.sku.id,
          appId: n,
          onDetails: () => {
            (0, g.goToApplicationStoreSku)({
              applicationId: n,
              skuId: e.sku.id
            })
          }
        }, e.id))
      })]
    }), (0, t.jsx)(c.Z, {
      path: v.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(":applicationId", ":skuId"),
      exact: !0,
      render: e => (0, t.jsx)(C, {
        ...e,
        subscriptionGroupListing: null != l ? l : void 0
      })
    })]
  })
}

function C(e) {
  let {
    match: {
      params: {
        applicationId: n,
        skuId: i
      }
    },
    subscriptionGroupListing: a
  } = e, s = (0, r.e7)([h.Z], () => h.Z.get(i), [i]), c = l.useId();
  return l.useLayoutEffect(() => {
    if (null != s) switch (s.type) {
      case v.epS.CONSUMABLE:
      case v.epS.DURABLE:
        return function(e, n, i) {
          (0, o.openModal)(e => {
            let {
              onClose: l,
              transitionState: a
            } = e;
            return (0, t.jsx)(p.ItemDetailsModal, {
              appId: n,
              skuId: i,
              onClose: l,
              transitionState: a
            })
          }, {
            modalKey: e,
            onCloseCallback() {
              !T() && (0, g.goToApplicationSection)({
                applicationId: n,
                section: E.ApplicationDirectoryProfileSections.STORE
              })
            }
          })
        }(c, n, i);
      case v.epS.SUBSCRIPTION: {
        var e;
        if (null == a) return;
        let l = null === (e = a.subscription_listings) || void 0 === e ? void 0 : e.find(e => e.id === i);
        if (null == l) return;
        return function(e, n, i, l) {
          (0, o.openModal)(e => {
            let {
              onClose: a,
              transitionState: s
            } = e;
            return (0, t.jsx)(_.SubscriptionDetailsModal, {
              appId: n,
              groupListingId: i.id,
              groupListingType: (0, I.KW)(i.sku_flags) ? "user" : "guild",
              skuId: l.id,
              onClose: a,
              transitionState: s
            })
          }, {
            modalKey: e,
            onCloseCallback() {
              !T() && (0, g.goToApplicationSection)({
                applicationId: n,
                section: E.ApplicationDirectoryProfileSections.STORE
              })
            }
          })
        }(c, n, a, l)
      }
    }
  }, [n, c, s, i, a]), l.useLayoutEffect(() => () => {
    (0, o.closeModal)(c)
  }, [c]), null
}

function T() {
  return window.location.pathname.startsWith("/login")
}