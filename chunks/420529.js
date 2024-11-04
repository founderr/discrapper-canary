e.d(n, {
    Z: function () {
        return p;
    }
});
var i = e(200651);
e(192379);
var l = e(399606),
    r = e(481060),
    a = e(231757),
    d = e(397639),
    u = e(19780),
    s = e(979651),
    o = e(951206),
    _ = e(446226),
    c = e(937393),
    E = e(721351),
    g = e(981631),
    I = e(388032);
function p(t) {
    let n = (0, l.e7)([u.Z], () => u.Z.getChannelId() === t.id),
        p = (0, _.Z)(),
        f = (null == p ? void 0 : p.channelId) === t.id,
        T = (0, d.V)(t) && !t.isPrivate(),
        m = (0, d.Z)(t),
        S = (!(0, l.e7)([s.Z], () => s.Z.isInChannel(t.id)) && m) || T,
        U = (0, c.Z)();
    if (!f && 0 === U.length) return null;
    let C = (n) => {
        if (!n.twoWayLink || n.revoked) {
            (0, a.Z)({
                platformType: n.type,
                location: 'Console Transfer Item'
            });
            return;
        }
        n.type === g.ABu.XBOX
            ? (0, r.openModalLazy)(async () => {
                  let { default: n } = await Promise.all([e.e('15812'), e.e('522')]).then(e.bind(e, 200623));
                  return (e) =>
                      (0, i.jsx)(n, {
                          ...e,
                          channel: t
                      });
              })
            : (n.type === g.ABu.PLAYSTATION || n.type === g.ABu.PLAYSTATION_STAGING) &&
              (0, r.openModalLazy)(async () => {
                  let { default: l } = await e.e('638').then(e.bind(e, 543974));
                  return (e) =>
                      (0, i.jsx)(l, {
                          ...e,
                          platform: n.type,
                          channel: t
                      });
              });
    };
    return (0, i.jsx)(i.Fragment, {
        children: f
            ? (0, i.jsx)(r.MenuItem, {
                  label: I.intl.string(I.t.PlwgdX),
                  id: 'handoff',
                  action: () => {
                      (0, o.F)(p);
                  },
                  icon: (0, E.Z)(void 0),
                  disabled: S
              })
            : U.map((t) =>
                  (0, i.jsx)(
                      r.MenuItem,
                      {
                          id: 'transfer-'.concat(t.type, '-').concat(t.id),
                          label: (function (t, n) {
                              if (t === g.ABu.XBOX) return n ? I.intl.string(I.t['f+Aijo']) : I.intl.string(I.t.E8euSk);
                              if (t === g.ABu.PLAYSTATION) return n ? I.intl.string(I.t.vzfxmZ) : I.intl.string(I.t.QxEYDg);
                              if (t === g.ABu.PLAYSTATION_STAGING) return n ? I.intl.string(I.t.BDiXtb) : I.intl.string(I.t['bhdB9/']);
                          })(t.type, n),
                          action: () => C(t),
                          icon: (0, E.Z)(t.type),
                          disabled: S
                      },
                      t.id
                  )
              )
    });
}
