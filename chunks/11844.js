var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(906732),
    o = t(975298),
    l = t(879892),
    c = t(709586),
    d = t(267642),
    _ = t(981631),
    u = t(689938),
    E = t(305564);
s.Z = function () {
    let e = a.useRef(null),
        { analyticsLocations: s } = (0, r.ZP)(),
        { fractionalState: T } = (0, o.Z)();
    function S(t) {
        null != e.current && (0, i.closeModal)(e.current),
            (0, l.u)({
                analyticsLocation: {
                    page: _.ZY5.GUILD_BOOSTING_USER_SETTINGS,
                    section: _.jXE.GUILD_BOOSTING_BOOST_ANY_GUILD_CTA,
                    object: _.qAy.BUTTON_CTA,
                    objectType: _.Qqv.BUY
                },
                analyticsLocations: s,
                guild: t
            });
    }
    async function I() {
        e.current = await (0, i.openModalLazy)(
            async () => {
                let { default: e } = await Promise.resolve().then(t.bind(t, 719228));
                return (s) =>
                    (0, n.jsx)(e, {
                        ...s,
                        onSelectGuild: S
                    });
            },
            {
                onCloseRequest: () => {
                    null != e.current && (0, i.closeModal)(e.current);
                }
            }
        );
    }
    let N = (0, d.aq)({ fractionalState: T });
    return (0, n.jsxs)('div', {
        className: E.wrapper,
        children: [
            (0, n.jsx)(c.Z, {
                className: E.boostIcon,
                width: 16,
                height: 16
            }),
            (0, n.jsx)(i.Text, {
                className: E.copy,
                color: 'header-secondary',
                variant: 'text-sm/medium',
                children: u.Z.Messages.GUILD_BOOSTING_USER_SETTINGS_BOOST_ANY_GUILD_CTA.format({
                    boostAnyGuildHook: (e, s) => {
                        let t = null != N,
                            a = (0, n.jsx)(
                                i.Button,
                                {
                                    className: E.cta,
                                    disabled: t,
                                    color: i.Button.Colors.LINK,
                                    look: i.Button.Looks.LINK,
                                    onClick: t ? void 0 : I,
                                    children: e
                                },
                                s
                            );
                        return t
                            ? (0, n.jsx)(
                                  i.Tooltip,
                                  {
                                      text: N,
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
