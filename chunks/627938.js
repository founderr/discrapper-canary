t.d(n, {
    Z: function () {
        return o;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(665906),
    r = t(996861),
    s = t(689938);
function o(e, n) {
    return (0, l.NE)(n, e)
        ? (0, a.jsx)(i.MenuItem, {
              id: 'thread',
              label: s.Z.Messages.CREATE_THREAD,
              icon: i.ThreadIcon,
              action: () => {
                  (0, r.gK)(n, e);
              }
          })
        : null;
}
