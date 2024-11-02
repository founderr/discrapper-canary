t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(665906),
    a = t(996861),
    o = t(388032);
function s(e, n) {
    return (0, r.NE)(n, e)
        ? (0, i.jsx)(l.MenuItem, {
              id: 'thread',
              label: o.intl.string(o.t.rBIGBA),
              icon: l.ThreadIcon,
              action: () => {
                  (0, a.gK)(n, e);
              }
          })
        : null;
}
