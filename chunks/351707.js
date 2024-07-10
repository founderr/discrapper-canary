i.d(n, {
    Z: function () {
        return T;
    }
}), i(47120);
var s = i(735250), l = i(470079), o = i(772848), t = i(924826), r = i(91192), a = i(442837), d = i(749210), c = i(434404), u = i(271383), I = i(430824), _ = i(496675), f = i(700785), E = i(785717), m = i(256226), S = i(678738), Z = i(314172), x = i(981631), v = i(689938), h = i(700763);
function p(e) {
    let {
            user: n,
            currentUser: i,
            guild: d,
            guildMember: c,
            userRoles: u,
            highestRole: _,
            canManageRoles: E,
            onAddRole: S,
            onRemoveRole: p
        } = e, T = (0, a.e7)([I.Z], () => I.Z.getRoles(d.id)), g = l.useMemo(() => Object.values(T).filter(e => u.includes(e.id)).sort((e, n) => {
            var i, s;
            let l = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null, o = (null === (s = n.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
            return l && !o ? 1 : !l && o ? -1 : 0;
        }), [
            T,
            u
        ]), N = E && null != c, C = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []), j = (0, t.ZP)({
            id: C,
            isEnabled: !0,
            scrollToStart: x.Cyb,
            scrollToEnd: x.Cyb,
            wrap: !0
        }), A = g.length, U = 0 === A ? v.Z.Messages.ROLE_LIST_EMPTY : v.Z.Messages.ROLES_LIST.format({ numRoles: A }), R = g.map(e => {
            var l;
            return (0, s.jsx)(m.Z, {
                role: e,
                guildId: d.id,
                disableBorderColor: !0,
                onRemove: () => p(e),
                canRemove: E ? f.r6(d, i.id, _, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === i.id
            }, e.id);
        });
    return (0, s.jsx)(r.bG, {
        navigator: j,
        children: (0, s.jsx)(r.SJ, {
            children: e => {
                let {
                    ref: n,
                    ...i
                } = e;
                return (0, s.jsxs)('div', {
                    className: h.root,
                    'aria-label': U,
                    ref: n,
                    ...i,
                    children: [
                        R,
                        N && (0, s.jsx)(Z.Z, {
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
function T(e) {
    let {
            user: n,
            currentUser: i,
            guild: o,
            scrollIntoView: t
        } = e, {trackUserProfileAction: r} = (0, E.KZ)(), I = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)), m = null == I ? void 0 : I.roles, Z = null == m || 0 === m.length, h = f.e9(o, i.id), [T] = (0, a.Wu)([_.Z], () => [
            _.Z.can(x.Plq.MANAGE_ROLES, o),
            null != o ? _.Z.getGuildVersion(o.id) : null
        ]), g = l.useCallback(e => {
            var i, s;
            r({ action: 'REMOVE_ROLE' });
            let l = null !== (s = null == m ? void 0 : m.filter(n => n !== e.id)) && void 0 !== s ? s : [];
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
        }, [
            m,
            o.id,
            n.id,
            r
        ]), N = l.useCallback(e => {
            r({ action: 'ADD_ROLE' });
            let i = null != m ? m : [];
            -1 === i.indexOf(e) && (i = i.concat([e])), c.Z.updateMemberRoles(o.id, n.id, i, [e], []);
        }, [
            m,
            o.id,
            n.id,
            r
        ]);
    return Z && !T ? null : (0, s.jsx)(S.Z, {
        title: v.Z.Messages.ROLES,
        scrollIntoView: t,
        children: (0, s.jsx)(p, {
            user: n,
            currentUser: i,
            guild: o,
            guildMember: I,
            userRoles: null != m ? m : [],
            highestRole: h,
            canManageRoles: T,
            onAddRole: N,
            onRemoveRole: g
        })
    });
}
