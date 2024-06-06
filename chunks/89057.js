"use strict";
r.r(t), r.d(t, {
  BlockedPaymentsContentModal: function() {
    return T
  },
  BlockedPaymentsContentSettings: function() {
    return h
  },
  BlockedPaymentsWarning: function() {
    return S
  }
});
var s = r("735250");
r("470079");
var n = r("120356"),
  i = r.n(n),
  l = r("692547"),
  a = r("780384"),
  o = r("481060"),
  u = r("410030"),
  d = r("285952"),
  c = r("759231"),
  _ = r("63063"),
  f = r("211242"),
  C = r("981631"),
  p = r("689938"),
  E = r("60986"),
  x = r("51125"),
  m = r("47268");

function R(e) {
  let {
    className: t
  } = e, r = (0, u.default)(), n = (0, a.isThemeDark)(r) ? x : m;
  return (0, s.jsxs)("div", {
    className: i()(E.container, t),
    children: [(0, s.jsx)(o.Heading, {
      className: E.header,
      variant: "heading-xl/semibold",
      children: p.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, s.jsxs)(o.Text, {
      className: E.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, s.jsx)("p", {
        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, s.jsx)("p", {
        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: _.default.getArticleURL(C.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, s.jsx)("img", {
      src: n,
      className: E.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function h() {
  return (0, s.jsx)(R, {
    className: E.settings
  })
}

function T(e) {
  let {
    onClose: t
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(o.ModalHeader, {
      className: E.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, s.jsx)(o.ModalCloseButton, {
        onClick: t
      })
    }), (0, s.jsx)(o.ModalContent, {
      className: E.blockedPaymentsModalContent,
      children: (0, s.jsx)(R, {
        className: E.modal
      })
    })]
  })
}

function S(e) {
  let {
    className: t
  } = e;
  return (0, f.useBlockedPaymentsConfig)() ? (0, s.jsxs)(o.Card, {
    className: i()(E.blockedPaymentsWarning, t),
    type: o.Card.Types.CUSTOM,
    children: [(0, s.jsx)(c.default, {
      className: E.blockedPaymentsWarningIcon,
      color: l.default.unsafe_rawColors.YELLOW_300.css
    }), (0, s.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: p.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: _.default.getArticleURL(C.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}