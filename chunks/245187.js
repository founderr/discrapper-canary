"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentSettings: function() {
    return C
  },
  BlockedPaymentsContentModal: function() {
    return m
  },
  BlockedPaymentsWarning: function() {
    return P
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("669491"),
  a = n("819855"),
  u = n("77078"),
  o = n("841098"),
  c = n("145131"),
  d = n("423487"),
  f = n("701909"),
  I = n("619935"),
  _ = n("49111"),
  E = n("782340"),
  T = n("653842"),
  S = n("584503"),
  N = n("45656");

function p(e) {
  let {
    className: t
  } = e, n = (0, o.default)(), i = (0, a.isThemeDark)(n) ? S : N;
  return (0, r.jsxs)("div", {
    className: s(T.container, t),
    children: [(0, r.jsx)(u.Heading, {
      className: T.header,
      variant: "heading-xl/semibold",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, r.jsxs)(u.Text, {
      className: T.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, r.jsx)("p", {
        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, r.jsx)("p", {
        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, r.jsx)("img", {
      src: i,
      className: T.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function C() {
  return (0, r.jsx)(p, {
    className: T.settings
  })
}

function m(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.ModalHeader, {
      className: T.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, r.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, r.jsx)(u.ModalContent, {
      className: T.blockedPaymentsModalContent,
      children: (0, r.jsx)(p, {
        className: T.modal
      })
    })]
  })
}

function P(e) {
  let {
    className: t
  } = e, n = (0, I.useBlockedPaymentsConfig)();
  return n ? (0, r.jsxs)(u.Card, {
    className: s(T.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, r.jsx)(d.default, {
      className: T.blockedPaymentsWarningIcon,
      color: l.default.unsafe_rawColors.YELLOW_300.css
    }), (0, r.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}