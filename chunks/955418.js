r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(906732),
    l = r(541716),
    u = r(752305),
    c = r(893718),
    d = r(131704),
    f = r(5192),
    _ = r(785717),
    h = r(698305),
    p = r(981631),
    m = r(388032),
    g = r(522420);
let E = (0, d.kt)({
    id: '1',
    type: p.d4z.DM
});
function v(e) {
    let { user: n, guildId: r, channelId: i, onClose: d } = e,
        { newestAnalyticsLocation: p } = (0, o.ZP)(),
        { trackUserProfileAction: v } = (0, _.KZ)(),
        [I, T] = s.useState(''),
        [b, y] = s.useState((0, u.JM)(I)),
        S = s.useRef(!1);
    return (0, a.jsx)(c.Z, {
        innerClassName: g.inner,
        editorClassName: g.editor,
        type: l.Ie.USER_PROFILE,
        placeholder: m.intl.formatToPlainString(m.t['0ZQw/f'], { name: f.ZP.getName(r, i, n) }),
        channel: E,
        textValue: I,
        richValue: b,
        onChange: (e, n, r) => {
            if (n !== I) T(n), y(r);
        },
        focused: S.current,
        onFocus: () => {
            S.current = !0;
        },
        onBlur: () => {
            S.current = !1;
        },
        onSubmit: async (e) => {
            let { value: r } = e;
            try {
                return (
                    v({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, h.Z)({
                        userId: n.id,
                        content: r.trim(),
                        location: p
                    }),
                    null == d || d(),
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
