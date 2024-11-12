n.d(t, {
    B2: function () {
        return g;
    },
    Ov: function () {
        return f;
    },
    Qn: function () {
        return p;
    },
    _o: function () {
        return m;
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
    a = n(430824),
    s = n(594174),
    o = n(700785),
    c = n(981631),
    d = n(135899);
let u = [c.Plq.USE_CLYDE_AI],
    h = Object.keys(c.Plq).filter((e) => !u.includes(c.Plq[e])),
    p = Array.from(new Set([...d.$X, ...c.yYS, c.Plq.ADMINISTRATOR, c.Plq.KICK_MEMBERS, c.Plq.BAN_MEMBERS, c.Plq.MANAGE_GUILD, c.Plq.MANAGE_CHANNELS, c.Plq.MANAGE_ROLES, c.Plq.MANAGE_MESSAGES, c.Plq.MANAGE_THREADS, c.Plq.MANAGE_GUILD_EXPRESSIONS, c.Plq.CREATE_GUILD_EXPRESSIONS, c.Plq.MANAGE_EVENTS, c.Plq.CREATE_EVENTS, c.Plq.MODERATE_MEMBERS, c.Plq.MENTION_EVERYONE, c.Plq.MANAGE_WEBHOOKS])).map((e) => {
        let t = h.find((t) => c.Plq[t] === e);
        if (null == t) throw Error('Permission '.concat(e, ' not found in Permissions'));
        return t;
    }),
    m = new Set(c.yYS);
function f(e, t) {
    return e === t;
}
function g(e, t, n) {
    let d = (0, l.e7)([a.Z], () => a.Z.getGuild(t), [t]);
    return (0, l.e7)(
        [r.ZP, s.default, a.Z],
        () => {
            let l = {},
                u = r.ZP.getMember(t, e),
                h = s.default.getUser(e);
            if (null == d || null == u || null == h) return l;
            let p = a.Z.getRole(d.id, d.getEveryoneRoleId()),
                m = o.uB({
                    user: h,
                    context: d
                });
            for (let e of n) {
                let t = c.Plq[e];
                if (!!i.e$(m, t)) {
                    for (let n of ((l[e] = []), u.roles)) {
                        let r = a.Z.getRole(d.id, n);
                        if (null != r) (i.e$(r.permissions, c.Plq.ADMINISTRATOR) || i.Db(r.permissions, t)) && l[e].push(r.id);
                    }
                    null != p && (i.e$(p.permissions, c.Plq.ADMINISTRATOR) || i.Db(p.permissions, t)) && l[e].push(p.id), d.isOwner(h) && l[e].push(h.id);
                }
            }
            return l;
        },
        [d, t, n, e]
    );
}
