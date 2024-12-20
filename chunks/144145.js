n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(481060),
    o = n(278323),
    s = n(287734),
    c = n(230711),
    d = n(726542),
    u = n(620662),
    h = n(841784),
    m = n(802856),
    p = n(594190),
    g = n(592745),
    f = n(553795),
    _ = n(757266),
    E = n(283595),
    I = n(417363),
    C = n(626135),
    v = n(804739),
    S = n(346329),
    N = n(981631),
    T = n(388032);
let b = d.Z.get(N.ABu.XBOX).name;
function x(e) {
    let { currentActivities: t } = e,
        n = t.length > 1,
        x = (function (e) {
            let { currentActivities: t } = e,
                n = (0, l.e7)([f.Z], () => f.Z.getAccounts().some((e) => e.type === d.Z.get(N.ABu.XBOX).type)),
                r = t.some((e) => {
                    let { activity: t } = e;
                    return (0, m.Z)(t);
                });
            return n || !r
                ? null
                : (0, i.jsx)(a.MenuItem, {
                      id: 'xbox-connect',
                      action: () => c.Z.open(N.oAB.CONNECTIONS),
                      label: T.intl.formatToPlainString(T.t.XWSHTU, { platform: b })
                  });
        })(e),
        A = (function (e) {
            let { currentActivities: t } = e,
                n = r.useContext(C.AnalyticsContext);
            return (0, l.Wu)(
                [p.ZP, E.Z, g.Z, I.Z, _.Z],
                () =>
                    t
                        .filter((e) => !(0, h.Z)(e.activity))
                        .map((e) => {
                            let { activity: t, game: i } = e,
                                r = E.Z.getActiveLibraryApplication(i.id);
                            return {
                                ...e,
                                libraryApplication: r,
                                canJoin: null != t && (0, u.Z)(t, N.xjy.JOIN) && t.type === N.IIU.PLAYING,
                                canPlay: (0, v.t)({
                                    LibraryApplicationStore: E.Z,
                                    LaunchableGameStore: g.Z,
                                    DispatchApplicationStore: I.Z,
                                    ConnectedAppsStore: _.Z,
                                    applicationId: i.id,
                                    branchId: null != r ? r.branchId : null
                                }),
                                isLaunching: g.Z.launchingGames.has(i.id),
                                isRunning: p.ZP.getRunningVerifiedApplicationIds().includes(i.id),
                                location: n.location
                            };
                        }),
                [n.location, t]
            );
        })(e),
        Z = [];
    for (let e of A) {
        let { activity: t } = e;
        null != t &&
            null != t.type &&
            Z.push(
                (function (e, t) {
                    let { canJoin: n, activity: r, activityUser: l } = e;
                    if (!n || null == r) return null;
                    async function c() {
                        if (null == r) return;
                        let e = await o.Z.sendActivityInviteUser({
                            type: N.mFx.JOIN_REQUEST,
                            userId: l.id,
                            activity: r,
                            location: N.Sbl.PROFILE_POPOUT
                        });
                        null != e && s.default.selectPrivateChannel(e.id);
                    }
                    return (0, i.jsx)(a.MenuItem, {
                        id: 'join-'.concat(r.session_id),
                        label: t ? T.intl.formatToPlainString(T.t.wFAvxM, { name: l.toString() }) : T.intl.string(T.t.OKsSCQ),
                        action: c
                    });
                })(e, n),
                (function (e, t) {
                    let { activity: n, game: r, libraryApplication: l, location: o, canPlay: s, isRunning: c, isLaunching: d } = e;
                    if (!s || null == n) return null;
                    let u = c ? T.intl.formatToPlainString(T.t['gBme//'], { name: r.name }) : d ? T.intl.formatToPlainString(T.t.WtSQwM, { name: r.name }) : void 0;
                    return (0, i.jsx)(a.MenuItem, {
                        id: 'play-'.concat(n.session_id),
                        action: function () {
                            (0, S.playApplication)(r.id, l, {
                                analyticsParams: {
                                    location: {
                                        ...o,
                                        object: N.qAy.LIST_ITEM
                                    }
                                }
                            });
                        },
                        label: t ? T.intl.formatToPlainString(T.t.ZDZEJC, { name: r.name }) : T.intl.string(T.t.XKUw8v),
                        subtext: u
                    });
                })(e, n)
            );
    }
    return [x, ...Z];
}
