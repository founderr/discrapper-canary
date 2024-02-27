"use strict";
s.r(t), s.d(t, {
  BlockedPaymentsContentSettings: function() {
    return A
  },
  BlockedPaymentsContentModal: function() {
    return p
  },
  BlockedPaymentsWarning: function() {
    return N
  }
});
var a = s("37983");
s("884691");
var i = s("414456"),
  r = s.n(i),
  n = s("669491"),
  l = s("819855"),
  o = s("77078"),
  u = s("841098"),
  d = s("145131"),
  c = s("423487"),
  _ = s("701909"),
  E = s("619935"),
  I = s("49111"),
  T = s("782340"),
  f = s("872773"),
  S = s("584503"),
  R = s("45656");

function m(e) {
  let {
    className: t
  } = e, s = (0, u.default)(), i = (0, l.isThemeDark)(s) ? S : R;
  return (0, a.jsxs)("div", {
    className: r(f.container, t),
    children: [(0, a.jsx)(o.Heading, {
      className: f.header,
      variant: "heading-xl/semibold",
      children: T.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(o.Text, {
      className: f.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, a.jsx)("p", {
        children: T.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, a.jsx)("p", {
        children: T.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: _.default.getArticleURL(I.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, a.jsx)("img", {
      src: i,
      className: f.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function A() {
  return (0, a.jsx)(m, {
    className: f.settings
  })
}

function p(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.ModalHeader, {
      className: f.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, a.jsx)(o.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(o.ModalContent, {
      className: f.blockedPaymentsModalContent,
      children: (0, a.jsx)(m, {
        className: f.modal
      })
    })]
  })
}

function N(e) {
  let {
    className: t
  } = e, s = (0, E.useBlockedPaymentsConfig)();
  return s ? (0, a.jsxs)(o.Card, {
    className: r(f.blockedPaymentsWarning, t),
    type: o.Card.Types.CUSTOM,
    children: [(0, a.jsx)(c.default, {
      className: f.blockedPaymentsWarningIcon,
      color: n.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: T.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: _.default.getArticleURL(I.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}