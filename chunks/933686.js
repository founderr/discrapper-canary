n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(774078),
    s = n(390322),
    o = n(272929),
    c = n(456631),
    d = n(381871),
    u = n(304388);
function h(e) {
    let { channel: t } = e,
        n = (0, r.e7)([c.Z], () => c.Z.effectCooldownEndTime),
        h = l.useMemo(() => (null != n ? (n.getTime() - Date.now()) / 1000 : 0), [n]),
        { seconds: p } = (0, a.Z)(null != n ? n : new Date()),
        m = p > 0;
    return (0, i.jsx)(u.Z, {
        renderPopout: (e) => {
            let { closePopout: n, onFocus: l } = e;
            return (0, i.jsx)(s.Z, {
                children: (0, i.jsx)(d.Z, {
                    channel: t,
                    closePopout: n,
                    onFocus: l
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
