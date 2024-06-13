"use strict";
n.r(t), n.d(t, {
  SecureFramesOverview: function() {
    return c
  }
});
var l = n("735250");
n("470079");
var a = n("824385"),
  s = n("481060"),
  i = n("71328"),
  r = n("498126"),
  o = n("63454"),
  u = n("689938"),
  d = n("89350");

function c(e) {
  let {
    code: t
  } = e;
  return (0, l.jsxs)("div", {
    className: d.container,
    children: [(0, l.jsxs)("div", {
      className: d.tag,
      children: [(0, l.jsx)(a.LockIcon, {
        height: 12,
        width: 12,
        color: s.tokens.colors.STATUS_POSITIVE
      }), (0, l.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "status-positive",
        children: u.default.Messages.E2EE_OVERVIEW_TITLE
      })]
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: u.default.Messages.E2EE_OVERVIEW_SUBTITLE
    }), (0, l.jsxs)("div", {
      className: d.header,
      children: [(0, l.jsx)(s.Heading, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: u.default.Messages.E2EE_VOICE_PRIVACY_CODE
      }), (0, l.jsx)(r.SecureFramesCopyIcon, {
        text: t,
        color: s.tokens.colors.INTERACTIVE_NORMAL
      })]
    }), (0, l.jsx)(i.SecureFramesCode, {
      className: d.code,
      code: t
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: u.default.Messages.E2EE_OVERVIEW_FOOTER_TEXT.format({
        helpArticle: o.E2EE_HELPDESK_ARTICLE
      })
    })]
  })
}