n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(287734),
    o = n(585483),
    l = n(871499),
    u = n(981631),
    c = n(388032);
function d(e) {
    let { channel: t, centerButton: n = !1, ...d } = e,
        f = n ? l.d : l.Z,
        _ = t.isManaged() || !t.isPrivate() ? c.intl.string(c.t.S0W8Z2) : c.intl.string(c.t['0D/6R0']),
        p = i.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
    return (
        i.useEffect(
            () => (
                o.S.subscribe(u.CkL.CALL_ACCEPT, p),
                () => {
                    o.S.unsubscribe(u.CkL.CALL_ACCEPT, p);
                }
            ),
            [p]
        ),
        (0, r.jsx)(f, {
            ...d,
            iconComponent: a.PhoneCallIcon,
            label: _,
            onClick: p
        })
    );
}
