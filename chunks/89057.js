r.d(n, {
  Vq: function() {
    return k
  },
  c8: function() {
    return x
  },
  oQ: function() {
    return C
  }
});
var t = r(735250);
r(470079);
var o = r(120356),
  a = r.n(o),
  i = r(692547),
  s = r(780384),
  l = r(481060),
  c = r(410030),
  d = r(285952),
  u = r(63063),
  p = r(211242),
  h = r(981631),
  v = r(689938),
  b = r(950651),
  g = r(51125),
  m = r(47268);

function f(e) {
  let {
    className: n
  } = e, r = (0, c.ZP)(), o = (0, s.wj)(r) ? g : m;
  return (0, t.jsxs)("div", {
    className: a()(b.container, n),
    children: [(0, t.jsx)(l.Heading, {
      className: b.header,
      variant: "heading-xl/semibold",
      children: v.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER
    }), (0, t.jsxs)(l.Text, {
      className: b.description,
      variant: "text-md/normal",
      color: "header-secondary",
      children: [(0, t.jsx)("p", {
        children: v.Z.Messages.REGION_BLOCKED_PAYMENTS_BODY
      }), (0, t.jsx)("p", {
        children: v.Z.Messages.REGION_BLOCKED_PAYMENTS_CTA.format({
          helpdeskArticle: u.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS)
        })
      })]
    }), (0, t.jsx)("img", {
      src: o,
      className: b.splashImage,
      alt: "Blocked Payments"
    })]
  })
}

function x() {
  return (0, t.jsx)(f, {
    className: b.settings
  })
}

function k(e) {
  let {
    onClose: n
  } = e;
  return (0, t.jsxs)(t.Fragment, {
    children: [(0, t.jsx)(l.ModalHeader, {
      className: b.blockedPaymentsModalHeader,
      justify: d.Z.Justify.END,
      children: (0, t.jsx)(l.ModalCloseButton, {
        onClick: n
      })
    }), (0, t.jsx)(l.ModalContent, {
      className: b.blockedPaymentsModalContent,
      children: (0, t.jsx)(f, {
        className: b.modal
      })
    })]
  })
}

function C(e) {
  let {
    className: n
  } = e;
  return (0, p.Q)() ? (0, t.jsxs)(l.Card, {
    className: a()(b.blockedPaymentsWarning, n),
    type: l.Card.Types.CUSTOM,
    children: [(0, t.jsx)(l.CircleExclamationPointIcon, {
      size: "custom",
      width: 20,
      height: 20,
      className: b.blockedPaymentsWarningIcon,
      color: i.Z.unsafe_rawColors.YELLOW_300.css
    }), (0, t.jsx)(l.Text, {
      variant: "text-sm/normal",
      children: v.Z.Messages.REGION_BLOCKED_PAYMENTS_ONE_LINER.format({
        helpdeskArticle: u.Z.getArticleURL(h.BhN.BLOCKED_PAYMENTS)
      })
    })]
  }) : null
}