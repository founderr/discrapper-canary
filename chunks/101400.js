n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var a = n(657707),
    s = n(442837),
    r = n(706454),
    l = n(689938),
    o = n(889280);
function c(e) {
    var t, n;
    let { className: c, application: d } = e,
        u = (0, s.e7)([r.default], () => r.default.locale),
        _ = null !== (n = null === (t = d.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        E = new Intl.NumberFormat(u, {
            notation: 'compact',
            compactDisplay: 'short'
        });
    return (0, i.jsx)('div', {
        className: c,
        children:
            _ > 0 &&
            (0, i.jsxs)('div', {
                className: o.guildCountContainer,
                children: [
                    (0, i.jsx)(a.Jmo, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 16,
                        height: 16,
                        className: o.guildCountIcon
                    }),
                    l.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({ guildCount: E.format(_) })
                ]
            })
    });
}
