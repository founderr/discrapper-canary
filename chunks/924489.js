t.d(n, {
    Z: function () {
        return g;
    },
    x: function () {
        return r;
    }
}),
    t(653041);
var r,
    i,
    o = t(200651),
    l = t(192379),
    c = t(120356),
    u = t.n(c),
    a = t(442837),
    s = t(477690),
    d = t(481060),
    p = t(686546),
    I = t(706454),
    h = t(768581),
    _ = t(624138),
    f = t(689938),
    L = t(488107);
((i = r || (r = {}))[(i.SMALL = (0, _.Mg)(s.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, _.Mg)(s.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let T = {
        [r.SMALL]: L.moreGuildsSmall,
        [r.LARGE]: L.moreGuildsLarge
    },
    A = {
        [r.SMALL]: L.iconSmall,
        [r.LARGE]: L.iconLarge
    };
function g(e) {
    var n, t, i;
    let { application: c, mutualGuilds: s, mutualGuildShownMax: _ = 4, className: g, textVariant: m = 'text-sm/normal', compact: O, guildIconSize: E = r.LARGE, guildsClassName: R } = e,
        C = (0, a.e7)([I.default], () => I.default.locale),
        P = new Intl.ListFormat(C),
        N = null !== (t = null === (n = c.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== t ? t : 0,
        w = null !== (i = null == s ? void 0 : s.length) && void 0 !== i ? i : 0,
        D = Math.max(0, N - w),
        { shownMutualGuilds: U, hiddenMutualGuilds: v } = l.useMemo(() => {
            let e = [],
                n = [];
            return (
                null == s ||
                    s.forEach((t) => {
                        e.length < _ && null != t.icon ? e.push(t) : n.push(t);
                    }),
                e.length === _ && n.length > 0 && (n.push(e[_ - 1]), (e = e.slice(0, _ - 1))),
                {
                    shownMutualGuilds: e,
                    hiddenMutualGuilds: n
                }
            );
        }, [s, _]),
        M = v.length,
        S = (function (e, n, t, r, i) {
            if (0 === n && 0 === e) return null;
            if (n > 0 && 0 === t) return f.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({ mutualGuildCount: n });
            let o = n > 0 ? f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : f.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
                l = new Intl.NumberFormat(r, {
                    notation: i ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return o.format({
                guildCount: l.format(e),
                mutualGuildCount: n,
                nonMutualGuildCount: l.format(t)
            });
        })(N, w, D, C, O);
    return 0 === U.length && null == S
        ? null
        : (0, o.jsxs)('div', {
              className: u()(g, L.wrapper),
              children: [
                  (0, o.jsx)('div', {
                      className: u()(L.icons, R),
                      children:
                          U.length > 0
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        U.map((e, n) => {
                                            let t = n === U.length - 1 && 0 === M,
                                                r = h.ZP.getGuildIconURL({
                                                    id: e.id,
                                                    icon: e.icon,
                                                    size: E,
                                                    canAnimate: !1
                                                }),
                                                i = (0, o.jsx)(d.Tooltip, {
                                                    text: e.name,
                                                    position: 'top',
                                                    children: (e) =>
                                                        (0, o.jsx)('img', {
                                                            ...e,
                                                            className: u()(L.icon, A[E]),
                                                            src: r,
                                                            alt: ''
                                                        })
                                                });
                                            return t
                                                ? (0, o.jsx)(l.Fragment, { children: i }, e.id)
                                                : (0, o.jsx)(
                                                      p.ZP,
                                                      {
                                                          className: L.iconMask,
                                                          height: E,
                                                          width: E,
                                                          mask: p.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: i
                                                      },
                                                      e.id
                                                  );
                                        }),
                                        M > 0
                                            ? (0, o.jsx)(d.Tooltip, {
                                                  text: f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({ appNames: P.format(v.map((e) => e.name)) }),
                                                  position: 'top',
                                                  children: (e) =>
                                                      (0, o.jsxs)('div', {
                                                          ...e,
                                                          className: u()(L.moreGuilds, T[E]),
                                                          children: ['+', M]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, o.jsx)(d.ServerIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: E,
                                    height: E,
                                    className: L.defaultIcon
                                })
                  }),
                  null != S
                      ? (0, o.jsx)(d.Text, {
                            variant: m,
                            color: 'header-secondary',
                            children: S
                        })
                      : null
              ]
          });
}
