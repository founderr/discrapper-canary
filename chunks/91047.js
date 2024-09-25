n.d(t, {
    Pv: function () {
        return o;
    },
    _j: function () {
        return s;
    },
    nm: function () {
        return l;
    },
    xS: function () {
        return u;
    }
});
var r = n(411104);
var i = n(735250);
n(470079);
var a = n(239091);
function o(e, t, r) {
    r.isGroupDM()
        ? (0, a.jW)(e, async () => {
              let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('92453'), n.e('60222')]).then(n.bind(n, 354589));
              return (n) =>
                  (0, i.jsx)(e, {
                      ...n,
                      user: t,
                      channel: r
                  });
          })
        : r.isDM()
          ? (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('92453'), n.e('22036'), n.e('56826'), n.e('36356')]).then(n.bind(n, 131404));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: r,
                        showMute: !1,
                        targetIsUser: !0
                    });
            })
          : null != r.guild_id
            ? (0, a.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('50506'), n.e('79695'), n.e('13351'), n.e('92453'), n.e('13125'), n.e('34879')]).then(n.bind(n, 757387));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t,
                          channel: r,
                          guildId: r.guild_id
                      });
              })
            : (0, a.jW)(e, async () => {
                  let { default: e } = await Promise.all([n.e('79695'), n.e('69220')]).then(n.bind(n, 881351));
                  return (n) =>
                      (0, i.jsx)(e, {
                          ...n,
                          user: t
                      });
              });
}
function s(e, t) {
    let { user: r, channel: o, moderationAlertId: s, guildId: l, ...u } = t;
    if ((null == o ? void 0 : o.isGroupDM()) || (null == o ? void 0 : o.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let c = null != l ? l : null == o ? void 0 : o.getGuildId();
    null != c &&
        (0, a.jW)(e, async () => {
            let { default: e } = await Promise.all([n.e('13125'), n.e('33685')]).then(n.bind(n, 833737));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    user: r,
                    channelId: null == o ? void 0 : o.id,
                    guildId: c,
                    moderationAlertId: s,
                    ...u
                });
        });
}
function l(e, t) {
    let { user: r, guildId: o, analyticsLocations: s, onCloseContextMenu: l, isViewOnly: u } = t;
    (0, a.jW)(e, async () => {
        let { default: e } = await n.e('45130').then(n.bind(n, 246389));
        return (t) =>
            (0, i.jsx)(e, {
                ...t,
                user: r,
                guildId: o,
                analyticsLocations: s,
                onCloseContextMenu: l,
                isViewOnly: u
            });
    });
}
function u(e, t, r) {
    null != r &&
        (0, a.jW)(e, async () => {
            let { default: e } = await n.e('50331').then(n.bind(n, 158195));
            return (t) =>
                (0, i.jsx)(e, {
                    ...t,
                    guildId: r
                });
        });
}
