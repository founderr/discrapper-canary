t.d(e, {
    Z: function () {
        return f;
    },
    x: function () {
        return r;
    }
}),
    t(653041);
var r,
    i,
    o = t(735250),
    l = t(470079),
    c = t(120356),
    u = t.n(c),
    a = t(477690),
    s = t(481060),
    d = t(686546),
    p = t(768581),
    I = t(624138),
    h = t(689938),
    _ = t(488107);
((i = r || (r = {}))[(i.SMALL = (0, I.Mg)(a.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, I.Mg)(a.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let L = {
        [r.SMALL]: _.moreGuildsSmall,
        [r.LARGE]: _.moreGuildsLarge
    },
    T = {
        [r.SMALL]: _.iconSmall,
        [r.LARGE]: _.iconLarge
    };
function f(n) {
    var e, t, i;
    let { application: c, mutualGuilds: a, mutualGuildShownMax: I = 4, className: f, textVariant: A = 'text-sm/normal', compact: m, guildIconSize: g = r.LARGE } = n,
        O = new Intl.ListFormat('en-US'),
        E = null !== (t = null === (e = c.directory_entry) || void 0 === e ? void 0 : e.guild_count) && void 0 !== t ? t : 0,
        R = null !== (i = null == a ? void 0 : a.length) && void 0 !== i ? i : 0,
        C = Math.max(0, E - R),
        { shownMutualGuilds: P, hiddenMutualGuilds: N } = l.useMemo(() => {
            let n = [],
                e = [];
            return (
                null == a ||
                    a.forEach((t) => {
                        n.length < I && null != t.icon ? n.push(t) : e.push(t);
                    }),
                n.length === I && e.length > 0 && (e.push(n[I - 1]), (n = n.slice(0, I - 1))),
                {
                    shownMutualGuilds: n,
                    hiddenMutualGuilds: e
                }
            );
        }, [a, I]),
        w = N.length,
        U = (function (n, e, t, r) {
            if (0 === e && 0 === n) return null;
            if (e > 0 && 0 === t) return h.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({ mutualGuildCount: e });
            let i = e > 0 ? h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : h.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
                o = new Intl.NumberFormat('en-US', {
                    notation: r ? 'compact' : 'standard',
                    compactDisplay: 'short'
                });
            return i.format({
                guildCount: o.format(n),
                mutualGuildCount: e,
                nonMutualGuildCount: o.format(t)
            });
        })(E, R, C, m);
    return 0 === P.length && null == U
        ? null
        : (0, o.jsxs)('div', {
              className: u()(f, _.wrapper),
              children: [
                  (0, o.jsx)('div', {
                      className: _.icons,
                      children:
                          P.length > 0
                              ? (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        P.map((n, e) => {
                                            let t = e === P.length - 1 && 0 === w,
                                                r = p.ZP.getGuildIconURL({
                                                    id: n.id,
                                                    icon: n.icon,
                                                    size: g,
                                                    canAnimate: !1
                                                }),
                                                i = (0, o.jsx)(s.Tooltip, {
                                                    text: n.name,
                                                    position: 'top',
                                                    children: (n) =>
                                                        (0, o.jsx)('img', {
                                                            ...n,
                                                            className: u()(_.icon, T[g]),
                                                            src: r,
                                                            alt: ''
                                                        })
                                                });
                                            return t
                                                ? (0, o.jsx)(l.Fragment, { children: i }, n.id)
                                                : (0, o.jsx)(
                                                      d.ZP,
                                                      {
                                                          className: _.iconMask,
                                                          height: g,
                                                          width: g,
                                                          mask: d.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                                          children: i
                                                      },
                                                      n.id
                                                  );
                                        }),
                                        w > 0
                                            ? (0, o.jsx)(s.Tooltip, {
                                                  text: h.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({ appNames: O.format(N.map((n) => n.name)) }),
                                                  position: 'top',
                                                  children: (n) =>
                                                      (0, o.jsxs)('div', {
                                                          ...n,
                                                          className: u()(_.moreGuilds, L[g]),
                                                          children: ['+', w]
                                                      })
                                              })
                                            : null
                                    ]
                                })
                              : (0, o.jsx)(s.CompassIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: g,
                                    height: g,
                                    className: _.defaultIcon
                                })
                  }),
                  null != U
                      ? (0, o.jsx)(s.Text, {
                            variant: A,
                            color: 'header-secondary',
                            children: U
                        })
                      : null
              ]
          });
}
