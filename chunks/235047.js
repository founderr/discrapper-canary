t.d(n, {
  W: function() {
    return M
  },
  Z: function() {
    return I
  }
});
var i = t(735250);
t(470079);
var a = t(913527),
  r = t.n(a),
  l = t(442837),
  o = t(481060),
  u = t(962796),
  s = t(742989),
  c = t(802463),
  d = t(981014),
  E = t(448239),
  f = t(689938);

function I(e) {
  let {
    showReminders: n
  } = s.Z.useExperiment({
    location: "a65531_1"
  }, {
    autoTrackExposure: !1
  }), t = (0, l.e7)([c.Z], () => null != c.Z.getMessageReminders().find(n => n.messageId === e.id)), a = M(e, n => (0, u.BW)(e, r()().add(n, "millisecond").toDate()));
  return n ? (0, i.jsx)(o.MenuItem, {
    id: "mark-todo",
    label: t ? f.Z.Messages.MESSAGE_REMINDERS_MARK_AS_DONE : f.Z.Messages.MESSAGE_REMINDERS_MARK_AS_TODO,
    icon: t ? (0, o.makeIconCompat)(E.Z) : void 0,
    action: () => t ? (0, u.Kp)(e.id) : (0, u.BW)(e),
    children: t ? null : a
  }) : null
}

function M(e, n) {
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