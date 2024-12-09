n.d(e, {
    Z: function () {
        return f;
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
    p = n(481060),
    d = n(686546),
    I = n(706454),
    S = n(768581),
    L = n(624138),
    E = n(388032),
    h = n(484759);
((i = r || (r = {}))[(i.SMALL = (0, L.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, L.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let A = {
        [r.SMALL]: h.moreGuildsSmall,
        [r.LARGE]: h.moreGuildsLarge
    },
    T = {
        [r.SMALL]: h.iconSmall,
        [r.LARGE]: h.iconLarge
    };
function f(t) {
    var e, n, i;
    let { application: c, mutualGuilds: s, mutualGuildShownMax: L = 4, className: f, textVariant: O = 'text-sm/normal', compact: _, guildIconSize: R = r.LARGE, guildsClassName: g } = t,
        P = (0, u.e7)([I.default], () => I.default.locale),
        m = new Intl.ListFormat(P),
        v = null !== (n = null === (e = c.directory_entry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== n ? n : 0,
        y = null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0,
        C = Math.max(0, v - y),
        { shownMutualGuilds: D, hiddenMutualGuilds: G } = l.useMemo(() => {
            let t = [],
                e = [];
            return (
                null == s ||
                    s.forEach((n) => {
                        t.length < L && null != n.icon ? t.push(n) : e.push(n);
                    }),
                t.length === L && e.length > 0 && (e.push(t[L - 1]), (t = t.slice(0, L - 1))),
                {
                    shownMutualGuilds: t,
                    hiddenMutualGuilds: e
                }
            );
        }, [s, L]),
        N = G.length,
        w = (function (t, e, n, r, i) {
            if (0 === e && 0 === t) return null;
            if (e > 0 && 0 === n) return E.intl.formatToPlainString(E.t.pnzE1t, { mutualGuildCount: e });
            let o = e > 0 ? E.t.YR8PSE : E.t.GQjq6e,
                l = new Intl.NumberFormat(r, {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return E.intl.formatToPlainString(o, {
                guildCount: l.format(t),
                mutualGuildCount: e,
                nonMutualGuildCount: l.format(n)
            });
        })(v, y, C, P, _);
    return 0 === D.length && null == w
        ? null
        : (0, o.jsxs)('div', {
              className: a()(f, h.wrapper),
              children: [
                  (0, o.jsx)('div', {
                      className: a()(h.icons, g),
                      children:
                          D.length > 0
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        D.map((t, e) => {
                                            let n = e === D.length - 1 && 0 === N,
                                                r = S.ZP.getGuildIconURL({
                                                    id: t.id,
                                                    icon: t.icon,
                                                    size: R,
                                                    canAnimate: !1
                                                }),
                                                i = (0, o.jsx)(p.Tooltip, {
                                                    text: t.name,
                                                    position: 'top',
                                                    children: (t) =>
                                                        (0, o.jsx)('img', {
                                                            ...t,
                                                            className: a()(h.icon, T[R]),
                                                            src: r,
                                                            alt: ''
                                                        })
                                                });
                                            return n
                                                ? (0, o.jsx)(l.Fragment, { children: i }, t.id)
                                                : (0, o.jsx)(
                                                      d.ZP,
                                                      {
                                                          className: h.iconMask,
                                                          height: R,
                                                          width: R,
                                                          mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: i
                                                      },
                                                      t.id
                                                  );
                                        }),
                                        N > 0
                                            ? (0, o.jsx)(p.Tooltip, {
                                                  text: E.intl.formatToPlainString(E.t.m6oRrK, { appNames: m.format(G.map((t) => t.name)) }),
                                                  position: 'top',
                                                  children: (t) =>
                                                      (0, o.jsxs)('div', {
                                                          ...t,
                                                          className: a()(h.moreGuilds, A[R]),
                                                          children: ['+', N]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, o.jsx)(p.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: R,
                                    height: R,
                                    className: h.defaultIcon
                                })
                  }),
                  null != w
                      ? (0, o.jsx)(p.Text, {
                            variant: O,
                            color: 'header-secondary',
                            children: w
                        })
                      : null
              ]
          });
}
