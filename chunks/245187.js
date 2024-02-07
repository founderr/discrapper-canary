"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentSettings: function() {
    return A
  },
  BlockedPaymentsContentModal: function() {
    return m
  },
  BlockedPaymentsWarning: function() {
    return p
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
  c = n("145131"),
  d = n("423487"),
  f = n("701909"),
  I = n("619935"),
  _ = n("49111"),
  S = n("782340"),
  T = n("653842"),
  P = n("584503"),
  E = n("45656");

function N(e) {
  let {
    className: t
  } = e, n = (0, o.default)(), l = (0, s.isThemeDark)(n) ? P : E;
  return (0, a.jsxs)("div", {
    className: i(T.container, t),
    children: [(0, a.jsx)(u.Heading, {
      className: T.header,
      variant: "heading-xl/semibold",
      children: S.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(u.Text, {
      className: T.description,
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
      className: T.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function A() {
  return (0, a.jsx)(N, {
    className: T.settings
  })
}

function m(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.ModalHeader, {
      className: T.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, a.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(u.ModalContent, {
      className: T.blockedPaymentsModalContent,
      children: (0, a.jsx)(N, {
        className: T.modal
      })
    })]
  })
}

function p(e) {
  let {
    className: t
  } = e, n = (0, I.useBlockedPaymentsConfig)();
  return n ? (0, a.jsxs)(u.Card, {
    className: i(T.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, a.jsx)(d.default, {
      className: T.blockedPaymentsWarningIcon,
      color: r.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: S.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}