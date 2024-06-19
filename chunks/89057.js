r.d(t, {
  Vq: function() {
    return j
  },
  c8: function() {
    return m
  },
  oQ: function() {
    return R
  }
});
var n = r(735250);
r(470079);
var s = r(120356),
  i = r.n(s),
  l = r(692547),
  a = r(780384),
  o = r(481060),
  d = r(410030),
  c = r(285952),
  u = r(63063),
  _ = r(211242),
  p = r(981631),
  f = r(689938),
  C = r(950651),
  x = r(51125),
  E = r(47268);

function h(e) {
  let {
    className: t
  } = e, r = (0, d.ZP)(), s = (0, a.wj)(r) ? x : E;
  return (0, n.jsxs)("div", {
    className: i()(C.container, t),
    children: [(0, n.jsx)(o.Heading, {
      className: C.header,
      variant: "heading-xl/semibold",
      children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, n.jsxs)(o.Text, {
      className: C.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, n.jsx)("p", {
        children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, n.jsx)("p", {
        children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: u.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, n.jsx)("img", {
      src: s,
      className: C.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function m() {
  return (0, n.jsx)(h, {
    className: C.settings
  })
}

function j(e) {
  let {
    onClose: t
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o.ModalHeader, {
      className: C.blockedPaymentsModalHeader,
      justify: c.Z.Justify.END,
      children: (0, n.jsx)(o.ModalCloseButton, {
        onClick: t
      })
    }), (0, n.jsx)(o.ModalContent, {
      className: C.blockedPaymentsModalContent,
      children: (0, n.jsx)(h, {
        className: C.modal
      })
    })]
  })
}

function R(e) {
  let {
    className: t
  } = e;
  return (0, _.Q)() ? (0, n.jsxs)(o.Card, {
    className: i()(C.blockedPaymentsWarning, t),
    type: o.Card.Types.CUSTOM,
    children: [(0, n.jsx)(o.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: C.blockedPaymentsWarningIcon,
      color: l.Z.unsafe_rawColors.YELLOW_300.css
    }), (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      children: f.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: u.Z.getArticleURL(p.BhN.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}