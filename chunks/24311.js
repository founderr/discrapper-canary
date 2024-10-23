t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(200651);
t(192379);
var i = t(442837),
    a = t(481060),
    s = t(493683),
    o = t(40851),
    u = t(740492),
    d = t(314897),
    r = t(592125),
    c = t(699516),
    Z = t(944486),
    E = t(981631),
    M = t(689938);
function f(e) {
    let { user: n, context: f, label: _, joinCallVideo: I, id: g, onCall: A } = e,
        N = (0, o.Aq)(),
        C = (0, i.e7)([d.default], () => d.default.getId() === n.id),
        m = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        T = (0, i.e7)([Z.Z, r.Z], () => Z.Z.getVoiceChannelId() === r.Z.getDMFromUserId(n.id));
    if (C || f === E.IlC.POPOUT || T || n.bot || n.isProvisional) return null;
    let O = () => {
            null == A || A(), s.Z.openPrivateChannel(n.id, !0, I), N.dispatch(E.CkL.POPOUT_CLOSE), (0, a.closeAllModals)();
        },
        v = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, l.jsx)(a.MenuItem, {
        id: null != g ? g : 'call',
        label: null != _ ? _ : M.Z.Messages.CALL,
        action: v
            ? () => {
                  (0, a.openModalLazy)(async () => {
                      let { default: e } = await t.e('27157').then(t.bind(t, 736454));
                      return (n) =>
                          (0, l.jsx)(e, {
                              onSubmit: O,
                              ...n
                          });
                  });
              }
            : O,
        disabled: m
    });
}
