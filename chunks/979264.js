n.d(t, {
    KQ: function () {
        return I;
    },
    aG: function () {
        return T;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(594174),
    d = n(645896),
    _ = n(353093),
    E = n(954138),
    f = n(426964),
    h = n(308083),
    p = n(689938),
    m = n(162685);
let I = a.memo(function (e) {
        let { src: t, tag: n, className: r, size: a = h.NC.SIZE_16 } = e;
        return null == t
            ? null
            : (0, i.jsx)('img', {
                  src: t,
                  alt: p.Z.Messages.CLAN_BADGE_ALT.format({ tag: n }),
                  className: s()(m.badge, r),
                  width: a,
                  height: a
              });
    }),
    T = a.memo(function (e) {
        let { guildId: t, clanTag: n, clanBadge: r, className: a, textClassName: o, badgeClassName: l, onClick: c, onMouseEnter: d, textVariant: f = 'text-xs/semibold', textColor: p = 'text-normal', badgeSize: T = h.NC.SIZE_12, inline: g = !0 } = e;
        return (0, E.Z)('base_clan_tag_chiplet')
            ? (0, i.jsx)(u.Clickable, {
                  tag: 'span',
                  tabIndex: null == c ? -1 : void 0,
                  onClick: c,
                  onMouseEnter: d,
                  className: s()(m.chipletContainerInner, g && m.chipletContainerInline, null != c && m.clickable, a),
                  children: (0, i.jsxs)(u.Text, {
                      variant: f,
                      color: p,
                      tag: 'span',
                      className: s()(m.text, o),
                      children: [
                          null != r && 'string' == typeof r
                              ? (0, i.jsx)(I, {
                                    src: (0, _.ky)(t, r, T),
                                    tag: null == n ? void 0 : n.toString(),
                                    size: T,
                                    className: l
                                })
                              : r,
                          (0, i.jsx)('span', {
                              className: m.unselectable,
                              children: n
                          })
                      ]
                  })
              })
            : null;
    }),
    g = a.memo(function (e) {
        var t, n;
        let { clan: r, userId: o, className: _, children: E, profileViewedAnalytics: h } = e,
            p = (0, l.e7)([c.default], () => c.default.getUser(o), [o]),
            I = null !== (t = null == p ? void 0 : p.clan) && void 0 !== t ? t : r,
            [T, g] = (0, d.L_)(null !== (n = null == I ? void 0 : I.identityGuildId) && void 0 !== n ? n : null),
            S = a.useCallback(() => {
                g();
            }, [g]);
        return (0, i.jsx)(u.Popout, {
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, i.jsx)(f.Z, {
                    isLoading: T,
                    clan: I,
                    onClose: t,
                    profileViewedAnalytics: h
                });
            },
            position: 'top',
            animationPosition: 'top',
            spacing: 16,
            children: (e) =>
                (0, i.jsx)(u.Clickable, {
                    className: s()(m.clickable, _),
                    tag: 'span',
                    ...e,
                    onClick: (t) => {
                        var n;
                        null === (n = e.onClick) || void 0 === n || n.call(e, t), t.preventDefault(), t.stopPropagation();
                    },
                    onMouseEnter: () => {
                        var t;
                        S(), null === (t = e.onMouseEnter) || void 0 === t || t.call(e);
                    },
                    children: E
                })
        });
    });
t.ZP = a.memo(function (e) {
    var t;
    let { clan: n, userId: r, contextGuildId: a, className: o, containerClassName: u, textVariant: d, textColor: E, badgeSize: f, disableGuildProfile: h = !1, inline: p = !0, profileViewedAnalytics: I } = e,
        S = (0, l.e7)([c.default], () => c.default.getUser(r), [r]),
        A = null !== (t = null == S ? void 0 : S.clan) && void 0 !== t ? t : n,
        { tag: v, badge: N, guildId: O } = (0, _.vh)(A);
    return (0, _.p0)(r, a) && null != O
        ? h
            ? (0, i.jsx)(T, {
                  guildId: O,
                  clanTag: v,
                  clanBadge: N,
                  className: s()(m.noTooltip, o),
                  textVariant: d,
                  textColor: E,
                  badgeSize: f,
                  inline: p
              })
            : (0, i.jsx)(g, {
                  clan: A,
                  userId: r,
                  profileViewedAnalytics: I,
                  className: u,
                  children: (0, i.jsx)(T, {
                      guildId: O,
                      clanTag: v,
                      clanBadge: N,
                      className: o,
                      textVariant: d,
                      textColor: E,
                      badgeSize: f,
                      inline: p
                  })
              })
        : null;
});
