t.d(n, {
    D: function () {
        return v;
    },
    Z: function () {
        return T;
    }
});
var s = t(735250);
t(470079);
var i = t(120356),
    o = t.n(i),
    l = t(780384),
    r = t(481060),
    a = t(239091),
    c = t(37234),
    d = t(410030),
    u = t(44315),
    _ = t(565138),
    I = t(769654),
    E = t(51144),
    f = t(200634),
    m = t(228168),
    x = t(981631),
    Z = t(689938),
    p = t(519294),
    h = t(581958);
let S = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
function v(e) {
    let { user: n, guild: i, nick: c, theme: d, onSelect: I } = e,
        f = n.hasAvatarForGuild(i.id);
    return (0, s.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: p.listRow,
        onClick: I,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([t.e('96427'), t.e('23755'), t.e('89350'), t.e('11751'), t.e('33053'), t.e('37581'), t.e('65840'), t.e('7654'), t.e('90508'), t.e('18146'), t.e('44156'), t.e('59743'), t.e('44294'), t.e('85552'), t.e('64671'), t.e('58227'), t.e('1187'), t.e('36897'), t.e('22036'), t.e('92557'), t.e('64679'), t.e('36362'), t.e('6199'), t.e('33213'), t.e('88578')]).then(t.bind(t, 545135));
                return (n) =>
                    (0, s.jsx)(e, {
                        ...n,
                        guild: i
                    });
            });
        },
        children: [
            (0, s.jsx)(_.Z, {
                tabIndex: -1,
                guild: i,
                showBadge: !0,
                className: o()(p.listAvatar, null == i.icon ? h.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, u.Lq)((0, l.wj)(d) ? x.Ilk.PRIMARY_600 : x.Ilk.WHITE_500),
                badgeTooltipColor: r.TooltipColors.PRIMARY,
                badgeTooltipDelay: m.vB,
                size: _.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, s.jsxs)('div', {
                className: p.listRowContent,
                children: [
                    (0, s.jsx)('div', {
                        className: p.listName,
                        children: i.toString()
                    }),
                    f || null != c
                        ? (0, s.jsxs)('div', {
                              className: h.guildNick,
                              children: [
                                  f &&
                                      (0, s.jsx)(r.Avatar, {
                                          src: n.getAvatarURL(i.id, S),
                                          size: r.AvatarSizes.SIZE_16,
                                          className: h.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != c ? c : E.ZP.getName(n)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function T(e) {
    let { user: n, onClose: t } = e,
        { mutualGuilds: i } = (0, f.Z)(n.id),
        o = (0, d.ZP)(),
        l = (e) => {
            (0, I.X)(e), t(), (0, c.xf)();
        };
    return (0, s.jsx)(r.ScrollerThin, {
        className: p.listScroller,
        fade: !0,
        children:
            null == i
                ? (0, s.jsx)('div', {
                      className: p.empty,
                      children: (0, s.jsx)(r.Spinner, {})
                  })
                : 0 === i.length
                  ? (0, s.jsxs)('div', {
                        className: p.empty,
                        children: [
                            (0, s.jsx)('div', { className: p.emptyIconGuilds }),
                            (0, s.jsx)('div', {
                                className: p.emptyText,
                                children: Z.Z.Messages.NO_MUTUAL_GUILDS
                            })
                        ]
                    })
                  : i.map((e) => {
                        let { guild: t, nick: i } = e;
                        return (0, s.jsx)(
                            v,
                            {
                                user: n,
                                guild: t,
                                nick: i,
                                theme: o,
                                onSelect: () => l(t.id)
                            },
                            t.id
                        );
                    })
    });
}
