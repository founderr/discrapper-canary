var r,
    i = n(442837),
    a = n(570140),
    o = n(937111);
n(57132);
var s = n(703656),
    l = n(314897),
    u = n(430824),
    c = n(981631);
function d(e, t, n) {
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
let _ = -1,
    E = null,
    f = null,
    h = {};
function p() {
    null != E && null == u.Z.getGuild(E) && null == o.Z.getRequest(E) && (E = null), null != f && null == u.Z.getGuild(f) && null == o.Z.getRequest(f) && (f = null), I(E);
}
function m(e) {
    (E = e.selectedGuildId), (f = void 0), p();
}
function I(e) {
    if (null != e) h[e] = Date.now();
}
function T(e) {
    let { guildId: t } = e;
    if (E === t) return !1;
    I(E), I(t), null != t && (f = t), (E = t);
}
function g(e) {
    let t = !1;
    if ((delete h[e], f === e && ((f = null), (t = !0)), E === e)) {
        Object.values(u.Z.getGuilds()).find((t) => t.id !== e);
        (E = null), (0, s.dL)(c.Z5c.ME), (t = !0);
    }
    return t;
}
function S(e) {
    let {
        guild: { id: t, unavailable: n }
    } = e;
    return !0 !== n && g(t);
}
function A(e) {
    let { guildId: t, user: n } = e;
    return n.id === l.default.getId() && g(t);
}
function v() {
    (E = null), (f = null);
}
class N extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t, n, r;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(u.Z, l.default), (h = null !== (t = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== t ? t : {}), (E = null !== (n = null == e ? void 0 : e.selectedGuildId) && void 0 !== n ? n : null), (f = null !== (r = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== r ? r : null);
    }
    getState() {
        return {
            selectedGuildTimestampMillis: h,
            selectedGuildId: E,
            lastSelectedGuildId: f
        };
    }
    getGuildId() {
        return E;
    }
    getLastSelectedGuildId() {
        return f;
    }
    getLastSelectedTimestamp(e) {
        return E === e ? _ : h[e];
    }
}
d(N, 'displayName', 'SelectedGuildStore'),
    d(N, 'persistKey', 'SelectedGuildStore'),
    (t.Z = new N(a.Z, {
        CONNECTION_OPEN: p,
        OVERLAY_INITIALIZE: m,
        CHANNEL_SELECT: T,
        GUILD_MEMBER_REMOVE: A,
        GUILD_DELETE: S,
        LOGOUT: v
    }));
