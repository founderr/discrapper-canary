"use strict";
s.r(e), s.d(e, {
  default: function() {
    return L
  }
}), s("47120");
var l, a, i = s("735250"),
  n = s("470079"),
  r = s("442837"),
  o = s("481060"),
  C = s("728345"),
  d = s("812206"),
  u = s("886176"),
  c = s("283836"),
  h = s("507608"),
  p = s("689938"),
  f = s("135143");

function L(t) {
  let {
    onClose: e,
    transitionState: s,
    appId: l,
    guildId: a,
    subscriptionGroupListing: L
  } = t, m = (0, r.useStateFromStores)([d.default], () => d.default.getApplication(l), [l]), [x, g] = n.useState(() => d.default.isFetchingApplication(l) ? {
    status: 1
  } : {
    status: 0
  }), j = n.useRef(null), [v, N] = n.useState(!0), R = () => {
    var t;
    (null === (t = j.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? N(!1) : N(!0)
  };
  n.useEffect(() => {
    0 === x.status && (g({
      status: 1
    }), C.default.fetchApplication(l).then(() => {
      g({
        status: 2
      })
    }).catch(t => {
      g({
        status: 3,
        error: t.message
      })
    }))
  }, [l, x.status]);
  let {
    subs: E,
    otps: H
  } = (0, c.useRefreshedStorefrontProducts)(l, a);
  if (null == m) return null;
  let M = p.default.Messages.STOREFRONT_TITLE.format({
    appName: m.name
  });
  return (0, i.jsxs)(o.ModalRoot, {
    transitionState: s,
    "aria-label": M,
    size: o.ModalSize.DYNAMIC,
    className: f.modal,
    children: [(0, i.jsxs)(o.ModalHeader, {
      className: f.modalHeader,
      children: [(0, i.jsxs)("div", {
        className: f.modalTitle,
        children: [(0, i.jsx)(u.default, {}), (0, i.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: M
        })]
      }), (0, i.jsx)(o.ModalCloseButton, {
        onClick: e,
        className: f.modalCloseBtn
      })]
    }), (0, i.jsx)(o.ModalContent, {
      scrollerRef: t => {
        null != t && (j.current = t, R())
      },
      onScroll: R,
      children: (0, i.jsx)(h.AppStorefront, {
        app: m,
        subscriptionGroupListing: L,
        guildId: a,
        subscriptionListings: E,
        otpListings: H
      })
    }), (0, i.jsx)("div", {
      className: f.containerScrollGradient,
      "data-shown": v
    })]
  })
}(a = l || (l = {}))[a.NONE = 0] = "NONE", a[a.FETCHING = 1] = "FETCHING", a[a.FETCHED = 2] = "FETCHED", a[a.ERROR = 3] = "ERROR"