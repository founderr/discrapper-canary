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
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(477690),
    d = n(481060),
    u = n(686546),
    _ = n(768581),
    E = n(624138),
    h = n(689938),
    m = n(488107);
((a = i || (i = {}))[(a.SMALL = (0, E.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (a[(a.LARGE = (0, E.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let I = {
        [i.SMALL]: m.moreGuildsSmall,
        [i.LARGE]: m.moreGuildsLarge
    },
    p = {
        [i.SMALL]: m.iconSmall,
        [i.LARGE]: m.iconLarge
    };
function g(e) {
    var t, n, a;
    let { application: l, mutualGuilds: c, mutualGuildShownMax: E = 4, className: g, textVariant: T = 'text-sm/normal', compact: S, guildIconSize: f = i.LARGE } = e,
        C = new Intl.ListFormat('en-US'),
        N = null !== (n = null === (t = l.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        A = null !== (a = null == c ? void 0 : c.length) && void 0 !== a ? a : 0,
        v = Math.max(0, N - A),
        { shownMutualGuilds: Z, hiddenMutualGuilds: L } = r.useMemo(() => {
            let e = [],
                t = [];
            return (
                null == c ||
                    c.forEach((n) => {
                        e.length < E && null != n.icon ? e.push(n) : t.push(n);
                    }),
                e.length === E && t.length > 0 && (t.push(e[E - 1]), (e = e.slice(0, E - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: t
                }
            );
        }, [c, E]),
        R = L.length,
        O = (function (e, t, n, i) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n) return h.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({ mutualGuildCount: t });
            let a = t > 0 ? h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
                s = new Intl.NumberFormat('en-US', {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return a.format({
                guildCount: s.format(e),
                mutualGuildCount: t,
                nonMutualGuildCount: s.format(n)
            });
        })(N, A, v, S);
    return 0 === Z.length && null == O
        ? null
        : (0, s.jsxs)('div', {
              className: o()(g, m.wrapper),
              children: [
                  (0, s.jsx)('div', {
                      className: m.icons,
                      children:
                          Z.length > 0
                              ? (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        Z.map((e, t) => {
                                            let n = t === Z.length - 1 && 0 === R,
                                                i = _.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: f,
                                                    canAnimate: !1
                                                }),
                                                a = (0, s.jsx)(d.Tooltip, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, s.jsx)('img', {
                                                            ...e,
                                                            className: o()(m.icon, p[f]),
                                                            src: i,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, s.jsx)(r.Fragment, { children: a }, e.id)
                                                : (0, s.jsx)(
                                                      u.ZP,
                                                      {
                                                          className: m.iconMask,
                                                          height: f,
                                                          width: f,
                                                          mask: u.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: a
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        R > 0
                                            ? (0, s.jsx)(d.Tooltip, {
                                                  text: h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({ appNames: C.format(L.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, s.jsxs)('div', {
                                                          ...e,
                                                          className: o()(m.moreGuilds, I[f]),
                                                          children: ['+', R]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, s.jsx)(d.CompassIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: f,
                                    height: f,
                                    className: m.defaultIcon
                                })
                  }),
                  null != O
                      ? (0, s.jsx)(d.Text, {
                            variant: T,
                            color: 'header-secondary',
                            children: O
                        })
                      : null
              ]
          });
}
