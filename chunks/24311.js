n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(493683),
    a = n(40851),
    u = n(740492),
    d = n(314897),
    s = n(592125),
    c = n(699516),
    f = n(944486),
    Z = n(981631),
    g = n(388032);
function m(e) {
    let { user: t, context: m, label: v, joinCallVideo: b, id: x, onCall: M } = e,
        I = (0, a.Aq)(),
        h = (0, l.e7)([d.default], () => d.default.getId() === t.id),
        C = (0, l.e7)([c.Z], () => c.Z.isBlocked(t.id)),
        L = (0, l.e7)([f.Z, s.Z], () => f.Z.getVoiceChannelId() === s.Z.getDMFromUserId(t.id));
    if (h || m === Z.IlC.POPOUT || L || t.bot || t.isProvisional) return null;
    let A = () => {
            null == M || M(), o.Z.openPrivateChannel(t.id, !0, b), I.dispatch(Z.CkL.POPOUT_CLOSE), (0, r.closeAllModals)();
        },
        U = !u.ZP.disableCallUserConfirmationPrompt;
    return (0, i.jsx)(r.MenuItem, {
        id: null != x ? x : 'call',
        label: null != v ? v : g.intl.string(g.t.JJogjo),
        action: U
            ? () => {
                  (0, r.openModalLazy)(async () => {
                      let { default: e } = await n.e('27157').then(n.bind(n, 736454));
                      return (t) =>
                          (0, i.jsx)(e, {
                              onSubmit: A,
                              ...t
                          });
                  });
              }
            : A,
        disabled: C
    });
}
