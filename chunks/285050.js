n.d(t, {
  e: function() {
return s;
  }
});
var r = n(470079),
  i = n(718107),
  a = n(902897);

function s() {
  let {
statusReactReplyEnabled: e,
avatarReactReplyEnabled: t
  } = (0, i.t)({
location: 'useReactReplySent'
  }), n = e || t, s = (0, a.Y)(), o = r.useCallback(() => {
n && s.notifyReactSent();
  }, [
s,
n
  ]), l = r.useCallback(() => {
n && s.clearReactSent();
  }, [
s,
n
  ]), u = r.useCallback(() => {
n && s.notifyReplySent();
  }, [
s,
n
  ]), c = r.useCallback(() => {
n && s.clearReplySent();
  }, [
s,
n
  ]);
  return {
reactSent: s.reactSent,
notifyReactSent: o,
clearReactSent: l,
replySent: s.replySent,
notifyReplySent: u,
clearReplySent: c
  };
}