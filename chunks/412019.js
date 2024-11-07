t.d(n, {
    O: function () {
        return r;
    }
});
var a = t(200651);
t(192379);
var c = t(481060),
    s = t(447003),
    d = t(687352),
    i = t(237583),
    o = t(823379),
    l = t(619915),
    f = t(620417);
function r(e) {
    let { channel: n, users: t } = e,
        r = (0, l.ZP)(n);
    return (0, a.jsxs)('div', {
        className: f.channelInfo,
        children: [
            (0, s.Z)(n)
                ? (0, a.jsx)(c.VoiceLockIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: f.speakerIcon
                  })
                : (0, a.jsx)(c.VoiceNormalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: f.speakerIcon
                  }),
            (0, a.jsx)('div', {
                className: f.channelName,
                children: n.name
            }),
            r.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', { className: f.divider }),
                          (0, a.jsx)(d.Z, {
                              embeddedApps: r,
                              className: f.channelItemActivities
                          }),
                          (0, a.jsx)('div', {
                              className: f.channelActivitiesText,
                              children: r
                                  .map((e) => {
                                      var n;
                                      return null === (n = e.application) || void 0 === n ? void 0 : n.name;
                                  })
                                  .filter(o.lm)
                                  .join(', ')
                          })
                      ]
                  })
                : null,
            (0, a.jsx)('div', {
                className: f.voiceUserContainer,
                children: (0, a.jsx)(i.Z, {
                    users: t,
                    max: 4
                })
            })
        ]
    });
}
