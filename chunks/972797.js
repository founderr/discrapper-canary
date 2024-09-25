t.d(A, {
    Z: function () {
        return c;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    s = t(120356),
    r = t.n(s),
    o = t(481060),
    l = t(313201),
    i = t(689938),
    d = t(456720);
function c(e) {
    let { disabled: A = !1, disabledTooltip: t, published: s, submitting: c = !1, onClick: u } = e,
        C = (0, l.Dt)(),
        [g, T] = a.useState(s);
    return (
        a.useEffect(() => {
            T((e) => e || s);
        }, [s]),
        (0, n.jsxs)('div', {
            className: r()(
                {
                    [d.publishable]: !A && !s,
                    [d.wasEverPublished]: g
                },
                d.container
            ),
            children: [
                (0, n.jsxs)('div', {
                    className: d.explanationColumn,
                    children: [
                        (0, n.jsx)(o.Heading, {
                            variant: 'text-sm/semibold',
                            color: 'header-primary',
                            children: s ? i.Z.Messages.GUILD_PRODUCT_UNPUBLISH_TITLE : i.Z.Messages.GUILD_PRODUCT_PUBLISH_TITLE
                        }),
                        (0, n.jsx)(o.Text, {
                            id: C,
                            variant: 'text-sm/normal',
                            color: 'text-normal',
                            children: s ? i.Z.Messages.GUILD_PRODUCT_UNPUBLISH_DESCRIPTION : i.Z.Messages.GUILD_PRODUCT_PUBLISH_DESCRIPTION
                        })
                    ]
                }),
                (0, n.jsx)(o.Tooltip, {
                    text: A ? t : void 0,
                    children: (e) =>
                        (0, n.jsxs)(o.Button, {
                            ...e,
                            className: r()(d.button, {
                                [d.wasEverPublished]: g,
                                [d.publishButton]: !s,
                                [d.disabledPublishButton]: A
                            }),
                            innerClassName: d.buttonContents,
                            color: s ? o.Button.Colors.RED : o.Button.Colors.CUSTOM,
                            'aria-describedby': C,
                            'aria-disabled': A,
                            grow: !1,
                            onClick: A ? void 0 : u,
                            submitting: c,
                            children: [
                                s ? i.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_UNPUBLISH_BUTTON : i.Z.Messages.GUILD_PRODUCT_EDIT_MODAL_PUBLISH_BUTTON,
                                s
                                    ? (0, n.jsx)(o.EyeSlashIcon, {
                                          size: 'md',
                                          className: d.buttonIcon,
                                          color: 'currentColor'
                                      })
                                    : (0, n.jsx)(o.SparklesIcon, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: d.buttonIcon
                                      })
                            ]
                        })
                })
            ]
        })
    );
}
