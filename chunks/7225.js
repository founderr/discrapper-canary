"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120");
var i, l, r = n("735250"),
  s = n("470079"),
  a = n("442837"),
  o = n("481060"),
  u = n("241159"),
  d = n("496929"),
  c = n("558381"),
  f = n("728345"),
  p = n("812206"),
  m = n("886176"),
  h = n("238"),
  S = n("507608"),
  g = n("689938"),
  v = n("135143");

function T(e) {
  let {
    onClose: t,
    transitionState: n,
    appId: i,
    guildId: l,
    subscriptionGroupListing: T
  } = e, x = (0, a.useStateFromStores)([p.default], () => p.default.getApplication(i), [i]), [_, I] = s.useState(() => p.default.isFetchingApplication(i) ? {
    status: 1
  } : {
    status: 0
  }), C = s.useRef(null), [E, L] = s.useState(!0), j = () => {
    var e;
    (null === (e = C.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? L(!1) : L(!0)
  };
  s.useEffect(() => {
    0 === _.status && (I({
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
  }, [i, _.status]);
  let N = (0, a.useStateFromStores)([h.default], () => h.default.getStoreLayout(i), [i]);
  if (s.useEffect(() => {
      (0, u.fetchStoreDirectoryLayout)(i), (0, c.fetchAllStoreListingsForApplication)(i)
    }, [i]), s.useEffect(() => {
      (0, d.fetchUserEntitlementsForApplication)(i, !1)
    }, [i]), null == x) return null;
  let R = g.default.Messages.STOREFRONT_TITLE.format({
    appName: x.name
  });
  return (0, r.jsxs)(o.ModalRoot, {
    transitionState: n,
    "aria-label": R,
    size: o.ModalSize.DYNAMIC,
    className: v.modal,
    children: [(0, r.jsxs)(o.ModalHeader, {
      className: v.modalHeader,
      children: [(0, r.jsxs)("div", {
        className: v.modalTitle,
        children: [(0, r.jsx)(m.default, {}), (0, r.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: R
        })]
      }), (0, r.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: v.modalCloseBtn
      })]
    }), (0, r.jsx)(o.ModalContent, {
      scrollerRef: e => {
        null != e && (C.current = e, j())
      },
      onScroll: j,
      children: (0, r.jsx)(S.default, {
        app: x,
        subscriptionGroupListing: T,
        guildId: l,
        storeLayout: N
      })
    }), (0, r.jsx)("div", {
      className: v.containerScrollGradient,
      "data-shown": E
    })]
  })
}(l = i || (i = {}))[l.NONE = 0] = "NONE", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR"