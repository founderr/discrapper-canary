t.d(e, {
    H: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(378298),
    a = t(359119),
    o = t(832239),
    d = t(594174),
    s = t(388032);
function c(n) {
    let e = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        t = (0, l.e7)([a.ZP], () => a.ZP.getChannelSafetyWarnings(n.id));
    return (null == e ? void 0 : e.isStaff()) !== !0 || null == t || 0 === t.length
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.MenuItem, {
                      id: 'delete-safety-warnings',
                      label: s.intl.string(s.t.g7o9bm),
                      action: () => (0, o.Vp)(n.id)
                  }),
                  (0, i.jsx)(r.MenuItem, {
                      id: 'clear-safety-warnings',
                      label: s.intl.string(s.t.VuSvGh),
                      action: () => (0, u.wS)(n.id)
                  })
              ]
          });
}
