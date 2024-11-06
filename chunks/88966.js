t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    r = t(481060),
    a = t(493683),
    u = t(40851),
    d = t(314897),
    o = t(981631),
    s = t(388032);
function c(e, n) {
    let t = (0, u.Aq)();
    return (0, i.e7)([d.default], () => d.default.getId() === e) || n === o.IlC.POPOUT
        ? null
        : (0, l.jsx)(r.MenuItem, {
              id: 'message-user',
              label: s.intl.string(s.t.OAJQlJ),
              action: () => {
                  a.Z.openPrivateChannel(e), t.dispatch(o.CkL.POPOUT_CLOSE), (0, r.closeAllModals)();
              }
          });
}
