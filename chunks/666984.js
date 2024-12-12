r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(620662),
    o = r(503438),
    l = r(733597),
    u = r(395361),
    c = r(475413),
    d = r(981631),
    f = r(388032),
    _ = r(249942);
function h(e) {
    var n;
    let { user: r, activity: h, onAction: p } = e,
        m = (0, l.Ih)(h, r),
        g = (0, l.Fe)(h, r);
    return (0, o.Z)(h) && ((0, s.Z)(h, d.xjy.PLAY) || (0, s.Z)(h, d.xjy.SYNC))
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(c.ef, {
                      icon: a.UserPlayIcon,
                      tooltipText: null !== (n = g.tooltip) && void 0 !== n ? n : f.intl.string(f.t.eU3inJ),
                      disabled: g.disabled,
                      submitting: g.loading,
                      fullWidth: !0,
                      onClick: () => {
                          null == p || p({ action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON' }), g.onClick();
                      }
                  }),
                  (0, i.jsx)(a.Tooltip, {
                      text: m.tooltip,
                      children: (e) => {
                          var n;
                          return (0, i.jsx)(c.tG, {
                              ...e,
                              icon: () => (0, i.jsx)(u.Z, {}),
                              text: null !== (n = m.label) && void 0 !== n ? n : f.intl.string(f.t.rRffNz),
                              disabled: m.disabled,
                              submitting: m.loading,
                              wrapperClassName: _.primaryButton,
                              fullWidth: !0,
                              onClick: () => {
                                  null == p || p({ action: 'PRESS_PLAY_ON_SPOTIFY_BUTTON' }), m.onClick();
                              }
                          });
                      }
                  })
              ]
          })
        : null;
}
