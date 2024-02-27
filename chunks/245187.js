"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentSettings: function() {
    return N
  },
  BlockedPaymentsContentModal: function() {
    return m
  },
  BlockedPaymentsWarning: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  i = n.n(l),
  r = n("669491"),
  s = n("819855"),
  u = n("77078"),
  o = n("841098"),
  d = n("145131"),
  c = n("423487"),
  f = n("701909"),
  I = n("619935"),
  _ = n("49111"),
  S = n("782340"),
  E = n("872773"),
  T = n("584503"),
  A = n("45656");

function P(e) {
  let {
    className: t
  } = e, n = (0, o.default)(), l = (0, s.isThemeDark)(n) ? T : A;
  return (0, a.jsxs)("div", {
    className: i(E.container, t),
    children: [(0, a.jsx)(u.Heading, {
      className: E.header,
      variant: "heading-xl/semibold",
      children: S.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(u.Text, {
      className: E.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, a.jsx)("p", {
        children: S.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, a.jsx)("p", {
        children: S.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, a.jsx)("img", {
      src: l,
      className: E.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function N() {
  return (0, a.jsx)(P, {
    className: E.settings
  })
}

function m(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.ModalHeader, {
      className: E.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, a.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(u.ModalContent, {
      className: E.blockedPaymentsModalContent,
      children: (0, a.jsx)(P, {
        className: E.modal
      })
    })]
  })
}

function C(e) {
  let {
    className: t
  } = e, n = (0, I.useBlockedPaymentsConfig)();
  return n ? (0, a.jsxs)(u.Card, {
    className: i(E.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, a.jsx)(c.default, {
      className: E.blockedPaymentsWarningIcon,
      color: r.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: S.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}