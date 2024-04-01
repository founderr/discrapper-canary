"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentModal: function() {
    return T
  },
  BlockedPaymentsContentSettings: function() {
    return N
  },
  BlockedPaymentsWarning: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var r = n("803997"),
  s = n.n(r),
  l = n("692547"),
  i = n("780384"),
  u = n("481060"),
  o = n("410030"),
  d = n("285952"),
  c = n("759231"),
  f = n("63063"),
  _ = n("211242"),
  I = n("981631"),
  E = n("689938"),
  S = n("504329"),
  P = n("51125"),
  A = n("47268");

function C(e) {
  let {
    className: t
  } = e, n = (0, o.default)(), r = (0, i.isThemeDark)(n) ? P : A;
  return (0, a.jsxs)("div", {
    className: s()(S.container, t),
    children: [(0, a.jsx)(u.Heading, {
      className: S.header,
      variant: "heading-xl/semibold",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, a.jsxs)(u.Text, {
      className: S.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, a.jsx)("p", {
        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, a.jsx)("p", {
        children: E.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(I.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, a.jsx)("img", {
      src: r,
      className: S.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function N() {
  return (0, a.jsx)(C, {
    className: S.settings
  })
}

function T(e) {
  let {
    onClose: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.ModalHeader, {
      className: S.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, a.jsx)(u.ModalCloseButton, {
        onClick: t
      })
    }), (0, a.jsx)(u.ModalContent, {
      className: S.blockedPaymentsModalContent,
      children: (0, a.jsx)(C, {
        className: S.modal
      })
    })]
  })
}

function m(e) {
  let {
    className: t
  } = e;
  return (0, _.useBlockedPaymentsConfig)() ? (0, a.jsxs)(u.Card, {
    className: s()(S.blockedPaymentsWarning, t),
    type: u.Card.Types.CUSTOM,
    children: [(0, a.jsx)(c.default, {
      className: S.blockedPaymentsWarningIcon,
      color: l.default.unsafe_rawColors.YELLOW_300.css
    }), (0, a.jsx)(u.Text, {
      variant: "text-sm/normal",
      children: E.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(I.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}