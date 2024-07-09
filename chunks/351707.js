i.d(n, {
    Z: function () {
        return p;
    }
}), i(47120);
var l = i(735250), s = i(470079), o = i(772848), t = i(924826), a = i(91192), r = i(442837), d = i(749210), c = i(434404), u = i(271383), I = i(430824), f = i(496675), _ = i(700785), E = i(785717), m = i(256226), Z = i(678738), v = i(314172), S = i(981631), x = i(689938), h = i(700763);
function N(e) {
    let {
            user: n,
            currentUser: i,
            guild: d,
            guildMember: c,
            userRoles: u,
            highestRole: f,
            canManageRoles: E,
            onAddRole: Z,
            onRemoveRole: N
        } = e, p = (0, r.e7)([I.Z], () => I.Z.getRoles(d.id)), g = s.useMemo(() => Object.values(p).filter(e => u.includes(e.id)).sort((e, n) => {
            var i, l;
            let s = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null, o = (null === (l = n.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
            return s && !o ? 1 : !s && o ? -1 : 0;
        }), [
            p,
            u
        ]), T = E && null != c, C = s.useMemo(() => 'roles-'.concat((0, o.Z)()), []), j = (0, t.ZP)({
            id: C,
            isEnabled: !0,
            scrollToStart: S.Cyb,
            scrollToEnd: S.Cyb,
            wrap: !0
        }), R = g.length, A = 0 === R ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({ numRoles: R }), M = g.map(e => {
            var s;
            return (0, l.jsx)(m.Z, {
                role: e,
                guildId: d.id,
                disableBorderColor: !0,
                onRemove: () => N(e),
                canRemove: E ? _.r6(d, i.id, f, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && n.id === i.id
            }, e.id);
        });
    return (0, l.jsx)(a.bG, {
        navigator: j,
        children: (0, l.jsx)(a.SJ, {
            children: e => {
                let {
                    ref: n,
                    ...i
                } = e;
                return (0, l.jsxs)('div', {
                    className: h.root,
                    'aria-label': A,
                    ref: n,
                    ...i,
                    children: [
                        M,
                        T && (0, l.jsx)(v.Z, {
                            variant: g.length > 0 ? 'icon' : 'text',
                            guild: d,
                            guildMember: c,
                            highestRole: f,
                            onAddRole: Z
                        })
                    ]
                });
            }
        })
    });
}
function p(e) {
    let {
            user: n,
            currentUser: i,
            guild: o,
            scrollIntoView: t
        } = e, {trackUserProfileAction: a} = (0, E.KZ)(), I = (0, r.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)), m = null == I ? void 0 : I.roles, v = null == m || 0 === m.length, h = _.e9(o, i.id), [p] = (0, r.Wu)([f.Z], () => [
            f.Z.can(S.Plq.MANAGE_ROLES, o),
            null != o ? f.Z.getGuildVersion(o.id) : null
        ]), g = s.useCallback(e => {
            var i, l;
            a({ action: 'REMOVE_ROLE' });
            let s = null !== (l = null == m ? void 0 : m.filter(n => n !== e.id)) && void 0 !== l ? l : [];
            (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, s, [], [e.id]);
        }, [
            m,
            o.id,
            n.id,
            a
        ]), T = s.useCallback(e => {
            a({ action: 'ADD_ROLE' });
            let i = null != m ? m : [];
            -1 === i.indexOf(e) && (i = i.concat([e])), c.Z.updateMemberRoles(o.id, n.id, i, [e], []);
        }, [
            m,
            o.id,
            n.id,
            a
        ]);
    return v && !p ? null : (0, l.jsx)(Z.Z, {
        title: x.Z.Messages.ROLES,
        scrollIntoView: t,
        children: (0, l.jsx)(N, {
            user: n,
            currentUser: i,
            guild: o,
            guildMember: I,
            userRoles: null != m ? m : [],
            highestRole: h,
            canManageRoles: p,
            onAddRole: T,
            onRemoveRole: g
        })
    });
}
