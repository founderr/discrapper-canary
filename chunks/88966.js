i.d(e, {
    Z: function () {
        return c;
    }
});
var r = i(200651);
i(192379);
var t = i(442837),
    a = i(481060),
    s = i(493683),
    d = i(40851),
    l = i(314897),
    o = i(981631),
    u = i(388032);
function c(n, e) {
    let i = (0, d.Aq)();
    return (0, t.e7)([l.default], () => l.default.getId() === n) || e === o.IlC.POPOUT
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'message-user',
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                  s.Z.openPrivateChannel(n), i.dispatch(o.CkL.POPOUT_CLOSE), (0, a.closeAllModals)();
              }
          });
}
