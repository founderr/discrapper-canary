n.d(t, {
    E: function () {
        return d;
    },
    H: function () {
        return f;
    }
});
var r = n(31775),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(749210),
    l = n(243730),
    u = n(981631);
async function c(e) {
    try {
        o.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_START',
            guildId: e
        });
        let t = (await a.tn.get({ url: u.ANM.GUILD_ROLE_MEMBER_COUNTS(e) })).body;
        o.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS',
            guildId: e,
            roleMemberCount: t
        });
    } catch (t) {
        o.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE',
            guildId: e
        });
    }
}
async function d(e) {
    l.Z.shouldFetch(e) && (await c(e));
}
let _ = new (i())({ maxAge: 10000 });
function E(e, t) {
    return a.tn.get({ url: u.ANM.GUILD_ROLE_MEMBER_IDS(e, t) }).then((t) => (s.Z.requestMembersById(e, t.body, !1), t.body.length));
}
function f(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = ''.concat(e, '-').concat(t);
    return n && null != _.get(r) ? Promise.resolve(null) : (_.set(r, !0), E(e, t));
}
