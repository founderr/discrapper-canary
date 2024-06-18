"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(780384),
  l = n(481060),
  u = n(410030),
  _ = n(981631),
  c = n(474936),
  d = n(689938),
  E = n(169709);
let I = [{
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_EMOJI_SLOTS,
  getPerkPreviewLightTheme: () => n(414102),
  getPerkPreviewDarkTheme: () => n(614600),
  getTier0Value: () => c.HO[_.Eu4.NONE].limits.emoji,
  getTier1Value: () => c.HO[_.Eu4.TIER_1].limits.emoji,
  getTier2Value: () => c.HO[_.Eu4.TIER_2].limits.emoji,
  getTier3Value: () => c.HO[_.Eu4.TIER_3].limits.emoji
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STICKER_SLOTS,
  getPerkPreviewLightTheme: () => n(73541),
  getPerkPreviewDarkTheme: () => n(43735),
  getTier0Value: () => c.HO[_.Eu4.NONE].limits.stickers,
  getTier1Value: () => c.HO[_.Eu4.TIER_1].limits.stickers,
  getTier2Value: () => c.HO[_.Eu4.TIER_2].limits.stickers,
  getTier3Value: () => c.HO[_.Eu4.TIER_3].limits.stickers
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_SOUNDBOARD_SLOTS,
  getPerkPreviewLightTheme: () => n(69098),
  getPerkPreviewDarkTheme: () => n(881755),
  getTier0Value: () => c.HO[_.Eu4.NONE].limits.soundboardSounds,
  getTier1Value: () => c.HO[_.Eu4.TIER_1].limits.soundboardSounds,
  getTier2Value: () => c.HO[_.Eu4.TIER_2].limits.soundboardSounds,
  getTier3Value: () => c.HO[_.Eu4.TIER_3].limits.soundboardSounds
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_STREAM_QUALITY,
  getPerkPreviewLightTheme: () => n(989015),
  getPerkPreviewDarkTheme: () => n(815152),
  getTier0Value: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
    resolution: c.HO[_.Eu4.NONE].limits.screenShareQualityResolution,
    framerate: c.HO[_.Eu4.NONE].limits.screenShareQualityFramerate
  }),
  getTier1Value: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
    resolution: c.HO[_.Eu4.TIER_1].limits.screenShareQualityResolution,
    framerate: c.HO[_.Eu4.TIER_1].limits.screenShareQualityFramerate
  }),
  getTier2Value: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
    resolution: c.HO[_.Eu4.TIER_2].limits.screenShareQualityResolution,
    framerate: c.HO[_.Eu4.TIER_2].limits.screenShareQualityFramerate
  }),
  getTier3Value: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_STREAM_QUALITY.format({
    resolution: c.HO[_.Eu4.TIER_3].limits.screenShareQualityResolution,
    framerate: c.HO[_.Eu4.TIER_3].limits.screenShareQualityFramerate
  })
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VOICE_QUALITY,
  getPerkPreviewLightTheme: () => n(222185),
  getPerkPreviewDarkTheme: () => n(415480),
  getTier0Value: () => d.Z.Messages.BITRATE_KBPS_NO_SPACE.format({
    bitrate: c.HO[_.Eu4.NONE].limits.bitrate / 1e3
  }),
  getTier1Value: () => d.Z.Messages.BITRATE_KBPS_NO_SPACE.format({
    bitrate: c.HO[_.Eu4.TIER_1].limits.bitrate / 1e3
  }),
  getTier2Value: () => d.Z.Messages.BITRATE_KBPS_NO_SPACE.format({
    bitrate: c.HO[_.Eu4.TIER_2].limits.bitrate / 1e3
  }),
  getTier3Value: () => d.Z.Messages.BITRATE_KBPS_NO_SPACE.format({
    bitrate: c.HO[_.Eu4.TIER_3].limits.bitrate / 1e3
  })
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_UPLOAD_SIZE_LIMIT,
  getPerkPreviewLightTheme: () => n(825588),
  getPerkPreviewDarkTheme: () => n(954499),
  getTier0Value: () => d.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({
    size: c.HO[_.Eu4.NONE].limits.fileSize / 1024 / 1024
  }),
  getTier1Value: () => d.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({
    size: c.HO[_.Eu4.TIER_1].limits.fileSize / 1024 / 1024
  }),
  getTier2Value: () => d.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({
    size: c.HO[_.Eu4.TIER_2].limits.fileSize / 1024 / 1024
  }),
  getTier3Value: () => d.Z.Messages.FILE_SIZE_MB_NO_SPACE.format({
    size: c.HO[_.Eu4.TIER_3].limits.fileSize / 1024 / 1024
  })
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VIDEO_STAGE_SEATS,
  getPerkPreviewLightTheme: () => n(241190),
  getPerkPreviewDarkTheme: () => n(879846),
  getTier0Value: () => c.HO[_.Eu4.NONE].limits.stageVideoUsers,
  getTier1Value: () => c.HO[_.Eu4.TIER_1].limits.stageVideoUsers,
  getTier2Value: () => c.HO[_.Eu4.TIER_2].limits.stageVideoUsers,
  getTier3Value: () => c.HO[_.Eu4.TIER_3].limits.stageVideoUsers
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_ANIMATED_GUILD_ICON,
  getPerkPreviewLightTheme: () => n(499059),
  getPerkPreviewDarkTheme: () => n(488349),
  getTier0Value: () => !1,
  getTier1Value: () => !0,
  getTier2Value: () => !0,
  getTier3Value: () => !0
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_INVITE_BACKGROUND,
  getPerkPreviewLightTheme: () => n(136631),
  getPerkPreviewDarkTheme: () => n(692079),
  getTier0Value: () => !1,
  getTier1Value: () => !0,
  getTier2Value: () => !0,
  getTier3Value: () => !0
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_GUILD_BANNER,
  getPerkPreviewLightTheme: () => n(277822),
  getPerkPreviewDarkTheme: () => n(866919),
  getTier0Value: () => !1,
  getTier1Value: () => !1,
  getTier2Value: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_STATIC,
  getTier3Value: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CELL_GUILD_BANNER_ANIMATED
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_CUSTOM_ROLE_ICONS,
  getPerkPreviewLightTheme: () => n(872259),
  getPerkPreviewDarkTheme: () => n(876049),
  getTier0Value: () => !1,
  getTier1Value: () => !1,
  getTier2Value: () => !0,
  getTier3Value: () => !0
}, {
  getPerkHeading: () => d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_PERK_HEADING_VANITY_URL,
  getPerkPreviewLightTheme: () => n(710717),
  getPerkPreviewDarkTheme: () => n(945198),
  getTier0Value: () => !1,
  getTier1Value: () => !1,
  getTier2Value: () => !1,
  getTier3Value: () => !0
}];

function T(e) {
  let {
    children: t,
    className: n,
    tier: r
  } = e, s = r === _.Eu4.NONE ? "text-muted" : "header-primary", a = r === _.Eu4.NONE || null == r ? "heading-xl/normal" : "heading-xl/bold";
  return (0, i.jsxs)("th", {
    className: o()(E.columnHeading, n),
    scope: "col",
    children: [(0, i.jsx)(l.Heading, {
      color: s,
      variant: a,
      children: t
    }), null != r && (0, i.jsx)(l.Text, {
      color: s,
      variant: "text-md/normal",
      children: d.Z.Messages.PREMIUM_GUILD_PERKS_MODAL_HEADER_SUBSCRIPTION_COUNT.format({
        subscriptions: _.oCV[r]
      })
    })]
  })
}

function h(e) {
  let t;
  let {
    className: n,
    textVariant: r = "text-md/bold",
    value: s
  } = e;
  if ("boolean" == typeof s) {
    let e = o()(E.booleanValueIcon, {
      [E.booleanValueTrue]: s
    });
    t = s ? (0, i.jsx)(l.CheckmarkLargeIcon, {
      size: "md",
      color: "currentColor",
      className: e
    }) : (0, i.jsx)(l.CloseSmallIcon, {
      size: "md",
      color: "currentColor",
      className: e
    })
  } else t = (0, i.jsx)(l.Text, {
    color: "interactive-active",
    variant: r,
    children: s
  });
  return (0, i.jsx)("td", {
    className: o()(E.tableCell, n),
    children: t
  })
}

function S(e) {
  let {
    currentTier: t
  } = e, n = function(e) {
    switch (e) {
      case _.Eu4.NONE:
      case _.Eu4.TIER_1:
        return _.Eu4.TIER_2;
      case _.Eu4.TIER_2:
      case _.Eu4.TIER_3:
        return _.Eu4.TIER_3;
      default:
        return null
    }
  }(t);
  return null == n ? null : (0, i.jsx)("div", {
    className: o()(E.recommendedTierHighlight, {
      [E.recommendedTierHighlightTier2]: n === _.Eu4.TIER_2,
      [E.recommendedTierHighlightTier3]: n === _.Eu4.TIER_3
    }),
    children: (0, i.jsx)(l.Text, {
      className: E.recommendedTierHighlightTag,
      color: "always-white",
      variant: "text-xs/bold",
      children: t === _.Eu4.TIER_3 ? d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_CURRENT_TAG : d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_RECOMMENDED_TAG
    })
  })
}
t.Z = function(e) {
  let t = (0, u.ZP)(),
    [n, s] = r.useState(null),
    {
      className: c,
      guild: f,
      hideHeading: N,
      hideTier0: A
    } = e;

  function m() {
    s(null)
  }
  return (0, i.jsxs)("div", {
    className: c,
    children: [!N && (0, i.jsx)(l.Heading, {
      className: E.heading,
      variant: "heading-xxl/extrabold",
      children: d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_HEADING
    }), (0, i.jsxs)("div", {
      className: E.tableWrapper,
      children: [null != f && (0, i.jsx)(S, {
        currentTier: f.premiumTier
      }), (0, i.jsxs)("table", {
        className: E.table,
        cellPadding: 0,
        cellSpacing: 0,
        children: [(0, i.jsx)("thead", {
          children: (0, i.jsxs)("tr", {
            className: E.__invalid_tableRow,
            children: [(0, i.jsx)(T, {
              className: E.tableRowHeading,
              children: d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_COMPARISON_TABLE_COLUMN_HEADING_PERKS
            }), !A && (0, i.jsx)(T, {
              tier: _.Eu4.NONE,
              children: d.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TIER_NONE_NAME
            }), (0, i.jsx)(T, {
              tier: _.Eu4.TIER_1,
              children: d.Z.Messages.PREMIUM_GUILD_TIER_1
            }), (0, i.jsx)(T, {
              tier: _.Eu4.TIER_2,
              children: d.Z.Messages.PREMIUM_GUILD_TIER_2
            }), (0, i.jsx)(T, {
              tier: _.Eu4.TIER_3,
              children: d.Z.Messages.PREMIUM_GUILD_TIER_3
            })]
          })
        }), (0, i.jsx)("tbody", {
          className: E.__invalid_tableBody,
          children: I.map((e, r) => {
            let u = n === r;

            function _() {
              s(r)
            }
            return void 0 === e.predicate ? (0, i.jsxs)("tr", {
              className: E.__invalid_tableRow,
              children: [(0, i.jsx)("th", {
                className: o()(E.tableCell, E.tableCellWrapper),
                scope: "row",
                children: (0, i.jsx)(l.Clickable, {
                  className: o()(E.tableRowHeading, E.tableCell, E.tableCellInner),
                  onFocus: _,
                  onBlur: m,
                  onMouseEnter: _,
                  onMouseLeave: m,
                  children: (0, i.jsx)(l.Popout, {
                    align: "center",
                    disablePointerEvents: !0,
                    nudgeAlignIntoViewport: !0,
                    position: "bottom",
                    renderPopout: () => (0, i.jsx)("img", {
                      className: E.perkPreviewImage,
                      src: (0, a.wj)(t) ? e.getPerkPreviewDarkTheme() : e.getPerkPreviewLightTheme(),
                      alt: ""
                    }),
                    shouldShow: u,
                    spacing: 16,
                    children: () => (0, i.jsx)(l.Text, {
                      variant: "text-md/normal",
                      children: e.getPerkHeading()
                    })
                  })
                })
              }), !A && (0, i.jsx)(h, {
                textVariant: "text-md/normal",
                value: e.getTier0Value()
              }), (0, i.jsx)(h, {
                value: e.getTier1Value()
              }), (0, i.jsx)(h, {
                value: e.getTier2Value()
              }), (0, i.jsx)(h, {
                value: e.getTier3Value()
              })]
            }, r) : null
          })
        })]
      })]
    })]
  })
}