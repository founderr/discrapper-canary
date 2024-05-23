"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("653041"), n("47120"), n("789020"), n("411104");
var i = n("392711"),
  r = n.n(i);
n("724522");
var s = n("442837"),
  a = n("570140"),
  o = n("749210"),
  l = n("821849"),
  u = n("232567"),
  d = n("864106"),
  _ = n("710845"),
  c = n("292419"),
  E = n("566006"),
  I = n("952537"),
  T = n("218543"),
  f = n("48481"),
  S = n("131704"),
  h = n("209747"),
  A = n("598077"),
  m = n("592125"),
  N = n("271383"),
  p = n("819640"),
  O = n("594174"),
  C = n("979651"),
  R = n("509545"),
  g = n("78839"),
  L = n("936101"),
  v = n("868158"),
  D = n("483012"),
  M = n("955132");
let y = new _.default("ConnectionStore"),
  P = new D.default(M.socket, (e, t) => {
    var n;
    e = null != e ? e : {
      type: "CHANNEL_UPDATES",
      channels: []
    };
    let i = (0, S.createChannelRecordFromServer)(t),
      r = m.default.getChannel(t.id),
      s = null == r ? void 0 : r.merge({
        ...i,
        recipients: r.recipients,
        bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : r.bitrate
      });
    return e.channels.push(null != s ? s : i), e
  }, e => "CHANNEL_UPDATE" !== e),
  U = new D.default(M.socket, (e, t) => ((e = null == e ? {
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
  b = new D.default(M.socket, (e, t) => ((e = null != e ? e : {
    type: "GUILD_MEMBERS_CHUNK_BATCH",
    chunks: []
  }).chunks.push(t), e), e => "GUILD_MEMBERS_CHUNK" !== e),
  G = new D.default(M.socket, (e, t) => ((e = null == e ? {
    type: "PRESENCE_UPDATES",
    updates: []
  } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e),
  w = {};

function k(e, t) {
  for (let n of e) w[n] = {
    preload: () => null,
    dispatch: t
  }
}

function B(e, t, n) {
  for (let i of e) w[i] = {
    preload: t,
    dispatch: n
  }
}

function V(e) {
  return w[e]
}

function x(e) {
  a.default.dispatch(e).catch(t => M.socket.resetSocketOnDispatchError({
    error: t,
    action: e.type
  }))
}

function F(e, t, n) {
  var i;
  let {
    roles: s,
    nick: a,
    avatar: o,
    avatar_decoration_data: l,
    flags: u,
    premium_since: _,
    pending: c,
    joined_at: E,
    communication_disabled_until: I,
    unusual_dm_activity_until: T
  } = n, f = N.default.getMember(e, t.id);
  (!(null != f && f.nick === a && f.avatar === o && r().isEqual(f.roles, s) && (0, d.isEqualAvatarDecoration)(f.avatarDecoration, l)) || f.premiumSince !== _ || f.isPending !== c || f.joinedAt !== E || f.communicationDisabledUntil !== I || f.flags !== u || (null !== (i = f.unusualDMActivityUntil) && void 0 !== i ? i : null) !== (null != T ? T : null)) && x({
    type: "GUILD_MEMBER_ADD",
    guildId: e,
    user: t,
    roles: s,
    nick: a,
    avatar: o,
    avatarDecoration: l,
    premiumSince: _,
    isPending: c,
    joinedAt: E,
    communicationDisabledUntil: I,
    unusualDMActivityUntil: T,
    flags: u
  })
}

function H(e) {
  let {
    member: t,
    mentions: n,
    author: i,
    guild_id: r
  } = e;
  null != t && null != r && F(r, i, t), null != n && n.forEach(e => {
    if (null != e.member && null != r) {
      let {
        member: t
      } = e;
      delete e.member, F(r, e, t)
    }
  })
}

function Y(e) {
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

function j(e) {
  let {
    guildId: t,
    user: n,
    status: i,
    activities: r,
    clientStatus: s,
    broadcast: a
  } = e;
  G.add({
    guildId: t,
    user: n,
    status: i,
    clientStatus: s,
    activities: r,
    broadcast: a
  })
}
B(["INITIAL_GUILD"], e => "full" === e.data_mode ? null : m.ChannelLoader.loadGuildIds([e.id]), e => {
  T.default.initialGuild.measure(() => {
    s.default.Emitter.batched(() => {
      let t = v.hydrateInitialGuild(e, M.socket.identifyStartTime);
      null != O.default.getCurrentUser() && (x({
        type: "GUILD_CREATE",
        guild: t
      }), x({
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
      }), y.log("Dispatched INITIAL_GUILD ".concat(e.id)))
    })
  })
}), k(["READY_SUPPLEMENTAL"], e => {
  T.default.readySupplemental.measure(() => {
    s.default.Emitter.batched(() => {
      var t, n;
      e = T.default.hydrateReadySupplemental.measure(() => v.hydrateReadySupplementalPayload(e, M.socket.identifyStartTime));
      let i = e => e.map(e => ({
          user: e.user,
          status: e.status,
          clientStatus: e.client_status,
          activities: e.activities,
          broadcast: e.broadcast
        })),
        r = e.guilds.filter(e => !0 !== e.unavailable);
      r.forEach(e => {
        e.presences = i(e.presences || [])
      });
      let s = e.presences ? i(e.presences) : [],
        a = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(e => (0, S.createChannelRecordFromServer)(e)),
        o = null !== (n = e.game_invites) && void 0 !== n ? n : [];
      T.default.dispatchReadySupplemental.measure(() => {
        x({
          type: "CONNECTION_OPEN_SUPPLEMENTAL",
          guilds: r,
          presences: s,
          lazyPrivateChannels: a,
          gameInvites: o
        })
      });
      let l = [];
      r.forEach(e => {
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
      }), x({
        type: "VOICE_STATE_UPDATES",
        voiceStates: l,
        initial: !0
      }), M.localVoiceState.update()
    })
  }), setTimeout(() => x({
    type: "POST_CONNECTION_OPEN"
  }), 2e3)
}), B(["READY"], e => {
  var t;
  let n = v.preloadReadyPayloadData(),
    i = e.guilds.filter(e => {
      var t, n;
      return !e.unavailable && "partial" === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0)
    }).map(e => e.id);
  return Promise.all([n, null !== (t = m.ChannelLoader.loadGuildIds(i)) && void 0 !== t ? t : Promise.resolve()]).then(e => {
    let [t] = e;
    return t
  })
}, (e, t, n) => {
  if (e.user.bot) {
    x({
      type: "LOGOUT"
    });
    return
  }
  T.default.ready.measure(() => {
    s.default.Emitter.batched(() => {
      let t = (e = T.default.hydrateReady.measure(() => v.hydrateReadyPayloadPrioritized(e, M.socket.identifyStartTime, n))).private_channels.map(e => (0, S.createChannelRecordFromServer)(e)),
        i = e.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
        r = e.guilds.filter(e => !0 !== e.unavailable),
        s = e.guilds.filter(e => !0 === e.geo_restricted);
      r.forEach(e => {
        e.presences = []
      });
      let a = null == e.user_settings_proto ? void 0 : (0, f.b64ToPreloadedUserSettingsProto)(e.user_settings_proto);
      T.default.dispatchReady.measure(() => {
        var n;
        x({
          type: "CONNECTION_OPEN",
          sessionId: e.session_id,
          authSessionIdHash: e.auth_session_id_hash,
          user: e.user,
          users: e.users,
          guilds: r,
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
          sessions: Y(e.sessions || []),
          pendingPayments: e.pending_payments,
          countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
          guildJoinRequests: e.guild_join_requests || [],
          userSettingsProto: a,
          apiCodeVersion: e.api_code_version,
          auth: e.auth,
          notificationSettings: {
            flags: e.notification_settings.flags
          },
          geoRestrictedGuilds: s
        })
      }), null != e.auth_token && x({
        type: "UPDATE_TOKEN",
        token: e.auth_token,
        userId: e.user.id
      }), M.localPresenceState.update(), M.localVoiceState.update()
    })
  })
}), k(["RESUMED"], () => {
  M.localPresenceState.forceUpdate(), M.localVoiceState.forceUpdate(), x({
    type: "CONNECTION_RESUMED"
  })
}), k(["TYPING_START"], e => {
  null != e.member && F(e.guild_id, e.member.user, e.member), x({
    type: "TYPING_START",
    channelId: e.channel_id,
    userId: e.user_id
  })
}), k(["ACTIVITY_START"], e => {
  x({
    type: "ACTIVITY_START",
    userId: e.user_id,
    activity: e.activity
  })
}), k(["ACTIVITY_USER_ACTION"], e => {
  x({
    type: "ACTIVITY_USER_ACTION",
    actionType: e.action_type,
    user: e.user,
    applicationId: e.application_id,
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), B(["MESSAGE_CREATE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  H(e), null != e.author && x({
    type: "MESSAGE_CREATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    message: e,
    optimistic: !1,
    isPushNotification: !1
  })
}), B(["MESSAGE_UPDATE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  H(e), x({
    type: "MESSAGE_UPDATE",
    guildId: e.guild_id,
    message: e
  })
}), B(["MESSAGE_DELETE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "MESSAGE_DELETE",
    guildId: e.guild_id,
    id: e.id,
    channelId: e.channel_id
  })
}), B(["MESSAGE_DELETE_BULK"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "MESSAGE_DELETE_BULK",
    guildId: e.guild_id,
    ids: e.ids,
    channelId: e.channel_id
  })
}), B(["MESSAGE_ACK"], e => m.ChannelLoader.loadGuildFromChannelId(e.channel_id), e => {
  x({
    type: "MESSAGE_ACK",
    channelId: e.channel_id,
    messageId: e.message_id,
    manual: e.manual,
    newMentionCount: e.mention_count,
    version: e.version
  })
}), k(["GUILD_FEATURE_ACK"], e => {
  x({
    type: "GUILD_FEATURE_ACK",
    id: e.resource_id,
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), k(["USER_NON_CHANNEL_ACK"], e => {
  x({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), B(["CHANNEL_PINS_ACK"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "CHANNEL_PINS_ACK",
    channelId: e.channel_id,
    timestamp: e.timestamp,
    version: e.version
  })
}), B(["CHANNEL_PINS_UPDATE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "CHANNEL_PINS_UPDATE",
    channelId: e.channel_id,
    lastPinTimestamp: e.last_pin_timestamp
  })
}), B(["CHANNEL_CREATE", "CHANNEL_DELETE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
  x({
    type: t,
    channel: (0, S.createChannelRecordFromServer)(e)
  })
}), k(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
  x({
    type: t,
    id: e.id,
    guildId: e.guild_id,
    status: e.status
  })
}), k(["CHANNEL_STATUSES"], (e, t) => {
  x({
    type: t,
    guildId: e.guild_id,
    channels: e.channels
  })
}), B(["CHANNEL_UPDATE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  P.add(e)
}), B(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
  let {
    newly_created: n,
    ...i
  } = e;
  x({
    type: t,
    isNewlyCreated: n,
    channel: (0, S.createChannelRecordFromServer)(i)
  })
}), B(["THREAD_LIST_SYNC"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "THREAD_LIST_SYNC",
    guildId: e.guild_id,
    threads: e.threads.map(e => {
      let t = m.default.getChannel(e.parent_id);
      return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, S.createChannelRecordFromServer)(e)
    }),
    mostRecentMessages: e.most_recent_messages,
    members: e.members ? r().map(e.members, I.default) : void 0,
    channelIds: e.channel_ids
  })
}), k(["THREAD_MEMBER_UPDATE"], e => {
  x({
    type: "THREAD_MEMBER_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    userId: e.user_id,
    flags: e.flags,
    muted: e.muted,
    muteConfig: e.mute_config,
    joinTimestamp: e.join_timestamp
  })
}), k(["THREAD_MEMBERS_UPDATE"], e => {
  var t;
  x({
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
}), k(["FORUM_UNREADS"], e => {
  !e.permission_denied && x({
    type: "FORUM_UNREADS",
    channelId: e.channel_id,
    threads: e.threads.map(e => ({
      threadId: e.thread_id,
      missing: e.missing,
      count: e.count
    }))
  })
}), k(["SOUNDBOARD_SOUNDS"], e => {
  U.add(e)
}), k(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
  let n = m.default.getBasicChannel(e.channel_id);
  x({
    type: t,
    channelId: e.channel_id,
    user: e.user,
    nick: e.nick,
    isMember: null != n
  })
}), B(["GUILD_CREATE"], e => "full" === e.data_mode ? null : m.ChannelLoader.loadGuildIds([e.id]), e => {
  if (e.unavailable) x({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  });
  else {
    let t = v.hydratePreviouslyUnavailableGuild(e);
    o.default.createGuild(t), x({
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
}), k(["GUILD_UPDATE"], e => {
  x({
    type: "GUILD_UPDATE",
    guild: e
  }), e.unavailable && x({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), k(["GUILD_DELETE"], e => {
  x({
    type: "GUILD_DELETE",
    guild: e
  }), e.geo_restricted ? x({
    type: "GUILD_GEO_RESTRICTED",
    guildId: e.id,
    icon: e.icon,
    name: e.name
  }) : e.unavailable && x({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), k(["GUILD_MEMBERS_CHUNK"], e => {
  s.default.Emitter.batched(() => {
    b.add({
      guildId: e.guild_id,
      members: e.members,
      notFound: e.not_found
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: i,
        client_status: r,
        activities: s,
        broadcast: a
      } = t;
      return j({
        guildId: e.guild_id,
        user: n,
        status: i,
        activities: s,
        clientStatus: r,
        broadcast: a
      })
    }), D.default.flush("GUILD_MEMBERS_CHUNK")
  })
}), k(["THREAD_MEMBER_LIST_UPDATE"], e => {
  s.default.Emitter.batched(() => {
    x({
      type: "THREAD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      threadId: e.thread_id,
      members: e.members
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: i,
        client_status: r,
        activities: s,
        broadcast: a
      } = t;
      return j({
        guildId: e.guild_id,
        user: n,
        status: i,
        activities: s,
        clientStatus: r,
        broadcast: a
      })
    }), D.default.flush()
  })
}), k(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
  x({
    type: t,
    guildId: e.guild_id,
    user: e.user,
    avatar: e.avatar,
    avatarDecoration: e.avatar_decoration_data,
    roles: e.roles,
    nick: e.nick,
    premiumSince: e.premium_since,
    isPending: e.pending,
    joinedAt: e.joined_at,
    communicationDisabledUntil: e.communication_disabled_until,
    unusualDMActivityUntil: e.unusual_dm_activity_until,
    flags: e.flags
  })
}), B(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), (e, t) => {
  x({
    type: t,
    guildId: e.guild_id,
    role: e.role
  })
}), B(["GUILD_ROLE_DELETE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "GUILD_ROLE_DELETE",
    guildId: e.guild_id,
    roleId: e.role_id,
    version: e.version
  })
}), k(["GUILD_EMOJIS_UPDATE"], e => {
  x({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e.guild_id,
    emojis: e.emojis
  })
}), k(["GUILD_STICKERS_UPDATE"], e => {
  x({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e.guild_id,
    stickers: e.stickers
  })
}), k(["GUILD_INTEGRATIONS_UPDATE"], e => {
  x({
    type: "GUILD_INTEGRATIONS_UPDATE",
    guildId: e.guild_id
  })
}), k(["INTEGRATION_CREATE"], e => {
  x({
    type: "INTEGRATION_CREATE",
    application: e.application,
    guildId: e.guild_id
  })
}), k(["INTEGRATION_DELETE"], e => {
  x({
    type: "INTEGRATION_DELETE",
    applicationId: e.application_id,
    guildId: e.guild_id
  })
}), k(["USER_UPDATE"], e => {
  x({
    type: "CURRENT_USER_UPDATE",
    user: e
  })
}), k(["USER_SETTINGS_PROTO_UPDATE"], e => {
  let t = (0, f.b64ToProtoWithType)(e.settings.type, e.settings.proto);
  if (null != t) {
    if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
      parsed: t,
      wire: e.settings.proto,
      type: e.settings.type
    }), Error("UserSettingsProto must not be a string");
    x({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        proto: t,
        type: e.settings.type
      },
      partial: e.partial
    })
  }
}), k(["USER_GUILD_SETTINGS_UPDATE"], e => {
  x({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: [e]
  })
}), k(["USER_CONNECTIONS_UPDATE"], () => {
  x({
    type: "USER_CONNECTIONS_UPDATE"
  })
}), k(["USER_REQUIRED_ACTION_UPDATE"], e => {
  x({
    type: "USER_REQUIRED_ACTION_UPDATE",
    requiredAction: e.required_action
  })
}), k(["USER_NOTE_UPDATE"], e => {
  x({
    type: "USER_NOTE_UPDATE",
    ...e
  })
}), k(["RELATIONSHIP_ADD"], e => {
  x({
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
}), k(["RELATIONSHIP_REMOVE"], e => {
  x({
    type: "RELATIONSHIP_REMOVE",
    relationship: e
  })
}), k(["RELATIONSHIP_UPDATE"], e => {
  x({
    type: "RELATIONSHIP_UPDATE",
    relationship: e
  })
}), k(["PRESENCE_UPDATE"], e => {
  j({
    guildId: e.guild_id,
    user: e.user,
    status: e.status,
    activities: e.activities,
    clientStatus: e.client_status,
    broadcast: e.broadcast
  })
}), k(["PRESENCES_REPLACE"], e => {
  x({
    type: "PRESENCES_REPLACE",
    presences: e
  })
}), k(["SESSIONS_REPLACE"], e => {
  x({
    type: "SESSIONS_REPLACE",
    sessions: Y(e)
  })
}), k(["VOICE_STATE_UPDATE"], e => {
  var t;
  null != e.member && F(e.guild_id, e.member.user, e.member), x({
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
}), k(["VOICE_SERVER_UPDATE"], e => {
  x({
    type: "VOICE_SERVER_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    endpoint: e.endpoint,
    token: e.token
  })
}), k(["CALL_CREATE"], e => {
  x({
    type: "CALL_CREATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    embeddedActivities: e.embedded_activities,
    region: e.region,
    ringing: e.ringing
  });
  let t = e.voice_states;
  null != t && x({
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
}), k(["CALL_UPDATE"], e => {
  x({
    type: "CALL_UPDATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    region: e.region,
    ringing: e.ringing
  })
}), k(["CALL_DELETE"], e => {
  x({
    type: "CALL_DELETE",
    channelId: e.channel_id,
    unavailable: e.unavailable
  })
}), k(["OAUTH2_TOKEN_REVOKE"], e => {
  x({
    type: "OAUTH2_TOKEN_REVOKE",
    accessToken: e.access_token
  })
}), k(["RECENT_MENTION_DELETE"], e => {
  x({
    type: "RECENT_MENTION_DELETE",
    id: e.message_id
  })
}), k(["FRIEND_SUGGESTION_CREATE"], e => {
  x({
    type: "FRIEND_SUGGESTION_CREATE",
    suggestion: e
  })
}), k(["FRIEND_SUGGESTION_DELETE"], e => {
  x({
    type: "FRIEND_SUGGESTION_DELETE",
    suggestedUserId: e.suggested_user_id
  })
}), k(["WEBHOOKS_UPDATE"], e => {
  x({
    type: "WEBHOOKS_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id
  })
}), k(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
  x({
    type: t,
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: e.emoji,
    colors: e.burst_colors,
    reactionType: e.type
  })
}), k(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
  x({
    type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: {
      id: e.answer_id,
      name: ""
    },
    reactionType: E.ReactionTypes.VOTE
  })
}), k(["MESSAGE_REACTION_REMOVE_ALL"], e => {
  x({
    type: "MESSAGE_REACTION_REMOVE_ALL",
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), k(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
  x({
    type: "MESSAGE_REACTION_REMOVE_EMOJI",
    channelId: e.channel_id,
    messageId: e.message_id,
    emoji: e.emoji
  })
}), k(["MESSAGE_REACTION_ADD_MANY"], e => {
  x({
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: e.channel_id,
    messageId: e.message_id,
    reactions: e.reactions
  })
}), k(["PAYMENT_UPDATE"], e => {
  x({
    type: "PAYMENT_UPDATE",
    payment: e
  })
}), k(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
  x({
    type: t,
    entitlement: e
  })
}), k(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  p.default.hasLayers() && (n("355467").fetchPaymentSources(), l.fetchSubscriptionPlansBySKUs(R.default.getFetchedSKUIDs()))
}), k(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  u.fetchCurrentUser(), p.default.hasLayers() && n("355467").fetchSubscriptions()
}), k(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
  x({
    type: "GUILD_BOOST_SLOT_CREATE",
    guildBoostSlot: h.default.createFromServer(e, g.default.getSubscriptionById(e.subscription_id))
  })
}), k(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
  x({
    type: "GUILD_BOOST_SLOT_UPDATE",
    guildBoostSlot: h.default.createFromServer(e, g.default.getSubscriptionById(e.subscription_id))
  })
}), k(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
  x({
    type: "BILLING_POPUP_BRIDGE_CALLBACK",
    paymentSourceType: e.payment_source_type,
    state: e.state,
    path: e.path,
    query: e.query
  })
}), k(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
  x({
    type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
    loadId: e.load_id
  })
}), k(["USER_PAYMENT_CLIENT_ADD"], e => {
  (0, L.getPurchaseTokenHash)().then(t => {
    let n = e.purchase_token_hash;
    n === t && x({
      type: "USER_PAYMENT_CLIENT_ADD",
      purchaseTokenHash: n,
      expiresAt: e.expires_at
    })
  })
}), k(["GUILD_MEMBER_LIST_UPDATE"], e => {
  s.default.Emitter.batched(() => {
    let t = t => {
      if (null == t.member) return;
      let {
        member: n
      } = t;
      if (F(e.guild_id, n.user, n), null == n.presence) return;
      let {
        presence: i
      } = n;
      j({
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
        item: r
      } = e;
      switch (n) {
        case "SYNC":
          i.forEach(t);
          break;
        case "UPDATE":
        case "INSERT":
          t(r)
      }
    }), D.default.flush(), x({
      type: "GUILD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      id: e.id,
      ops: e.ops,
      groups: e.groups,
      memberCount: e.member_count,
      onlineCount: e.online_count
    })
  })
}), k(["GIFT_CODE_UPDATE"], e => {
  x({
    type: "GIFT_CODE_UPDATE",
    uses: e.uses,
    code: e.code
  })
}), k(["GIFT_CODE_CREATE"], e => {
  x({
    type: "GIFT_CODE_CREATE",
    giftCode: e
  })
}), k(["USER_ACHIEVEMENT_UPDATE"], e => {
  x({
    type: "USER_ACHIEVEMENT_UPDATE",
    userAchievement: e
  })
}), k(["LIBRARY_APPLICATION_UPDATE"], e => {
  x({
    type: "LIBRARY_APPLICATION_UPDATE",
    libraryApplication: e
  })
}), k(["STREAM_CREATE"], e => {
  x({
    type: "STREAM_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), k(["STREAM_SERVER_UPDATE"], e => {
  x({
    type: "STREAM_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), k(["STREAM_UPDATE"], e => {
  x({
    type: "STREAM_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), k(["STREAM_DELETE"], e => {
  x({
    type: "STREAM_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), k(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
  x({
    type: "GENERIC_PUSH_NOTIFICATION_SENT",
    title: e.title,
    body: e.body,
    trackingType: e.tracking_type,
    icon: e.icon,
    route: e.route,
    tag: e.tag
  })
}), k(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
  x({
    type: "NOTIFICATION_CENTER_ITEM_CREATE",
    item: e
  })
}), k(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
  x({
    type: "NOTIFICATION_CENTER_ITEM_DELETE",
    id: e.id
  })
}), k(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
  x({
    type: "NOTIFICATION_CENTER_ITEMS_ACK",
    ids: [e.id],
    optimistic: !1
  })
}), k(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
  x({
    type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
    item_enum: e.item_enum
  })
}), k(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
  x({
    type: t,
    guildId: e.guild_id
  })
}), k(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
  x({
    type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
    guildId: e.guild_id,
    version: e.version
  })
}), k(["GUILD_JOIN_REQUEST_CREATE"], e => {
  x({
    type: "GUILD_JOIN_REQUEST_CREATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), k(["GUILD_JOIN_REQUEST_UPDATE"], e => {
  x({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), k(["GUILD_JOIN_REQUEST_DELETE"], e => {
  x({
    type: "GUILD_JOIN_REQUEST_DELETE",
    id: e.id,
    userId: e.user_id,
    guildId: e.guild_id
  })
}), k(["INTERACTION_CREATE"], e => {
  x({
    type: "INTERACTION_CREATE",
    interactionId: e.id,
    nonce: e.nonce
  })
}), k(["INTERACTION_SUCCESS"], e => {
  x({
    type: "INTERACTION_SUCCESS",
    interactionId: e.id,
    nonce: e.nonce
  })
}), k(["INTERACTION_FAILURE"], e => {
  x({
    type: "INTERACTION_FAILURE",
    nonce: e.nonce
  })
}), k(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
  x({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
    choices: e.choices,
    nonce: e.nonce
  })
}), k(["INTERACTION_MODAL_CREATE"], e => {
  x({
    type: "INTERACTION_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    components: (0, c.transformComponents)(e.components),
    nonce: e.nonce
  })
}), k(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
  x({
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
}), k(["STAGE_INSTANCE_CREATE"], e => {
  x({
    type: "STAGE_INSTANCE_CREATE",
    instance: e
  })
}), k(["STAGE_INSTANCE_UPDATE"], e => {
  x({
    type: "STAGE_INSTANCE_UPDATE",
    instance: e
  })
}), k(["STAGE_INSTANCE_DELETE"], e => {
  x({
    type: "STAGE_INSTANCE_DELETE",
    instance: e
  })
}), k(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_CREATE",
    guildScheduledEvent: e
  })
}), k(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_UPDATE",
    guildScheduledEvent: e
  })
}), k(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_DELETE",
    guildScheduledEvent: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
    eventException: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
    eventException: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
    eventException: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
    eventId: e.event_id
  })
}), k(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), k(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
  x({
    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), k(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
  x({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), k(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
  x({
    type: "GUILD_DIRECTORY_ENTRY_UPDATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), k(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
  x({
    type: "GUILD_DIRECTORY_ENTRY_DELETE",
    channelId: e.directory_channel_id,
    guildId: e.entity_id
  })
}), k(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
  x({
    type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
    guildId: e.guild_id,
    decisionId: e.decision_id,
    suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
  })
}), k(["VOICE_CHANNEL_EFFECT_SEND"], e => {
  x({
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
}), k(["GUILD_SOUNDBOARD_SOUND_CREATE"], e => {
  x({
    type: "GUILD_SOUNDBOARD_SOUND_CREATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new A.default(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), k(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
  x({
    type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new A.default(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), k(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
  x({
    type: "GUILD_SOUNDBOARD_SOUND_DELETE",
    guildId: e.guild_id,
    soundId: e.sound_id
  })
}), k(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
  x({
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
}), B(["EMBEDDED_ACTIVITY_UPDATE"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "EMBEDDED_ACTIVITY_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    embeddedActivity: e.embedded_activity,
    connections: e.connections,
    updateCode: e.update_code
  })
}), B(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  x({
    type: "EMBEDDED_ACTIVITY_UPDATE_V2",
    applicationId: e.application_id,
    launchId: e.launch_id,
    compositeInstanceId: e.composite_instance_id,
    location: e.location,
    participants: e.participants
  })
}), k(["AUTH_SESSION_CHANGE"], e => {
  x({
    type: "AUTH_SESSION_CHANGE",
    authSessionIdHash: e.auth_session_id_hash
  })
}), k(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
  x({
    type: "USER_CONNECTIONS_LINK_CALLBACK",
    provider: e.provider,
    callbackCode: e.callback_code,
    callbackState: e.callback_state
  })
}), k(["DELETED_ENTITY_IDS"], e => {
  x({
    type: "DELETED_ENTITY_IDS",
    ...e
  })
}), k(["CONSOLE_COMMAND_UPDATE"], e => {
  x({
    type: "CONSOLE_COMMAND_UPDATE",
    id: e.id,
    result: e.result,
    error: e.error
  })
}), B(["PASSIVE_UPDATE_V1"], e => m.ChannelLoader.loadGuildIds([e.guild_id]), e => {
  var t, n;
  x({
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
}), k(["PRIVATE_CHANNEL_INTEGRATION_CREATE"], e => {
  x({
    type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
    integration: e
  })
}), k(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], e => {
  x({
    type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
    integration: e
  })
}), k(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], e => {
  x({
    type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
    channelId: e.channel_id,
    applicationId: e.application_id
  })
}), k(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
  x({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
    guildId: e.guild_id,
    restrictions: e.restrictions
  })
}), k(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
  x({
    type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
    userTrialOfferId: e.user_trial_offer_id,
    recipientId: e.recipient_id
  })
}), k(["SPEED_TEST_CREATE"], e => {
  x({
    type: "SPEED_TEST_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), k(["SPEED_TEST_SERVER_UPDATE"], e => {
  x({
    type: "SPEED_TEST_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), k(["SPEED_TEST_UPDATE"], e => {
  x({
    type: "SPEED_TEST_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), k(["SPEED_TEST_DELETE"], e => {
  x({
    type: "SPEED_TEST_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), k(["LAST_MESSAGES"], e => {
  x({
    type: "MESSAGE_PREVIEWS_LOADED",
    guildId: e.guild_id,
    messages: e.messages
  })
}), k(["AUTHENTICATOR_UPDATE"], e => {
  x({
    type: "AUTHENTICATOR_UPDATE",
    credential: e
  })
}), k(["AUTHENTICATOR_CREATE"], e => {
  x({
    type: "AUTHENTICATOR_CREATE",
    credential: e
  })
}), k(["AUTHENTICATOR_DELETE"], e => {
  x({
    type: "AUTHENTICATOR_DELETE",
    credential: e
  })
}), k(["NOTIFICATION_SETTINGS_UPDATE"], e => {
  x({
    type: "NOTIFICATION_SETTINGS_UPDATE",
    settings: {
      flags: e.flags
    }
  })
}), k(["GAME_INVITE_CREATE"], e => {
  x({
    type: "GAME_INVITE_CREATE",
    gameInvite: e
  })
}), k(["GAME_INVITE_DELETE"], e => {
  x({
    type: "GAME_INVITE_DELETE",
    inviteId: e.invite_id
  })
}), k(["GAME_INVITE_DELETE_MANY"], e => {
  x({
    type: "GAME_INVITE_DELETE_MANY",
    inviteIds: e.invite_ids
  })
}), k(["CONVERSATION_SUMMARY_UPDATE"], e => {
  x({
    type: "CONVERSATION_SUMMARY_UPDATE",
    ...e
  })
}), k(["PREMIUM_MARKETING_PREVIEW"], e => {
  x({
    type: "PREMIUM_MARKETING_PREVIEW",
    properties: e.properties
  })
}), k(["USER_APPLICATION_UPDATE"], e => {
  x({
    type: "USER_APPLICATION_UPDATE",
    applicationId: e.application_id
  })
}), k(["USER_APPLICATION_REMOVE"], e => {
  x({
    type: "USER_APPLICATION_REMOVE",
    applicationId: e.application_id
  })
}), k(["DM_SETTINGS_UPSELL_SHOW"], e => {
  x({
    type: "DM_SETTINGS_UPSELL_SHOW",
    guildId: e.guild_id
  })
}), k(["CONTENT_INVENTORY_INBOX_STALE"], e => {
  x({
    type: "CONTENT_INVENTORY_INBOX_STALE",
    refreshAfterMs: e.refresh_after_ms
  })
})