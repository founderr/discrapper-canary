s.d(n, {
    D: function () {
        return S;
    },
    Z: function () {
        return T;
    }
});
var t = s(735250);
s(470079);
var i = s(120356),
    o = s.n(i),
    l = s(780384),
    r = s(481060),
    a = s(239091),
    c = s(37234),
    d = s(410030),
    u = s(44315),
    _ = s(565138),
    I = s(769654),
    E = s(51144),
    f = s(200634),
    m = s(228168),
    x = s(981631),
    Z = s(689938),
    h = s(519294),
    p = s(581958);
let v = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
function S(e) {
    let { user: n, guild: i, nick: c, theme: d, onSelect: I } = e,
        f = n.hasAvatarForGuild(i.id);
    return (0, t.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: h.listRow,
        onClick: I,
        onContextMenu: (e) => {
            (0, a.jW)(e, async () => {
                let { default: e } = await Promise.all([s.e('96427'), s.e('11751'), s.e('33053'), s.e('37581'), s.e('65840'), s.e('7654'), s.e('18146'), s.e('44156'), s.e('44294'), s.e('85552'), s.e('58227'), s.e('67564'), s.e('36897'), s.e('22036'), s.e('92557'), s.e('64679'), s.e('1187'), s.e('36362'), s.e('2293'), s.e('33213'), s.e('48915')]).then(s.bind(s, 545135));
                return (n) =>
                    (0, t.jsx)(e, {
                        ...n,
                        guild: i
                    });
            });
        },
        children: [
            (0, t.jsx)(_.Z, {
                tabIndex: -1,
                guild: i,
                showBadge: !0,
                className: o()(h.listAvatar, null == i.icon ? p.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, u.Lq)((0, l.wj)(d) ? x.Ilk.PRIMARY_600 : x.Ilk.WHITE_500),
                badgeTooltipColor: r.TooltipColors.PRIMARY,
                badgeTooltipDelay: m.vB,
                size: _.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, t.jsxs)('div', {
                className: h.listRowContent,
                children: [
                    (0, t.jsx)('div', {
                        className: h.listName,
                        children: i.toString()
                    }),
                    f || null != c
                        ? (0, t.jsxs)('div', {
                              className: p.guildNick,
                              children: [
                                  f &&
                                      (0, t.jsx)(r.Avatar, {
                                          src: n.getAvatarURL(i.id, v),
                                          size: r.AvatarSizes.SIZE_16,
                                          className: p.guildAvatar,
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
    let { user: n, onClose: s } = e,
        { mutualGuilds: i } = (0, f.Z)(n.id),
        o = (0, d.ZP)(),
        l = (e) => {
            (0, I.X)(e), s(), (0, c.xf)();
        };
    return (0, t.jsx)(r.ScrollerThin, {
        className: h.listScroller,
        fade: !0,
        children:
            null == i
                ? (0, t.jsx)('div', {
                      className: h.empty,
                      children: (0, t.jsx)(r.Spinner, {})
                  })
                : 0 === i.length
                  ? (0, t.jsxs)('div', {
                        className: h.empty,
                        children: [
                            (0, t.jsx)('div', { className: h.emptyIconGuilds }),
                            (0, t.jsx)('div', {
                                className: h.emptyText,
                                children: Z.Z.Messages.NO_MUTUAL_GUILDS
                            })
                        ]
                    })
                  : i.map((e) => {
                        let { guild: s, nick: i } = e;
                        return (0, t.jsx)(
                            S,
                            {
                                user: n,
                                guild: s,
                                nick: i,
                                theme: o,
                                onSelect: () => l(s.id)
                            },
                            s.id
                        );
                    })
    });
}
