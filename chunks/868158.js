n.d(t, {
    Eb: function () {
        return A;
    },
    Fx: function () {
        return R;
    },
    IM: function () {
        return N;
    },
    J2: function () {
        return x;
    },
    r$: function () {
        return y;
    }
}),
    n(653041),
    n(47120),
    n(411104);
var r = n(512722),
    i = n.n(r),
    a = n(392711),
    s = n.n(a),
    o = n(287328),
    l = n(406966),
    u = n(795513),
    c = n(591526),
    d = n(261875),
    f = n(768433),
    _ = n(710845),
    p = n(339085),
    h = n(926491),
    m = n(131704),
    g = n(430824),
    E = n(306680),
    v = n(411198);
let I = new _.Z('ReadyPayloadUtils'),
    b = {},
    S = null,
    T = {};
function y(e, t) {
    var n;
    let { guilds: r, merged_members: i, merged_presences: a, ...s } = e,
        o = O(T, null == a ? void 0 : a.friends),
        l =
            null !==
                (n =
                    null == r
                        ? void 0
                        : r.map((e, t) => {
                              let n = O(T, null == a ? void 0 : a.guilds[t]),
                                  r = O(T, null == i ? void 0 : i[t]);
                              return {
                                  ...e,
                                  unavailable: void 0 === e.voice_states,
                                  presences: n,
                                  members: r
                              };
                          })) && void 0 !== n
                ? n
                : [],
        u = C(t, r, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1
        }));
    return (
        null != u && l.push(u),
        (T = {}),
        {
            ...s,
            presences: o,
            guilds: l
        }
    );
}
function A() {
    let e = o.Z.database(),
        t = (0, f.O)() ? l.Z.getCommittedVersions() : Promise.resolve({}),
        n = (0, f.O)() ? c.Z.getGuildIds() : Promise.resolve(new Set());
    return Promise.all([t, n, null != e ? u.Z.okAsync(e) : Promise.resolve(!1)]).then((e) => {
        let [t, n, r] = e;
        return {
            guildVersions: t,
            guildChannels: n,
            databaseOk: r
        };
    });
}
function N(e, t, n) {
    var r;
    let { users: a, relationships: l, private_channels: u, merged_members: c, guilds: f, ..._ } = e;
    (function (e) {
        null != o.Z.database() && !1 === e.databaseOk && d.Z.replaceDisableAllDatabases('ReadyPayloadUtils: database was not ok'), (b = {});
        let t = Object.values(g.Z.getGuilds()),
            n = p.ZP.getGuilds(),
            r = h.Z.getRawStickersByGuild(),
            i = E.ZP.getReadStatesByChannel();
        for (let o of t) {
            var a, s, l;
            if (o.id in e.guildVersions && !!e.guildChannels.has(o.id))
                b[o.id] = {
                    properties: v.tK(o),
                    roles: g.Z.getRoles(o.id),
                    emojis: null !== (s = null === (a = n[o.id]) || void 0 === a ? void 0 : a.rawEmojis) && void 0 !== s ? s : null,
                    stickers: null !== (l = r.get(o.id)) && void 0 !== l ? l : null,
                    readStates: i
                };
        }
    })(n);
    let m = O((T = s().keyBy(a, (e) => e.id)), l);
    null == u ||
        u.forEach((e) => {
            let t = e.recipient_ids;
            null != t && (e.recipients = t.map((e) => (i()(null != T[e], 'Missing user in compressed ready payload'), T[e]))), delete e.recipient_ids;
        });
    let I = null !== (r = null == f ? void 0 : f.map((e, t) => (!0 === e.unavailable ? e : ((e.members = O(T, null == c ? void 0 : c[t])), L(e))))) && void 0 !== r ? r : [],
        S = C(t, f, (e) => L(e));
    return (
        null != S && I.push(S),
        {
            ..._,
            users: a,
            presences: [],
            relationships: m,
            guilds: I,
            private_channels: null != u ? u : []
        }
    );
}
function C(e, t, n) {
    return null == S || S.identifyTime !== e || (null != t && t.some((e) => e.id === S.guild.id)) ? null : n(S.guild);
}
function R(e, t) {
    var n, r, i;
    let a = g.Z.getGuild(e.id),
        s = x(
            e,
            null == a
                ? void 0
                : {
                      properties: v.tK(a),
                      roles: g.Z.getRoles(a.id),
                      emojis: null !== (r = null === (n = p.ZP.getGuilds()[a.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== r ? r : null,
                      stickers: null !== (i = h.Z.getRawStickersByGuild().get(a.id)) && void 0 !== i ? i : null,
                      readStates: {}
                  }
        );
    return (
        (S = {
            guild: e,
            identifyTime: t
        }),
        s
    );
}
function O(e, t) {
    let n = [];
    return (
        null == t ||
            t.forEach((t) => {
                if (null == t) return;
                let r = t.user_id;
                null != r && (i()(null != e[r], 'Missing user['.concat(r, '] in compressed ready payload')), (t.user = e[r])), delete t.user_id, n.push(t);
            }),
        n
    );
}
function D(e) {
    let t = b[e];
    return delete b[e], t;
}
function L(e) {
    var t, n, r, i, a, s, o, l, u, c, d, f;
    let _ = D(e.id);
    if ('partial' !== e.data_mode)
        return {
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
            threads: null !== (i = null === (r = e.threads) || void 0 === r ? void 0 : r.map((t) => (0, m.q_)(t, e.id))) && void 0 !== i ? i : [],
            threadMessages: w(e.threads),
            channels: e.channels.map((t) => ((t.guild_id = e.id), (0, m.q_)(t, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == _) throw (I.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: null,
        channelUpdates: {
            writes: null !== (a = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map((t) => (0, m.q_)(t, e.id))) && void 0 !== a ? a : [],
            deletes: null !== (s = e.partial_updates.deleted_channel_ids) && void 0 !== s ? s : []
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: null == _.emojis ? null : M(_.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
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
        properties: null !== (u = e.properties) && void 0 !== u ? u : null,
        roles: v.EO(e.id, _.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == _.stickers ? null : M(_.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
            deletes: null !== (d = e.partial_updates.deleted_sticker_ids) && void 0 !== d ? d : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (f = null === (n = e.threads) || void 0 === n ? void 0 : n.map((t) => (0, m.q_)(t, e.id))) && void 0 !== f ? f : [],
        threadMessages: w(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function x(e, t) {
    var n, r, i, a, s, o, l, u, c, d, f, _;
    if ((null == t && (t = D(e.id)), 'partial' !== e.data_mode))
        return {
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
            threads: null !== (a = null === (i = e.threads) || void 0 === i ? void 0 : i.map((t) => (0, m.q_)(t, e.id))) && void 0 !== a ? a : [],
            threadMessages: w(e.threads),
            channels: e.channels.map((t) => ((t.guild_id = e.id), (0, m.q_)(t, e.id))),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == t) throw (I.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: post_ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        channels: null,
        channelUpdates: {
            writes: null !== (s = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map((t) => (0, m.q_)(t, e.id))) && void 0 !== s ? s : [],
            deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: null == t.emojis ? null : M(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
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
        properties: null !== (c = e.properties) && void 0 !== c ? c : t.properties,
        roles: v.EO(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == t.stickers ? null : M(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
            deletes: null !== (f = e.partial_updates.deleted_sticker_ids) && void 0 !== f ? f : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (_ = null === (r = e.threads) || void 0 === r ? void 0 : r.map((t) => (0, m.q_)(t, e.id))) && void 0 !== _ ? _ : [],
        threadMessages: w(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function w(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
function M(e, t, n) {
    t = null != t ? t : [];
    let r = new Set((null != n ? n : []).concat(t.map((e) => e.id)));
    return e.filter((e) => !r.has(e.id)).concat(t);
}
