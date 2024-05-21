"use strict";
l.r(t), l.d(t, {
  showPermissionLockoutModal: function() {
    return r
  }
});
var s = l("668781"),
  a = l("63063"),
  n = l("981631"),
  i = l("689938");

function r(e) {
  s.default.show({
    title: i.default.Messages.SELF_DENY_PERMISSION_TITLE,
    body: i.default.Messages.SELF_DENY_PERMISSION_BODY.format({
      name: e
    }),
    cancelText: i.default.Messages.HELP_DESK,
    onCancel() {
      window.open(a.default.getArticleURL(n.HelpdeskArticles.PERMISSIONS_LOCKOUT))
    }
  })
}