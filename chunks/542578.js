var r,
    i = n(442837),
    a = n(570140),
    s = n(41776),
    o = n(222677),
    l = n(598077),
    u = n(592125),
    c = n(594174);
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
let f = {};
class _ {
    static ensure(e, t, n) {
        var r, i;
        let a = ''
            .concat(e, ':')
            .concat(t.name, ':')
            .concat(null !== (r = t.id) && void 0 !== r ? r : '', ':')
            .concat(n);
        return (f[a] = null !== (i = f[a]) && void 0 !== i ? i : new _());
    }
    constructor() {
        d(this, 'users', void 0), d(this, 'fetched', void 0), (this.fetched = !1), (this.users = {});
    }
}
function h(e) {
    let { type: t, messageId: n, userId: r, emoji: i, reactionType: a } = e,
        s = _.ensure(n, i, a);
    if ('MESSAGE_REACTION_ADD' === t) {
        let e = c.default.getUser(r);
        null != e && (s.users[r] = e);
    } else delete s.users[r];
}
class p extends (r = i.ZP.Store) {
    getReactions(e, t, n, r, i) {
        let a = _.ensure(t, n, i);
        if (!a.fetched) {
            let l = u.Z.getChannel(e),
                c = null != l ? l.getGuildId() : null;
            if (null != c && s.Z.isLurking(c)) return;
            o.U0({
                channelId: e,
                messageId: t,
                emoji: n,
                limit: r,
                type: i
            }),
                (a.fetched = !0);
        }
        return a.users;
    }
}
d(p, 'displayName', 'MessageReactionsStore'),
    (t.Z = new p(a.Z, {
        CONNECTION_OPEN: function () {
            f = {};
        },
        MESSAGE_REACTION_ADD: h,
        MESSAGE_REACTION_REMOVE: h,
        MESSAGE_REACTION_ADD_USERS: function (e) {
            let { messageId: t, users: n, emoji: r, reactionType: i } = e,
                a = _.ensure(t, r, i);
            n.forEach((e) => (a.users[e.id] = new l.Z(e)));
        }
    }));
