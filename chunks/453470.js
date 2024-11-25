n.d(t, {
    M: function () {
        return p;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(286379),
    a = n(797614),
    s = n(378298),
    o = n(359119),
    c = n(473092),
    d = n(177342),
    u = n(981631),
    h = n(388032);
function p(e) {
    let { channelId: t, warningId: n, senderId: p } = e,
        m = l.useCallback(() => {
            (0, s.T)(t, [n]);
        }, [t, n]);
    return (
        l.useEffect(() => {
            (0, c.MC)(u.rMx.SAFETY_WARNING_VIEWED, {
                channelId: t,
                warningId: n,
                senderId: p,
                warningType: o.pj.LIKELY_ATO
            }),
                a.Z.increment({ name: r.V.SAFETY_WARNING_VIEW });
        }, [t, n, p]),
        (0, i.jsx)(d.Q, {
            channelId: t,
            warningId: n,
            senderId: p,
            warningType: o.pj.LIKELY_ATO,
            header: h.intl.string(h.t.R8UsiI),
            description: h.intl.string(h.t.lI8nQk),
            onDismiss: m,
            buttons: []
        })
    );
}
