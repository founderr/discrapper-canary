n.d(t, {
    KQ: function () {
        return m;
    },
    aG: function () {
        return g;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(594174),
    c = n(645896),
    d = n(353093),
    f = n(426964),
    _ = n(308083),
    p = n(388032),
    h = n(162685);
let m = i.memo(function (e) {
        let { src: t, tag: n, className: i, size: a = _.NC.SIZE_16 } = e;
        return null == t
            ? null
            : (0, r.jsx)('img', {
                  src: t,
                  alt: p.intl.formatToPlainString(p.t.PShNVV, { tag: n }),
                  className: s()(h.badge, i),
                  width: a,
                  height: a
              });
    }),
    g = i.memo(function (e) {
        let { guildId: t, clanTag: n, clanBadge: i, className: a, textClassName: o, badgeClassName: u, onClick: c, onMouseEnter: f, textVariant: p = 'text-xs/semibold', textColor: g = 'text-normal', badgeSize: E = _.NC.SIZE_12, inline: v = !0 } = e;
        return (0, r.jsx)(l.Clickable, {
            tag: 'span',
            tabIndex: null == c ? -1 : void 0,
            onClick: c,
            onMouseEnter: f,
            className: s()(h.chipletContainerInner, v && h.chipletContainerInline, null != c && h.clickable, a),
            children: (0, r.jsxs)(l.Text, {
                variant: p,
                color: g,
                tag: 'span',
                className: s()(h.text, o),
                children: [
                    null != i && 'string' == typeof i
                        ? (0, r.jsx)(m, {
                              src: (0, d.ky)(t, i, E),
                              tag: null == n ? void 0 : n.toString(),
                              size: E,
                              className: u
                          })
                        : i,
                    (0, r.jsx)('span', {
                        className: h.unselectable,
                        children: n
                    })
                ]
            })
        });
    }),
    E = i.memo(function (e) {
        var t, n;
        let { clan: a, userId: d, className: _, children: p, profileViewedAnalytics: m } = e,
            g = (0, o.e7)([u.default], () => u.default.getUser(d), [d]),
            E = null !== (t = null == g ? void 0 : g.clan) && void 0 !== t ? t : a,
            [v, b] = (0, c.L_)(null !== (n = null == E ? void 0 : E.identityGuildId) && void 0 !== n ? n : null),
            I = i.useCallback(() => {
                b();
            }, [b]);
        return (0, r.jsx)(l.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(f.Z, {
                    isLoading: v,
                    clan: E,
                    onClose: t,
                    profileViewedAnalytics: m,
                    userId: d
                });
            },
            position: 'top',
            animationPosition: 'top',
            spacing: 16,
            children: (e) =>
                (0, r.jsx)(l.Clickable, {
                    className: s()(h.clickable, _),
                    tag: 'span',
                    ...e,
                    onClick: (t) => {
                        var n;
                        null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation();
                    },
                    onMouseEnter: () => {
                        var t;
                        I(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    children: p
                })
        });
    });
t.ZP = i.memo(function (e) {
    var t;
    let { clan: n, userId: i, contextGuildId: a, className: l, containerClassName: c, textVariant: f, textColor: _, badgeSize: p, disableGuildProfile: m = !1, inline: v = !0, profileViewedAnalytics: b } = e,
        I = (0, o.e7)([u.default], () => u.default.getUser(i), [i]),
        T = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : n,
        { tag: S, badge: y, guildId: A } = (0, d.vh)(T);
    return (0, d.p0)(i, a) && null != A
        ? m
            ? (0, r.jsx)(g, {
                  guildId: A,
                  clanTag: S,
                  clanBadge: y,
                  className: s()(h.noTooltip, l),
                  textVariant: f,
                  textColor: _,
                  badgeSize: p,
                  inline: v
              })
            : (0, r.jsx)(E, {
                  clan: T,
                  userId: i,
                  profileViewedAnalytics: b,
                  className: c,
                  children: (0, r.jsx)(g, {
                      guildId: A,
                      clanTag: S,
                      clanBadge: y,
                      className: l,
                      textVariant: f,
                      textColor: _,
                      badgeSize: p,
                      inline: v
                  })
              })
        : null;
});
