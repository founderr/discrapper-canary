t.d(n, {
  Z: function() {
    return E
  }
});
var i = t(735250);
t(470079);
var a = t(442837),
  l = t(481060),
  r = t(332148),
  o = t(257559),
  u = t(496675),
  s = t(151007),
  c = t(981631),
  d = t(689938);

function E(e, n) {
  let t = (0, a.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]);
  return e.state !== c.yb.SEND_FAILED && (0, s.Z)(e, n, t) ? !1 === e.pinned ? (0, i.jsx)(l.MenuItem, {
    id: "pin",
    action: function(t) {
      t.shiftKey ? r.Z.pinMessage(n, e.id) : o.Z.confirmPin(n, e)
    },
    label: d.Z.Messages.PIN_MESSAGE,
    icon: l.PinIcon
  }) : (0, i.jsx)(l.MenuItem, {
    id: "unpin",
    action: function(t) {
      t.shiftKey ? r.Z.unpinMessage(n, e.id) : o.Z.confirmUnpin(n, e)
    },
    label: d.Z.Messages.UNPIN_MESSAGE,
    icon: l.PinIcon
  }) : null
}