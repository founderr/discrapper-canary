r.d(n, {
    Eb: function () {
        return O;
    },
    Fx: function () {
        return x;
    },
    IM: function () {
        return D;
    },
    J2: function () {
        return U;
    },
    r$: function () {
        return R;
    }
});
var i = r(653041);
var a = r(47120);
var s = r(411104);
var o = r(512722),
    l = r.n(o),
    u = r(392711),
    c = r.n(u),
    d = r(287328),
    f = r(406966),
    _ = r(795513),
    h = r(591526),
    p = r(261875),
    m = r(768433),
    g = r(710845),
    E = r(339085),
    v = r(926491),
    I = r(131704),
    T = r(430824),
    b = r(306680),
    y = r(411198);
let S = new g.Z('ReadyPayloadUtils'),
    A = {},
    N = null,
    C = {};
function R(e, n) {
    var r;
    let { guilds: i, merged_members: a, merged_presences: s, ...o } = e,
        l = w(C, null == s ? void 0 : s.friends),
        u =
            null !==
                (r =
                    null == i
                        ? void 0
                        : i.map((e, n) => {
                              let r = w(C, null == s ? void 0 : s.guilds[n]),
                                  i = w(C, null == a ? void 0 : a[n]);
                              return {
                                  ...e,
                                  unavailable: void 0 === e.voice_states,
                                  presences: r,
                                  members: i
                              };
                          })) && void 0 !== r
                ? r
                : [],
        c = L(n, i, (e) => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            unavailable: !1
        }));
    return (
        null != c && u.push(c),
        (C = {}),
        {
            ...o,
            presences: l,
            guilds: u
        }
    );
}
function O() {
    let e = d.Z.database(),
        n = (0, m.O)() ? f.Z.getCommittedVersions() : Promise.resolve({}),
        r = (0, m.O)() ? h.Z.getGuildIds() : Promise.resolve(new Set());
    return Promise.all([n, r, null != e ? _.Z.okAsync(e) : Promise.resolve(!1)]).then((e) => {
        let [n, r, i] = e;
        return {
            guildVersions: n,
            guildChannels: r,
            databaseOk: i
        };
    });
}
function D(e, n, r) {
    var i;
    let { users: a, relationships: s, private_channels: o, merged_members: u, guilds: d, ...f } = e;
    M(r);
    let _ = w((C = c().keyBy(a, (e) => e.id)), s);
    null == o ||
        o.forEach((e) => {
            let n = e.recipient_ids;
            null != n && (e.recipients = n.map((e) => (l()(null != C[e], 'Missing user in compressed ready payload'), C[e]))), delete e.recipient_ids;
        });
    let h = null !== (i = null == d ? void 0 : d.map((e, n) => (!0 === e.unavailable ? e : ((e.members = w(C, null == u ? void 0 : u[n])), k(e))))) && void 0 !== i ? i : [],
        p = L(n, d, (e) => k(e));
    return (
        null != p && h.push(p),
        {
            ...f,
            users: a,
            presences: [],
            relationships: _,
            guilds: h,
            private_channels: null != o ? o : []
        }
    );
}
function L(e, n, r) {
    return null == N || N.identifyTime !== e || (null != n && n.some((e) => e.id === N.guild.id)) ? null : r(N.guild);
}
function x(e, n) {
    var r, i, a;
    let s = T.Z.getGuild(e.id),
        o = U(
            e,
            null == s
                ? void 0
                : {
                      properties: y.tK(s),
                      roles: T.Z.getRoles(s.id),
                      emojis: null !== (i = null === (r = E.ZP.getGuilds()[s.id]) || void 0 === r ? void 0 : r.rawEmojis) && void 0 !== i ? i : null,
                      stickers: null !== (a = v.Z.getRawStickersByGuild().get(s.id)) && void 0 !== a ? a : null,
                      readStates: {}
                  }
        );
    return (
        (N = {
            guild: e,
            identifyTime: n
        }),
        o
    );
}
function w(e, n) {
    let r = [];
    return (
        null == n ||
            n.forEach((n) => {
                if (null == n) return;
                let i = n.user_id;
                null != i && (l()(null != e[i], 'Missing user['.concat(i, '] in compressed ready payload')), (n.user = e[i])), delete n.user_id, r.push(n);
            }),
        r
    );
}
function P(e) {
    let n = A[e];
    return delete A[e], n;
}
function M(e) {
    null != d.Z.database() && !1 === e.databaseOk && p.Z.replaceDisableAllDatabases('ReadyPayloadUtils: database was not ok'), (A = {});
    let n = Object.values(T.Z.getGuilds()),
        r = E.ZP.getGuilds(),
        i = v.Z.getRawStickersByGuild(),
        a = b.ZP.getReadStatesByChannel();
    for (let u of n) {
        var s, o, l;
        if (u.id in e.guildVersions && !!e.guildChannels.has(u.id))
            A[u.id] = {
                properties: y.tK(u),
                roles: T.Z.getRoles(u.id),
                emojis: null !== (o = null === (s = r[u.id]) || void 0 === s ? void 0 : s.rawEmojis) && void 0 !== o ? o : null,
                stickers: null !== (l = i.get(u.id)) && void 0 !== l ? l : null,
                readStates: a
            };
    }
}
function k(e) {
    var n, r, i, a, s, o, l, u, c, d, f, _;
    let h = P(e.id);
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
            threads: null !== (a = null === (i = e.threads) || void 0 === i ? void 0 : i.map((n) => (0, I.q_)(n, e.id))) && void 0 !== a ? a : [],
            threadMessages: B(e.threads),
            channels: e.channels.map((n) => ((n.guild_id = e.id), (0, I.q_)(n, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == h) throw (S.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: null,
        channelUpdates: {
            writes: null !== (s = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map((n) => (0, I.q_)(n, e.id))) && void 0 !== s ? s : [],
            deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: null == h.emojis ? null : G(h.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
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
        properties: null !== (c = e.properties) && void 0 !== c ? c : null,
        roles: y.EO(e.id, h.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == h.stickers ? null : G(h.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
            deletes: null !== (f = e.partial_updates.deleted_sticker_ids) && void 0 !== f ? f : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (_ = null === (r = e.threads) || void 0 === r ? void 0 : r.map((n) => (0, I.q_)(n, e.id))) && void 0 !== _ ? _ : [],
        threadMessages: B(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function U(e, n) {
    var r, i, a, s, o, l, u, c, d, f, _, h;
    if ((null == n && (n = P(e.id)), 'partial' !== e.data_mode))
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
            threads: null !== (s = null === (a = e.threads) || void 0 === a ? void 0 : a.map((n) => (0, I.q_)(n, e.id))) && void 0 !== s ? s : [],
            threadMessages: B(e.threads),
            channels: e.channels.map((n) => ((n.guild_id = e.id), (0, I.q_)(n, e.id))),
            presences: e.presences,
            activity_instances: e.activity_instances,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == n) throw (S.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: post_ready)')), Error('Guild data was missing from store, but hash was still available.'));
    return {
        id: e.id,
        channels: null,
        channelUpdates: {
            writes: null !== (o = null === (r = e.partial_updates.channels) || void 0 === r ? void 0 : r.map((n) => (0, I.q_)(n, e.id))) && void 0 !== o ? o : [],
            deletes: null !== (l = e.partial_updates.deleted_channel_ids) && void 0 !== l ? l : []
        },
        channelTimestampUpdates: e.channel_updates,
        activity_instances: e.activity_instances,
        emojis: null == n.emojis ? null : G(n.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null !== (u = e.partial_updates.emojis) && void 0 !== u ? u : [],
            deletes: null !== (c = e.partial_updates.deleted_emoji_ids) && void 0 !== c ? c : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        presences: e.presences,
        properties: null !== (d = e.properties) && void 0 !== d ? d : n.properties,
        roles: y.EO(e.id, n.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == n.stickers ? null : G(n.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (f = e.partial_updates.stickers) && void 0 !== f ? f : [],
            deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (h = null === (i = e.threads) || void 0 === i ? void 0 : i.map((n) => (0, I.q_)(n, e.id))) && void 0 !== h ? h : [],
        threadMessages: B(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function B(e) {
    let n = [];
    if (null != e) for (let r of e) null != r.most_recent_message && n.push(r.most_recent_message);
    return n;
}
function G(e, n, r) {
    n = null != n ? n : [];
    let i = new Set((null != r ? r : []).concat(n.map((e) => e.id)));
    return e.filter((e) => !i.has(e.id)).concat(n);
}
