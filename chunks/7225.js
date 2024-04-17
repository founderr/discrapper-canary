"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var i, r, l = n("735250"),
  s = n("470079"),
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
  g = n("1931");

function x(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: x
  } = e, v = (0, a.useStateFromStores)([u.default], () => u.default.getApplication(i)), [C, T] = s.useState(() => u.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  });
  s.useEffect(() => {
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
  if (s.useEffect(() => {
      (0, d.fetchAllStoreListingsForApplication)(i)
    }, [i]), null == v) return null;
  let N = S.default.Messages.STOREFRONT_TITLE.format({
    appName: v.name
  });
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": N,
    size: o.ModalSize.DYNAMIC,
    className: g.modal,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: g.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: g.modalTitle,
        children: [(0, l.jsx)(f.default, {}), (0, l.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: N
        })]
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: g.modalCloseBtn
      })]
    }), (0, l.jsx)(o.ModalContent, {
      children: (0, l.jsx)(m.default, {
        app: v,
        subscriptionGroupListing: x,
        guildId: r,
        products: j
      })
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"