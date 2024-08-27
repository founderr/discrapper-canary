n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    a = n(481060),
    o = n(493683),
    s = n(40851),
    l = n(314897),
    u = n(981631),
    d = n(689938);
function c(e, t) {
    let n = (0, s.Aq)();
    return (0, i.e7)([l.default], () => l.default.getId() === e) || t === u.IlC.POPOUT
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'message-user',
              label: d.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                  o.Z.openPrivateChannel(e), n.dispatch(u.CkL.POPOUT_CLOSE), (0, a.closeAllModals)();
              }
          });
}
