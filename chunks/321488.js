var s, i, l = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  o = n(873546),
  c = n(481060),
  u = n(248614);

function d(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: s,
    actionType: i = 2,
    shouldHighlight: a
  } = e;
  return (0, l.jsx)(c.Tooltip, {
    text: n,
    children: e => (0, l.jsx)(c.Clickable, {
      ...e,
      "aria-label": n,
      onClick: s,
      className: r()(u.actionButton, {
        [u.actionAccept]: 0 === i,
        [u.actionDeny]: 1 === i,
        [u.highlight]: a,
        [u.actionButtonMobile]: o.tq
      }),
      children: (0, l.jsx)(t, {
        className: u.icon,
        color: "currentColor"
      })
    })
  })
}(s = i || (i = {}))[s.ACCEPT = 0] = "ACCEPT", s[s.DENY = 1] = "DENY", s[s.DEFAULT = 2] = "DEFAULT", d.ActionTypes = i, t.Z = d