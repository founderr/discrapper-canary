n.d(t, {
  f: function() {
    return a
  }
});
var i = n(996106),
  s = n(186901),
  l = n(981631);

function a(e) {
  if (s.He.IPC !== e && s.He.POST_MESSAGE !== e) throw new i.Z({
    errorCode: l.lTL.INVALID_COMMAND
  }, "Invalid transport.")
}