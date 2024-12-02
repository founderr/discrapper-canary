n.d(t, {
    KQ: function () {
        return g;
    },
    aG: function () {
        return E;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(210887),
    c = n(594174),
    d = n(645896),
    f = n(353093),
    _ = n(426964),
    p = n(308083),
    h = n(388032),
    m = n(856601);
let g = i.memo(function (e) {
        let { src: t, tag: n, className: i, size: a = p.NC.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: h.intl.formatToPlainString(h.t.PShNVV, { tag: n }),
                  className: s()(m.badge, i),
                  width: a,
                  height: a
              });
    }),
    E = i.memo(function (e) {
        let { guildId: t, clanTag: n, clanBadge: i, className: a, textClassName: o, badgeClassName: u, onClick: c, onMouseEnter: d, textVariant: _ = 'text-xs/semibold', textColor: h = 'text-normal', badgeSize: E = p.NC.SIZE_12, inline: v = !0 } = e;
        return (0, r.jsx)(l.Clickable, {
            tag: 'span',
            tabIndex: null == c ? -1 : void 0,
            onClick: c,
            onMouseEnter: d,
            className: s()(m.chipletContainerInner, v && m.chipletContainerInline, null != c && m.clickable, a),
            children: (0, r.jsxs)(l.Text, {
                variant: _,
                color: h,
                tag: 'span',
                className: s()(m.text, o),
                children: [
                    null != i && 'string' == typeof i
                        ? (0, r.jsx)(g, {
                              src: (0, f.ky)(t, i, E),
                              tag: null == n ? void 0 : n.toString(),
                              size: E,
                              className: u
                          })
                        : i,
                    (0, r.jsx)('span', {
                        className: m.unselectable,
                        children: n
                    })
                ]
            })
        });
    }),
    v = i.memo(function (e) {
        var t, n;
        let { clan: a, userId: f, className: p, children: h, profileViewedAnalytics: g } = e,
            E = (0, o.e7)([c.default], () => c.default.getUser(f), [f]),
            v = null !== (t = null == E ? void 0 : E.clan) && void 0 !== t ? t : a,
            [I, T] = (0, d.L_)(null !== (n = null == v ? void 0 : v.identityGuildId) && void 0 !== n ? n : null),
            b = i.useCallback(() => {
                T();
            }, [T]),
            S = (0, o.e7)([u.Z], () => u.Z.theme);
        return (0, r.jsx)(l.ThemeContextProvider, {
            theme: S,
            children: (0, r.jsx)(l.Popout, {
                renderPopout: (e) => {
                    let { closePopout: t } = e;
                    return (0, r.jsx)(_.Z, {
                        isLoading: I,
                        clan: v,
                        onClose: t,
                        profileViewedAnalytics: g,
                        userId: f
                    });
                },
                position: 'top',
                animationPosition: 'top',
                spacing: 16,
                children: (e) =>
                    (0, r.jsx)(l.Clickable, {
                        className: s()(m.clickable, p),
                        tag: 'span',
                        ...e,
                        onClick: (t) => {
                            var n;
                            null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation();
                        },
                        onMouseEnter: () => {
                            var t;
                            b(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                        },
                        children: h
                    })
            })
        });
    });
t.ZP = i.memo(function (e) {
    var t;
    let { clan: n, userId: i, contextGuildId: a, className: l, containerClassName: u, textVariant: d, textColor: _, badgeSize: p, disableGuildProfile: h = !1, inline: g = !0, profileViewedAnalytics: I } = e,
        T = (0, o.e7)([c.default], () => c.default.getUser(i), [i]),
        b = null !== (t = null == T ? void 0 : T.clan) && void 0 !== t ? t : n,
        { tag: S, badge: y, guildId: A } = (0, f.vh)(b);
    return (0, f.p0)(i, a) && null != A
        ? h
            ? (0, r.jsx)(E, {
                  guildId: A,
                  clanTag: S,
                  clanBadge: y,
                  className: s()(m.noTooltip, l),
                  textVariant: d,
                  textColor: _,
                  badgeSize: p,
                  inline: g
              })
            : (0, r.jsx)(v, {
                  clan: b,
                  userId: i,
                  profileViewedAnalytics: I,
                  className: u,
                  children: (0, r.jsx)(E, {
                      guildId: A,
                      clanTag: S,
                      clanBadge: y,
                      className: l,
                      textVariant: d,
                      textColor: _,
                      badgeSize: p,
                      inline: g
                  })
              })
        : null;
});
