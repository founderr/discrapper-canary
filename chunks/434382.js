var r = n(47120);
var i = n(152057),
    a = n(570140),
    o = n(147913),
    s = n(38618),
    l = n(517100),
    u = n(914010),
    c = n(451478),
    d = n(425128),
    _ = n(994752),
    E = n(276344);
function f(e, t, n) {
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
let h = i.v.LEAGUE_OF_LEGENDS_WEEKLY,
    p = 3,
    m = 5,
    I = 900000,
    T = new Map(),
    g = new Set(),
    S = new Map();
function A(e, t) {
    return ''.concat(e, ':').concat(t);
}
function v(e, t) {
    var n;
    let r = A(e, t);
    if (g.has(r) || (null !== (n = S.get(r)) && void 0 !== n ? n : 0) > p) return !1;
    if (u.Z.getGuildId() !== e) return;
    if (!(0, E.NM)(e, 'GuildLeaderboardManager') || !c.Z.isFocused() || !s.Z.isConnected()) return !1;
    let i = l.Z.getIdleSince();
    return !(null != i && Date.now() - i > I) && !0;
}
function N() {
    for (let e in T) clearTimeout(T.get(e)), T.delete(e);
}
function O() {
    var e;
    N();
    let t = u.Z.getGuildId();
    if (null == t || !v(t, h)) return;
    let n = _.Z.getLeaderboardResponse(t, h),
        r = setTimeout(
            () =>
                R({
                    guildId: t,
                    leaderboardId: h
                }),
            Math.max(0, (null !== (e = null == n ? void 0 : n.expires_at) && void 0 !== e ? e : Date.now()) - Date.now())
        ),
        i = A(t, h);
    T.set(i, r);
}
async function R(e) {
    let { guildId: t, leaderboardId: n, force: r = !1 } = e;
    if (!(v(t, n) || r)) return;
    let i = A(t, n);
    if (!g.has(i))
        try {
            g.add(i);
            let e = await (0, d.p)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: 0
                }),
                r = _.Z.get(t, n);
            if ((null == r ? void 0 : r.interval_start) !== e.leaderboard.interval_start) {
                let e = await (0, d.p)({
                    guildId: t,
                    leaderboardId: n,
                    intervalOffset: -1
                });
                a.Z.dispatch({
                    type: 'SET_GUILD_LEADERBOARD',
                    leaderboardResponse: e,
                    intervalOffset: -1
                });
            }
            a.Z.dispatch({
                type: 'SET_GUILD_LEADERBOARD',
                leaderboardResponse: e,
                intervalOffset: 0
            }),
                S.delete(i),
                g.delete(i),
                O();
        } catch (a) {
            var o;
            let e = (null !== (o = S.get(i)) && void 0 !== o ? o : 0) + 1;
            if ((S.set(i, e), !v(t, n))) return;
            let r = 1000 * Math.pow(m, e);
            T.set(
                i,
                setTimeout(
                    () =>
                        R({
                            guildId: t,
                            leaderboardId: n,
                            force: !0
                        }),
                    r
                )
            );
        }
}
function C() {
    O();
}
function y() {
    N(), (T = new Map()), (g = new Set()), (S = new Map()), C();
}
class b extends o.Z {
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                POST_CONNECTION_OPEN: y,
                CONNECTION_CLOSED: C,
                WINDOW_FOCUS: C,
                IDLE: C,
                CHANNEL_SELECT: C
            });
    }
}
t.Z = new b();
