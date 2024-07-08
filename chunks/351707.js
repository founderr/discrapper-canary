i.d(n, {
    Z: function () {
        return g;
    }
}), i(47120);
var o = i(735250), s = i(470079), t = i(772848), l = i(924826), a = i(91192), r = i(442837), c = i(749210), d = i(434404), u = i(271383), I = i(430824), E = i(496675), _ = i(700785), f = i(785717), Z = i(256226), m = i(678738), v = i(314172), S = i(981631), x = i(689938), N = i(700763);
function h(e) {
    let {
            user: n,
            currentUser: i,
            guild: c,
            guildMember: d,
            userRoles: u,
            highestRole: E,
            canManageRoles: f,
            onAddRole: m,
            onRemoveRole: h
        } = e, g = (0, r.e7)([I.Z], () => I.Z.getRoles(c.id)), p = s.useMemo(() => Object.values(g).filter(e => u.includes(e.id)).sort((e, n) => {
            var i, o;
            let s = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null, t = (null === (o = n.tags) || void 0 === o ? void 0 : o.guild_connections) !== null;
            return s && !t ? 1 : !s && t ? -1 : 0;
        }), [
            g,
            u
        ]), C = f && null != d, T = s.useMemo(() => 'roles-'.concat((0, t.Z)()), []), R = (0, l.ZP)({
            id: T,
            isEnabled: !0,
            scrollToStart: S.Cyb,
            scrollToEnd: S.Cyb,
            wrap: !0
        }), M = p.length, j = 0 === M ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({ numRoles: M }), A = p.map(e => {
            var s;
            return (0, o.jsx)(Z.Z, {
                role: e,
                guildId: c.id,
                disableBorderColor: !0,
                onRemove: () => h(e),
                canRemove: f ? _.r6(c, i.id, E, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && n.id === i.id
            }, e.id);
        });
    return (0, o.jsx)(a.bG, {
        navigator: R,
        children: (0, o.jsx)(a.SJ, {
            children: e => {
                let {
                    ref: n,
                    ...i
                } = e;
                return (0, o.jsxs)('div', {
                    className: N.root,
                    'aria-label': j,
                    ref: n,
                    ...i,
                    children: [
                        A,
                        C && (0, o.jsx)(v.Z, {
                            variant: p.length > 0 ? 'icon' : 'text',
                            guild: c,
                            guildMember: d,
                            highestRole: E,
                            onAddRole: m
                        })
                    ]
                });
            }
        })
    });
}
function g(e) {
    let {
            user: n,
            currentUser: i,
            guild: t,
            scrollIntoView: l
        } = e, {trackUserProfileAction: a} = (0, f.KZ)(), I = (0, r.e7)([u.ZP], () => u.ZP.getMember(t.id, n.id)), Z = null == I ? void 0 : I.roles, v = null == Z || 0 === Z.length, N = _.e9(t, i.id), [g] = (0, r.Wu)([E.Z], () => [
            E.Z.can(S.Plq.MANAGE_ROLES, t),
            null != t ? E.Z.getGuildVersion(t.id) : null
        ]), p = s.useCallback(e => {
            var i, o;
            a({ action: 'REMOVE_ROLE' });
            let s = null !== (o = null == Z ? void 0 : Z.filter(n => n !== e.id)) && void 0 !== o ? o : [];
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? c.Z.unassignGuildRoleConnection(t.id, e.id) : d.Z.updateMemberRoles(t.id, n.id, s, [], [e.id]);
        }, [
            Z,
            t.id,
            n.id,
            a
        ]), C = s.useCallback(e => {
            a({ action: 'ADD_ROLE' });
            let i = null != Z ? Z : [];
            -1 === i.indexOf(e) && (i = i.concat([e])), d.Z.updateMemberRoles(t.id, n.id, i, [e], []);
        }, [
            Z,
            t.id,
            n.id,
            a
        ]);
    return v && !g ? null : (0, o.jsx)(m.Z, {
        title: x.Z.Messages.ROLES,
        scrollIntoView: l,
        children: (0, o.jsx)(h, {
            user: n,
            currentUser: i,
            guild: t,
            guildMember: I,
            userRoles: null != Z ? Z : [],
            highestRole: N,
            canManageRoles: g,
            onAddRole: C,
            onRemoveRole: p
        })
    });
}
