"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentSettings: function() {
    return R
  },
  BlockedPaymentsContentModal: function() {
    return N
  },
  BlockedPaymentsWarning: function() {
    return T
  }
});
var r = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  a = n("669491"),
  l = n("819855"),
  o = n("77078"),
  u = n("841098"),
  c = n("145131"),
  d = n("423487"),
  _ = n("701909"),
  f = n("619935"),
  E = n("49111"),
  C = n("782340"),
  I = n("872773"),
  h = n("584503"),
  p = n("45656");

function A(e) {
  let {
    className: t
  } = e, n = (0, u.default)(), s = (0, l.isThemeDark)(n) ? h : p;
  return (0, r.jsxs)("div", {
    className: i(I.container, t),
    children: [(0, r.jsx)(o.Heading, {
      className: I.header,
      variant: "heading-xl/semibold",
      children: C.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, r.jsxs)(o.Text, {
      className: I.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, r.jsx)("p", {
        children: C.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, r.jsx)("p", {
        children: C.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: _.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, r.jsx)("img", {
      src: s,
      className: I.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function R() {
  return (0, r.jsx)(A, {
    className: I.settings
  })
}

function N(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(o.ModalHeader, {
      className: I.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, r.jsx)(o.ModalCloseButton, {
        onClick: t
      })
    }), (0, r.jsx)(o.ModalContent, {
      className: I.blockedPaymentsModalContent,
      children: (0, r.jsx)(A, {
        className: I.modal
      })
    })]
  })
}

function T(e) {
  let {
    className: t
  } = e, n = (0, f.useBlockedPaymentsConfig)();
  return n ? (0, r.jsxs)(o.Card, {
    className: i(I.blockedPaymentsWarning, t),
    type: o.Card.Types.CUSTOM,
    children: [(0, r.jsx)(d.default, {
      className: I.blockedPaymentsWarningIcon,
      color: a.default.unsafe_rawColors.YELLOW_300.css
    }), (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: C.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: _.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}