r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(793030),
    s = r(442837),
    o = r(481060),
    l = r(194359),
    u = r(699516),
    c = r(502762),
    d = r(981631),
    f = r(388032),
    _ = r(267895);
function h(e) {
    let { user: n } = e,
        {
            isPendingIncoming: r,
            isBlocked: h,
            isIgnored: p
        } = (0, s.cj)([u.Z], () => ({
            isPendingIncoming: u.Z.getRelationshipType(n.id) === d.OGo.PENDING_INCOMING,
            isBlocked: u.Z.isBlocked(n.id),
            isIgnored: u.Z.isIgnored(n.id)
        }));
    return h || (p && !r)
        ? (0, i.jsxs)(c.Z.Overlay, {
              className: _.container,
              children: [
                  h &&
                      (0, i.jsx)(a.xv, {
                          variant: 'text-sm/semibold',
                          color: 'header-secondary',
                          children: f.intl.string(f.t['oC/fU1'])
                      }),
                  p &&
                      (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(a.xv, {
                                  variant: 'text-sm/semibold',
                                  color: 'header-secondary',
                                  children: f.intl.string(f.t.HXz5Ag)
                              }),
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)(a.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: '\u2022'
                                      }),
                                      (0, i.jsx)(a.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: f.intl.format(f.t.PrtAq6, {
                                              unignoreHook: (e, r) =>
                                                  (0, i.jsx)(
                                                      o.Anchor,
                                                      {
                                                          onClick: () => l.Z.unignoreUser(n.id, 'UserProfileRemediatedNotice'),
                                                          children: e
                                                      },
                                                      r
                                                  )
                                          })
                                      })
                                  ]
                              })
                          ]
                      })
              ]
          })
        : null;
}
