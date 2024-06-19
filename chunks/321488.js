var i, s, l = n(735250);
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
    onClick: i,
    actionType: s = 2,
    shouldHighlight: a
  } = e;
  return (0, l.jsx)(c.Tooltip, {
    text: n,
    children: e => (0, l.jsx)(c.Clickable, {
      ...e,
      "aria-label": n,
      onClick: i,
      className: r()(u.actionButton, {
        [u.actionAccept]: 0 === s,
        [u.actionDeny]: 1 === s,
        [u.highlight]: a,
        [u.actionButtonMobile]: o.tq
      }),
      children: (0, l.jsx)(t, {
        className: u.icon,
        color: "currentColor"
      })
    })
  })
}(i = s || (s = {}))[i.ACCEPT = 0] = "ACCEPT", i[i.DENY = 1] = "DENY", i[i.DEFAULT = 2] = "DEFAULT", d.ActionTypes = s, t.Z = d