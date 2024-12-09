n.d(t, {
    Z: function () {
        return g;
    },
    x: function () {
        return i;
    }
}),
    n(653041);
var i,
    r,
    l = n(200651),
    c = n(192379),
    s = n(120356),
    o = n.n(s),
    a = n(442837),
    u = n(477690),
    d = n(481060),
    C = n(686546),
    p = n(706454),
    h = n(768581),
    f = n(624138),
    m = n(388032),
    E = n(484759);
((r = i || (i = {}))[(r.SMALL = (0, f.Mg)(u.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (r[(r.LARGE = (0, f.Mg)(u.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let A = {
        [i.SMALL]: E.moreGuildsSmall,
        [i.LARGE]: E.moreGuildsLarge
    },
    v = {
        [i.SMALL]: E.iconSmall,
        [i.LARGE]: E.iconLarge
    };
function g(e) {
    var t, n, r;
    let { application: s, mutualGuilds: u, mutualGuildShownMax: f = 4, className: g, textVariant: x = 'text-sm/normal', compact: L, guildIconSize: N = i.LARGE, guildsClassName: S } = e,
        j = (0, a.e7)([p.default], () => p.default.locale),
        T = new Intl.ListFormat(j),
        Z = null !== (n = null === (t = s.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        y = null !== (r = null == u ? void 0 : u.length) && void 0 !== r ? r : 0,
        _ = Math.max(0, Z - y),
        { shownMutualGuilds: I, hiddenMutualGuilds: P } = c.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == u ||
                    u.forEach((n) => {
                        e.length < f && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === f && t.length > 0 && (t.push(e[f - 1]), (e = e.slice(0, f - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t
                }
            );
        }, [u, f]),
        R = P.length,
        M = (function (e, t, n, i, r) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return m.intl.formatToPlainString(m.t.pnzE1t, { mutualGuildCount: t });
            let l = t > 0 ? m.t.YR8PSE : m.t.GQjq6e,
                c = new Intl.NumberFormat(i, {
                    notation: r ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return m.intl.formatToPlainString(l, {
                guildCount: c.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: c.format(n)
            });
        })(Z, y, _, j, L);
    return 0 === I.length && null == M
        ? null
        : (0, l.jsxs)('div', {
              className: o()(g, E.wrapper),
              children: [
                  (0, l.jsx)('div', {
                      className: o()(E.icons, S),
                      children:
                          I.length > 0
                              ? (0, l.jsxs)(l.Fragment, {
                                    children: [
                                        I.map((e, t) => {
                                            let n = t === I.length - 1 && 0 === R,
                                                i = h.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: N,
                                                    canAnimate: !1
                                                }),
                                                r = (0, l.jsx)(d.Tooltip, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, l.jsx)('img', {
                                                            ...e,
                                                            className: o()(E.icon, v[N]),
                                                            src: i,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, l.jsx)(c.Fragment, { children: r }, e.id)
                                                : (0, l.jsx)(
                                                      C.ZP,
                                                      {
                                                          className: E.iconMask,
                                                          height: N,
                                                          width: N,
                                                          mask: C.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: r
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        R > 0
                                            ? (0, l.jsx)(d.Tooltip, {
                                                  text: m.intl.formatToPlainString(m.t.m6oRrK, { appNames: T.format(P.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, l.jsxs)('div', {
                                                          ...e,
                                                          className: o()(E.moreGuilds, A[N]),
                                                          children: ['+', R]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, l.jsx)(d.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: N,
                                    height: N,
                                    className: E.defaultIcon
                                })
                  }),
                  null != M
                      ? (0, l.jsx)(d.Text, {
                            variant: x,
                            color: 'header-secondary',
                            children: M
                        })
                      : null
              ]
          });
}
