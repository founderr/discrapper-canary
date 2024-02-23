"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var i = n("37983"),
  a = n("884691"),
  r = n("432710"),
  l = n("669491"),
  s = n("748802"),
  o = n("877585"),
  u = n("77078"),
  c = n("155084"),
  d = n("599110"),
  f = n("667963"),
  E = n("908539"),
  _ = n("736393"),
  h = n("132206"),
  S = n("698609"),
  p = n("57242"),
  A = n("380676"),
  m = n("170213"),
  C = n("49111"),
  v = n("782340"),
  g = n("765516");
let I = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, a = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: g.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: a && null != n ? v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: n,
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        }) : v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        })
      })
    })
  },
  T = e => {
    let {
      actions: t
    } = e, n = t.filter(e => e.descriptions.length > 0);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: g.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, i.jsx)("ul", {
        className: g.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(N, {
          action: e
        }, e.id))
      })]
    })
  },
  N = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: g.classificationActionsTakenRow,
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  L = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(u.Anchor, {
      href: n,
      className: g.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: g.classificationPolicyCardIcon,
        children: (0, i.jsx)(o.ShieldIcon, {
          width: 24,
          height: 24,
          color: l.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: g.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: g.classificationPolicyLinkIcon,
        children: (0, i.jsx)(s.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: l.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  y = () => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  P = e => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, n) => (0, i.jsx)(u.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  R = e => (0, i.jsx)("div", {
    className: g.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(y, {}) : (0, i.jsx)(P, {
      appealLink: m.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  F = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: r,
      appealComponent: l
    } = e;
    return (0, i.jsxs)("div", {
      className: g.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, i.jsx)(u.Text, {
        className: g.guidelinesExplanation,
        variant: "text-sm/normal",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(L, {
        classificationTypeText: a,
        policyExplainerLink: r
      }), l]
    })
  };
var w = e => {
  var t, n;
  let {
    classificationId: l,
    source: s,
    onError: o
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: v,
    isDsaEligible: N
  } = (0, S.useSafetyHubClassification)(l), L = (0, h.useSafetyHubAccountStanding)(), y = null != u && null != u.flagged_content && u.flagged_content.length > 0;
  return (a.useEffect(() => {
    d.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: m.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: L.state,
      classification_ids: [Number(l)],
      source: s,
      is_violative_content_shown: y,
      is_dsa_eligible: N
    })
  }, []), null == u && f === E.ClassificationRequestState.FAILED) ? (o(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: g.classificationContainer,
    children: [(0, i.jsx)(I, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), y && !(0, _.isGuildClassification)(u) && (0, i.jsx)(A.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : []
    }), (0, i.jsx)(T, {
      actions: u.actions
    }), (0, i.jsx)(F, {
      classificationTypeText: u.description,
      tosLink: m.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: m.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(R, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: m.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: L.state,
            classification_ids: [Number(l)],
            source: s,
            is_violative_content_shown: y,
            is_dsa_eligible: N
          }), v && (c.default.increment({
            name: r.MetricEvents.APPEAL_INGESTION_VIEW
          }), p.default.open(l))
        },
        isAppealEligible: v
      })
    })]
  })
}