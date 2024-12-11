n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(68405),
    u = n(985375),
    c = n(585483),
    d = n(981631),
    f = n(388032),
    _ = n(380538);
t.Z = i.memo(function (e) {
    let { width: t, height: n, src: a, url: p, format: h, className: m } = e,
        [g, E] = i.useState(!1),
        v = (0, u.hb)((0, l.iy)(p)),
        I = v ? f.intl.string(f.t['5/NS7+']) : f.intl.string(f.t.nIH0v7),
        T = v ? o.StarIcon : o.StarOutlineIcon;
    i.useEffect(() => {
        if (!g) return;
        let e = setTimeout(() => {
            E(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [g]);
    let b = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            E(!0),
            v
                ? (0, l.PF)(p)
                : ((0, l.uL)({
                      url: p,
                      src: a,
                      width: t,
                      height: n,
                      format: h
                  }),
                  c.S.dispatch(d.CkL.FAVORITE_GIF));
    };
    return (0, r.jsx)(o.Tooltip, {
        text: I,
        children: (e) =>
            (0, r.jsx)(o.Clickable, {
                ...e,
                className: s()(m, _.gifFavoriteButton, {
                    [_.selected]: v,
                    [_.showPulse]: g
                }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: b,
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, r.jsx)(T, {
                    color: 'currentColor',
                    className: _.icon,
                    size: 'custom',
                    width: 20,
                    height: 20
                })
            })
    });
});
