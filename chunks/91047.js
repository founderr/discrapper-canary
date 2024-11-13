l.d(t, {
    Pv: function () {
        return a;
    },
    _j: function () {
        return o;
    },
    nm: function () {
        return r;
    },
    xS: function () {
        return s;
    }
}),
    l(411104);
var n = l(200651);
l(192379);
var i = l(239091);
function a(e, t, a) {
    a.isGroupDM()
        ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([l.e('50506'), l.e('79695'), l.e('51269'), l.e('13351'), l.e('33862'), l.e('92453'), l.e('38718')]).then(l.bind(l, 354589));
              return (l) =>
                  (0, n.jsx)(e, {
                      ...l,
                      user: t,
                      channel: a
                  });
          })
        : a.isDM()
          ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([l.e('50506'), l.e('79695'), l.e('51269'), l.e('90508'), l.e('13351'), l.e('33862'), l.e('70205'), l.e('92453'), l.e('56826'), l.e('71427')]).then(l.bind(l, 131404));
                return (l) =>
                    (0, n.jsx)(e, {
                        ...l,
                        user: t,
                        channel: a,
                        showMute: !1,
                        targetIsUser: !0
                    });
            })
          : null != a.guild_id
            ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([l.e('50506'), l.e('79695'), l.e('51269'), l.e('13351'), l.e('33862'), l.e('92453'), l.e('13125'), l.e('13441')]).then(l.bind(l, 757387));
                  return (l) =>
                      (0, n.jsx)(e, {
                          ...l,
                          user: t,
                          channel: a,
                          guildId: a.guild_id
                      });
              })
            : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([l.e('79695'), l.e('69220'), l.e('50261')]).then(l.bind(l, 881351));
                  return (l) =>
                      (0, n.jsx)(e, {
                          ...l,
                          user: t
                      });
              });
}
function o(e, t) {
    let { user: a, channel: o, moderationAlertId: r, guildId: s, ...d } = t;
    if ((null == o ? void 0 : o.isGroupDM()) || (null == o ? void 0 : o.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let u = null != s ? s : null == o ? void 0 : o.getGuildId();
    null != u &&
        (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([l.e('13125'), l.e('33685')]).then(l.bind(l, 833737));
            return (t) =>
                (0, n.jsx)(e, {
                    ...t,
                    user: a,
                    channelId: null == o ? void 0 : o.id,
                    guildId: u,
                    moderationAlertId: r,
                    ...d
                });
        });
}
function r(e, t) {
    let { user: a, guildId: o, analyticsLocations: r, onCloseContextMenu: s, isViewOnly: d } = t;
    (0, i.jW)(e, async () => {
        let { default: e } = await l.e('45130').then(l.bind(l, 246389));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                user: a,
                guildId: o,
                analyticsLocations: r,
                onCloseContextMenu: s,
                isViewOnly: d
            });
    });
}
function s(e, t, a) {
    null != a &&
        (0, i.jW)(e, async () => {
            let { default: e } = await l.e('50331').then(l.bind(l, 158195));
            return (t) =>
                (0, n.jsx)(e, {
                    ...t,
                    guildId: a
                });
        });
}
