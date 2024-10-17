a.d(s, {
    D: function () {
        return f;
    },
    Z: function () {
        return y;
    }
});
var t = a(735250);
a(470079);
var i = a(120356),
    l = a.n(i),
    n = a(780384),
    r = a(481060),
    c = a(239091),
    d = a(37234),
    o = a(410030),
    x = a(44315),
    u = a(565138),
    m = a(769654),
    j = a(51144),
    v = a(785717),
    h = a(200634),
    N = a(228168),
    Z = a(981631),
    E = a(689938),
    I = a(519294),
    S = a(581958);
let _ = (0, r.getAvatarSize)(r.AvatarSizes.SIZE_16);
function f(e) {
    let { user: s, guild: i, nick: d, theme: o, onSelect: m } = e,
        v = s.hasAvatarForGuild(i.id);
    return (0, t.jsxs)(r.Clickable, {
        focusProps: { offset: { right: 8 } },
        className: I.listRow,
        onClick: m,
        onContextMenu: (e) => {
            (0, c.jW)(e, async () => {
                let { default: e } = await Promise.all([a.e('96427'), a.e('23755'), a.e('11751'), a.e('33053'), a.e('37581'), a.e('65840'), a.e('7654'), a.e('90508'), a.e('18146'), a.e('44156'), a.e('59743'), a.e('35994'), a.e('85552'), a.e('85742'), a.e('58227'), a.e('1187'), a.e('36897'), a.e('22036'), a.e('92557'), a.e('64679'), a.e('36362'), a.e('1474'), a.e('33213'), a.e('88578')]).then(a.bind(a, 545135));
                return (s) =>
                    (0, t.jsx)(e, {
                        ...s,
                        guild: i
                    });
            });
        },
        children: [
            (0, t.jsx)(u.Z, {
                tabIndex: -1,
                guild: i,
                showBadge: !0,
                className: l()(I.listAvatar, null == i.icon ? S.guildAvatarWithoutIcon : null),
                badgeStrokeColor: (0, x.Lq)((0, n.wj)(o) ? Z.Ilk.PRIMARY_600 : Z.Ilk.WHITE_500),
                badgeTooltipColor: r.TooltipColors.PRIMARY,
                badgeTooltipDelay: N.vB,
                size: u.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, t.jsxs)('div', {
                className: I.listRowContent,
                children: [
                    (0, t.jsx)('div', {
                        className: I.listName,
                        children: i.toString()
                    }),
                    v || null != d
                        ? (0, t.jsxs)('div', {
                              className: S.guildNick,
                              children: [
                                  v &&
                                      (0, t.jsx)(r.Avatar, {
                                          src: s.getAvatarURL(i.id, _),
                                          size: r.AvatarSizes.SIZE_16,
                                          className: S.guildAvatar,
                                          'aria-hidden': !0
                                      }),
                                  null != d ? d : j.ZP.getName(s)
                              ]
                          })
                        : null
                ]
            })
        ]
    });
}
function y(e) {
    let { user: s, onClose: a } = e,
        { trackUserProfileAction: i } = (0, v.KZ)(),
        { mutualGuilds: l } = (0, h.Z)(s.id),
        n = (0, o.ZP)(),
        c = (e) => {
            (0, m.X)(e), a(), (0, d.xf)();
        };
    return (0, t.jsx)(r.ScrollerThin, {
        className: I.listScroller,
        fade: !0,
        children:
            null == l
                ? (0, t.jsx)('div', {
                      className: I.empty,
                      children: (0, t.jsx)(r.Spinner, {})
                  })
                : 0 === l.length
                  ? (0, t.jsxs)('div', {
                        className: I.empty,
                        children: [
                            (0, t.jsx)('div', { className: I.emptyIconGuilds }),
                            (0, t.jsx)('div', {
                                className: I.emptyText,
                                children: E.Z.Messages.NO_MUTUAL_GUILDS
                            })
                        ]
                    })
                  : l.map((e) => {
                        let { guild: a, nick: l } = e;
                        return (0, t.jsx)(
                            f,
                            {
                                user: s,
                                guild: a,
                                nick: l,
                                theme: n,
                                onSelect: () => {
                                    i({ action: 'PRESS_MUTUAL_GUILD' }), c(a.id);
                                }
                            },
                            a.id
                        );
                    })
    });
}
