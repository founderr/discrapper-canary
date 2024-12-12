r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(287734),
    l = r(411840),
    u = r(585483),
    c = r(871499),
    d = r(981631),
    f = r(388032);
function _(e) {
    let { channel: n, centerButton: r = !1, ..._ } = e,
        h = r ? c.d : c.Z,
        p = n.isManaged() || !n.isPrivate() ? f.intl.string(f.t.S0W8Z2) : f.intl.string(f.t['0D/6R0']),
        { groupedButtons: m } = (0, l.Z)({ location: 'JoinCallButton' }),
        g = a.useCallback(() => o.default.selectVoiceChannel(n.id), [n.id]);
    return (
        a.useEffect(
            () => (
                u.S.subscribe(d.CkL.CALL_ACCEPT, g),
                () => {
                    u.S.unsubscribe(d.CkL.CALL_ACCEPT, g);
                }
            ),
            [g]
        ),
        (0, i.jsx)(h, {
            ..._,
            iconComponent: s.PhoneCallIcon,
            label: p,
            onClick: g,
            fullRegionButton: m
        })
    );
}
