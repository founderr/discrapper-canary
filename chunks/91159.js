n.d(t, {
    A_: function () {
        return g;
    },
    Ok: function () {
        return N;
    },
    U4: function () {
        return S;
    },
    Ye: function () {
        return p.Z;
    },
    ZJ: function () {
        return v;
    },
    q: function () {
        return A;
    }
});
var r = n(789020);
var i = n(913527),
    a = n.n(i),
    o = n(442837),
    s = n(367907),
    l = n(731429),
    u = n(306680),
    c = n(9156),
    d = n(626135),
    _ = n(630388),
    E = n(621600),
    f = n(709054),
    h = n(569471),
    p = n(814391),
    m = n(124368),
    I = n(981631);
n(689938);
let T = () => ({
    minutes: i18n.Messages.THREAD_BROWSER_TIMESTAMP_MINUTES_A11Y_LABEL,
    hours: i18n.Messages.THREAD_BROWSER_TIMESTAMP_HOURS_A11Y_LABEL,
    days: i18n.Messages.THREAD_BROWSER_TIMESTAMP_DAYS_A11Y_LABEL,
    month: i18n.Messages.THREAD_BROWSER_TIMESTAMP_MORE_THAN_MONTH_A11Y_LABEL
});
function g() {
    (0, s.yw)(I.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function S() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Modal';
    (0, s.yw)(I.rMx.OPEN_MODAL, {
        type: 'Thread Browser',
        location_section: e
    });
}
function A() {
    d.default.track(I.rMx.OPEN_POPOUT, { type: 'Active Threads Popout' });
}
function v(e, t) {
    var n, r;
    let i = (0, l.K)(e);
    if (null == i) return;
    let a = e.getGuildId(),
        o = e.parent_id,
        s = (0, E.I)(a, o),
        u = (e) => {
            if ((0, _.yE)(e, m.iN.ALL_MESSAGES)) return E.$R[I.bL.ALL_MESSAGES];
            if ((0, _.yE)(e, m.iN.ONLY_MENTIONS)) return E.$R[I.bL.ONLY_MENTIONS];
            if ((0, _.yE)(e, m.iN.NO_MESSAGES)) return E.$R[I.bL.NO_MESSAGES];
            return E.$R[I.bL.NULL];
        },
        f = null !== (n = h.Z.flags(e.id)) && void 0 !== n ? n : 0,
        p = u(f),
        T = h.Z.isMuted(e.id),
        g = (0, E.sK)(h.Z.getMuteConfig(e.id)),
        { can_send_message: S, ...A } = i,
        v = {
            ...A,
            channel_id: e.id,
            guild_id: a,
            parent_id: o,
            channel_type: e.type,
            has_interacted_with_thread: (f & m.iN.HAS_INTERACTED) != 0,
            parent_is_muted: c.ZP.isGuildOrCategoryOrChannelMuted(a, o),
            old_thread_notification_setting: p,
            new_thread_notification_setting: null != t.flags ? u(t.flags) : p,
            parent_notification_setting: s.channel_message_notification_settings,
            old_thread_is_muted: T,
            new_thread_is_muted: null !== (r = t.muted) && void 0 !== r ? r : T,
            old_thread_muted_until: g,
            new_thread_muted_until: null != t.mute_config ? (0, E.sK)(t.mute_config) : g
        };
    d.default.track(I.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, v);
}
let N = (e) => {
    var t, n;
    let r = (0, o.e7)([u.ZP], () => u.ZP.lastMessageId(e.id)),
        i = null != r ? f.default.extractTimestamp(r) : null,
        s = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        l = null != s ? a()(s).valueOf() : null;
    return null !== (n = null != i ? i : l) && void 0 !== n ? n : f.default.extractTimestamp(e.id);
};
