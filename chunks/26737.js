t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    s = t(358085),
    l = t(998502),
    r = t(689938);
function o(e, n) {
    return s.isPlatformEmbedded && (null == e ? void 0 : e.length) !== 0
        ? (0, i.jsx)(a.MenuItem, {
              id: 'copy',
              label: r.Z.Messages.COPY,
              hint: (0, s.isMac)() ? '\u2318C' : 'Ctrl+C',
              action: () => {
                  l.ZP.copy(e), null == n || n.focus();
              }
          })
        : null;
}
