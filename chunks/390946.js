"use strict";
n.r(t), n.d(t, {
  hydrateReadySupplementalPayload: function() {
    return A
  },
  preloadReadyPayloadData: function() {
    return y
  },
  hydrateReadyPayloadPrioritized: function() {
    return N
  },
  hydrateInitialGuild: function() {
    return D
  },
  hydratePreviouslyUnavailableGuild: function() {
    return L
  }
}), n("424973"), n("222007"), n("70102");
var i = n("627445"),
  s = n.n(i),
  r = n("917351"),
  a = n.n(r),
  o = n("802493"),
  l = n("105059"),
  u = n("849365"),
  d = n("860255"),
  c = n("723939"),
  f = n("70754"),
  _ = n("605250"),
  h = n("385976"),
  g = n("364685"),
  m = n("233069"),
  E = n("305961"),
  p = n("660478"),
  v = n("665618");
let S = new _.default("ReadyPayloadUtils"),
  T = {},
  I = null,
  C = {};

function A(e, t) {
  var n;
  let {
    guilds: i,
    merged_members: s,
    merged_presences: r,
    ...a
  } = e, o = O(C, null == r ? void 0 : r.friends), l = null !== (n = null == i ? void 0 : i.map((e, t) => {
    let n = O(C, null == r ? void 0 : r.guilds[t]),
      i = O(C, null == s ? void 0 : s[t]);
    return {
      ...e,
      unavailable: void 0 === e.voice_states,
      presences: n,
      members: i
    }
  })) && void 0 !== n ? n : [], u = R(t, i, e => ({
    id: e.id,
    members: e.members,
    presences: e.presences,
    embedded_activities: e.embedded_activities,
    voice_states: e.voice_states,
    unavailable: !1
  }));
  return null != u && l.push(u), C = {}, {
    ...a,
    presences: o,
    guilds: l
  }
}

function y() {
  let e = o.default.database(),
    t = (0, f.isCacheEnabled)() ? l.default.getCommittedVersions() : Promise.resolve({}),
    n = (0, f.isCacheEnabled)() ? d.default.getGuildIds() : Promise.resolve(new Set),
    i = null != e ? u.default.okAsync(e) : Promise.resolve(!1);
  return Promise.all([t, n, i]).then(e => {
    let [t, n, i] = e;
    return {
      guildVersions: t,
      guildChannels: n,
      databaseOk: i
    }
  })
}

function N(e, t, n) {
  var i;
  let {
    users: r,
    relationships: l,
    private_channels: u,
    merged_members: d,
    guilds: f,
    ..._
  } = e;
  (function(e) {
    let t = o.default.database();
    null != t && !1 === e.databaseOk && c.default.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"), T = {};
    let n = Object.values(E.default.getGuilds()),
      i = h.default.getGuilds(),
      s = g.default.getRawStickersByGuild(),
      r = p.default.getReadStatesByChannel();
    for (let t of n) {
      var a, l, u;
      t.id in e.guildVersions && e.guildChannels.has(t.id) && (T[t.id] = {
        properties: v.toServer(t),
        roles: t.roles,
        emojis: null !== (l = null === (a = i[t.id]) || void 0 === a ? void 0 : a.rawEmojis) && void 0 !== l ? l : null,
        stickers: null !== (u = s.get(t.id)) && void 0 !== u ? u : null,
        readStates: r
      })
    }
  })(n), C = a.keyBy(r, e => e.id);
  let m = O(C, l);
  null == u || u.forEach(e => {
    let t = e.recipient_ids;
    null != t && (e.recipients = t.map(e => (s(null != C[e], "Missing user in compressed ready payload"), C[e]))), delete e.recipient_ids
  });
  let S = null !== (i = null == f ? void 0 : f.map((e, t) => !0 === e.unavailable ? e : (e.members = O(C, null == d ? void 0 : d[t]), b(e)))) && void 0 !== i ? i : [],
    I = R(t, f, e => b(e));
  return null != I && S.push(I), {
    ..._,
    users: r,
    presences: [],
    relationships: m,
    guilds: S,
    private_channels: null != u ? u : []
  }
}

function R(e, t, n) {
  return null == I || I.identifyTime !== e || null != t && t.some(e => e.id === I.guild.id) ? null : n(I.guild)
}

function D(e, t) {
  var n, i, s;
  let r = E.default.getGuild(e.id),
    a = L(e, null == r ? void 0 : {
      properties: v.toServer(r),
      roles: r.roles,
      emojis: null !== (i = null === (n = h.default.getGuilds()[r.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== i ? i : null,
      stickers: null !== (s = g.default.getRawStickersByGuild().get(r.id)) && void 0 !== s ? s : null,
      readStates: {}
    });
  return I = {
    guild: e,
    identifyTime: t
  }, a
}

function O(e, t) {
  let n = [];
  return null == t || t.forEach(t => {
    if (null == t) return;
    let i = t.user_id;
    null != i && (s(null != e[i], "Missing user[".concat(i, "] in compressed ready payload")), t.user = e[i]), delete t.user_id, n.push(t)
  }), n
}

function P(e) {
  let t = T[e];
  return delete T[e], t
}

function b(e) {
  var t, n, i, s, r, a, o, l, u, d, c, f;
  let _ = P(e.id);
  if ("partial" !== e.data_mode) return {
    id: e.id,
    dataMode: e.data_mode,
    emojis: e.emojis,
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: e.properties,
    roles: e.roles,
    stage_instances: e.stage_instances,
    stickers: e.stickers,
    threads: null !== (s = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== s ? s : [],
    threadMessages: M(e.threads),
    channels: e.channels.map(t => (t.guild_id = e.id, (0, m.createChannelRecordFromServer)(t, e.id))),
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  };
  if (null == _) throw S.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
  return {
    id: e.id,
    dataMode: e.data_mode,
    channels: null,
    channelUpdates: {
      writes: null !== (r = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
      deletes: null !== (a = e.partial_updates.deleted_channel_ids) && void 0 !== a ? a : []
    },
    channelTimestampUpdates: e.channel_updates,
    emojis: null == _.emojis ? null : U(_.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
    emojiUpdates: {
      writes: null !== (o = e.partial_updates.emojis) && void 0 !== o ? o : [],
      deletes: null !== (l = e.partial_updates.deleted_emoji_ids) && void 0 !== l ? l : []
    },
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: null !== (u = e.properties) && void 0 !== u ? u : _.properties,
    roles: v.filterRoleDeletes(e.id, _.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: null == _.stickers ? null : U(_.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    stickerUpdates: {
      writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
      deletes: null !== (c = e.partial_updates.deleted_sticker_ids) && void 0 !== c ? c : []
    },
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null !== (f = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== f ? f : [],
    threadMessages: M(e.threads),
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function L(e, t) {
  var n, i, s, r, a, o, l, u, d, c, f, _;
  if (null == t && (t = P(e.id)), "partial" !== e.data_mode) return {
    id: e.id,
    emojis: e.emojis,
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: e.properties,
    roles: e.roles,
    stage_instances: e.stage_instances,
    stickers: e.stickers,
    threads: null !== (r = null === (s = e.threads) || void 0 === s ? void 0 : s.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== r ? r : [],
    threadMessages: M(e.threads),
    channels: e.channels.map(t => (t.guild_id = e.id, (0, m.createChannelRecordFromServer)(t, e.id))),
    presences: e.presences,
    embedded_activities: e.embedded_activities,
    voice_states: e.voice_states,
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  };
  if (null == t) throw S.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
  return {
    id: e.id,
    channels: null,
    channelUpdates: {
      writes: null !== (a = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== a ? a : [],
      deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
    },
    channelTimestampUpdates: e.channel_updates,
    embedded_activities: e.embedded_activities,
    emojis: null == t.emojis ? null : U(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
    emojiUpdates: {
      writes: null !== (l = e.partial_updates.emojis) && void 0 !== l ? l : [],
      deletes: null !== (u = e.partial_updates.deleted_emoji_ids) && void 0 !== u ? u : []
    },
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    presences: e.presences,
    properties: null !== (d = e.properties) && void 0 !== d ? d : t.properties,
    roles: v.filterRoleDeletes(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: null == t.stickers ? null : U(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    stickerUpdates: {
      writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
      deletes: null !== (f = e.partial_updates.deleted_sticker_ids) && void 0 !== f ? f : []
    },
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null !== (_ = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, m.createChannelRecordFromServer)(t, e.id))) && void 0 !== _ ? _ : [],
    threadMessages: M(e.threads),
    voice_states: e.voice_states,
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function M(e) {
  let t = [];
  if (null != e)
    for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
  return t
}

function U(e, t, n) {
  t = null != t ? t : [];
  let i = new Set((null != n ? n : []).concat(t.map(e => e.id)));
  return e.filter(e => !i.has(e.id)).concat(t)
}