n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(481060),
  a = n(806519),
  o = n(905380);

function u(e) {
  let {
    tooltipText: t,
    children: n,
    onContextMenu: i,
    onClick: u,
    disabled: c,
    icon: d,
    iconForeground: h,
    innerClassName: g,
    tooltipClassName: p,
    onMouseEnter: m,
    onMouseLeave: C,
    "aria-label": E,
    "aria-checked": f,
    role: _,
    tooltipColor: I,
    tooltipForceOpen: N
  } = e, Z = "function" == typeof d ? (0, l.jsx)(d, {
    width: 20,
    height: 20,
    size: "custom",
    color: null != h ? h : "currentColor"
  }) : d;
  return (0, l.jsx)(r.Tooltip, {
    tooltipClassName: p,
    text: t,
    "aria-label": E,
    color: I,
    forceOpen: N,
    children: e => {
      let {
        onClick: t,
        onMouseEnter: d,
        onMouseLeave: h,
        ...p
      } = e;
      return (0, l.jsxs)(r.Button, {
        ...p,
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        disabled: c,
        innerClassName: g,
        wrapperClassName: o.button,
        className: s()(o.button, {
          [o.disabled]: c,
          [o.enabled]: !c
        }),
        onClick: e => {
          null != t && t(), null != u && u(e)
        },
        onMouseEnter: () => {
          null == d || d(), null == m || m()
        },
        onMouseLeave: () => {
          null == h || h(), null == C || C()
        },
        onContextMenu: i,
        role: _,
        "aria-checked": f,
        children: [null != n ? (0, l.jsx)(a.ZP, {
          width: 20,
          height: 20,
          mask: a.ZP.Masks.PANEL_BUTTON,
          children: Z
        }) : Z, n]
      })
    }
  })
}