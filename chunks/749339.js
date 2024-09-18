t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(735250);
t(470079);
var a = t(481060),
    s = t(39154),
    l = t(572004),
    r = t(689938);
function o(e) {
    return l.wS
        ? (0, i.jsx)(a.MenuItem, {
              id: 'copy-text',
              label: r.Z.Messages.COPY_TEXT,
              icon: a.CopyIcon,
              action: () => {
                  (e = (0, s.Z)(e)), (0, l.JG)(e.content);
              }
          })
        : null;
}
