n.d(t, {
  h: function() {
    return u
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(570140),
  r = n(937995),
  o = n(618158),
  c = n(153850);

function u(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: u,
    renderComponent: d
  } = e, h = i.useContext(r.h9), [m, p] = i.useState(""), [E, g] = i.useState(!1);

  function f(e) {
    var t;
    let {
      settings: n
    } = e, l = n.callHeaderHeight;
    p(null !== (t = null == l ? void 0 : l.toString()) && void 0 !== t ? t : ""), g(void 0 !== l && l < 300)
  }
  i.useEffect(() => (a.Z.subscribe("UNSYNCED_USER_SETTINGS_UPDATE", f), () => {
    a.Z.unsubscribe("UNSYNCED_USER_SETTINGS_UPDATE", f)
  }), []);
  let {
    preventIdle: C,
    allowIdle: _
  } = (0, o.Y)("popup");
  return (null == t ? void 0 : t.current) == null ? null : (0, l.jsx)(s.Layer, {
    layerContext: c.nz,
    children: (0, l.jsx)(s.ReferencePositionLayer, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      nudgeAlignIntoViewport: !1,
      positionKey: m,
      children: () => (0, l.jsx)("div", {
        onMouseOver: C,
        onFocus: C,
        onBlur: _,
        onMouseLeave: _,
        children: d({
          hidden: E || h || n,
          onDismiss: u
        })
      })
    })
  })
}