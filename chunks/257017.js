t.d(s, {
  X: function() {
    return r
  }
});
var l = t(668781),
  n = t(63063),
  i = t(981631),
  a = t(689938);

function r(e) {
  l.Z.show({
    title: a.Z.Messages.SELF_DENY_PERMISSION_TITLE,
    body: a.Z.Messages.SELF_DENY_PERMISSION_BODY.format({
      name: e
    }),
    cancelText: a.Z.Messages.HELP_DESK,
    onCancel() {
      window.open(n.Z.getArticleURL(i.BhN.PERMISSIONS_LOCKOUT))
    }
  })
}