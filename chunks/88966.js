l.d(n, {
    Z: function () {
        return c;
    }
});
var t = l(735250);
l(470079);
var r = l(442837),
    i = l(481060),
    a = l(493683),
    s = l(40851),
    u = l(314897),
    d = l(981631),
    o = l(689938);
function c(e, n) {
    let l = (0, s.Aq)();
    return (0, r.e7)([u.default], () => u.default.getId() === e) || n === d.IlC.POPOUT
        ? null
        : (0, t.jsx)(i.MenuItem, {
              id: 'message-user',
              label: o.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                  a.Z.openPrivateChannel(e), l.dispatch(d.CkL.POPOUT_CLOSE), (0, i.closeAllModals)();
              }
          });
}
