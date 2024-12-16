var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(100527),
    a = n(906732),
    o = n(623624),
    c = n(372444),
    d = n(852679),
    u = n(926491),
    m = n(145499),
    h = n(424218),
    g = n(267642),
    x = n(63063),
    p = n(999382),
    f = n(981631),
    C = n(611480),
    I = n(388032),
    _ = n(64462);
let v = {
        page: f.ZY5.GUILD_SETTINGS,
        section: f.jXE.GUILD_SETTINGS_STICKERS,
        object: f.qAy.BOOSTING_BANNER
    },
    N = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, a.ZP)(),
            r = (0, g.vn)(t.id)[f.Eu4.TIER_1] - t.premiumSubscriberCount;
        return (0, i.jsxs)('div', {
            className: _.upsellContainer,
            children: [
                (0, i.jsx)(l.Heading, {
                    className: _.upsellHeader,
                    variant: 'heading-xl/semibold',
                    children: I.intl.string(I.t.hzCkys)
                }),
                (0, i.jsx)(l.Text, {
                    className: _.upsellDescription,
                    variant: 'text-md/normal',
                    children: I.intl.string(I.t.jcesAA)
                }),
                (0, i.jsxs)('div', {
                    className: _.upsellButtons,
                    children: [
                        (0, i.jsx)(l.Button, {
                            className: _.upsellButtonPrimary,
                            innerClassName: _.upsellButton,
                            color: l.Button.Colors.WHITE,
                            onClick: () =>
                                (0, d.Z)({
                                    analyticsLocations: n,
                                    analyticsLocation: v,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: r
                                }),
                            children: I.intl.string(I.t.Q5dbTk)
                        }),
                        (0, i.jsx)(l.Button, {
                            innerClassName: _.upsellButton,
                            color: l.Button.Colors.WHITE,
                            onClick: () =>
                                (0, o.f)({
                                    guildId: t.id,
                                    location: { section: f.jXE.GUILD_SETTINGS_STICKERS }
                                }),
                            children: I.intl.string(I.t.hvVgAQ)
                        })
                    ]
                })
            ]
        });
    },
    T = () =>
        (0, i.jsxs)(l.FormSection, {
            title: I.intl.string(I.t['9N2OWF']),
            children: [
                (0, i.jsx)(l.FormText, {
                    type: l.FormTextTypes.DESCRIPTION,
                    children: I.intl.format(I.t.hxLvi4, { fileSize: (0, h.IC)(C.Ht, { useKibibytes: !0 }) })
                }),
                (0, i.jsx)(l.FormText, {
                    type: l.FormTextTypes.DESCRIPTION,
                    children: I.intl.format(I.t.UBj0aW, { articleUrl: x.Z.getArticleURL(f.BhN.STICKERS_UPLOAD) })
                })
            ]
        }),
    b = (e) => {
        let t,
            n,
            r,
            { guild: l, guildStickers: s } = e,
            a = l.premiumTier,
            o = (0, g.Qi)(s, a),
            d = (0, g.FZ)(a, l.id),
            u = (0, g.A3)(a),
            m = s.length;
        return null == d || a === f.Eu4.TIER_3 || o > 0
            ? (0, i.jsx)(i.Fragment, {})
            : (m > u
                  ? ((t = I.intl.formatToPlainString(I.t.ZtAY1d, { level: d })), (n = I.intl.formatToPlainString(I.t['13hOWl'], { level: d })), (r = f.qAy.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = I.intl.string(I.t.zT9Sxc)),
                    (n = I.intl.formatToPlainString(I.t.YaW9wM, {
                        level: d,
                        numAdditional: (0, g.ig)(d)
                    })),
                    (r = f.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(c.Z, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: f.ZY5.GUILD_SETTINGS,
                      section: f.jXE.GUILD_SETTINGS_STICKERS,
                      object: r,
                      objectType: (0, g.ge)(d)
                  }
              }));
    };
t.Z = () => {
    let e = (0, r.e7)([p.Z], () => p.Z.getGuild()),
        t = (0, r.e7)(
            [u.Z],
            () => {
                var t;
                return null != e && null !== (t = u.Z.getStickersByGuildId(e.id)) && void 0 !== t ? t : [];
            },
            [e]
        ),
        { analyticsLocations: n } = (0, a.ZP)(s.Z.STICKERS);
    if (null == e) return null;
    let o = e.premiumTier !== f.Eu4.NONE || t.length > 0;
    return (0, i.jsx)(a.Gt, {
        value: n,
        children: (0, i.jsxs)(l.FormSection, {
            title: I.intl.string(I.t.R5nQkZ),
            tag: l.FormTitleTags.H1,
            children: [
                o
                    ? (0, i.jsxs)('div', {
                          children: [
                              (0, i.jsx)(b, {
                                  guild: e,
                                  guildStickers: t
                              }),
                              (0, i.jsx)(T, {})
                          ]
                      })
                    : (0, i.jsx)(N, { guild: e }),
                (0, i.jsx)(l.FormDivider, { className: _.divider }),
                (0, i.jsx)(m.Z, { guild: e })
            ]
        })
    });
};
