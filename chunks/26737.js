t.d(n, {
    Z: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(358085),
    a = t(998502),
    o = t(388032);
function s(e, n) {
    return r.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(l.MenuItem, {
              id: 'copy',
              label: o.intl.string(o.t.OpuAlJ),
              hint: (0, r.isMac)() ? '\u2318C' : 'Ctrl+C',
              action: () => {
                  a.ZP.copy(e), null == n || n.focus();
              }
          })
        : null;
}
