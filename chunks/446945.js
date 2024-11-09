var r = t(200651);
t(192379);
var a = t(481060),
    i = t(239091),
    o = t(838221),
    s = t(246364),
    l = t(700833),
    c = t(388032),
    d = t(207029);
function u(e) {
    let { addFormField: n, onSelect: t, guild: u } = e;
    return (0, r.jsx)(a.Menu, {
        navId: 'add-questions',
        className: d.menu,
        onClose: i.Zy,
        'aria-label': c.intl.string(c.t.liqwPD),
        onSelect: t,
        children: (0, r.jsxs)(a.MenuGroup, {
            children: [
                (0, r.jsx)(a.MenuItem, {
                    id: 'text-input',
                    icon: (0, a.makeIconCompat)(o.Z),
                    label: c.intl.string(c.t.w6Q9w8),
                    action: () => (0, l.Md)(s.QJ.TEXT_INPUT, n, u)
                }),
                (0, r.jsx)(a.MenuItem, {
                    id: 'paragraph',
                    icon: a.ChannelListIcon,
                    label: c.intl.string(c.t.gG0JBA),
                    action: () => (0, l.Md)(s.QJ.PARAGRAPH, n, u)
                }),
                (0, r.jsx)(a.MenuItem, {
                    id: 'multiple-choice',
                    icon: a.ListBulletsIcon,
                    label: c.intl.string(c.t.ooKh3t),
                    action: () => (0, l.Md)(s.QJ.MULTIPLE_CHOICE, n, u)
                })
            ]
        })
    });
}
n.Z = function (e) {
    let { addFormField: n, guild: t } = e,
        o = (e) => {
            (0, i.vq)(
                e,
                (e) =>
                    (0, r.jsx)(u, {
                        ...e,
                        addFormField: n,
                        guild: t
                    }),
                {
                    position: 'top',
                    align: 'center'
                }
            );
        };
    return (0, r.jsx)(a.Tooltip, {
        text: c.intl.string(c.t.nsI4dX),
        children: (e) =>
            (0, r.jsxs)(a.Clickable, {
                ...e,
                className: d.container,
                onClick: o,
                children: [
                    (0, r.jsx)(a.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: d.icon
                    }),
                    (0, r.jsx)(a.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: c.intl.string(c.t.CoHdoK)
                    })
                ]
            })
    });
};
