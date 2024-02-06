"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("432710"),
  a = n("669491"),
  s = n("748802"),
  o = n("877585"),
  u = n("77078"),
  c = n("155084"),
  d = n("599110"),
  f = n("667963"),
  E = n("908539"),
  _ = n("132206"),
  S = n("698609"),
  p = n("57242"),
  I = n("380676"),
  h = n("170213"),
  T = n("49111"),
  C = n("782340"),
  v = n("383496");
let N = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, r = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: v.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: r && null != n ? C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: n,
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        }) : C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        })
      })
    })
  },
  A = e => {
    let {
      actions: t
    } = e, n = t.filter(e => e.descriptions.length > 0);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: v.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
      }), (0, i.jsx)("ul", {
        className: v.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(m, {
          action: e
        }, e.id))
      })]
    })
  },
  m = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: v.classificationActionsTakenRow,
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  g = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(u.Anchor, {
      href: n,
      className: v.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: v.classificationPolicyCardIcon,
        children: (0, i.jsx)(o.ShieldIcon, {
          width: 24,
          height: 24,
          color: a.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: v.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: v.classificationPolicyLinkIcon,
        children: (0, i.jsx)(s.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: a.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  L = () => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  U = e => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, n) => (0, i.jsx)(u.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  R = e => (0, i.jsx)("div", {
    className: v.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(L, {}) : (0, i.jsx)(U, {
      appealLink: h.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  y = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: r,
      policyExplainerLink: l,
      appealComponent: a
    } = e;
    return (0, i.jsxs)("div", {
      className: v.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
      }), (0, i.jsx)(u.Text, {
        className: v.guidelinesExplanation,
        variant: "text-sm/normal",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(g, {
        classificationTypeText: r,
        policyExplainerLink: l
      }), a]
    })
  };
var x = e => {
  var t, n;
  let {
    classificationId: a,
    source: s,
    onError: o
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: C,
    isDsaEligible: m
  } = (0, S.useSafetyHubClassification)(a), g = (0, _.useSafetyHubAccountStanding)(), L = null != u && null != u.flagged_content && u.flagged_content.length > 0;
  return (r.useEffect(() => {
    d.default.track(T.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: h.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: g.state,
      classification_ids: [Number(a)],
      source: s,
      is_violative_content_shown: L,
      is_dsa_eligible: m
    })
  }, []), null == u && f === E.ClassificationRequestState.FAILED) ? (o(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: v.classificationContainer,
    children: [(0, i.jsx)(N, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), L && null == u.guild_metadata && (0, i.jsx)(I.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : []
    }), (0, i.jsx)(A, {
      actions: u.actions
    }), (0, i.jsx)(y, {
      classificationTypeText: u.description,
      tosLink: h.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: h.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(R, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(T.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: h.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: g.state,
            classification_ids: [Number(a)],
            source: s,
            is_violative_content_shown: L,
            is_dsa_eligible: m
          }), C && (c.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), p.default.open(a))
        },
        isAppealEligible: C
      })
    })]
  })
}