t.d(e, {
    e: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(378712),
    a = t(605984),
    o = t(594174),
    d = t(388032);
function s(n) {
    let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, a.k)(n.id, 'menu-items');
    return (null == e ? void 0 : e.isStaff()) === !0 && n.isDM() && null == t
        ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.MenuItem, {
                  id: 'mark-as-likely-ato',
                  label: d.intl.string(d.t.AWKKgY),
                  action: () => (0, u.J)(n.id)
              })
          })
        : null;
}
