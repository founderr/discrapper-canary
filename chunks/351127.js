n.d(t, {
    B2: function () {
        return g;
    },
    Ov: function () {
        return f;
    },
    Qn: function () {
        return m;
    },
    _o: function () {
        return p;
    },
    pd: function () {
        return h;
    }
}),
    n(47120),
    n(411104),
    n(653041);
var i = n(149765),
    l = n(399606),
    r = n(271383),
    s = n(430824),
    a = n(594174),
    o = n(700785),
    c = n(981631),
    u = n(135899);
let d = [c.Plq.USE_CLYDE_AI],
    h = Object.keys(c.Plq).filter((e) => !d.includes(c.Plq[e])),
    m = Array.from(new Set([...u.$X, ...c.yYS, c.Plq.ADMINISTRATOR, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_GUILD, c.Plq.MANAGE_CHANNELS, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_MESSAGES, c.Plq.MANAGE_THREADS, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.CREATE_GUILD_EXPRESSIONS, c.Plq.MANAGE_EVENTS, c.Plq.CREATE_EVENTS, c.Plq.MODERATE_MEMBERS, c.Plq.MENTION_EVERYONE, c.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = h.find((t) => c.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    p = new Set(c.yYS);
function f(e, t) {
    return e === t;
}
function g(e, t, n) {
    let u = (0, l.e7)([s.Z], () => s.Z.getGuild(t), [t]);
    return (0, l.e7)(
        [r.ZP, a.default, s.Z],
        () => {
            let l = {},
                d = r.ZP.getMember(t, e),
                h = a.default.getUser(e);
            if (null == u || null == d || null == h) return l;
            let m = s.Z.getRole(u.id, u.getEveryoneRoleId()),
                p = o.uB({
                    user: h,
                    context: u
                });
            for (let e of n) {
                let t = c.Plq[e];
                if (!!i.e$(p, t)) {
                    for (let n of ((l[e] = []), d.roles)) {
                        let r = s.Z.getRole(u.id, n);
                        if (null != r) (i.e$(r.permissions, c.Plq.ADMINISTRATOR) || i.Db(r.permissions, t)) && l[e].push(r.id);
                    }
                    null != m && (i.e$(m.permissions, c.Plq.ADMINISTRATOR) || i.Db(m.permissions, t)) && l[e].push(m.id), u.isOwner(h) && l[e].push(h.id);
                }
            }
            return l;
        },
        [u, t, n, e]
    );
}
