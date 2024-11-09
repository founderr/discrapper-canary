n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(620662),
    s = n(503438),
    o = n(829820),
    l = n(395361),
    u = n(475413),
    c = n(981631),
    d = n(388032),
    f = n(676411);
function _(e) {
    var t;
    let { user: n, activity: _, onAction: h } = e,
        p = (0, o.Ih)(_, n),
        m = (0, o.Fe)(_, n);
    return (0, s.Z)(_) && ((0, a.Z)(_, c.xjy.PLAY) || (0, a.Z)(_, c.xjy.SYNC))
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(u.ef, {
                      icon: i.UserPlayIcon,
                      tooltipText: null !== (t = m.tooltip) && void 0 !== t ? t : d.intl.string(d.t.eU3inJ),
                      disabled: m.disabled,
                      submitting: m.loading,
                      fullWidth: !0,
                      onClick: () => {
                          null == h || h({ action: 'PRESS_LISTEN_ALONG_ON_SPOTIFY_BUTTON' }), m.onClick();
                      }
                  }),
                  (0, r.jsx)(i.Tooltip, {
                      text: p.tooltip,
                      children: (e) => {
                          var t;
                          return (0, r.jsx)(u.tG, {
                              ...e,
                              icon: () => (0, r.jsx)(l.Z, {}),
                              text: null !== (t = p.label) && void 0 !== t ? t : d.intl.string(d.t.rRffNz),
                              disabled: p.disabled,
                              submitting: p.loading,
                              wrapperClassName: f.primaryButton,
                              fullWidth: !0,
                              onClick: () => {
                                  null == h || h({ action: 'PRESS_PLAY_ON_SPOTIFY_BUTTON' }), p.onClick();
                              }
                          });
                      }
                  })
              ]
          })
        : null;
}
