t.d(n, {
    Z: function () {
        return g;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(442837),
    a = t(481060),
    o = t(366598),
    s = t(821864),
    d = t(905753),
    c = t(995390),
    u = t(469880),
    m = t(665578),
    h = t(388032),
    p = t(121080);
function g(e) {
    let { application: n, canNavigate: t, guildId: c } = e,
        m = (0, r.e7)([d.Z], () => d.Z.isUnavailable());
    return (l.useEffect(() => (s.I4(n.id), s.kZ), [n.id]),
    l.useEffect(() => {
        s.gq(n.id, c, n.id), s.Sn(c, n.id);
    }, [n.id, c]),
    m)
        ? null
        : (0, i.jsxs)(l.Fragment, {
              children: [
                  (0, i.jsx)(o.Z, {
                      icon: (0, i.jsx)(a.SlashBoxIcon, {
                          size: 'md',
                          color: 'currentColor'
                      }),
                      title: h.intl.string(h.t.RGoJND)
                  }),
                  (0, i.jsx)(a.Text, {
                      color: 'text-muted',
                      variant: 'text-sm/normal',
                      children: h.intl.string(h.t.sCkD3d)
                  }),
                  (0, i.jsx)(f, {
                      guildId: c,
                      applicationId: n.id
                  }),
                  (0, i.jsx)(u.Z, {
                      applicationIcon: n.icon,
                      applicationName: n.name,
                      canNavigate: t,
                      guildId: c
                  })
              ]
          });
}
function f(e) {
    let { applicationId: n, guildId: t } = e,
        { originalApplicationPermissions: l, editedTargetPermissions: r, selectedPermissionCount: a } = (0, c.Z)(t, n);
    return (0, i.jsx)('div', {
        className: p.applicationPermissions,
        children: (0, i.jsx)(m.Z, {
            applicationId: n,
            guildId: t,
            inModal: !1,
            editedTargetPermissions: r,
            originalApplicationPermissions: l,
            selectedPermissionCount: a
        })
    });
}
