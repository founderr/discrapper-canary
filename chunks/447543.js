n.d(t, {
    B: function () {
        return eo;
    }
}),
    n(789020),
    n(411104);
var r = n(525654),
    i = n.n(r),
    a = n(990547),
    s = n(533800),
    o = n(39612),
    l = n(271579),
    u = n(756647),
    c = n(544891),
    d = n(570140),
    f = n(479531),
    _ = n(34756),
    p = n(595519),
    h = n(839426),
    m = n(895924),
    g = n(625128),
    E = n(972830),
    v = n(305325),
    I = n(63568),
    T = n(281956),
    b = n(931261),
    S = n(15274),
    y = n(924301),
    A = n(461014),
    N = n(82085),
    C = n(264229),
    R = n(652898),
    O = n(895886),
    D = n(143816),
    L = n(703656),
    x = n(922482),
    w = n(131704),
    P = n(314897),
    M = n(592125),
    k = n(984933),
    U = n(271383),
    B = n(430824),
    G = n(607744),
    Z = n(341165),
    F = n(496675),
    V = n(914010),
    j = n(594174),
    H = n(626135),
    Y = n(70956),
    W = n(630388),
    K = n(573261),
    z = n(954824),
    q = n(749210),
    Q = n(872810),
    X = n(981631),
    J = n(176505),
    $ = n(70722),
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
    return (!(null != B.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, w.zi)(e.channel.type) && (a.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (a.guildScheduledEvent = e.guild_scheduled_event), (a.isGuestInvite = (0, W.yE)(null !== (i = e.flags) && void 0 !== i ? i : 0, s.$.IS_GUEST_INVITE)), a;
}
function ea(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        s = B.Z.getGuild(t),
        o = (0, I.K2)(t, 'invite') ? (null == s ? void 0 : s.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null == s ? void 0 : s.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == s ? void 0 : s.hasFeature(X.oNc.PREVIEW_ENABLED)),
        { targetUserId: l, targetType: u, targetApplicationId: c, isGuestInvite: d } = null != i ? i : {};
    if (!d && o && V.Z.getGuildId() !== t) return;
    let { type: f } = r,
        _ = M.Z.getChannel(r.id),
        g = (function (e, t, n) {
            var r, i;
            if ((null == n ? void 0 : n.targetType) === ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return J.oC.ROLE_SUBSCRIPTIONS;
            if ((null == n ? void 0 : n.targetType) == null && !w.tx.has(t.type) && (0, b.s)(e)) return J.oC.GUILD_HOME;
            let a = M.Z.getChannel(t.id);
            return F.Z.can(X.Plq.VIEW_CHANNEL, a) ? t.id : null !== (i = null === (r = k.ZP.getDefaultChannel(e, !0, X.Plq.CREATE_INSTANT_INVITE)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : t.id;
        })(t, r, i),
        S = f === X.d4z.GUILD_STAGE_VOICE,
        y = X.Z5c.CHANNEL(t, g);
    w.tx.has(f)
        ? (0, E.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          s = () => {
                              if (S) {
                                  (0, x.Cq)(r instanceof w.Sf ? r : (0, w.kt)(r)), (0, L.uL)(y);
                                  return;
                              }
                              n.selectVoiceChannel(g),
                                  u === ee.Iq.STREAM &&
                                      null != l &&
                                      Q.iV({
                                          streamType: $.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: g
                                      }),
                                  u === ee.Iq.EMBEDDED_APPLICATION && null != c && ((0, L.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, g)), (0, h.Z)(g, c, a, null == i ? void 0 : i.intent, m.bB.CHAT));
                          };
                      !d && (0, T.n)(t, [B.Z, G.Z, j.default, U.ZP]) ? (0, v.hk)(t, s) : s();
                  });
          })
        : (0, p.l5)(_) && u === ee.Iq.EMBEDDED_APPLICATION && null != c && ((0, L.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, g)), (0, h.Z)(g, c, a, null == i ? void 0 : i.intent, m.bB.CHAT)),
        (function (e, t) {
            let { type: n } = e,
                { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
                s = n === X.d4z.GUILD_STAGE_VOICE,
                o = {
                    source: D.Z.INVITE_ACCEPT,
                    navigationReplace: !0
                };
            return null != i && (o.welcomeModalChannelId = i), s && (o.state = et.Df), null != a && (o.guildScheduledEventId = a.id), (e) => (null != r ? r(e, o) : (0, L.uL)(e, o));
        })(
            r,
            i
        )(y);
}
let es = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        M.Z.addConditionalChangeListener(() => {
            var r;
            let i = M.Z.getChannel(e),
                a = j.default.getCurrentUser();
            return (
                null == i ||
                null == a ||
                ((!i.nsfw || !!a.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? (!(function (e) {
                              let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                              if (null != t)
                                  (0, E.h)(() => {
                                      let e = { guildScheduledEventId: t.id };
                                      null != n && (e.welcomeModalChannelId = n), (0, S.P3)(t, e);
                                  });
                          })(t),
                          !1)
                        : (ea({
                              guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : X.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n
                          }),
                          !1)))
            );
        });
    },
    eo = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, y.xt)(e) && null != n ? es(n) : await q.Z.transitionToGuildSync(t);
    };
t.Z = {
    resolveInvite: function e(t, n, r) {
        return d.Z.isDispatching()
            ? Promise.resolve().then(() => e(t, n, r))
            : (d.Z.dispatch({
                  type: 'INVITE_RESOLVE',
                  code: t
              }),
              (0, R.Z)(t, n, r).then((e) => {
                  let { invite: t, code: n, banned: r } = e;
                  return (
                      null != t
                          ? d.Z.dispatch({
                                type: 'INVITE_RESOLVE_SUCCESS',
                                invite: t,
                                code: n
                            })
                          : d.Z.dispatch({
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
            let { body: r } = await c.tn.post({
                url: X.ANM.INSTANT_INVITES(e),
                body: t,
                context: { location: n },
                rejectWithError: !0
            });
            return (
                d.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_SUCCESS',
                    channelId: e,
                    invite: r
                }),
                r
            );
        } catch (t) {
            throw (
                (d.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_FAILURE',
                    channelId: e
                }),
                new f.Z(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = Z.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: Y.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() => d.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => d.Z.wait(() => e(null))), Z.Z.getFriendInvitesFetching())) return null != er ? er.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
        (er = c.tn.get({
            url: X.ANM.FRIEND_INVITES,
            context: { location: e },
            rejectWithError: !1
        })),
            d.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_REQUEST',
                requestedAt: new Date()
            });
        let { body: t } = await er;
        return (
            (er = null),
            d.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_RESPONSE',
                receivedAt: new Date(),
                invites: t
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        d.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
        c.tn
            .post({
                url: X.ANM.FRIEND_INVITES,
                body: null != e ? e : {},
                context: { location: t },
                rejectWithError: !1
            })
            .then(
                (e) => {
                    let { body: t } = e;
                    return (
                        d.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_SUCCESS',
                            invite: t
                        }),
                        t
                    );
                },
                (e) => {
                    throw (
                        (d.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_FAILURE',
                            error: e
                        }),
                        e)
                    );
                }
            )
    ),
    revokeFriendInvites: () => (
        d.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
        c.tn
            .del({
                url: X.ANM.FRIEND_INVITES,
                context: { location },
                rejectWithError: !1
            })
            .then((e) => {
                let { body: t } = e;
                d.Z.dispatch({
                    type: 'FRIEND_INVITE_REVOKE_SUCCESS',
                    invites: t
                });
            })
    ),
    revokeFriendInvite: (e) =>
        c.tn.del({
            url: X.ANM.INVITE(e),
            rejectWithError: !1
        }),
    clearInviteFromStore(e) {
        d.Z.dispatch({
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
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: {
                    uses: e.uses,
                    max_uses: e.maxUses,
                    max_age: e.maxAge,
                    invite_type: e.type
                }
            },
            rejectWithError: !1
        }).then(() => {
            d.Z.dispatch({
                type: 'INSTANT_INVITE_REVOKE_SUCCESS',
                code: t,
                channelId: n.id
            });
        });
    },
    acceptInvite(e) {
        var t, r, i;
        let { inviteKey: a, context: s, callback: o, skipOnboarding: l } = e,
            u = (0, C.fU)(a),
            f = u.baseCode,
            p = P.default.getSessionId();
        let h =
                ((r = s),
                (i = u),
                {
                    ...r,
                    invite_guild_scheduled_event_id: i.guildScheduledEventId
                }),
            m = j.default.getCurrentUser();
        return null !== (t = null == m ? void 0 : m.hasFlag(X.xW$.QUARANTINED)) && void 0 !== t && t
            ? ((0, O.default)(), new Promise((e, t) => t(Error())))
            : (d.Z.dispatch({
                  type: 'INVITE_ACCEPT',
                  code: f
              }),
              c.tn
                  .post({
                      url: X.ANM.INVITE(f),
                      context: h,
                      oldFormErrors: !0,
                      body: { session_id: p },
                      rejectWithError: !1
                  })
                  .then(
                      async (e) => {
                          var t, r;
                          d.Z.dispatch({
                              type: 'INVITE_ACCEPT_SUCCESS',
                              invite: e.body,
                              code: f
                          });
                          let i = y.ZP.getGuildScheduledEvent(u.guildScheduledEventId),
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
                              (d.Z.dispatch({
                                  type: 'INVITE_ACCEPT_FAILURE',
                                  code: f,
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
                    let t = ei(e);
                    es(e.channel.id, t, null != r ? r : []);
                }
                null != i && i(e);
            }
        });
    },
    transitionToInvite(e, t) {
        var n;
        let { channel: r, guild: i } = e;
        if (null != i && (null === (n = i.features) || void 0 === n ? void 0 : n.includes(X.oNc.HUB))) {
            N.Z.onOpenHubInvite(e);
            return;
        }
        if (null != i && (0, A.u)(i)) {
            (0, v.hk)(i.id);
            return;
        }
        if (null == r) return;
        let a = ei(e);
        null != t && (a.transitionTo = t),
            ea({
                guildId: null != i ? i.id : X.ME,
                channel: r,
                options: a
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
        g.Z.openNativeAppModal(e, X.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, a) {
        var s, c;
        let f;
        let _ = null != e ? (0, C.fU)(e) : null,
            p = null == _ ? void 0 : _.baseCode;
        if (
            (d.Z.dispatch({
                type: 'INVITE_APP_OPENING',
                code: e
            }),
            null != i().ua && i().ua.toLowerCase().indexOf('googlebot') > -1)
        ) {
            d.Z.dispatch({
                type: 'INVITE_APP_NOT_OPENED',
                code: e
            });
            return;
        }
        if ((null === (s = i().os) || void 0 === s ? void 0 : s.family) === 'Android' || (null === (c = i().os) || void 0 === c ? void 0 : c.family) === 'iOS') {
            let e = null != p ? (0, o.z0)(p) : (0, o.Gk)(),
                t = (0, l.WS)();
            (f = (0, l.ZP)(e, {
                utmSource: 2 === a ? 'friend_invite' : en,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == _ ? void 0 : _.guildScheduledEventId,
                iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(p)
            })),
                H.default.track(X.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.K)(n),
                    attempt_id: t,
                    source: en,
                    invite_code: p
                });
        } else '#' === (f = null != t ? X.Z5c.INVITE_PROXY(t) : '')[0] && (f = f.slice(1)), (f = 'discord://'.concat(f));
        z.Z.launch(f, (t) => {
            d.Z.dispatch(
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
    transitionToInviteChannelSync: es
};
