t.d(e, {
    Z: function () {
        return M;
    }
});
var r = t(735250);
t(470079);
var a = t(442837),
    u = t(481060),
    i = t(313889),
    l = t(825829),
    o = t(36459),
    c = t(592125),
    d = t(375954),
    s = t(496675),
    _ = t(981631),
    E = t(689938);
function M(n, e) {
    let t = (0, a.e7)([s.Z], () => null != n && s.Z.canWithPartialContext(_.Plq.MANAGE_MESSAGES, { channelId: n }), [n]),
        M = (0, a.e7)([c.Z], () => c.Z.getChannel(n), [n]),
        f = (0, a.e7)([d.Z], () => (null != n && null != e ? d.Z.getMessage(n, e) : null)),
        A = (0, l.NK)(null != f ? f : null);
    if (null == M || null == f) return null;
    let I = null != A && A.actions.hasOwnProperty(i.d.SET_COMPLETED) ? i.d.UNSET_COMPLETED : i.d.SET_COMPLETED,
        O = I === i.d.SET_COMPLETED ? E.Z.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : E.Z.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
    return t && null != e
        ? (0, r.jsx)(
              u.MenuItem,
              {
                  id: 'mark-automod-alert-completed',
                  label: O,
                  action: () => {
                      (0, o.Xx)(e, M, I);
                  }
              },
              'mark-automod-alert-completed'
          )
        : null;
}
