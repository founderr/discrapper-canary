t.d(e, {
    g: function () {
        return s;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(378298),
    a = t(88101),
    o = t(594174),
    d = t(388032);
function s(n) {
    let e = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        t = (0, a.P)(n.id);
    return (null == e ? void 0 : e.isStaff()) === !0 && n.isDM() && null == t
        ? (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(l.MenuItem, {
                  id: 'mark-as-stranger-danger',
                  label: d.intl.string(d.t.CgWmmZ),
                  action: () => (0, u.Dl)(n.id)
              })
          })
        : null;
}
