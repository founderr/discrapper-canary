"use strict";
s.r(t), s.d(t, {
  BlockedPaymentsContentModal: function() {
    return h
  },
  BlockedPaymentsContentSettings: function() {
    return N
  },
  BlockedPaymentsWarning: function() {
    return S
  }
});
var n = s("735250");
s("470079");
var a = s("120356"),
  r = s.n(a),
  i = s("692547"),
  l = s("780384"),
  u = s("481060"),
  o = s("410030"),
  c = s("285952"),
  d = s("759231"),
  C = s("63063"),
  E = s("211242"),
  f = s("981631"),
  p = s("689938"),
  m = s("60986"),
  A = s("51125"),
  _ = s("47268");

function P(e) {
  let {
    className: t
  } = e, s = (0, o.default)(), a = (0, l.isThemeDark)(s) ? A : _;
  return (0, n.jsxs)("div", {
    className: r()(m.container, t),
    children: [(0, n.jsx)(u.Heading, {
      className: m.header,
      variant: "heading-xl/semibold",
      children: p.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, n.jsxs)(u.Text, {
      className: m.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, n.jsx)("p", {
        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, n.jsx)("p", {
        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: C.default.getArticleURL(f.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, n.jsx)("img", {
      src: a,
      className: m.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function N() {
  return (0, n.jsx)(P, {
    className: m.settings
  })
}

function h(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(u.ModalHeader, {
      className: m.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, n.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, n.jsx)(u.ModalContent, {
      className: m.blockedPaymentsModalContent,
      children: (0, n.jsx)(P, {
        className: m.modal
      })
    })]
  })
}

function S(e) {
  let {
    className: t
  } = e;
  return (0, E.useBlockedPaymentsConfig)() ? (0, n.jsxs)(u.Card, {
    className: r()(m.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, n.jsx)(d.default, {
      className: m.blockedPaymentsWarningIcon,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }), (0, n.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: p.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: C.default.getArticleURL(f.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}