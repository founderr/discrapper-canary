n.d(t, {
  h: function() {
    return c
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(570140),
  r = n(937995),
  o = n(153850);

function c(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: c,
    Component: u
  } = e, d = i.useContext(r.h9), [h, m] = i.useState(""), [p, E] = i.useState(!1);

  function g(e) {
    var t;
    let {
      settings: n
    } = e, l = n.callHeaderHeight;
    m(null !== (t = null == l ? void 0 : l.toString()) && void 0 !== t ? t : ""), E(void 0 !== l && l < 300)
  }
  return (i.useEffect(() => (a.Z.subscribe("UNSYNCED_USER_SETTINGS_UPDATE", g), () => {
    a.Z.unsubscribe("UNSYNCED_USER_SETTINGS_UPDATE", g)
  }), []), (null == t ? void 0 : t.current) == null) ? null : (0, l.jsx)(s.Layer, {
    layerContext: o.nz,
    children: (0, l.jsx)(s.ReferencePositionLayer, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      nudgeAlignIntoViewport: !1,
      positionKey: h,
      children: () => (0, l.jsx)(u, {
        hidden: p || d || n,
        onDismiss: c
      })
    })
  })
}