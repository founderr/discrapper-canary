"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("824385"),
  i = n("481060"),
  r = n("19780"),
  o = n("840467"),
  u = n("71328"),
  d = n("498126"),
  c = n("63454"),
  f = n("689938"),
  h = n("213807");

function m() {
  let e = (0, a.useStateFromStores)([r.default], () => {
      var e;
      return null === (e = r.default.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator
    }),
    t = (0, o.useReadableSecureFramesCode)({
      codeBase64: e,
      chunkSize: c.EPOCH_AUTHENTICATOR_CHUNK_SIZE,
      desiredLength: c.EPOCH_AUTHENTICATOR_LENGTH
    });
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [(0, l.jsxs)("div", {
      className: h.tag,
      children: [(0, l.jsx)(s.LockIcon, {
        height: 12,
        width: 12,
        color: i.tokens.colors.STATUS_POSITIVE
      }), (0, l.jsx)(i.Text, {
        variant: "text-xs/medium",
        color: "status-positive",
        children: f.default.Messages.E2EE_END_TO_END_ENCRYPTED
      })]
    }), (0, l.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: f.default.Messages.E2EE_CALL_DETAILS_SUBTITLE
    }), (0, l.jsxs)("div", {
      className: h.header,
      children: [(0, l.jsx)(i.Heading, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: f.default.Messages.E2EE_VOICE_PRIVACY_CODE
      }), null != t && (0, l.jsx)(d.SecureFramesCopyIcon, {
        chunks: t,
        color: i.tokens.colors.INTERACTIVE_NORMAL
      })]
    }), null != t && (0, l.jsx)(u.SecureFramesCode, {
      className: h.code,
      chunks: t,
      columns: c.EPOCH_AUTHENTICATOR_COLUMNS
    }), (0, l.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: f.default.Messages.E2EE_CALL_DETAILS_FOOTER_TEXT.format({
        helpArticle: c.E2EE_HELPDESK_ARTICLE
      })
    })]
  })
}