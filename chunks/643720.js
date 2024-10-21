var i = n(200651),
    s = n(192379),
    a = n(390322),
    l = n(381871);
t.Z = (e) => {
    let { isHovered: t, closePopout: n, onMouseEnter: r, onMouseLeave: o, onFocus: c, channel: u } = e;
    return (
        s.useEffect(() => {
            !t && n();
        }, [n, t]),
        (0, i.jsx)(a.Z, {
            children: (0, i.jsx)('div', {
                onMouseEnter: r,
                onMouseLeave: o,
                children: (0, i.jsx)(l.Z, {
                    channel: u,
                    closePopout: n,
                    onFocus: c
                })
            })
        })
    );
};
