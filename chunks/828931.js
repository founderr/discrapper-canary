"use strict";
n.r(t), n.d(t, {
  default: function() {
    return F
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("151426"),
  i = n("819855"),
  r = n("77078"),
  o = n("685665"),
  u = n("593094"),
  d = n("951169"),
  c = n("384997"),
  f = n("379532"),
  E = n("526843"),
  _ = n("442619"),
  h = n("592407"),
  C = n("465511"),
  I = n("519119"),
  T = n("5667"),
  S = n("79798"),
  p = n("599110"),
  m = n("427459"),
  g = n("701909"),
  A = n("49111"),
  N = n("988268"),
  R = n("994428"),
  O = n("944305"),
  L = n("646718"),
  v = n("782340"),
  M = n("706904"),
  P = n("142190"),
  D = n("288562"),
  y = n("553274"),
  x = n("824489"),
  b = n("311492"),
  U = n("776432");

function G(e) {
  null != e && h.default.open(e.id, A.GuildSettingsSections.OVERVIEW, {
    section: A.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
  }, A.GuildSettingsSubsections.DISPLAY)
}

function j(e, t) {
  t && h.default.open(e.id, A.GuildSettingsSections.DISCOVERY)
}

function w(e, t) {
  null != t && ((0, m.isTierUnlocked)(t, A.BoostedGuildTiers.TIER_1) ? h.default.open(t.id, A.GuildSettingsSections.OVERVIEW, {
    section: A.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH
  }, A.GuildSettingsSubsections.INVITE) : (0, f.default)({
    analyticsLocations: e,
    analyticsSourceLocation: A.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, O.guildInviteUpsellPerks)()
  }))
}

function k(e) {
  let {
    renderPopout: t,
    renderGuildHeaderDropdownButton: n
  } = e;
  return (0, a.jsx)(r.Popout, {
    renderPopout: () => (0, a.jsx)("div", {
      onClick: e => e.stopPropagation(),
      children: t
    }),
    position: "bottom",
    align: "center",
    animation: r.Popout.Animation.TRANSLATE,
    shouldShow: !0,
    children: () => n()
  })
}
var F = s.memo(function(e) {
  let {
    contentTypes: t,
    theme: n,
    guild: s,
    renderGuildHeaderDropdownButton: r
  } = e, {
    analyticsLocations: f
  } = (0, o.default)(), O = () => {
    p.default.track(A.AnalyticEvents.TOOLTIP_VIEWED, {
      type: L.PremiumUpsellTypes.PREMIUM_PROGRESS_BAR,
      location: {
        page: A.AnalyticsPages.GUILD_CHANNEL
      }
    })
  }, F = () => {
    p.default.track(A.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: L.PremiumUpsellTypes.INVITE_SPLASH_UPSELL,
      location: {
        page: A.AnalyticsPages.GUILD_CHANNEL
      },
      location_stack: f
    })
  }, B = (0, i.isThemeDark)(n) ? y : x, [H, V] = (0, c.useSelectedDismissibleContent)(t, R.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS);
  return (0, a.jsx)(a.Fragment, {
    children: (() => {
      switch (H) {
        case l.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: O,
              header: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: B,
                className: P.fullWidthImage
              }),
              content: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
              buttonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => G(),
              onClick: () => G(s),
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: O,
              header: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: B,
                className: P.fullWidthImage
              }),
              content: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
              buttonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => G(),
              onClick: () => G(s),
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(E.default, {
              guildId: s.id,
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(d.default, {
              onClick: () => j(s, !0),
              onSecondaryClick: () => j(s),
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(u.default, {
              guild: s,
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, m.isTierUnlocked)(s, A.BoostedGuildTiers.TIER_1) ? v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
              boostCount: (0, m.getNumberOfAppliedBoostsNeededForTier)(s, A.BoostedGuildTiers.TIER_1)
            }),
            t = (0, m.isTierUnlocked)(s, A.BoostedGuildTiers.TIER_1) ? v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : v.default.Messages.LEARN_MORE;
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: F,
              header: v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: D,
                className: P.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => w(f),
              onClick: () => w(f, s),
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(C.default, {
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(T.default, {
              className: M.tooltipOverrideColor,
              header: v.default.Messages.ACTIVE_THREADS_UPSELL_HEADER,
              content: v.default.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
              buttonCTA: v.default.Messages.GOT_IT,
              onClick: () => V(R.ContentDismissActionType.UNKNOWN),
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.CLYDE_GUILD_HEADER_NUX:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(T.default, {
              header: (0, a.jsxs)(a.Fragment, {
                children: [v.default.Messages.CLYDE_MODAL_TITLE, (0, a.jsx)(S.default, {
                  className: M.botTag,
                  type: N.BotTagTypes.AI,
                  verified: !0
                })]
              }),
              headerClassName: M.clydeTooltipHeaderContainer,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: b,
                className: M.clydeTooltipAsset
              }),
              content: v.default.Messages.CLYDE_GUILD_TOOLTIP_DETAILS.format({
                learnMoreURL: g.default.getArticleURL(A.HelpdeskArticles.CLYDE_AI)
              }),
              buttonCTA: v.default.Messages.ENABLE,
              onClick: () => {
                h.default.open(s.id, A.GuildSettingsSections.INTEGRATIONS)
              },
              secondaryButtonCTA: v.default.Messages.DISMISS,
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(T.default, {
              header: v.default.Messages.SOUNDBOARD_TOOLTIP_TITLE_NEW,
              content: v.default.Messages.SOUNDBOARD_TOOLTIP_BODY,
              buttonCTA: v.default.Messages.CHECK_IT_OUT,
              secondaryButtonCTA: v.default.Messages.NO_THANKS,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: U,
                className: P.fullWidthImage
              }),
              onClick: () => {
                h.default.open(s.id, A.GuildSettingsSections.ROLES), h.default.selectRole(s.id, v.default.Messages.USE_SOUNDBOARD)
              },
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.MEDIA_CHANNEL_UPSELL:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(I.default, {
              guildId: s.id,
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, a.jsx)(k, {
            renderPopout: (0, a.jsx)(_.default, {
              guildId: s.id,
              markAsDismissed: V
            }),
            renderGuildHeaderDropdownButton: r
          });
        default:
          return r()
      }
    })()
  })
})