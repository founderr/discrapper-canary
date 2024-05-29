"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentModal: function() {
    return m
  },
  BlockedPaymentsContentSettings: function() {
    return I
  },
  BlockedPaymentsWarning: function() {
    return T
  }
});
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  l = n("692547"),
  i = n("780384"),
  u = n("481060"),
  o = n("410030"),
  d = n("285952"),
  c = n("759231"),
  f = n("63063"),
  _ = n("211242"),
  P = n("981631"),
  S = n("689938"),
  A = n("60986"),
  E = n("51125"),
  p = n("47268");

function C(e) {
  let {
    className: t
  } = e, n = (0, o.default)(), r = (0, i.isThemeDark)(n) ? E : p;
  return (0, a.jsxs)("div", {
    className: s()(A.container, t),
    children: [(0, a.jsx)(u.Heading, {
      className: A.header,
      variant: "heading-xl/semibold",
      children: S.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(u.Text, {
      className: A.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, a.jsx)("p", {
        children: S.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, a.jsx)("p", {
        children: S.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(P.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, a.jsx)("img", {
      src: r,
      className: A.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function I() {
  return (0, a.jsx)(C, {
    className: A.settings
  })
}

function m(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.ModalHeader, {
      className: A.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, a.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(u.ModalContent, {
      className: A.blockedPaymentsModalContent,
      children: (0, a.jsx)(C, {
        className: A.modal
      })
    })]
  })
}

function T(e) {
  let {
    className: t
  } = e;
  return (0, _.useBlockedPaymentsConfig)() ? (0, a.jsxs)(u.Card, {
    className: s()(A.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, a.jsx)(c.default, {
      className: A.blockedPaymentsWarningIcon,
      color: l.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: S.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(P.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}