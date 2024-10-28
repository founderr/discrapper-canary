var r,
    i = n(512969),
    a = n(442837),
    s = n(570140),
    o = n(937111);
n(57132);
var l = n(893607),
    u = n(703656),
    c = n(314897),
    d = n(896797),
    _ = n(430824),
    E = n(981631);
function f(e, t, n) {
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
let h = null,
    p = null,
    I = {};
function m() {
    null != h && null == _.Z.getGuild(h) && null == o.Z.getRequest(h) && (h = null), null != p && null == _.Z.getGuild(p) && null == o.Z.getRequest(p) && (p = null), T(h);
}
function T(e) {
    if (null != e) I[e] = Date.now();
}
function S(e) {
    let t = !1;
    if ((delete I[e], p === e && ((p = null), (t = !0)), h === e)) {
        Object.values(_.Z.getGuilds()).find((t) => t.id !== e);
        (h = null), (0, u.dL)(E.Z5c.ME), (t = !0);
    }
    return t;
}
class g extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n, r, a;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(_.Z, c.default, d.Z), (I = null !== (n = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== n ? n : {}), (h = null !== (r = null == e ? void 0 : e.selectedGuildId) && void 0 !== r ? r : null), (p = null !== (a = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== a ? a : null);
        let s = d.Z.lastNonVoiceRoute,
            o = (0, i.LX)(s, { path: E.Z5c.CHANNEL(l.Hw.guildId()) });
        null == o || null === (t = o.params) || void 0 === t || t.guildId;
    }
    getState() {
        return {
            selectedGuildTimestampMillis: I,
            selectedGuildId: h,
            lastSelectedGuildId: p
        };
    }
    getGuildId() {
        return h;
    }
    getLastSelectedGuildId() {
        return p;
    }
    getLastSelectedTimestamp(e) {
        return h === e ? -1 : I[e];
    }
}
f(g, 'displayName', 'SelectedGuildStore'),
    f(g, 'persistKey', 'SelectedGuildStore'),
    (t.Z = new g(s.Z, {
        CONNECTION_OPEN: m,
        OVERLAY_INITIALIZE: function (e) {
            (h = e.selectedGuildId), (p = void 0), m();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (h === t) return !1;
            T(h), T(t), null != t && (p = t), (h = t);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e;
            return n.id === c.default.getId() && S(t);
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t, unavailable: n }
            } = e;
            return !0 !== n && S(t);
        },
        LOGOUT: function () {
            (h = null), (p = null);
        }
    }));
