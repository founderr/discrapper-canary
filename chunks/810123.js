l.d(n, {
    E: function () {
        return i;
    }
});
var i,
    t = l(735250),
    a = l(120356),
    r = l.n(a),
    s = l(468194),
    o = l(471445),
    c = l(686546),
    u = l(664481);
(i || (i = {})).SMALL_32 = 'SMALL_32';
let d = { SMALL_32: 24 },
    f = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    };
n.Z = function (e) {
    var n, l, i;
    let { className: a, iconClassName: h, size: m, channel: x, guild: _, locked: g, hasActiveThreads: Z } = e;
    if (null == _) return null;
    let j = _.getIconURL(48),
        S = f[m],
        A = d[m],
        L = (0, o.KS)(x, _, {
            locked: g,
            hasActiveThreads: Z
        });
    if (null == L) return null;
    let p = (0, s.Zg)(null !== (n = null == _ ? void 0 : _.toString()) && void 0 !== n ? n : null);
    return (0, t.jsxs)('div', {
        role: 'img',
        className: a,
        children: [
            (0, t.jsx)(c.ZP, {
                mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                children:
                    null != j
                        ? (0, t.jsx)('img', {
                              alt: '',
                              src: j,
                              className: u.channelGuildIcon,
                              style: {
                                  width: A,
                                  height: A
                              }
                          })
                        : (0, t.jsx)('div', {
                              className: r()(u.channelGuildIcon, u.acronym),
                              style: {
                                  fontSize: ((l = S), (i = p).length - 1 > l.length ? l[l.length - 1] : l[i.length - 1]),
                                  width: A,
                                  height: A
                              },
                              children: p
                          })
            }),
            (0, t.jsx)(L, {
                className: r()(u.icon, u.iconWithGuildIcon, h),
                color: 'currentColor'
            })
        ]
    });
};
