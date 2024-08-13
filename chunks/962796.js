n.d(t, {
  M: function() {
return l;
  },
  Y: function() {
return r;
  }
}), n(47120);
var i = n(570140),
  a = n(192720),
  s = n(768943);

function r(e, t) {
  i.Z.dispatch({
type: 'MESSAGE_REMINDER_TOGGLE',
savedMessageData: e,
complete: t
  });
}

function l() {
  let e = s.Z.getMessageReminders().filter(e => e.complete);
  if (e.length > 0)
for (let t of e)
  (0, a.ep)(t.saveData);
}