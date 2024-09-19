t.d(n, {
    Z: function () {
        return M;
    }
});
var i = t(735250);
t(470079);
var a = t(442837),
    s = t(481060),
    l = t(904245),
    r = t(257559),
    o = t(665906),
    u = t(496675),
    d = t(594174),
    c = t(981631),
    E = t(689938);
function M(e, n) {
    let t = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        M = (0, o.$R)(n),
        g = (0, a.e7)([u.Z], () => u.Z.can(c.Plq.MANAGE_MESSAGES, n), [n]),
        m = g || (null != t && e.canDeleteOwnMessage(t.id));
    return e.state === c.yb.SENDING || !m || c.V$x.UNDELETABLE.has(e.type) || !M
        ? null
        : (0, i.jsx)(s.MenuItem, {
              id: 'delete',
              label: E.Z.Messages.DELETE_MESSAGE,
              action: function (t) {
                  e.state === c.yb.SEND_FAILED ? l.Z.deleteMessage(n.id, e.id, !0) : t.shiftKey ? l.Z.deleteMessage(n.id, e.id) : r.Z.confirmDelete(n, e, !0);
              },
              color: 'danger',
              icon: s.TrashIcon
          });
}
