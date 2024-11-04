var i = n(200651),
    l = n(192379),
    r = n(390322),
    s = n(381871);
t.Z = (e) => {
    let { isHovered: t, closePopout: n, onMouseEnter: a, onMouseLeave: o, onFocus: c, channel: u } = e;
    return (
        l.useEffect(() => {
            !t && n();
        }, [n, t]),
        (0, i.jsx)(r.Z, {
            children: (0, i.jsx)('div', {
                onMouseEnter: a,
                onMouseLeave: o,
                children: (0, i.jsx)(s.Z, {
                    channel: u,
                    closePopout: n,
                    onFocus: c
                })
            })
        })
    );
};
