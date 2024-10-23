t.d(n, {
    Z: function () {
        return I;
    }
});
var i = t(200651);
t(192379);
var a = t(442837),
    l = t(481060),
    s = t(434404),
    o = t(962086),
    r = t(225675),
    d = t(496675),
    c = t(981631),
    u = t(689938);
function I(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.pNK.ROLES;
    return (0, a.e7)([d.Z], () => d.Z.canImpersonateRole(e, n))
        ? (0, i.jsx)(
              l.MenuItem,
              {
                  id: 'view-as-role',
                  label: u.Z.Messages.VIEW_AS_ROLE,
                  icon: l.ArrowSmallRightIcon,
                  action: () => {
                      s.Z.close(),
                          (0, o.iD)(e.id, {
                              type: r.z.ROLES,
                              roles: { [n.id]: n },
                              returnToSection: t
                          });
                  }
              },
              'view-as-role'
          )
        : null;
}
