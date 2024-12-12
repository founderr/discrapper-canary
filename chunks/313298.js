var i = r(47120);
var a = r(570140),
    s = r(147913),
    o = r(650774),
    l = r(709054),
    u = r(893966);
function c(e, n, r) {
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
let d = 75000,
    f = 10,
    _ = 5000,
    h = 2,
    p = 2000,
    m = 10000;
function g(e) {
    var n;
    return (null !== (n = o.Z.getMemberCount(e)) && void 0 !== n ? n : 0) >= d ? f : h;
}
function E(e) {
    var n;
    return (null !== (n = o.Z.getMemberCount(e)) && void 0 !== n ? n : 0) >= d ? _ : p;
}
let v = {},
    I = {},
    T = null;
function b() {
    if (null == T)
        T = setInterval(() => {
            l.default.forEachKey(v, (e) => {
                A(e) && S(e);
            });
        }, m);
}
async function y(e, n) {
    null == v[e] && (v[e] = new Set()), v[e].add(n), null == I[e] && (I[e] = Date.now()), A(e) && (await S(e));
}
function S(e) {
    if (null == v[e]) return;
    let n = Array.from(v[e]);
    (v[e] = new Set()),
        (I[e] = Date.now()),
        requestAnimationFrame(async () => {
            await a.Z.dispatch({
                type: 'MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH',
                guildId: e,
                userIds: n
            });
        });
}
function A(e) {
    let n = v[e];
    if (null == n) return !1;
    let r = n.size >= g(e),
        i = I[e];
    if (r) return !0;
    if (null == i) return !1;
    let a = Date.now() - i;
    return null != i && a >= E(e);
}
function N(e) {
    (v[e] = new Set()), (I[e] = null);
}
class C extends s.Z {
    handleInitialize() {
        null == T && b();
    }
    handleGuildMemberUpdate(e, n) {
        if (!!u.Z.isInitialized(e)) return y(e, n);
    }
    handleGuildMemberRemove(e, n) {
        if (!!u.Z.isInitialized(e)) return y(e, n);
    }
    handleGuildDelete(e) {
        let n = e.guild.id;
        if (!!u.Z.isInitialized(n)) N(n);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: n } = e;
        if (!!u.Z.isInitialized(n)) N(n);
    }
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                INITIALIZE_MEMBER_SAFETY_STORE: () => this.handleInitialize(),
                GUILD_MEMBER_ADD: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e.guildId, e.user.id),
                GUILD_MEMBER_REMOVE: (e) => this.handleGuildMemberRemove(e.guildId, e.user.id),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e)
            });
    }
}
n.Z = new C();
