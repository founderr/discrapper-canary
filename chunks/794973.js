t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(493683),
    u = t(592125),
    a = t(388032);
function o(n, e) {
    let t = u.Z.getChannel(n);
    return null == t || t.isMultiUserDM()
        ? null
        : (0, i.jsx)(r.MenuItem, {
              id: 'close-dm',
              label: a.intl.string(a.t.jsvgc3),
              action: () => l.Z.closePrivateChannel(n, e)
          });
}
