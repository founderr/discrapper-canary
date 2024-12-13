n(47120), n(653041), n(724458), n(627341);
var i,
    l,
    r,
    o,
    a = n(392711),
    s = n.n(a),
    c = n(278074),
    u = n(442837),
    d = n(570140),
    h = n(782769),
    p = n(527805),
    m = n(841784),
    f = n(503438),
    g = n(802856),
    C = n(420660),
    v = n(728345),
    _ = n(812206),
    x = n(750881),
    I = n(710845),
    b = n(38618),
    E = n(656063),
    S = n(761282),
    Z = n(814443),
    N = n(789407),
    y = n(974543),
    T = n(250889),
    j = n(199902),
    A = n(592125),
    P = n(480294),
    R = n(831506),
    M = n(731290),
    w = n(430824),
    L = n(496675),
    D = n(158776),
    O = n(699516),
    k = n(594174),
    G = n(979651),
    U = n(626135),
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
function J() {
    let e = O.Z.getFriendIDs();
    return P.Z.hasConsented(H.pjP.PERSONALIZATION) ? new Set([...Z.Z.getUserAffinitiesUserIds(), ...e]) : new Set(e);
}
function X(e) {
    return D.Z.findActivity(e, (e) => e.type !== H.IIU.CUSTOM_STATUS);
}
function $(e) {
    return (
        null == Y[e] &&
            (Y = {
                ...Y,
                [e]: new T.Z({ name: e })
            }),
        Y[e]
    );
}
function ee(e) {
    return (
        null == K[e] &&
            (K = {
                ...K,
                [e]: new y.Z({ url: e })
            }),
        K[e]
    );
}
function et(e) {
    !Q.has(e) && q.add(e);
}
function en(e) {
    if ((0, f.Z)(e)) return N.r9;
    let t = null != e.application_id ? _.Z.getApplication(e.application_id) : null;
    return null != t ? t : (0, g.Z)(e) ? $(e.name) : (0, C.Z)(e) && null != e.url ? ee(e.url) : (null != e.application_id && et(e.application_id), t);
}
function ei(e) {
    let t = G.Z.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && L.Z.canWithPartialContext(H.Plq.VIEW_CHANNEL, { channelId: t.channelId }) ? t.channelId : null;
}
function el(e) {
    return O.Z.isFriend(e.id);
}
function er(e, t, n) {
    var i, l, r, o, a, c;
    let u;
    let d = k.default.getCurrentUser(),
        f = null !== (i = null == d ? void 0 : d.nsfwAllowed) && void 0 !== i && i,
        g = t.map((e) => e.id),
        C = t.filter((t) => e.has(t.id)),
        v = !1,
        x = [],
        b = new Set(),
        Z = !1,
        P = [];
    for (let e of t) {
        let n = j.Z.getAnyStreamForUser(e.id),
            i = A.Z.getChannel(null == n ? void 0 : n.channelId);
        if ((null == i ? void 0 : i.isNSFW()) && (!f || !M.Z.didAgree(null == i ? void 0 : i.getGuildId()))) continue;
        let a = X(e.id);
        if (
            (null != n &&
                P.push({
                    stream: n,
                    streamUser: e,
                    activity: a
                }),
            null == a)
        )
            continue;
        let c = (0, E.Z)(a);
        if (null == c) continue;
        Z = c === N.XB;
        let u = (function (e) {
                let t = _.Z.getApplication(e);
                return null != t ? t : 'string' != typeof e ? (new I.Z('NowPlayingViewStore').error('Unknown type for applicationId: '.concat(typeof e, ', value: ').concat(e), { tags: { source: 'ACTIVITIES' } }), null) : e === N.XB ? N.r9 : e.startsWith(T.H) ? $(e.slice(T.H.length)) : e.startsWith(y._) ? ee(e.slice(y._.length)) : (et(e), null);
            })(c),
            g = null === (l = a.timestamps) || void 0 === l ? void 0 : l.start;
        if ((0, m.Z)(a)) {
            let t = (0, h.a)();
            if (
                (0, p.ZP)({
                    activity: a,
                    userId: e.id,
                    application: u,
                    channelId: null === (r = G.Z.getVoiceStateForUser(e.id)) || void 0 === r ? void 0 : r.channelId,
                    currentUser: d,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: A.Z,
                    VoiceStateStore: G.Z,
                    PermissionStore: L.Z,
                    GuildStore: w.Z
                }) !== p.Fw.CAN_JOIN
            )
                continue;
        } else if (null == g) continue;
        if (!S.JE(a) || null == u || b.has(u.id)) continue;
        let C = null != a ? en(a) : null;
        (null == C || C.id !== u.id) && (a = null);
        let D = [];
        (D =
            null != a && null != a.party && null != a.party.id
                ? Array.from(null !== (o = R.Z.getParty(a.party.id)) && void 0 !== o ? o : []).reduce((e, t) => {
                      let n = k.default.getUser(t);
                      return null != n && e.push(n), e;
                  }, [])
                : t.filter((e) => {
                      let t = X(e.id),
                          n = null != t ? en(t) : null;
                      return null != n && n.id === u.id;
                  })),
            (D = s().orderBy(D, [el], ['desc'])).length !== t.length && (v = !0),
            b.add(u.id),
            x.push({
                game: u,
                activity: a,
                activityUser: e,
                startedPlayingTime: g,
                playingMembers: D
            });
    }
    let O = 1 === C.length,
        U = [],
        H = new Set(),
        V = new Set();
    for (let e of t) {
        let n = ei(e.id),
            i = A.Z.getChannel(n),
            l = null != i ? i.getGuildId() : null,
            r = w.Z.getGuild(l);
        if ((V.has(l) && H.has(n)) || null == i || null == r || i.id === r.afkChannelId) null == i && ((u = null), (O = !0));
        else {
            let e = G.Z.getVoiceStatesForChannel(i.id),
                o = s()(e)
                    .map((e) => {
                        let { userId: t } = e;
                        return k.default.getUser(t);
                    })
                    .filter(B.lm)
                    .orderBy([el], ['desc'])
                    .value();
            o.filter((e) => !g.includes(e.id)).forEach((e) => t.push(e)),
                O ? !V.has(l) && (u = null) : ((u = r), (O = !0)),
                V.add(l),
                H.add(n),
                U.push({
                    channel: i,
                    guild: r,
                    members: o,
                    voiceStates: e
                });
        }
    }
    return {
        id: n,
        voiceChannels: U,
        isSpotifyActivity: Z,
        priorityMembers: C.map((e) => ({
            user: e,
            status: D.Z.getStatus(e.id)
        })),
        partiedMembers: t,
        showPlayingMembers: v,
        guildContext: u,
        currentActivities: ((a = x),
        (c = (e) => {
            var t;
            return null !== (t = e.startedPlayingTime) && void 0 !== t ? t : 0;
        }),
        s()(a).orderBy([c, (e) => e.game.name], ['desc', 'asc'])).value(),
        applicationStreams: P
    };
}
function eo(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, x.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.some((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).some((e) => !1 === e.discoverable);
        })
    );
}
function ea(e) {
    return (
        !!(0 !== e.voiceChannels.length && (0, x.$W)('now-playing-view-store')) &&
        e.voiceChannels.length > 0 &&
        e.voiceChannels.every((e) => {
            let { voiceStates: t } = e;
            return Object.values(t).every((e) => !1 === e.discoverable);
        })
    );
}
function es(e) {
    return !!(0, x.sb)('now-playing-view-store') && e.partiedMembers.some((e) => O.Z.isBlocked(e.id));
}
function ec() {
    return V && b.Z.isConnected();
}
let eu = s().throttle(() => {
    !(function () {
        var e;
        if (!ec()) return;
        q.clear();
        let t = (function (e) {
                let t = J(),
                    n = er.bind(null, t);
                return s()(e).mapValues(n);
            })(
                ((e = Array.from(J()).reduce((e, t) => {
                    let n = k.default.getUser(t);
                    return null != n && !n.bot && e.push(n), e;
                }, [])),
                s()(e).groupBy((e) => {
                    var t;
                    let n = ei(e.id),
                        i = X(e.id);
                    return null != n ? ''.concat('channel-', '-').concat(n) : (null == i ? void 0 : null === (t = i.party) || void 0 === t ? void 0 : t.id) != null ? ''.concat('party-', '-').concat(i.party.id) : ''.concat('user-', '-').concat(e.id);
                }))
            )
                .values()
                .orderBy([eo, (e) => e.partiedMembers.length > 1, (e) => e.applicationStreams.length > 0, (e) => e.voiceChannels.length > 0, (e) => e.currentActivities.length > 0, (e) => e.isSpotifyActivity, (e) => e.priorityMembers.map((e) => e.user.username.toLowerCase()).join(' ')], ['asc', 'desc', 'desc', 'desc', 'desc', 'asc', 'asc'])
                .value(),
            { blockeeExperimentEnabled: n, blockerExperimentEnabled: i, analyticsEligible: l } = (0, x.p7)('now-playing-view-store');
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
                            party: c.P.when(es)
                        },
                        () => x.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: c.P.when(ea)
                        },
                        () => x.h9.HIDE
                    )
                    .with(
                        {
                            blockeeExperimentEnabled: !0,
                            party: c.P.when(eo)
                        },
                        () => x.h9.DERANK
                    )
                    .otherwise(() => x.h9.SHOW);
                e.voiceChannels.forEach((e) => {
                    let { voiceStates: n, channel: i } = e,
                        l = s().map(n, 'userId'),
                        r = s().map(n, 'discoverable'),
                        o = s().map(n, (e) => O.Z.getRelationshipType(e.userId));
                    U.default.track(H.rMx.PARTY_VOICE_ACTIVITY_VIEWED, {
                        activity_user_ids: l,
                        discoverable: r,
                        relationship_types: o,
                        voice_channel_id: i.id,
                        treatment: t,
                        surface: 'now-playing'
                    });
                });
            }),
            (z = (W = t.filter((e) => {
                let { blockeeExperimentEnabled: t, blockerExperimentEnabled: n } = (0, x.p7)('now-playing-view-store'),
                    i = n && es(e),
                    l = t && ea(e);
                return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !i && !l;
            })).map((e) => ({
                type: H.GOo.USER,
                party: e
            }))),
            !(function () {
                if (q.size > 0) {
                    let e = Array.from(q);
                    v.ZP.fetchApplications(e), e.forEach((e) => Q.add(e)), q.clear();
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
        this.syncWith([k.default, _.Z, D.Z, R.Z, G.Z, j.Z, O.Z, P.Z, Z.Z], ed), this.waitFor(b.Z, w.Z, _.Z, k.default, Z.Z);
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
(o = 'NowPlayingViewStore'),
    (r = 'displayName') in (l = eh)
        ? Object.defineProperty(l, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[r] = o);
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
