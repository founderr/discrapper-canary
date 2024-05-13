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
  u = n("241159"),
  d = n("496929"),
  c = n("558381"),
  f = n("728345"),
  p = n("812206"),
  m = n("886176"),
  S = n("238"),
  h = n("507608"),
  g = n("689938"),
  v = n("135143");

function x(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: r,
    subscriptionGroupListing: x
  } = e, T = (0, a.useStateFromStores)([p.default], () => p.default.getApplication(i), [i]), [C, I] = s.useState(() => p.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  }), E = s.useRef(null), [_, L] = s.useState(!0), j = () => {
    var e;
    (null === (e = E.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? L(!1) : L(!0)
  };
  s.useEffect(() => {
    0 === C.status && (I({
      status: 1
    }), f.default.fetchApplication(i).then(() => {
      I({
        status: 2
      })
    }).catch(e => {
      I({
        status: 3,
        error: e.message
      })
    }))
  }, [i, C.status]);
  let N = (0, a.useStateFromStores)([S.default], () => S.default.getStoreLayout(i), [i]);
  if (s.useEffect(() => {
      (0, u.fetchStoreDirectoryLayout)(i), (0, c.fetchAllStoreListingsForApplication)(i)
    }, [i]), s.useEffect(() => {
      (0, d.fetchUserEntitlementsForApplication)(i, !1)
    }, [i]), null == T) return null;
  let R = g.default.Messages.STOREFRONT_TITLE.format({
    appName: T.name
  });
  return (0, l.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": R,
    size: o.ModalSize.DYNAMIC,
    className: v.modal,
    children: [(0, l.jsxs)(o.ModalHeader, {
      className: v.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: v.modalTitle,
        children: [(0, l.jsx)(m.default, {}), (0, l.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: R
        })]
      }), (0, l.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: v.modalCloseBtn
      })]
    }), (0, l.jsx)(o.ModalContent, {
      scrollerRef: e => {
        null != e && (E.current = e, j())
      },
      onScroll: j,
      children: (0, l.jsx)(h.default, {
        app: T,
        subscriptionGroupListing: x,
        guildId: r,
        storeLayout: N
      })
    }), (0, l.jsx)("div", {
      className: v.containerScrollGradient,
      "data-shown": _
    })]
  })
}(r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED", r[r.ERROR = 3] = "ERROR"