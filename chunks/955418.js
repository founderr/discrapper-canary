n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(906732),
    s = n(541716),
    o = n(752305),
    l = n(893718),
    u = n(131704),
    c = n(5192),
    d = n(785717),
    f = n(698305),
    _ = n(981631),
    p = n(388032),
    h = n(41737);
let m = (0, u.kt)({
    id: '1',
    type: _.d4z.DM
});
function g(e) {
    let { user: t, guildId: n, channelId: u, onClose: _ } = e,
        { newestAnalyticsLocation: g } = (0, a.ZP)(),
        { trackUserProfileAction: E } = (0, d.KZ)(),
        [v, b] = i.useState(''),
        [I, S] = i.useState((0, o.JM)(v)),
        T = i.useRef(!1);
    return (0, r.jsx)(l.Z, {
        innerClassName: h.inner,
        editorClassName: h.editor,
        type: s.I.USER_PROFILE,
        placeholder: p.intl.formatToPlainString(p.t['0ZQw/f'], { name: c.ZP.getName(n, u, t) }),
        channel: m,
        textValue: v,
        richValue: I,
        onChange: (e, t, n) => {
            if (t !== v) b(t), S(n);
        },
        focused: T.current,
        onFocus: () => {
            T.current = !0;
        },
        onBlur: () => {
            T.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    E({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, f.Z)({
                        userId: t.id,
                        content: n.trim(),
                        location: g
                    }),
                    null == _ || _(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                );
            } catch {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
