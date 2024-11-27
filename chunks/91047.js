t.d(n, {
    Pv: function () {
        return l;
    },
    _j: function () {
        return u;
    },
    nm: function () {
        return o;
    },
    xS: function () {
        return a;
    }
}),
    t(411104);
var r = t(200651);
t(192379);
var i = t(239091);
function l(e, n, l) {
    l.isGroupDM()
        ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('51269'), t.e('13351'), t.e('50050'), t.e('92453'), t.e('62507')]).then(t.bind(t, 354589));
              return (t) =>
                  (0, r.jsx)(e, {
                      ...t,
                      user: n,
                      channel: l
                  });
          })
        : l.isDM()
          ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('51269'), t.e('90508'), t.e('13351'), t.e('50050'), t.e('92453'), t.e('70205'), t.e('56826'), t.e('10510')]).then(t.bind(t, 131404));
                return (t) =>
                    (0, r.jsx)(e, {
                        ...t,
                        user: n,
                        channel: l,
                        showMute: !1,
                        targetIsUser: !0
                    });
            })
          : null != l.guild_id
            ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('51269'), t.e('13351'), t.e('50050'), t.e('92453'), t.e('13125'), t.e('54492')]).then(t.bind(t, 757387));
                  return (t) =>
                      (0, r.jsx)(e, {
                          ...t,
                          user: n,
                          channel: l,
                          guildId: l.guild_id
                      });
              })
            : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('351')]).then(t.bind(t, 881351));
                  return (t) =>
                      (0, r.jsx)(e, {
                          ...t,
                          user: n
                      });
              });
}
function u(e, n) {
    let { user: l, channel: u, moderationAlertId: o, guildId: a, ...s } = n;
    if ((null == u ? void 0 : u.isGroupDM()) || (null == u ? void 0 : u.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let c = null != a ? a : null == u ? void 0 : u.getGuildId();
    null != c &&
        (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([t.e('13125'), t.e('9124')]).then(t.bind(t, 833737));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    user: l,
                    channelId: null == u ? void 0 : u.id,
                    guildId: c,
                    moderationAlertId: o,
                    ...s
                });
        });
}
function o(e, n) {
    let { user: l, guildId: u, analyticsLocations: o, onCloseContextMenu: a, isViewOnly: s } = n;
    (0, i.jW)(e, async () => {
        let { default: e } = await t.e('45130').then(t.bind(t, 246389));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                user: l,
                guildId: u,
                analyticsLocations: o,
                onCloseContextMenu: a,
                isViewOnly: s
            });
    });
}
function a(e, n, l) {
    null != l &&
        (0, i.jW)(e, async () => {
            let { default: e } = await t.e('50331').then(t.bind(t, 158195));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    guildId: l
                });
        });
}
