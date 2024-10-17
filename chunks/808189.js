var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(692547),
    o = n(481060),
    l = n(535322),
    u = n(31698),
    c = n(528771),
    d = n(267642),
    _ = n(981631),
    E = n(474936),
    f = n(689938),
    h = n(209430);
let p = [
    {
        tier: _.Eu4.TIER_1,
        perks: [
            {
                icon: o.ReactionIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_EMOJI.format({ numEmojiSlots: E.HO[_.Eu4.TIER_1].limits.emoji })
            },
            {
                icon: o.SoundboardIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_CUSTOM_SOUNDS.format({ numSoundboardSlots: E.HO[_.Eu4.TIER_1].limits.soundboardSounds }),
                isNew: !0
            },
            {
                icon: o.GifIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_ICON
            },
            {
                icon: o.VoiceNormalIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_AUDIO_QUALITY
            }
        ]
    },
    {
        tier: _.Eu4.TIER_2,
        perks: [
            {
                icon: o.ScreenArrowIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STREAM_QUALITY
            },
            {
                icon: o.UploadIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({ uploadSizeLimit: f.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_2 })
            },
            {
                icon: o.ReactionIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ROLE_ICONS
            },
            {
                icon: o.ServerGridIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_GUILD_BANNER
            }
        ]
    },
    {
        tier: _.Eu4.TIER_3,
        perks: [
            {
                icon: o.LinkIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_VANITY_URL
            },
            {
                icon: o.UploadIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_LARGER_FILE_UPLOADS.format({ uploadSizeLimit: f.Z.Messages.FILE_UPLOAD_LIMIT_BOOSTED_GUILD_TIER_3 })
            },
            {
                icon: o.VoiceNormalIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_HIGHEST_AUDIO_QUALITY
            },
            {
                icon: o.GifIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_ANIMATED_GUILD_BANNER
            },
            {
                icon: o.StageIcon,
                getCopy: () => f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PERK_STAGE_SEATS_AND_MORE.format({ numStageSeats: _.RcX })
            }
        ]
    }
];
t.Z = function (e) {
    let { guild: t } = e;
    return (0, r.jsx)('div', {
        className: h.tierCards,
        children: p.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: h.tierCard,
                    children: [
                        e.tier === _.Eu4.TIER_3 &&
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
                                children: f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_CURRENT_TIER_LABEL
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
                                    children: f.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTS_REQUIRED.format({ numBoostsRequired: _.oCV[e.tier] })
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
