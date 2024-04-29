"use strict";
t.r(a), t.d(a, {
  TwoWayLinkPreConnect: function() {
    return f
  }
}), t("411104");
var n = t("735250"),
  s = t("470079"),
  l = t("512722"),
  r = t.n(l),
  o = t("478677"),
  i = t("481060"),
  c = t("570140"),
  d = t("275759"),
  u = t("202120"),
  N = t("710845"),
  h = t("285952"),
  x = t("441957"),
  m = t("689938"),
  C = t("357331");
let T = new N.default("TwoWayLink");

function f(e) {
  let {
    platformType: a,
    isWaitingForConnection: t,
    onWaitingForConnection: l,
    expectedCallbackState: N,
    onAuthToken: f,
    onError: p,
    onClose: E,
    img: j,
    title: y,
    body: k,
    redirectDestination: v
  } = e, L = s.useCallback(async () => {
    let e;
    try {
      if (e = await (0, u.openProviderAuthorize)(a, {
          twoWayLinkType: o.TwoWayLinkType.DESKTOP
        }), null == e) throw Error("missing authorizeURL")
    } catch (e) {
      T.error("Error opening provider authorize page", e), p();
      return
    }
    let {
      state: t
    } = (0, d.getCallbackParamsFromURL)(e);
    r()(null != t, "Authorize URL state query parameter must be present"), null == l || l(t)
  }, [a, p, l]), g = s.useCallback(e => {
    let {
      callbackCode: t,
      callbackState: n
    } = e;
    if (n !== N) {
      T.warn("".concat(a, " link: received mismatching callback state!"));
      return
    }
    f({
      callbackCode: t,
      callbackState: n
    })
  }, [a, N, f]);
  return s.useEffect(() => (c.default.subscribe("USER_CONNECTIONS_LINK_CALLBACK", g), () => {
    c.default.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", g)
  }), [g]), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(i.ModalHeader, {
      direction: h.default.Direction.VERTICAL,
      className: C.header,
      separator: !1,
      children: [(0, n.jsx)(i.Text, {
        className: C.stepHeader,
        variant: "text-xs/bold",
        color: "header-secondary",
        children: m.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
          number: 1,
          total: 2
        })
      }), (0, n.jsxs)("div", {
        className: C.illustration,
        children: [j, " "]
      }), (0, n.jsx)(i.Heading, {
        className: C.title,
        variant: "heading-xl/extrabold",
        children: y
      }), null != E && (0, n.jsx)(i.ModalCloseButton, {
        className: C.closeButton,
        onClick: E
      })]
    }), (0, n.jsxs)(i.ModalContent, {
      className: C.body,
      paddingFix: !1,
      children: [(0, n.jsx)(i.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: k
      }), !t && (0, n.jsx)(i.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "header-secondary",
        children: m.default.Messages.CONSOLE_REDIRECT_NOTICE.format({
          redirectUrl: v
        })
      })]
    }), (0, n.jsx)(i.ModalFooter, {
      className: C.footer,
      children: (0, n.jsxs)(i.Button, {
        className: C.footerButton,
        color: t ? i.Button.Colors.PRIMARY : i.Button.Colors.BRAND,
        onClick: L,
        children: [t ? m.default.Messages.RETRY : m.default.Messages.CONTINUE, (0, n.jsx)(x.default, {
          className: C.launchIcon,
          width: "16",
          height: "16"
        })]
      })
    })]
  })
}