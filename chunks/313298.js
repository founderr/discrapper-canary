var r = n(47120);
var i = n(570140),
    a = n(147913),
    o = n(650774),
    s = n(709054),
    l = n(893966);
function u(e, t, n) {
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
let c = 75000,
    d = 10,
    _ = 5000,
    E = 2,
    f = 2000,
    h = 10000;
function p(e) {
    var t;
    return (null !== (t = o.Z.getMemberCount(e)) && void 0 !== t ? t : 0) >= c ? d : E;
}
function m(e) {
    var t;
    return (null !== (t = o.Z.getMemberCount(e)) && void 0 !== t ? t : 0) >= c ? _ : f;
}
let I = {},
    T = {},
    g = null;
function S() {
    if (null == g)
        g = setInterval(() => {
            s.default.forEachKey(I, (e) => {
                N(e) && v(e);
            });
        }, h);
}
async function A(e, t) {
    null == I[e] && (I[e] = new Set()), I[e].add(t), null == T[e] && (T[e] = Date.now()), N(e) && (await v(e));
}
function v(e) {
    if (null == I[e]) return;
    let t = Array.from(I[e]);
    (I[e] = new Set()),
        (T[e] = Date.now()),
        requestAnimationFrame(async () => {
            await i.Z.dispatch({
                type: 'MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH',
                guildId: e,
                userIds: t
            });
        });
}
function N(e) {
    let t = I[e];
    if (null == t) return !1;
    let n = t.size >= p(e),
        r = T[e];
    if (n) return !0;
    if (null == r) return !1;
    let i = Date.now() - r;
    return null != r && i >= m(e);
}
function O(e) {
    (I[e] = new Set()), (T[e] = null);
}
class R extends a.Z {
    handleInitialize() {
        null == g && S();
    }
    handleGuildMemberUpdate(e, t) {
        if (!!l.Z.isInitialized(e)) return A(e, t);
    }
    handleGuildMemberRemove(e, t) {
        if (!!l.Z.isInitialized(e)) return A(e, t);
    }
    handleGuildDelete(e) {
        let t = e.guild.id;
        if (!!l.Z.isInitialized(t)) O(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        if (!!l.Z.isInitialized(t)) O(t);
    }
    constructor(...e) {
        super(...e),
            u(this, 'actions', {
                INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
                GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e)
            });
    }
}
t.Z = new R();
