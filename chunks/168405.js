t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var a = t(481060),
    s = t(665906),
    l = t(50284),
    r = t(689938);
function o(e, n) {
    return (0, s.$R)(n)
        ? (0, i.jsx)(a.MenuItem, {
              id: 'mark-unread',
              label: r.Z.Messages.MARK_UNREAD,
              action: () => (0, l.Z)(n.id, e.id),
              icon: a.ChatMarkUnreadIcon
          })
        : null;
}
