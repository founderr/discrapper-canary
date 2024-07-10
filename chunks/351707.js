n.d(i, {
    Z: function () {
        return g;
    }
}), n(47120);
var s = n(735250), l = n(470079), t = n(772848), o = n(924826), r = n(91192), a = n(442837), d = n(749210), c = n(434404), u = n(271383), I = n(430824), _ = n(496675), f = n(700785), E = n(785717), m = n(256226), S = n(678738), v = n(314172), Z = n(981631), x = n(689938), h = n(700763);
function p(e) {
    let {
            user: i,
            currentUser: n,
            guild: d,
            guildMember: c,
            userRoles: u,
            highestRole: _,
            canManageRoles: E,
            onAddRole: S,
            onRemoveRole: p
        } = e, g = (0, a.e7)([I.Z], () => I.Z.getRoles(d.id)), T = l.useMemo(() => Object.values(g).filter(e => u.includes(e.id)).sort((e, i) => {
            var n, s;
            let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null, t = (null === (s = i.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
            return l && !t ? 1 : !l && t ? -1 : 0;
        }), [
            g,
            u
        ]), N = E && null != c, C = l.useMemo(() => 'roles-'.concat((0, t.Z)()), []), j = (0, o.ZP)({
            id: C,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0
        }), A = T.length, O = 0 === A ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({ numRoles: A }), M = T.map(e => {
            var l;
            return (0, s.jsx)(m.Z, {
                role: e,
                guildId: d.id,
                disableBorderColor: !0,
                onRemove: () => p(e),
                canRemove: E ? f.r6(d, n.id, _, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && i.id === n.id
            }, e.id);
        });
    return (0, s.jsx)(r.bG, {
        navigator: j,
        children: (0, s.jsx)(r.SJ, {
            children: e => {
                let {
                    ref: i,
                    ...n
                } = e;
                return (0, s.jsxs)('div', {
                    className: h.root,
                    'aria-label': O,
                    ref: i,
                    ...n,
                    children: [
                        M,
                        N && (0, s.jsx)(v.Z, {
                            guild: d,
                            guildMember: c,
                            numRoles: u.length,
                            highestRole: _,
                            onAddRole: S
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
        } = e, {trackUserProfileAction: r} = (0, E.KZ)(), I = (0, a.e7)([u.ZP], () => u.ZP.getMember(t.id, i.id)), m = null == I ? void 0 : I.roles, v = null == m || 0 === m.length, h = f.e9(t, n.id), [g] = (0, a.Wu)([_.Z], () => [
            _.Z.can(Z.Plq.MANAGE_ROLES, t),
            null != t ? _.Z.getGuildVersion(t.id) : null
        ]), T = l.useCallback(e => {
            var n, s;
            r({ action: 'REMOVE_ROLE' });
            let l = null !== (s = null == m ? void 0 : m.filter(i => i !== e.id)) && void 0 !== s ? s : [];
            (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : c.Z.updateMemberRoles(t.id, i.id, l, [], [e.id]);
        }, [
            m,
            t.id,
            i.id,
            r
        ]), N = l.useCallback(e => {
            r({ action: 'ADD_ROLE' });
            let n = null != m ? m : [];
            -1 === n.indexOf(e) && (n = n.concat([e])), c.Z.updateMemberRoles(t.id, i.id, n, [e], []);
        }, [
            m,
            t.id,
            i.id,
            r
        ]);
    return v && !g ? null : (0, s.jsx)(S.Z, {
        title: x.Z.Messages.ROLES,
        scrollIntoView: o,
        children: (0, s.jsx)(p, {
            user: i,
            currentUser: n,
            guild: t,
            guildMember: I,
            userRoles: null != m ? m : [],
            highestRole: h,
            canManageRoles: g,
            onAddRole: N,
            onRemoveRole: T
        })
    });
}
