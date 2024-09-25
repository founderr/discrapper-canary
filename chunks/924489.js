t.d(n, {
    Z: function () {
        return g;
    },
    x: function () {
        return i;
    }
}),
    t(653041);
var i,
    l,
    r = t(735250),
    s = t(470079),
    o = t(120356),
    a = t.n(o),
    c = t(477690),
    C = t(481060),
    d = t(686546),
    u = t(768581),
    p = t(624138),
    h = t(689938),
    f = t(488107);
((l = i || (i = {}))[(l.SMALL = (0, p.Mg)(c.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (l[(l.LARGE = (0, p.Mg)(c.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let m = {
        [i.SMALL]: f.moreGuildsSmall,
        [i.LARGE]: f.moreGuildsLarge
    },
    v = {
        [i.SMALL]: f.iconSmall,
        [i.LARGE]: f.iconLarge
    };
function g(e) {
    var n, t, l;
    let { application: o, mutualGuilds: c, mutualGuildShownMax: p = 4, className: g, textVariant: E = 'text-sm/normal', compact: x, guildIconSize: A = i.LARGE } = e,
        Z = new Intl.ListFormat('en-US'),
        M = null !== (t = null === (n = o.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== t ? t : 0,
        _ = null !== (l = null == c ? void 0 : c.length) && void 0 !== l ? l : 0,
        L = Math.max(0, M - _),
        { shownMutualGuilds: j, hiddenMutualGuilds: N } = s.useMemo(() => {
            let e = [],
                n = [];
            return (
                null == c ||
                    c.forEach((t) => {
                        e.length < p && null != t.icon ? e.push(t) : n.push(t);
                    }),
                e.length === p && n.length > 0 && (n.push(e[p - 1]), (e = e.slice(0, p - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: n
                }
            );
        }, [c, p]),
        I = N.length,
        R = (function (e, n, t, i) {
            if (0 === n && 0 === e) return null;
            if (n > 0 && 0 === t) return h.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({ mutualGuildCount: n });
            let l = n > 0 ? h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
                r = new Intl.NumberFormat('en-US', {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return l.format({
                guildCount: r.format(e),
                mutualGuildCount: n,
                nonMutualGuildCount: r.format(t)
            });
        })(M, _, L, x);
    return 0 === j.length && null == R
        ? null
        : (0, r.jsxs)('div', {
              className: a()(g, f.wrapper),
              children: [
                  (0, r.jsx)('div', {
                      className: f.icons,
                      children:
                          j.length > 0
                              ? (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        j.map((e, n) => {
                                            let t = n === j.length - 1 && 0 === I,
                                                i = u.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: A,
                                                    canAnimate: !1
                                                }),
                                                l = (0, r.jsx)(C.Tooltip, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, r.jsx)('img', {
                                                            ...e,
                                                            className: a()(f.icon, v[A]),
                                                            src: i,
                                                            alt: ''
                                                        })
                                                });
                                            return t
                                                ? (0, r.jsx)(s.Fragment, { children: l }, e.id)
                                                : (0, r.jsx)(
                                                      d.ZP,
                                                      {
                                                          className: f.iconMask,
                                                          height: A,
                                                          width: A,
                                                          mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: l
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        I > 0
                                            ? (0, r.jsx)(C.Tooltip, {
                                                  text: h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({ appNames: Z.format(N.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, r.jsxs)('div', {
                                                          ...e,
                                                          className: a()(f.moreGuilds, m[A]),
                                                          children: ['+', I]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, r.jsx)(C.CompassIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: A,
                                    height: A,
                                    className: f.defaultIcon
                                })
                  }),
                  null != R
                      ? (0, r.jsx)(C.Text, {
                            variant: E,
                            color: 'header-secondary',
                            children: R
                        })
                      : null
              ]
          });
}
