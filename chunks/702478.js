"use strict";
s.r(t), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("153832"),
  i = s("640358"),
  r = s("442837"),
  o = s("544891"),
  d = s("704215"),
  u = s("692547"),
  c = s("481060"),
  E = s("841470"),
  _ = s("605236"),
  I = s("142497"),
  T = s("706454"),
  S = s("650774"),
  f = s("430824"),
  m = s("499150"),
  N = s("41542"),
  g = s("626135"),
  h = s("771212"),
  C = s("434404"),
  R = s("146596"),
  x = s("559368"),
  L = s("999382"),
  O = s("981631"),
  p = s("921944"),
  A = s("190378"),
  M = s("689938"),
  D = s("480330"),
  v = s("287837"),
  j = s("573189"),
  G = s("899947"),
  U = s("117831"),
  P = s("996737"),
  b = s("21846"),
  y = s("280632"),
  B = s("44234"),
  F = s("117428");
let H = function(e, t, s) {
    let a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      l = null;
    return null == t || Number.isNaN(t) ? (null == t || Number.isNaN(t)) && null != e && (l = M.default.Messages.GUILD_ANALYTICS_METRICS_LAST_WEEK) : l = M.default.Messages.PERCENTAGE_SINCE_LAST_WEEK.format({
      percentage: (0, i.truncateAndLocalizeNumber)(Math.abs(t), s)
    }), {
      localizedNumber: null != e ? "".concat((0, i.truncateAndLocalizeNumber)(e, s)).concat(a ? "%" : "") : M.default.Messages.NOT_AVAILABLE,
      subtext: l,
      isTrendingUp: t > 0,
      isTrendingDown: t < 0
    }
  },
  k = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return t || e === O.AbortCodes.NOT_ENOUGH_GUILD_MEMBERS ? (0, a.jsx)(c.FormErrorBlock, {
      icon: N.default,
      className: D.notEnoughMembersError,
      backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: M.default.Messages.GUILD_ANALYTICS_ERROR_GUILD_SIZE
    }) : null == e ? null : (0, a.jsx)(c.FormErrorBlock, {
      backgroundColor: c.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: M.default.Messages.GUILD_ANALYTICS_ERROR_MESSAGE
    })
  };

function w(e) {
  g.default.track(O.AnalyticEvents.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
    guild_id: e
  });
  let t = null == e ? O.RelativeMarketingURLs.DEVELOPER_PORTAL : O.RelativeMarketingURLs.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
    s = (0, n.v4)();
  return o.HTTP.post({
    url: O.Endpoints.HANDOFF,
    body: {
      key: s
    },
    oldFormErrors: !0
  }).then(e => {
    let a = e.body.handoff_token;
    window.open(O.MarketingURLs.DEVELOPER_PORTAL_LOGIN_HANDOFF(s, a, t))
  }, () => {
    window.open(t)
  })
}
let V = () => {
  let [e, t] = l.useState(!1), s = (0, r.useStateFromStores)([L.default], () => L.default.getGuildId());
  return (0, a.jsx)(c.Button, {
    className: D.developerPortalCta,
    onClick: () => {
      t(!0), w(s).then(() => {
        t(!1)
      })
    },
    submitting: e,
    children: M.default.Messages.GUILD_ANALYICS_DEVELOPERS_BUTTON
  })
};

function Y(e) {
  let {
    guildId: t
  } = e, {
    hasAccessRate: s,
    accessRate: n
  } = (0, r.useStateFromStoresObject)([x.default], () => x.default.getMemberInsights(t)), i = (0, r.useStateFromStores)([S.default], () => {
    var e;
    return null !== (e = S.default.getMemberCount()) && void 0 !== e ? e : 0
  }), {
    showAccessRate: o
  } = (0, h.useGuildAccessRateInsightExperiment)(t, !s);
  if (l.useEffect(() => {
      o && ((0, _.requestMarkDismissibleContentAsShown)(d.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, _.markDismissibleContentAsDismissed)(d.DismissibleContent.GUILD_INSIGHTS_ACCESS_RATE_NEW, {
        dismissAction: p.ContentDismissActionType.AUTO
      }))
    }, [o]), !o || !s || null == n) return null;
  let E = 10 * Math.ceil((1 - n) * 10),
    I = F,
    T = null,
    f = null;
  return n >= .9 ? (I = F, T = M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: D.ratingVeryGood,
      children: e
    }, t)
  }), f = M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_LESS.format({
    accessRate: 10
  })) : n >= (i > 1e4 ? .7 : .8) ? (I = y, T = M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_GOOD.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: D.ratingGood,
      children: e
    }, t)
  }), f = M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : n >= .5 ? (I = B, T = M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: D.ratingNeutral,
      children: e
    }, t)
  }), f = M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : (I = b, T = M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_BAD.format({
    ratingHook: (e, t) => (0, a.jsx)("span", {
      className: D.ratingBad,
      children: e
    }, t)
  }), f = 100 === E ? M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  }) : M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATING_MORE.format({
    accessRate: E
  })), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(c.Heading, {
      variant: "heading-md/semibold",
      className: D.insightsTitle,
      children: [M.default.Messages.MEMBER_INSIGHTS_SERVER_ACCESS, (0, a.jsx)(c.TextBadge, {
        text: M.default.Messages.BETA,
        color: u.default.unsafe_rawColors.BRAND_500.css,
        className: D.betaTag
      })]
    }), (0, a.jsxs)("div", {
      className: D.memberInsightsContainer,
      children: [(0, a.jsxs)("div", {
        className: D.insightsHeader,
        children: [(0, a.jsx)("img", {
          alt: "",
          className: D.insightsIcon,
          src: I
        }), (0, a.jsxs)("div", {
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/semibold",
            className: D.title,
            children: T
          }), (0, a.jsxs)(c.Text, {
            className: D.description,
            variant: "text-sm/normal",
            children: [f, (0, a.jsx)(c.TooltipContainer, {
              text: M.default.Messages.MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP,
              className: D.insightsTooltip,
              children: (0, a.jsx)(N.default, {
                className: D.insightsTooltipIcon
              })
            })]
          })]
        })]
      }), n < .9 ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: D.divider
        }), (0, a.jsx)(c.Text, {
          className: D.tips,
          variant: "text-sm/semibold",
          children: M.default.Messages.MEMBER_INSIGHTS_TIPS.format()
        }), (0, a.jsxs)("div", {
          className: D.insightsActions,
          children: [(0, a.jsxs)("div", {
            className: D.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: D.actionIcon,
              src: G
            }), (0, a.jsx)(c.Text, {
              className: D.actionText,
              variant: "text-sm/normal",
              children: M.default.Messages.ACCESS_RATE_ACTION_SIMPLIFY
            })]
          }), (0, a.jsx)("div", {
            className: D.dividerInline
          }), (0, a.jsxs)("div", {
            className: D.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: D.actionIcon,
              src: U
            }), (0, a.jsx)(c.Text, {
              className: D.actionText,
              variant: "text-sm/normal",
              children: M.default.Messages.ACCESS_RATE_ACTION_EXTRA_STEPS
            })]
          }), (0, a.jsx)("div", {
            className: D.dividerInline
          }), (0, a.jsxs)("div", {
            className: D.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: D.actionIcon,
              src: j
            }), (0, a.jsx)(c.Text, {
              className: D.actionText,
              variant: "text-sm/normal",
              children: M.default.Messages.ACCESS_RATE_ACTION_BOTS.format({
                integrationsHook: (e, t) => (0, a.jsx)(m.default, {
                  onClick: () => C.default.setSection(O.GuildSettingsSections.INTEGRATIONS),
                  className: D.link,
                  children: e
                }, t)
              })
            })]
          }), (0, a.jsx)("div", {
            className: D.dividerInline
          }), (0, a.jsxs)("div", {
            className: D.insightAction,
            children: [(0, a.jsx)("img", {
              alt: "",
              className: D.actionIcon,
              src: v
            }), (0, a.jsx)(c.Text, {
              className: D.actionText,
              variant: "text-sm/normal",
              children: M.default.Messages.ACCESS_RATE_ACTION_AUDIT
            })]
          })]
        })]
      }) : (0, a.jsx)("div", {
        className: D.insightsActions,
        children: (0, a.jsxs)("div", {
          className: D.insightAction,
          children: [(0, a.jsx)("img", {
            alt: "",
            className: D.actionIcon,
            src: P
          }), (0, a.jsx)(c.Text, {
            className: D.actionText,
            variant: "text-sm/normal",
            children: M.default.Messages.ACCESS_RATE_ACTION_SUCCESS.format({
              insightsHook: (e, s) => (0, a.jsx)(m.default, {
                onClick: () => w(t),
                className: D.link,
                children: e
              }, s)
            })
          })]
        })
      })]
    }), (0, a.jsx)("div", {
      className: D.divider
    }), (0, a.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      className: D.insightsTitle,
      children: M.default.Messages.SERVER_INSIGHTS
    })]
  })
}
t.default = () => {
  let e = (0, r.useStateFromStores)([L.default], () => L.default.getGuildId()),
    t = (0, r.useStateFromStores)([S.default], () => S.default.getMemberCount(e)),
    s = (0, r.useStateFromStores)([f.default], () => f.default.getGuild(e)),
    n = (0, r.useStateFromStores)([T.default], () => T.default.locale),
    {
      analytics: i,
      errorCode: o
    } = (0, r.useStateFromStoresObject)([x.default], () => ({
      analytics: null != e ? x.default.getOverviewAnalytics(e) : null,
      errorCode: x.default.getError()
    })),
    d = null == t || null == s || null != t && t < 500 && null != s && !s.hasFeature(O.GuildFeatures.PARTNERED) && !s.hasFeature(O.GuildFeatures.VERIFIED);
  l.useEffect(() => {
    null != e && !d && ((0, R.fetchEngagementOverview)(e), (0, R.fetchGrowthActivationOverview)(e), (0, R.fetchGrowthActivationRetention)(e))
  }, [e, d]), l.useEffect(() => {
    (0, I.hideHotspot)(A.HotspotLocations.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
  }, []);
  let u = null != i ? (0, a.jsx)("div", {
    className: D.__invalid_guildAnalyticsOverviewWrapper,
    children: (0, a.jsxs)("div", {
      className: D.overviewData,
      children: [(0, a.jsx)(E.default, {
        title: M.default.Messages.WEEKLY_VISITORS,
        tooltipText: M.default.Messages.VISITORS_INFO,
        ...H(i.visitors, i.visitorsChange, n)
      }), (0, a.jsx)(E.default, {
        title: M.default.Messages.WEEKLY_COMMUNICATORS,
        tooltipText: M.default.Messages.COMMUNICATORS_INFO,
        ...H(i.communicators, i.communicatorsChange, n)
      }), (0, a.jsx)(E.default, {
        title: M.default.Messages.WEEKLY_NEW_MEMBERS,
        ...H(i.newMembers, i.newMembersChange, n)
      }), (0, a.jsx)(E.default, {
        title: M.default.Messages.WEEKLY_NEW_MEMBER_RETENTION,
        tooltipText: M.default.Messages.NEW_MEMBER_RETENTION_INFO,
        ...H(i.pctRetained, i.pctRetainedChange, n, !0)
      })]
    })
  }) : null;
  return (0, a.jsxs)(c.FormSection, {
    tag: c.FormTitleTags.H1,
    title: M.default.Messages.SERVER_INSIGHTS,
    children: [(0, a.jsx)(c.FormText, {
      type: c.FormTextTypes.DESCRIPTION,
      children: M.default.Messages.GUILD_ANALYTICS_DESCRIPTION.format()
    }), k(o, d), null != e ? (0, a.jsx)(Y, {
      guildId: e
    }) : null, (0, a.jsxs)("div", {
      className: D.developerPortalCtaWrapper,
      children: [(0, a.jsx)("div", {
        className: D.placeholderImage
      }), (0, a.jsx)(c.Text, {
        className: D.developerPortalCtaText,
        variant: "text-sm/normal",
        children: M.default.Messages.GUILD_ANALYTICS_DEVELOPERS_CTA
      }), (0, a.jsx)(V, {})]
    }), u]
  })
}