n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(493683),
    o = n(37234),
    s = n(314897),
    l = n(981631),
    u = n(689938);
function d(e, t) {
    let n = s.default.getId(),
        d = t === l.IlC.POPOUT;
    return n === e || d
        ? null
        : (0, r.jsx)(i.MenuItem, {
              id: 'message-user',
              label: u.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                  a.Z.openPrivateChannel(e), (0, o.xf)();
              }
          });
}
