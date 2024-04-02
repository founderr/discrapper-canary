"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var i, l, r = n("735250"),
  s = n("470079"),
  a = n("442837"),
  o = n("481060"),
  c = n("558381"),
  d = n("728345"),
  u = n("812206"),
  f = n("886176"),
  m = n("55563"),
  h = n("507608"),
  x = n("981631"),
  v = n("689938"),
  p = n("1931");

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: l,
    subscriptionGroupListing: g
  } = e, j = (0, a.useStateFromStores)([u.default], () => u.default.getApplication(i)), [C, S] = s.useState(() => u.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  });
  s.useEffect(() => {
    0 === C.status && (S({
      status: 1
    }), d.default.fetchApplication(i).then(() => {
      S({
        status: 2
      })
    }).catch(e => {
      S({
        status: 3,
        error: e.message
      })
    }))
  }, [i, C.status]);
  let T = (0, a.useStateFromStoresArray)([m.default], () => m.default.getForApplication(i).filter(e => {
    switch (e.type) {
      case x.SKUTypes.DURABLE:
      case x.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [i]);
  if (s.useEffect(() => {
      (0, c.fetchAllStoreListingsForApplication)(i)
    }, [i]), null == j) return null;
  let N = v.default.Messages.STOREFRONT_TITLE.format({
    appName: j.name
  });
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": N,
    size: o.ModalSize.DYNAMIC,
    className: p.modal,
    children: [(0, r.jsxs)(o.ModalHeader, {
      className: p.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: p.modalTitle,
        children: [(0, r.jsx)(f.default, {}), (0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: N
        })]
      }), (0, r.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, r.jsx)(o.ModalContent, {
      children: (0, r.jsx)(h.default, {
        app: j,
        subscriptionGroupListing: g,
        guildId: l,
        products: T
      })
    })]
  })
}(l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR"