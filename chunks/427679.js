var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(570140),
    u = n(765305);
let c = {},
    d = {};
function f(e, t) {
    var n;
    let r = { ...(null !== (n = c[e]) && void 0 !== n ? n : {}) };
    null == t ||
        t.forEach((e) => {
            (d[e.channel_id] = e), (r[e.channel_id] = e);
        }),
        (c[e] = r);
}
function _(e) {
    let { instance: t } = e;
    f(t.guild_id, [t]);
}
function h(e, t) {
    var n;
    if ((delete d[t], null == e)) return;
    let r = { ...(null !== (n = c[e]) && void 0 !== n ? n : {}) };
    delete r[t], (c[e] = r);
}
class p extends (s = o.ZP.Store) {
    getStageInstanceByChannel(e) {
        if (null != e) return d[e];
    }
    isLive(e) {
        return null != this.getStageInstanceByChannel(e);
    }
    isPublic(e) {
        var t;
        return (null === (t = this.getStageInstanceByChannel(e)) || void 0 === t ? void 0 : t.privacy_level) === u.j8.PUBLIC;
    }
    getStageInstancesByGuild(e) {
        var t;
        return null == e ? {} : null !== (t = c[e]) && void 0 !== t ? t : {};
    }
    getAllStageInstances() {
        return Object.values(d);
    }
}
(a = 'StageInstanceStore'),
    (i = 'displayName') in (r = p)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new p(l.Z, {
        CONNECTION_OPEN: function (e) {
            let { guilds: t } = e;
            (c = {}), (d = {}), t.forEach((e) => f(e.id, e.stage_instances));
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            f(t.id, t.stage_instances);
        },
        GUILD_DELETE: function (e) {
            var t;
            let { guild: n } = e,
                r = null !== (t = c[n.id]) && void 0 !== t ? t : {};
            delete c[n.id],
                Object.keys(r).forEach((e) => {
                    delete d[e];
                });
        },
        STAGE_INSTANCE_CREATE: _,
        STAGE_INSTANCE_UPDATE: _,
        STAGE_INSTANCE_DELETE: function (e) {
            let { instance: t } = e;
            h(t.guild_id, t.channel_id);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            h(t.guild_id, t.id);
        },
        LOGOUT: function () {
            (d = {}), (c = {});
        }
    }));
