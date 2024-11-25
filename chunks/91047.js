n.d(t, {
    Pv: function () {
        return o;
    },
    _j: function () {
        return a;
    },
    nm: function () {
        return l;
    },
    xS: function () {
        return s;
    }
}),
    n(411104);
var r = n(200651);
n(192379);
var i = n(239091);
function o(e, t, o) {
    o.isGroupDM()
        ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('50050'), n.e('92453'), n.e('62507')]).then(n.bind(n, 354589));
              return (n) =>
                  (0, r.jsx)(e, {
                      ...n,
                      user: t,
                      channel: o
                  });
          })
        : o.isDM()
          ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('90508'), n.e('13351'), n.e('50050'), n.e('70205'), n.e('92453'), n.e('56826'), n.e('10510')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        user: t,
                        channel: o,
                        showMute: !1,
                        targetIsUser: !0
                    });
            })
          : null != o.guild_id
            ? (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('51269'), n.e('13351'), n.e('50050'), n.e('92453'), n.e('13125'), n.e('54492')]).then(n.bind(n, 757387));
                  return (n) =>
                      (0, r.jsx)(e, {
                          ...n,
                          user: t,
                          channel: o,
                          guildId: o.guild_id
                      });
              })
            : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220'), n.e('351')]).then(n.bind(n, 881351));
                  return (n) =>
                      (0, r.jsx)(e, {
                          ...n,
                          user: t
                      });
              });
}
function a(e, t) {
    let { user: o, channel: a, moderationAlertId: l, guildId: s, ...c } = t;
    if ((null == a ? void 0 : a.isGroupDM()) || (null == a ? void 0 : a.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let u = null != s ? s : null == a ? void 0 : a.getGuildId();
    null != u &&
        (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('13125'), n.e('9124')]).then(n.bind(n, 833737));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    user: o,
                    channelId: null == a ? void 0 : a.id,
                    guildId: u,
                    moderationAlertId: l,
                    ...c
                });
        });
}
function l(e, t) {
    let { user: o, guildId: a, analyticsLocations: l, onCloseContextMenu: s, isViewOnly: c } = t;
    (0, i.jW)(e, async () => {
        let { default: e } = await n.e('45130').then(n.bind(n, 246389));
        return (t) =>
            (0, r.jsx)(e, {
                ...t,
                user: o,
                guildId: a,
                analyticsLocations: l,
                onCloseContextMenu: s,
                isViewOnly: c
            });
    });
}
function s(e, t, o) {
    null != o &&
        (0, i.jW)(e, async () => {
            let { default: e } = await n.e('50331').then(n.bind(n, 158195));
            return (t) =>
                (0, r.jsx)(e, {
                    ...t,
                    guildId: o
                });
        });
}
