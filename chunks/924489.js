e.d(n, {
    Z: function () {
        return _;
    },
    x: function () {
        return r;
    }
}),
    e(653041);
var r,
    i,
    o = e(200651),
    l = e(192379),
    c = e(120356),
    u = e.n(c),
    a = e(442837),
    s = e(477690),
    d = e(481060),
    p = e(686546),
    f = e(706454),
    I = e(768581),
    E = e(624138),
    h = e(388032),
    L = e(488107);
((i = r || (r = {}))[(i.SMALL = (0, E.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, E.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let g = {
        [r.SMALL]: L.moreGuildsSmall,
        [r.LARGE]: L.moreGuildsLarge
    },
    A = {
        [r.SMALL]: L.iconSmall,
        [r.LARGE]: L.iconLarge
    };
function _(t) {
    var n, e, i;
    let { application: c, mutualGuilds: s, mutualGuildShownMax: E = 4, className: _, textVariant: T = 'text-sm/normal', compact: S, guildIconSize: m = r.LARGE, guildsClassName: R } = t,
        O = (0, a.e7)([f.default], () => f.default.locale),
        N = new Intl.ListFormat(O),
        P = null !== (e = null === (n = c.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== e ? e : 0,
        C = null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0,
        v = Math.max(0, P - C),
        { shownMutualGuilds: w, hiddenMutualGuilds: y } = l.useMemo(() => {
            let t = [],
                n = [];
            return (
                null == s ||
                    s.forEach((e) => {
                        t.length < E && null != e.icon ? t.push(e) : n.push(e);
                    }),
                t.length === E && n.length > 0 && (n.push(t[E - 1]), (t = t.slice(0, E - 1))),
                {
                    shownMutualGuilds: t,
                    hiddenMutualGuilds: n
                }
            );
        }, [s, E]),
        D = y.length,
        G = (function (t, n, e, r, i) {
            if (0 === n && 0 === t) return null;
            if (n > 0 && 0 === e) return h.intl.formatToPlainString(h.t.pnzE1t, { mutualGuildCount: n });
            let o = n > 0 ? h.t.YR8PSE : h.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return h.intl.formatToPlainString(o, {
                guildCount: l.format(t),
                mutualGuildCount: n,
                nonMutualGuildCount: l.format(e)
            });
        })(P, C, v, O, S);
    return 0 === w.length && null == G
        ? null
        : (0, o.jsxs)('div', {
              className: u()(_, L.wrapper),
              children: [
                  (0, o.jsx)('div', {
                      className: u()(L.icons, R),
                      children:
                          w.length > 0
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        w.map((t, n) => {
                                            let e = n === w.length - 1 && 0 === D,
                                                r = I.ZP.getGuildIconURL({
                                                    id: t.id,
                                                    icon: t.icon,
                                                    size: m,
                                                    canAnimate: !1
                                                }),
                                                i = (0, o.jsx)(d.Tooltip, {
                                                    text: t.name,
                                                    position: 'top',
                                                    children: (t) =>
                                                        (0, o.jsx)('img', {
                                                            ...t,
                                                            className: u()(L.icon, A[m]),
                                                            src: r,
                                                            alt: ''
                                                        })
                                                });
                                            return e
                                                ? (0, o.jsx)(l.Fragment, { children: i }, t.id)
                                                : (0, o.jsx)(
                                                      p.ZP,
                                                      {
                                                          className: L.iconMask,
                                                          height: m,
                                                          width: m,
                                                          mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: i
                                                      },
                                                      t.id
                                                  );
                                        }),
                                        D > 0
                                            ? (0, o.jsx)(d.Tooltip, {
                                                  text: h.intl.formatToPlainString(h.t.m6oRrK, { appNames: N.format(y.map((t) => t.name)) }),
                                                  position: 'top',
                                                  children: (t) =>
                                                      (0, o.jsxs)('div', {
                                                          ...t,
                                                          className: u()(L.moreGuilds, g[m]),
                                                          children: ['+', D]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, o.jsx)(d.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: m,
                                    height: m,
                                    className: L.defaultIcon
                                })
                  }),
                  null != G
                      ? (0, o.jsx)(d.Text, {
                            variant: T,
                            color: 'header-secondary',
                            children: G
                        })
                      : null
              ]
          });
}
