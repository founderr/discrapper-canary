var r,
    i = n(442837),
    a = n(570140),
    o = n(765305);
function s(e, t, n) {
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
let l = {},
    u = {};
function c(e, t) {
    var n;
    let r = { ...(null !== (n = l[e]) && void 0 !== n ? n : {}) };
    null == t ||
        t.forEach((e) => {
            (u[e.channel_id] = e), (r[e.channel_id] = e);
        }),
        (l[e] = r);
}
function d(e) {
    let { guilds: t } = e;
    (l = {}), (u = {}), t.forEach((e) => c(e.id, e.stage_instances));
}
function _(e) {
    let { guild: t } = e;
    c(t.id, t.stage_instances);
}
function E(e) {
    var t;
    let { guild: n } = e,
        r = null !== (t = l[n.id]) && void 0 !== t ? t : {};
    delete l[n.id],
        Object.keys(r).forEach((e) => {
            delete u[e];
        });
}
function f(e) {
    let { instance: t } = e;
    c(t.guild_id, [t]);
}
function h(e, t) {
    var n;
    if ((delete u[t], null == e)) return;
    let r = { ...(null !== (n = l[e]) && void 0 !== n ? n : {}) };
    delete r[t], (l[e] = r);
}
function p(e) {
    let { instance: t } = e;
    h(t.guild_id, t.channel_id);
}
function m(e) {
    let { channel: t } = e;
    h(t.guild_id, t.id);
}
function I() {
    (u = {}), (l = {});
}
class T extends (r = i.ZP.Store) {
    getStageInstanceByChannel(e) {
        if (null != e) return u[e];
    }
    isLive(e) {
        return null != this.getStageInstanceByChannel(e);
    }
    isPublic(e) {
        var t;
        return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === o.j8.PUBLIC;
    }
    getStageInstancesByGuild(e) {
        var t;
        return null == e ? {} : null !== (t = l[e]) && void 0 !== t ? t : {};
    }
    getAllStageInstances() {
        return Object.values(u);
    }
}
s(T, 'displayName', 'StageInstanceStore'),
    (t.Z = new T(a.Z, {
        CONNECTION_OPEN: d,
        GUILD_CREATE: _,
        GUILD_DELETE: E,
        STAGE_INSTANCE_CREATE: f,
        STAGE_INSTANCE_UPDATE: f,
        STAGE_INSTANCE_DELETE: p,
        CHANNEL_DELETE: m,
        LOGOUT: I
    }));
