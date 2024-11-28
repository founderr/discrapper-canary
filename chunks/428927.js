t.d(n, {
    D: function () {
        return b;
    },
    Z: function () {
        return E;
    }
});
var i = t(200651);
t(192379);
var l = t(120356),
    o = t.n(l),
    r = t(780384),
    s = t(481060),
    c = t(239091),
    a = t(37234),
    d = t(410030),
    u = t(44315),
    f = t(565138),
    m = t(769654),
    I = t(51144),
    x = t(785717),
    p = t(200634),
    h = t(228168),
    v = t(981631),
    g = t(388032),
    Z = t(731218),
    _ = t(644197);
let j = (0, s.getAvatarSize)(s.AvatarSizes.SIZE_16);
function b(e) {
    let { user: n, guild: l, nick: a, theme: d, onSelect: m } = e,
        x = n.hasAvatarForGuild(l.id);
    return (0, i.jsxs)(s.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: Z.listRow,
        onClick: m,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('63288'), t.e('23755'), t.e('48835'), t.e('33053'), t.e('15669'), t.e('90508'), t.e('65840'), t.e('7654'), t.e('50050'), t.e('42309'), t.e('98479'), t.e('80284'), t.e('31113'), t.e('52858'), t.e('85552'), t.e('70205'), t.e('58227'), t.e('16114'), t.e('1187'), t.e('60178'), t.e('61720'), t.e('93375'), t.e('64679'), t.e('55670'), t.e('92905'), t.e('33213'), t.e('51958')]).then(t.bind(t, 545135));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guild: l
                    });
            });
        },
        children: [
            (0, i.jsx)(f.Z, {
                tabIndex: -1,
                guild: l,
                showBadge: !0,
                className: o()(Z.listAvatar, null == l.icon ? _.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, u.Lq)((0, r.wj)(d) ? v.Ilk.PRIMARY_600 : v.Ilk.WHITE_500),
                badgeTooltipColor: s.TooltipColors.PRIMARY,
                badgeTooltipDelay: h.vB,
                size: f.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, i.jsxs)('div', {
                className: Z.listRowContent,
                children: [
                    (0, i.jsx)('div', {
                        className: Z.listName,
                        children: l.toString()
                    }),
                    x || null != a
                        ? (0, i.jsxs)('div', {
                              className: _.guildNick,
                              children: [
                                  x &&
                                      (0, i.jsx)(s.Avatar, {
                                          src: n.getAvatarURL(l.id, j),
                                          size: s.AvatarSizes.SIZE_16,
                                          className: _.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != a ? a : I.ZP.getName(n)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function E(e) {
    let { user: n, onClose: t } = e,
        { trackUserProfileAction: l } = (0, x.KZ)(),
        { mutualGuilds: o, isFetching: r } = (0, p.Z)(n.id),
        c = (0, d.ZP)(),
        u = (e) => {
            (0, m.X)(e), t(), (0, a.xf)();
        };
    return (0, i.jsx)(s.ScrollerThin, {
        className: Z.listScroller,
        fade: !0,
        children:
            null == o && r
                ? (0, i.jsx)('div', {
                      className: Z.empty,
                      children: (0, i.jsx)(s.Spinner, {})
                  })
                : (null != o || r) && (null == o ? void 0 : o.length) !== 0
                  ? null == o
                      ? void 0
                      : o.map((e) => {
                            let { guild: t, nick: o } = e;
                            return (0, i.jsx)(
                                b,
                                {
                                    user: n,
                                    guild: t,
                                    nick: o,
                                    theme: c,
                                    onSelect: () => {
                                        l({ action: 'PRESS_MUTUAL_GUILD' }), u(t.id);
                                    }
                                },
                                t.id
                            );
                        })
                  : (0, i.jsxs)('div', {
                        className: Z.empty,
                        children: [
                            (0, i.jsx)('div', { className: Z.emptyIconGuilds }),
                            (0, i.jsx)('div', {
                                className: Z.emptyText,
                                children: g.intl.string(g.t.zjVh8v)
                            })
                        ]
                    })
    });
}
