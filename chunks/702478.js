"use strict";
t(47120);
var n = t(735250),
  i = t(470079),
  l = t(772848),
  a = t(640358),
  r = t(442837),
  o = t(544891),
  c = t(704215),
  d = t(692547),
  u = t(481060),
  E = t(841470),
  _ = t(605236),
  I = t(142497),
  T = t(706454),
  N = t(650774),
  m = t(430824),
  S = t(499150),
  h = t(626135),
  g = t(771212),
  C = t(434404),
  x = t(146596),
  R = t(559368),
  L = t(999382),
  O = t(981631),
  A = t(921944),
  p = t(190378),
  M = t(689938),
  f = t(618739),
  D = t(287837),
  v = t(573189),
  j = t(899947),
  Z = t(117831),
  U = t(996737),
  G = t(21846),
  P = t(280632),
  b = t(44234),
  B = t(117428);
let y = function(e, s, t) {
    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      i = null;
    return null == s || Number.isNaN(s) ? (null == s || Number.isNaN(s)) && null != e && (i = M.Z.Messages.GUILD_ANALYTICS_METRICS_LAST_WEEK) : i = M.Z.Messages.PERCENTAGE_SINCE_LAST_WEEK.format({
      percentage: (0, a.o)(Math.abs(s), t)
    }), {
      localizedNumber: null != e ? "".concat((0, a.o)(e, t)).concat(n ? "%" : "") : M.Z.Messages.NOT_AVAILABLE,
      subtext: i,
      isTrendingUp: s > 0,
      isTrendingDown: s < 0
    }
  },
  F = function(e) {
    let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return s || e === O.evJ.NOT_ENOUGH_GUILD_MEMBERS ? (0, n.jsx)(u.FormErrorBlock, {
      icon: u.CircleInformationIcon,
      className: f.notEnoughMembersError,
      backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: M.Z.Messages.GUILD_ANALYTICS_ERROR_GUILD_SIZE
    }) : null == e ? null : (0, n.jsx)(u.FormErrorBlock, {
      backgroundColor: u.FormErrorBlockColors.BACKGROUND_ACCENT,
      children: M.Z.Messages.GUILD_ANALYTICS_ERROR_MESSAGE
    })
  };

function k(e) {
  h.default.track(O.rMx.GUILD_INSIGHTS_SETTINGS_CTA_CLICKED, {
    guild_id: e
  });
  let s = null == e ? O.E07.DEVELOPER_PORTAL : O.E07.DEVELOPER_PORTAL_GUILD_ANALYTICS(e),
    t = (0, l.Z)();
  return o.tn.post({
    url: O.ANM.HANDOFF,
    body: {
      key: t
    },
    oldFormErrors: !0
  }).then(e => {
    let n = e.body.handoff_token;
    window.open(O.EYA.DEVELOPER_PORTAL_LOGIN_HANDOFF(t, n, s))
  }, () => {
    window.open(s)
  })
}
let H = () => {
  let [e, s] = i.useState(!1), t = (0, r.e7)([L.Z], () => L.Z.getGuildId());
  return (0, n.jsx)(u.Button, {
    className: f.developerPortalCta,
    onClick: () => {
      s(!0), k(t).then(() => {
        s(!1)
      })
    },
    submitting: e,
    children: M.Z.Messages.GUILD_ANALYICS_DEVELOPERS_BUTTON
  })
};

function w(e) {
  let {
    guildId: s
  } = e, {
    hasAccessRate: t,
    accessRate: l
  } = (0, r.cj)([R.Z], () => R.Z.getMemberInsights(s)), a = (0, r.e7)([N.Z], () => {
    var e;
    return null !== (e = N.Z.getMemberCount()) && void 0 !== e ? e : 0
  }), {
    showAccessRate: o
  } = (0, g.eA)(s, !t);
  if (i.useEffect(() => {
      o && ((0, _.kk)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW), (0, _.EW)(c.z.GUILD_INSIGHTS_ACCESS_RATE_NEW, {
        dismissAction: A.L.AUTO
      }))
    }, [o]), !o || !t || null == l) return null;
  let E = 10 * Math.ceil((1 - l) * 10),
    I = B,
    T = null,
    m = null;
  return l >= .9 ? (I = B, T = M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_VERY_GOOD.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: f.ratingVeryGood,
      children: e
    }, s)
  }), m = M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_LESS.format({
    accessRate: 10
  })) : l >= (a > 1e4 ? .7 : .8) ? (I = P, T = M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_GOOD.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: f.ratingGood,
      children: e
    }, s)
  }), m = M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : l >= .5 ? (I = b, T = M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_NEUTRAL.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: f.ratingNeutral,
      children: e
    }, s)
  }), m = M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  })) : (I = G, T = M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_BAD.format({
    ratingHook: (e, s) => (0, n.jsx)("span", {
      className: f.ratingBad,
      children: e
    }, s)
  }), m = 100 === E ? M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_APPROX.format({
    accessRate: E
  }) : M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATING_MORE.format({
    accessRate: E
  })), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.Heading, {
      variant: "heading-md/semibold",
      className: f.insightsTitle,
      children: [M.Z.Messages.MEMBER_INSIGHTS_SERVER_ACCESS, (0, n.jsx)(u.TextBadge, {
        text: M.Z.Messages.BETA,
        color: d.Z.unsafe_rawColors.BRAND_500.css,
        className: f.betaTag
      })]
    }), (0, n.jsxs)("div", {
      className: f.memberInsightsContainer,
      children: [(0, n.jsxs)("div", {
        className: f.insightsHeader,
        children: [(0, n.jsx)("img", {
          alt: "",
          className: f.insightsIcon,
          src: I
        }), (0, n.jsxs)("div", {
          children: [(0, n.jsx)(u.Text, {
            variant: "text-md/semibold",
            className: f.title,
            children: T
          }), (0, n.jsxs)(u.Text, {
            className: f.description,
            variant: "text-sm/normal",
            children: [m, (0, n.jsx)(u.TooltipContainer, {
              text: M.Z.Messages.MEMBER_INSIGHTS_ACCESS_RATE_TOOLTIP,
              className: f.insightsTooltip,
              children: (0, n.jsx)(u.CircleInformationIcon, {
                size: "xs",
                color: "currentColor",
                className: f.insightsTooltipIcon
              })
            })]
          })]
        })]
      }), l < .9 ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("div", {
          className: f.divider
        }), (0, n.jsx)(u.Text, {
          className: f.tips,
          variant: "text-sm/semibold",
          children: M.Z.Messages.MEMBER_INSIGHTS_TIPS.format()
        }), (0, n.jsxs)("div", {
          className: f.insightsActions,
          children: [(0, n.jsxs)("div", {
            className: f.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: f.actionIcon,
              src: j
            }), (0, n.jsx)(u.Text, {
              className: f.actionText,
              variant: "text-sm/normal",
              children: M.Z.Messages.ACCESS_RATE_ACTION_SIMPLIFY
            })]
          }), (0, n.jsx)("div", {
            className: f.dividerInline
          }), (0, n.jsxs)("div", {
            className: f.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: f.actionIcon,
              src: Z
            }), (0, n.jsx)(u.Text, {
              className: f.actionText,
              variant: "text-sm/normal",
              children: M.Z.Messages.ACCESS_RATE_ACTION_EXTRA_STEPS
            })]
          }), (0, n.jsx)("div", {
            className: f.dividerInline
          }), (0, n.jsxs)("div", {
            className: f.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: f.actionIcon,
              src: v
            }), (0, n.jsx)(u.Text, {
              className: f.actionText,
              variant: "text-sm/normal",
              children: M.Z.Messages.ACCESS_RATE_ACTION_BOTS.format({
                integrationsHook: (e, s) => (0, n.jsx)(S.Z, {
                  onClick: () => C.Z.setSection(O.pNK.INTEGRATIONS),
                  className: f.link,
                  children: e
                }, s)
              })
            })]
          }), (0, n.jsx)("div", {
            className: f.dividerInline
          }), (0, n.jsxs)("div", {
            className: f.insightAction,
            children: [(0, n.jsx)("img", {
              alt: "",
              className: f.actionIcon,
              src: D
            }), (0, n.jsx)(u.Text, {
              className: f.actionText,
              variant: "text-sm/normal",
              children: M.Z.Messages.ACCESS_RATE_ACTION_AUDIT
            })]
          })]
        })]
      }) : (0, n.jsx)("div", {
        className: f.insightsActions,
        children: (0, n.jsxs)("div", {
          className: f.insightAction,
          children: [(0, n.jsx)("img", {
            alt: "",
            className: f.actionIcon,
            src: U
          }), (0, n.jsx)(u.Text, {
            className: f.actionText,
            variant: "text-sm/normal",
            children: M.Z.Messages.ACCESS_RATE_ACTION_SUCCESS.format({
              insightsHook: (e, t) => (0, n.jsx)(S.Z, {
                onClick: () => k(s),
                className: f.link,
                children: e
              }, t)
            })
          })]
        })
      })]
    }), (0, n.jsx)("div", {
      className: f.divider
    }), (0, n.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: f.insightsTitle,
      children: M.Z.Messages.SERVER_INSIGHTS
    })]
  })
}
s.Z = () => {
  let e = (0, r.e7)([L.Z], () => L.Z.getGuildId()),
    s = (0, r.e7)([N.Z], () => N.Z.getMemberCount(e)),
    t = (0, r.e7)([m.Z], () => m.Z.getGuild(e)),
    l = (0, r.e7)([T.default], () => T.default.locale),
    {
      analytics: a,
      errorCode: o
    } = (0, r.cj)([R.Z], () => ({
      analytics: null != e ? R.Z.getOverviewAnalytics(e) : null,
      errorCode: R.Z.getError()
    })),
    c = null == s || null == t || null != s && s < 500 && null != t && !t.hasFeature(O.oNc.PARTNERED) && !t.hasFeature(O.oNc.VERIFIED);
  i.useEffect(() => {
    null != e && !c && ((0, x.Vk)(e), (0, x.SR)(e), (0, x.xl)(e))
  }, [e, c]), i.useEffect(() => {
    (0, I.Kw)(p.v.GUILD_ANALYTICS_GUILD_SETTINGS_MENU)
  }, []);
  let d = null != a ? (0, n.jsx)("div", {
    className: f.__invalid_guildAnalyticsOverviewWrapper,
    children: (0, n.jsxs)("div", {
      className: f.overviewData,
      children: [(0, n.jsx)(E.Z, {
        title: M.Z.Messages.WEEKLY_VISITORS,
        tooltipText: M.Z.Messages.VISITORS_INFO,
        ...y(a.visitors, a.visitorsChange, l)
      }), (0, n.jsx)(E.Z, {
        title: M.Z.Messages.WEEKLY_COMMUNICATORS,
        tooltipText: M.Z.Messages.COMMUNICATORS_INFO,
        ...y(a.communicators, a.communicatorsChange, l)
      }), (0, n.jsx)(E.Z, {
        title: M.Z.Messages.WEEKLY_NEW_MEMBERS,
        ...y(a.newMembers, a.newMembersChange, l)
      }), (0, n.jsx)(E.Z, {
        title: M.Z.Messages.WEEKLY_NEW_MEMBER_RETENTION,
        tooltipText: M.Z.Messages.NEW_MEMBER_RETENTION_INFO,
        ...y(a.pctRetained, a.pctRetainedChange, l, !0)
      })]
    })
  }) : null;
  return (0, n.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: M.Z.Messages.SERVER_INSIGHTS,
    children: [(0, n.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      children: M.Z.Messages.GUILD_ANALYTICS_DESCRIPTION.format()
    }), F(o, c), null != e ? (0, n.jsx)(w, {
      guildId: e
    }) : null, (0, n.jsxs)("div", {
      className: f.developerPortalCtaWrapper,
      children: [(0, n.jsx)("div", {
        className: f.placeholderImage
      }), (0, n.jsx)(u.Text, {
        className: f.developerPortalCtaText,
        variant: "text-sm/normal",
        children: M.Z.Messages.GUILD_ANALYTICS_DEVELOPERS_CTA
      }), (0, n.jsx)(H, {})]
    }), d]
  })
}