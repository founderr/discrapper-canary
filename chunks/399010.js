"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("424973"), n("222007"), n("702976"), n("70102");
var i = n("917351"),
  s = n.n(i);
n("576863");
var r = n("446674"),
  a = n("913144"),
  o = n("851387"),
  l = n("775433"),
  u = n("327037"),
  d = n("605250"),
  c = n("25932"),
  f = n("410912"),
  _ = n("116949"),
  h = n("233069"),
  g = n("522308"),
  m = n("766274"),
  E = n("42203"),
  p = n("26989"),
  v = n("778588"),
  S = n("260320"),
  T = n("697218"),
  I = n("800762"),
  C = n("10514"),
  A = n("521012"),
  y = n("224400"),
  N = n("390946"),
  R = n("509065"),
  D = n("518916");
let O = new d.default("ConnectionStore"),
  P = new R.default(D.socket, (e, t) => {
    var n;
    e = null != e ? e : {
      type: "CHANNEL_UPDATES",
      channels: []
    };
    let i = (0, h.createChannelRecordFromServer)(t),
      s = E.default.getChannel(t.id),
      r = null == s ? void 0 : s.merge({
        ...i,
        recipients: s.recipients,
        bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : s.bitrate
      });
    return e.channels.push(null != r ? r : i), e
  }, e => "CHANNEL_UPDATE" !== e),
  b = new R.default(D.socket, (e, t) => ((e = null == e ? {
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
  L = new R.default(D.socket, (e, t) => ((e = null == e ? {
    type: "PRESENCE_UPDATES",
    updates: []
  } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e),
  M = {};

function U(e, t) {
  for (let n of e) M[n] = {
    preload: () => null,
    dispatch: t
  }
}

function w(e) {
  return M[e]
}

function k(e) {
  a.default.dispatch(e).catch(t => D.socket.resetSocketOnError(t, e.type))
}

function V(e, t, n) {
  let {
    roles: i,
    nick: r,
    avatar: a,
    flags: o,
    premium_since: l,
    pending: u,
    joined_at: d,
    communication_disabled_until: c,
    unusual_dm_activity_until: f
  } = n, _ = p.default.getMember(e, t.id);
  (!(null != _ && _.nick === r && _.avatar === a && s.isEqual(_.roles, i)) || _.premiumSince !== l || _.isPending !== u || _.joinedAt !== d || _.communicationDisabledUntil !== c || _.flags !== o || _.unusualDMActivityUntil !== f) && k({
    type: "GUILD_MEMBER_ADD",
    guildId: e,
    user: t,
    roles: i,
    nick: r,
    avatar: a,
    premiumSince: l,
    isPending: u,
    joinedAt: d,
    communicationDisabledUntil: c,
    unusualDMActivityUntil: f,
    flags: o
  })
}

function G(e) {
  let {
    member: t,
    mentions: n,
    author: i,
    guild_id: s
  } = e;
  null != t && V(s, i, t), null != n && n.forEach(e => {
    if (null != e.member) {
      let {
        member: t
      } = e;
      delete e.member, V(s, e, t)
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

function x() {
  D.socket.isSessionEstablished() && S.default.getPendingLobbies().forEach(e => {
    D.socket.lobbyConnect(e.id, e.secret)
  })
}

function B(e) {
  let {
    guildId: t,
    user: n,
    status: i,
    activities: s,
    clientStatus: r,
    broadcast: a
  } = e;
  L.add({
    guildId: t,
    user: n,
    status: i,
    clientStatus: r,
    activities: s,
    broadcast: a
  })
}
U(["INITIAL_GUILD"], e => {
  f.default.initialGuild.measure(() => {
    r.default.Emitter.batched(() => {
      let t = N.hydrateInitialGuild(e, D.socket.identifyStartTime);
      null != T.default.getCurrentUser() && (k({
        type: "GUILD_CREATE",
        guild: t
      }), k({
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
      }), O.log("Dispatched INITIAL_GUILD ".concat(e.id)))
    })
  })
}), U(["READY_SUPPLEMENTAL"], e => {
  f.default.readySupplemental.measure(() => {
    r.default.Emitter.batched(() => {
      var t, n;
      e = f.default.hydrateReadySupplemental.measure(() => N.hydrateReadySupplementalPayload(e, D.socket.identifyStartTime));
      let i = e => e.map(e => ({
          user: e.user,
          status: e.status,
          clientStatus: e.client_status,
          activities: e.activities,
          broadcast: e.broadcast
        })),
        s = e.guilds.filter(e => !0 !== e.unavailable);
      s.forEach(e => {
        e.presences = i(e.presences || [])
      });
      let r = e.presences ? i(e.presences) : [],
        a = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(e => (0, h.createChannelRecordFromServer)(e)),
        o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
      f.default.dispatchReadySupplemental.measure(() => {
        k({
          type: "CONNECTION_OPEN_SUPPLEMENTAL",
          guilds: s,
          presences: r,
          lazyPrivateChannels: a,
          gameInvites: o
        })
      });
      let l = [];
      s.forEach(e => {
        e.voice_states.forEach(t => {
          var n;
          l.push({
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
      }), k({
        type: "VOICE_STATE_UPDATES",
        voiceStates: l,
        initial: !0
      }), D.localVoiceState.update(), D.localLobbyVoiceStates.update({}, !0)
    })
  }), setTimeout(() => k({
    type: "POST_CONNECTION_OPEN"
  }), 2e3)
}), ! function(e, t, n) {
  for (let i of e) M[i] = {
    preload: t,
    dispatch: n
  }
}(["READY"], () => N.preloadReadyPayloadData(), (e, t, n) => {
  if (e.user.bot) {
    k({
      type: "LOGOUT"
    });
    return
  }
  f.default.ready.measure(() => {
    r.default.Emitter.batched(() => {
      e = f.default.hydrateReady.measure(() => N.hydrateReadyPayloadPrioritized(e, D.socket.identifyStartTime, n));
      let t = e.private_channels.map(e => (0, h.createChannelRecordFromServer)(e)),
        i = e.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
        s = e.guilds.filter(e => !0 !== e.unavailable),
        r = e.guilds.filter(e => !0 === e.geo_restricted);
      s.forEach(e => {
        e.presences = []
      });
      let a = null == e.user_settings_proto ? void 0 : (0, _.b64ToPreloadedUserSettingsProto)(e.user_settings_proto);
      f.default.dispatchReady.measure(() => {
        var n;
        k({
          type: "CONNECTION_OPEN",
          sessionId: e.session_id,
          authSessionIdHash: e.auth_session_id_hash,
          user: e.user,
          users: e.users,
          guilds: s,
          initialPrivateChannels: t,
          unavailableGuilds: i,
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
      }), null != e.auth_token && k({
        type: "UPDATE_TOKEN",
        token: e.auth_token,
        userId: e.user.id
      }), D.localPresenceState.update(), D.localVoiceState.update(), D.localLobbyVoiceStates.update(), x()
    })
  })
}), U(["RESUMED"], () => {
  D.localPresenceState.forceUpdate(), D.localVoiceState.forceUpdate(), D.localLobbyVoiceStates.forceUpdate(), x(), k({
    type: "CONNECTION_RESUMED"
  })
}), U(["TYPING_START"], e => {
  null != e.member && V(e.guild_id, e.member.user, e.member), k({
    type: "TYPING_START",
    channelId: e.channel_id,
    userId: e.user_id
  })
}), U(["ACTIVITY_START"], e => {
  k({
    type: "ACTIVITY_START",
    userId: e.user_id,
    activity: e.activity
  })
}), U(["ACTIVITY_USER_ACTION"], e => {
  k({
    type: "ACTIVITY_USER_ACTION",
    actionType: e.action_type,
    user: e.user,
    applicationId: e.application_id,
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), U(["MESSAGE_CREATE"], e => {
  G(e), null != e.author && k({
    type: "MESSAGE_CREATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    message: e,
    optimistic: !1,
    isPushNotification: !1
  })
}), U(["MESSAGE_UPDATE"], e => {
  G(e), k({
    type: "MESSAGE_UPDATE",
    guildId: e.guild_id,
    message: e
  })
}), U(["MESSAGE_DELETE"], e => {
  k({
    type: "MESSAGE_DELETE",
    guildId: e.guild_id,
    id: e.id,
    channelId: e.channel_id
  })
}), U(["MESSAGE_DELETE_BULK"], e => {
  k({
    type: "MESSAGE_DELETE_BULK",
    guildId: e.guild_id,
    ids: e.ids,
    channelId: e.channel_id
  })
}), U(["MESSAGE_ACK"], e => {
  k({
    type: "MESSAGE_ACK",
    channelId: e.channel_id,
    messageId: e.message_id,
    manual: e.manual,
    newMentionCount: e.mention_count,
    version: e.version
  })
}), U(["GUILD_FEATURE_ACK"], e => {
  k({
    type: "GUILD_FEATURE_ACK",
    id: e.resource_id,
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), U(["USER_NON_CHANNEL_ACK"], e => {
  k({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), U(["CHANNEL_PINS_ACK"], e => {
  k({
    type: "CHANNEL_PINS_ACK",
    channelId: e.channel_id,
    timestamp: e.timestamp,
    version: e.version
  })
}), U(["CHANNEL_PINS_UPDATE"], e => {
  k({
    type: "CHANNEL_PINS_UPDATE",
    channelId: e.channel_id,
    lastPinTimestamp: e.last_pin_timestamp
  })
}), U(["CHANNEL_CREATE", "CHANNEL_DELETE"], (e, t) => {
  k({
    type: t,
    channel: (0, h.createChannelRecordFromServer)(e)
  })
}), U(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
  k({
    type: t,
    id: e.id,
    guildId: e.guild_id,
    status: e.status
  })
}), U(["CHANNEL_STATUSES"], (e, t) => {
  k({
    type: t,
    guildId: e.guild_id,
    channels: e.channels
  })
}), U(["CHANNEL_UPDATE"], e => {
  P.add(e)
}), U(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], (e, t) => {
  let {
    newly_created: n,
    ...i
  } = e;
  k({
    type: t,
    isNewlyCreated: n,
    channel: (0, h.createChannelRecordFromServer)(i)
  })
}), U(["THREAD_LIST_SYNC"], e => {
  k({
    type: "THREAD_LIST_SYNC",
    guildId: e.guild_id,
    threads: e.threads.map(e => {
      let t = E.default.getChannel(e.parent_id);
      return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, h.createChannelRecordFromServer)(e)
    }),
    mostRecentMessages: e.most_recent_messages,
    members: e.members ? s.map(e.members, c.default) : void 0,
    channelIds: e.channel_ids
  })
}), U(["THREAD_MEMBER_UPDATE"], e => {
  k({
    type: "THREAD_MEMBER_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    userId: e.user_id,
    flags: e.flags,
    muted: e.muted,
    muteConfig: e.mute_config,
    joinTimestamp: e.join_timestamp
  })
}), U(["THREAD_MEMBERS_UPDATE"], e => {
  var t;
  k({
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
}), U(["FORUM_UNREADS"], e => {
  !e.permission_denied && k({
    type: "FORUM_UNREADS",
    channelId: e.channel_id,
    threads: e.threads.map(e => ({
      threadId: e.thread_id,
      missing: e.missing,
      count: e.count
    }))
  })
}), U(["SOUNDBOARD_SOUNDS"], e => {
  b.add(e)
}), U(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
  let n = E.default.getBasicChannel(e.channel_id);
  k({
    type: t,
    channelId: e.channel_id,
    user: e.user,
    nick: e.nick,
    isMember: null != n
  })
}), U(["GUILD_CREATE"], e => {
  if (e.unavailable) k({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  });
  else {
    let t = N.hydratePreviouslyUnavailableGuild(e);
    o.default.createGuild(t), k({
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
}), U(["GUILD_UPDATE"], e => {
  k({
    type: "GUILD_UPDATE",
    guild: e
  }), e.unavailable && k({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), U(["GUILD_DELETE"], e => {
  k({
    type: "GUILD_DELETE",
    guild: e
  }), e.geo_restricted ? k({
    type: "GUILD_GEO_RESTRICTED",
    guildId: e.id,
    icon: e.icon,
    name: e.name
  }) : e.unavailable && k({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), U(["GUILD_MEMBERS_CHUNK"], e => {
  r.default.Emitter.batched(() => {
    k({
      type: "GUILD_MEMBERS_CHUNK",
      guildId: e.guild_id,
      members: e.members,
      notFound: e.not_found
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: i,
        client_status: s,
        activities: r,
        broadcast: a
      } = t;
      return B({
        guildId: e.guild_id,
        user: n,
        status: i,
        activities: r,
        clientStatus: s,
        broadcast: a
      })
    }), R.default.flush()
  })
}), U(["THREAD_MEMBER_LIST_UPDATE"], e => {
  r.default.Emitter.batched(() => {
    k({
      type: "THREAD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      threadId: e.thread_id,
      members: e.members
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: i,
        client_status: s,
        activities: r,
        broadcast: a
      } = t;
      return B({
        guildId: e.guild_id,
        user: n,
        status: i,
        activities: r,
        clientStatus: s,
        broadcast: a
      })
    }), R.default.flush()
  })
}), U(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
  k({
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
}), U(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], (e, t) => {
  k({
    type: t,
    guildId: e.guild_id,
    role: e.role
  })
}), U(["GUILD_ROLE_DELETE"], e => {
  k({
    type: "GUILD_ROLE_DELETE",
    guildId: e.guild_id,
    roleId: e.role_id,
    version: e.version
  })
}), U(["GUILD_EMOJIS_UPDATE"], e => {
  k({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e.guild_id,
    emojis: e.emojis
  })
}), U(["GUILD_STICKERS_UPDATE"], e => {
  k({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e.guild_id,
    stickers: e.stickers
  })
}), U(["GUILD_INTEGRATIONS_UPDATE"], e => {
  k({
    type: "GUILD_INTEGRATIONS_UPDATE",
    guildId: e.guild_id
  })
}), U(["INTEGRATION_CREATE"], e => {
  k({
    type: "INTEGRATION_CREATE",
    application: e.application,
    guildId: e.guild_id
  })
}), U(["INTEGRATION_DELETE"], e => {
  k({
    type: "INTEGRATION_DELETE",
    applicationId: e.application_id,
    guildId: e.guild_id
  })
}), U(["USER_UPDATE"], e => {
  k({
    type: "CURRENT_USER_UPDATE",
    user: e
  })
}), U(["USER_SETTINGS_PROTO_UPDATE"], e => {
  let t = (0, _.b64ToProtoWithType)(e.settings.type, e.settings.proto);
  if (null != t) {
    if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
      parsed: t,
      wire: e.settings.proto,
      type: e.settings.type
    }), Error("UserSettingsProto must not be a string");
    k({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        proto: t,
        type: e.settings.type
      },
      partial: e.partial
    })
  }
}), U(["USER_GUILD_SETTINGS_UPDATE"], e => {
  k({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: [e]
  })
}), U(["USER_CONNECTIONS_UPDATE"], () => {
  k({
    type: "USER_CONNECTIONS_UPDATE"
  })
}), U(["USER_REQUIRED_ACTION_UPDATE"], e => {
  k({
    type: "USER_REQUIRED_ACTION_UPDATE",
    requiredAction: e.required_action
  })
}), U(["USER_NOTE_UPDATE"], e => {
  k({
    type: "USER_NOTE_UPDATE",
    ...e
  })
}), U(["RELATIONSHIP_ADD"], e => {
  k({
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
}), U(["RELATIONSHIP_REMOVE"], e => {
  k({
    type: "RELATIONSHIP_REMOVE",
    relationship: e
  })
}), U(["RELATIONSHIP_UPDATE"], e => {
  k({
    type: "RELATIONSHIP_UPDATE",
    relationship: e
  })
}), U(["PRESENCE_UPDATE"], e => {
  B({
    guildId: e.guild_id,
    user: e.user,
    status: e.status,
    activities: e.activities,
    clientStatus: e.client_status,
    broadcast: e.broadcast
  })
}), U(["PRESENCES_REPLACE"], e => {
  k({
    type: "PRESENCES_REPLACE",
    presences: e
  })
}), U(["SESSIONS_REPLACE"], e => {
  k({
    type: "SESSIONS_REPLACE",
    sessions: F(e)
  })
}), U(["VOICE_STATE_UPDATE"], e => {
  var t;
  null != e.member && V(e.guild_id, e.member.user, e.member), k({
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
      oldChannelId: I.default.getUserVoiceChannelId(e.guild_id, e.user_id)
    }]
  })
}), U(["LOBBY_VOICE_STATE_UPDATE"], e => {
  k({
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
}), U(["VOICE_SERVER_UPDATE"], e => {
  k({
    type: "VOICE_SERVER_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    endpoint: e.endpoint,
    token: e.token
  })
}), U(["LOBBY_VOICE_SERVER_UPDATE"], e => {
  k({
    type: "LOBBY_VOICE_SERVER_UPDATE",
    lobbyId: e.lobby_id,
    endpoint: e.endpoint,
    token: e.token
  })
}), U(["CALL_CREATE"], e => {
  k({
    type: "CALL_CREATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    embeddedActivities: e.embedded_activities,
    region: e.region,
    ringing: e.ringing
  });
  let t = e.voice_states;
  null != t && k({
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
}), U(["CALL_UPDATE"], e => {
  k({
    type: "CALL_UPDATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    region: e.region,
    ringing: e.ringing
  })
}), U(["CALL_DELETE"], e => {
  k({
    type: "CALL_DELETE",
    channelId: e.channel_id,
    unavailable: e.unavailable
  })
}), U(["OAUTH2_TOKEN_REVOKE"], e => {
  k({
    type: "OAUTH2_TOKEN_REVOKE",
    accessToken: e.access_token
  })
}), U(["RECENT_MENTION_DELETE"], e => {
  k({
    type: "RECENT_MENTION_DELETE",
    id: e.message_id
  })
}), U(["FRIEND_SUGGESTION_CREATE"], e => {
  k({
    type: "FRIEND_SUGGESTION_CREATE",
    suggestion: e
  })
}), U(["FRIEND_SUGGESTION_DELETE"], e => {
  k({
    type: "FRIEND_SUGGESTION_DELETE",
    suggestedUserId: e.suggested_user_id
  })
}), U(["WEBHOOKS_UPDATE"], e => {
  k({
    type: "WEBHOOKS_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id
  })
}), U(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
  k({
    type: t,
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: e.emoji,
    colors: e.burst_colors,
    messageAuthorId: e.message_author_id,
    reactionType: e.type
  })
}), U(["MESSAGE_REACTION_REMOVE_ALL"], e => {
  k({
    type: "MESSAGE_REACTION_REMOVE_ALL",
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), U(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
  k({
    type: "MESSAGE_REACTION_REMOVE_EMOJI",
    channelId: e.channel_id,
    messageId: e.message_id,
    emoji: e.emoji
  })
}), U(["MESSAGE_REACTION_ADD_MANY"], e => {
  k({
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: e.channel_id,
    messageId: e.message_id,
    reactions: e.reactions
  })
}), U(["PAYMENT_UPDATE"], e => {
  k({
    type: "PAYMENT_UPDATE",
    payment: e
  })
}), U(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
  k({
    type: t,
    entitlement: e
  })
}), U(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  v.default.hasLayers() && (n("850068").fetchPaymentSources(), l.fetchSubscriptionPlansBySKUs(C.default.getFetchedSKUIDs()))
}), U(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  u.fetchCurrentUser(), v.default.hasLayers() && n("850068").fetchSubscriptions()
}), U(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
  k({
    type: "GUILD_BOOST_SLOT_CREATE",
    guildBoostSlot: g.default.createFromServer(e, A.default.getSubscriptionById(e.subscription_id))
  })
}), U(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
  k({
    type: "GUILD_BOOST_SLOT_UPDATE",
    guildBoostSlot: g.default.createFromServer(e, A.default.getSubscriptionById(e.subscription_id))
  })
}), U(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
  k({
    type: "BILLING_POPUP_BRIDGE_CALLBACK",
    paymentSourceType: e.payment_source_type,
    state: e.state,
    path: e.path,
    query: e.query
  })
}), U(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
  k({
    type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
    loadId: e.load_id
  })
}), U(["USER_PAYMENT_CLIENT_ADD"], e => {
  (0, y.getPurchaseTokenHash)().then(t => {
    let n = e.purchase_token_hash;
    n === t && k({
      type: "USER_PAYMENT_CLIENT_ADD",
      purchaseTokenHash: n,
      expiresAt: e.expires_at
    })
  })
}), U(["GUILD_MEMBER_LIST_UPDATE"], e => {
  r.default.Emitter.batched(() => {
    let t = t => {
      if (null == t.member) return;
      let {
        member: n
      } = t;
      if (V(e.guild_id, n.user, n), null == n.presence) return;
      let {
        presence: i
      } = n;
      B({
        guildId: e.guild_id,
        user: i.user,
        status: i.status,
        activities: i.activities,
        clientStatus: i.client_status,
        broadcast: i.broadcast
      })
    };
    e.ops.forEach(e => {
      let {
        op: n,
        items: i,
        item: s
      } = e;
      switch (n) {
        case "SYNC":
          i.forEach(t);
          break;
        case "UPDATE":
        case "INSERT":
          t(s)
      }
    }), R.default.flush(), k({
      type: "GUILD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      id: e.id,
      ops: e.ops,
      groups: e.groups,
      memberCount: e.member_count,
      onlineCount: e.online_count
    })
  })
}), U(["LOBBY_CREATE"], e => {
  k({
    type: "LOBBY_CREATE",
    lobby: e
  }), e.voice_states.forEach(t => {
    k({
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
}), U(["LOBBY_UPDATE"], e => {
  k({
    type: "LOBBY_UPDATE",
    lobby: e
  })
}), U(["LOBBY_DELETE"], e => {
  k({
    type: "LOBBY_DELETE",
    lobbyId: e.id,
    reason: e.reason
  })
}), U(["LOBBY_MEMBER_CONNECT", "LOBBY_MEMBER_UPDATE", "LOBBY_MEMBER_DISCONNECT"], (e, t) => {
  k({
    type: t,
    lobbyId: e.lobby_id,
    member: e.member
  })
}), U(["LOBBY_MESSAGE"], e => {
  k({
    type: "LOBBY_MESSAGE",
    lobbyId: e.lobby_id,
    senderId: e.sender_id,
    data: e.data
  })
}), U(["GIFT_CODE_UPDATE"], e => {
  k({
    type: "GIFT_CODE_UPDATE",
    uses: e.uses,
    code: e.code
  })
}), U(["GIFT_CODE_CREATE"], e => {
  k({
    type: "GIFT_CODE_CREATE",
    giftCode: e
  })
}), U(["USER_ACHIEVEMENT_UPDATE"], e => {
  k({
    type: "USER_ACHIEVEMENT_UPDATE",
    userAchievement: e
  })
}), U(["LIBRARY_APPLICATION_UPDATE"], e => {
  k({
    type: "LIBRARY_APPLICATION_UPDATE",
    libraryApplication: e
  })
}), U(["STREAM_CREATE"], e => {
  k({
    type: "STREAM_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), U(["STREAM_SERVER_UPDATE"], e => {
  k({
    type: "STREAM_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), U(["STREAM_UPDATE"], e => {
  k({
    type: "STREAM_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), U(["STREAM_DELETE"], e => {
  k({
    type: "STREAM_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), U(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
  k({
    type: "GENERIC_PUSH_NOTIFICATION_SENT",
    title: e.title,
    body: e.body,
    trackingType: e.tracking_type,
    icon: e.icon,
    route: e.route,
    tag: e.tag
  })
}), U(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
  k({
    type: "NOTIFICATION_CENTER_ITEM_CREATE",
    item: e
  })
}), U(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
  k({
    type: "NOTIFICATION_CENTER_ITEM_DELETE",
    id: e.id
  })
}), U(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
  k({
    type: "NOTIFICATION_CENTER_ITEMS_ACK",
    ids: [e.id],
    optimistic: !1
  })
}), U(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
  k({
    type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
    item_enum: e.item_enum
  })
}), U(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
  k({
    type: t,
    guildId: e.guild_id
  })
}), U(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
  k({
    type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
    guildId: e.guild_id,
    version: e.version
  })
}), U(["GUILD_JOIN_REQUEST_CREATE"], e => {
  k({
    type: "GUILD_JOIN_REQUEST_CREATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), U(["GUILD_JOIN_REQUEST_UPDATE"], e => {
  k({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), U(["GUILD_JOIN_REQUEST_DELETE"], e => {
  k({
    type: "GUILD_JOIN_REQUEST_DELETE",
    id: e.id,
    userId: e.user_id,
    guildId: e.guild_id
  })
}), U(["INTERACTION_CREATE"], e => {
  k({
    type: "INTERACTION_CREATE",
    interactionId: e.id,
    nonce: e.nonce
  })
}), U(["INTERACTION_SUCCESS"], e => {
  k({
    type: "INTERACTION_SUCCESS",
    interactionId: e.id,
    nonce: e.nonce
  })
}), U(["INTERACTION_FAILURE"], e => {
  k({
    type: "INTERACTION_FAILURE",
    nonce: e.nonce
  })
}), U(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
  k({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
    choices: e.choices,
    nonce: e.nonce
  })
}), U(["INTERACTION_MODAL_CREATE"], e => {
  k({
    type: "INTERACTION_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    components: e.components,
    nonce: e.nonce
  })
}), U(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
  k({
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
}), U(["STAGE_INSTANCE_CREATE"], e => {
  k({
    type: "STAGE_INSTANCE_CREATE",
    instance: e
  })
}), U(["STAGE_INSTANCE_UPDATE"], e => {
  k({
    type: "STAGE_INSTANCE_UPDATE",
    instance: e
  })
}), U(["STAGE_INSTANCE_DELETE"], e => {
  k({
    type: "STAGE_INSTANCE_DELETE",
    instance: e
  })
}), U(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_CREATE",
    guildScheduledEvent: e
  })
}), U(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_UPDATE",
    guildScheduledEvent: e
  })
}), U(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_DELETE",
    guildScheduledEvent: e
  })
}), U(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
    eventException: e
  })
}), U(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
    eventException: e
  })
}), U(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
    eventException: e
  })
}), U(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
    eventId: e.event_id
  })
}), U(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), U(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
  k({
    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), U(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
  k({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), U(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
  k({
    type: "GUILD_DIRECTORY_ENTRY_UPDATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), U(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
  k({
    type: "GUILD_DIRECTORY_ENTRY_DELETE",
    channelId: e.directory_channel_id,
    guildId: e.entity_id
  })
}), U(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
  k({
    type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
    guildId: e.guild_id,
    decisionId: e.decision_id,
    suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
  })
}), U(["VOICE_CHANNEL_EFFECT_SEND"], e => {
  k({
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
}), U(["GUILD_SOUNDBOARD_SOUND_CREATE"], e => {
  k({
    type: "GUILD_SOUNDBOARD_SOUND_CREATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new m.default(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), U(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
  k({
    type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new m.default(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), U(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
  k({
    type: "GUILD_SOUNDBOARD_SOUND_DELETE",
    guildId: e.guild_id,
    soundId: e.sound_id
  })
}), U(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
  k({
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
}), U(["EMBEDDED_ACTIVITY_UPDATE"], e => {
  k({
    type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    embeddedActivity: e.embedded_activity,
    connections: e.connections,
    updateCode: e.update_code
  })
}), U(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => {
  k({
    type: "EMBEDDED_ACTIVITY_INBOUND_UPDATE_V2",
    activitySessionId: e.activity_session_id,
    applicationId: e.application_id,
    channelId: e.channel_id,
    guildId: e.guild_id,
    instanceId: e.instance_id,
    userIds: e.user_ids
  })
}), U(["AUTH_SESSION_CHANGE"], e => {
  k({
    type: "AUTH_SESSION_CHANGE",
    authSessionIdHash: e.auth_session_id_hash
  })
}), U(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
  k({
    type: "USER_CONNECTIONS_LINK_CALLBACK",
    provider: e.provider,
    callbackCode: e.callback_code,
    callbackState: e.callback_state
  })
}), U(["DELETED_ENTITY_IDS"], e => {
  k({
    type: "DELETED_ENTITY_IDS",
    ...e
  })
}), U(["CONSOLE_COMMAND_UPDATE"], e => {
  k({
    type: "CONSOLE_COMMAND_UPDATE",
    id: e.id,
    result: e.result,
    error: e.error
  })
}), U(["PASSIVE_UPDATE_V1"], e => {
  var t, n;
  k({
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
}), U(["PRIVATE_CHANNEL_INTEGRATION_CREATE"], e => {
  k({
    type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
    integration: e
  })
}), U(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], e => {
  k({
    type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
    integration: e
  })
}), U(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], e => {
  k({
    type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
    channelId: e.channel_id,
    applicationId: e.application_id
  })
}), U(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
  k({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
    guildId: e.guild_id,
    restrictions: e.restrictions
  })
}), U(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
  k({
    type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
    userTrialOfferId: e.user_trial_offer_id,
    recipientId: e.recipient_id
  })
}), U(["SPEED_TEST_CREATE"], e => {
  k({
    type: "SPEED_TEST_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), U(["SPEED_TEST_SERVER_UPDATE"], e => {
  k({
    type: "SPEED_TEST_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), U(["SPEED_TEST_UPDATE"], e => {
  k({
    type: "SPEED_TEST_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), U(["SPEED_TEST_DELETE"], e => {
  k({
    type: "SPEED_TEST_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), U(["LAST_MESSAGES"], e => {
  k({
    type: "MESSAGE_PREVIEWS_LOADED",
    guildId: e.guild_id,
    messages: e.messages
  })
}), U(["AUTHENTICATOR_UPDATE"], e => {
  k({
    type: "AUTHENTICATOR_UPDATE",
    credential: e
  })
}), U(["AUTHENTICATOR_CREATE"], e => {
  k({
    type: "AUTHENTICATOR_CREATE",
    credential: e
  })
}), U(["AUTHENTICATOR_DELETE"], e => {
  k({
    type: "AUTHENTICATOR_DELETE",
    credential: e
  })
}), U(["NOTIFICATION_SETTINGS_UPDATE"], e => {
  k({
    type: "NOTIFICATION_SETTINGS_UPDATE",
    settings: {
      flags: e.flags
    }
  })
}), U(["GAME_INVITE_CREATE"], e => {
  k({
    type: "GAME_INVITE_CREATE",
    gameInvite: e
  })
}), U(["GAME_INVITE_DELETE"], e => {
  k({
    type: "GAME_INVITE_DELETE",
    inviteId: e.invite_id
  })
}), U(["GAME_INVITE_DELETE_MANY"], e => {
  k({
    type: "GAME_INVITE_DELETE_MANY",
    inviteIds: e.invite_ids
  })
}), U(["PREMIUM_MARKETING_PREVIEW"], e => {
  k({
    type: "PREMIUM_MARKETING_PREVIEW",
    properties: e.properties
  })
}), U(["USER_APPLICATION_UPDATE"], e => {
  k({
    type: "USER_APPLICATION_UPDATE",
    applicationId: e.application_id
  })
}), U(["USER_APPLICATION_REMOVE"], e => {
  k({
    type: "USER_APPLICATION_REMOVE",
    applicationId: e.application_id
  })
})