t.r(s), t.d(s, {
  Steps: function() {
    return a
  }
}), t(47120);
var a, i, r = t(735250),
  l = t(470079),
  n = t(481060),
  C = t(100527),
  o = t(906732),
  d = t(626135),
  c = t(281494),
  x = t(687555),
  _ = t(596583),
  p = t(981631);
(i = a || (a = {}))[i.SELECT_FRIENDS = 1] = "SELECT_FRIENDS", i[i.CONFIRMATION = 2] = "CONFIRMATION";
s.default = e => {
  let s, {
      transitionState: t,
      onClose: a,
      sourceAnalyticsLocations: i
    } = e,
    [h, u] = l.useState(1),
    [f, R] = l.useState(new Set),
    [E, j] = l.useState(new Map),
    {
      analyticsLocations: L
    } = (0, o.ZP)([...i, C.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (h) {
    case 1:
      s = (0, r.jsx)(x.Z, {
        onShare: async e => {
          try {
            d.default.track(p.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: L
            });
            let s = await (0, c.jy)(e.map(e => e.id));
            u(2), R(new Set(e)), j(s)
          } catch {}
        },
        onClose: a
      });
      break;
    case 2:
      s = (0, r.jsx)(_.Z, {
        selectedUsers: f,
        trialCreationResult: E,
        onClose: a
      });
      break;
    default:
      a()
  }
  return (0, r.jsx)(n.ModalRoot, {
    transitionState: t,
    children: s
  })
}