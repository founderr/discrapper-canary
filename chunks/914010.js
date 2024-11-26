var r,
    i = n(512969),
    a = n(442837),
    s = n(570140),
    o = n(937111),
    l = n(893607),
    u = n(703656),
    c = n(314897),
    d = n(896797),
    f = n(430824),
    _ = n(981631);
function p(e, t, n) {
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
    m = null,
    g = {};
function E() {
    null != h && null == f.Z.getGuild(h) && null == o.Z.getRequest(h) && (h = null), null != m && null == f.Z.getGuild(m) && null == o.Z.getRequest(m) && (m = null), v(h);
}
function v(e) {
    if (null != e) g[e] = Date.now();
}
function I(e) {
    let t = !1;
    if ((delete g[e], m === e && ((m = null), (t = !0)), h === e)) {
        Object.values(f.Z.getGuilds()).find((t) => t.id !== e);
        (h = null), (0, u.dL)(_.Z5c.ME), (t = !0);
    }
    return t;
}
class T extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        var t, n, r, a;
        this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(f.Z, c.default, d.Z), (g = null !== (n = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== n ? n : {}), (h = null !== (r = null == e ? void 0 : e.selectedGuildId) && void 0 !== r ? r : null), (m = null !== (a = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== a ? a : null);
        let s = d.Z.lastNonVoiceRoute,
            o = (0, i.LX)(s, { path: _.Z5c.CHANNEL(l.Hw.guildId()) });
        null == o || null === (t = o.params) || void 0 === t || t.guildId;
    }
    getState() {
        return {
            selectedGuildTimestampMillis: g,
            selectedGuildId: h,
            lastSelectedGuildId: m
        };
    }
    getGuildId() {
        return h;
    }
    getLastSelectedGuildId() {
        return m;
    }
    getLastSelectedTimestamp(e) {
        return h === e ? -1 : g[e];
    }
}
p(T, 'displayName', 'SelectedGuildStore'),
    p(T, 'persistKey', 'SelectedGuildStore'),
    (t.Z = new T(s.Z, {
        CONNECTION_OPEN: E,
        OVERLAY_INITIALIZE: function (e) {
            (h = e.selectedGuildId), (m = void 0), E();
        },
        CHANNEL_SELECT: function (e) {
            let { guildId: t } = e;
            if (h === t) return !1;
            v(h), v(t), null != t && (m = t), (h = t);
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e;
            return n.id === c.default.getId() && I(t);
        },
        GUILD_DELETE: function (e) {
            let {
                guild: { id: t, unavailable: n }
            } = e;
            return !0 !== n && I(t);
        },
        LOGOUT: function () {
            (h = null), (m = null);
        }
    }));
