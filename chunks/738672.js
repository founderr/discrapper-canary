n.d(t, {
  h: function() {
    return u
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(481060),
  s = n(570140),
  r = n(937995),
  o = n(618158),
  c = n(153850);

function u(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: u,
    renderComponent: d
  } = e, h = a.useContext(r.h9), [p, m] = a.useState(""), [_, f] = a.useState(!1);

  function E(e) {
    var t;
    let {
      settings: n
    } = e, i = n.callHeaderHeight;
    m(null !== (t = null == i ? void 0 : i.toString()) && void 0 !== t ? t : ""), f(void 0 !== i && i < 300)
  }
  a.useEffect(() => (s.Z.subscribe("UNSYNCED_USER_SETTINGS_UPDATE", E), () => {
    s.Z.unsubscribe("UNSYNCED_USER_SETTINGS_UPDATE", E)
  }), []);
  let {
    preventIdle: g,
    allowIdle: C
  } = (0, o.Y)("popup");
  return (null == t ? void 0 : t.current) == null ? null : (0, i.jsx)(l.Layer, {
    layerContext: c.nz,
    children: (0, i.jsx)(l.ReferencePositionLayer, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      nudgeAlignIntoViewport: !1,
      positionKey: p,
      children: () => (0, i.jsx)("div", {
        onMouseOver: g,
        onFocus: g,
        onBlur: C,
        onMouseLeave: C,
        children: d({
          hidden: _ || h || n,
          onDismiss: u
        })
      })
    })
  })
}