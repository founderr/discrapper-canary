var i,
    a = r(512969),
    s = r(442837),
    o = r(570140),
    l = r(937111),
    u = r(893607),
    c = r(703656),
    d = r(314897),
    f = r(896797),
    _ = r(430824),
    h = r(981631);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let m = -1,
    g = null,
    E = null,
    v = {};
function I() {
    null != g && null == _.Z.getGuild(g) && null == l.Z.getRequest(g) && (g = null), null != E && null == _.Z.getGuild(E) && null == l.Z.getRequest(E) && (E = null), b(g);
}
function T(e) {
    (g = e.selectedGuildId), (E = void 0), I();
}
function b(e) {
    if (null != e) v[e] = Date.now();
}
function y(e) {
    let { guildId: n } = e;
    if (g === n) return !1;
    b(g), b(n), null != n && (E = n), (g = n);
}
function S(e) {
    let n = !1;
    if ((delete v[e], E === e && ((E = null), (n = !0)), g === e)) {
        Object.values(_.Z.getGuilds()).find((n) => n.id !== e);
        (g = null), (0, c.dL)(h.Z5c.ME), (n = !0);
    }
    return n;
}
function A(e) {
    let {
        guild: { id: n, unavailable: r }
    } = e;
    return !0 !== r && S(n);
}
function N(e) {
    let { guildId: n, user: r } = e;
    return r.id === d.default.getId() && S(n);
}
function C() {
    (g = null), (E = null);
}
class R extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        var n, r, i, s;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(_.Z, d.default, f.Z), (v = null !== (r = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== r ? r : {}), (g = null !== (i = null == e ? void 0 : e.selectedGuildId) && void 0 !== i ? i : null), (E = null !== (s = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== s ? s : null);
        let o = f.Z.lastNonVoiceRoute,
            l = (0, a.LX)(o, { path: h.Z5c.CHANNEL(u.Hw.guildId()) });
        null == l || null === (n = l.params) || void 0 === n || n.guildId;
    }
    getState() {
        return {
            selectedGuildTimestampMillis: v,
            selectedGuildId: g,
            lastSelectedGuildId: E
        };
    }
    getGuildId() {
        return g;
    }
    getLastSelectedGuildId() {
        return E;
    }
    getLastSelectedTimestamp(e) {
        return g === e ? m : v[e];
    }
}
p(R, 'displayName', 'SelectedGuildStore'),
    p(R, 'persistKey', 'SelectedGuildStore'),
    (n.Z = new R(o.Z, {
        CONNECTION_OPEN: I,
        OVERLAY_INITIALIZE: T,
        CHANNEL_SELECT: y,
        GUILD_MEMBER_REMOVE: N,
        GUILD_DELETE: A,
        LOGOUT: C
    }));
