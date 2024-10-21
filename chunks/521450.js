var s = n(200651),
    a = n(192379),
    r = n(120356),
    i = n.n(r),
    l = n(568611),
    o = n(435935),
    c = n(442837),
    _ = n(481060),
    d = n(37234),
    E = n(960412),
    u = n(151662),
    T = n(695346),
    I = n(981631),
    R = n(930441),
    g = n(689938),
    N = n(35411),
    m = n(113207);
t.Z = () => {
    let e = T.Ex.useSetting(),
        { categories: t, initialized: n } = (0, c.cj)([u.Z], () => u.Z.getEmailSettings());
    return (
        a.useEffect(() => {
            null == n && (0, E.Y7)();
        }, [n]),
        (0, s.jsxs)('div', {
            className: N.container,
            children: [
                (0, s.jsx)(_.Text, {
                    variant: 'eyebrow',
                    color: 'text-muted',
                    children: g.Z.Messages.FAMILY_CENTER_SETTINGS_FORM_TITLE
                }),
                (0, s.jsx)(_.FormSwitch, {
                    className: i()(m.marginTop8, m.marginBottom20),
                    value: e,
                    note: g.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH_NOTE,
                    hideBorder: !0,
                    onChange: T.Ex.updateSetting,
                    children: g.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_SWITCH
                }),
                e
                    ? (0, s.jsx)(_.Card, {
                          className: N.enableCard,
                          type: _.Card.Types.CUSTOM,
                          outline: !0,
                          children: (0, s.jsxs)(o.k, {
                              justify: o.k.Justify.END,
                              children: [
                                  (0, s.jsx)(o.k.Child, {
                                      children: (0, s.jsx)(_.Text, {
                                          variant: 'text-sm/semibold',
                                          color: 'text-normal',
                                          children: g.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_PROMPT
                                      })
                                  }),
                                  (0, s.jsx)(_.Clickable, {
                                      children: (0, s.jsx)(l.rU, {
                                          onClick: d.xf,
                                          to: {
                                              pathname: I.Z5c.FAMILY_CENTER,
                                              state: { scrollRestoration: !1 }
                                          },
                                          children: g.Z.Messages.FAMILY_CENTER_SETTINGS_ENABLE_CTA
                                      })
                                  }),
                                  (0, s.jsx)(_.IconBadge, {
                                      icon: _.ArrowSmallRightIcon,
                                      className: N.arrow,
                                      disableColor: !0
                                  })
                              ]
                          })
                      })
                    : null,
                (0, s.jsx)(_.FormSwitch, {
                    className: i()(m.marginTop20, m.marginBottom20),
                    value: !!t[R.$Z.FAMILY_CENTER_DIGEST],
                    note: g.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH_NOTE,
                    hideBorder: !0,
                    onChange: function (e) {
                        (0, E.pR)(R.$Z.FAMILY_CENTER_DIGEST, e);
                    },
                    children: g.Z.Messages.FAMILY_CENTER_SETTINGS_EMAIL_DIGEST_ENABLE_SWITCH
                })
            ]
        })
    );
};
