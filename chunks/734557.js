n.d(t, {
    s: function () {
        return r;
    }
}),
    n(47120),
    n(724458);
var l = n(192379),
    o = n(544891),
    i = n(981631);
let a = new Map();
function r(e) {
    let [t, n] = l.useState(a.has(e) ? Array.from(a.get(e)) : []),
        [r, s] = l.useState(!1),
        c = l.useMemo(() => t.map((e) => e.code), [t]),
        C = l.useMemo(() => t.reduce((e, t) => ((e[t.code] = t), e), {}), [t]),
        d = l.useCallback(async () => {
            s(!0);
            let t = (
                await o.tn.get({
                    url: i.ANM.GUILD_INSTANT_INVITES(e),
                    rejectWithError: !0
                })
            ).body.sort((e, t) => new Date(t.created_at).getTime() - new Date(e.created_at).getTime());
            n(t), a.set(e, new Set(t)), s(!1);
        }, [e]);
    return (
        l.useEffect(() => {
            d();
        }, [e, d]),
        {
            invitesRaw: t,
            inviteCodes: c,
            invitesByCode: C,
            loading: r
        }
    );
}
