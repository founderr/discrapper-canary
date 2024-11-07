var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(840700);
let u = i.memo(function (e) {
    let { text: t, variant: n = 'text-xs/medium', color: a = 'text-normal', icon: u, className: c, selected: d, onMouseEnter: f, onMouseLeave: _, onClick: h } = e,
        p = i.useMemo(() => {
            if (null != h) return () => h(t);
        }, [h, t]);
    return (0, r.jsxs)(o.Clickable, {
        tabIndex: null == h ? -1 : 0,
        className: s()(
            l.trait,
            {
                [l.selectable]: null != p && !d,
                [l.selected]: d,
                [l.clickable]: null != p
            },
            c
        ),
        onMouseEnter: f,
        onMouseLeave: _,
        onClick: p,
        children: [
            null != u &&
                (0, r.jsx)(u, {
                    size: 'xs',
                    color: 'currentColor'
                }),
            (0, r.jsx)(o.Text, {
                variant: n,
                color: a,
                lineClamp: 1,
                children: t
            })
        ]
    });
});
t.Z = u;
