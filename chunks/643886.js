t.d(n, {
    U: function () {
        return g;
    }
}),
    t(653041),
    t(47120),
    t(733860);
var i = t(192379),
    l = t(512722),
    r = t.n(l),
    a = t(149765),
    o = t(442837),
    s = t(271383),
    d = t(430824),
    c = t(496675),
    u = t(594174),
    m = t(700785),
    h = t(282923),
    p = t(981631);
function g(e) {
    let n = (0, o.e7)([d.Z], () => d.Z.getGuild(e));
    r()(null != n, 'guild must be present to be editing its integration settings');
    let t = (0, o.e7)([c.Z], () => c.Z.getHighestRole(n)),
        l = (0, o.Wu)([s.ZP], () => s.ZP.getMembers(e), [e]),
        g = (0, o.cj)([u.default], () => u.default.getUsers()),
        b = (0, o.Wu)([d.Z], () => Object.values(d.Z.getRoles(e)), [e]),
        v = i.useMemo(() => {
            let e = [];
            for (let t of l) {
                let i = g[t.userId];
                if (null == i || i.bot) continue;
                let l =
                    i.id !== n.ownerId &&
                    !m.BT({
                        permission: p.Plq.ADMINISTRATOR,
                        user: i,
                        context: n
                    }) &&
                    c.Z.canManageUser(p.Plq.USE_APPLICATION_COMMANDS, i, n);
                e.push({
                    id: i.id,
                    canManage: l,
                    nick: t.nick,
                    username: i.username
                });
            }
            return e;
        }, [n, l, g]),
        C = (e) => {
            var n;
            return e.managed && (null === (n = e.tags) || void 0 === n ? void 0 : n.bot_id) != null;
        },
        I = i.useMemo(() => {
            let i = [];
            for (let l of b) {
                if (C(l)) continue;
                let r = !a.e$(l.permissions, p.Plq.ADMINISTRATOR) && c.Z.isRoleHigher(n, t, l),
                    o = {
                        id: l.id,
                        name: l.name,
                        canManage: r
                    };
                l.id === e ? i.unshift(o) : i.push(o);
            }
            return i;
        }, [b, e, n, t]),
        [N, T] = i.useState(''),
        _ = i.useMemo(() => {
            let n = (function (e) {
                    return e.startsWith('@') ? e.substr(1) : e;
                })(N),
                t = N.startsWith('@') ? I.filter((n) => n.id === e) : I,
                i = (0, h.B)(v, f, n);
            return {
                members: i,
                roles: (0, h.B)(t, x, n)
            };
        }, [e, v, N, I]);
    return {
        query: N,
        results: _,
        setQuery: T,
        unfilteredCount: _.members.length + _.roles.length
    };
}
function f(e) {
    let n = [e.username];
    return (
        (null == e ? void 0 : e.nick) != null && n.push(e.nick),
        {
            id: e.id,
            names: n
        }
    );
}
function x(e) {
    return {
        id: e.id,
        names: [e.name]
    };
}
