"use strict";
r.r(t), r.d(t, {
  BlockedPaymentsContentModal: function() {
    return M
  },
  BlockedPaymentsContentSettings: function() {
    return E
  },
  BlockedPaymentsWarning: function() {
    return _
  }
});
var n = r("735250");
r("470079");
var s = r("803997"),
  a = r.n(s),
  i = r("692547"),
  l = r("780384"),
  c = r("481060"),
  u = r("410030"),
  o = r("285952"),
  d = r("759231"),
  f = r("63063"),
  p = r("211242"),
  m = r("981631"),
  h = r("689938"),
  N = r("504329"),
  b = r("51125"),
  x = r("47268");

function P(e) {
  let {
    className: t
  } = e, r = (0, u.default)(), s = (0, l.isThemeDark)(r) ? b : x;
  return (0, n.jsxs)("div", {
    className: a()(N.container, t),
    children: [(0, n.jsx)(c.Heading, {
      className: N.header,
      variant: "heading-xl/semibold",
      children: h.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, n.jsxs)(c.Text, {
      className: N.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, n.jsx)("p", {
        children: h.default.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, n.jsx)("p", {
        children: h.default.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: f.default.getArticleURL(m.HelpdeskArticles.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, n.jsx)("img", {
      src: s,
      className: N.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function E() {
  return (0, n.jsx)(P, {
    className: N.settings
  })
}

function M(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(c.ModalHeader, {
      className: N.blockedPaymentsModalHeader,
      justify: o.default.Justify.END,
      children: (0, n.jsx)(c.ModalCloseButton, {
        onClick: t
      })
    }), (0, n.jsx)(c.ModalContent, {
      className: N.blockedPaymentsModalContent,
      children: (0, n.jsx)(P, {
        className: N.modal
      })
    })]
  })
}

function _(e) {
  let {
    className: t
  } = e;
  return (0, p.useBlockedPaymentsConfig)() ? (0, n.jsxs)(c.Card, {
    className: a()(N.blockedPaymentsWarning, t),
    type: c.Card.Types.CUSTOM,
    children: [(0, n.jsx)(d.default, {
      className: N.blockedPaymentsWarningIcon,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }), (0, n.jsx)(c.Text, {
      variant: "text-sm/normal",
      children: h.default.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: f.default.getArticleURL(m.HelpdeskArticles.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}