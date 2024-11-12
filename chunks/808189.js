var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(692547),
    o = n(481060),
    l = n(535322),
    u = n(31698),
    c = n(528771),
    d = n(267642),
    f = n(981631),
    _ = n(474936),
    p = n(388032),
    h = n(209430);
let m = [
    {
        tier: f.Eu4.TIER_1,
        perks: [
            {
                icon: o.ReactionIcon,
                getCopy: () => p.intl.formatToPlainString(p.t.Tlz0x8, { numEmojiSlots: _.HO[f.Eu4.TIER_1].limits.emoji })
            },
            {
                icon: o.SoundboardIcon,
                getCopy: () => p.intl.formatToPlainString(p.t['v+MIfn'], { numSoundboardSlots: _.HO[f.Eu4.TIER_1].limits.soundboardSounds }),
                isNew: !0
            },
            {
                icon: o.GifIcon,
                getCopy: () => p.intl.string(p.t.PbAyub)
            },
            {
                icon: o.VoiceNormalIcon,
                getCopy: () => p.intl.string(p.t['WH+OeH'])
            }
        ]
    },
    {
        tier: f.Eu4.TIER_2,
        perks: [
            {
                icon: o.ScreenArrowIcon,
                getCopy: () => p.intl.string(p.t.y4ft4O)
            },
            {
                icon: o.UploadIcon,
                getCopy: () => p.intl.formatToPlainString(p.t['aFRl5+'], { uploadSizeLimit: p.intl.string(p.t.M6qV8v) })
            },
            {
                icon: o.ReactionIcon,
                getCopy: () => p.intl.string(p.t['6PV6QU'])
            },
            {
                icon: o.ServerGridIcon,
                getCopy: () => p.intl.string(p.t['1a5rjo'])
            }
        ]
    },
    {
        tier: f.Eu4.TIER_3,
        perks: [
            {
                icon: o.LinkIcon,
                getCopy: () => p.intl.string(p.t.adNGjY)
            },
            {
                icon: o.UploadIcon,
                getCopy: () => p.intl.formatToPlainString(p.t['aFRl5+'], { uploadSizeLimit: p.intl.string(p.t.yMOW8P) })
            },
            {
                icon: o.VoiceNormalIcon,
                getCopy: () => p.intl.string(p.t.Tsljqq)
            },
            {
                icon: o.GifIcon,
                getCopy: () => p.intl.string(p.t.nRKlmJ)
            },
            {
                icon: o.StageIcon,
                getCopy: () => p.intl.formatToPlainString(p.t.hsZ88f, { numStageSeats: f.RcX })
            }
        ]
    }
];
t.Z = function (e) {
    let { guild: t } = e;
    return (0, r.jsx)('div', {
        className: h.tierCards,
        children: m.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: h.tierCard,
                    children: [
                        e.tier === f.Eu4.TIER_3 &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)('div', { className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightTopRight) }),
                                    (0, r.jsx)('div', { className: a()(h.tierCardBorderHighlight, h.tierCardBorderHighlightBottomLeft) }),
                                    (0, r.jsxs)('div', {
                                        className: a()(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightTopRight),
                                        children: [(0, r.jsx)(c.Z, { className: h.tierCardSparkle1 }), (0, r.jsx)(c.Z, { className: h.tierCardSparkle2 }), (0, r.jsx)(u.Z, { className: h.tierCardSparkle3 })]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: a()(h.tierCardSparkleHighlight, h.tierCardSparkleHighlightBottomLeft),
                                        children: (0, r.jsx)(c.Z, { className: h.tierCardSparkle1 })
                                    })
                                ]
                            }),
                        e.tier === t.premiumTier &&
                            (0, r.jsx)(o.Text, {
                                className: h.tierCardCurrentTier,
                                tag: 'div',
                                variant: 'text-xs/semibold',
                                color: 'always-white',
                                children: p.intl.string(p.t['9JbE3N'])
                            }),
                        (0, r.jsxs)('div', {
                            className: h.tierCardHeader,
                            children: [
                                (0, r.jsx)(o.Heading, {
                                    className: h.tierCardHeading,
                                    variant: 'heading-xxl/semibold',
                                    color: 'always-white',
                                    children: (0, d.nW)(e.tier, { useLevels: !1 })
                                }),
                                (0, r.jsx)(o.Text, {
                                    className: h.tierCardBoostRequirement,
                                    variant: 'text-md/normal',
                                    color: 'always-white',
                                    children: p.intl.format(p.t.vbAsAw, { numBoostsRequired: f.oCV[e.tier] })
                                })
                            ]
                        }),
                        (0, r.jsx)('ul', {
                            className: h.tierCardList,
                            children: e.perks.map((e, t) =>
                                null == e.predicate || e.predicate()
                                    ? (0, r.jsxs)(
                                          'li',
                                          {
                                              className: h.tierCardPerkRow,
                                              children: [
                                                  (0, r.jsxs)(o.Text, {
                                                      className: h.tierCardListItem,
                                                      variant: 'text-md/normal',
                                                      color: 'always-white',
                                                      children: [
                                                          (0, r.jsx)(e.icon, {
                                                              className: h.tierCardListIcon,
                                                              color: s.Z.colors.WHITE
                                                          }),
                                                          e.getCopy()
                                                      ]
                                                  }),
                                                  e.isNew
                                                      ? (0, r.jsx)(l.Z, {
                                                            className: h.tierCardNewFeatureBadge,
                                                            forceUseColorForSparkles: !0,
                                                            shouldInheritBackgroundColor: !0,
                                                            shouldInheritTextColor: !0
                                                        })
                                                      : null
                                              ]
                                          },
                                          t
                                      )
                                    : null
                            )
                        })
                    ]
                },
                e.tier
            )
        )
    });
};
