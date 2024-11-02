n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(192379),
    l = n(442837),
    r = n(499254),
    a = n(213459),
    s = n(592125);
function o(e) {
    let { isProfileFetching: t, wasProfileFetching: n, applicationId: o, channelId: c, commands: u } = e;
    i.useEffect(() => {
        !t && n && null == o && (0, r.Tv)(c);
    }, [t, n, o, c]),
        i.useEffect(() => {
            (0, r.Hm)(c);
        }, [c]);
    let d = (0, l.e7)([a.ZP], () => {
            var e, t;
            return null !== (t = null === (e = a.ZP.getApplicationState(o)) || void 0 === e ? void 0 : e.fetchState.fetching) && void 0 !== t && t;
        }),
        h = (0, l.e7)([a.ZP, s.Z], () => {
            var e, t;
            let n = s.Z.getChannel(c);
            return null !== (t = null === (e = a.ZP.getContextState(n)) || void 0 === e ? void 0 : e.fetchState.fetching) && void 0 !== t && t;
        }),
        m = i.useRef(!1),
        p = i.useRef(!1);
    i.useEffect(() => {
        (m.current = !1), (p.current = !1);
    }, [c]),
        i.useEffect(() => {
            d && (m.current = !0);
        }, [d]),
        i.useEffect(() => {
            h && (p.current = !0);
        }, [h]),
        i.useEffect(() => {
            !d && !h && m.current && p.current && 0 === u.length && (0, r.Tv)(c);
        }, [d, h, u, c]);
}
