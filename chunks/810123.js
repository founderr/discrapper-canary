n.d(t, {
    E: function () {
        return l;
    }
});
var l,
    a = n(735250),
    s = n(120356),
    i = n.n(s),
    r = n(468194),
    o = n(471445),
    c = n(686546),
    u = n(664481);
(l || (l = {})).SMALL_32 = 'SMALL_32';
let d = { SMALL_32: 24 },
    h = {
        SMALL_32: [13, 11, 10, 10, 10, 10, 10]
    };
t.Z = function (e) {
    var t, n, l;
    let { className: s, iconClassName: _, size: f, channel: E, guild: g, locked: m, hasActiveThreads: S } = e;
    if (null == g) return null;
    let A = g.getIconURL(48),
        I = h[f],
        p = d[f],
        C = (0, o.KS)(E, g, {
            locked: m,
            hasActiveThreads: S
        });
    if (null == C) return null;
    let N = (0, r.Zg)(null !== (t = null == g ? void 0 : g.toString()) && void 0 !== t ? t : null);
    return (0, a.jsxs)('div', {
        role: 'img',
        className: s,
        children: [
            (0, a.jsx)(c.ZP, {
                mask: c.QS.GUILD_ICON_WITH_CHANNEL_TYPE,
                children:
                    null != A
                        ? (0, a.jsx)('img', {
                              alt: '',
                              src: A,
                              className: u.channelGuildIcon,
                              style: {
                                  width: p,
                                  height: p
                              }
                          })
                        : (0, a.jsx)('div', {
                              className: i()(u.channelGuildIcon, u.acronym),
                              style: {
                                  fontSize: ((n = I), (l = N).length - 1 > n.length ? n[n.length - 1] : n[l.length - 1]),
                                  width: p,
                                  height: p
                              },
                              children: N
                          })
            }),
            (0, a.jsx)(C, {
                className: i()(u.icon, u.iconWithGuildIcon, _),
                color: 'currentColor'
            })
        ]
    });
};
