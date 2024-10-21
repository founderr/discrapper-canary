n.d(t, {
    Z: function () {
        return O;
    }
});
var o = n(200651);
n(192379);
var r = n(442837),
    i = n(481060),
    a = n(906732),
    s = n(313201),
    u = n(594174),
    c = n(74538),
    d = n(242291),
    l = n(710111),
    f = n(689938);
function O(e, t) {
    let { analyticsLocations: n } = (0, a.ZP)(),
        O = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        p = (0, s.Dt)(),
        N = (0, s.Dt)();
    return null != t && c.ZP.canUseCustomCallSounds(O)
        ? (0, o.jsxs)(o.Fragment, {
              children: [
                  (0, o.jsx)(i.MenuItem, {
                      id: p,
                      label: f.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GUILD,
                      action: () => (0, d.SZ)(t, e, n)
                  }),
                  (0, o.jsx)(i.MenuItem, {
                      id: N,
                      label: f.Z.Messages.CALL_SOUNDS_CONTEXT_MENU_GLOBAL,
                      action: () => (0, d.SZ)(l.hY, e, n)
                  })
              ]
          })
        : null;
}
