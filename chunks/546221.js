"use strict";
t.d(s, {
  Z: function() {
    return R
  }
});
var n = t(735250);
t(470079);
var i = t(481060),
  l = t(825055),
  a = t(937615),
  r = t(730647),
  o = t(584825),
  c = t(723047),
  d = t(997519),
  u = t(146710),
  E = t(146610),
  _ = t(8584),
  I = t(791382),
  T = t(277369),
  N = t(215124),
  m = t(981631),
  S = t(689938),
  h = t(91685);

function g(e) {
  let {
    payoutsByPeriod: s,
    team: t
  } = e, l = (0, c.mY)() ? null : S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EDIT_PAYMENT_METHOD_LINK.format({
    url: null != t ? m.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(t.id) : null
  });
  return 0 === s.length ? (0, n.jsxs)(i.FormText, {
    type: i.FormText.Types.DESCRIPTION,
    children: [S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_EMPTY, " ", l]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(i.FormText, {
      type: i.FormText.Types.DESCRIPTION,
      children: [S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_DESCRIPTION, " ", l]
    }), (0, n.jsx)(i.Spacer, {
      size: 16
    }), (0, n.jsx)(_.ZP, {
      payoutsByPeriod: s
    })]
  })
}

function C(e) {
  let {
    guildId: s,
    totalPayoutsForPeriod: t
  } = e, i = (0, o.qi)(s, {
    includeSoftDeleted: !0
  });
  return null == t && 0 === i.length ? null : (0, n.jsx)(E.Z, {
    totalPayoutsForPeriod: t,
    guildId: s,
    className: h.currentMonthEarningsTable
  })
}
let x = e => {
  var s, t;
  let {
    guildId: r,
    application: o
  } = e, {
    loading: E,
    team: _,
    currentPeriod: x,
    allPeriods: R,
    metrics: L
  } = (0, d.Z)(r, o), O = (0, u.u)(r), A = (0, c.mY)();
  return E ? (0, n.jsx)(i.Spinner, {}) : (0, n.jsxs)(n.Fragment, {
    children: [O && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.Z, {
        children: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_INSIGHTS_NOTICE_TEXT.format({
          insightsURL: m.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(r)
        })
      }), (0, n.jsx)(i.Spacer, {
        size: 32
      })]
    }), (0, n.jsxs)(i.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_HEADER,
      className: h.formSection,
      children: [(0, n.jsx)(i.Spacer, {
        size: 8
      }), (0, n.jsxs)("div", {
        className: h.metricsContainer,
        children: [(0, n.jsx)(I.Z, {
          label: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_REVENUE,
          value: (0, a.T4)(null !== (s = L.revenue) && void 0 !== s ? s : 0, m.pKx.USD),
          additionalContent: (0, n.jsx)(I.H, {
            value: L.revenuePctChange,
            isPercent: !0
          })
        }), (0, n.jsx)(I.Z, {
          label: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_METRIC_SUBSCRIBERS,
          value: (0, n.jsxs)(n.Fragment, {
            children: [null !== (t = L.subscribers) && void 0 !== t ? t : "-", " ", (0, n.jsx)(i.UserIcon, {
              size: "md",
              color: "currentColor",
              className: h.totalMembersIcon,
              "aria-hidden": !0
            })]
          }),
          additionalContent: (0, n.jsx)(I.H, {
            value: L.subscriberChange
          })
        })]
      }), (0, n.jsx)(C, {
        guildId: r,
        totalPayoutsForPeriod: x
      })]
    }), (0, n.jsx)(i.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_EARNINGS_HISTORY_HEADER,
      className: h.formSection,
      children: (0, n.jsx)(g, {
        payoutsByPeriod: R,
        team: _
      })
    }), (0, n.jsx)(i.FormSection, {
      title: S.Z.Messages.GUILD_ROLE_SUBSCRIPTION_SETTINGS_PAYMENT_TEAM_SECTION_TITLE,
      disabled: A,
      className: h.formSection,
      children: (0, n.jsx)(T.Z, {
        guildId: r,
        application: o
      })
    }), (0, n.jsx)(i.FormSection, {
      title: S.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
      className: h.formSection,
      children: (0, n.jsx)(N.Z, {
        guildId: r,
        allPeriods: R
      })
    })]
  })
};

function R(e) {
  return (0, n.jsx)(r.l, {
    guildId: e.guildId,
    children: (0, n.jsx)(x, {
      ...e
    })
  })
}