var i = t(200651),
    l = t(192379),
    a = t(120356),
    r = t.n(a),
    s = t(481060),
    o = t(838221),
    c = t(246364),
    d = t(700833),
    u = t(388032),
    m = t(631403);
function x(e) {
    let { onClick: n, text: t, icon: l } = e;
    return (0, i.jsx)('div', {
        className: m.addFormFieldContainer,
        children: (0, i.jsxs)(s.Clickable, {
            className: m.addFormField,
            onClick: n,
            children: [
                (0, i.jsx)(l, {
                    className: m.icon,
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, i.jsx)(s.FormText, {
                    className: m.addFormFieldText,
                    children: t
                })
            ]
        })
    });
}
n.Z = function (e) {
    let { addFormField: n, showManualApprovalWarning: a, guild: f, showHeader: h } = e,
        g = l.useCallback(
            (e) => {
                (0, d.Md)(e, n, f);
            },
            [n, f]
        ),
        v = l.useCallback(
            (e) => {
                a
                    ? (0, s.openModalLazy)(async () => {
                          let { default: n } = await t.e('54845').then(t.bind(t, 199836));
                          return (t) =>
                              (0, i.jsx)(n, {
                                  ...t,
                                  onSubmit: () => g(e)
                              });
                      })
                    : g(e);
            },
            [a, g]
        );
    return (0, i.jsxs)('div', {
        className: r()(m.spacingContainer, m.backgroundContainer),
        children: [
            h &&
                (0, i.jsx)('div', {
                    className: m.containerTopHat,
                    children: (0, i.jsx)(s.Text, {
                        className: m.containerTopHatText,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: u.intl.string(u.t.neG9U1)
                    })
                }),
            (0, i.jsxs)('div', {
                className: m.leftRailIconContainer,
                children: [
                    (0, i.jsx)('div', {
                        className: m.iconContainer,
                        children: (0, i.jsx)(s.PlusSmallIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 18,
                            height: 20,
                            className: m.icon
                        })
                    }),
                    (0, i.jsxs)(s.FormSection, {
                        children: [
                            (0, i.jsx)(s.FormTitle, {
                                tag: 'h3',
                                className: m.leftRailIconContainerTitle,
                                children: u.intl.string(u.t['7v2xvr'])
                            }),
                            (0, i.jsx)(s.FormText, {
                                className: m.leftRailIconContainerDescription,
                                type: s.FormText.Types.DESCRIPTION,
                                children: u.intl.string(u.t.DyARHR)
                            }),
                            (0, i.jsx)(x, {
                                formFieldType: c.QJ.TEXT_INPUT,
                                addFormField: n,
                                icon: (0, s.makeIconCompat)(o.Z),
                                text: u.intl.string(u.t.w6Q9w8),
                                onClick: () => v(c.QJ.TEXT_INPUT)
                            }),
                            (0, i.jsx)(x, {
                                formFieldType: c.QJ.PARAGRAPH,
                                addFormField: n,
                                icon: s.ChannelListIcon,
                                text: u.intl.string(u.t.gG0JBA),
                                onClick: () => v(c.QJ.PARAGRAPH)
                            }),
                            (0, i.jsx)(x, {
                                formFieldType: c.QJ.MULTIPLE_CHOICE,
                                addFormField: n,
                                icon: s.ListBulletsIcon,
                                text: u.intl.string(u.t.ooKh3t),
                                onClick: () => v(c.QJ.MULTIPLE_CHOICE)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
