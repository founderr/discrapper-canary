"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("432710"),
  r = n("669491"),
  s = n("748802"),
  o = n("877585"),
  u = n("77078"),
  c = n("155084"),
  d = n("599110"),
  f = n("667963"),
  E = n("908539"),
  _ = n("132206"),
  h = n("698609"),
  S = n("57242"),
  p = n("380676"),
  m = n("170213"),
  A = n("49111"),
  g = n("782340"),
  I = n("765516");
let C = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, a = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: I.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: a && null != n ? g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: n,
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        }) : g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        })
      })
    })
  },
  v = e => {
    let {
      actions: t
    } = e, n = t.filter(e => e.descriptions.length > 0);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: I.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, i.jsx)("ul", {
        className: I.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(T, {
          action: e
        }, e.id))
      })]
    })
  },
  T = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: I.classificationActionsTakenRow,
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  N = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(u.Anchor, {
      href: n,
      className: I.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: I.classificationPolicyCardIcon,
        children: (0, i.jsx)(o.ShieldIcon, {
          width: 24,
          height: 24,
          color: r.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: I.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: I.classificationPolicyLinkIcon,
        children: (0, i.jsx)(s.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: r.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  L = () => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  y = e => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, n) => (0, i.jsx)(u.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  w = e => (0, i.jsx)("div", {
    className: I.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(L, {}) : (0, i.jsx)(y, {
      appealLink: m.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  x = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: l,
      appealComponent: r
    } = e;
    return (0, i.jsxs)("div", {
      className: I.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, i.jsx)(u.Text, {
        className: I.guidelinesExplanation,
        variant: "text-sm/normal",
        children: g.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(N, {
        classificationTypeText: a,
        policyExplainerLink: l
      }), r]
    })
  };
var R = e => {
  var t, n;
  let {
    classificationId: r,
    source: s,
    onError: o
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: g,
    isDsaEligible: T
  } = (0, h.useSafetyHubClassification)(r), N = (0, _.useSafetyHubAccountStanding)(), L = null != u && null != u.flagged_content && u.flagged_content.length > 0;
  return (a.useEffect(() => {
    d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: m.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: N.state,
      classification_ids: [Number(r)],
      source: s,
      is_violative_content_shown: L,
      is_dsa_eligible: T
    })
  }, []), null == u && f === E.ClassificationRequestState.FAILED) ? (o(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: I.classificationContainer,
    children: [(0, i.jsx)(C, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), (0, i.jsx)(p.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : [],
      actions: u.actions,
      guildMetadata: u.guild_metadata
    }), (0, i.jsx)(v, {
      actions: u.actions
    }), (0, i.jsx)(x, {
      classificationTypeText: u.description,
      tosLink: m.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: m.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(w, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: m.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: N.state,
            classification_ids: [Number(r)],
            source: s,
            is_violative_content_shown: L,
            is_dsa_eligible: T
          }), g && (c.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), S.default.open(r))
        },
        isAppealEligible: g
      })
    })]
  })
}