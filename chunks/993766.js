n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(192379),
    s = n(442837),
    a = n(499254),
    l = n(213459),
    r = n(592125);
function o(e) {
    let { isProfileFetching: t, wasProfileFetching: n, applicationId: o, channelId: c, commands: u } = e;
    i.useEffect(() => {
        !t && n && null == o && (0, a.Tv)(c);
    }, [t, n, o, c]),
        i.useEffect(() => {
            (0, a.Hm)(c);
        }, [c]);
    let d = (0, s.e7)([l.ZP], () => {
            var e, t;
            return null !== (t = null === (e = l.ZP.getApplicationState(o)) || void 0 === e ? void 0 : e.fetchState.fetching) && void 0 !== t && t;
        }),
        h = (0, s.e7)([l.ZP, r.Z], () => {
            var e, t;
            let n = r.Z.getChannel(c);
            return null !== (t = null === (e = l.ZP.getContextState(n)) || void 0 === e ? void 0 : e.fetchState.fetching) && void 0 !== t && t;
        }),
        p = i.useRef(!1),
        m = i.useRef(!1);
    i.useEffect(() => {
        (p.current = !1), (m.current = !1);
    }, [c]),
        i.useEffect(() => {
            d && (p.current = !0);
        }, [d]),
        i.useEffect(() => {
            h && (m.current = !0);
        }, [h]),
        i.useEffect(() => {
            !d && !h && p.current && m.current && 0 === u.length && (0, a.Tv)(c);
        }, [d, h, u, c]);
}
