n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    r = n(481060),
    l = n(846027),
    a = n(131951),
    o = n(358085),
    c = n(388032),
    d = n(971436);
function u() {
    let {
            videoHook: e,
            experimentalSoundshare: t,
            useSystemScreensharePicker: n,
            supportsVideoHook: u,
            supportsExperimentalSoundshare: m,
            supportsSystemScreensharePicker: h
        } = (0, s.cj)([a.Z], () => ({
            videoHook: a.Z.getVideoHook(),
            experimentalSoundshare: a.Z.getExperimentalSoundshare(),
            useSystemScreensharePicker: a.Z.getUseSystemScreensharePicker(),
            supportsVideoHook: a.Z.supportsVideoHook(),
            supportsExperimentalSoundshare: a.Z.supportsExperimentalSoundshare(),
            supportsSystemScreensharePicker: a.Z.supportsSystemScreensharePicker()
        })),
        g = h && (0, o.isMac)();
    return u || m || g
        ? (0, i.jsxs)(r.FormSection, {
              className: d.marginBottom20,
              title: c.intl.string(c.t.NMCIf3),
              children: [
                  u &&
                      (0, i.jsx)(r.FormSwitch, {
                          value: e,
                          onChange: (e) => l.Z.setVideoHook(e),
                          note: c.intl.string(c.t['Fj/xn5']),
                          children: c.intl.string(c.t.GmWk2N)
                      }),
                  m &&
                      (0, i.jsx)(r.FormSwitch, {
                          value: t,
                          onChange: (e) => l.Z.setExperimentalSoundshare(e),
                          children: c.intl.string(c.t['4I0qzc'])
                      }),
                  g &&
                      (0, i.jsx)(r.FormSwitch, {
                          value: n,
                          onChange: (e) => l.Z.setUseSystemScreensharePicker(e),
                          children: c.intl.string(c.t.ie1mgY)
                      })
              ]
          })
        : null;
}
