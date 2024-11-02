t.d(e, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(5036),
    a = t(58468),
    o = t(388032);
function d(n) {
    let e = (0, l.e7)([a.Z], () => a.Z.isCollapsed(n.id), [n.id]);
    return __OVERLAY__
        ? null
        : (0, i.jsx)(r.MenuCheckboxItem, {
              id: 'hide-voice-names',
              label: o.intl.string(o.t.LxzNio),
              action: () => u.Z.update(n.id),
              checked: e
          });
}
