e.d(t, {
    Z: function () {
        return c;
    }
});
var i = e(200651);
e(192379);
var r = e(442837),
    l = e(481060),
    a = e(493683),
    o = e(40851),
    u = e(314897),
    d = e(981631),
    s = e(388032);
function c(n, t) {
    let e = (0, o.Aq)();
    return (0, r.e7)([u.default], () => u.default.getId() === n) || t === d.IlC.POPOUT
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'message-user',
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                  a.Z.openPrivateChannel(n), e.dispatch(d.CkL.POPOUT_CLOSE), (0, l.closeAllModals)();
              }
          });
}
