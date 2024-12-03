n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(287734),
    o = n(411840),
    l = n(585483),
    u = n(871499),
    c = n(981631),
    d = n(388032);
function f(e) {
    let { channel: t, centerButton: n = !1, ...f } = e,
        _ = n ? u.d : u.Z,
        p = t.isManaged() || !t.isPrivate() ? d.intl.string(d.t.S0W8Z2) : d.intl.string(d.t['0D/6R0']),
        { groupedButtons: h } = (0, o.Z)({ location: 'JoinCallButton' }),
        m = i.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
    return (
        i.useEffect(
            () => (
                l.S.subscribe(c.CkL.CALL_ACCEPT, m),
                () => {
                    l.S.unsubscribe(c.CkL.CALL_ACCEPT, m);
                }
            ),
            [m]
        ),
        (0, r.jsx)(_, {
            ...f,
            iconComponent: a.PhoneCallIcon,
            label: p,
            onClick: m,
            fullRegionButton: h
        })
    );
}
