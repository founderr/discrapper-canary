t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    s = t(665906),
    l = t(996861),
    r = t(689938);
function o(e, n) {
    return (0, s.NE)(n, e)
        ? (0, i.jsx)(a.MenuItem, {
              id: 'thread',
              label: r.Z.Messages.CREATE_THREAD,
              icon: a.ThreadIcon,
              action: () => {
                  (0, l.gK)(n, e);
              }
          })
        : null;
}
