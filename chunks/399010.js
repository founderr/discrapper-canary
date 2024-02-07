"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("424973"), n("222007"), n("702976"), n("70102");
var s = n("917351"),
  i = n.n(s);
n("576863");
var r = n("446674"),
  a = n("913144"),
  o = n("851387"),
  d = n("775433"),
  u = n("327037"),
  l = n("605250"),
  f = n("25932"),
  _ = n("410912"),
  c = n("116949"),
  g = n("233069"),
  m = n("522308"),
  h = n("766274"),
  v = n("42203"),
  E = n("26989"),
  p = n("778588"),
  y = n("260320"),
  T = n("697218"),
  C = n("800762"),
  S = n("10514"),
  I = n("521012"),
  A = n("224400"),
  D = n("390946"),
  N = n("509065"),
  O = n("518916");
let P = new l.default("ConnectionStore"),
  b = new N.default(O.socket, (e, t) => {
    var n;
    e = null != e ? e : {
      type: "CHANNEL_UPDATES",
      channels: []
    };
    let s = (0, g.createChannelRecordFromServer)(t),
      i = v.default.getChannel(t.id),
      r = null == i ? void 0 : i.merge({
        ...s,
        recipients: i.recipients,
        bitrate: null !== (n = s.bitrate) && void 0 !== n ? n : i.bitrate
      });
    return e.channels.push(null != r ? r : s), e
  }, e => "CHANNEL_UPDATE" !== e),
  V = new N.default(O.socket, (e, t) => ((e = null == e ? {
    type: "SOUNDBOARD_SOUNDS_RECEIVED",
    updates: []
  } : e).updates.push({
    guildId: t.guild_id,
    sounds: t.soundboard_sounds.map(e => ({
      name: e.name,
      soundId: e.sound_id,
      emojiName: e.emoji_name,
      emojiId: e.emoji_id,
      userId: e.user_id,
      volume: e.volume,
      available: e.available,
      guildId: t.guild_id
    }))
  }), e), e => "SOUNDBOARD_SOUNDS" !== e),
  R = new N.default(O.socket, (e, t) => ((e = null == e ? {
    type: "PRESENCE_UPDATES",
    updates: []
  } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e),
  k = {};

function M(e, t) {
  for (let n of e) k[n] = {
    preload: () => null,
    dispatch: t
  }
}

function w(e) {
  return k[e]
}

function L(e) {
  a.default.dispatch(e).catch(t => O.socket.resetSocketOnError(t, e.type))
}

function U(e, t, n) {
  let {
    roles: s,
    nick: r,
    avatar: a,
    flags: o,
    premium_since: d,
    pending: u,
    joined_at: l,
    communication_disabled_until: f,
    unusual_dm_activity_until: _
  } = n, c = E.default.getMember(e, t.id);
  (!(null != c && c.nick === r && c.avatar === a && i.isEqual(c.roles, s)) || c.premiumSince !== d || c.isPending !== u || c.joinedAt !== l || c.communicationDisabledUntil !== f || c.flags !== o || c.unusualDMActivityUntil !== _) && L({
    type: "GUILD_MEMBER_ADD",
    guildId: e,
    user: t,
    roles: s,
    nick: r,
    avatar: a,
    premiumSince: d,
    isPending: u,
    joinedAt: l,
    communicationDisabledUntil: f,
    unusualDMActivityUntil: _,
    flags: o
  })
}

function G(e) {
  let {
    member: t,
    mentions: n,
    author: s,
    guild_id: i
  } = e;
  null != t && U(i, s, t), null != n && n.forEach(e => {
    if (null != e.member) {
      let {
        member: t
      } = e;
      delete e.member, U(i, e, t)
    }
  })
}

function F(e) {
  return e.map(e => ({
    sessionId: e.session_id,
    lastModified: e.last_modified,
    status: e.status,
    activities: e.activities,
    active: !!e.active,
    clientInfo: e.client_info,
    broadcast: e.broadcast
  }))
}

function H() {
  O.socket.isSessionEstablished() && y.default.getPendingLobbies().forEach(e => {
    O.socket.lobbyConnect(e.id, e.secret)
  })
}

function B(e) {
  let {
    guildId: t,
    user: n,
    status: s,
    activities: i,
    clientStatus: r,
    broadcast: a
  } = e;
  R.add({
    guildId: t,
    user: n,
    status: s,
    clientStatus: r,
    activities: i,
    broadcast: a
  })
}
M(["INITIAL_GUILD"], e => {
  _.default.initialGuild.measure(() => {
    r.default.Emitter.batched(() => {
      let t = D.hydrateInitialGuild(e, O.socket.identifyStartTime);
      null != T.default.getCurrentUser() && (L({
        type: "GUILD_CREATE",
        guild: t
      }), L({
        type: "VOICE_STATE_UPDATES",
        voiceStates: t.voice_states.map(e => {
          var n;
          return {
            userId: e.user_id,
            guildId: t.id,
            sessionId: e.session_id,
            channelId: e.channel_id,
            mute: e.mute,
            deaf: e.deaf,
            selfMute: e.self_mute,
            selfDeaf: e.self_deaf,
            selfVideo: e.self_video || !1,
            suppress: e.suppress,
            selfStream: e.self_stream || !1,
            requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
          }
        })
      }), P.log("Dispatched INITIAL_GUILD ".concat(e.id)))
    })
  })
}), M(["READY_SUPPLEMENTAL"], e => {
  _.default.readySupplemental.measure(() => {
    r.default.Emitter.batched(() => {
      var t, n;
      e = _.default.hydrateReadySupplemental.measure(() => D.hydrateReadySupplementalPayload(e, O.socket.identifyStartTime));
      let s = e => e.map(e => ({
          user: e.user,
          status: e.status,
          clientStatus: e.client_status,
          activities: e.activities,
          broadcast: e.broadcast
        })),
        i = e.guilds.filter(e => !0 !== e.unavailable);
      i.forEach(e => {
        e.presences = s(e.presences || [])
      });
      let r = e.presences ? s(e.presences) : [],
        a = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(e => (0, g.createChannelRecordFromServer)(e)),
        o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
      _.default.dispatchReadySupplemental.measure(() => {
        L({
          type: "CONNECTION_OPEN_SUPPLEMENTAL",
          guilds: i,
          presences: r,
          lazyPrivateChannels: a,
          gameInvites: o
        })
      });
      let d = [];
      i.forEach(e => {
        e.voice_states.forEach(t => {
          var n;
          d.push({
            userId: t.user_id,
            guildId: e.id,
            sessionId: t.session_id,
            channelId: t.channel_id,
            mute: t.mute,
            deaf: t.deaf,
            selfMute: t.self_mute,
            selfDeaf: t.self_deaf,
            selfVideo: t.self_video || !1,
            suppress: t.suppress,
            selfStream: t.self_stream || !1,
            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
          })
        })
      }), L({
        type: "VOICE_STATE_UPDATES",
        voiceStates: d,
        initial: !0
      }), O.localVoiceState.update(), O.localLobbyVoiceStates.update({}, !0)
    })
  }), setTimeout(() => L({
    type: "POST_CONNECTION_OPEN"
  }), 2e3)
}), ! function(e, t, n) {
  for (let s of e) k[s] = {
    preload: t,
    dispatch: n
  }
}(["READY"], () => D.preloadReadyPayloadData(), (e, t, n) => {
  if (e.user.bot) {
    L({
      type: "LOGOUT"
    });
    return
  }
  _.default.ready.measure(() => {
    r.default.Emitter.batched(() => {
      e = _.default.hydrateReady.measure(() => D.hydrateReadyPayloadPrioritized(e, O.socket.identifyStartTime, n));
      let t = e.private_channels.map(e => (0, g.createChannelRecordFromServer)(e)),
        s = e.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
        i = e.guilds.filter(e => !0 !== e.unavailable),
        r = e.guilds.filter(e => !0 === e.geo_restricted);
      i.forEach(e => {
        e.presences = []
      });
      let a = null == e.user_settings_proto ? void 0 : (0, c.b64ToPreloadedUserSettingsProto)(e.user_settings_proto);
      _.default.dispatchReady.measure(() => {
        var n;
        L({
          type: "CONNECTION_OPEN",
          sessionId: e.session_id,
          authSessionIdHash: e.auth_session_id_hash,
          user: e.user,
          users: e.users,
          guilds: i,
          initialPrivateChannels: t,
          unavailableGuilds: s,
          readState: e.read_state,
          userGuildSettings: e.user_guild_settings,
          tutorial: e.tutorial,
          relationships: e.relationships,
          friendSuggestionCount: e.friend_suggestion_count,
          presences: e.presences,
          analyticsToken: e.analytics_token,
          experiments: e.experiments,
          connectedAccounts: e.connected_accounts,
          guildExperiments: e.guild_experiments,
          requiredAction: e.required_action,
          consents: e.consents,
          sessions: F(e.sessions || []),
          pendingPayments: e.pending_payments,
          countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
          guildJoinRequests: e.guild_join_requests || [],
          userSettingsProto: a,
          apiCodeVersion: e.api_code_version,
          auth: e.auth,
          notificationSettings: {
            flags: e.notification_settings.flags
          },
          geoRestrictedGuilds: r
        })
      }), null != e.auth_token && L({
        type: "UPDATE_TOKEN",
        token: e.auth_token,
        userId: e.user.id
      }), O.localPresenceState.update(), O.localVoiceState.update(), O.localLobbyVoiceStates.update(), H()
    })
  })
}), M(["RESUMED"], () => {
  O.localPresenceState.forceUpdate(), O.localVoiceState.forceUpdate(), O.localLobbyVoiceStates.forceUpdate(), H(), L({
    type: "CONNECTION_RESUMED"
  })
}), M(["TYPING_START"], e => {
  null != e.member && U(e.guild_id, e.member.user, e.member), L({
    type: "TYPING_START",
    channelId: e.channel_id,
    userId: e.user_id
  })
}), M(["ACTIVITY_START"], e => {
  L({
    type: "ACTIVITY_START",
    userId: e.user_id,
    activity: e.activity
  })
}), M(["ACTIVITY_USER_ACTION"], e => {
  L({
    type: "ACTIVITY_USER_ACTION",
    actionType: e.action_type,
    user: e.user,
    applicationId: e.application_id,
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), M(["MESSAGE_CREATE"], e => {
  G(e), null != e.author && L({
    type: "MESSAGE_CREATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    message: e,
    optimistic: !1,
    isPushNotification: !1
  })
}), M(["MESSAGE_UPDATE"], e => {
  G(e), L({
    type: "MESSAGE_UPDATE",
    guildId: e.guild_id,
    message: e
  })
}), M(["MESSAGE_DELETE"], e => {
  L({
    type: "MESSAGE_DELETE",
    guildId: e.guild_id,
    id: e.id,
    channelId: e.channel_id
  })
}), M(["MESSAGE_DELETE_BULK"], e => {
  L({
    type: "MESSAGE_DELETE_BULK",
    guildId: e.guild_id,
    ids: e.ids,
    channelId: e.channel_id
  })
}), M(["MESSAGE_ACK"], e => {
  L({
    type: "MESSAGE_ACK",
    channelId: e.channel_id,
    messageId: e.message_id,
    manual: e.manual,
    newMentionCount: e.mention_count,
    version: e.version
  })
}), M(["GUILD_FEATURE_ACK"], e => {
  L({
    type: "GUILD_FEATURE_ACK",
    id: e.resource_id,
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), M(["USER_NON_CHANNEL_ACK"], e => {
  L({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), M(["CHANNEL_PINS_ACK"], e => {
  L({
    type: "CHANNEL_PINS_ACK",
    channelId: e.channel_id,
    timestamp: e.timestamp,
    version: e.version
  })
}), M(["CHANNEL_PINS_UPDATE"], e => {
  L({
    type: "CHANNEL_PINS_UPDATE",
    channelId: e.channel_id,
    lastPinTimestamp: e.last_pin_timestamp
  })
}), M(["CHANNEL_CREATE", "CHANNEL_DELETE"], (e, t) => {
  L({
    type: t,
    channel: (0, g.createChannelRecordFromServer)(e)
  })
}), M(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
  L({
    type: t,
    id: e.id,
    guildId: e.guild_id,
    status: e.status
  })
}), M(["CHANNEL_STATUSES"], (e, t) => {
  L({
    type: t,
    guildId: e.guild_id,
    channels: e.channels
  })
}), M(["CHANNEL_UPDATE"], e => {
  b.add(e)
}), M(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], (e, t) => {
  let {
    newly_created: n,
    ...s
  } = e;
  L({
    type: t,
    isNewlyCreated: n,
    channel: (0, g.createChannelRecordFromServer)(s)
  })
}), M(["THREAD_LIST_SYNC"], e => {
  L({
    type: "THREAD_LIST_SYNC",
    guildId: e.guild_id,
    threads: e.threads.map(e => {
      let t = v.default.getChannel(e.parent_id);
      return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, g.createChannelRecordFromServer)(e)
    }),
    mostRecentMessages: e.most_recent_messages,
    members: e.members ? i.map(e.members, f.default) : void 0,
    channelIds: e.channel_ids
  })
}), M(["THREAD_MEMBER_UPDATE"], e => {
  L({
    type: "THREAD_MEMBER_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    userId: e.user_id,
    flags: e.flags,
    muted: e.muted,
    muteConfig: e.mute_config,
    joinTimestamp: e.join_timestamp
  })
}), M(["THREAD_MEMBERS_UPDATE"], e => {
  var t;
  L({
    type: "THREAD_MEMBERS_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    memberCount: e.member_count,
    addedMembers: null === (t = e.added_members) || void 0 === t ? void 0 : t.map(t => ({
      id: t.id,
      guildId: e.guild_id,
      userId: t.user_id,
      flags: t.flags,
      joinTimestamp: t.join_timestamp
    })),
    removedMemberIds: e.removed_member_ids,
    memberIdsPreview: e.member_ids_preview
  })
}), M(["FORUM_UNREADS"], e => {
  !e.permission_denied && L({
    type: "FORUM_UNREADS",
    channelId: e.channel_id,
    threads: e.threads.map(e => ({
      threadId: e.thread_id,
      missing: e.missing,
      count: e.count
    }))
  })
}), M(["SOUNDBOARD_SOUNDS"], e => {
  V.add(e)
}), M(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
  let n = v.default.getBasicChannel(e.channel_id);
  L({
    type: t,
    channelId: e.channel_id,
    user: e.user,
    nick: e.nick,
    isMember: null != n
  })
}), M(["GUILD_CREATE"], e => {
  if (e.unavailable) L({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  });
  else {
    let t = D.hydratePreviouslyUnavailableGuild(e);
    o.default.createGuild(t), L({
      type: "VOICE_STATE_UPDATES",
      voiceStates: t.voice_states.map(e => {
        var n;
        return {
          userId: e.user_id,
          guildId: t.id,
          sessionId: e.session_id,
          channelId: e.channel_id,
          mute: e.mute,
          deaf: e.deaf,
          selfMute: e.self_mute,
          selfDeaf: e.self_deaf,
          selfVideo: e.self_video || !1,
          suppress: e.suppress,
          selfStream: e.self_stream || !1,
          requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
        }
      })
    })
  }
}), M(["GUILD_UPDATE"], e => {
  L({
    type: "GUILD_UPDATE",
    guild: e
  }), e.unavailable && L({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), M(["GUILD_DELETE"], e => {
  L({
    type: "GUILD_DELETE",
    guild: e
  }), e.geo_restricted ? L({
    type: "GUILD_GEO_RESTRICTED",
    guildId: e.id,
    icon: e.icon,
    name: e.name
  }) : e.unavailable && L({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), M(["GUILD_MEMBERS_CHUNK"], e => {
  r.default.Emitter.batched(() => {
    L({
      type: "GUILD_MEMBERS_CHUNK",
      guildId: e.guild_id,
      members: e.members,
      notFound: e.not_found
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: s,
        client_status: i,
        activities: r,
        broadcast: a
      } = t;
      return B({
        guildId: e.guild_id,
        user: n,
        status: s,
        activities: r,
        clientStatus: i,
        broadcast: a
      })
    }), N.default.flush()
  })
}), M(["THREAD_MEMBER_LIST_UPDATE"], e => {
  r.default.Emitter.batched(() => {
    L({
      type: "THREAD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      threadId: e.thread_id,
      members: e.members
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: s,
        client_status: i,
        activities: r,
        broadcast: a
      } = t;
      return B({
        guildId: e.guild_id,
        user: n,
        status: s,
        activities: r,
        clientStatus: i,
        broadcast: a
      })
    }), N.default.flush()
  })
}), M(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
  L({
    type: t,
    guildId: e.guild_id,
    user: e.user,
    avatar: e.avatar,
    roles: e.roles,
    nick: e.nick,
    premiumSince: e.premium_since,
    isPending: e.pending,
    joinedAt: e.joined_at,
    communicationDisabledUntil: e.communication_disabled_until,
    unusualDMActivityUntil: e.unusual_dm_activity_until,
    flags: e.flags
  })
}), M(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], (e, t) => {
  L({
    type: t,
    guildId: e.guild_id,
    role: e.role
  })
}), M(["GUILD_ROLE_DELETE"], e => {
  L({
    type: "GUILD_ROLE_DELETE",
    guildId: e.guild_id,
    roleId: e.role_id,
    version: e.version
  })
}), M(["GUILD_EMOJIS_UPDATE"], e => {
  L({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e.guild_id,
    emojis: e.emojis
  })
}), M(["GUILD_STICKERS_UPDATE"], e => {
  L({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e.guild_id,
    stickers: e.stickers
  })
}), M(["GUILD_INTEGRATIONS_UPDATE"], e => {
  L({
    type: "GUILD_INTEGRATIONS_UPDATE",
    guildId: e.guild_id
  })
}), M(["INTEGRATION_CREATE"], e => {
  L({
    type: "INTEGRATION_CREATE",
    application: e.application,
    guildId: e.guild_id
  })
}), M(["INTEGRATION_DELETE"], e => {
  L({
    type: "INTEGRATION_DELETE",
    applicationId: e.application_id,
    guildId: e.guild_id
  })
}), M(["USER_UPDATE"], e => {
  L({
    type: "CURRENT_USER_UPDATE",
    user: e
  })
}), M(["USER_SETTINGS_PROTO_UPDATE"], e => {
  let t = (0, c.b64ToProtoWithType)(e.settings.type, e.settings.proto);
  if (null != t) {
    if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
      parsed: t,
      wire: e.settings.proto,
      type: e.settings.type
    }), Error("UserSettingsProto must not be a string");
    L({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        proto: t,
        type: e.settings.type
      },
      partial: e.partial
    })
  }
}), M(["USER_GUILD_SETTINGS_UPDATE"], e => {
  L({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: [e]
  })
}), M(["USER_CONNECTIONS_UPDATE"], () => {
  L({
    type: "USER_CONNECTIONS_UPDATE"
  })
}), M(["USER_REQUIRED_ACTION_UPDATE"], e => {
  L({
    type: "USER_REQUIRED_ACTION_UPDATE",
    requiredAction: e.required_action
  })
}), M(["USER_NOTE_UPDATE"], e => {
  L({
    type: "USER_NOTE_UPDATE",
    ...e
  })
}), M(["RELATIONSHIP_ADD"], e => {
  L({
    type: "RELATIONSHIP_ADD",
    relationship: {
      id: e.id,
      type: e.type,
      user: e.user,
      since: e.since,
      nickname: e.nickname
    },
    shouldNotify: !0 === e.should_notify
  })
}), M(["RELATIONSHIP_REMOVE"], e => {
  L({
    type: "RELATIONSHIP_REMOVE",
    relationship: e
  })
}), M(["RELATIONSHIP_UPDATE"], e => {
  L({
    type: "RELATIONSHIP_UPDATE",
    relationship: e
  })
}), M(["PRESENCE_UPDATE"], e => {
  B({
    guildId: e.guild_id,
    user: e.user,
    status: e.status,
    activities: e.activities,
    clientStatus: e.client_status,
    broadcast: e.broadcast
  })
}), M(["PRESENCES_REPLACE"], e => {
  L({
    type: "PRESENCES_REPLACE",
    presences: e
  })
}), M(["SESSIONS_REPLACE"], e => {
  L({
    type: "SESSIONS_REPLACE",
    sessions: F(e)
  })
}), M(["VOICE_STATE_UPDATE"], e => {
  var t;
  null != e.member && U(e.guild_id, e.member.user, e.member), L({
    type: "VOICE_STATE_UPDATES",
    voiceStates: [{
      userId: e.user_id,
      guildId: e.guild_id,
      sessionId: e.session_id,
      channelId: e.channel_id,
      mute: e.mute,
      deaf: e.deaf,
      selfMute: e.self_mute,
      selfDeaf: e.self_deaf,
      selfVideo: e.self_video || !1,
      suppress: e.suppress,
      selfStream: e.self_stream || !1,
      requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
      oldChannelId: C.default.getUserVoiceChannelId(e.guild_id, e.user_id)
    }]
  })
}), M(["LOBBY_VOICE_STATE_UPDATE"], e => {
  L({
    type: "LOBBY_VOICE_STATE_UPDATE",
    userId: e.user_id,
    lobbyId: e.lobby_id,
    sessionId: e.session_id,
    channelId: e.channel_id,
    mute: e.mute,
    deaf: e.deaf,
    selfMute: e.self_mute,
    selfDeaf: e.self_deaf
  })
}), M(["VOICE_SERVER_UPDATE"], e => {
  L({
    type: "VOICE_SERVER_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    endpoint: e.endpoint,
    token: e.token
  })
}), M(["LOBBY_VOICE_SERVER_UPDATE"], e => {
  L({
    type: "LOBBY_VOICE_SERVER_UPDATE",
    lobbyId: e.lobby_id,
    endpoint: e.endpoint,
    token: e.token
  })
}), M(["CALL_CREATE"], e => {
  L({
    type: "CALL_CREATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    embeddedActivities: e.embedded_activities,
    region: e.region,
    ringing: e.ringing
  });
  let t = e.voice_states;
  null != t && L({
    type: "VOICE_STATE_UPDATES",
    voiceStates: t.map(e => {
      var t;
      return {
        userId: e.user_id,
        guildId: null,
        sessionId: e.session_id,
        channelId: e.channel_id,
        mute: e.mute,
        deaf: e.deaf,
        selfMute: e.self_mute,
        selfDeaf: e.self_deaf,
        selfVideo: e.self_video || !1,
        suppress: e.suppress,
        selfStream: e.self_stream || !1,
        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null
      }
    })
  })
}), M(["CALL_UPDATE"], e => {
  L({
    type: "CALL_UPDATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    region: e.region,
    ringing: e.ringing
  })
}), M(["CALL_DELETE"], e => {
  L({
    type: "CALL_DELETE",
    channelId: e.channel_id,
    unavailable: e.unavailable
  })
}), M(["OAUTH2_TOKEN_REVOKE"], e => {
  L({
    type: "OAUTH2_TOKEN_REVOKE",
    accessToken: e.access_token
  })
}), M(["RECENT_MENTION_DELETE"], e => {
  L({
    type: "RECENT_MENTION_DELETE",
    id: e.message_id
  })
}), M(["FRIEND_SUGGESTION_CREATE"], e => {
  L({
    type: "FRIEND_SUGGESTION_CREATE",
    suggestion: e
  })
}), M(["FRIEND_SUGGESTION_DELETE"], e => {
  L({
    type: "FRIEND_SUGGESTION_DELETE",
    suggestedUserId: e.suggested_user_id
  })
}), M(["WEBHOOKS_UPDATE"], e => {
  L({
    type: "WEBHOOKS_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id
  })
}), M(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
  L({
    type: t,
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: e.emoji,
    colors: e.burst_colors,
    messageAuthorId: e.message_author_id,
    reactionType: e.type
  })
}), M(["MESSAGE_REACTION_REMOVE_ALL"], e => {
  L({
    type: "MESSAGE_REACTION_REMOVE_ALL",
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), M(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
  L({
    type: "MESSAGE_REACTION_REMOVE_EMOJI",
    channelId: e.channel_id,
    messageId: e.message_id,
    emoji: e.emoji
  })
}), M(["MESSAGE_REACTION_ADD_MANY"], e => {
  L({
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: e.channel_id,
    messageId: e.message_id,
    reactions: e.reactions
  })
}), M(["PAYMENT_UPDATE"], e => {
  L({
    type: "PAYMENT_UPDATE",
    payment: e
  })
}), M(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
  L({
    type: t,
    entitlement: e
  })
}), M(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  p.default.hasLayers() && (n("850068").fetchPaymentSources(), d.fetchSubscriptionPlansBySKUs(S.default.getFetchedSKUIDs()))
}), M(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  u.fetchCurrentUser(), p.default.hasLayers() && n("850068").fetchSubscriptions()
}), M(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
  L({
    type: "GUILD_BOOST_SLOT_CREATE",
    guildBoostSlot: m.default.createFromServer(e, I.default.getSubscriptionById(e.subscription_id))
  })
}), M(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
  L({
    type: "GUILD_BOOST_SLOT_UPDATE",
    guildBoostSlot: m.default.createFromServer(e, I.default.getSubscriptionById(e.subscription_id))
  })
}), M(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
  L({
    type: "BILLING_POPUP_BRIDGE_CALLBACK",
    paymentSourceType: e.payment_source_type,
    state: e.state,
    path: e.path,
    query: e.query
  })
}), M(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
  L({
    type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
    loadId: e.load_id
  })
}), M(["USER_PAYMENT_CLIENT_ADD"], e => {
  (0, A.getPurchaseTokenHash)().then(t => {
    let n = e.purchase_token_hash;
    n === t && L({
      type: "USER_PAYMENT_CLIENT_ADD",
      purchaseTokenHash: n,
      expiresAt: e.expires_at
    })
  })
}), M(["GUILD_MEMBER_LIST_UPDATE"], e => {
  r.default.Emitter.batched(() => {
    let t = t => {
      if (null == t.member) return;
      let {
        member: n
      } = t;
      if (U(e.guild_id, n.user, n), null == n.presence) return;
      let {
        presence: s
      } = n;
      B({
        guildId: e.guild_id,
        user: s.user,
        status: s.status,
        activities: s.activities,
        clientStatus: s.client_status,
        broadcast: s.broadcast
      })
    };
    e.ops.forEach(e => {
      let {
        op: n,
        items: s,
        item: i
      } = e;
      switch (n) {
        case "SYNC":
          s.forEach(t);
          break;
        case "UPDATE":
        case "INSERT":
          t(i)
      }
    }), N.default.flush(), L({
      type: "GUILD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      id: e.id,
      ops: e.ops,
      groups: e.groups,
      memberCount: e.member_count,
      onlineCount: e.online_count
    })
  })
}), M(["LOBBY_CREATE"], e => {
  L({
    type: "LOBBY_CREATE",
    lobby: e
  }), e.voice_states.forEach(t => {
    L({
      type: "LOBBY_VOICE_STATE_UPDATE",
      lobbyId: e.id,
      userId: t.user_id,
      sessionId: t.session_id,
      channelId: t.channel_id,
      mute: t.mute,
      deaf: t.deaf,
      selfMute: t.self_mute,
      selfDeaf: t.self_deaf
    })
  })
}), M(["LOBBY_UPDATE"], e => {
  L({
    type: "LOBBY_UPDATE",
    lobby: e
  })
}), M(["LOBBY_DELETE"], e => {
  L({
    type: "LOBBY_DELETE",
    lobbyId: e.id,
    reason: e.reason
  })
}), M(["LOBBY_MEMBER_CONNECT", "LOBBY_MEMBER_UPDATE", "LOBBY_MEMBER_DISCONNECT"], (e, t) => {
  L({
    type: t,
    lobbyId: e.lobby_id,
    member: e.member
  })
}), M(["LOBBY_MESSAGE"], e => {
  L({
    type: "LOBBY_MESSAGE",
    lobbyId: e.lobby_id,
    senderId: e.sender_id,
    data: e.data
  })
}), M(["GIFT_CODE_UPDATE"], e => {
  L({
    type: "GIFT_CODE_UPDATE",
    uses: e.uses,
    code: e.code
  })
}), M(["GIFT_CODE_CREATE"], e => {
  L({
    type: "GIFT_CODE_CREATE",
    giftCode: e
  })
}), M(["USER_ACHIEVEMENT_UPDATE"], e => {
  L({
    type: "USER_ACHIEVEMENT_UPDATE",
    userAchievement: e
  })
}), M(["LIBRARY_APPLICATION_UPDATE"], e => {
  L({
    type: "LIBRARY_APPLICATION_UPDATE",
    libraryApplication: e
  })
}), M(["STREAM_CREATE"], e => {
  L({
    type: "STREAM_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), M(["STREAM_SERVER_UPDATE"], e => {
  L({
    type: "STREAM_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), M(["STREAM_UPDATE"], e => {
  L({
    type: "STREAM_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), M(["STREAM_DELETE"], e => {
  L({
    type: "STREAM_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), M(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
  L({
    type: "GENERIC_PUSH_NOTIFICATION_SENT",
    title: e.title,
    body: e.body,
    trackingType: e.tracking_type,
    icon: e.icon,
    route: e.route,
    tag: e.tag
  })
}), M(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
  L({
    type: "NOTIFICATION_CENTER_ITEM_CREATE",
    item: e
  })
}), M(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
  L({
    type: "NOTIFICATION_CENTER_ITEM_DELETE",
    id: e.id
  })
}), M(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
  L({
    type: "NOTIFICATION_CENTER_ITEMS_ACK",
    ids: [e.id],
    optimistic: !1
  })
}), M(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
  L({
    type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
    item_enum: e.item_enum
  })
}), M(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
  L({
    type: t,
    guildId: e.guild_id
  })
}), M(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
  L({
    type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
    guildId: e.guild_id,
    version: e.version
  })
}), M(["GUILD_JOIN_REQUEST_CREATE"], e => {
  L({
    type: "GUILD_JOIN_REQUEST_CREATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), M(["GUILD_JOIN_REQUEST_UPDATE"], e => {
  L({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), M(["GUILD_JOIN_REQUEST_DELETE"], e => {
  L({
    type: "GUILD_JOIN_REQUEST_DELETE",
    id: e.id,
    userId: e.user_id,
    guildId: e.guild_id
  })
}), M(["INTERACTION_CREATE"], e => {
  L({
    type: "INTERACTION_CREATE",
    interactionId: e.id,
    nonce: e.nonce
  })
}), M(["INTERACTION_SUCCESS"], e => {
  L({
    type: "INTERACTION_SUCCESS",
    interactionId: e.id,
    nonce: e.nonce
  })
}), M(["INTERACTION_FAILURE"], e => {
  L({
    type: "INTERACTION_FAILURE",
    nonce: e.nonce
  })
}), M(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
  L({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
    choices: e.choices,
    nonce: e.nonce
  })
}), M(["INTERACTION_MODAL_CREATE"], e => {
  L({
    type: "INTERACTION_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    components: e.components,
    nonce: e.nonce
  })
}), M(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
  L({
    type: "INTERACTION_IFRAME_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    iframePath: e.iframe_path,
    modalSize: e.modal_size,
    nonce: e.nonce
  })
}), M(["STAGE_INSTANCE_CREATE"], e => {
  L({
    type: "STAGE_INSTANCE_CREATE",
    instance: e
  })
}), M(["STAGE_INSTANCE_UPDATE"], e => {
  L({
    type: "STAGE_INSTANCE_UPDATE",
    instance: e
  })
}), M(["STAGE_INSTANCE_DELETE"], e => {
  L({
    type: "STAGE_INSTANCE_DELETE",
    instance: e
  })
}), M(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_CREATE",
    guildScheduledEvent: e
  })
}), M(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_UPDATE",
    guildScheduledEvent: e
  })
}), M(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_DELETE",
    guildScheduledEvent: e
  })
}), M(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
    eventException: e
  })
}), M(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
    eventException: e
  })
}), M(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
    eventException: e
  })
}), M(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
    eventId: e.event_id
  })
}), M(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), M(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
  L({
    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), M(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
  L({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), M(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
  L({
    type: "GUILD_DIRECTORY_ENTRY_UPDATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), M(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
  L({
    type: "GUILD_DIRECTORY_ENTRY_DELETE",
    channelId: e.directory_channel_id,
    guildId: e.entity_id
  })
}), M(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
  L({
    type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
    guildId: e.guild_id,
    decisionId: e.decision_id,
    suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
  })
}), M(["VOICE_CHANNEL_EFFECT_SEND"], e => {
  L({
    type: "VOICE_CHANNEL_EFFECT_SEND",
    emoji: e.emoji,
    channelId: e.channel_id,
    userId: e.user_id,
    animationType: e.animation_type,
    animationId: e.animation_id,
    soundId: e.sound_id,
    soundVolume: e.sound_volume,
    points: e.points,
    streamerId: e.streamer_id,
    lineId: e.line_id,
    emojiHose: e.emoji_hose
  })
}), M(["GUILD_SOUNDBOARD_SOUND_CREATE"], e => {
  L({
    type: "GUILD_SOUNDBOARD_SOUND_CREATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new h.default(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), M(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
  L({
    type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new h.default(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), M(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
  L({
    type: "GUILD_SOUNDBOARD_SOUND_DELETE",
    guildId: e.guild_id,
    soundId: e.sound_id
  })
}), M(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
  L({
    type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
    guildId: e.guild_id,
    soundboardSounds: e.soundboard_sounds.map(t => ({
      name: t.name,
      soundId: t.sound_id,
      emojiName: t.emoji_name,
      emojiId: t.emoji_id,
      userId: t.user_id,
      volume: t.volume,
      available: t.available,
      guildId: e.guild_id
    }))
  })
}), M(["EMBEDDED_ACTIVITY_UPDATE"], e => {
  L({
    type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    embeddedActivity: e.embedded_activity,
    connections: e.connections,
    updateCode: e.update_code
  })
}), M(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => {
  L({
    type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2",
    activitySessionId: e.activity_session_id,
    applicationId: e.application_id,
    channelId: e.channel_id,
    guildId: e.guild_id,
    instanceId: e.instance_id,
    userIds: e.user_ids
  })
}), M(["AUTH_SESSION_CHANGE"], e => {
  L({
    type: "AUTH_SESSION_CHANGE",
    authSessionIdHash: e.auth_session_id_hash
  })
}), M(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
  L({
    type: "USER_CONNECTIONS_LINK_CALLBACK",
    provider: e.provider,
    callbackCode: e.callback_code,
    callbackState: e.callback_state
  })
}), M(["DELETED_ENTITY_IDS"], e => {
  L({
    type: "DELETED_ENTITY_IDS",
    ...e
  })
}), M(["CONSOLE_COMMAND_UPDATE"], e => {
  L({
    type: "CONSOLE_COMMAND_UPDATE",
    id: e.id,
    result: e.result,
    error: e.error
  })
}), M(["PASSIVE_UPDATE_V1"], e => {
  var t, n;
  L({
    type: "PASSIVE_UPDATE_V1",
    guildId: e.guild_id,
    members: e.members,
    channels: null === (t = e.channels) || void 0 === t ? void 0 : t.map(e => ({
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp
    })),
    voiceStates: null === (n = e.voice_states) || void 0 === n ? void 0 : n.map(e => {
      var t;
      return {
        channelId: e.channel_id,
        deaf: e.deaf || !1,
        mute: e.mute || !1,
        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
        selfDeaf: e.self_deaf || !1,
        selfMute: e.self_mute || !1,
        selfStream: e.self_stream || !1,
        selfVideo: e.self_video || !1,
        sessionId: e.session_id,
        suppress: e.suppress,
        userId: e.user_id
      }
    })
  })
}), M(["PRIVATE_CHANNEL_INTEGRATION_CREATE"], e => {
  L({
    type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
    integration: e
  })
}), M(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], e => {
  L({
    type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
    integration: e
  })
}), M(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], e => {
  L({
    type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
    channelId: e.channel_id,
    applicationId: e.application_id
  })
}), M(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
  L({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
    guildId: e.guild_id,
    restrictions: e.restrictions
  })
}), M(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
  L({
    type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
    userTrialOfferId: e.user_trial_offer_id,
    recipientId: e.recipient_id
  })
}), M(["SPEED_TEST_CREATE"], e => {
  L({
    type: "SPEED_TEST_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), M(["SPEED_TEST_SERVER_UPDATE"], e => {
  L({
    type: "SPEED_TEST_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), M(["SPEED_TEST_UPDATE"], e => {
  L({
    type: "SPEED_TEST_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), M(["SPEED_TEST_DELETE"], e => {
  L({
    type: "SPEED_TEST_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), M(["LAST_MESSAGES"], e => {
  L({
    type: "MESSAGE_PREVIEWS_LOADED",
    guildId: e.guild_id,
    messages: e.messages
  })
}), M(["AUTHENTICATOR_UPDATE"], e => {
  L({
    type: "AUTHENTICATOR_UPDATE",
    credential: e
  })
}), M(["AUTHENTICATOR_CREATE"], e => {
  L({
    type: "AUTHENTICATOR_CREATE",
    credential: e
  })
}), M(["AUTHENTICATOR_DELETE"], e => {
  L({
    type: "AUTHENTICATOR_DELETE",
    credential: e
  })
}), M(["NOTIFICATION_SETTINGS_UPDATE"], e => {
  L({
    type: "NOTIFICATION_SETTINGS_UPDATE",
    settings: {
      flags: e.flags
    }
  })
}), M(["GAME_INVITE_CREATE"], e => {
  L({
    type: "GAME_INVITE_CREATE",
    gameInvite: e
  })
}), M(["GAME_INVITE_DELETE"], e => {
  L({
    type: "GAME_INVITE_DELETE",
    inviteId: e.invite_id
  })
}), M(["GAME_INVITE_DELETE_MANY"], e => {
  L({
    type: "GAME_INVITE_DELETE_MANY",
    inviteIds: e.invite_ids
  })
}), M(["PREMIUM_MARKETING_PREVIEW"], e => {
  L({
    type: "PREMIUM_MARKETING_PREVIEW",
    properties: e.properties
  })
}), M(["USER_APPLICATION_UPDATE"], e => {
  L({
    type: "USER_APPLICATION_UPDATE",
    applicationId: e.application_id
  })
}), M(["USER_APPLICATION_REMOVE"], e => {
  L({
    type: "USER_APPLICATION_REMOVE",
    applicationId: e.application_id
  })
})