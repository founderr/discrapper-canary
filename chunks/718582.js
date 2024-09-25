n.d(t, {
    $1: function () {
        return eg;
    },
    CE: function () {
        return eR;
    },
    DE: function () {
        return ev;
    },
    Es: function () {
        return ep;
    },
    FP: function () {
        return eE;
    },
    K6: function () {
        return eI;
    },
    NZ: function () {
        return eN;
    },
    QO: function () {
        return es;
    },
    V1: function () {
        return eu;
    },
    bA: function () {
        return eo;
    },
    fd: function () {
        return ef;
    },
    ni: function () {
        return eO;
    },
    ob: function () {
        return eT;
    },
    pV: function () {
        return r;
    }
});
var r,
    i = n(47120);
var a = n(390547);
var o = n(653041);
var s = n(627341);
var l = n(757143);
var u = n(470079),
    c = n(392711);
var d = n(278074),
    _ = n(442837),
    E = n(481060),
    f = n(925549),
    h = n(317381),
    p = n(841784),
    m = n(367907),
    I = n(835473),
    T = n(12498),
    g = n(557135),
    S = n(471445),
    A = n(66999),
    v = n(15274),
    N = n(924301),
    O = n(230900),
    R = n(703656),
    C = n(881824),
    y = n(922482),
    b = n(565799),
    L = n(501655),
    D = n(344185),
    M = n(814443),
    P = n(199902),
    U = n(592125),
    w = n(480294),
    x = n(984933),
    G = n(271383),
    k = n(496675),
    B = n(158776),
    F = n(699516),
    Z = n(594174),
    V = n(979651),
    H = n(938475),
    Y = n(626135),
    j = n(823379),
    W = n(5192),
    K = n(51144),
    z = n(912787),
    q = n(126134),
    Q = n(981631),
    X = n(765305),
    $ = n(689938);
let J = 7,
    ee = 6,
    et = 5,
    en = 4,
    er = 3,
    ei = 2,
    ea = 1;
function eo(e, t) {
    let n = H.ZP.getVoiceStatesForChannelAlt(e, t).map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        r = w.Z.hasConsented(Q.pjP.PERSONALIZATION),
        i = M.Z.getUserAffinities();
    return (
        r && i.length > 0
            ? (0, c.orderBy)(
                  n,
                  [
                      (e) => {
                          var t, n;
                          return null !== (n = null === (t = M.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                      }
                  ],
                  ['desc']
              )
            : n
    )
        .map((e) => Z.default.getUser(e))
        .filter(j.lm);
}
function es(e, t) {
    return eh(
        (0, _.e7)([H.ZP], () => H.ZP.getVoiceStatesForChannelAlt(e, t), [e, t]).map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        t,
        e
    );
}
function el(e) {
    let t = [...e],
        n = t[0].category,
        r = t.findIndex((e) => e.category === q.L.EVENT),
        i = t.findIndex((e) => e.category === q.L.HANGOUT && e.isStage),
        a = t.findIndex((e) => e.category === q.L.EMBEDDED_ACTIVITY),
        o = t.findIndex((e) => e.category === q.L.HANGOUT && e.streamUserIds.length > 0),
        s = t.findIndex((e) => e.category === q.L.HANGOUT && e.videoUserIds.length > 0),
        l = t.findIndex((e) => e.category === q.L.GAMING);
    if ((n === q.L.EVENT && 0 === r) || (n === q.L.HANGOUT && 0 === i) || (n === q.L.EMBEDDED_ACTIVITY && 0 === a) || (n === q.L.HANGOUT && 0 === o && -1 === i) || (n === q.L.HANGOUT && 0 === s && -1 === i && -1 === o) || (n === q.L.GAMING && 0 === l) || (-1 === r && -1 === i && -1 === a && -1 === o && -1 === s && -1 === l)) return e;
    if (-1 !== r) {
        let e = t.splice(r, 1);
        return t.splice(0, 0, e[0]), t;
    }
    if (-1 !== i) {
        let e = t.splice(i, 1);
        return t.splice(0, 0, e[0]), t;
    }
    if (-1 !== a) {
        let e = t.splice(a, 1);
        return t.splice(0, 0, e[0]), t;
    }
    if (-1 !== o) {
        let e = t.splice(o, 1);
        return t.splice(0, 0, e[0]), t;
    }
    if (-1 !== s) {
        let e = t.splice(s, 1);
        return t.splice(0, 0, e[0]), t;
    }
    if (-1 !== l) {
        let e = t.splice(l, 1);
        return t.splice(0, 0, e[0]), t;
    }
    return e;
}
function eu(e) {
    let t = e.id,
        [n, r] = u.useState([]),
        [i, a] = u.useState(0),
        o = (0, _.Wu)(
            [x.ZP, D.Z],
            () => {
                let e = x.ZP.getChannels(t)[x.Zb].map((e) => {
                    let { channel: t } = e;
                    return t.id;
                });
                return [...e, ...Object.values(D.Z.getThreadsForGuild(t)).flatMap((e) => Object.keys(e))];
            },
            [t]
        ),
        s = (0, _.e7)(
            [N.ZP, U.Z],
            () =>
                N.ZP.getGuildScheduledEventsForGuild(t)
                    .filter((e) => (0, N.xt)(e))
                    .map((e) => {
                        var t;
                        return {
                            category: q.L.EVENT,
                            event: e,
                            isStage: !!(null === (t = U.Z.getChannel(e.channel_id)) || void 0 === t ? void 0 : t.isGuildStageVoice())
                        };
                    }),
            [t],
            c.isEqual
        ),
        l = s.map((e) => {
            let { event: t } = e;
            return t.channel_id;
        }),
        d = (0, _.e7)([F.Z], () => F.Z.getRelationships()),
        E = u.useMemo(() => Object.keys(d).filter((e) => d[e] === Q.OGo.BLOCKED), [d]),
        f = (0, _.e7)([H.ZP], () => H.ZP.getVoiceStates(t), [t]),
        m = u.useMemo(() => {
            let t = Object.keys(f);
            return 0 === t.length
                ? []
                : t.filter((t) => {
                      let n = f[t].filter(j.lm);
                      return (
                          !(0 === n.length || l.includes(t)) &&
                          null ==
                              n.find((e) => {
                                  let { user: t } = e;
                                  return E.includes(t.id);
                              }) &&
                          t !== e.afkChannelId &&
                          o.includes(t)
                      );
                  });
        }, [f, l, o, E, e.afkChannelId]),
        I = (0, _.e7)(
            [h.ZP, V.Z, P.Z, B.Z, U.Z],
            () =>
                m.map((e) => {
                    var t;
                    let n = P.Z.getAllApplicationStreamsForChannel(e).map((e) => e.ownerId),
                        r = f[e].filter(j.lm),
                        i = h.ZP.getEmbeddedActivitiesForChannel(e),
                        a = q.L.HANGOUT,
                        o = [],
                        s = r.map((e) => {
                            let { user: t } = e;
                            return t.id;
                        }),
                        l = V.Z.hasVideo(e),
                        u = [],
                        c = [];
                    for (let e of (i.length > 0 && (a = q.L.EMBEDDED_ACTIVITY), r)) {
                        let t = B.Z.findActivity(e.user.id, e_(e));
                        null != t && !(0, p.Z)(t) && ((a = q.L.GAMING), o.push(t), u.push(e.user.id)), e.voiceState.selfVideo && c.push(e.user.id);
                    }
                    if (a === q.L.EMBEDDED_ACTIVITY)
                        return {
                            category: a,
                            embeddedActivities: i,
                            streamersCount: n.length,
                            voiceUsersCount: r.length
                        };
                    if (a === q.L.GAMING)
                        return {
                            category: a,
                            channelId: e,
                            games: o,
                            voiceStates: r,
                            streamersCount: n.length,
                            gameUserIds: u
                        };
                    return {
                        category: a,
                        channelId: e,
                        userIds: s,
                        streamUserIds: n,
                        channelHasVideo: l,
                        videoUserIds: c,
                        isStage: !!(null === (t = U.Z.getChannel(e)) || void 0 === t ? void 0 : t.isGuildStageVoice())
                    };
                }),
            [f, m],
            c.isEqual
        ),
        T = (0, _.e7)([w.Z], () => w.Z.hasConsented(Q.pjP.PERSONALIZATION)),
        g = (0, _.e7)([M.Z], () => M.Z.getUserAffinities()),
        S = T && g.length > 0,
        A = [...I, ...s];
    return i !== A.length && A.length > 0 && (r(el(ed(A, S)).slice(0, 3)), a(A.length)), n;
}
function ec(e, t) {
    let n = (e) => (e > 0 ? Math.log(e + 1) : 0),
        r = (e) =>
            e
                .map((e) => {
                    var t, n;
                    return null !== (n = null === (t = M.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                })
                .map(n),
        i = (0, d.EQ)(e)
            .with({ category: q.L.EVENT }, () => J)
            .with({ category: q.L.GAMING }, () => ee)
            .with({ category: q.L.EMBEDDED_ACTIVITY }, () => et)
            .with({ streamUserIds: d.P.when((e) => e.length > 0) }, () => en)
            .with({ channelHasVideo: !0 }, () => er)
            .with({ category: q.L.HANGOUT }, () => ei)
            .otherwise(() => ea),
        a = 0;
    if (t) {
        if (('userIds' in e && (a += Math.max(...r(e.userIds))), 'embeddedActivities' in e)) {
            let t = new Set();
            e.embeddedActivities.forEach((e) => {
                t = new Set([...t, ...e.userIds]);
            }),
                (a += Math.max(...r([...t])));
        }
        'voiceStates' in e &&
            (a += Math.max(
                ...r(
                    e.voiceStates.filter(j.lm).map((e) => {
                        let { user: t } = e;
                        return t.id;
                    })
                )
            ));
    } else {
        if (('userIds' in e && (a += e.userIds.length), 'embeddedActivities' in e)) {
            let t = new Set();
            e.embeddedActivities.forEach((e) => {
                t = new Set([t, ...e.userIds]);
            }),
                (a += t.size);
        }
        'voiceStates' in e &&
            (a += e.voiceStates.filter(j.lm).map((e) => {
                let { user: t } = e;
                return t.id;
            }).length);
    }
    return (a = a > 0 ? a * i : 0.00001 * i);
}
function ed(e, t) {
    let n = (e) => ec(e, t);
    return (0, c.orderBy)(e, [n], ['desc']);
}
!(function (e) {
    (e.CARD = 'card'), (e.JOIN_BUTTON = 'join_button');
})(r || (r = {}));
let e_ = (e) => (e) => [Q.IIU.PLAYING, Q.IIU.WATCHING].includes(e.type) && (null != e.assets || null != e.state || null != e.details || null != e.party) && !1;
function eE(e) {
    return (0, _.Wu)(
        [w.Z, M.Z],
        () => {
            let t = w.Z.hasConsented(Q.pjP.PERSONALIZATION),
                n = M.Z.getUserAffinities();
            return t && n.length > 0
                ? (0, c.orderBy)(
                      e,
                      [
                          (e) => {
                              var t, n;
                              return null !== (n = null === (t = M.Z.getUserAffinity(e)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                          }
                      ],
                      ['desc']
                  )
                : e;
        },
        [e]
    );
}
function ef(e) {
    return (0, _.Wu)(
        [w.Z, M.Z],
        () => {
            let t = w.Z.hasConsented(Q.pjP.PERSONALIZATION),
                n = M.Z.getUserAffinities();
            return t && n.length > 0
                ? (0, c.orderBy)(
                      e,
                      [
                          (e) => {
                              var t, n;
                              return null !== (n = null === (t = M.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
                          }
                      ],
                      ['desc']
                  )
                : e;
        },
        [e]
    );
}
function eh(e, t, n, r) {
    let i;
    let a = eE(e),
        o = u.useMemo(() => a.map((e) => Z.default.getUser(e)).filter(j.lm), [a]),
        s = o.slice(0, 6),
        l = Math.max(0, o.length - s.length);
    if (null != r && r.length > 0) {
        let e = W.ZP.getName(t, n, Z.default.getUser(r[0]));
        i =
            1 === r.length
                ? $.Z.Messages.GUILD_POPOUT_ACTIVITY_STREAMER.format({ username: e })
                : $.Z.Messages.GUILD_POPOUT_USERS_STREAMING.format({
                      username: e,
                      count: r.length - 1
                  });
    } else if (s.length > 0) {
        let e = W.ZP.getName(t, n, Z.default.getUser(s[0].id));
        i =
            1 === s.length
                ? $.Z.Messages.GUILD_POPOUT_USER_IN_VOICE.format({ username: e })
                : $.Z.Messages.GUILD_POPOUT_USERS_IN_VOICE.format({
                      username: e,
                      count: s.length - 1
                  });
    }
    return {
        totalUsers: o.length,
        usersToShow: s,
        othersCount: l,
        usersText: i
    };
}
function ep(e) {
    let t = (0, _.e7)([b.Z], () => (null == e ? null : b.Z.getParticipantCount(e.id, L.pV.AUDIENCE))),
        n = (0, _.Wu)([b.Z], () =>
            null == e
                ? []
                : b.Z.getMutableParticipants(e.id, L.pV.SPEAKER)
                      .filter((e) => e.type === L.Ui.VOICE)
                      .map((e) => {
                          let { user: t } = e;
                          return t;
                      })
        ),
        r = (0, _.Wu)([H.ZP], () =>
            null == e
                ? []
                : H.ZP.getVoiceStatesForChannel(e)
                      .filter(j.lm)
                      .map((e) => {
                          let { user: t } = e;
                          return t;
                      })
        );
    if ((null == e ? void 0 : e.type) === Q.d4z.GUILD_STAGE_VOICE) {
        let e = n.slice(0, 3),
            r = Math.max(0, n.length - e.length);
        return {
            usersToShow: n,
            othersCount: r,
            audienceCount: null != t ? t : 0
        };
    }
    if ((null == e ? void 0 : e.type) === Q.d4z.GUILD_VOICE) {
        let e = r.slice(0, 7),
            t = Math.max(0, r.length - e.length);
        return {
            usersToShow: e,
            othersCount: t,
            audienceCount: null
        };
    }
    return {
        usersToShow: [],
        othersCount: 0,
        audienceCount: null
    };
}
function em(e, t) {
    return e
        .map((e) => {
            var n;
            let r = Z.default.getUser(e);
            if (null == r) return null;
            let i = G.ZP.getNick(t, r.id);
            return null !== (n = null != i ? i : K.ZP.getGlobalName(r)) && void 0 !== n ? n : K.ZP.getUserTag(r);
        })
        .filter((e) => null != e);
}
function eI(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = em(e, t),
        i = r.length;
    if (i > 0)
        return 1 === i || n
            ? $.Z.Messages.USER_SUMMARY_ONE.format({ first: r[0] })
            : (2 === i ? $.Z.Messages.USER_SUMMARY_TWO : 3 === i ? $.Z.Messages.USER_SUMMARY_THREE : $.Z.Messages.USER_SUMMARY_THREE_AND_OTHERS).format({
                  first: r[0],
                  second: null == r ? void 0 : r[1],
                  third: null == r ? void 0 : r[2],
                  count: i - 3
              });
}
function eT(e, t, n, r) {
    var i, a;
    let o = {},
        s = null !== (a = (0, z.i)(e)) && void 0 !== a ? a : '';
    (o.source = r), (o.card_type = e.category), (o.card_position = n), (o.channel_id = s), (o.channel_type = null === (i = U.Z.getChannel(s)) || void 0 === i ? void 0 : i.type);
    let l = eo(s, t);
    (o.card_affinity_users_count = Math.min(l.length, 6)),
        (o.card_total_users_count = l.length),
        (o.card_affinity_user_ids = l.slice(0, 6).map((e) => e.id)),
        (o.card_max_affinity_user_id = l.length > 0 ? l[0].id : '0'),
        (o.card_user_affinity_scores = l.slice(0, 6).map((e) => {
            var t, n;
            return null !== (n = null === (t = M.Z.getUserAffinity(e.id)) || void 0 === t ? void 0 : t.affinity) && void 0 !== n ? n : 0;
        })),
        Y.default.track(Q.rMx.GUILD_TOOLTIP_CARD_CLICKED, {
            ...o,
            ...(0, m.hH)(t)
        });
}
function eg(e, t, n) {
    let { category: r } = e;
    switch (r) {
        case q.L.HANGOUT:
        case q.L.GAMING:
            return () => {
                let { channelId: r } = e,
                    i = U.Z.getChannel(r),
                    a = k.Z.can(Q.Plq.CONNECT, i);
                eT(e, t, n, 'card'), a ? (0, R.XU)(t, r) : ((0, R.XU)(t), f.Z.channelListScrollTo(t, r));
            };
        case q.L.EMBEDDED_ACTIVITY:
            return () => {
                let { channelId: r } = e.embeddedActivities[0],
                    i = U.Z.getChannel(r),
                    a = k.Z.can(Q.Plq.CONNECT, i);
                eT(e, t, n, 'card'), a ? (0, R.XU)(t, r) : ((0, R.XU)(t), f.Z.channelListScrollTo(t, r));
            };
        case q.L.EVENT:
            return () => {
                eT(e, t, n, 'card'), (0, v.bO)({ eventId: e.event.id });
            };
        default:
            return null;
    }
}
let eS = async (e, t) => {
        let n = await (0, y.AC)(e, t);
        (0, C.R5)(n, null, !1);
    },
    eA = (e, t) => {
        g.Z.handleVoiceConnect({
            channel: t,
            connected: V.Z.isInChannel(t.id),
            needSubscriptionToAccess: (0, A.$)(t.id).needSubscriptionToAccess,
            locked: !1
        }),
            (0, R.XU)(e, t.id);
    };
function ev(e, t) {
    let { category: n } = e;
    switch (n) {
        case q.L.HANGOUT:
        case q.L.GAMING:
            return () => {
                let { channelId: n } = e,
                    r = U.Z.getChannel(n);
                if (null != r && !!k.Z.can(Q.Plq.CONNECT, r)) r.isGuildStageVoice() ? eS(t, n) : r.isGuildVoice() && eA(t, r);
            };
        case q.L.EMBEDDED_ACTIVITY:
            return () => {
                let { channelId: n } = e.embeddedActivities[0],
                    r = U.Z.getChannel(n);
                if (null != r && r.type === Q.d4z.GUILD_VOICE && !!k.Z.can(Q.Plq.CONNECT, r)) eA(t, r);
            };
        case q.L.EVENT:
            return () => {
                let { event: t } = e,
                    { channel_id: n, guild_id: r, entity_type: i } = t,
                    a = U.Z.getChannel(n);
                if (null == n || null == a || !k.Z.can(Q.Plq.CONNECT, a)) {
                    (0, v.bO)({ eventId: t.id });
                    return;
                }
                i === X.WX.STAGE_INSTANCE ? eS(r, n) : i === X.WX.VOICE && eA(r, a);
            };
        default:
            return null;
    }
}
function eN(e) {
    let t, n;
    let r = (0, O.cS)(e),
        i = null == r ? void 0 : r.replace(/[<#>]/g, ''),
        a = null != i ? U.Z.getChannel(i) : U.Z.getChannel(e.channel_id),
        o = k.Z.can(Q.Plq.VIEW_CHANNEL, a);
    if (null != a && o) (t = (0, S.Th)(a.type)), (n = a.name);
    else {
        if (null == r) return null;
        (t = E.LocationIcon), (n = r);
    }
    return {
        IconComponent: t,
        locationName: n
    };
}
function eO(e) {
    let t = e.category === q.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].applicationId : null;
    return (0, I.q)(t);
}
function eR(e) {
    let t = (0, _.e7)([T.Z], () => T.Z.getChannelStatus(e)),
        n = null != t && t.trim().length > 0;
    return {
        channelStatus: t,
        hasChannelStatus: n
    };
}
