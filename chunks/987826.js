n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(112831),
    l = n(737497);
function u(e) {
    var t;
    let { name: n, className: i, state: u, isInline: c, onClick: d } = e,
        _ = n + (c ? ':' : ''),
        E = null,
        f = s.Z.Colors.HEADER_PRIMARY;
    (null == u ? void 0 : u.isActive) && !c ? (E = l.active) : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (E = l.error) : (null == u ? void 0 : u.hasValue) && !c && (E = l.set);
    let h = (0, r.jsx)(s.Z, {
        size: c ? s.Z.Sizes.SIZE_16 : s.Z.Sizes.SIZE_14,
        color: f,
        className: a()(l.option, { [l.inline]: c }, E, i),
        children: _
    });
    return null == d
        ? h
        : (0, r.jsx)(o.Clickable, {
              className: l.clickable,
              onClick: () => d(n),
              children: h
          });
}
