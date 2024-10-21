t.d(n, {
    Pv: function () {
        return l;
    },
    _j: function () {
        return o;
    },
    nm: function () {
        return u;
    },
    xS: function () {
        return s;
    }
}),
    t(411104);
var r = t(200651);
t(192379);
var i = t(239091);
function l(e, n, l) {
    l.isGroupDM()
        ? (0, i.jW)(e, async () => {
              let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('79107'), t.e('92453'), t.e('60222')]).then(t.bind(t, 354589));
              return (t) =>
                  (0, r.jsx)(e, {
                      ...t,
                      user: n,
                      channel: l
                  });
          })
        : l.isDM()
          ? (0, i.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('79107'), t.e('59743'), t.e('92453'), t.e('22036'), t.e('56826'), t.e('95470')]).then(t.bind(t, 131404));
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
                  let { default: e } = await Promise.all([t.e('50506'), t.e('79695'), t.e('79107'), t.e('92453'), t.e('13125'), t.e('34879')]).then(t.bind(t, 757387));
                  return (t) =>
                      (0, r.jsx)(e, {
                          ...t,
                          user: n,
                          channel: l,
                          guildId: l.guild_id
                      });
              })
            : (0, i.jW)(e, async () => {
                  let { default: e } = await Promise.all([t.e('79695'), t.e('69220'), t.e('50261')]).then(t.bind(t, 881351));
                  return (t) =>
                      (0, r.jsx)(e, {
                          ...t,
                          user: n
                      });
              });
}
function o(e, n) {
    let { user: l, channel: o, moderationAlertId: u, guildId: s, ...a } = n;
    if ((null == o ? void 0 : o.isGroupDM()) || (null == o ? void 0 : o.isDM())) throw Error('Cannot moderate user in DM or group DM');
    let c = null != s ? s : null == o ? void 0 : o.getGuildId();
    null != c &&
        (0, i.jW)(e, async () => {
            let { default: e } = await Promise.all([t.e('13125'), t.e('33685')]).then(t.bind(t, 833737));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    user: l,
                    channelId: null == o ? void 0 : o.id,
                    guildId: c,
                    moderationAlertId: u,
                    ...a
                });
        });
}
function u(e, n) {
    let { user: l, guildId: o, analyticsLocations: u, onCloseContextMenu: s, isViewOnly: a } = n;
    (0, i.jW)(e, async () => {
        let { default: e } = await t.e('45130').then(t.bind(t, 246389));
        return (n) =>
            (0, r.jsx)(e, {
                ...n,
                user: l,
                guildId: o,
                analyticsLocations: u,
                onCloseContextMenu: s,
                isViewOnly: a
            });
    });
}
function s(e, n, l) {
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
