"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var i, r, l = n("735250"),
  s = n("470079"),
  a = n("442837"),
  o = n("481060"),
  c = n("496929"),
  d = n("558381"),
  u = n("728345"),
  f = n("812206"),
  m = n("886176"),
  p = n("55563"),
  h = n("507608"),
  S = n("981631"),
  v = n("689938"),
  x = n("1931");

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: g
  } = e, T = (0, a.useStateFromStores)([f.default], () => f.default.getApplication(i)), [C, j] = s.useState(() => f.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  }), N = s.useRef(null), [E, I] = s.useState(!0), _ = () => {
    var e;
    (null === (e = N.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? I(!1) : I(!0)
  };
  s.useEffect(() => {
    0 === C.status && (j({
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
  }, [i, C.status]);
  let L = (0, a.useStateFromStoresArray)([p.default], () => p.default.getForApplication(i).filter(e => {
    switch (e.type) {
      case S.SKUTypes.DURABLE:
      case S.SKUTypes.CONSUMABLE:
        return !0;
      default:
        return !1
    }
  }), [i]);
  if (s.useEffect(() => {
      (0, d.fetchAllStoreListingsForApplication)(i)
    }, [i]), s.useEffect(() => {
      (0, c.fetchUserEntitlementsForApplication)(i, !1)
    }, [i]), null == T) return null;
  let R = v.default.Messages.STOREFRONT_TITLE.format({
    appName: T.name
  });
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": R,
    size: o.ModalSize.DYNAMIC,
    className: x.modal,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: x.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: x.modalTitle,
        children: [(0, l.jsx)(m.default, {}), (0, l.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: R
        })]
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: x.modalCloseBtn
      })]
    }), (0, l.jsx)(o.ModalContent, {
      scrollerRef: e => {
        null != e && (N.current = e, _())
      },
      onScroll: _,
      children: (0, l.jsx)(h.default, {
        app: T,
        subscriptionGroupListing: g,
        guildId: r,
        products: L
      })
    }), (0, l.jsx)("div", {
      className: x.containerScrollGradient,
      "data-shown": E
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"