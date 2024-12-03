n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(793030),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(699516),
    u = n(502762),
    c = n(981631),
    d = n(388032),
    f = n(267895);
function _(e) {
    let { user: t } = e,
        {
            isPendingIncoming: n,
            isBlocked: _,
            isIgnored: p
        } = (0, a.cj)([l.Z], () => ({
            isPendingIncoming: l.Z.getRelationshipType(t.id) === c.OGo.PENDING_INCOMING,
            isBlocked: l.Z.isBlocked(t.id),
            isIgnored: l.Z.isIgnored(t.id)
        }));
    return _ || (p && !n)
        ? (0, r.jsxs)(u.Z.Overlay, {
              className: f.container,
              children: [
                  _ &&
                      (0, r.jsx)(i.xv, {
                          variant: 'text-sm/semibold',
                          color: 'header-secondary',
                          children: d.intl.string(d.t['oC/fU1'])
                      }),
                  p &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(i.xv, {
                                  variant: 'text-sm/semibold',
                                  color: 'header-secondary',
                                  children: d.intl.string(d.t.HXz5Ag)
                              }),
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)(i.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: '\u2022'
                                      }),
                                      (0, r.jsx)(i.xv, {
                                          variant: 'text-sm/semibold',
                                          color: 'header-secondary',
                                          children: d.intl.format(d.t.PrtAq6, {
                                              unignoreHook: (e, n) =>
                                                  (0, r.jsx)(
                                                      s.Anchor,
                                                      {
                                                          onClick: () => o.Z.unignoreUser(t.id, 'UserProfileRemediatedNotice'),
                                                          children: e
                                                      },
                                                      n
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
