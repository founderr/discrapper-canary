"use strict";
r.r(t), r.d(t, {
  BlockedPaymentsContentModal: function() {
    return E
  },
  BlockedPaymentsContentSettings: function() {
    return g
  },
  BlockedPaymentsWarning: function() {
    return S
  }
});
var n = r("735250");
r("470079");
var s = r("803997"),
  a = r.n(s),
  l = r("692547"),
  u = r("780384"),
  i = r("481060"),
  c = r("410030"),
  d = r("285952"),
  o = r("759231"),
  f = r("63063"),
  m = r("211242"),
  p = r("981631"),
  h = r("689938"),
  x = r("504329"),
  P = r("51125"),
  C = r("47268");

function j(e) {
  let {
    className: t
  } = e, r = (0, c.default)(), s = (0, u.isThemeDark)(r) ? P : C;
  return (0, n.jsxs)("div", {
    className: a()(x.container, t),
    children: [(0, n.jsx)(i.Heading, {
      className: x.header,
      variant: "heading-xl/semibold",
      children: h.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, n.jsxs)(i.Text, {
      className: x.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, n.jsx)("p", {
        children: h.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, n.jsx)("p", {
        children: h.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(p.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, n.jsx)("img", {
      src: s,
      className: x.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function g() {
  return (0, n.jsx)(j, {
    className: x.settings
  })
}

function E(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.ModalHeader, {
      className: x.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, n.jsx)(i.ModalCloseButton, {
        onClick: t
      })
    }), (0, n.jsx)(i.ModalContent, {
      className: x.blockedPaymentsModalContent,
      children: (0, n.jsx)(j, {
        className: x.modal
      })
    })]
  })
}

function S(e) {
  let {
    className: t
  } = e;
  return (0, m.useBlockedPaymentsConfig)() ? (0, n.jsxs)(i.Card, {
    className: a()(x.blockedPaymentsWarning, t),
    type: i.Card.Types.CUSTOM,
    children: [(0, n.jsx)(o.default, {
      className: x.blockedPaymentsWarningIcon,
      color: l.default.unsafe_rawColors.YELLOW_300.css
    }), (0, n.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: h.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(p.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}