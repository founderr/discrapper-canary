n.d(t, {
    HU: function () {
        return g;
    },
    KW: function () {
        return m;
    },
    dO: function () {
        return h;
    },
    gQ: function () {
        return p;
    }
});
var i = n(392711),
    r = n.n(i),
    l = n(570140),
    a = n(317381),
    o = n(594174),
    s = n(823379),
    c = n(5192),
    d = n(863141),
    u = n(186901);
function h() {
    let e = a.ZP.getCurrentEmbeddedActivity();
    if (null == e) return { participants: [] };
    let { guildId: t, channelId: n } = e;
    return {
        participants: Array.from(e.userIds, (e) => {
            let i = o.default.getUser(e);
            if (null == i) return;
            let r = (0, c.y)(t, n, i);
            return {
                ...(0, d.Z)(i),
                nickname: null != r ? r : void 0
            };
        }).filter(s.lm)
    };
}
let m = { [u.Gp.ANY]: [u.wE] },
    p = {
        scope: m,
        handler: () => (e) => {
            let { prevState: t, dispatch: n } = e,
                i = h();
            return !r().isEqual(i, t) && n(i), i;
        }
    };
function g(e) {
    let t = 'EMBEDDED_ACTIVITY_UPDATE',
        n = () => {
            e(h());
        };
    return l.Z.subscribe(t, n), () => l.Z.unsubscribe(t, n);
}
