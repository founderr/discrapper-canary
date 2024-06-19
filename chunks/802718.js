n.d(t, {
  U: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(91192),
  r = n(481060),
  a = n(442837),
  o = n(239091),
  u = n(410030),
  c = n(377171),
  d = n(682662),
  h = n(662146),
  g = n(678513),
  p = n(981631),
  m = n(689938),
  C = n(316148);

function E(e) {
  let {
    target: t
  } = e, a = (0, s.Ie)("fakedoor"), g = i.useCallback(() => {
    (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("22862"), n.e("81847")]).then(n.bind(n, 646202));
      return n => (0, l.jsx)(e, {
        ...n,
        target: t
      })
    })
  }, [t]), E = i.useCallback(e => {
    (0, o.jW)(e, async () => {
      let {
        default: e
      } = await n.e("39612").then(n.bind(n, 761624));
      return n => (0, l.jsx)(e, {
        ...n,
        signupTarget: t
      })
    })
  }, [t]), f = "url(".concat(t.backgroundAssetUrl, ") black top / cover no-repeat"), _ = (0, l.jsxs)("div", {
    className: C.tooltipContainer,
    children: [(0, l.jsx)("div", {
      className: C.tooltipBackground,
      style: {
        background: f
      }
    }), (0, l.jsx)(r.Heading, {
      variant: "heading-sm/medium",
      children: t.tooltipHeader
    }), (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      children: m.Z.Messages.SIGNUP_BUTTON_TOOLTIP_CTA
    })]
  }), I = (0, u.Fg)();
  return (0, l.jsxs)(d.H, {
    children: [(0, l.jsx)(r.ThemeContextProvider, {
      theme: p.BRd.DARK,
      children: (0, l.jsx)(h.Z, {
        text: _,
        tooltipClass: C.tooltip,
        tooltipContentClass: C.tooltipContent,
        children: (0, l.jsx)(r.ThemeContextProvider, {
          theme: I,
          children: (0, l.jsx)(r.BlobMask, {
            lowerBadge: (0, l.jsx)(r.NumberBadge, {
              count: 1,
              color: c.Z.BG_BRAND
            }),
            children: (0, l.jsx)(r.NavItem, {
              ...a,
              onClick: g,
              onContextMenu: E,
              children: (0, l.jsx)(r.BellIcon, {
                color: c.Z.TEXT_NORMAL
              })
            })
          })
        })
      })
    }), (0, l.jsx)("div", {
      style: {
        background: f,
        width: 0,
        height: 0
      }
    })]
  })
}

function f() {
  let e = (0, a.e7)([g.Z], () => g.Z.getActiveUserSignUp());
  return null == e ? null : (0, l.jsx)(E, {
    target: e
  })
}