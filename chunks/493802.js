t.d(e, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(5036),
    o = t(58468),
    a = t(388032);
function c(n) {
    let e = (0, l.e7)([o.Z], () => o.Z.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, i.jsx)(r.MenuCheckboxItem, {
              id: 'hide-voice-names',
              label: a.intl.string(a.t.LxzNio),
              action: () => u.Z.update(n.id),
              checked: e
          });
}
