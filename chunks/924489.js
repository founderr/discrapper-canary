n.d(e, {
    Z: function () {
        return S;
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
    h = n(768581),
    f = n(624138),
    L = n(388032),
    g = n(488107);
((i = r || (r = {}))[(i.SMALL = (0, f.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, f.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let E = {
        [r.SMALL]: g.moreGuildsSmall,
        [r.LARGE]: g.moreGuildsLarge
    },
    A = {
        [r.SMALL]: g.iconSmall,
        [r.LARGE]: g.iconLarge
    };
function S(t) {
    var e, n, i;
    let { application: c, mutualGuilds: s, mutualGuildShownMax: f = 4, className: S, textVariant: _ = 'text-sm/normal', compact: O, guildIconSize: T = r.LARGE, guildsClassName: m } = t,
        R = (0, u.e7)([I.default], () => I.default.locale),
        P = new Intl.ListFormat(R),
        C = null !== (n = null === (e = c.directory_entry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== n ? n : 0,
        N = null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0,
        w = Math.max(0, C - N),
        { shownMutualGuilds: v, hiddenMutualGuilds: y } = l.useMemo(() => {
            let t = [],
                e = [];
            return (
                null == s ||
                    s.forEach((n) => {
                        t.length < f && null != n.icon ? t.push(n) : e.push(n);
                    }),
                t.length === f && e.length > 0 && (e.push(t[f - 1]), (t = t.slice(0, f - 1))),
                {
                    shownMutualGuilds: t,
                    hiddenMutualGuilds: e
                }
            );
        }, [s, f]),
        D = y.length,
        G = (function (t, e, n, r, i) {
            if (0 === e && 0 === t) return null;
            if (e > 0 && 0 === n) return L.intl.formatToPlainString(L.t.pnzE1t, { mutualGuildCount: e });
            let o = e > 0 ? L.t.YR8PSE : L.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return L.intl.formatToPlainString(o, {
                guildCount: l.format(t),
                mutualGuildCount: e,
                nonMutualGuildCount: l.format(n)
            });
        })(C, N, w, R, O);
    return 0 === v.length && null == G
        ? null
        : (0, o.jsxs)('div', {
              className: a()(S, g.wrapper),
              children: [
                  (0, o.jsx)('div', {
                      className: a()(g.icons, m),
                      children:
                          v.length > 0
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        v.map((t, e) => {
                                            let n = e === v.length - 1 && 0 === D,
                                                r = h.ZP.getGuildIconURL({
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
                                                            className: a()(g.icon, A[T]),
                                                            src: r,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, o.jsx)(l.Fragment, { children: i }, t.id)
                                                : (0, o.jsx)(
                                                      p.ZP,
                                                      {
                                                          className: g.iconMask,
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
                                                  text: L.intl.formatToPlainString(L.t.m6oRrK, { appNames: P.format(y.map((t) => t.name)) }),
                                                  position: 'top',
                                                  children: (t) =>
                                                      (0, o.jsxs)('div', {
                                                          ...t,
                                                          className: a()(g.moreGuilds, E[T]),
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
                                    className: g.defaultIcon
                                })
                  }),
                  null != G
                      ? (0, o.jsx)(d.Text, {
                            variant: _,
                            color: 'header-secondary',
                            children: G
                        })
                      : null
              ]
          });
}
