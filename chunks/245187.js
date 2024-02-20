"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentSettings: function() {
    return M
  },
  BlockedPaymentsContentModal: function() {
    return A
  },
  BlockedPaymentsWarning: function() {
    return I
  }
});
var l = n("37983");
n("884691");
var u = n("414456"),
  a = n.n(u),
  i = n("669491"),
  s = n("819855"),
  r = n("77078"),
  o = n("841098"),
  c = n("145131"),
  d = n("423487"),
  f = n("701909"),
  _ = n("619935"),
  E = n("49111"),
  p = n("782340"),
  m = n("872773"),
  S = n("584503"),
  P = n("45656");

function T(e) {
  let {
    className: t
  } = e, n = (0, o.default)(), u = (0, s.isThemeDark)(n) ? S : P;
  return (0, l.jsxs)("div", {
    className: a(m.container, t),
    children: [(0, l.jsx)(r.Heading, {
      className: m.header,
      variant: "heading-xl/semibold",
      children: p.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, l.jsxs)(r.Text, {
      className: m.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, l.jsx)("p", {
        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, l.jsx)("p", {
        children: p.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, l.jsx)("img", {
      src: u,
      className: m.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function M() {
  return (0, l.jsx)(T, {
    className: m.settings
  })
}

function A(e) {
  let {
    onClose: t
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.ModalHeader, {
      className: m.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, l.jsx)(r.ModalCloseButton, {
        onClick: t
      })
    }), (0, l.jsx)(r.ModalContent, {
      className: m.blockedPaymentsModalContent,
      children: (0, l.jsx)(T, {
        className: m.modal
      })
    })]
  })
}

function I(e) {
  let {
    className: t
  } = e, n = (0, _.useBlockedPaymentsConfig)();
  return n ? (0, l.jsxs)(r.Card, {
    className: a(m.blockedPaymentsWarning, t),
    type: r.Card.Types.CUSTOM,
    children: [(0, l.jsx)(d.default, {
      className: m.blockedPaymentsWarningIcon,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }), (0, l.jsx)(r.Text, {
      variant: "text-sm/normal",
      children: p.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(E.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}