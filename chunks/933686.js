n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    s = n(192379),
    a = n(442837),
    l = n(774078),
    r = n(390322),
    o = n(272929),
    c = n(456631),
    u = n(381871),
    d = n(304388);
function h(e) {
    let { channel: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.effectCooldownEndTime),
        h = s.useMemo(() => (null != n ? (n.getTime() - Date.now()) / 1000 : 0), [n]),
        { seconds: p } = (0, l.Z)(null != n ? n : new Date()),
        m = p > 0;
    return (0, i.jsx)(d.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: s } = e;
            return (0, i.jsx)(r.Z, {
                children: (0, i.jsx)(u.Z, {
                    channel: t,
                    closePopout: n,
                    onFocus: s
                })
            });
        },
        children: (e) => {
            let { onMouseEnter: t, ...n } = e;
            return (0, i.jsx)(o.Z, {
                totalCooldownSeconds: h,
                remainingCooldownSeconds: p,
                onMouseEnter: (e) => {
                    var n, i;
                    return (n = e), (i = t), void (!m && i(n));
                },
                ...n
            });
        }
    });
}
