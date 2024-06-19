t.d(n, {
  W: function() {
    return g
  },
  Z: function() {
    return M
  }
});
var i = t(735250);
t(470079);
var a = t(913527),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  u = t(822893),
  s = t(641051),
  c = t(329461),
  d = t(831267),
  E = t(448239),
  f = t(689938);

function M(e) {
  let {
    showReminders: n
  } = s.Z.useExperiment({
    location: "a65531_1"
  }, {
    autoTrackExposure: !1
  }), t = (0, r.e7)([c.Z], () => null != c.Z.getMessageReminders().find(n => n.messageId === e.id)), a = g(e, n => (0, u.BW)(e, l()().add(n, "millisecond").toDate()));
  return n ? (0, i.jsx)(o.MenuItem, {
    id: "mark-todo",
    label: t ? f.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : f.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: t ? (0, o.makeIconCompat)(E.Z) : void 0,
    action: () => t ? (0, u.Kp)(e.id) : (0, u.BW)(e),
    children: t ? null : a
  }) : null
}

function g(e, n) {
  return d.BS.map(e => {
    let {
      duration: t,
      getLabel: a
    } = e;
    return (0, i.jsx)(o.MenuItem, {
      id: "mark-todo-".concat(t),
      label: a(),
      action: () => n(t)
    }, t)
  })
}