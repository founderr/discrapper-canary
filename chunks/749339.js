t.d(n, {
    Z: function () {
        return o;
    }
});
var a = t(735250);
t(470079);
var i = t(481060),
    l = t(39154),
    r = t(572004),
    s = t(689938);
function o(e) {
    return r.wS
        ? (0, a.jsx)(i.MenuItem, {
              id: 'copy-text',
              label: s.Z.Messages.COPY_TEXT,
              icon: i.CopyIcon,
              action: () => {
                  (e = (0, l.Z)(e)), (0, r.JG)(e.content);
              }
          })
        : null;
}
