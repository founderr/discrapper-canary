"use strict";
n.r(t), n.d(t, {
  transitionToGuildFromEventInvite: function() {
    return et
  }
}), n("411104");
var i = n("525654"),
  r = n.n(i),
  s = n("990547"),
  a = n("39612"),
  o = n("271579"),
  l = n("756647"),
  u = n("544891"),
  d = n("570140"),
  _ = n("479531"),
  c = n("34756"),
  E = n("867176"),
  I = n("839426"),
  T = n("625128"),
  f = n("972830"),
  S = n("305325"),
  h = n("281956"),
  A = n("931261"),
  m = n("15274"),
  N = n("924301"),
  p = n("82085"),
  O = n("264229"),
  C = n("652898"),
  R = n("895886"),
  g = n("143816"),
  L = n("703656"),
  v = n("922482"),
  D = n("131704"),
  M = n("314897"),
  y = n("592125"),
  P = n("984933"),
  U = n("271383"),
  b = n("430824"),
  G = n("607744"),
  w = n("341165"),
  k = n("496675"),
  B = n("594174"),
  V = n("626135"),
  x = n("70956"),
  F = n("573261"),
  H = n("954824"),
  Y = n("749210"),
  j = n("872810"),
  W = n("981631"),
  K = n("176505"),
  z = n("70722"),
  Z = n("245335"),
  Q = n("157925");
let X = "invite",
  q = null;

function J(e) {
  var t, n, i;
  let r = {};
  switch (e.target_type) {
    case Z.InviteTargetTypes.STREAM:
      r.targetType = e.target_type, r.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
      break;
    case Z.InviteTargetTypes.EMBEDDED_APPLICATION:
      r.targetType = e.target_type, r.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id;
      break;
    case Z.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
      r.targetType = e.target_type
  }
  return (!(null != b.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, D.isGuildTextChannelType)(e.channel.type) && (r.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (r.guildScheduledEvent = e.guild_scheduled_event), r
}

function $(e) {
  let {
    guildId: t,
    channel: i,
    options: r,
    analyticsLocations: s = []
  } = e, {
    type: a
  } = i, o = y.default.getChannel(i.id), l = function(e, t, n) {
    var i, r;
    if ((null == n ? void 0 : n.targetType) === Z.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return K.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !D.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && (0, A.canSeeOnboardingHome)(e)) return K.StaticChannelRoute.GUILD_HOME;
    let s = y.default.getChannel(t.id);
    return k.default.can(W.Permissions.VIEW_CHANNEL, s) ? t.id : null !== (r = null === (i = P.default.getDefaultChannel(e, !0, W.Permissions.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : t.id
  }(t, i, r), {
    targetUserId: u,
    targetType: d,
    targetApplicationId: _
  } = null != r ? r : {}, c = a === W.ChannelTypes.GUILD_STAGE_VOICE, T = W.Routes.CHANNEL(t, l);
  D.GUILD_VOCAL_CHANNEL_TYPES.has(a) ? (0, f.addPostConnectionCallback)(() => {
    Promise.resolve().then(n.bind(n, "287734")).then(e => {
      let {
        default: n
      } = e, a = () => {
        if (c) {
          (0, v.connectAndOpen)(i instanceof D.ChannelRecordBase ? i : (0, D.createChannelRecord)(i)), (0, L.transitionTo)(T);
          return
        }
        n.selectVoiceChannel(l), d === Z.InviteTargetTypes.STREAM && null != u && j.watchStreamAndTransitionToStream({
          streamType: z.StreamTypes.GUILD,
          ownerId: u,
          guildId: t,
          channelId: l
        }), d === Z.InviteTargetTypes.EMBEDDED_APPLICATION && null != _ && ((0, L.transitionTo)(W.Routes.CHANNEL(null != t ? t : W.ME, l)), (0, I.default)(l, _, s, null == r ? void 0 : r.intent))
      };
      (0, h.shouldShowMembershipVerificationGate)(t, [b.default, G.default, B.default, U.default]) ? (0, S.openMemberVerificationModal)(t, a) : a()
    })
  }) : (0, E.isActivityInTextSupportedForChannel)(o) && d === Z.InviteTargetTypes.EMBEDDED_APPLICATION && null != _ && ((0, L.transitionTo)(W.Routes.CHANNEL(null != t ? t : W.ME, l)), (0, I.default)(l, _, s, null == r ? void 0 : r.intent)), (function(e, t) {
    let {
      type: n
    } = e, {
      transitionTo: i,
      welcomeModalChannelId: r,
      guildScheduledEvent: s
    } = null != t ? t : {}, a = n === W.ChannelTypes.GUILD_STAGE_VOICE, o = {
      navigationReplace: !0
    };
    return null != r && (o.welcomeModalChannelId = r), a && (o.state = Q.STAGE_INVITE_STATE_KEY), null != s && (o.guildScheduledEventId = s.id), e => null != i ? i(e, o, g.default.INVITE_ACCEPT) : (0, L.transitionTo)(e, o, g.default.INVITE_ACCEPT)
  })(i, r)(T)
}
let ee = function(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    y.default.addConditionalChangeListener(() => {
      var i;
      let r = y.default.getChannel(e),
        s = B.default.getCurrentUser();
      return null == r || null == s || (!r.nsfw || !!s.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
        let {
          guildScheduledEvent: t,
          welcomeModalChannelId: n
        } = e;
        null != t && (0, f.addPostConnectionCallback)(() => {
          let e = {
            guildScheduledEventId: t.id
          };
          null != n && (e.welcomeModalChannelId = n), (0, m.transitionToEventDetailsFromInvite)(t, e)
        })
      }(t), !1) : ($({
        guildId: null !== (i = r.getGuildId()) && void 0 !== i ? i : W.ME,
        channel: r,
        options: t,
        analyticsLocations: n
      }), !1))
    })
  },
  et = async e => {
    let {
      guild_id: t,
      channel_id: n
    } = e;
    (0, N.isGuildScheduledEventActive)(e) && null != n ? ee(n) : await Y.default.transitionToGuildSync(t)
  };
t.default = {
  resolveInvite: function e(t, n, i) {
    return d.default.isDispatching() ? Promise.resolve().then(() => e(t, n, i)) : (d.default.dispatch({
      type: "INVITE_RESOLVE",
      code: t
    }), (0, C.default)(t, n, i).then(e => {
      let {
        invite: t,
        code: n,
        banned: i
      } = e;
      return null != t ? d.default.dispatch({
        type: "INVITE_RESOLVE_SUCCESS",
        invite: t,
        code: n
      }) : d.default.dispatch({
        type: "INVITE_RESOLVE_FAILURE",
        code: n,
        banned: i
      }), {
        invite: t,
        code: n
      }
    }))
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
      let {
        body: i
      } = await u.HTTP.post({
        url: W.Endpoints.INSTANT_INVITES(e),
        body: t,
        context: {
          location: n
        }
      });
      return d.default.dispatch({
        type: "INSTANT_INVITE_CREATE_SUCCESS",
        channelId: e,
        invite: i
      }), i
    } catch (t) {
      throw d.default.dispatch({
        type: "INSTANT_INVITE_CREATE_FAILURE",
        channelId: e
      }), new _.default(t)
    }
  },
  async mobileCreateInvite(e, t) {
    let n = w.default.getInvite(e.id);
    if (null != n && !n.isExpired()) return n.code;
    let i = {
        max_age: x.default.Seconds.DAY
      },
      r = await this.createInvite(e.id, i, t).catch(() => d.default.dispatch({
        type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
      }));
    return null == r ? void 0 : r.code
  },
  async getAllFriendInvites(e) {
    if (await new Promise(e => d.default.wait(() => e(null))), w.default.getFriendInvitesFetching()) return null != q ? q.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
    q = u.HTTP.get({
      url: W.Endpoints.FRIEND_INVITES,
      context: {
        location: e
      }
    }), d.default.dispatch({
      type: "FRIEND_INVITES_FETCH_REQUEST",
      requestedAt: new Date
    });
    let {
      body: t
    } = await q;
    return q = null, d.default.dispatch({
      type: "FRIEND_INVITES_FETCH_RESPONSE",
      receivedAt: new Date,
      invites: t
    }), t
  },
  createFriendInvite: (e, t) => (d.default.dispatch({
    type: "FRIEND_INVITE_CREATE_REQUEST"
  }), u.HTTP.post({
    url: W.Endpoints.FRIEND_INVITES,
    body: null != e ? e : {},
    context: {
      location: t
    }
  }).then(e => {
    let {
      body: t
    } = e;
    return d.default.dispatch({
      type: "FRIEND_INVITE_CREATE_SUCCESS",
      invite: t
    }), t
  }, e => {
    throw d.default.dispatch({
      type: "FRIEND_INVITE_CREATE_FAILURE",
      error: e
    }), e
  })),
  revokeFriendInvites: () => (d.default.dispatch({
    type: "FRIEND_INVITE_REVOKE_REQUEST"
  }), u.HTTP.del({
    url: W.Endpoints.FRIEND_INVITES,
    context: {
      location
    }
  }).then(e => {
    let {
      body: t
    } = e;
    d.default.dispatch({
      type: "FRIEND_INVITE_REVOKE_SUCCESS",
      invites: t
    })
  })),
  revokeFriendInvite: e => u.HTTP.del({
    url: W.Endpoints.INVITE(e)
  }),
  clearInviteFromStore(e) {
    d.default.dispatch({
      type: "INSTANT_INVITE_CLEAR",
      channelId: e
    })
  },
  revokeInvite(e) {
    let {
      code: t,
      channel: n
    } = e;
    return F.default.delete({
      url: W.Endpoints.INVITE(t),
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
      d.default.dispatch({
        type: "INSTANT_INVITE_REVOKE_SUCCESS",
        code: t,
        channelId: n.id
      })
    })
  },
  acceptInvite(e) {
    var t, i, r;
    let {
      inviteKey: s,
      context: a,
      callback: o,
      skipOnboarding: l
    } = e, _ = (0, O.parseExtraDataFromInviteKey)(s), E = _.baseCode, I = M.default.getSessionId();
    let T = (i = a, r = _, {
        ...i,
        invite_guild_scheduled_event_id: r.guildScheduledEventId
      }),
      f = B.default.getCurrentUser();
    return null !== (t = null == f ? void 0 : f.hasFlag(W.UserFlags.QUARANTINED)) && void 0 !== t && t ? ((0, R.default)(), new Promise((e, t) => t(Error()))) : (d.default.dispatch({
      type: "INVITE_ACCEPT",
      code: E
    }), u.HTTP.post({
      url: W.Endpoints.INVITE(E),
      context: T,
      oldFormErrors: !0,
      body: {
        session_id: I
      }
    }).then(async e => {
      var t, i;
      d.default.dispatch({
        type: "INVITE_ACCEPT_SUCCESS",
        invite: e.body,
        code: E
      });
      let r = N.default.getGuildScheduledEvent(_.guildScheduledEventId),
        s = {
          ...e.body,
          guild_scheduled_event: r
        },
        a = null !== (i = null == s ? void 0 : s.guild_id) && void 0 !== i ? i : null == s ? void 0 : null === (t = s.guild) || void 0 === t ? void 0 : t.id;
      if (!l && null != a && s.new_member) {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, "17181"));
        await e({
          guildId: a
        })
      }
      return null == o || o(s), e.body
    }, e => {
      var t, n;
      throw d.default.dispatch({
        type: "INVITE_ACCEPT_FAILURE",
        code: E,
        error: {
          message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
          code: null === (n = e.body) || void 0 === n ? void 0 : n.code
        }
      }), new c.default(e)
    }))
  },
  acceptInviteAndTransitionToInviteChannel(e) {
    let {
      inviteKey: t,
      context: n,
      analyticsLocations: i,
      callback: r,
      skipOnboarding: s
    } = e;
    return this.acceptInvite({
      inviteKey: t,
      context: n,
      skipOnboarding: s,
      callback: e => {
        if (null != e.channel) {
          let t = J(e);
          ee(e.channel.id, t, null != i ? i : [])
        }
        null != r && r(e)
      }
    })
  },
  transitionToInvite(e, t) {
    var n, i, r;
    let {
      channel: s,
      guild: a
    } = e;
    if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(W.GuildFeatures.HUB))) {
      p.default.onOpenHubInvite(e);
      return
    }
    if (null != a && (null === (i = a.features) || void 0 === i ? void 0 : i.includes(W.GuildFeatures.COMMUNITY)) && (null === (r = a.features) || void 0 === r ? void 0 : r.includes(W.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !a.features.includes(W.GuildFeatures.PREVIEW_ENABLED)) {
      (0, L.transitionTo)(W.Routes.GUILD_MEMBER_VERIFICATION(a.id, e.code));
      return
    }
    if (null == s) return;
    let o = J(e);
    null != t && (o.transitionTo = t), $({
      guildId: null != a ? a.id : W.ME,
      channel: s,
      options: o
    })
  },
  transitionToInviteSync(e, t, n) {
    if (null != e.channel) {
      let i = J(e);
      this.transitionToInviteChannelSync(e.channel.id, {
        ...i,
        intent: n,
        transitionTo: t
      })
    }
  },
  openNativeAppModal(e) {
    T.default.openNativeAppModal(e, W.RPCCommands.INVITE_BROWSER)
  },
  openApp(e, t, n, i, s) {
    var u, _;
    let c;
    let E = null != e ? (0, O.parseExtraDataFromInviteKey)(e) : null,
      I = null == E ? void 0 : E.baseCode;
    if (d.default.dispatch({
        type: "INVITE_APP_OPENING",
        code: e
      }), null != r().ua && r().ua.toLowerCase().indexOf("googlebot") > -1) {
      d.default.dispatch({
        type: "INVITE_APP_NOT_OPENED",
        code: e
      });
      return
    }
    if ((null === (u = r().os) || void 0 === u ? void 0 : u.family) === "Android" || (null === (_ = r().os) || void 0 === _ ? void 0 : _.family) === "iOS") {
      let e = null != I ? (0, a.getInviteDynamicLinkTemplate)(I) : (0, a.getDefaultDynamicLinkTemplate)(),
        t = (0, o.generateAttemptId)();
      c = (0, o.default)(e, {
        utmSource: 2 === s ? "friend_invite" : X,
        fingerprint: n,
        username: i,
        attemptId: t,
        event: null == E ? void 0 : E.guildScheduledEventId,
        iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(I)
      }), V.default.track(W.AnalyticEvents.DEEP_LINK_CLICKED, {
        fingerprint: (0, l.maybeExtractId)(n),
        attempt_id: t,
        source: X,
        invite_code: I
      })
    } else "#" === (c = null != t ? W.Routes.INVITE_PROXY(t) : "")[0] && (c = c.slice(1)), c = "discord://".concat(c);
    H.default.launch(c, t => {
      d.default.dispatch(t ? {
        type: "INVITE_APP_OPENED",
        code: e
      } : {
        type: "INVITE_APP_NOT_OPENED",
        code: e
      })
    })
  },
  transitionToInviteChannelSync: ee
}