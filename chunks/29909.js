var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    u = n(68405),
    c = n(985375),
    d = n(585483),
    _ = n(981631),
    E = n(689938),
    f = n(591745);
t.Z = a.memo(function (e) {
    let { width: t, height: n, src: r, url: o, format: h, className: p } = e,
        [m, I] = a.useState(!1),
        T = (0, c.hb)((0, u.iy)(o)),
        g = T ? E.Z.Messages.GIF_TOOLTIP_REMOVE_FROM_FAVORITES : E.Z.Messages.GIF_TOOLTIP_ADD_TO_FAVORITES,
        S = T ? l.StarIcon : l.StarOutlineIcon;
    a.useEffect(() => {
        if (!m) return;
        let e = setTimeout(() => {
            I(!1);
        }, 500);
        return () => clearTimeout(e);
    }, [m]);
    let A = (e) => {
        e.preventDefault(),
            e.stopPropagation(),
            I(!0),
            T
                ? (0, u.PF)(o)
                : ((0, u.uL)({
                      url: o,
                      src: r,
                      width: t,
                      height: n,
                      format: h
                  }),
                  d.S.dispatch(_.CkL.FAVORITE_GIF));
    };
    return (0, i.jsx)(l.Tooltip, {
        text: g,
        children: (e) =>
            (0, i.jsx)(l.Clickable, {
                ...e,
                className: s()(p, f.size, f.gifFavoriteButton, {
                    [f.selected]: T,
                    [f.showPulse]: m
                }),
                onMouseDown: (e) => e.preventDefault(),
                onClick: A,
                onDoubleClick: (e) => e.preventDefault(),
                children: (0, i.jsx)(S, {
                    color: 'currentColor',
                    className: f.icon
                })
            })
    });
});
