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
    _ = n(689938),
    E = n(591745);
t.Z = i.memo(function (e) {
    let { width: t, height: n, src: a, url: f, format: h, className: p } = e,
        [I, m] = i.useState(!1),
        T = (0, u.hb)((0, l.iy)(f)),
        S = T ? _.Z.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : _.Z.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES,
        g = T ? o.StarIcon : o.StarOutlineIcon;
    i.useEffect(() => {
        if (!I) return;
        let e = setTimeout(() => {
            m(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [I]);
    let A = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            m(!0),
            T
                ? (0, l.PF)(f)
                : ((0, l.uL)({
                      url: f,
                      src: a,
                      width: t,
                      height: n,
                      format: h
                  }),
                  c.S.dispatch(d.CkL.FAVORITE_GIF));
    };
    return (0, r.jsx)(o.Tooltip, {
        text: S,
        children: (e) =>
            (0, r.jsx)(o.Clickable, {
                ...e,
                className: s()(p, E.size, E.gifFavoriteButton, {
                    [E.selected]: T,
                    [E.showPulse]: I
                }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: A,
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, r.jsx)(g, {
                    color: 'currentColor',
                    className: E.icon
                })
            })
    });
});
