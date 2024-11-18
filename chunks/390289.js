n(47120), n(789020);
var i,
    l = n(442837),
    a = n(570140),
    r = n(314897),
    s = n(592125),
    o = n(944486),
    c = n(9156),
    d = n(70956),
    u = n(630388),
    h = n(709054),
    p = n(221259),
    m = n(981631),
    f = n(490897),
    g = n(526761);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let x = 2 * d.Z.Millis.MINUTE,
    _ = 5 * x,
    v = d.Z.Millis.WEEK,
    I = { channels: {} },
    E = new Set(),
    b = null,
    Z = 0,
    N = 0;
function S() {
    if (null == b || !A(b)) return !1;
    let e = j(b);
    if (e.lastActionTime > Date.now() - d.Z.Millis.DAY && e.viewDuration > _) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - Z), (Z = t);
}
function T() {
    return (
        0 !== N && (clearInterval(N), (N = 0)),
        c.ZP.useNewNotifications &&
            (N = setInterval(() => {
                S() && M.emitChange();
            }, 15 * d.Z.Millis.SECOND)),
        !1
    );
}
function j(e) {
    return e in I.channels
        ? I.channels[e]
        : ((I.channels[e] = {
              lastActionTime: 0,
              viewDuration: 0,
              numSends: 0
          }),
          I.channels[e]);
}
function A(e) {
    if (!c.ZP.useNewNotifications || E.has(e)) return !1;
    let t = s.Z.getBasicChannel(e);
    if (null == t || null == t.guild_id || c.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id) || y(t.guild_id, t.id) || y(t.guild_id, t.parent_id)) return !1;
    let n = c.ZP.resolveUnreadSetting(t);
    return c.ZP.getChannelUnreadSetting(t.guild_id, t.id) === f.i.UNSET && n !== f.i.ALL_MESSAGES;
}
function y(e, t) {
    if (null == t) return !1;
    let n = c.ZP.getChannelOverrides(e)[t];
    return null != n && (!!((null != n.message_notifications && n.message_notifications !== m.bL.NULL) || (null != n.flags && (0, u.EB)(n.flags, g.ic.UNREADS_ALL_MESSAGES | g.ic.UNREADS_ONLY_MENTIONS))) || !1);
}
class P extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (I.channels = e.channels), this.syncWith([c.ZP], T), this.waitFor(c.ZP, o.Z, s.Z);
    }
    getState() {
        return I;
    }
    getLastActionTime(e) {
        var t, n;
        return null !== (n = null === (t = I.channels[e]) || void 0 === t ? void 0 : t.lastActionTime) && void 0 !== n ? n : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!A(e)) return !1;
        let t = s.Z.getBasicChannel(e);
        if (null == t || null == t.guild_id) return !1;
        let n = I.channels[e];
        return !(null == n || n.lastActionTime < Date.now() - v) && (!!(n.numSends >= 2) || !!(n.viewDuration >= x)) && (delete I.channels[e], E.add(e), (0, p.IG)(t.guild_id, t.id, f.i.ALL_MESSAGES), !0);
    }
}
C(P, 'displayName', 'UnreadSettingNoticeStore2'), C(P, 'persistKey', 'UnreadSettingNoticeStore2');
let M = new P(a.Z, {
    CHANNEL_SELECT: function () {
        let e = S();
        return (b = o.Z.getChannelId()), (Z = Date.now()), e;
    },
    CONNECTION_OPEN: function () {
        (b = o.Z.getChannelId()), (Z = Date.now()), T();
        let e = Date.now() - v;
        h.default.forEach(I.channels, (t, n) => {
            let { lastActionTime: i } = t;
            i < e && delete I.channels[n];
        });
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.optimistic || e.isPushNotification || (null === (t = e.message.author) || void 0 === t ? void 0 : t.id) !== r.default.getId() || !A(e.channelId)) return !1;
        let n = j(e.channelId);
        (n.lastActionTime = Date.now()), n.numSends++;
    }
});
t.Z = M;
