n.d(t, {
    B: function () {
        return e_;
    }
});
var r = n(789020);
var i = n(411104);
var a = n(525654),
    o = n.n(a),
    s = n(990547),
    l = n(533800),
    u = n(39612),
    c = n(271579),
    d = n(756647),
    _ = n(544891),
    E = n(570140),
    f = n(479531),
    h = n(34756),
    p = n(595519),
    m = n(839426),
    I = n(895924),
    T = n(625128),
    g = n(972830),
    S = n(305325),
    A = n(281956),
    v = n(931261),
    N = n(15274),
    O = n(924301),
    R = n(82085),
    C = n(264229),
    y = n(652898),
    L = n(895886),
    b = n(143816),
    D = n(703656),
    M = n(922482),
    P = n(131704),
    U = n(314897),
    w = n(592125),
    x = n(984933),
    G = n(271383),
    k = n(430824),
    B = n(607744),
    F = n(341165),
    Z = n(496675),
    V = n(914010),
    H = n(594174),
    Y = n(626135),
    j = n(70956),
    W = n(630388),
    K = n(573261),
    z = n(954824),
    q = n(749210),
    Q = n(872810),
    X = n(981631),
    $ = n(176505),
    J = n(70722),
    ee = n(245335),
    et = n(157925);
let en = 'invite',
    er = null;
function ei(e) {
    var t, n, r, i;
    let a = {};
    switch (e.target_type) {
        case ee.Iq.STREAM:
            (a.targetType = e.target_type), (a.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id);
            break;
        case ee.Iq.EMBEDDED_APPLICATION:
            (a.targetType = e.target_type), (a.targetApplicationId = null === (r = e.target_application) || void 0 === r ? void 0 : r.id);
            break;
        case ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            a.targetType = e.target_type;
    }
    return (!(null != k.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, P.zi)(e.channel.type) && (a.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (a.guildScheduledEvent = e.guild_scheduled_event), (a.isGuestInvite = (0, W.yE)(null !== (i = e.flags) && void 0 !== i ? i : 0, l.$.IS_GUEST_INVITE)), a;
}
function ea(e, t) {
    return {
        ...e,
        invite_guild_scheduled_event_id: t.guildScheduledEventId
    };
}
function eo(e, t, n) {
    var r, i;
    if ((null == n ? void 0 : n.targetType) === ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return $.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !P.tx.has(t.type) && (0, v.s)(e)) return $.oC.GUILD_HOME;
    let a = w.Z.getChannel(t.id);
    return Z.Z.can(X.Plq.VIEW_CHANNEL, a) ? t.id : null !== (i = null === (r = x.ZP.getDefaultChannel(e, !0, X.Plq.CREATE_INSTANT_INVITE)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : t.id;
}
function es(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
        o = n === X.d4z.GUILD_STAGE_VOICE,
        s = {
            source: b.Z.INVITE_ACCEPT,
            navigationReplace: !0
        };
    return null != i && (s.welcomeModalChannelId = i), o && (s.state = et.Df), null != a && (s.guildScheduledEventId = a.id), (e) => (null != r ? r(e, s) : (0, D.uL)(e, s));
}
function el(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        o = k.Z.getGuild(t),
        s = (null == o ? void 0 : o.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == o ? void 0 : o.hasFeature(X.oNc.PREVIEW_ENABLED)),
        { targetUserId: l, targetType: u, targetApplicationId: c, isGuestInvite: d } = null != i ? i : {};
    if (!d && s && V.Z.getGuildId() !== t) return;
    let { type: _ } = r,
        E = w.Z.getChannel(r.id),
        f = eo(t, r, i),
        h = _ === X.d4z.GUILD_STAGE_VOICE,
        T = X.Z5c.CHANNEL(t, f);
    P.tx.has(_)
        ? (0, g.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          o = () => {
                              if (h) {
                                  (0, M.Cq)(r instanceof P.Sf ? r : (0, P.kt)(r)), (0, D.uL)(T);
                                  return;
                              }
                              n.selectVoiceChannel(f),
                                  u === ee.Iq.STREAM &&
                                      null != l &&
                                      Q.iV({
                                          streamType: J.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: f
                                      }),
                                  u === ee.Iq.EMBEDDED_APPLICATION && null != c && ((0, D.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, f)), (0, m.Z)(f, c, a, null == i ? void 0 : i.intent, I.bB.CHAT));
                          };
                      !d && (0, A.n)(t, [k.Z, B.Z, H.default, G.ZP]) ? (0, S.hk)(t, o) : o();
                  });
          })
        : (0, p.l5)(E) && u === ee.Iq.EMBEDDED_APPLICATION && null != c && ((0, D.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, f)), (0, m.Z)(f, c, a, null == i ? void 0 : i.intent, I.bB.CHAT)),
        es(r, i)(T);
}
function eu(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    if (null != t)
        (0, g.h)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, N.P3)(t, e);
        });
}
function ec(e, t, n) {
    return E.Z.isDispatching()
        ? Promise.resolve().then(() => ec(e, t, n))
        : (E.Z.dispatch({
              type: 'INVITE_RESOLVE',
              code: e
          }),
          (0, y.Z)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
              return (
                  null != t
                      ? E.Z.dispatch({
                            type: 'INVITE_RESOLVE_SUCCESS',
                            invite: t,
                            code: n
                        })
                      : E.Z.dispatch({
                            type: 'INVITE_RESOLVE_FAILURE',
                            code: n,
                            banned: r
                        }),
                  {
                      invite: t,
                      code: n
                  }
              );
          }));
}
let ed = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        w.Z.addConditionalChangeListener(() => {
            var r;
            let i = w.Z.getChannel(e),
                a = H.default.getCurrentUser();
            return (
                null == i ||
                null == a ||
                ((!i.nsfw || !!a.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? (eu(t), !1)
                        : (el({
                              guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : X.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n
                          }),
                          !1)))
            );
        });
    },
    e_ = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, O.xt)(e) && null != n ? ed(n) : await q.Z.transitionToGuildSync(t);
    };
t.Z = {
    resolveInvite: ec,
    getInviteContext: (e, t) => ({
        location: e,
        location_guild_id: null != t.guild ? t.guild.id : void 0,
        location_channel_id: null != t.channel ? t.channel.id : void 0,
        location_channel_type: null != t.channel ? t.channel.type : void 0
    }),
    async createInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        try {
            let { body: r } = await _.tn.post({
                url: X.ANM.INSTANT_INVITES(e),
                body: t,
                context: { location: n }
            });
            return (
                E.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_SUCCESS',
                    channelId: e,
                    invite: r
                }),
                r
            );
        } catch (t) {
            throw (
                (E.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_FAILURE',
                    channelId: e
                }),
                new f.Z(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = F.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: j.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() => E.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => E.Z.wait(() => e(null))), F.Z.getFriendInvitesFetching())) return null != er ? er.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
        (er = _.tn.get({
            url: X.ANM.FRIEND_INVITES,
            context: { location: e }
        })),
            E.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_REQUEST',
                requestedAt: new Date()
            });
        let { body: t } = await er;
        return (
            (er = null),
            E.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_RESPONSE',
                receivedAt: new Date(),
                invites: t
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        E.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
        _.tn
            .post({
                url: X.ANM.FRIEND_INVITES,
                body: null != e ? e : {},
                context: { location: t }
            })
            .then(
                (e) => {
                    let { body: t } = e;
                    return (
                        E.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_SUCCESS',
                            invite: t
                        }),
                        t
                    );
                },
                (e) => {
                    throw (
                        (E.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_FAILURE',
                            error: e
                        }),
                        e)
                    );
                }
            )
    ),
    revokeFriendInvites: () => (
        E.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
        _.tn
            .del({
                url: X.ANM.FRIEND_INVITES,
                context: { location }
            })
            .then((e) => {
                let { body: t } = e;
                E.Z.dispatch({
                    type: 'FRIEND_INVITE_REVOKE_SUCCESS',
                    invites: t
                });
            })
    ),
    revokeFriendInvite: (e) => _.tn.del({ url: X.ANM.INVITE(e) }),
    clearInviteFromStore(e) {
        E.Z.dispatch({
            type: 'INSTANT_INVITE_CLEAR',
            channelId: e
        });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return K.Z.delete({
            url: X.ANM.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: s.NetworkActionNames.INVITE_REVOKE,
                properties: {
                    uses: e.uses,
                    max_uses: e.maxUses,
                    max_age: e.maxAge,
                    invite_type: e.type
                }
            }
        }).then(() => {
            E.Z.dispatch({
                type: 'INSTANT_INVITE_REVOKE_SUCCESS',
                code: t,
                channelId: n.id
            });
        });
    },
    acceptInvite(e) {
        var t;
        let { inviteKey: r, context: i, callback: a, skipOnboarding: o } = e,
            s = (0, C.fU)(r),
            l = s.baseCode,
            u = U.default.getSessionId(),
            c = ea(i, s),
            d = H.default.getCurrentUser();
        return null !== (t = null == d ? void 0 : d.hasFlag(X.xW$.QUARANTINED)) && void 0 !== t && t
            ? ((0, L.default)(), new Promise((e, t) => t(Error())))
            : (E.Z.dispatch({
                  type: 'INVITE_ACCEPT',
                  code: l
              }),
              _.tn
                  .post({
                      url: X.ANM.INVITE(l),
                      context: c,
                      oldFormErrors: !0,
                      body: { session_id: u }
                  })
                  .then(
                      async (e) => {
                          var t, r;
                          E.Z.dispatch({
                              type: 'INVITE_ACCEPT_SUCCESS',
                              invite: e.body,
                              code: l
                          });
                          let i = O.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
                              u = {
                                  ...e.body,
                                  guild_scheduled_event: i
                              },
                              c = null !== (r = null == u ? void 0 : u.guild_id) && void 0 !== r ? r : null == u ? void 0 : null === (t = u.guild) || void 0 === t ? void 0 : t.id;
                          if (!o && null != c && u.new_member) {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
                              await e({ guildId: c });
                          }
                          return null == a || a(u), e.body;
                      },
                      (e) => {
                          var t, n;
                          throw (
                              (E.Z.dispatch({
                                  type: 'INVITE_ACCEPT_FAILURE',
                                  code: l,
                                  error: {
                                      message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                                      code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                                  }
                              }),
                              new h.Z(e))
                          );
                      }
                  ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: t, context: n, analyticsLocations: r, callback: i, skipOnboarding: a } = e;
        return this.acceptInvite({
            inviteKey: t,
            context: n,
            skipOnboarding: a,
            callback: (e) => {
                if (null != e.channel) {
                    let t = ei(e);
                    ed(e.channel.id, t, null != r ? r : []);
                }
                null != i && i(e);
            }
        });
    },
    transitionToInvite(e, t) {
        var n, r;
        let { channel: i, guild: a } = e;
        if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(X.oNc.HUB))) {
            R.Z.onOpenHubInvite(e);
            return;
        }
        if (null != a && (null === (r = a.features) || void 0 === r ? void 0 : r.includes(X.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(X.oNc.PREVIEW_ENABLED)) {
            (0, S.hk)(a.id);
            return;
        }
        if (null == i) return;
        let o = ei(e);
        null != t && (o.transitionTo = t),
            el({
                guildId: null != a ? a.id : X.ME,
                channel: i,
                options: o
            });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = ei(e);
            this.transitionToInviteChannelSync(e.channel.id, {
                ...r,
                intent: n,
                transitionTo: t
            });
        }
    },
    openNativeAppModal(e) {
        T.Z.openNativeAppModal(e, X.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, i) {
        var a, s;
        let l;
        let _ = null != e ? (0, C.fU)(e) : null,
            f = null == _ ? void 0 : _.baseCode;
        if (
            (E.Z.dispatch({
                type: 'INVITE_APP_OPENING',
                code: e
            }),
            null != o().ua && o().ua.toLowerCase().indexOf('googlebot') > -1)
        ) {
            E.Z.dispatch({
                type: 'INVITE_APP_NOT_OPENED',
                code: e
            });
            return;
        }
        if ((null === (a = o().os) || void 0 === a ? void 0 : a.family) === 'Android' || (null === (s = o().os) || void 0 === s ? void 0 : s.family) === 'iOS') {
            let e = null != f ? (0, u.z0)(f) : (0, u.Gk)(),
                t = (0, c.WS)();
            (l = (0, c.ZP)(e, {
                utmSource: 2 === i ? 'friend_invite' : en,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == _ ? void 0 : _.guildScheduledEventId,
                iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(f)
            })),
                Y.default.track(X.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, d.K)(n),
                    attempt_id: t,
                    source: en,
                    invite_code: f
                });
        } else '#' === (l = null != t ? X.Z5c.INVITE_PROXY(t) : '')[0] && (l = l.slice(1)), (l = 'discord://'.concat(l));
        z.Z.launch(l, (t) => {
            E.Z.dispatch(
                t
                    ? {
                          type: 'INVITE_APP_OPENED',
                          code: e
                      }
                    : {
                          type: 'INVITE_APP_NOT_OPENED',
                          code: e
                      }
            );
        });
    },
    transitionToInviteChannelSync: ed
};
