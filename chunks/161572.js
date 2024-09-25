n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(837411),
    a = n(705556),
    o = n(955418),
    s = n(451563);
function l(e) {
    let { user: t, guildId: n, channelId: l, onClose: u } = e,
        c = (0, i.Z)(t.id, n);
    return (0, r.jsxs)('footer', {
        className: s.footer,
        children: [
            c &&
                (0, r.jsx)(o.Z, {
                    user: t,
                    guildId: n,
                    channelId: l,
                    onClose: u
                }),
            !c &&
                (0, r.jsx)(a.Z, {
                    user: t,
                    guildId: n,
                    onClose: u,
                    fullWidth: !0
                })
        ]
    });
}
