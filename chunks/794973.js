t.d(e, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var l = t(481060),
    r = t(493683),
    u = t(592125),
    a = t(388032);
function o(n, e) {
    let t = u.Z.getChannel(n);
    return null == t || t.isMultiUserDM()
        ? null
        : (0, i.jsx)(l.MenuItem, {
              id: 'close-dm',
              label: a.intl.string(a.t.jsvgc3),
              action: () => r.Z.closePrivateChannel(n, e)
          });
}
