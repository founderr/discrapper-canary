n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(977059),
    l = n(921801),
    a = n(695346),
    o = n(726985),
    c = n(388032),
    d = n(971436);
function u() {
    let { enabled: e } = (0, r.S)({ location: 'UserSettingsStreamPreviews' }),
        t = a.I0.useSetting();
    return e
        ? (0, i.jsx)(l.F, {
              setting: o.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
              children: (0, i.jsx)(s.FormSection, {
                  className: d.marginBottom20,
                  title: c.intl.string(c.t.OBwCXF),
                  children: (0, i.jsx)(s.FormSwitch, {
                      value: t,
                      onChange: a.I0.updateSetting,
                      note: c.intl.string(c.t.jTNPHB),
                      children: c.intl.string(c.t['1CzWUF'])
                  })
              })
          })
        : null;
}
