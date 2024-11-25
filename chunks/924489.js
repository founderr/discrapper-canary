n.d(e, {
    Z: function () {
        return _;
    },
    x: function () {
        return r;
    }
}),
    n(653041);
var r,
    i,
    o = n(200651),
    l = n(192379),
    c = n(120356),
    a = n.n(c),
    u = n(442837),
    s = n(477690),
    d = n(481060),
    p = n(686546),
    I = n(706454),
    L = n(768581),
    E = n(624138),
    S = n(388032),
    f = n(484759);
((i = r || (r = {}))[(i.SMALL = (0, E.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, E.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let h = {
        [r.SMALL]: f.moreGuildsSmall,
        [r.LARGE]: f.moreGuildsLarge
    },
    O = {
        [r.SMALL]: f.iconSmall,
        [r.LARGE]: f.iconLarge
    };
function _(t) {
    var e, n, i;
    let { application: c, mutualGuilds: s, mutualGuildShownMax: E = 4, className: _, textVariant: A = 'text-sm/normal', compact: R, guildIconSize: T = r.LARGE, guildsClassName: g } = t,
        P = (0, u.e7)([I.default], () => I.default.locale),
        m = new Intl.ListFormat(P),
        C = null !== (n = null === (e = c.directory_entry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== n ? n : 0,
        N = null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0,
        w = Math.max(0, C - N),
        { shownMutualGuilds: v, hiddenMutualGuilds: y } = l.useMemo(() => {
            let t = [],
                e = [];
            return (
                null == s ||
                    s.forEach((n) => {
                        t.length < E && null != n.icon ? t.push(n) : e.push(n);
                    }),
                t.length === E && e.length > 0 && (e.push(t[E - 1]), (t = t.slice(0, E - 1))),
                {
                    shownMutualGuilds: t,
                    hiddenMutualGuilds: e
                }
            );
        }, [s, E]),
        D = y.length,
        G = (function (t, e, n, r, i) {
            if (0 === e && 0 === t) return null;
            if (e > 0 && 0 === n) return S.intl.formatToPlainString(S.t.pnzE1t, { mutualGuildCount: e });
            let o = e > 0 ? S.t.YR8PSE : S.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return S.intl.formatToPlainString(o, {
                guildCount: l.format(t),
                mutualGuildCount: e,
                nonMutualGuildCount: l.format(n)
            });
        })(C, N, w, P, R);
    return 0 === v.length && null == G
        ? null
        : (0, o.jsxs)('div', {
              className: a()(_, f.wrapper),
              children: [
                  (0, o.jsx)('div', {
                      className: a()(f.icons, g),
                      children:
                          v.length > 0
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        v.map((t, e) => {
                                            let n = e === v.length - 1 && 0 === D,
                                                r = L.ZP.getGuildIconURL({
                                                    id: t.id,
                                                    icon: t.icon,
                                                    size: T,
                                                    canAnimate: !1
                                                }),
                                                i = (0, o.jsx)(d.Tooltip, {
                                                    text: t.name,
                                                    position: 'top',
                                                    children: (t) =>
                                                        (0, o.jsx)('img', {
                                                            ...t,
                                                            className: a()(f.icon, O[T]),
                                                            src: r,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, o.jsx)(l.Fragment, { children: i }, t.id)
                                                : (0, o.jsx)(
                                                      p.ZP,
                                                      {
                                                          className: f.iconMask,
                                                          height: T,
                                                          width: T,
                                                          mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: i
                                                      },
                                                      t.id
                                                  );
                                        }),
                                        D > 0
                                            ? (0, o.jsx)(d.Tooltip, {
                                                  text: S.intl.formatToPlainString(S.t.m6oRrK, { appNames: m.format(y.map((t) => t.name)) }),
                                                  position: 'top',
                                                  children: (t) =>
                                                      (0, o.jsxs)('div', {
                                                          ...t,
                                                          className: a()(f.moreGuilds, h[T]),
                                                          children: ['+', D]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, o.jsx)(d.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: T,
                                    height: T,
                                    className: f.defaultIcon
                                })
                  }),
                  null != G
                      ? (0, o.jsx)(d.Text, {
                            variant: A,
                            color: 'header-secondary',
                            children: G
                        })
                      : null
              ]
          });
}
