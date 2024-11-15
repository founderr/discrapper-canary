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
    u = n(594174),
    c = n(645896),
    d = n(353093),
    f = n(954138),
    _ = n(426964),
    p = n(308083),
    h = n(388032),
    m = n(162685);
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
        let { guildId: t, clanTag: n, clanBadge: i, className: a, textClassName: o, badgeClassName: u, onClick: c, onMouseEnter: _, textVariant: h = 'text-xs/semibold', textColor: E = 'text-normal', badgeSize: v = p.NC.SIZE_12, inline: b = !0 } = e;
        return (0, f.Z)('base_clan_tag_chiplet')
            ? (0, r.jsx)(l.Clickable, {
                  tag: 'span',
                  tabIndex: null == c ? -1 : void 0,
                  onClick: c,
                  onMouseEnter: _,
                  className: s()(m.chipletContainerInner, b && m.chipletContainerInline, null != c && m.clickable, a),
                  children: (0, r.jsxs)(l.Text, {
                      variant: h,
                      color: E,
                      tag: 'span',
                      className: s()(m.text, o),
                      children: [
                          null != i && 'string' == typeof i
                              ? (0, r.jsx)(g, {
                                    src: (0, d.ky)(t, i, v),
                                    tag: null == n ? void 0 : n.toString(),
                                    size: v,
                                    className: u
                                })
                              : i,
                          (0, r.jsx)('span', {
                              className: m.unselectable,
                              children: n
                          })
                      ]
                  })
              })
            : null;
    }),
    v = i.memo(function (e) {
        var t, n;
        let { clan: a, userId: d, className: f, children: p, profileViewedAnalytics: h } = e,
            g = (0, o.e7)([u.default], () => u.default.getUser(d), [d]),
            E = null !== (t = null == g ? void 0 : g.clan) && void 0 !== t ? t : a,
            [v, b] = (0, c.L_)(null !== (n = null == E ? void 0 : E.identityGuildId) && void 0 !== n ? n : null),
            I = i.useCallback(() => {
                b();
            }, [b]);
        return (0, r.jsx)(l.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(_.Z, {
                    isLoading: v,
                    clan: E,
                    onClose: t,
                    profileViewedAnalytics: h,
                    userId: d
                });
            },
            position: 'top',
            animationPosition: 'top',
            spacing: 16,
            children: (e) =>
                (0, r.jsx)(l.Clickable, {
                    className: s()(m.clickable, f),
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
    let { clan: n, userId: i, contextGuildId: a, className: l, containerClassName: c, textVariant: f, textColor: _, badgeSize: p, disableGuildProfile: h = !1, inline: g = !0, profileViewedAnalytics: b } = e,
        I = (0, o.e7)([u.default], () => u.default.getUser(i), [i]),
        S = null !== (t = null == I ? void 0 : I.clan) && void 0 !== t ? t : n,
        { tag: T, badge: y, guildId: A } = (0, d.vh)(S);
    return (0, d.p0)(i, a) && null != A
        ? h
            ? (0, r.jsx)(E, {
                  guildId: A,
                  clanTag: T,
                  clanBadge: y,
                  className: s()(m.noTooltip, l),
                  textVariant: f,
                  textColor: _,
                  badgeSize: p,
                  inline: g
              })
            : (0, r.jsx)(v, {
                  clan: S,
                  userId: i,
                  profileViewedAnalytics: b,
                  className: c,
                  children: (0, r.jsx)(E, {
                      guildId: A,
                      clanTag: T,
                      clanBadge: y,
                      className: l,
                      textVariant: f,
                      textColor: _,
                      badgeSize: p,
                      inline: g
                  })
              })
        : null;
});
