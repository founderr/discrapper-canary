"use strict";
n.r(t), n.d(t, {
  BlockedPaymentsContentModal: function() {
    return j
  },
  BlockedPaymentsContentSettings: function() {
    return E
  },
  BlockedPaymentsWarning: function() {
    return b
  }
});
var r = n("735250");
n("470079");
var s = n("120356"),
  a = n.n(s),
  u = n("692547"),
  l = n("780384"),
  i = n("481060"),
  c = n("410030"),
  d = n("285952"),
  o = n("759231"),
  f = n("63063"),
  p = n("211242"),
  m = n("981631"),
  h = n("689938"),
  x = n("504329"),
  P = n("51125"),
  g = n("47268");

function C(e) {
  let {
    className: t
  } = e, n = (0, c.default)(), s = (0, l.isThemeDark)(n) ? P : g;
  return (0, r.jsxs)("div", {
    className: a()(x.container, t),
    children: [(0, r.jsx)(i.Heading, {
      className: x.header,
      variant: "heading-xl/semibold",
      children: h.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, r.jsxs)(i.Text, {
      className: x.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, r.jsx)("p", {
        children: h.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, r.jsx)("p", {
        children: h.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(m.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, r.jsx)("img", {
      src: s,
      className: x.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function E() {
  return (0, r.jsx)(C, {
    className: x.settings
  })
}

function j(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.ModalHeader, {
      className: x.blockedPaymentsModalHeader,
      justify: d.default.Justify.END,
      children: (0, r.jsx)(i.ModalCloseButton, {
        onClick: t
      })
    }), (0, r.jsx)(i.ModalContent, {
      className: x.blockedPaymentsModalContent,
      children: (0, r.jsx)(C, {
        className: x.modal
      })
    })]
  })
}

function b(e) {
  let {
    className: t
  } = e;
  return (0, p.useBlockedPaymentsConfig)() ? (0, r.jsxs)(i.Card, {
    className: a()(x.blockedPaymentsWarning, t),
    type: i.Card.Types.CUSTOM,
    children: [(0, r.jsx)(o.default, {
      className: x.blockedPaymentsWarningIcon,
      color: u.default.unsafe_rawColors.YELLOW_300.css
    }), (0, r.jsx)(i.Text, {
      variant: "text-sm/normal",
      children: h.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(m.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}