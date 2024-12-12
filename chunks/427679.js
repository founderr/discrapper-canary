var i,
    a = r(442837),
    s = r(570140),
    o = r(765305);
function l(e, n, r) {
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
let u = {},
    c = {};
function d(e, n) {
    var r;
    let i = { ...(null !== (r = u[e]) && void 0 !== r ? r : {}) };
    null == n ||
        n.forEach((e) => {
            (c[e.channel_id] = e), (i[e.channel_id] = e);
        }),
        (u[e] = i);
}
function f(e) {
    let { guilds: n } = e;
    (u = {}), (c = {}), n.forEach((e) => d(e.id, e.stage_instances));
}
function _(e) {
    let { guild: n } = e;
    d(n.id, n.stage_instances);
}
function h(e) {
    var n;
    let { guild: r } = e,
        i = null !== (n = u[r.id]) && void 0 !== n ? n : {};
    delete u[r.id],
        Object.keys(i).forEach((e) => {
            delete c[e];
        });
}
function p(e) {
    let { instance: n } = e;
    d(n.guild_id, [n]);
}
function m(e, n) {
    var r;
    if ((delete c[n], null == e)) return;
    let i = { ...(null !== (r = u[e]) && void 0 !== r ? r : {}) };
    delete i[n], (u[e] = i);
}
function g(e) {
    let { instance: n } = e;
    m(n.guild_id, n.channel_id);
}
function E(e) {
    let { channel: n } = e;
    m(n.guild_id, n.id);
}
function v() {
    (c = {}), (u = {});
}
class I extends (i = a.ZP.Store) {
    getStageInstanceByChannel(e) {
        if (null != e) return c[e];
    }
    isLive(e) {
        return null != this.getStageInstanceByChannel(e);
    }
    isPublic(e) {
        var n;
        return (null === (n = this.getStageInstanceByChannel(e)) || void 0 === n ? void 0 : n.privacy_level) === o.j8.PUBLIC;
    }
    getStageInstancesByGuild(e) {
        var n;
        return null == e ? {} : null !== (n = u[e]) && void 0 !== n ? n : {};
    }
    getAllStageInstances() {
        return Object.values(c);
    }
}
l(I, 'displayName', 'StageInstanceStore'),
    (n.Z = new I(s.Z, {
        CONNECTION_OPEN: f,
        GUILD_CREATE: _,
        GUILD_DELETE: h,
        STAGE_INSTANCE_CREATE: p,
        STAGE_INSTANCE_UPDATE: p,
        STAGE_INSTANCE_DELETE: g,
        CHANNEL_DELETE: E,
        LOGOUT: v
    }));
