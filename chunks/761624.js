i.r(t);
var n = i(200651),
    s = i(192379),
    c = i(481060),
    l = i(239091),
    a = i(547280),
    o = i(388032);
t.default = function (e) {
    let { signupTarget: t, onSelect: i } = e,
        d = s.useCallback(() => {
            (0, a.b)(t.key, t.dismissibleContent);
        }, [t]);
    return (0, n.jsx)(c.Menu, {
        navId: 'signup-button-context',
        onClose: l.Zy,
        'aria-label': o.intl.string(o.t.WAI6xs),
        onSelect: i,
        children: (0, n.jsx)(c.MenuGroup, {
            children: (0, n.jsx)(c.MenuItem, {
                id: 'dismiss',
                label: o.intl.string(o.t.WAI6xs),
                action: d
            })
        })
    });
};
