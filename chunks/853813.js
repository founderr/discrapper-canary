n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(512722),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(367907),
    d = n(605436),
    u = n(228643),
    m = n(496675),
    h = n(626135),
    g = n(823379),
    x = n(243730),
    p = n(946724),
    f = n(999382),
    C = n(130341),
    v = n(981975),
    _ = n(660962),
    I = n(442182),
    N = n(322816),
    T = n(266665),
    j = n(203377),
    b = n(981631),
    S = n(77473);
function E(e) {
    let t,
        { editRoleId: n, setEditRoleId: l, selectedSection: E, setSelectedSection: R } = e,
        Z = (0, a.e7)([p.Z], () => p.Z.guild, []);
    s()(null != Z, 'guildId cannot be null here');
    let { role: y, permissionSearchQuery: A } = (0, a.cj)(
        [p.Z],
        () => ({
            role: p.Z.getRole(n),
            permissionSearchQuery: p.Z.getPermissionSearchQuery()
        }),
        [n]
    );
    r.useEffect(() => {
        null == y && l(null);
    }, [y, l]);
    let L = (0, a.e7)([m.Z], () => m.Z.getHighestRole(Z), [Z]),
        D = (0, a.e7)([m.Z], () => !m.Z.isRoleHigher(Z, L, y)),
        O = r.useRef(null),
        k = (0, a.e7)([f.Z], () => f.Z.getProps().integrations);
    if (
        (r.useEffect(() => {
            var e, t;
            let i = (0, C.UT)(E),
                r = null !== (t = null === (e = x.Z.getRoleMemberCount(Z.id)) || void 0 === e ? void 0 : e[n]) && void 0 !== t ? t : 0;
            h.default.track(b.rMx.ROLE_PAGE_VIEWED, {
                tab_opened: i,
                is_everyone: (0, d.pM)(Z.id, n),
                role_id: n,
                role_mentionable: null == y ? void 0 : y.mentionable,
                role_hoist: null == y ? void 0 : y.hoist,
                role_permissions: null == y ? void 0 : y.permissions.toString(),
                role_num_members: r,
                ...(0, c.hH)(Z.id)
            });
        }, [E, Z.id, null == y ? void 0 : y.id]),
        r.useEffect(() => {
            if ((null == y ? void 0 : y.id) != null) (0, u.sE)(Z.id, y.id);
        }, [Z.id, null == y ? void 0 : y.id]),
        null == y)
    )
        return null;
    switch (E) {
        case j.ZI.DISPLAY:
            t = (0, i.jsx)(_.ZP, {
                guild: Z,
                role: y,
                locked: D,
                highestRole: L,
                setSelectedSection: R
            });
            break;
        case j.ZI.PERMISSIONS:
            t = (0, i.jsx)(N.ZP, {
                guild: Z,
                role: y,
                locked: D,
                setSelectedSection: R,
                initialSearchQuery: A
            });
            break;
        case j.ZI.VERIFICATIONS:
            t = (0, i.jsx)(v.Z, {
                guild: Z,
                role: y,
                locked: D,
                setSelectedSection: R,
                integrations: null != k ? k : void 0
            });
            break;
        case j.ZI.MEMBERS:
            t = (0, i.jsx)(I.ZP, {
                guild: Z,
                role: y,
                locked: D,
                setSelectedSection: R
            });
            break;
        default:
            (0, g.vE)(E);
    }
    return (0, i.jsxs)(o.FormSection, {
        className: S.page,
        children: [
            (0, i.jsx)(T.Z, {
                guild: Z,
                currentRoleId: n,
                setCurrentRoleId: l,
                setSelectedSection: R
            }),
            (0, i.jsx)('div', {
                className: S.contentContainer,
                ref: O,
                children: (0, i.jsx)(o.FocusRingScope, {
                    containerRef: O,
                    children: t
                })
            })
        ]
    });
}
