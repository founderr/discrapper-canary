var r,
    i = n(47120);
var a = n(442837),
    o = n(570140);
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
    u = {},
    c = new Set();
function d(e) {
    let { guildId: t, channelId: n } = e;
    u = {
        ...u,
        [t]: {
            ...u[t],
            [n]: !0
        }
    };
}
function _(e) {
    let { memberActions: t, guildId: n } = e;
    if (null == t) {
        u[n] = l;
        return;
    }
    (u[n] = t), c.delete(n);
}
function E(e) {
    let { guildId: t } = e;
    c.add(t);
}
function f(e) {
    let { guildId: t } = e;
    c.delete(t);
}
function h(e) {
    let { guild: t } = e;
    if (null == u[t.id]) return !1;
    delete u[t.id];
}
function p(e) {
    let { guildId: t } = e;
    if (null == u[t]) return !1;
    delete u[t];
}
class m extends (r = a.ZP.Store) {
    getCompletedActions(e) {
        return null == e ? null : u[e];
    }
    hasCompletedActionForChannel(e, t) {
        let n = this.getCompletedActions(e);
        return null != n && null != n[t];
    }
    getState(e) {
        return null == e
            ? {}
            : {
                  completedActions: u[e],
                  loading: c.has(e)
              };
    }
}
s(m, 'displayName', 'GuildOnboardingMemberActionStore'),
    (t.Z = new m(o.Z, {
        GUILD_NEW_MEMBER_ACTIONS_FETCH_START: E,
        GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: _,
        GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: f,
        GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: p,
        COMPLETE_NEW_MEMBER_ACTION: d,
        GUILD_DELETE: h
    }));
