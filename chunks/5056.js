var r = t(200651),
    a = t(192379),
    i = t(120356),
    s = t.n(i),
    o = t(481060),
    l = t(838221),
    c = t(246364),
    d = t(700833),
    u = t(388032),
    m = t(631403);
function f(e) {
    let { onClick: n, text: t, icon: a } = e;
    return (0, r.jsx)('div', {
        className: m.addFormFieldContainer,
        children: (0, r.jsxs)(o.Clickable, {
            className: m.addFormField,
            onClick: n,
            children: [
                (0, r.jsx)(a, {
                    className: m.icon,
                    size: 'xs',
                    color: 'currentColor'
                }),
                (0, r.jsx)(o.FormText, {
                    className: m.addFormFieldText,
                    children: t
                })
            ]
        })
    });
}
n.Z = function (e) {
    let { addFormField: n, showManualApprovalWarning: i, guild: h, showHeader: x } = e,
        p = a.useCallback(
            (e) => {
                (0, d.Md)(e, n, h);
            },
            [n, h]
        ),
        g = a.useCallback(
            (e) => {
                i
                    ? (0, o.openModalLazy)(async () => {
                          let { default: n } = await t.e('54845').then(t.bind(t, 199836));
                          return (t) =>
                              (0, r.jsx)(n, {
                                  ...t,
                                  onSubmit: () => p(e)
                              });
                      })
                    : p(e);
            },
            [i, p]
        );
    return (0, r.jsxs)('div', {
        className: s()(m.spacingContainer, m.backgroundContainer),
        children: [
            x &&
                (0, r.jsx)('div', {
                    className: m.containerTopHat,
                    children: (0, r.jsx)(o.Text, {
                        className: m.containerTopHatText,
                        variant: 'text-xs/bold',
                        color: 'header-secondary',
                        children: u.intl.string(u.t.neG9U1)
                    })
                }),
            (0, r.jsxs)('div', {
                className: m.leftRailIconContainer,
                children: [
                    (0, r.jsx)('div', {
                        className: m.iconContainer,
                        children: (0, r.jsx)(o.PlusSmallIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 18,
                            height: 20,
                            className: m.icon
                        })
                    }),
                    (0, r.jsxs)(o.FormSection, {
                        children: [
                            (0, r.jsx)(o.FormTitle, {
                                tag: 'h3',
                                className: m.leftRailIconContainerTitle,
                                children: u.intl.string(u.t['7v2xvr'])
                            }),
                            (0, r.jsx)(o.FormText, {
                                className: m.leftRailIconContainerDescription,
                                type: o.FormText.Types.DESCRIPTION,
                                children: u.intl.string(u.t.DyARHR)
                            }),
                            (0, r.jsx)(f, {
                                formFieldType: c.QJ.TEXT_INPUT,
                                addFormField: n,
                                icon: (0, o.makeIconCompat)(l.Z),
                                text: u.intl.string(u.t.w6Q9w8),
                                onClick: () => g(c.QJ.TEXT_INPUT)
                            }),
                            (0, r.jsx)(f, {
                                formFieldType: c.QJ.PARAGRAPH,
                                addFormField: n,
                                icon: o.ChannelListIcon,
                                text: u.intl.string(u.t.gG0JBA),
                                onClick: () => g(c.QJ.PARAGRAPH)
                            }),
                            (0, r.jsx)(f, {
                                formFieldType: c.QJ.MULTIPLE_CHOICE,
                                addFormField: n,
                                icon: o.ListBulletsIcon,
                                text: u.intl.string(u.t.ooKh3t),
                                onClick: () => g(c.QJ.MULTIPLE_CHOICE)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
