n.d(i, {
    Z: function () {
        return g;
    }
}), n(47120);
var l = n(735250), s = n(470079), t = n(772848), o = n(924826), a = n(91192), r = n(442837), d = n(749210), c = n(434404), u = n(271383), I = n(430824), f = n(496675), _ = n(700785), E = n(785717), m = n(256226), Z = n(678738), v = n(314172), S = n(981631), x = n(689938), h = n(700763);
function p(e) {
    let {
            user: i,
            currentUser: n,
            guild: d,
            guildMember: c,
            userRoles: u,
            highestRole: f,
            canManageRoles: E,
            onAddRole: Z,
            onRemoveRole: p
        } = e, g = (0, r.e7)([I.Z], () => I.Z.getRoles(d.id)), N = s.useMemo(() => Object.values(g).filter(e => u.includes(e.id)).sort((e, i) => {
            var n, l;
            let s = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null, t = (null === (l = i.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
            return s && !t ? 1 : !s && t ? -1 : 0;
        }), [
            g,
            u
        ]), T = E && null != c, C = s.useMemo(() => 'roles-'.concat((0, t.Z)()), []), j = (0, o.ZP)({
            id: C,
            isEnabled: !0,
            scrollToStart: S.Cyb,
            scrollToEnd: S.Cyb,
            wrap: !0
        }), A = N.length, R = 0 === A ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({ numRoles: A }), U = N.map(e => {
            var s;
            return (0, l.jsx)(m.Z, {
                role: e,
                guildId: d.id,
                disableBorderColor: !0,
                onRemove: () => p(e),
                canRemove: E ? _.r6(d, n.id, f, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && i.id === n.id
            }, e.id);
        });
    return (0, l.jsx)(a.bG, {
        navigator: j,
        children: (0, l.jsx)(a.SJ, {
            children: e => {
                let {
                    ref: i,
                    ...n
                } = e;
                return (0, l.jsxs)('div', {
                    className: h.root,
                    'aria-label': R,
                    ref: i,
                    ...n,
                    children: [
                        U,
                        T && (0, l.jsx)(v.Z, {
                            guild: d,
                            guildMember: c,
                            numRoles: u.length,
                            highestRole: f,
                            onAddRole: Z
                        })
                    ]
                });
            }
        })
    });
}
function g(e) {
    let {
            user: i,
            currentUser: n,
            guild: t,
            scrollIntoView: o
        } = e, {trackUserProfileAction: a} = (0, E.KZ)(), I = (0, r.e7)([u.ZP], () => u.ZP.getMember(t.id, i.id)), m = null == I ? void 0 : I.roles, v = null == m || 0 === m.length, h = _.e9(t, n.id), [g] = (0, r.Wu)([f.Z], () => [
            f.Z.can(S.Plq.MANAGE_ROLES, t),
            null != t ? f.Z.getGuildVersion(t.id) : null
        ]), N = s.useCallback(e => {
            var n, l;
            a({ action: 'REMOVE_ROLE' });
            let s = null !== (l = null == m ? void 0 : m.filter(i => i !== e.id)) && void 0 !== l ? l : [];
            (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : c.Z.updateMemberRoles(t.id, i.id, s, [], [e.id]);
        }, [
            m,
            t.id,
            i.id,
            a
        ]), T = s.useCallback(e => {
            a({ action: 'ADD_ROLE' });
            let n = null != m ? m : [];
            -1 === n.indexOf(e) && (n = n.concat([e])), c.Z.updateMemberRoles(t.id, i.id, n, [e], []);
        }, [
            m,
            t.id,
            i.id,
            a
        ]);
    return v && !g ? null : (0, l.jsx)(Z.Z, {
        title: x.Z.Messages.ROLES,
        scrollIntoView: o,
        children: (0, l.jsx)(p, {
            user: i,
            currentUser: n,
            guild: t,
            guildMember: I,
            userRoles: null != m ? m : [],
            highestRole: h,
            canManageRoles: g,
            onAddRole: T,
            onRemoveRole: N
        })
    });
}
