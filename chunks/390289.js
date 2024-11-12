n(47120);
var i,
    l = n(442837),
    a = n(570140),
    r = n(314897),
    s = n(592125),
    o = n(944486),
    c = n(9156),
    d = n(70956),
    u = n(709054),
    h = n(221259),
    p = n(490897);
function m(e, t, n) {
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
let f = 2 * d.Z.Millis.MINUTE,
    g = 5 * f,
    C = d.Z.Millis.WEEK,
    x = { channels: {} },
    v = new Set(),
    _ = null,
    I = 0,
    E = 0;
function b() {
    if (null == _ || !S(_)) return !1;
    let e = N(_);
    if (e.lastActionTime > Date.now() - d.Z.Millis.DAY && e.viewDuration > g) return !1;
    let t = Date.now();
    (e.lastActionTime = t), (e.viewDuration += t - I), (I = t);
}
function Z() {
    return (
        0 !== E && (clearInterval(E), (E = 0)),
        c.ZP.useNewNotifications &&
            (E = setInterval(() => {
                b() && j.emitChange();
            }, 15 * d.Z.Millis.SECOND)),
        !1
    );
}
function N(e) {
    return e in x.channels
        ? x.channels[e]
        : ((x.channels[e] = {
              lastActionTime: 0,
              viewDuration: 0,
              numSends: 0
          }),
          x.channels[e]);
}
function S(e) {
    if (!c.ZP.useNewNotifications || v.has(e)) return !1;
    let t = s.Z.getBasicChannel(e);
    if (null == t || null == t.guild_id) return !1;
    let n = c.ZP.resolveUnreadSetting(t);
    return c.ZP.getChannelUnreadSetting(t.guild_id, t.id) === p.i.UNSET && n !== p.i.ALL_MESSAGES;
}
class T extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (x.channels = e.channels), this.syncWith([c.ZP], Z), this.waitFor(c.ZP, o.Z, s.Z);
    }
    getState() {
        return x;
    }
    getLastActionTime(e) {
        var t, n;
        return null !== (n = null === (t = x.channels[e]) || void 0 === t ? void 0 : t.lastActionTime) && void 0 !== n ? n : 0;
    }
    maybeAutoUpgradeChannel(e) {
        if (!S(e)) return !1;
        let t = s.Z.getBasicChannel(e);
        if (null == t || null == t.guild_id) return !1;
        let n = x.channels[e];
        return !(null == n || n.lastActionTime < Date.now() - C) && (!!(n.numSends >= 2) || !!(n.viewDuration >= f)) && (delete x.channels[e], v.add(e), (0, h.IG)(t.guild_id, t.id, p.i.ALL_MESSAGES), !0);
    }
}
m(T, 'displayName', 'UnreadSettingNoticeStore2'), m(T, 'persistKey', 'UnreadSettingNoticeStore2');
let j = new T(a.Z, {
    CHANNEL_SELECT: function () {
        let e = b();
        return (_ = o.Z.getChannelId()), (I = Date.now()), e;
    },
    CONNECTION_OPEN: function () {
        (_ = o.Z.getChannelId()), (I = Date.now()), Z();
        let e = Date.now() - C;
        u.default.forEach(x.channels, (t, n) => {
            let { lastActionTime: i } = t;
            i < e && delete x.channels[n];
        });
    },
    MESSAGE_CREATE: function (e) {
        var t;
        if (e.optimistic || e.isPushNotification || (null === (t = e.message.author) || void 0 === t ? void 0 : t.id) !== r.default.getId() || !S(e.channelId)) return !1;
        let n = N(e.channelId);
        (n.lastActionTime = Date.now()), n.numSends++;
    }
});
t.Z = j;
