n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(757143);
var i = n(47120);
var a = n(735250);
n(470079);
var o = n(481060),
    s = n(660199),
    l = n(217822);
function u(e, t) {
    if (!('type' in e)) return null;
    if ('timestamp' === e.type)
        return (0, a.jsx)(c, {
            ...t,
            timestamp: e.parsed
        });
    return null;
}
function c(e) {
    var t;
    let { timestamp: n, replace: r } = e,
        i = (e) => {
            let { timestamp: t, format: i } = e,
                a = null != t ? Math.floor(t.getTime() / 1000) : n.timestamp,
                o = null != i ? i : n.format;
            r((0, s.He)(a, o));
        };
    return (0, a.jsxs)('div', {
        className: l.container,
        children: [
            (0, a.jsx)(o.DateInput, {
                value: n.parsed,
                onSelect: (e) => {
                    i({ timestamp: e.toDate() });
                }
            }),
            (0, a.jsx)(o.TimeInput, {
                value: n.parsed,
                onChange: (e) => {
                    i({ timestamp: e.toDate() });
                }
            }),
            (0, a.jsx)(o.RadioGroup, {
                options: Object.entries(s.Qh).map((e) => {
                    let [t, r] = e;
                    return {
                        name: r(n.parsed),
                        value: t
                    };
                }),
                value: null !== (t = n.format) && void 0 !== t ? t : s.K_,
                size: o.RadioGroup.Sizes.SMALL,
                onChange: (e) => {
                    let { value: t } = e;
                    i({ format: t });
                }
            })
        ]
    });
}
