"use strict";
s.r(e), s.d(e, {
  default: function() {
    return E
  }
}), s("47120");
var a, l, i = s("735250"),
  n = s("470079"),
  o = s("442837"),
  r = s("481060"),
  u = s("728345"),
  d = s("812206"),
  c = s("886176"),
  p = s("270144"),
  f = s("283836"),
  h = s("507608"),
  m = s("689938"),
  N = s("135143");

function E(t) {
  let {
    onClose: e,
    transitionState: s,
    appId: a,
    guildId: l
  } = t, E = (0, o.useStateFromStores)([d.default], () => d.default.getApplication(a), [a]), [S, R] = n.useState(() => d.default.isFetchingApplication(a) ? {
    status: 1
  } : {
    status: 0
  }), g = n.useRef(null), [C, T] = n.useState(!0), j = () => {
    var t;
    (null === (t = g.current) || void 0 === t ? void 0 : t.isScrolledToBottom()) === !0 ? T(!1) : T(!0)
  };
  n.useEffect(() => {
    0 === S.status && (R({
      status: 1
    }), u.default.fetchApplication(a).then(() => {
      R({
        status: 2
      })
    }).catch(t => {
      R({
        status: 3,
        error: t.message
      })
    }))
  }, [a, S.status]);
  let {
    subs: x,
    otps: F,
    subscriptionGroupListing: v
  } = (0, f.useRefreshedStorefrontProducts)(a, l);
  if ((0, p.useFetchListingsForApplication)(a, null == E ? void 0 : E.primarySkuId, {
      refetchOnMount: !0
    }), null == E) return null;
  let M = m.default.Messages.STOREFRONT_TITLE.format({
    appName: E.name
  });
  return (0, i.jsxs)(r.ModalRoot, {
    transitionState: s,
    "aria-label": M,
    size: r.ModalSize.DYNAMIC,
    className: N.modal,
    children: [(0, i.jsxs)(r.ModalHeader, {
      className: N.modalHeader,
      children: [(0, i.jsxs)("div", {
        className: N.modalTitle,
        children: [(0, i.jsx)(c.default, {}), (0, i.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: M
        })]
      }), (0, i.jsx)(r.ModalCloseButton, {
        onClick: e,
        className: N.modalCloseBtn
      })]
    }), (0, i.jsx)(r.ModalContent, {
      scrollerRef: t => {
        null != t && (g.current = t, j())
      },
      onScroll: j,
      children: (0, i.jsx)(h.AppStorefront, {
        app: E,
        subscriptionGroupListing: v,
        guildId: l,
        subscriptionListings: x,
        otpListings: F
      })
    }), (0, i.jsx)("div", {
      className: N.containerScrollGradient,
      "data-shown": C
    })]
  })
}(l = a || (a = {}))[l.NONE = 0] = "NONE", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR"