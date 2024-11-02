t.d(n, {
    Z: function () {
        return p;
    }
}),
    t(653041);
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(749210),
    o = t(240872),
    s = t(605436),
    d = t(228643),
    c = t(299206),
    u = t(496675),
    m = t(867108),
    h = t(388032);
function p(e, n) {
    var t;
    let p = (0, l.e7)([u.Z], () => {
            let t = u.Z.getHighestRole(e);
            return !u.Z.isRoleHigher(e, t, n);
        }),
        g = [],
        f = (0, m.Z)(e, n);
    null != f && g.push(f);
    let x = (0, c.Z)({
        id: n.id,
        label: h.intl.string(h.t.sMsaLi)
    });
    null != x && g.push(x);
    let b = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) === null,
        v = n.managed && !b,
        C = null != n && (0, s.pM)(e.id, n.id);
    return (
        !p &&
            !v &&
            !C &&
            g.push(
                (0, i.jsx)(
                    r.MenuGroup,
                    {
                        children: (0, i.jsx)(r.MenuItem, {
                            id: 'delete-role',
                            label: h.intl.string(h.t.oyYWHB),
                            color: 'danger',
                            icon: r.TrashIcon,
                            action: () => {
                                o.Z.show({
                                    title: h.intl.string(h.t.YWISbW),
                                    body: h.intl.format(h.t['9+nrUV'], { name: n.name }),
                                    cancelText: h.intl.string(h.t['ETE/oK']),
                                    onConfirm: async () => {
                                        b && (await (0, d.L_)(e.id, n.id, [])), a.Z.deleteRole(e.id, n.id);
                                    }
                                });
                            }
                        })
                    },
                    'delete-role'
                )
            ),
        g
    );
}
