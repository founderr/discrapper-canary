n.d(t, {
    O: function () {
        return u;
    }
});
var a = n(735250);
n(470079);
var i = n(481060),
    l = n(447003),
    s = n(687352),
    o = n(237583),
    r = n(823379),
    c = n(619915),
    d = n(267027);
function u(e) {
    let { channel: t, users: n } = e,
        u = (0, c.ZP)(t);
    return (0, a.jsxs)('div', {
        className: d.channelInfo,
        children: [
            (0, l.Z)(t)
                ? (0, a.jsx)(i.VoiceLockIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: d.speakerIcon
                  })
                : (0, a.jsx)(i.VoiceNormalIcon, {
                      size: 'md',
                      color: 'currentColor',
                      className: d.speakerIcon
                  }),
            (0, a.jsx)('div', {
                className: d.channelName,
                children: t.name
            }),
            u.length > 0
                ? (0, a.jsxs)(a.Fragment, {
                      children: [
                          (0, a.jsx)('div', { className: d.divider }),
                          (0, a.jsx)(s.Z, {
                              embeddedApps: u,
                              className: d.channelItemActivities
                          }),
                          (0, a.jsx)('div', {
                              className: d.channelActivitiesText,
                              children: u
                                  .map((e) => {
                                      var t;
                                      return null === (t = e.application) || void 0 === t ? void 0 : t.name;
                                  })
                                  .filter(r.lm)
                                  .join(', ')
                          })
                      ]
                  })
                : null,
            (0, a.jsx)('div', {
                className: d.voiceUserContainer,
                children: (0, a.jsx)(o.Z, {
                    users: n,
                    max: 4
                })
            })
        ]
    });
}
