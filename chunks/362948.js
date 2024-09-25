var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(780384),
    u = n(481060),
    c = n(410030),
    d = n(424218),
    _ = n(380684),
    E = n(981631),
    f = n(474936),
    h = n(689938),
    p = n(182248);
let m = [
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS,
        getPerkPreviewLightTheme: () => n(414102),
        getPerkPreviewDarkTheme: () => n(614600),
        getTier0Value: () => f.HO[E.Eu4.NONE].limits.emoji,
        getTier1Value: () => f.HO[E.Eu4.TIER_1].limits.emoji,
        getTier2Value: () => f.HO[E.Eu4.TIER_2].limits.emoji,
        getTier3Value: () => f.HO[E.Eu4.TIER_3].limits.emoji
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS,
        getPerkPreviewLightTheme: () => n(73541),
        getPerkPreviewDarkTheme: () => n(43735),
        getTier0Value: () => f.HO[E.Eu4.NONE].limits.stickers,
        getTier1Value: () => f.HO[E.Eu4.TIER_1].limits.stickers,
        getTier2Value: () => f.HO[E.Eu4.TIER_2].limits.stickers,
        getTier3Value: () => f.HO[E.Eu4.TIER_3].limits.stickers
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS,
        getPerkPreviewLightTheme: () => n(69098),
        getPerkPreviewDarkTheme: () => n(881755),
        getTier0Value: () => f.HO[E.Eu4.NONE].limits.soundboardSounds,
        getTier1Value: () => f.HO[E.Eu4.TIER_1].limits.soundboardSounds,
        getTier2Value: () => f.HO[E.Eu4.TIER_2].limits.soundboardSounds,
        getTier3Value: () => f.HO[E.Eu4.TIER_3].limits.soundboardSounds
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY,
        getPerkPreviewLightTheme: () => n(989015),
        getPerkPreviewDarkTheme: () => n(815152),
        getTier0Value: () =>
            h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: f.HO[E.Eu4.NONE].limits.screenShareQualityResolution,
                framerate: f.HO[E.Eu4.NONE].limits.screenShareQualityFramerate
            }),
        getTier1Value: () =>
            h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: f.HO[E.Eu4.TIER_1].limits.screenShareQualityResolution,
                framerate: f.HO[E.Eu4.TIER_1].limits.screenShareQualityFramerate
            }),
        getTier2Value: () =>
            h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: f.HO[E.Eu4.TIER_2].limits.screenShareQualityResolution,
                framerate: f.HO[E.Eu4.TIER_2].limits.screenShareQualityFramerate
            }),
        getTier3Value: () =>
            h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
                resolution: f.HO[E.Eu4.TIER_3].limits.screenShareQualityResolution,
                framerate: f.HO[E.Eu4.TIER_3].limits.screenShareQualityFramerate
            })
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY,
        getPerkPreviewLightTheme: () => n(222185),
        getPerkPreviewDarkTheme: () => n(415480),
        getTier0Value: () => h.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: f.HO[E.Eu4.NONE].limits.bitrate / 1000 }),
        getTier1Value: () => h.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: f.HO[E.Eu4.TIER_1].limits.bitrate / 1000 }),
        getTier2Value: () => h.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: f.HO[E.Eu4.TIER_2].limits.bitrate / 1000 }),
        getTier3Value: () => h.Z.Messages.BITRATE_KBPS_NO_SPACE.format({ bitrate: f.HO[E.Eu4.TIER_3].limits.bitrate / 1000 })
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT,
        getPerkPreviewLightTheme: () => n(825588),
        getPerkPreviewDarkTheme: () => n(954499),
        getTier0Value: () => ((0, _.XS)() ? (0, d.BU)(E.WKe / 1024, { useKibibytes: !0 }) : h.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: f.HO[E.Eu4.NONE].limits.fileSize / 1024 / 1024 })),
        getTier1Value: () => ((0, _.XS)() ? (0, d.BU)(E.WKe / 1024, { useKibibytes: !0 }) : h.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: f.HO[E.Eu4.TIER_1].limits.fileSize / 1024 / 1024 })),
        getTier2Value: () => h.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: f.HO[E.Eu4.TIER_2].limits.fileSize / 1024 / 1024 }),
        getTier3Value: () => h.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({ size: f.HO[E.Eu4.TIER_3].limits.fileSize / 1024 / 1024 })
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS,
        getPerkPreviewLightTheme: () => n(241190),
        getPerkPreviewDarkTheme: () => n(879846),
        getTier0Value: () => f.HO[E.Eu4.NONE].limits.stageVideoUsers,
        getTier1Value: () => f.HO[E.Eu4.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => f.HO[E.Eu4.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => f.HO[E.Eu4.TIER_3].limits.stageVideoUsers
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON,
        getPerkPreviewLightTheme: () => n(499059),
        getPerkPreviewDarkTheme: () => n(488349),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND,
        getPerkPreviewLightTheme: () => n(136631),
        getPerkPreviewDarkTheme: () => n(692079),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER,
        getPerkPreviewLightTheme: () => n(277822),
        getPerkPreviewDarkTheme: () => n(866919),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC,
        getTier3Value: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS,
        getPerkPreviewLightTheme: () => n(872259),
        getPerkPreviewDarkTheme: () => n(876049),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL,
        getPerkPreviewLightTheme: () => n(710717),
        getPerkPreviewDarkTheme: () => n(945198),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0
    }
];
function I(e) {
    let { children: t, className: n, tier: r } = e,
        a = r === E.Eu4.NONE ? 'text-muted' : 'header-primary',
        o = r === E.Eu4.NONE || null == r ? 'heading-xl/normal' : 'heading-xl/bold';
    return (0, i.jsxs)('th', {
        className: s()(p.columnHeading, n),
        scope: 'col',
        children: [
            (0, i.jsx)(u.Heading, {
                color: a,
                variant: o,
                children: t
            }),
            null != r &&
                (0, i.jsx)(u.Text, {
                    color: a,
                    variant: 'text-md/normal',
                    children: h.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({ subscriptions: E.oCV[r] })
                })
        ]
    });
}
function T(e) {
    let t;
    let { className: n, textVariant: r = 'text-md/bold', value: a } = e;
    if ('boolean' == typeof a) {
        let e = s()(p.booleanValueIcon, { [p.booleanValueTrue]: a });
        t = a
            ? (0, i.jsx)(u.CheckmarkLargeIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: e
              })
            : (0, i.jsx)(u.XSmallIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: e
              });
    } else
        t = (0, i.jsx)(u.Text, {
            color: 'interactive-active',
            variant: r,
            children: a
        });
    return (0, i.jsx)('td', {
        className: s()(p.tableCell, n),
        children: t
    });
}
function g(e) {
    switch (e) {
        case E.Eu4.NONE:
        case E.Eu4.TIER_1:
            return E.Eu4.TIER_2;
        case E.Eu4.TIER_2:
        case E.Eu4.TIER_3:
            return E.Eu4.TIER_3;
        default:
            return null;
    }
}
function S(e) {
    let { currentTier: t } = e,
        n = g(t);
    return null == n
        ? null
        : (0, i.jsx)('div', {
              className: s()(p.recommendedTierHighlight, {
                  [p.recommendedTierHighlightTier2]: n === E.Eu4.TIER_2,
                  [p.recommendedTierHighlightTier3]: n === E.Eu4.TIER_3
              }),
              children: (0, i.jsx)(u.Text, {
                  className: p.recommendedTierHighlightTag,
                  color: 'always-white',
                  variant: 'text-xs/bold',
                  children: t === E.Eu4.TIER_3 ? h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG : h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG
              })
          });
}
function A(e) {
    let t = (0, c.ZP)(),
        [n, r] = a.useState(null),
        { className: o, guild: d, hideHeading: _, hideTier0: f } = e;
    function g(e) {
        r(e);
    }
    function A() {
        r(null);
    }
    return (0, i.jsxs)('div', {
        className: o,
        children: [
            !_ &&
                (0, i.jsx)(u.Heading, {
                    className: p.heading,
                    variant: 'heading-xxl/extrabold',
                    children: h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING
                }),
            (0, i.jsxs)('div', {
                className: p.tableWrapper,
                children: [
                    null != d && (0, i.jsx)(S, { currentTier: d.premiumTier }),
                    (0, i.jsxs)('table', {
                        className: p.table,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, i.jsx)('thead', {
                                children: (0, i.jsxs)('tr', {
                                    className: p.__invalid_tableRow,
                                    children: [
                                        (0, i.jsx)(I, {
                                            className: p.tableRowHeading,
                                            children: h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS
                                        }),
                                        !f &&
                                            (0, i.jsx)(I, {
                                                tier: E.Eu4.NONE,
                                                children: h.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME
                                            }),
                                        (0, i.jsx)(I, {
                                            tier: E.Eu4.TIER_1,
                                            children: h.Z.Messages.PREMIUM_GUILD_TIER_1
                                        }),
                                        (0, i.jsx)(I, {
                                            tier: E.Eu4.TIER_2,
                                            children: h.Z.Messages.PREMIUM_GUILD_TIER_2
                                        }),
                                        (0, i.jsx)(I, {
                                            tier: E.Eu4.TIER_3,
                                            children: h.Z.Messages.PREMIUM_GUILD_TIER_3
                                        })
                                    ]
                                })
                            }),
                            (0, i.jsx)('tbody', {
                                className: p.__invalid_tableBody,
                                children: m.map((e, r) => {
                                    let a = n === r;
                                    function o() {
                                        g(r);
                                    }
                                    return void 0 === e.predicate
                                        ? (0, i.jsxs)(
                                              'tr',
                                              {
                                                  className: p.__invalid_tableRow,
                                                  children: [
                                                      (0, i.jsx)('th', {
                                                          className: s()(p.tableCell, p.tableCellWrapper),
                                                          scope: 'row',
                                                          children: (0, i.jsx)(u.Clickable, {
                                                              className: s()(p.tableRowHeading, p.tableCell, p.tableCellInner),
                                                              onFocus: o,
                                                              onBlur: A,
                                                              onMouseEnter: o,
                                                              onMouseLeave: A,
                                                              children: (0, i.jsx)(u.Popout, {
                                                                  align: 'center',
                                                                  disablePointerEvents: !0,
                                                                  nudgeAlignIntoViewport: !0,
                                                                  position: 'bottom',
                                                                  renderPopout: () =>
                                                                      (0, i.jsx)('img', {
                                                                          className: p.perkPreviewImage,
                                                                          src: (0, l.wj)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                                          alt: ''
                                                                      }),
                                                                  shouldShow: a,
                                                                  spacing: 16,
                                                                  children: () =>
                                                                      (0, i.jsx)(u.Text, {
                                                                          variant: 'text-md/normal',
                                                                          children: e.getPerkHeading()
                                                                      })
                                                              })
                                                          })
                                                      }),
                                                      !f &&
                                                          (0, i.jsx)(T, {
                                                              textVariant: 'text-md/normal',
                                                              value: e.getTier0Value()
                                                          }),
                                                      (0, i.jsx)(T, { value: e.getTier1Value() }),
                                                      (0, i.jsx)(T, { value: e.getTier2Value() }),
                                                      (0, i.jsx)(T, { value: e.getTier3Value() })
                                                  ]
                                              },
                                              r
                                          )
                                        : null;
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
t.Z = A;
