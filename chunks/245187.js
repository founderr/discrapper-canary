"use strict";
s.r(t), s.d(t, {
  BlockedPaymentsContentSettings: function() {
    return p
  },
  BlockedPaymentsContentModal: function() {
    return N
  },
  BlockedPaymentsWarning: function() {
    return A
  }
});
var a = s("37983");
s("884691");
var n = s("414456"),
  l = s.n(n),
  i = s("669491"),
  r = s("819855"),
  u = s("77078"),
  o = s("841098"),
  d = s("145131"),
  c = s("423487"),
  _ = s("701909"),
  E = s("619935"),
  I = s("49111"),
  T = s("782340"),
  f = s("653842"),
  S = s("584503"),
  R = s("45656");

function m(e) {
  let {
    className: t
  } = e, s = (0, o.default)(), n = (0, r.isThemeDark)(s) ? S : R;
  return (0, a.jsxs)("div", {
    className: l(f.container, t),
    children: [(0, a.jsx)(u.Heading, {
      className: f.header,
      variant: "heading-xl/semibold",
      children: T.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(u.Text, {
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
      src: n,
      className: f.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function p() {
  return (0, a.jsx)(m, {
    className: f.settings
  })
}

function N(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.ModalHeader, {
      className: f.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, a.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(u.ModalContent, {
      className: f.blockedPaymentsModalContent,
      children: (0, a.jsx)(m, {
        className: f.modal
      })
    })]
  })
}

function A(e) {
  let {
    className: t
  } = e, s = (0, E.useBlockedPaymentsConfig)();
  return s ? (0, a.jsxs)(u.Card, {
    className: l(f.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, a.jsx)(c.default, {
      className: f.blockedPaymentsWarningIcon,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: T.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: _.default.getArticleURL(I.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}