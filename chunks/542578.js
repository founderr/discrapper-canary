var i,
    a = r(442837),
    s = r(570140),
    o = r(41776),
    l = r(222677),
    u = r(598077),
    c = r(592125),
    d = r(594174);
function f(e, n, r) {
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
let _ = {};
class h {
    static ensure(e, n, r) {
        var i, a;
        let s = ''
            .concat(e, ':')
            .concat(n.name, ':')
            .concat(null !== (i = n.id) && void 0 !== i ? i : '', ':')
            .concat(r);
        return (_[s] = null !== (a = _[s]) && void 0 !== a ? a : new h());
    }
    constructor() {
        f(this, 'users', void 0), f(this, 'fetched', void 0), (this.fetched = !1), (this.users = {});
    }
}
function p() {
    _ = {};
}
function m(e) {
    let { type: n, messageId: r, userId: i, emoji: a, reactionType: s } = e,
        o = h.ensure(r, a, s);
    if ('MESSAGE_REACTION_ADD' === n) {
        let e = d.default.getUser(i);
        null != e && (o.users[i] = e);
    } else delete o.users[i];
}
function g(e) {
    let { messageId: n, users: r, emoji: i, reactionType: a } = e,
        s = h.ensure(n, i, a);
    r.forEach((e) => (s.users[e.id] = new u.Z(e)));
}
class E extends (i = a.ZP.Store) {
    getReactions(e, n, r, i, a) {
        let s = h.ensure(n, r, a);
        if (!s.fetched) {
            let u = c.Z.getChannel(e),
                d = null != u ? u.getGuildId() : null;
            if (null != d && o.Z.isLurking(d)) return;
            l.U0({
                channelId: e,
                messageId: n,
                emoji: r,
                limit: i,
                type: a
            }),
                (s.fetched = !0);
        }
        return s.users;
    }
}
f(E, 'displayName', 'MessageReactionsStore'),
    (n.Z = new E(s.Z, {
        CONNECTION_OPEN: p,
        MESSAGE_REACTION_ADD: m,
        MESSAGE_REACTION_REMOVE: m,
        MESSAGE_REACTION_ADD_USERS: g
    }));
