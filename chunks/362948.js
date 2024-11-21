n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(780384),
    l = n(481060),
    u = n(410030),
    c = n(424218),
    d = n(380684),
    f = n(981631),
    _ = n(474936),
    p = n(388032),
    h = n(182248);
let m = [
    {
        getPerkHeading: () => p.intl.string(p.t.tIiwur),
        getPerkPreviewLightTheme: () => n(414102),
        getPerkPreviewDarkTheme: () => n(614600),
        getTier0Value: () => _.HO[f.Eu4.NONE].limits.emoji,
        getTier1Value: () => _.HO[f.Eu4.TIER_1].limits.emoji,
        getTier2Value: () => _.HO[f.Eu4.TIER_2].limits.emoji,
        getTier3Value: () => _.HO[f.Eu4.TIER_3].limits.emoji
    },
    {
        getPerkHeading: () => p.intl.string(p.t['3iccen']),
        getPerkPreviewLightTheme: () => n(73541),
        getPerkPreviewDarkTheme: () => n(43735),
        getTier0Value: () => _.HO[f.Eu4.NONE].limits.stickers,
        getTier1Value: () => _.HO[f.Eu4.TIER_1].limits.stickers,
        getTier2Value: () => _.HO[f.Eu4.TIER_2].limits.stickers,
        getTier3Value: () => _.HO[f.Eu4.TIER_3].limits.stickers
    },
    {
        getPerkHeading: () => p.intl.string(p.t['+smCv7']),
        getPerkPreviewLightTheme: () => n(69098),
        getPerkPreviewDarkTheme: () => n(881755),
        getTier0Value: () => _.HO[f.Eu4.NONE].limits.soundboardSounds,
        getTier1Value: () => _.HO[f.Eu4.TIER_1].limits.soundboardSounds,
        getTier2Value: () => _.HO[f.Eu4.TIER_2].limits.soundboardSounds,
        getTier3Value: () => _.HO[f.Eu4.TIER_3].limits.soundboardSounds
    },
    {
        getPerkHeading: () => p.intl.string(p.t.SMYauL),
        getPerkPreviewLightTheme: () => n(989015),
        getPerkPreviewDarkTheme: () => n(904257),
        getTier0Value: () =>
            p.intl.formatToPlainString(p.t.zZ6Rdn, {
                resolution: _.HO[f.Eu4.NONE].limits.screenShareQualityResolution,
                framerate: _.HO[f.Eu4.NONE].limits.screenShareQualityFramerate
            }),
        getTier1Value: () =>
            p.intl.formatToPlainString(p.t.zZ6Rdn, {
                resolution: _.HO[f.Eu4.TIER_1].limits.screenShareQualityResolution,
                framerate: _.HO[f.Eu4.TIER_1].limits.screenShareQualityFramerate
            }),
        getTier2Value: () =>
            p.intl.formatToPlainString(p.t.zZ6Rdn, {
                resolution: _.HO[f.Eu4.TIER_2].limits.screenShareQualityResolution,
                framerate: _.HO[f.Eu4.TIER_2].limits.screenShareQualityFramerate
            }),
        getTier3Value: () =>
            p.intl.formatToPlainString(p.t.zZ6Rdn, {
                resolution: _.HO[f.Eu4.TIER_3].limits.screenShareQualityResolution,
                framerate: _.HO[f.Eu4.TIER_3].limits.screenShareQualityFramerate
            })
    },
    {
        getPerkHeading: () => p.intl.string(p.t['/79IDg']),
        getPerkPreviewLightTheme: () => n(222185),
        getPerkPreviewDarkTheme: () => n(415480),
        getTier0Value: () => p.intl.formatToPlainString(p.t.w1gmLi, { bitrate: _.HO[f.Eu4.NONE].limits.bitrate / 1000 }),
        getTier1Value: () => p.intl.formatToPlainString(p.t.w1gmLi, { bitrate: _.HO[f.Eu4.TIER_1].limits.bitrate / 1000 }),
        getTier2Value: () => p.intl.formatToPlainString(p.t.w1gmLi, { bitrate: _.HO[f.Eu4.TIER_2].limits.bitrate / 1000 }),
        getTier3Value: () => p.intl.formatToPlainString(p.t.w1gmLi, { bitrate: _.HO[f.Eu4.TIER_3].limits.bitrate / 1000 })
    },
    {
        getPerkHeading: () => p.intl.string(p.t.R1U2xM),
        getPerkPreviewLightTheme: () => n(825588),
        getPerkPreviewDarkTheme: () => n(954499),
        getTier0Value: () => ((0, d.XS)() ? (0, c.BU)(f.WKe / 1024, { useKibibytes: !0 }) : p.intl.formatToPlainString(p.t.pIn7AQ, { size: _.HO[f.Eu4.NONE].limits.fileSize / 1024 / 1024 })),
        getTier1Value: () => ((0, d.XS)() ? (0, c.BU)(f.WKe / 1024, { useKibibytes: !0 }) : p.intl.formatToPlainString(p.t.pIn7AQ, { size: _.HO[f.Eu4.TIER_1].limits.fileSize / 1024 / 1024 })),
        getTier2Value: () => p.intl.formatToPlainString(p.t.pIn7AQ, { size: _.HO[f.Eu4.TIER_2].limits.fileSize / 1024 / 1024 }),
        getTier3Value: () => p.intl.formatToPlainString(p.t.pIn7AQ, { size: _.HO[f.Eu4.TIER_3].limits.fileSize / 1024 / 1024 })
    },
    {
        getPerkHeading: () => p.intl.string(p.t.f6vfsr),
        getPerkPreviewLightTheme: () => n(241190),
        getPerkPreviewDarkTheme: () => n(879846),
        getTier0Value: () => _.HO[f.Eu4.NONE].limits.stageVideoUsers,
        getTier1Value: () => _.HO[f.Eu4.TIER_1].limits.stageVideoUsers,
        getTier2Value: () => _.HO[f.Eu4.TIER_2].limits.stageVideoUsers,
        getTier3Value: () => _.HO[f.Eu4.TIER_3].limits.stageVideoUsers
    },
    {
        getPerkHeading: () => p.intl.string(p.t.qDqUMD),
        getPerkPreviewLightTheme: () => n(499059),
        getPerkPreviewDarkTheme: () => n(488349),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => p.intl.string(p.t.uwqgbm),
        getPerkPreviewLightTheme: () => n(136631),
        getPerkPreviewDarkTheme: () => n(692079),
        getTier0Value: () => !1,
        getTier1Value: () => !0,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => p.intl.string(p.t.zxsDxc),
        getPerkPreviewLightTheme: () => n(277822),
        getPerkPreviewDarkTheme: () => n(866919),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => p.intl.string(p.t['2TNS3t']),
        getTier3Value: () => p.intl.string(p.t['l+S46e'])
    },
    {
        getPerkHeading: () => p.intl.string(p.t['bHa+ER']),
        getPerkPreviewLightTheme: () => n(872259),
        getPerkPreviewDarkTheme: () => n(876049),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !0,
        getTier3Value: () => !0
    },
    {
        getPerkHeading: () => p.intl.string(p.t.QV6MZW),
        getPerkPreviewLightTheme: () => n(710717),
        getPerkPreviewDarkTheme: () => n(945198),
        getTier0Value: () => !1,
        getTier1Value: () => !1,
        getTier2Value: () => !1,
        getTier3Value: () => !0
    }
];
function g(e) {
    let { children: t, className: n, tier: i } = e,
        a = i === f.Eu4.NONE ? 'text-muted' : 'header-primary',
        o = i === f.Eu4.NONE || null == i ? 'heading-xl/normal' : 'heading-xl/bold';
    return (0, r.jsxs)('th', {
        className: s()(h.columnHeading, n),
        scope: 'col',
        children: [
            (0, r.jsx)(l.Heading, {
                color: a,
                variant: o,
                children: t
            }),
            null != i &&
                (0, r.jsx)(l.Text, {
                    color: a,
                    variant: 'text-md/normal',
                    children: p.intl.format(p.t['pob/cH'], { subscriptions: f.oCV[i] })
                })
        ]
    });
}
function E(e) {
    let t;
    let { className: n, textVariant: i = 'text-md/bold', value: a } = e;
    if ('boolean' == typeof a) {
        let e = s()(h.booleanValueIcon, { [h.booleanValueTrue]: a });
        t = a
            ? (0, r.jsx)(l.CheckmarkLargeIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: e
              })
            : (0, r.jsx)(l.XSmallIcon, {
                  size: 'md',
                  color: 'currentColor',
                  className: e
              });
    } else
        t = (0, r.jsx)(l.Text, {
            color: 'interactive-active',
            variant: i,
            children: a
        });
    return (0, r.jsx)('td', {
        className: s()(h.tableCell, n),
        children: t
    });
}
function v(e) {
    let { currentTier: t } = e,
        n = (function (e) {
            switch (e) {
                case f.Eu4.NONE:
                case f.Eu4.TIER_1:
                    return f.Eu4.TIER_2;
                case f.Eu4.TIER_2:
                case f.Eu4.TIER_3:
                    return f.Eu4.TIER_3;
                default:
                    return null;
            }
        })(t);
    return null == n
        ? null
        : (0, r.jsx)('div', {
              className: s()(h.recommendedTierHighlight, {
                  [h.recommendedTierHighlightTier2]: n === f.Eu4.TIER_2,
                  [h.recommendedTierHighlightTier3]: n === f.Eu4.TIER_3
              }),
              children: (0, r.jsx)(l.Text, {
                  className: h.recommendedTierHighlightTag,
                  color: 'always-white',
                  variant: 'text-xs/bold',
                  children: t === f.Eu4.TIER_3 ? p.intl.string(p.t.d849Ul) : p.intl.string(p.t.dZeX19)
              })
          });
}
t.Z = function (e) {
    let t = (0, u.ZP)(),
        [n, a] = i.useState(null),
        { className: c, guild: d, hideHeading: _, hideTier0: b } = e;
    function I() {
        a(null);
    }
    return (0, r.jsxs)('div', {
        className: c,
        children: [
            !_ &&
                (0, r.jsx)(l.Heading, {
                    className: h.heading,
                    variant: 'heading-xxl/extrabold',
                    children: p.intl.string(p.t['9GGb9v'])
                }),
            (0, r.jsxs)('div', {
                className: h.tableWrapper,
                children: [
                    null != d && (0, r.jsx)(v, { currentTier: d.premiumTier }),
                    (0, r.jsxs)('table', {
                        className: h.table,
                        cellPadding: 0,
                        cellSpacing: 0,
                        children: [
                            (0, r.jsx)('thead', {
                                children: (0, r.jsxs)('tr', {
                                    className: h.__invalid_tableRow,
                                    children: [
                                        (0, r.jsx)(g, {
                                            className: h.tableRowHeading,
                                            children: p.intl.string(p.t.F5MY0t)
                                        }),
                                        !b &&
                                            (0, r.jsx)(g, {
                                                tier: f.Eu4.NONE,
                                                children: p.intl.string(p.t.mx8j2t)
                                            }),
                                        (0, r.jsx)(g, {
                                            tier: f.Eu4.TIER_1,
                                            children: p.intl.string(p.t.nzXtaW)
                                        }),
                                        (0, r.jsx)(g, {
                                            tier: f.Eu4.TIER_2,
                                            children: p.intl.string(p.t['h33/ub'])
                                        }),
                                        (0, r.jsx)(g, {
                                            tier: f.Eu4.TIER_3,
                                            children: p.intl.string(p.t.BfF6EB)
                                        })
                                    ]
                                })
                            }),
                            (0, r.jsx)('tbody', {
                                className: h.__invalid_tableBody,
                                children: m.map((e, i) => {
                                    let u = n === i;
                                    function c() {
                                        a(i);
                                    }
                                    return void 0 === e.predicate
                                        ? (0, r.jsxs)(
                                              'tr',
                                              {
                                                  className: h.__invalid_tableRow,
                                                  children: [
                                                      (0, r.jsx)('th', {
                                                          className: s()(h.tableCell, h.tableCellWrapper),
                                                          scope: 'row',
                                                          children: (0, r.jsx)(l.Clickable, {
                                                              className: s()(h.tableRowHeading, h.tableCell, h.tableCellInner),
                                                              onFocus: c,
                                                              onBlur: I,
                                                              onMouseEnter: c,
                                                              onMouseLeave: I,
                                                              children: (0, r.jsx)(l.Popout, {
                                                                  align: 'center',
                                                                  disablePointerEvents: !0,
                                                                  nudgeAlignIntoViewport: !0,
                                                                  position: 'bottom',
                                                                  renderPopout: () =>
                                                                      (0, r.jsx)('img', {
                                                                          className: h.perkPreviewImage,
                                                                          src: (0, o.wj)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                                                                          alt: ''
                                                                      }),
                                                                  shouldShow: u,
                                                                  spacing: 16,
                                                                  children: () =>
                                                                      (0, r.jsx)(l.Text, {
                                                                          variant: 'text-md/normal',
                                                                          children: e.getPerkHeading()
                                                                      })
                                                              })
                                                          })
                                                      }),
                                                      !b &&
                                                          (0, r.jsx)(E, {
                                                              textVariant: 'text-md/normal',
                                                              value: e.getTier0Value()
                                                          }),
                                                      (0, r.jsx)(E, { value: e.getTier1Value() }),
                                                      (0, r.jsx)(E, { value: e.getTier2Value() }),
                                                      (0, r.jsx)(E, { value: e.getTier3Value() })
                                                  ]
                                              },
                                              i
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
};
