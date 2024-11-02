t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    a = t(434404),
    o = t(962086),
    s = t(225675),
    d = t(496675),
    c = t(981631),
    u = t(388032);
function m(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.pNK.ROLES;
    return (0, l.e7)([d.Z], () => d.Z.canImpersonateRole(e, n))
        ? (0, i.jsx)(
              r.MenuItem,
              {
                  id: 'view-as-role',
                  label: u.intl.string(u.t.arFPfH),
                  icon: r.ArrowSmallRightIcon,
                  action: () => {
                      a.Z.close(),
                          (0, o.iD)(e.id, {
                              type: s.z.ROLES,
                              roles: { [n.id]: n },
                              returnToSection: t
                          });
                  }
              },
              'view-as-role'
          )
        : null;
}
