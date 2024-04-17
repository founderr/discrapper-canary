"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var i, r, s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  o = n("481060"),
  d = n("558381"),
  c = n("728345"),
  u = n("812206"),
  f = n("886176"),
  h = n("55563"),
  m = n("507608"),
  p = n("981631"),
  S = n("689938"),
  x = n("1931");

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: g
  } = e, v = (0, a.useStateFromStores)([u.default], () => u.default.getApplication(i)), [C, T] = l.useState(() => u.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  });
  l.useEffect(() => {
    0 === C.status && (T({
      status: 1
    }), c.default.fetchApplication(i).then(() => {
      T({
        status: 2
      })
    }).catch(e => {
      T({
        status: 3,
        error: e.message
      })
    }))
  }, [i, C.status]);
  let j = (0, a.useStateFromStoresArray)([h.default], () => h.default.getForApplication(i).filter(e => {
    switch (e.type) {
      case p.SKUTypes.DURABLE:
      case p.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [i]);
  if (l.useEffect(() => {
      (0, d.fetchAllStoreListingsForApplication)(i)
    }, [i]), null == v) return null;
  let N = S.default.Messages.STOREFRONT_TITLE.format({
    appName: v.name
  });
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": N,
    size: o.ModalSize.DYNAMIC,
    className: x.modal,
    children: [(0, s.jsxs)(o.ModalHeader, {
      className: x.modalHeader,
      children: [(0, s.jsxs)("div", {
        className: x.modalTitle,
        children: [(0, s.jsx)(f.default, {}), (0, s.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: N
        })]
      }), (0, s.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, s.jsx)(o.ModalContent, {
      children: (0, s.jsx)(m.default, {
        app: v,
        subscriptionGroupListing: g,
        guildId: r,
        products: j
      })
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"