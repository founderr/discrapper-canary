"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("47120");
var i, r, s = n("735250"),
  l = n("470079"),
  a = n("442837"),
  o = n("481060"),
  c = n("496929"),
  d = n("558381"),
  u = n("728345"),
  f = n("812206"),
  h = n("886176"),
  m = n("55563"),
  p = n("507608"),
  S = n("981631"),
  v = n("689938"),
  g = n("1931");

function x(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: x
  } = e, C = (0, a.useStateFromStores)([f.default], () => f.default.getApplication(i)), [T, j] = l.useState(() => f.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  });
  l.useEffect(() => {
    0 === T.status && (j({
      status: 1
    }), u.default.fetchApplication(i).then(() => {
      j({
        status: 2
      })
    }).catch(e => {
      j({
        status: 3,
        error: e.message
      })
    }))
  }, [i, T.status]);
  let N = (0, a.useStateFromStoresArray)([m.default], () => m.default.getForApplication(i).filter(e => {
    switch (e.type) {
      case S.SKUTypes.DURABLE:
      case S.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [i]);
  if (l.useEffect(() => {
      (0, d.fetchAllStoreListingsForApplication)(i)
    }, [i]), l.useEffect(() => {
      (0, c.fetchUserEntitlementsForApplication)(i, !1)
    }, [i]), null == C) return null;
  let L = v.default.Messages.STOREFRONT_TITLE.format({
    appName: C.name
  });
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": L,
    size: o.ModalSize.DYNAMIC,
    className: g.modal,
    children: [(0, s.jsxs)(o.ModalHeader, {
      className: g.modalHeader,
      children: [(0, s.jsxs)("div", {
        className: g.modalTitle,
        children: [(0, s.jsx)(h.default, {}), (0, s.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: L
        })]
      }), (0, s.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: g.modalCloseBtn
      })]
    }), (0, s.jsx)(o.ModalContent, {
      children: (0, s.jsx)(p.default, {
        app: C,
        subscriptionGroupListing: x,
        guildId: r,
        products: N
      })
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"