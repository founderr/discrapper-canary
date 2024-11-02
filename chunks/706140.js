n.d(t, {
    EM: function () {
        return p;
    },
    cv: function () {
        return h;
    }
});
var r = n(192379),
    i = n(442837),
    a = n(581883),
    s = n(914010),
    o = n(915486),
    l = n(68985),
    u = n(211644),
    c = n(605236),
    d = n(57207),
    f = n(526761);
function _(e, t, n, a, s) {
    let o = (0, u.ZP)((t) => null != e && t.currentlyShown.has(e)),
        d = (0, i.e7)([l.Z], () => null != e && l.Z.hasUserHitDCCap(e));
    return (
        r.useEffect(() => {
            if (null != e)
                return (
                    (0, c.kk)(
                        e,
                        {
                            groupName: n,
                            guildId: t,
                            version: s
                        },
                        a
                    ),
                    () => {
                        if (null == e) return;
                        let t = !l.Z.hasUserHitDCCap();
                        (0, u.gE)(
                            {
                                content: e,
                                groupName: n
                            },
                            t
                        );
                    }
                );
        }, [e, n, t, d, a, s]),
        o && null != e ? e : null
    );
}
function h(e, t, n) {
    let l = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
        }),
        u = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        h = (0, d.i)(e),
        p = null;
    a.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (p = h.find((e) => null == l || !(0, o.jl)(l, e))) : null != l && (p = h.find((e) => !(0, o.jl)(l, e)));
    let m = _(p, u, t, n);
    return [
        m,
        r.useCallback(
            (e, n) => {
                null != p &&
                    (0, c.EW)(p, {
                        dismissAction: e,
                        groupName: t,
                        guildId: u,
                        forceTrack: n
                    });
            },
            [p, t, u]
        )
    ];
}
function p(e, t, n, o) {
    let l = (0, i.e7)([a.Z], () => {
            var t, n, r;
            return null !== e ? (null === (r = a.Z.settings.userContent) || void 0 === r ? void 0 : null === (n = r.recurringDismissibleContentStates) || void 0 === n ? void 0 : null === (t = n[e]) || void 0 === t ? void 0 : t.lastDismissedVersion) : void 0;
        }),
        u = (0, i.e7)([s.Z], () => s.Z.getGuildId()),
        h = null;
    if (null != e) {
        let n = !(0, d.B)(e);
        a.Z.hasLoaded(f.yP.PRELOADED_USER_SETTINGS) ? (h = n && (null == l || l < t) ? e : null) : null != l && (h = n && l < t ? e : null);
    }
    let p = _(h, u, n, o, t);
    return [
        p,
        r.useCallback(
            (e, r) => {
                null != h &&
                    (0, c.wH)(h, t, {
                        dismissAction: e,
                        groupName: n,
                        guildId: u,
                        forceTrack: r,
                        version: t
                    });
            },
            [h, n, u, t]
        )
    ];
}
