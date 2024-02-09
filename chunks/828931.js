"use strict";
n.r(t), n.d(t, {
  default: function() {
    return G
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
  S = n("599110"),
  p = n("427459"),
  m = n("49111"),
  A = n("994428"),
  g = n("944305"),
  N = n("646718"),
  R = n("782340"),
  O = n("706904"),
  L = n("142190"),
  v = n("288562"),
  M = n("553274"),
  P = n("824489"),
  D = n("776432");

function y(e) {
  null != e && h.default.open(e.id, m.GuildSettingsSections.OVERVIEW, {
    section: m.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
  }, m.GuildSettingsSubsections.DISPLAY)
}

function x(e, t) {
  t && h.default.open(e.id, m.GuildSettingsSections.DISCOVERY)
}

function b(e, t) {
  null != t && ((0, p.isTierUnlocked)(t, m.BoostedGuildTiers.TIER_1) ? h.default.open(t.id, m.GuildSettingsSections.OVERVIEW, {
    section: m.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH
  }, m.GuildSettingsSubsections.INVITE) : (0, f.default)({
    analyticsLocations: e,
    analyticsSourceLocation: m.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, g.guildInviteUpsellPerks)()
  }))
}

function U(e) {
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
var G = s.memo(function(e) {
  let {
    contentTypes: t,
    theme: n,
    guild: s,
    renderGuildHeaderDropdownButton: r
  } = e, {
    analyticsLocations: f
  } = (0, o.default)(), g = () => {
    S.default.track(m.AnalyticEvents.TOOLTIP_VIEWED, {
      type: N.PremiumUpsellTypes.PREMIUM_PROGRESS_BAR,
      location: {
        page: m.AnalyticsPages.GUILD_CHANNEL
      }
    })
  }, G = () => {
    S.default.track(m.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.PremiumUpsellTypes.INVITE_SPLASH_UPSELL,
      location: {
        page: m.AnalyticsPages.GUILD_CHANNEL
      },
      location_stack: f
    })
  }, j = (0, i.isThemeDark)(n) ? M : P, [w, k] = (0, c.useSelectedDismissibleContent)(t, A.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS);
  return (0, a.jsx)(a.Fragment, {
    children: (() => {
      switch (w) {
        case l.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: g,
              header: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: j,
                className: L.fullWidthImage
              }),
              content: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
              buttonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => y(),
              onClick: () => y(s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: g,
              header: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: j,
                className: L.fullWidthImage
              }),
              content: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
              buttonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => y(),
              onClick: () => y(s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(E.default, {
              guildId: s.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(d.default, {
              onClick: () => x(s, !0),
              onSecondaryClick: () => x(s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(u.default, {
              guild: s,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, p.isTierUnlocked)(s, m.BoostedGuildTiers.TIER_1) ? R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
              boostCount: (0, p.getNumberOfAppliedBoostsNeededForTier)(s, m.BoostedGuildTiers.TIER_1)
            }),
            t = (0, p.isTierUnlocked)(s, m.BoostedGuildTiers.TIER_1) ? R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : R.default.Messages.LEARN_MORE;
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(T.default, {
              onComponentMount: G,
              header: R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: v,
                className: L.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => b(f),
              onClick: () => b(f, s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(C.default, {
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(T.default, {
              className: O.tooltipOverrideColor,
              header: R.default.Messages.ACTIVE_THREADS_UPSELL_HEADER,
              content: R.default.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
              buttonCTA: R.default.Messages.GOT_IT,
              onClick: () => k(A.ContentDismissActionType.UNKNOWN),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(T.default, {
              header: R.default.Messages.SOUNDBOARD_TOOLTIP_TITLE_NEW,
              content: R.default.Messages.SOUNDBOARD_TOOLTIP_BODY,
              buttonCTA: R.default.Messages.CHECK_IT_OUT,
              secondaryButtonCTA: R.default.Messages.NO_THANKS,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: D,
                className: L.fullWidthImage
              }),
              onClick: () => {
                h.default.open(s.id, m.GuildSettingsSections.ROLES), h.default.selectRole(s.id, R.default.Messages.USE_SOUNDBOARD)
              },
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.MEDIA_CHANNEL_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(I.default, {
              guildId: s.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(_.default, {
              guildId: s.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        default:
          return r()
      }
    })()
  })
})