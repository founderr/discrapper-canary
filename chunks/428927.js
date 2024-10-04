s.d(n, {
    D: function () {
        return T;
    },
    Z: function () {
        return g;
    }
});
var t = s(735250);
s(470079);
var i = s(120356),
    o = s.n(i),
    l = s(780384),
    r = s(481060),
    c = s(239091),
    a = s(37234),
    d = s(410030),
    u = s(44315),
    I = s(565138),
    _ = s(769654),
    E = s(51144),
    f = s(785717),
    m = s(200634),
    x = s(228168),
    Z = s(981631),
    p = s(689938),
    h = s(519294),
    v = s(581958);
let S = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
function T(e) {
    let { user: n, guild: i, nick: a, theme: d, onSelect: _ } = e,
        f = n.hasAvatarForGuild(i.id);
    return (0, t.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: h.listRow,
        onClick: _,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([s.e('96427'), s.e('11751'), s.e('33053'), s.e('37581'), s.e('65840'), s.e('7654'), s.e('18146'), s.e('44156'), s.e('44294'), s.e('85552'), s.e('58227'), s.e('67564'), s.e('36897'), s.e('22036'), s.e('92557'), s.e('64679'), s.e('1187'), s.e('36362'), s.e('2293'), s.e('33213'), s.e('48915')]).then(s.bind(s, 545135));
                return (n) =>
                    (0, t.jsx)(e, {
                        ...n,
                        guild: i
                    });
            });
        },
        children: [
            (0, t.jsx)(I.Z, {
                tabIndex: -1,
                guild: i,
                showBadge: !0,
                className: o()(h.listAvatar, null == i.icon ? v.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, u.Lq)((0, l.wj)(d) ? Z.Ilk.PRIMARY_600 : Z.Ilk.WHITE_500),
                badgeTooltipColor: r.TooltipColors.PRIMARY,
                badgeTooltipDelay: x.vB,
                size: I.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, t.jsxs)('div', {
                className: h.listRowContent,
                children: [
                    (0, t.jsx)('div', {
                        className: h.listName,
                        children: i.toString()
                    }),
                    f || null != a
                        ? (0, t.jsxs)('div', {
                              className: v.guildNick,
                              children: [
                                  f &&
                                      (0, t.jsx)(r.Avatar, {
                                          src: n.getAvatarURL(i.id, S),
                                          size: r.AvatarSizes.SIZE_16,
                                          className: v.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != a ? a : E.ZP.getName(n)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function g(e) {
    let { user: n, onClose: s } = e,
        { trackUserProfileAction: i } = (0, f.KZ)(),
        { mutualGuilds: o } = (0, m.Z)(n.id),
        l = (0, d.ZP)(),
        c = (e) => {
            (0, _.X)(e), s(), (0, a.xf)();
        };
    return (0, t.jsx)(r.ScrollerThin, {
        className: h.listScroller,
        fade: !0,
        children:
            null == o
                ? (0, t.jsx)('div', {
                      className: h.empty,
                      children: (0, t.jsx)(r.Spinner, {})
                  })
                : 0 === o.length
                  ? (0, t.jsxs)('div', {
                        className: h.empty,
                        children: [
                            (0, t.jsx)('div', { className: h.emptyIconGuilds }),
                            (0, t.jsx)('div', {
                                className: h.emptyText,
                                children: p.Z.Messages.NO_MUTUAL_GUILDS
                            })
                        ]
                    })
                  : o.map((e) => {
                        let { guild: s, nick: o } = e;
                        return (0, t.jsx)(
                            T,
                            {
                                user: n,
                                guild: s,
                                nick: o,
                                theme: l,
                                onSelect: () => {
                                    i({ action: 'PRESS_MUTUAL_GUILD' }), c(s.id);
                                }
                            },
                            s.id
                        );
                    })
    });
}
