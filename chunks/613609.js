n(47120), n(773603);
var i = n(200651),
    a = n(192379),
    s = n(442837),
    r = n(447543),
    l = n(568154),
    o = n(703656),
    c = n(430824),
    d = n(701190),
    u = n(449934),
    _ = n(650233),
    E = n(981631),
    h = n(898625),
    m = n(119057);
t.Z = (e) => {
    let { guildId: t, inviteCode: n } = e,
        [I, p] = a.useState(h.hO.INITIAL),
        [g, T] = a.useState(null != n);
    a.useEffect(() => {
        null != n && r.Z.resolveInvite(n, 'Hub').finally(() => T(!1));
    }, [n]);
    let f = (0, s.e7)([d.Z], () => (null != n ? d.Z.getInvite(n) : null)),
        S = (0, s.e7)([c.Z], () => c.Z.getGuild(t));
    a.useEffect(() => {
        null != S && (0, o.uL)(E.Z5c.CHANNEL(t));
    }, [S, t]);
    let C = a.useCallback((e) => {
            p((t) => Math.max(t, e));
        }, []),
        N = (0, u.gK)();
    return (0, i.jsx)('div', {
        className: m.page,
        children: (0, i.jsxs)(l.Z, {
            embedded: !0,
            splash: N,
            waveState: I,
            showLogo: !1,
            updateWaveState: C,
            children: [
                (0, i.jsx)('div', { className: m.dragRegion }),
                (0, i.jsx)('div', {
                    className: m.contentWrapper,
                    children: !g && (0, i.jsx)(_.HubEmailConnectionModalView, { invite: f })
                })
            ]
        })
    });
};
