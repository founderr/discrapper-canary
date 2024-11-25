n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(118012),
    l = n(952670);
function u(e) {
    var t;
    let { name: n, className: i, state: u, isInline: c, onClick: d } = e,
        f = null,
        _ = o.Z.Colors.HEADER_PRIMARY;
    (null == u ? void 0 : u.isActive) && !c ? (f = l.active) : (null == u ? void 0 : null === (t = u.lastValidationResult) || void 0 === t ? void 0 : t.success) === !1 ? (f = l.error) : (null == u ? void 0 : u.hasValue) && !c && (f = l.set);
    let p = (0, r.jsx)(o.Z, {
        size: c ? o.Z.Sizes.SIZE_16 : o.Z.Sizes.SIZE_14,
        color: _,
        className: a()(l.option, { [l.inline]: c }, f, i),
        children: n + (c ? ':' : '')
    });
    return null == d
        ? p
        : (0, r.jsx)(s.Clickable, {
              className: l.clickable,
              onClick: () => d(n),
              children: p
          });
}
