"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentSettings: function() {
    return R
  },
  BlockedPaymentsContentModal: function() {
    return S
  },
  BlockedPaymentsWarning: function() {
    return N
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  l = n.n(i),
  o = n("669491"),
  s = n("819855"),
  a = n("77078"),
  u = n("841098"),
  c = n("145131"),
  d = n("423487"),
  f = n("701909"),
  E = n("619935"),
  _ = n("49111"),
  C = n("782340"),
  I = n("653842"),
  p = n("584503"),
  A = n("45656");

function T(e) {
  let {
    className: t
  } = e, n = (0, u.default)(), i = (0, s.isThemeDark)(n) ? p : A;
  return (0, r.jsxs)("div", {
    className: l(I.container, t),
    children: [(0, r.jsx)(a.Heading, {
      className: I.header,
      variant: "heading-xl/semibold",
      children: C.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, r.jsxs)(a.Text, {
      className: I.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, r.jsx)("p", {
        children: C.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, r.jsx)("p", {
        children: C.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, r.jsx)("img", {
      src: i,
      className: I.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function R() {
  return (0, r.jsx)(T, {
    className: I.settings
  })
}

function S(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.ModalHeader, {
      className: I.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, r.jsx)(a.ModalCloseButton, {
        onClick: t
      })
    }), (0, r.jsx)(a.ModalContent, {
      className: I.blockedPaymentsModalContent,
      children: (0, r.jsx)(T, {
        className: I.modal
      })
    })]
  })
}

function N(e) {
  let {
    className: t
  } = e, n = (0, E.useBlockedPaymentsConfig)();
  return n ? (0, r.jsxs)(a.Card, {
    className: l(I.blockedPaymentsWarning, t),
    type: a.Card.Types.CUSTOM,
    children: [(0, r.jsx)(d.default, {
      className: I.blockedPaymentsWarningIcon,
      color: o.default.unsafe_rawColors.YELLOW_300.css
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/normal",
      children: C.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(_.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}