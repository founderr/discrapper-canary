n(47120), n(653041), n(724458), n(627341);
var i,
    l,
    r,
    a,
    s = n(392711),
    o = n.n(s),
    c = n(278074),
    u = n(442837),
    d = n(570140),
    h = n(782769),
    p = n(527805),
    f = n(841784),
    _ = n(503438),
    m = n(802856),
    g = n(420660),
    C = n(728345),
    I = n(812206),
    E = n(750881),
    N = n(710845),
    x = n(38618),
    S = n(656063),
    v = n(761282),
    Z = n(814443),
    T = n(789407),
    b = n(974543),
    A = n(250889),
    M = n(199902),
    R = n(592125),
    L = n(480294),
    y = n(831506),
    P = n(731290),
    O = n(430824),
    j = n(496675),
    D = n(158776),
    w = n(699516),
    U = n(594174),
    G = n(979651),
    k = n(626135),
    B = n(823379),
    H = n(981631);
let V = !1,
    F = !1,
    W = [],
    z = [],
    Y = {},
    K = {},
    q = new Set(),
    Q = new Set();
function X() {
    let e = w.Z.getFriendIDs();
    return L.Z.hasConsented(H.pjP.PERSONALIZATION) ? new Set([...Z.Z.getUserAffinitiesUserIds(), ...e]) : new Set(e);
}
function J(e) {
    return D.Z.findActivity(e, (e) => e.type !== H.IIU.CUSTOM_STATUS);
}
function $(e) {
    return (
        null == Y[e] &&
            (Y = {
                ...Y,
                [e]: new A.Z({ name: e })
            }),
        Y[e]
    );
}
function ee(e) {
    return (
        null == K[e] &&
            (K = {
                ...K,
                [e]: new b.Z({ url: e })
            }),
        K[e]
    );
}
function et(e) {
    !Q.has(e) && q.add(e);
}
function en(e) {
    if ((0, _.Z)(e)) return T.r9;
    let t = null != e.application_id ? I.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, m.Z)(e) ? $(e.name) : (0, g.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t);
}
function ei(e) {
    let t = G.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && j.Z.canWithPartialContext(H.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function el(e) {
    return w.Z.isFriend(e.id);
}
function er(e, t, n) {
    var i, l, r, a, s, c;
    let u;
    let d = U.default.getCurrentUser(),
        _ = null !== (i = null == d ? void 0 : d.nsfwAllowed) && void 0 !== i && i,
        m = t.map((e) => e.id),
        g = t.filter((t) => e.has(t.id)),
        C = !1,
        E = [],
        x = new Set(),
        Z = !1,
        L = [];
    for (let e of t) {
        let n = M.Z.getAnyStreamForUser(e.id),
            i = R.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == i ? void 0 : i.isNSFW()) && (!_ || !P.Z.didAgree(null == i ? void 0 : i.getGuildId()))) continue;
        let s = J(e.id);
        if (
            (null != n &&
                L.push({
                    stream: n,
                    streamUser: e,
                    activity: s
                }),
            null == s)
        )
            continue;
        let c = (0, S.Z)(s);
        if (null == c) continue;
        Z = c === T.XB;
        let u = (function (e) {
                let t = I.Z.getApplication(e);
                return null != t ? t : 'string' != typeof e ? (new N.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === T.XB ? T.r9 : e.startsWith(A.H) ? $(e.slice(A.H.length)) : e.startsWith(b._) ? ee(e.slice(b._.length)) : (et(e), null);
            })(c),
            m = null === (l = s.timestamps) || void 0 === l ? void 0 : l.start;
        if ((0, f.Z)(s)) {
            let t = (0, h.a)();
            if (
                (0, p.ZP)({
                    activity: s,
                    userId: e.id,
                    application: u,
                    channelId: null === (r = G.Z.getVoiceStateForUser(e.id)) || void 0 === r ? void 0 : r.channelId,
                    currentUser: d,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: R.Z,
                    VoiceStateStore: G.Z,
                    PermissionStore: j.Z,
                    GuildStore: O.Z
                }) !== p.Fw.CAN_JOIN
            )
                continue;
        } else if (null == m) continue;
        if (!v.JE(s) || null == u || x.has(u.id)) continue;
        let g = null != s ? en(s) : null;
        (null == g || g.id !== u.id) && (s = null);
        let D = [];
        (D =
            null != s && null != s.party && null != s.party.id
                ? Array.from(null !== (a = y.Z.getParty(s.party.id)) && void 0 !== a ? a : []).reduce((e, t) => {
                      let n = U.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = J(e.id),
                          n = null != t ? en(t) : null;
                      return null != n && n.id === u.id;
                  })),
            (D = o().orderBy(D, [el], ['desc'])).length !== t.length && (C = !0),
            x.add(u.id),
            E.push({
                game: u,
                activity: s,
                activityUser: e,
                startedPlayingTime: m,
                playingMembers: D
            });
    }
    let w = 1 === g.length,
        k = [],
        H = new Set(),
        V = new Set();
    for (let e of t) {
        let n = ei(e.id),
            i = R.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = O.Z.getGuild(l);
        if ((V.has(l) && H.has(n)) || null == i || null == r || i.id === r.afkChannelId) null == i && ((u = null), (w = !0));
        else {
            let e = G.Z.getVoiceStatesForChannel(i.id),
                a = o()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return U.default.getUser(t);
                    })
                    .filter(B.lm)
                    .orderBy([el], ['desc'])
                    .value();
            a.filter((e) => !m.includes(e.id)).forEach((e) => t.push(e)),
                w ? !V.has(l) && (u = null) : ((u = r), (w = !0)),
                V.add(l),
                H.add(n),
                k.push({
                    channel: i,
                    guild: r,
                    members: a,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: k,
        isSpotifyActivity: Z,
        priorityMembers: g.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: C,
        guildContext: u,
        currentActivities: ((s = E),
        (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
        }),
        o()(s).orderBy([c, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: L
    };
}
function ea(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, E.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function es(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, E.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function eo(e) {
    return !!(0, E.sb)('now-playing-view-store') && e.partiedMembers.some((e) => w.Z.isBlocked(e.id));
}
function ec() {
    return V && x.Z.isConnected();
}
let eu = o().throttle(() => {
    !(function () {
        var e;
        if (!ec()) return;
        q.clear();
        let t = (function (e) {
                let t = X(),
                    n = er.bind(null, t);
                return o()(e).mapValues(n);
            })(
                ((e = Array.from(X()).reduce((e, t) => {
                    let n = U.default.getUser(t);
                    return null != n && !n.bot && e.push(n), e;
                }, [])),
                o()(e).groupBy((e) => {
                    var t;
                    let n = ei(e.id),
                        i = J(e.id);
                    return null != n ? ''.concat('channel-', '-').concat(n) : (null == i ? void 0 : null === (t = i.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(i.party.id) : ''.concat('user-', '-').concat(e.id);
                }))
            )
                .values()
                .orderBy([ea, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                .value(),
            { blockeeExperimentEnabled: n, blockerExperimentEnabled: i, analyticsEligible: l } = (0, E.p7)('now-playing-view-store');
        l &&
            t.forEach((e) => {
                let t = (0, c.EQ)({
                    party: e,
                    blockeeExperimentEnabled: n,
                    blockerExperimentEnabled: i
                })
                    .returnType()
                    .with(
                        {
                            blockerExperimentEnabled: !0,
                            party: c.P.when(eo)
                        },
                        () => E.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: c.P.when(es)
                        },
                        () => E.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: c.P.when(ea)
                        },
                        () => E.h9.DERANK
                    )
                    .otherwise(() => E.h9.SHOW);
                e.voiceChannels.forEach((e) => {
                    let { voiceStates: n, channel: i } = e,
                        l = o().map(n, 'userId'),
                        r = o().map(n, 'discoverable'),
                        a = o().map(n, (e) => w.Z.getRelationshipType(e.userId));
                    k.default.track(H.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                        activity_user_ids: l,
                        discoverable: r,
                        relationship_types: a,
                        voice_channel_id: i.id,
                        treatment: t,
                        surface: 'now-playing'
                    });
                });
            }),
            (z = (W = t.filter((e) => {
                let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } = (0, E.p7)('now-playing-view-store'),
                    i = n && eo(e),
                    l = t && es(e);
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !i && !l;
            })).map((e) => ({
                type: H.GOo.USER,
                party: e
            }))),
            !(function () {
                if (q.size > 0) {
                    let e = Array.from(q);
                    C.ZP.fetchApplications(e), e.forEach((e) => Q.add(e)), q.clear();
                }
            })(),
            (F = !0);
    })(),
        ep.emitChange();
}, 1000);
function ed() {
    return !!ec() && (eu(), !1);
}
class eh extends (i = u.ZP.Store) {
    initialize() {
        this.syncWith([U.default, I.Z, D.Z, y.Z, G.Z, M.Z, w.Z, L.Z, Z.Z], ed), this.waitFor(x.Z, O.Z, I.Z, U.default, Z.Z);
    }
    get currentActivityParties() {
        return W;
    }
    get nowPlayingCards() {
        return z;
    }
    get isMounted() {
        return V;
    }
    get loaded() {
        return F;
    }
}
(a = 'NowPlayingViewStore'),
    (r = 'displayName') in (l = eh)
        ? Object.defineProperty(l, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = a);
let ep = new eh(d.Z, {
    LOGOUT: function () {
        (V = !1), (W = []), (z = []), q.clear();
    },
    NOW_PLAYING_MOUNTED: function () {
        (V = !0), eu();
    },
    NOW_PLAYING_UNMOUNTED: function () {
        V = !1;
    }
});
t.Z = ep;
