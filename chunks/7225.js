"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var i, s, l = n("735250"),
  a = n("470079"),
  r = n("442837"),
  o = n("481060"),
  c = n("558381"),
  d = n("728345"),
  u = n("812206"),
  f = n("886176"),
  h = n("55563"),
  m = n("507608"),
  x = n("981631"),
  v = n("689938"),
  p = n("1931");

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: s,
    subscriptionGroupListing: g
  } = e, j = (0, r.useStateFromStores)([u.default], () => u.default.getApplication(i)), [C, S] = a.useState(() => u.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  });
  a.useEffect(() => {
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
  let T = (0, r.useStateFromStoresArray)([h.default], () => h.default.getForApplication(i).filter(e => {
    switch (e.type) {
      case x.SKUTypes.DURABLE:
      case x.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [i]);
  if (a.useEffect(() => {
      (0, c.fetchAllStoreListingsForApplication)(i)
    }, [i]), null == j) return null;
  let N = v.default.Messages.STOREFRONT_TITLE.format({
    appName: j.name
  });
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": N,
    size: o.ModalSize.DYNAMIC,
    className: p.modal,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: p.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: p.modalTitle,
        children: [(0, l.jsx)(f.default, {}), (0, l.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: N
        })]
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t
      })]
    }), (0, l.jsx)(o.ModalContent, {
      children: (0, l.jsx)(m.default, {
        app: j,
        subscriptionGroupListing: g,
        guildId: s,
        products: T
      })
    })]
  })
}(s = i || (i = {}))[s.NONE = 0] = "NONE", s[s.FETCHING = 1] = "FETCHING", s[s.FETCHED = 2] = "FETCHED", s[s.ERROR = 3] = "ERROR"