n.d(t, {
  f: function() {
    return a
  }
});
var s = n(996106),
  i = n(186901),
  l = n(981631);

function a(e) {
  if (i.He.IPC !== e && i.He.POST_MESSAGE !== e) throw new s.Z({
    errorCode: l.lTL.INVALID_COMMAND
  }, "Invalid transport.")
}