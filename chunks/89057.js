"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentModal: function() {
    return S
  },
  BlockedPaymentsContentSettings: function() {
    return E
  },
  BlockedPaymentsWarning: function() {
    return h
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  o = n("692547"),
  i = n("780384"),
  l = n("481060"),
  u = n("410030"),
  c = n("285952"),
  d = n("759231"),
  p = n("63063"),
  f = n("211242"),
  y = n("981631"),
  C = n("689938"),
  P = n("504329"),
  _ = n("51125"),
  A = n("47268");

function m(e) {
  let {
    className: t
  } = e, n = (0, u.default)(), r = (0, i.isThemeDark)(n) ? _ : A;
  return (0, a.jsxs)("div", {
    className: s()(P.container, t),
    children: [(0, a.jsx)(l.Heading, {
      className: P.header,
      variant: "heading-xl/semibold",
      children: C.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(l.Text, {
      className: P.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, a.jsx)("p", {
        children: C.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, a.jsx)("p", {
        children: C.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: p.default.getArticleURL(y.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, a.jsx)("img", {
      src: r,
      className: P.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function E() {
  return (0, a.jsx)(m, {
    className: P.settings
  })
}

function S(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.ModalHeader, {
      className: P.blockedPaymentsModalHeader,
      justify: c.default.Justify.END,
      children: (0, a.jsx)(l.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(l.ModalContent, {
      className: P.blockedPaymentsModalContent,
      children: (0, a.jsx)(m, {
        className: P.modal
      })
    })]
  })
}

function h(e) {
  let {
    className: t
  } = e;
  return (0, f.useBlockedPaymentsConfig)() ? (0, a.jsxs)(l.Card, {
    className: s()(P.blockedPaymentsWarning, t),
    type: l.Card.Types.CUSTOM,
    children: [(0, a.jsx)(d.default, {
      className: P.blockedPaymentsWarningIcon,
      color: o.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: C.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: p.default.getArticleURL(y.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}