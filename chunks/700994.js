n.d(t, {
    Z: function () {
        return Z;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    o = n(846027),
    a = n(131951),
    u = n(594174),
    d = n(36703),
    s = n(358085),
    c = n(65154),
    f = n(388032);
function Z(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
        Z = (0, l.e7)([a.Z], () => a.Z.getLocalVolume(e, n), [e, n]),
        g = e === (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id),
        m = n === c.Yn.STREAM;
    return g
        ? null
        : (0, i.jsx)(r.MenuControlItem, {
              id: 'user-volume',
              label: m ? f.intl.string(f.t.t4JBnJ) : f.intl.string(f.t.m7TNdH),
              control: (t, l) =>
                  (0, i.jsx)(r.MenuSliderControl, {
                      ...t,
                      ref: l,
                      value: (0, d.P)(Z),
                      maxValue: s.isPlatformEmbedded ? 200 : 100,
                      onChange: (t) => o.Z.setLocalVolume(e, (0, d.A)(t), n),
                      'aria-label': m ? f.intl.string(f.t.t4JBnJ) : f.intl.string(f.t.m7TNdH)
                  })
          });
}
