var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(906732),
    o = t(879892),
    l = t(709586),
    c = t(267642),
    d = t(981631),
    _ = t(689938),
    u = t(123600);
s.Z = function () {
    let e = a.useRef(null),
        { analyticsLocations: s } = (0, r.ZP)();
    function E(t) {
        null != e.current && (0, i.closeModal)(e.current),
            (0, o.u)({
                analyticsLocation: {
                    page: d.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: d.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: d.qAy.BUTTON_CTA,
                    objectType: d.Qqv.BUY
                },
                analyticsLocations: s,
                guild: t
            });
    }
    async function T() {
        e.current = await (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(t.bind(t, 719228));
                return (s) =>
                    (0, n.jsx)(e, {
                        ...s,
                        onSelectGuild: E
                    });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, i.closeModal)(e.current);
                }
            }
        );
    }
    let S = (0, c.aq)();
    return (0, n.jsxs)('div', {
        className: u.wrapper,
        children: [
            (0, n.jsx)(l.Z, {
                className: u.boostIcon,
                width: 16,
                height: 16
            }),
            (0, n.jsx)(i.Text, {
                className: u.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: _.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_GUILD_CTA.format({
                    boostAnyGuildHook: (e, s) => {
                        let t = null != S,
                            a = (0, n.jsx)(
                                i.Button,
                                {
                                    className: u.cta,
                                    disabled: t,
                                    color: i.Button.Colors.LINK,
                                    look: i.Button.Looks.LINK,
                                    onClick: t ? void 0 : T,
                                    children: e
                                },
                                s
                            );
                        return t
                            ? (0, n.jsx)(
                                  i.Tooltip,
                                  {
                                      text: S,
                                      children: (e) =>
                                          (0, n.jsx)('span', {
                                              ...e,
                                              children: a
                                          })
                                  },
                                  s
                              )
                            : a;
                    }
                })
            })
        ]
    });
};
