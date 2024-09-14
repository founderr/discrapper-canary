s.d(t, {
    X: function () {
        return r;
    }
});
var n = s(668781),
    l = s(63063),
    i = s(981631),
    a = s(689938);
function r(e) {
    n.Z.show({
        title: a.Z.Messages.SELF_DENY_PERMISSION_TITLE,
        body: a.Z.Messages.SELF_DENY_PERMISSION_BODY.format({ name: e }),
        cancelText: a.Z.Messages.HELP_DESK,
        onCancel() {
            window.open(l.Z.getArticleURL(i.BhN.PERMISSIONS_LOCKOUT));
        }
    });
}
