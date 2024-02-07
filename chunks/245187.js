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
  u = n("819855"),
  a = n("77078"),
  o = n("841098"),
  c = n("145131"),
  d = n("423487"),
  f = n("701909"),
  I = n("619935"),
  _ = n("49111"),
  E = n("782340"),
  S = n("653842"),
  T = n("584503"),
  N = n("45656");

function p(e) {
  let {
    className: t
  } = e, n = (0, o.default)(), i = (0, u.isThemeDark)(n) ? T : N;
  return (0, r.jsxs)("div", {
    className: s(S.container, t),
    children: [(0, r.jsx)(a.Heading, {
      className: S.header,
      variant: "heading-xl/semibold",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, r.jsxs)(a.Text, {
      className: S.description,
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
      className: S.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function C() {
  return (0, r.jsx)(p, {
    className: S.settings
  })
}

function m(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.ModalHeader, {
      className: S.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, r.jsx)(a.ModalCloseButton, {
        onClick: t
      })
    }), (0, r.jsx)(a.ModalContent, {
      className: S.blockedPaymentsModalContent,
      children: (0, r.jsx)(p, {
        className: S.modal
      })
    })]
  })
}

function P(e) {
  let {
    className: t
  } = e, n = (0, I.useBlockedPaymentsConfig)();
  return n ? (0, r.jsxs)(a.Card, {
    className: s(S.blockedPaymentsWarning, t),
    type: a.Card.Types.CUSTOM,
    children: [(0, r.jsx)(d.default, {
      className: S.blockedPaymentsWarningIcon,
      color: l.default.unsafe_rawColors.YELLOW_300.css
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}