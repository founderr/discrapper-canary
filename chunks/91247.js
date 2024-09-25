n.d(t, {
    TO: function () {
        return d;
    },
    dm: function () {
        return u;
    },
    uB: function () {
        return I;
    },
    vW: function () {
        return p;
    },
    zH: function () {
        return m;
    }
});
var r = n(653041);
var i = n(956067);
n(17089);
var a = n(218543),
    o = n(594174),
    s = n(626135),
    l = n(981631);
function u(e, t, n, r, o) {
    var u, d, _;
    let E = c(t);
    null != r && i.Z.addDetail('payload_size(kb)', Math.round(r.uncompressed_byte_size / 1024)), i.Z.addDetail('server_time(ms)', null !== (u = E.identify_total_server_duration_ms) && void 0 !== u ? u : 0);
    let f = {
        ...r,
        ...E,
        ...h(t),
        ...o,
        duration_ms_since_identify_start: n - e.identifyStartTime,
        duration_ms_since_connection_start: n - e.connectionStartTime,
        duration_ms_since_emit_start: Date.now() - n,
        is_reconnect: e.hasConnectedOnce,
        is_fast_connect: e.isFastConnect,
        did_force_clear_guild_hashes: e.didForceClearGuildHashes,
        identify_uncompressed_byte_size: e.identifyUncompressedByteSize,
        identify_compressed_byte_size: e.identifyCompressedByteSize,
        had_cache_at_startup: null !== (d = e.analytics.hadCacheAtStartup) && void 0 !== d && d,
        used_cache_at_startup: null !== (_ = e.analytics.usedCacheAtStartup) && void 0 !== _ && _
    };
    a.Z.attachReadyPayloadProperties(f), s.default.track(l.rMx.READY_PAYLOAD_RECEIVED, f, { logEventProperties: !0 });
}
function c(e) {
    let { _trace: t } = e,
        n = {};
    try {
        let e = JSON.parse(t);
        null != e[0] && '' !== e[0] && e[0].startsWith('gateway-') && (n.identify_total_server_duration_ms = Math.floor(e[1].micros / 1000)),
            f(e, (e, t) => {
                'start_session' === e ? (n.identify_api_duration_ms = Math.floor(t / 1000)) : 'guilds_connect' === e && (n.identify_guilds_duration_ms = Math.floor(t / 1000));
            });
    } catch (e) {}
    return n;
}
function d(e) {
    try {
        var t;
        let n = _(null === (t = e._trace) || void 0 === t ? void 0 : t[0]);
        if (null != n) return n;
    } catch (e) {}
    return null != e._trace ? e._trace.join(' -> ') : '???';
}
function _(e) {
    return null == e ? null : E(JSON.parse(e), '');
}
function E(e, t) {
    if (null == e) return '';
    let n = '';
    for (let r = 0; r < e.length; r += 2)
        n +=
            '\n'
                .concat(t)
                .concat(e[r], ': ')
                .concat(e[r + 1].micros / 1000) + E(e[r + 1].calls, t + '|  ');
    return n;
}
function f(e, t) {
    if (null != e && e.length > 0)
        for (let n = 0; n < e.length; n += 2) {
            let r = e[n],
                i = e[n + 1];
            t(r, i.micros), f(i.calls, t);
        }
}
function h(e) {
    let { guilds: t } = e,
        n = 0,
        r = 0;
    return (
        t.forEach((e) => {
            if (e.unavailable) return;
            let t = 'partial' === e.data_mode ? e.partial_updates.channels : e.channels;
            null != t &&
                null != t.forEach &&
                t.forEach((e) => {
                    r++, e.type === l.d4z.GUILD_CATEGORY && n++;
                });
        }),
        {
            num_guilds: t.length,
            num_guild_channels: r,
            num_guild_category_channels: n
        }
    );
}
function p(e) {
    var t, n;
    let r = Date.now(),
        { guilds: i, merged_presences: a, merged_members: o, read_state: s, private_channels: l, user_guild_settings: u, user_settings: c, user_settings_proto: d, experiments: _, guild_experiments: E, relationships: f, users: h, ...p } = e,
        m = [],
        I = [],
        T = [],
        g = [],
        S = [],
        A = [],
        v = [],
        N = [];
    return (
        i.forEach((e) => {
            var t;
            if (e.unavailable) return;
            let { features: n, ...r } = null !== (t = e.properties) && void 0 !== t ? t : {},
                { threads: i, guild_scheduled_events: a, ...o } = e;
            m.push('partial' === e.data_mode ? e.partial_updates.channels : e.channels), I.push('partial' === e.data_mode ? e.partial_updates.roles : e.roles), T.push('partial' === e.data_mode ? e.partial_updates.emojis : e.emojis), g.push(i), S.push('partial' === e.data_mode ? e.partial_updates.stickers : e.stickers), A.push(n), v.push(a), N.push(o, r);
        }),
        {
            presences_size: JSON.stringify(null !== (t = null == a ? void 0 : a.friends) && void 0 !== t ? t : []).length,
            users_size: JSON.stringify(h).length,
            read_states_size: JSON.stringify(s).length,
            private_channels_size: JSON.stringify(l).length,
            user_settings_size: JSON.stringify(null != c ? c : '').length + (null != d ? d : '').length,
            experiments_size: JSON.stringify(null != _ ? _ : []).length + JSON.stringify(null != E ? E : []).length,
            user_guild_settings_size: JSON.stringify(u).length,
            relationships_size: JSON.stringify(f).length,
            remaining_data_size: JSON.stringify(null != p ? p : {}).length,
            guild_channels_size: JSON.stringify(m).length,
            guild_members_size: JSON.stringify(null != o ? o : []).length,
            guild_presences_size: JSON.stringify(null !== (n = null == a ? void 0 : a.guilds) && void 0 !== n ? n : []).length,
            guild_roles_size: JSON.stringify(I).length,
            guild_emojis_size: JSON.stringify(T).length,
            guild_threads_size: JSON.stringify(g).length,
            guild_stickers_size: JSON.stringify(S).length,
            guild_events_size: JSON.stringify(v).length,
            guild_features_size: JSON.stringify(A).length,
            guild_remaining_data_size: JSON.stringify(N).length,
            size_metrics_duration_ms: Date.now() - r
        }
    );
}
function m(e) {
    return {
        connectTime: null != e ? e : 0,
        numEvents: 0,
        largestWaitTime: 0,
        dispatchTime: 0,
        totalWaitTime: 0,
        initialWaitTime: 0,
        startTime: performance.now(),
        lastUpdateTime: performance.now()
    };
}
function I(e) {
    var t;
    !(!(null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.isStaff()) && 0.5 > Math.random()) &&
        s.default.track(
            l.rMx.CONNECTION_RESUMED,
            {
                connect_time_ms: e.connectTime,
                resume_time_ms: Math.floor(performance.now() - e.startTime),
                num_events: e.numEvents,
                largest_wait_time_ms: Math.floor(e.largestWaitTime),
                initial_wait_time_ms: Math.floor(e.initialWaitTime),
                total_wait_time_ms: Math.floor(e.totalWaitTime),
                total_dispatch_time_ms: Math.floor(e.dispatchTime)
            },
            { logEventProperties: !0 }
        );
}
