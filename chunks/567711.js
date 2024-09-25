t.d(n, {
    Z: function () {
        return M;
    }
});
var l = t(735250);
t(470079);
var u = t(442837),
    a = t(481060),
    r = t(313889),
    i = t(825829),
    o = t(36459),
    c = t(592125),
    s = t(375954),
    d = t(496675),
    _ = t(981631),
    E = t(689938);
function M(e, n) {
    let t = (0, u.e7)([d.Z], () => null != e && d.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, { channelId: e }), [e]),
        M = (0, u.e7)([c.Z], () => c.Z.getChannel(e), [e]),
        f = (0, u.e7)([s.Z], () => (null != e && null != n ? s.Z.getMessage(e, n) : null)),
        Z = (0, i.NK)(null != f ? f : null);
    if (null == M || null == f) return null;
    let A = null != Z && Z.actions.hasOwnProperty(r.d.SET_COMPLETED) ? r.d.UNSET_COMPLETED : r.d.SET_COMPLETED,
        T = A === r.d.SET_COMPLETED ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
    return t && null != n
        ? (0, l.jsx)(
              a.MenuItem,
              {
                  id: 'mark-automod-alert-completed',
                  label: T,
                  action: () => {
                      (0, o.Xx)(n, M, A);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
