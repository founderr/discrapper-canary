var i = t(200651);
t(192379);
var l = t(481060),
    a = t(239091),
    s = t(838221),
    r = t(246364),
    o = t(700833),
    c = t(388032),
    d = t(117225);
function u(e) {
    let { addFormField: n, onSelect: t, guild: u, allowTerms: m } = e;
    return (0, i.jsx)(l.Menu, {
        navId: 'add-questions',
        className: d.menu,
        onClose: a.Zy,
        'aria-label': c.intl.string(c.t.liqwPD),
        onSelect: t,
        children: (0, i.jsxs)(l.MenuGroup, {
            children: [
                (0, i.jsx)(l.MenuItem, {
                    id: 'text-input',
                    icon: (0, l.makeIconCompat)(s.Z),
                    label: c.intl.string(c.t.w6Q9w8),
                    action: () => (0, o.Md)(r.QJ.TEXT_INPUT, n, u)
                }),
                (0, i.jsx)(l.MenuItem, {
                    id: 'paragraph',
                    icon: l.ChannelListIcon,
                    label: c.intl.string(c.t.gG0JBA),
                    action: () => (0, o.Md)(r.QJ.PARAGRAPH, n, u)
                }),
                (0, i.jsx)(l.MenuItem, {
                    id: 'multiple-choice',
                    icon: l.ListBulletsIcon,
                    label: c.intl.string(c.t.ooKh3t),
                    action: () => (0, o.Md)(r.QJ.MULTIPLE_CHOICE, n, u)
                }),
                m &&
                    (0, i.jsx)(l.MenuItem, {
                        id: 'terms',
                        icon: l.BookCheckIcon,
                        label: c.intl.string(c.t['3pz9t7']),
                        action: () => (0, o.Md)(r.QJ.TERMS, n, u)
                    })
            ]
        })
    });
}
n.Z = function (e) {
    let { addFormField: n, guild: t, allowTerms: s } = e,
        r = (e) => {
            (0, a.vq)(
                e,
                (e) =>
                    (0, i.jsx)(u, {
                        ...e,
                        addFormField: n,
                        guild: t,
                        allowTerms: s
                    }),
                {
                    position: 'top',
                    align: 'center'
                }
            );
        };
    return (0, i.jsx)(l.Tooltip, {
        text: c.intl.string(c.t.nsI4dX),
        children: (e) =>
            (0, i.jsxs)(l.Clickable, {
                ...e,
                className: d.container,
                onClick: r,
                children: [
                    (0, i.jsx)(l.PlusSmallIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: d.icon
                    }),
                    (0, i.jsx)(l.Text, {
                        color: 'interactive-active',
                        variant: 'text-md/semibold',
                        children: c.intl.string(c.t.CoHdoK)
                    })
                ]
            })
    });
};
