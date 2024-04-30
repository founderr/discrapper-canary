"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("524437"),
  i = a("780384"),
  r = a("481060"),
  o = a("906732"),
  u = a("380009"),
  d = a("282051"),
  c = a("243778"),
  f = a("26323"),
  E = a("433280"),
  h = a("34131"),
  _ = a("434404"),
  C = a("567458"),
  m = a("782959"),
  S = a("276645"),
  p = a("970731"),
  I = a("626135"),
  T = a("267642"),
  g = a("981631"),
  A = a("921944"),
  N = a("30513"),
  v = a("474936"),
  L = a("689938"),
  R = a("957950"),
  O = a("79469"),
  M = a("741160"),
  P = a("829972"),
  y = a("31932"),
  x = a("642301");

function D(e) {
  null != e && _.default.open(e.id, g.GuildSettingsSections.OVERVIEW, {
    section: g.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
  }, g.GuildSettingsSubsections.DISPLAY)
}

function b(e, t) {
  t && _.default.open(e.id, g.GuildSettingsSections.DISCOVERY)
}

function U(e, t) {
  null != t && ((0, T.isTierUnlocked)(t, g.BoostedGuildTiers.TIER_1) ? _.default.open(t.id, g.GuildSettingsSections.OVERVIEW, {
    section: g.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH
  }, g.GuildSettingsSubsections.INVITE) : (0, f.default)({
    analyticsLocations: e,
    analyticsSourceLocation: g.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, N.guildInviteUpsellPerks)()
  }))
}

function j(e) {
  let {
    renderPopout: t,
    renderGuildHeaderDropdownButton: a
  } = e;
  return (0, n.jsx)(r.Popout, {
    renderPopout: () => (0, n.jsx)("div", {
      onClick: e => e.stopPropagation(),
      children: t
    }),
    position: "bottom",
    align: "center",
    animation: r.Popout.Animation.TRANSLATE,
    shouldShow: !0,
    children: () => a()
  })
}
t.default = s.memo(function(e) {
  let {
    contentTypes: t,
    theme: a,
    guild: s,
    renderGuildHeaderDropdownButton: r
  } = e, {
    analyticsLocations: f
  } = (0, o.default)(), N = () => {
    I.default.track(g.AnalyticEvents.TOOLTIP_VIEWED, {
      type: v.PremiumUpsellTypes.PREMIUM_PROGRESS_BAR,
      location: {
        page: g.AnalyticsPages.GUILD_CHANNEL
      }
    })
  }, G = () => {
    I.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v.PremiumUpsellTypes.INVITE_SPLASH_UPSELL,
      location: {
        page: g.AnalyticsPages.GUILD_CHANNEL
      },
      location_stack: f
    })
  }, w = (0, i.isThemeDark)(a) ? P : y, [k, B] = (0, c.useSelectedDismissibleContent)(t, A.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS);
  return (0, n.jsx)(n.Fragment, {
    children: (() => {
      switch (k) {
        case l.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(S.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(p.default, {
              onComponentMount: N,
              header: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, n.jsx)("img", {
                alt: "",
                src: w,
                className: O.fullWidthImage
              }),
              content: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
              buttonCTA: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(p.default, {
              onComponentMount: N,
              header: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_TITLE,
              asset: (0, n.jsx)("img", {
                alt: "",
                src: w,
                className: O.fullWidthImage
              }),
              content: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
              buttonCTA: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: L.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(E.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(d.default, {
              onClick: () => b(s, !0),
              onSecondaryClick: () => b(s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(u.default, {
              guild: s,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, T.isTierUnlocked)(s, g.BoostedGuildTiers.TIER_1) ? L.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : L.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
              boostCount: (0, T.getNumberOfAppliedBoostsNeededForTier)(s, g.BoostedGuildTiers.TIER_1)
            }),
            t = (0, T.isTierUnlocked)(s, g.BoostedGuildTiers.TIER_1) ? L.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : L.default.Messages.LEARN_MORE;
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(p.default, {
              onComponentMount: G,
              header: L.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, n.jsx)("img", {
                alt: "",
                src: M,
                className: O.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: L.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => U(f),
              onClick: () => U(f, s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(C.default, {
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(p.default, {
              className: R.tooltipOverrideColor,
              header: L.default.Messages.ACTIVE_THREADS_UPSELL_HEADER,
              content: L.default.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
              buttonCTA: L.default.Messages.GOT_IT,
              onClick: () => B(A.ContentDismissActionType.UNKNOWN),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(p.default, {
              header: L.default.Messages.SOUNDBOARD_TOOLTIP_TITLE_NEW,
              content: L.default.Messages.SOUNDBOARD_TOOLTIP_BODY,
              buttonCTA: L.default.Messages.CHECK_IT_OUT,
              secondaryButtonCTA: L.default.Messages.NO_THANKS,
              asset: (0, n.jsx)("img", {
                alt: "",
                src: x,
                className: O.fullWidthImage
              }),
              onClick: () => {
                _.default.open(s.id, g.GuildSettingsSections.ROLES), _.default.selectRole(s.getEveryoneRoleId(), L.default.Messages.USE_SOUNDBOARD)
              },
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.MEDIA_CHANNEL_UPSELL:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(m.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, n.jsx)(j, {
            renderPopout: (0, n.jsx)(h.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        default:
          return r()
      }
    })()
  })
})