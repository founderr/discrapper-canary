n.d(t, {
    A_: function () {
        return E;
    },
    Ok: function () {
        return b;
    },
    U4: function () {
        return v;
    },
    Ye: function () {
        return p.Z;
    },
    ZJ: function () {
        return S;
    },
    q: function () {
        return I;
    }
}),
    n(789020);
var r = n(913527),
    i = n.n(r),
    a = n(442837),
    s = n(367907),
    o = n(731429),
    l = n(306680),
    u = n(9156),
    c = n(626135),
    d = n(630388),
    f = n(621600),
    _ = n(709054),
    h = n(569471),
    p = n(814391),
    m = n(124368),
    g = n(981631);
function E() {
    (0, s.yw)(g.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Modal';
    (0, s.yw)(g.rMx.OPEN_MODAL, {
        type: 'Thread Browser',
        location_section: e
    });
}
function I() {
    c.default.track(g.rMx.OPEN_POPOUT, { type: 'Active Threads Popout' });
}
function S(e, t) {
    var n, r;
    let i = (0, o.K)(e);
    if (null == i) return;
    let a = e.getGuildId(),
        s = e.parent_id,
        l = (0, f.I)(a, s),
        _ = (e) => {
            if ((0, d.yE)(e, m.iN.ALL_MESSAGES)) return f.$R[g.bL.ALL_MESSAGES];
            if ((0, d.yE)(e, m.iN.ONLY_MENTIONS)) return f.$R[g.bL.ONLY_MENTIONS];
            if ((0, d.yE)(e, m.iN.NO_MESSAGES)) return f.$R[g.bL.NO_MESSAGES];
            return f.$R[g.bL.NULL];
        },
        p = null !== (n = h.Z.flags(e.id)) && void 0 !== n ? n : 0,
        E = _(p),
        v = h.Z.isMuted(e.id),
        I = (0, f.sK)(h.Z.getMuteConfig(e.id)),
        { can_send_message: S, ...b } = i,
        T = {
            ...b,
            channel_id: e.id,
            guild_id: a,
            parent_id: s,
            channel_type: e.type,
            has_interacted_with_thread: (p & m.iN.HAS_INTERACTED) != 0,
            parent_is_muted: u.ZP.isGuildOrCategoryOrChannelMuted(a, s),
            old_thread_notification_setting: E,
            new_thread_notification_setting: null != t.flags ? _(t.flags) : E,
            parent_notification_setting: l.channel_message_notification_settings,
            old_thread_is_muted: v,
            new_thread_is_muted: null !== (r = t.muted) && void 0 !== r ? r : v,
            old_thread_muted_until: I,
            new_thread_muted_until: null != t.mute_config ? (0, f.sK)(t.mute_config) : I
        };
    c.default.track(g.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, T);
}
n(388032);
let b = (e) => {
    var t, n;
    let r = (0, a.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)),
        s = null != r ? _.default.extractTimestamp(r) : null,
        o = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        u = null != o ? i()(o).valueOf() : null;
    return null !== (n = null != s ? s : u) && void 0 !== n ? n : _.default.extractTimestamp(e.id);
};
