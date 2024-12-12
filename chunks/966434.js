r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(668781),
    a = r(624138),
    s = r(388032);
function o(e, n, r, o) {
    var l;
    i.Z.show({
        title: s.intl.string(s.t.XkIWkp),
        cancelText: s.intl.string(s.t['ETE/oK']),
        confirmText: s.intl.string(s.t['cY+Ooa']),
        onConfirm: r,
        onCancel: o,
        body: s.intl.format(s.t['5/Xorq'], {
            currentApplicationName: null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : s.intl.string(s.t.G99XFh),
            currentApplicationChannelName: (0, a.Ew)(null == n ? void 0 : n.name) ? s.intl.string(s.t.OGUjmp) : null == n ? void 0 : n.name
        })
    });
}
