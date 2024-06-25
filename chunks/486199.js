t.d(n, {
  Z: function() {
    return u
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  s = t.n(l),
  a = t(481060),
  r = t(285952),
  o = t(727218),
  c = t(689938),
  d = t(397264);

function u(e) {
  let {
    name: n,
    description: t,
    icon: l,
    imageSrc: u,
    iconBackgroundColor: I,
    iconClassName: N,
    details: E,
    detailsClassName: T,
    isHeader: m,
    isPremium: _
  } = e;
  return (0, i.jsxs)(r.Z, {
    justify: r.Z.Justify.CENTER,
    className: d.wrapper,
    children: [null != l || null != u ? (0, i.jsx)(r.Z.Child, {
      shrink: 0,
      grow: 0,
      children: function(e, n, t, l) {
        if (null != n) return (0, i.jsx)("img", {
          alt: "",
          src: n,
          className: s()(d.iconWrapper, l)
        });
        let a = null;
        return null != e && (a = "string" == typeof e ? (0, i.jsx)("img", {
          alt: "",
          src: e,
          className: s()(d.icon, l)
        }) : (0, i.jsx)(e, {
          className: s()(d.icon, l),
          color: "currentColor"
        })), (0, i.jsx)(r.Z, {
          align: r.Z.Align.CENTER,
          justify: r.Z.Justify.CENTER,
          style: {
            backgroundColor: t
          },
          className: d.iconWrapper,
          children: a
        })
      }(l, u, I, N)
    }) : null, function(e) {
      let {
        name: n,
        description: t,
        details: l,
        detailsClassName: u,
        isHeader: I,
        isPremium: N
      } = e, E = null == l ? void 0 : l.map((e, n) => {
        let {
          icon: t,
          text: l
        } = e;
        return (0, i.jsxs)("div", {
          className: s()(d.detailsWrapper, I ? d.headerDetailsWrapper : null),
          children: [null != t ? (0, i.jsx)(t, {
            size: "xs",
            color: "currentColor",
            className: d.detailsIcon
          }) : null, (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "header-secondary",
            className: u,
            children: l
          })]
        }, n)
      });
      return (0, i.jsxs)(r.Z, {
        direction: r.Z.Direction.VERTICAL,
        children: [(0, i.jsxs)(o.Z, {
          size: I ? o.Z.Sizes.SIZE_24 : o.Z.Sizes.SIZE_16,
          className: I ? d.header : d.secondaryHeader,
          children: [n, N && (0, i.jsx)(a.Tooltip, {
            text: c.Z.Messages.APPLICATION_SUBSCRIPTION_PREMIUM,
            children: e => (0, i.jsx)(a.TicketIcon, {
              size: "xs",
              color: "currentColor",
              ...e,
              className: d.premiumIcon
            })
          })]
        }), null != t ? (0, i.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: t
        }) : null, (0, i.jsx)(r.Z, {
          direction: r.Z.Direction.HORIZONTAL,
          align: r.Z.Align.CENTER,
          wrap: r.Z.Wrap.WRAP,
          children: E
        })]
      })
    }({
      name: n,
      description: t,
      details: E,
      detailsClassName: T,
      isHeader: m,
      isPremium: _
    })]
  })
}