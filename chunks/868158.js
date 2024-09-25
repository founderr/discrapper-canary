n.d(t, {
    Eb: function () {
        return y;
    },
    Fx: function () {
        return D;
    },
    IM: function () {
        return b;
    },
    J2: function () {
        return x;
    },
    r$: function () {
        return C;
    }
});
var r = n(653041);
var i = n(47120);
var a = n(411104);
var o = n(512722),
    s = n.n(o),
    l = n(392711),
    u = n.n(l),
    c = n(287328),
    d = n(406966),
    _ = n(795513),
    E = n(591526),
    f = n(261875),
    h = n(768433),
    p = n(710845),
    m = n(339085),
    I = n(926491),
    T = n(131704),
    g = n(430824),
    S = n(306680),
    A = n(411198);
let v = new p.Z('ReadyPayloadUtils'),
    N = {},
    O = null,
    R = {};
function C(e, t) {
    var n;
    let { guilds: r, merged_members: i, merged_presences: a, ...o } = e,
        s = M(R, null == a ? void 0 : a.friends),
        l =
            null !==
                (n =
                    null == r
                        ? void 0
                        : r.map((e, t) => {
                              let n = M(R, null == a ? void 0 : a.guilds[t]),
                                  r = M(R, null == i ? void 0 : i[t]);
                              return {
                                  ...e,
                                  unavailable: void 0 === e.voice_states,
                                  presences: n,
                                  members: r
                              };
                          })) && void 0 !== n
                ? n
                : [],
        u = L(t, r, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1
        }));
    return (
        null != u && l.push(u),
        (R = {}),
        {
            ...o,
            presences: s,
            guilds: l
        }
    );
}
function y() {
    let e = c.Z.database(),
        t = (0, h.O)() ? d.Z.getCommittedVersions() : Promise.resolve({}),
        n = (0, h.O)() ? E.Z.getGuildIds() : Promise.resolve(new Set());
    return Promise.all([t, n, null != e ? _.Z.okAsync(e) : Promise.resolve(!1)]).then((e) => {
        let [t, n, r] = e;
        return {
            guildVersions: t,
            guildChannels: n,
            databaseOk: r
        };
    });
}
function b(e, t, n) {
    var r;
    let { users: i, relationships: a, private_channels: o, merged_members: l, guilds: c, ...d } = e;
    U(n);
    let _ = M((R = u().keyBy(i, (e) => e.id)), a);
    null == o ||
        o.forEach((e) => {
            let t = e.recipient_ids;
            null != t && (e.recipients = t.map((e) => (s()(null != R[e], 'Missing user in compressed ready payload'), R[e]))), delete e.recipient_ids;
        });
    let E = null !== (r = null == c ? void 0 : c.map((e, t) => (!0 === e.unavailable ? e : ((e.members = M(R, null == l ? void 0 : l[t])), w(e))))) && void 0 !== r ? r : [],
        f = L(t, c, (e) => w(e));
    return (
        null != f && E.push(f),
        {
            ...d,
            users: i,
            presences: [],
            relationships: _,
            guilds: E,
            private_channels: null != o ? o : []
        }
    );
}
function L(e, t, n) {
    return null == O || O.identifyTime !== e || (null != t && t.some((e) => e.id === O.guild.id)) ? null : n(O.guild);
}
function D(e, t) {
    var n, r, i;
    let a = g.Z.getGuild(e.id),
        o = x(
            e,
            null == a
                ? void 0
                : {
                      properties: A.tK(a),
                      roles: g.Z.getRoles(a.id),
                      emojis: null !== (r = null === (n = m.ZP.getGuilds()[a.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== r ? r : null,
                      stickers: null !== (i = I.Z.getRawStickersByGuild().get(a.id)) && void 0 !== i ? i : null,
                      readStates: {}
                  }
        );
    return (
        (O = {
            guild: e,
            identifyTime: t
        }),
        o
    );
}
function M(e, t) {
    let n = [];
    return (
        null == t ||
            t.forEach((t) => {
                if (null == t) return;
                let r = t.user_id;
                null != r && (s()(null != e[r], 'Missing user['.concat(r, '] in compressed ready payload')), (t.user = e[r])), delete t.user_id, n.push(t);
            }),
        n
    );
}
function P(e) {
    let t = N[e];
    return delete N[e], t;
}
function U(e) {
    null != c.Z.database() && !1 === e.databaseOk && f.Z.replaceDisableAllDatabases('ReadyPayloadUtils: database was not ok'), (N = {});
    let t = Object.values(g.Z.getGuilds()),
        n = m.ZP.getGuilds(),
        r = I.Z.getRawStickersByGuild(),
        i = S.ZP.getReadStatesByChannel();
    for (let l of t) {
        var a, o, s;
        if (l.id in e.guildVersions && !!e.guildChannels.has(l.id))
            N[l.id] = {
                properties: A.tK(l),
                roles: g.Z.getRoles(l.id),
                emojis: null !== (o = null === (a = n[l.id]) || void 0 === a ? void 0 : a.rawEmojis) && void 0 !== o ? o : null,
                stickers: null !== (s = r.get(l.id)) && void 0 !== s ? s : null,
                readStates: i
            };
    }
}
function w(e) {
    var t, n, r, i, a, o, s, l, u, c, d, _;
    let E = P(e.id);
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
            threads: null !== (i = null === (r = e.threads) || void 0 === r ? void 0 : r.map((t) => (0, T.q_)(t, e.id))) && void 0 !== i ? i : [],
            threadMessages: G(e.threads),
            channels: e.channels.map((t) => ((t.guild_id = e.id), (0, T.q_)(t, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == E) throw (v.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: null,
        channelUpdates: {
            writes: null !== (a = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map((t) => (0, T.q_)(t, e.id))) && void 0 !== a ? a : [],
            deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: null == E.emojis ? null : k(E.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null !== (s = e.partial_updates.emojis) && void 0 !== s ? s : [],
            deletes: null !== (l = e.partial_updates.deleted_emoji_ids) && void 0 !== l ? l : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        properties: null !== (u = e.properties) && void 0 !== u ? u : null,
        roles: A.EO(e.id, E.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == E.stickers ? null : k(E.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
            deletes: null !== (d = e.partial_updates.deleted_sticker_ids) && void 0 !== d ? d : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (_ = null === (n = e.threads) || void 0 === n ? void 0 : n.map((t) => (0, T.q_)(t, e.id))) && void 0 !== _ ? _ : [],
        threadMessages: G(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function x(e, t) {
    var n, r, i, a, o, s, l, u, c, d, _, E;
    if ((null == t && (t = P(e.id)), 'partial' !== e.data_mode))
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
            threads: null !== (a = null === (i = e.threads) || void 0 === i ? void 0 : i.map((t) => (0, T.q_)(t, e.id))) && void 0 !== a ? a : [],
            threadMessages: G(e.threads),
            channels: e.channels.map((t) => ((t.guild_id = e.id), (0, T.q_)(t, e.id))),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == t) throw (v.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: post_ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        channels: null,
        channelUpdates: {
            writes: null !== (o = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map((t) => (0, T.q_)(t, e.id))) && void 0 !== o ? o : [],
            deletes: null !== (s = e.partial_updates.deleted_channel_ids) && void 0 !== s ? s : []
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: null == t.emojis ? null : k(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
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
        roles: A.EO(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == t.stickers ? null : k(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
            deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (E = null === (r = e.threads) || void 0 === r ? void 0 : r.map((t) => (0, T.q_)(t, e.id))) && void 0 !== E ? E : [],
        threadMessages: G(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function G(e) {
    let t = [];
    if (null != e) for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
function k(e, t, n) {
    t = null != t ? t : [];
    let r = new Set((null != n ? n : []).concat(t.map((e) => e.id)));
    return e.filter((e) => !r.has(e.id)).concat(t);
}
