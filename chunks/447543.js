n.d(t, {
    B: function () {
        return er;
    }
}),
    n(411104);
var r = n(525654),
    i = n.n(r),
    a = n(990547),
    s = n(39612),
    o = n(271579),
    l = n(756647),
    u = n(544891),
    c = n(570140),
    d = n(479531),
    _ = n(34756),
    E = n(595519),
    f = n(839426),
    h = n(895924),
    p = n(625128),
    I = n(972830),
    m = n(305325),
    T = n(281956),
    g = n(931261),
    S = n(15274),
    A = n(924301),
    N = n(82085),
    O = n(264229),
    R = n(652898),
    v = n(895886),
    C = n(143816),
    y = n(703656),
    D = n(922482),
    L = n(131704),
    b = n(314897),
    M = n(592125),
    P = n(984933),
    U = n(271383),
    w = n(430824),
    x = n(607744),
    G = n(341165),
    k = n(496675),
    B = n(914010),
    F = n(594174),
    V = n(626135),
    H = n(70956),
    Z = n(573261),
    Y = n(954824),
    j = n(749210),
    W = n(872810),
    K = n(981631),
    z = n(176505),
    q = n(70722),
    Q = n(245335),
    X = n(157925);
let $ = 'invite',
    J = null;
function ee(e) {
    var t, n, r;
    let i = {};
    switch (e.target_type) {
        case Q.Iq.STREAM:
            (i.targetType = e.target_type), (i.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id);
            break;
        case Q.Iq.EMBEDDED_APPLICATION:
            (i.targetType = e.target_type), (i.targetApplicationId = null === (r = e.target_application) || void 0 === r ? void 0 : r.id);
            break;
        case Q.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            i.targetType = e.target_type;
    }
    return (!(null != w.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, L.zi)(e.channel.type) && (i.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (i.guildScheduledEvent = e.guild_scheduled_event), i;
}
function et(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        s = w.Z.getGuild(t);
    if ((null == s ? void 0 : s.hasFeature(K.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == s ? void 0 : s.hasFeature(K.oNc.PREVIEW_ENABLED)) && B.Z.getGuildId() !== t) return;
    let { type: o } = r,
        l = M.Z.getChannel(r.id),
        u = (function (e, t, n) {
            var r, i;
            if ((null == n ? void 0 : n.targetType) === Q.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return z.oC.ROLE_SUBSCRIPTIONS;
            if ((null == n ? void 0 : n.targetType) == null && !L.tx.has(t.type) && (0, g.s)(e)) return z.oC.GUILD_HOME;
            let a = M.Z.getChannel(t.id);
            return k.Z.can(K.Plq.VIEW_CHANNEL, a) ? t.id : null !== (i = null === (r = P.ZP.getDefaultChannel(e, !0, K.Plq.CREATE_INSTANT_INVITE)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : t.id;
        })(t, r, i),
        { targetUserId: c, targetType: d, targetApplicationId: _ } = null != i ? i : {},
        p = o === K.d4z.GUILD_STAGE_VOICE,
        S = K.Z5c.CHANNEL(t, u);
    L.tx.has(o)
        ? (0, I.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          s = () => {
                              if (p) {
                                  (0, D.Cq)(r instanceof L.Sf ? r : (0, L.kt)(r)), (0, y.uL)(S);
                                  return;
                              }
                              n.selectVoiceChannel(u),
                                  d === Q.Iq.STREAM &&
                                      null != c &&
                                      W.iV({
                                          streamType: q.lo.GUILD,
                                          ownerId: c,
                                          guildId: t,
                                          channelId: u
                                      }),
                                  d === Q.Iq.EMBEDDED_APPLICATION && null != _ && ((0, y.uL)(K.Z5c.CHANNEL(null != t ? t : K.ME, u)), (0, f.Z)(u, _, a, null == i ? void 0 : i.intent, h.bB.CHAT));
                          };
                      (0, T.n)(t, [w.Z, x.Z, F.default, U.ZP]) ? (0, m.hk)(t, s) : s();
                  });
          })
        : (0, E.l5)(l) && d === Q.Iq.EMBEDDED_APPLICATION && null != _ && ((0, y.uL)(K.Z5c.CHANNEL(null != t ? t : K.ME, u)), (0, f.Z)(u, _, a, null == i ? void 0 : i.intent, h.bB.CHAT)),
        (function (e, t) {
            let { type: n } = e,
                { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
                s = n === K.d4z.GUILD_STAGE_VOICE,
                o = {
                    source: C.Z.INVITE_ACCEPT,
                    navigationReplace: !0
                };
            return null != i && (o.welcomeModalChannelId = i), s && (o.state = X.Df), null != a && (o.guildScheduledEventId = a.id), (e) => (null != r ? r(e, o) : (0, y.uL)(e, o));
        })(
            r,
            i
        )(S);
}
let en = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        M.Z.addConditionalChangeListener(() => {
            var r;
            let i = M.Z.getChannel(e),
                a = F.default.getCurrentUser();
            return (
                null == i ||
                null == a ||
                ((!i.nsfw || !!a.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? (!(function (e) {
                              let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                              if (null != t)
                                  (0, I.h)(() => {
                                      let e = { guildScheduledEventId: t.id };
                                      null != n && (e.welcomeModalChannelId = n), (0, S.P3)(t, e);
                                  });
                          })(t),
                          !1)
                        : (et({
                              guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : K.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n
                          }),
                          !1)))
            );
        });
    },
    er = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, A.xt)(e) && null != n ? en(n) : await j.Z.transitionToGuildSync(t);
    };
t.Z = {
    resolveInvite: function e(t, n, r) {
        return c.Z.isDispatching()
            ? Promise.resolve().then(() => e(t, n, r))
            : (c.Z.dispatch({
                  type: 'INVITE_RESOLVE',
                  code: t
              }),
              (0, R.Z)(t, n, r).then((e) => {
                  let { invite: t, code: n, banned: r } = e;
                  return (
                      null != t
                          ? c.Z.dispatch({
                                type: 'INVITE_RESOLVE_SUCCESS',
                                invite: t,
                                code: n
                            })
                          : c.Z.dispatch({
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
    },
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
            let { body: r } = await u.tn.post({
                url: K.ANM.INSTANT_INVITES(e),
                body: t,
                context: { location: n }
            });
            return (
                c.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_SUCCESS',
                    channelId: e,
                    invite: r
                }),
                r
            );
        } catch (t) {
            throw (
                (c.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_FAILURE',
                    channelId: e
                }),
                new d.Z(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = G.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: H.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() => c.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => c.Z.wait(() => e(null))), G.Z.getFriendInvitesFetching())) return null != J ? J.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
        (J = u.tn.get({
            url: K.ANM.FRIEND_INVITES,
            context: { location: e }
        })),
            c.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_REQUEST',
                requestedAt: new Date()
            });
        let { body: t } = await J;
        return (
            (J = null),
            c.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_RESPONSE',
                receivedAt: new Date(),
                invites: t
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        c.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
        u.tn
            .post({
                url: K.ANM.FRIEND_INVITES,
                body: null != e ? e : {},
                context: { location: t }
            })
            .then(
                (e) => {
                    let { body: t } = e;
                    return (
                        c.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_SUCCESS',
                            invite: t
                        }),
                        t
                    );
                },
                (e) => {
                    throw (
                        (c.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_FAILURE',
                            error: e
                        }),
                        e)
                    );
                }
            )
    ),
    revokeFriendInvites: () => (
        c.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
        u.tn
            .del({
                url: K.ANM.FRIEND_INVITES,
                context: { location }
            })
            .then((e) => {
                let { body: t } = e;
                c.Z.dispatch({
                    type: 'FRIEND_INVITE_REVOKE_SUCCESS',
                    invites: t
                });
            })
    ),
    revokeFriendInvite: (e) => u.tn.del({ url: K.ANM.INVITE(e) }),
    clearInviteFromStore(e) {
        c.Z.dispatch({
            type: 'INSTANT_INVITE_CLEAR',
            channelId: e
        });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return Z.Z.delete({
            url: K.ANM.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: {
                    uses: e.uses,
                    max_uses: e.maxUses,
                    max_age: e.maxAge,
                    invite_type: e.type
                }
            }
        }).then(() => {
            c.Z.dispatch({
                type: 'INSTANT_INVITE_REVOKE_SUCCESS',
                code: t,
                channelId: n.id
            });
        });
    },
    acceptInvite(e) {
        var t, r, i;
        let { inviteKey: a, context: s, callback: o, skipOnboarding: l } = e,
            d = (0, O.fU)(a),
            E = d.baseCode,
            f = b.default.getSessionId();
        let h =
                ((r = s),
                (i = d),
                {
                    ...r,
                    invite_guild_scheduled_event_id: i.guildScheduledEventId
                }),
            p = F.default.getCurrentUser();
        return null !== (t = null == p ? void 0 : p.hasFlag(K.xW$.QUARANTINED)) && void 0 !== t && t
            ? ((0, v.default)(), new Promise((e, t) => t(Error())))
            : (c.Z.dispatch({
                  type: 'INVITE_ACCEPT',
                  code: E
              }),
              u.tn
                  .post({
                      url: K.ANM.INVITE(E),
                      context: h,
                      oldFormErrors: !0,
                      body: { session_id: f }
                  })
                  .then(
                      async (e) => {
                          var t, r;
                          c.Z.dispatch({
                              type: 'INVITE_ACCEPT_SUCCESS',
                              invite: e.body,
                              code: E
                          });
                          let i = A.ZP.getGuildScheduledEvent(d.guildScheduledEventId),
                              a = {
                                  ...e.body,
                                  guild_scheduled_event: i
                              },
                              s = null !== (r = null == a ? void 0 : a.guild_id) && void 0 !== r ? r : null == a ? void 0 : null === (t = a.guild) || void 0 === t ? void 0 : t.id;
                          if (!l && null != s && a.new_member) {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
                              await e({ guildId: s });
                          }
                          return null == o || o(a), e.body;
                      },
                      (e) => {
                          var t, n;
                          throw (
                              (c.Z.dispatch({
                                  type: 'INVITE_ACCEPT_FAILURE',
                                  code: E,
                                  error: {
                                      message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                                      code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                                  }
                              }),
                              new _.Z(e))
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
                    let t = ee(e);
                    en(e.channel.id, t, null != r ? r : []);
                }
                null != i && i(e);
            }
        });
    },
    transitionToInvite(e, t) {
        var n, r;
        let { channel: i, guild: a } = e;
        if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(K.oNc.HUB))) {
            N.Z.onOpenHubInvite(e);
            return;
        }
        if (null != a && (null === (r = a.features) || void 0 === r ? void 0 : r.includes(K.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(K.oNc.PREVIEW_ENABLED)) {
            (0, m.hk)(a.id);
            return;
        }
        if (null == i) return;
        let s = ee(e);
        null != t && (s.transitionTo = t),
            et({
                guildId: null != a ? a.id : K.ME,
                channel: i,
                options: s
            });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = ee(e);
            this.transitionToInviteChannelSync(e.channel.id, {
                ...r,
                intent: n,
                transitionTo: t
            });
        }
    },
    openNativeAppModal(e) {
        p.Z.openNativeAppModal(e, K.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, a) {
        var u, d;
        let _;
        let E = null != e ? (0, O.fU)(e) : null,
            f = null == E ? void 0 : E.baseCode;
        if (
            (c.Z.dispatch({
                type: 'INVITE_APP_OPENING',
                code: e
            }),
            null != i().ua && i().ua.toLowerCase().indexOf('googlebot') > -1)
        ) {
            c.Z.dispatch({
                type: 'INVITE_APP_NOT_OPENED',
                code: e
            });
            return;
        }
        if ((null === (u = i().os) || void 0 === u ? void 0 : u.family) === 'Android' || (null === (d = i().os) || void 0 === d ? void 0 : d.family) === 'iOS') {
            let e = null != f ? (0, s.z0)(f) : (0, s.Gk)(),
                t = (0, o.WS)();
            (_ = (0, o.ZP)(e, {
                utmSource: 2 === a ? 'friend_invite' : $,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == E ? void 0 : E.guildScheduledEventId,
                iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(f)
            })),
                V.default.track(K.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, l.K)(n),
                    attempt_id: t,
                    source: $,
                    invite_code: f
                });
        } else '#' === (_ = null != t ? K.Z5c.INVITE_PROXY(t) : '')[0] && (_ = _.slice(1)), (_ = 'discord://'.concat(_));
        Y.Z.launch(_, (t) => {
            c.Z.dispatch(
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
    transitionToInviteChannelSync: en
};
