"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
});
var a = s("735250");
s("470079");
var l = s("481060"),
  n = s("825055"),
  i = s("964309"),
  r = s("937615"),
  o = s("730647"),
  d = s("584825"),
  u = s("723047"),
  c = s("997519"),
  E = s("146710"),
  _ = s("146610"),
  I = s("8584"),
  T = s("791382"),
  S = s("277369"),
  f = s("215124"),
  m = s("981631"),
  N = s("689938"),
  g = s("91685");

function h(e) {
  let {
    payoutsByPeriod: t,
    team: s
  } = e, n = (0, u.useRoleSubscriptionSettingsDisabled)() ? null : N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: null != s ? m.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(s.id) : null
  });
  return 0 === t.length ? (0, a.jsxs)(l.FormText, {
    type: l.FormText.Types.DESCRIPTION,
    children: [N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", n]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.FormText, {
      type: l.FormText.Types.DESCRIPTION,
      children: [N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", n]
    }), (0, a.jsx)(l.Spacer, {
      size: 16
    }), (0, a.jsx)(I.default, {
      payoutsByPeriod: t
    })]
  })
}

function C(e) {
  let {
    guildId: t,
    totalPayoutsForPeriod: s
  } = e, l = (0, d.useSubscriptionListingsForGuild)(t, {
    includeSoftDeleted: !0
  });
  return null == s && 0 === l.length ? null : (0, a.jsx)(_.default, {
    totalPayoutsForPeriod: s,
    guildId: t,
    className: g.currentMonthEarningsTable
  })
}
let R = e => {
  var t, s;
  let {
    guildId: o,
    application: d
  } = e, {
    loading: _,
    team: I,
    currentPeriod: R,
    allPeriods: x,
    metrics: L
  } = (0, c.default)(o, d), O = (0, E.useRoleSubscriptionInsightsAccess)(o), p = (0, u.useRoleSubscriptionSettingsDisabled)();
  return _ ? (0, a.jsx)(l.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
    children: [O && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.default, {
        children: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_INSIGHTS_NOTICE_TEXT.format({
          insightsURL: m.MarketingURLs.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(o)
        })
      }), (0, a.jsx)(l.Spacer, {
        size: 32
      })]
    }), (0, a.jsxs)(l.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
      className: g.formSection,
      children: [(0, a.jsx)(l.Spacer, {
        size: 8
      }), (0, a.jsxs)("div", {
        className: g.metricsContainer,
        children: [(0, a.jsx)(T.default, {
          label: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, r.formatPrice)(null !== (t = L.revenue) && void 0 !== t ? t : 0, m.CurrencyCodes.USD),
          additionalContent: (0, a.jsx)(T.MetricTrend, {
            value: L.revenuePctChange,
            isPercent: !0
          })
        }), (0, a.jsx)(T.default, {
          label: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_SUBSCRIBERS,
          value: (0, a.jsxs)(a.Fragment, {
            children: [null !== (s = L.subscribers) && void 0 !== s ? s : "-", " ", (0, a.jsx)(i.default, {
              className: g.totalMembersIcon,
              "aria-hidden": !0
            })]
          }),
          additionalContent: (0, a.jsx)(T.MetricTrend, {
            value: L.subscriberChange
          })
        })]
      }), (0, a.jsx)(C, {
        guildId: o,
        totalPayoutsForPeriod: R
      })]
    }), (0, a.jsx)(l.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      className: g.formSection,
      children: (0, a.jsx)(h, {
        payoutsByPeriod: x,
        team: I
      })
    }), (0, a.jsx)(l.FormSection, {
      title: N.default.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: p,
      className: g.formSection,
      children: (0, a.jsx)(S.default, {
        guildId: o,
        application: d
      })
    }), (0, a.jsx)(l.FormSection, {
      title: N.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      className: g.formSection,
      children: (0, a.jsx)(f.default, {
        guildId: o,
        allPeriods: x
      })
    })]
  })
};

function x(e) {
  return (0, a.jsx)(o.GroupListingsFetchContextProvider, {
    guildId: e.guildId,
    children: (0, a.jsx)(R, {
      ...e
    })
  })
}