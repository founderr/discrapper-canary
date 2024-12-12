r.d(n, {
    A_: function () {
        return T;
    },
    Ok: function () {
        return A;
    },
    U4: function () {
        return b;
    },
    Ye: function () {
        return g.Z;
    },
    ZJ: function () {
        return S;
    },
    q: function () {
        return y;
    }
});
var i = r(789020);
var a = r(913527),
    s = r.n(a),
    o = r(442837),
    l = r(367907),
    u = r(731429),
    c = r(306680),
    d = r(9156),
    f = r(626135),
    _ = r(630388),
    h = r(621600),
    p = r(709054),
    m = r(569471),
    g = r(814391),
    E = r(124368),
    v = r(981631);
r(388032);
let I = () => ({
    minutes: t['1Rcf/v'],
    hours: t['vgnx5+'],
    days: t['fNvE5+'],
    month: intl.string(t.P7Gyg4)
});
function T() {
    (0, l.yw)(v.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function b() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Modal';
    (0, l.yw)(v.rMx.OPEN_MODAL, {
        type: 'Thread Browser',
        location_section: e
    });
}
function y() {
    f.default.track(v.rMx.OPEN_POPOUT, { type: 'Active Threads Popout' });
}
function S(e, n) {
    var r, i;
    let a = (0, u.K)(e);
    if (null == a) return;
    let s = e.getGuildId(),
        o = e.parent_id,
        l = (0, h.I)(s, o),
        c = (e) => {
            if ((0, _.yE)(e, E.iN.ALL_MESSAGES)) return h.$R[v.bL.ALL_MESSAGES];
            if ((0, _.yE)(e, E.iN.ONLY_MENTIONS)) return h.$R[v.bL.ONLY_MENTIONS];
            if ((0, _.yE)(e, E.iN.NO_MESSAGES)) return h.$R[v.bL.NO_MESSAGES];
            return h.$R[v.bL.NULL];
        },
        p = null !== (r = m.Z.flags(e.id)) && void 0 !== r ? r : 0,
        g = c(p),
        I = m.Z.isMuted(e.id),
        T = (0, h.sK)(m.Z.getMuteConfig(e.id)),
        { can_send_message: b, ...y } = a,
        S = {
            ...y,
            channel_id: e.id,
            guild_id: s,
            parent_id: o,
            channel_type: e.type,
            has_interacted_with_thread: (p & E.iN.HAS_INTERACTED) != 0,
            parent_is_muted: d.ZP.isGuildOrCategoryOrChannelMuted(s, o),
            old_thread_notification_setting: g,
            new_thread_notification_setting: null != n.flags ? c(n.flags) : g,
            parent_notification_setting: l.channel_message_notification_settings,
            old_thread_is_muted: I,
            new_thread_is_muted: null !== (i = n.muted) && void 0 !== i ? i : I,
            old_thread_muted_until: T,
            new_thread_muted_until: null != n.mute_config ? (0, h.sK)(n.mute_config) : T
        };
    f.default.track(v.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, S);
}
let A = (e) => {
    var n, r;
    let i = (0, o.e7)([c.ZP], () => c.ZP.lastMessageId(e.id)),
        a = null != i ? p.default.extractTimestamp(i) : null,
        l = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.createTimestamp,
        u = null != l ? s()(l).valueOf() : null;
    return null !== (r = null != a ? a : u) && void 0 !== r ? r : p.default.extractTimestamp(e.id);
};
