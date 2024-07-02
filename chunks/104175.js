n.d(t, {
    E: function () {
        return l;
    }
});
var l, a = n(735250), i = n(120356), s = n.n(i), r = n(468194), c = n(471445), o = n(806519), u = n(231297);
(l || (l = {})).SMALL_32 = 'SMALL_32';
let d = { SMALL_32: 24 }, _ = {
        SMALL_32: [
            13,
            11,
            10,
            10,
            10,
            10,
            10
        ]
    };
t.Z = function (e) {
    var t, n, l;
    let {
        className: i,
        iconClassName: h,
        size: E,
        channel: f,
        guild: S,
        locked: g,
        hasActiveThreads: I
    } = e;
    if (null == S)
        return null;
    let A = S.getIconURL(48), p = _[E], m = d[E], b = (0, c.KS)(f, S, {
            locked: g,
            hasActiveThreads: I
        });
    if (null == b)
        return null;
    let C = (0, r.Zg)(null !== (t = null == S ? void 0 : S.toString()) && void 0 !== t ? t : null);
    return (0, a.jsxs)('div', {
        role: 'img',
        className: i,
        children: [
            (0, a.jsx)(o.ZP, {
                mask: o.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                children: null != A ? (0, a.jsx)('img', {
                    alt: '',
                    src: A,
                    className: u.channelGuildIcon,
                    style: {
                        width: m,
                        height: m
                    }
                }) : (0, a.jsx)('div', {
                    className: s()(u.channelGuildIcon, u.acronym),
                    style: {
                        fontSize: (n = p, (l = C).length - 1 > n.length ? n[n.length - 1] : n[l.length - 1]),
                        width: m,
                        height: m
                    },
                    children: C
                })
            }),
            (0, a.jsx)(b, {
                className: s()(u.icon, u.iconWithGuildIcon, h),
                color: 'currentColor'
            })
        ]
    });
};
