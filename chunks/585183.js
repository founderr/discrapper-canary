"use strict";
t.r(a), t.d(a, {
  TwoWayLinkDiscordConsent: function() {
    return m
  }
}), t("47120");
var n = t("735250"),
  s = t("470079"),
  l = t("512722"),
  r = t.n(l),
  o = t("481060"),
  i = t("457330"),
  c = t("710845"),
  d = t("69580"),
  u = t("285952"),
  N = t("689938"),
  h = t("112109");
let x = new c.default("TwoWayLinkDiscordConsentWeb");

function m(e) {
  let {
    platformType: a,
    clientId: t,
    scopes: l,
    authToken: c,
    onContinue: m,
    onError: C,
    onClose: T,
    redirectUri: f
  } = e, [p, E] = s.useState(!1), j = s.useCallback(async e => {
    let t, {
        location: n
      } = e,
      {
        callbackCode: s,
        callbackState: l
      } = c;
    try {
      t = await i.default.completeTwoWayLink(a, n, s, l)
    } catch (e) {
      x.error("".concat(a, " link error:"), e)
    }
    null != t ? m() : C()
  }, [a, c, m, C]), {
    header: y,
    body: k,
    appDetails: v,
    sendAuthorize: L
  } = (0, d.useOAuth2AuthorizeForm)({
    clientId: t,
    scopes: l,
    responseType: "code",
    callback: j,
    isTrustedName: !0,
    isEmbeddedFlow: !0,
    redirectUri: f
  }), g = s.useCallback(() => {
    r()(null != L, "sendAuthorize not available"), E(!0), L(!0)
  }, [L]);
  return (0, n.jsxs)("div", {
    className: h.container,
    children: [null != T && (0, n.jsx)(o.ModalCloseButton, {
      className: h.closeButton,
      onClick: T
    }), (0, n.jsxs)(o.Scroller, {
      children: [(0, n.jsx)(o.ModalHeader, {
        direction: u.default.Direction.VERTICAL,
        className: h.header,
        separator: !1,
        children: (0, n.jsx)(o.Text, {
          className: h.stepHeader,
          variant: "text-xs/bold",
          color: "header-secondary",
          children: N.default.Messages.BIDIRECTIONAL_STEP_HEADER.format({
            number: 2,
            total: 2
          })
        })
      }), (0, n.jsxs)("div", {
        className: h.discordConsentBody,
        children: [y, k, v]
      }), (0, n.jsx)(o.ModalFooter, {
        className: h.footer,
        children: (0, n.jsx)(o.Button, {
          className: h.footerButton,
          color: o.Button.Colors.BRAND,
          submitting: p,
          onClick: g,
          children: N.default.Messages.AUTHORIZE_AND_CONTINUE
        })
      })]
    })]
  })
}