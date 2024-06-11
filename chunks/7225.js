"use strict";
i.r(t), i.d(t, {
  default: function() {
    return S
  }
}), i("47120");
var n, l, s = i("735250"),
  a = i("470079"),
  r = i("442837"),
  o = i("481060"),
  d = i("241159"),
  u = i("496929"),
  c = i("558381"),
  p = i("728345"),
  f = i("812206"),
  m = i("886176"),
  g = i("238"),
  v = i("507608"),
  h = i("689938"),
  C = i("135143");

function S(e) {
  let {
    onClose: t,
    transitionState: i,
    appId: n,
    guildId: l,
    subscriptionGroupListing: S
  } = e, x = (0, r.useStateFromStores)([f.default], () => f.default.getApplication(n), [n]), [T, L] = a.useState(() => f.default.isFetchingApplication(n) ? {
    status: 1
  } : {
    status: 0
  }), R = a.useRef(null), [j, _] = a.useState(!0), I = () => {
    var e;
    (null === (e = R.current) || void 0 === e ? void 0 : e.isScrolledToBottom()) === !0 ? _(!1) : _(!0)
  };
  a.useEffect(() => {
    0 === T.status && (L({
      status: 1
    }), p.default.fetchApplication(n).then(() => {
      L({
        status: 2
      })
    }).catch(e => {
      L({
        status: 3,
        error: e.message
      })
    }))
  }, [n, T.status]);
  let E = (0, r.useStateFromStores)([g.default], () => g.default.getStoreLayout(n), [n]);
  if (a.useEffect(() => {
      (0, d.fetchStoreDirectoryLayout)(n), (0, c.fetchAllStoreListingsForApplication)(n)
    }, [n]), a.useEffect(() => {
      (0, u.fetchUserEntitlementsForApplication)(n, !1)
    }, [n]), null == x) return null;
  let N = h.default.Messages.STOREFRONT_TITLE.format({
    appName: x.name
  });
  return (0, s.jsxs)(o.ModalRoot, {
    transitionState: i,
    "aria-label": N,
    size: o.ModalSize.DYNAMIC,
    className: C.modal,
    children: [(0, s.jsxs)(o.ModalHeader, {
      className: C.modalHeader,
      children: [(0, s.jsxs)("div", {
        className: C.modalTitle,
        children: [(0, s.jsx)(m.default, {}), (0, s.jsx)(o.Heading, {
          variant: "heading-md/semibold",
          children: N
        })]
      }), (0, s.jsx)(o.ModalCloseButton, {
        onClick: t,
        className: C.modalCloseBtn
      })]
    }), (0, s.jsx)(o.ModalContent, {
      scrollerRef: e => {
        null != e && (R.current = e, I())
      },
      onScroll: I,
      children: (0, s.jsx)(v.default, {
        app: x,
        subscriptionGroupListing: S,
        guildId: l,
        storeLayout: E
      })
    }), (0, s.jsx)("div", {
      className: C.containerScrollGradient,
      "data-shown": j
    })]
  })
}(l = n || (n = {}))[l.NONE = 0] = "NONE", l[l.FETCHING = 1] = "FETCHING", l[l.FETCHED = 2] = "FETCHED", l[l.ERROR = 3] = "ERROR"