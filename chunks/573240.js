"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
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
  _ = n("736393"),
  S = n("132206"),
  p = n("698609"),
  I = n("57242"),
  h = n("380676"),
  T = n("170213"),
  C = n("49111"),
  v = n("782340"),
  A = n("383496");
let N = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, r = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: A.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: r && null != n ? v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
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
  m = e => {
    let {
      actions: t
    } = e, n = t.filter(e => e.descriptions.length > 0);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: A.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
      }), (0, i.jsx)("ul", {
        className: A.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(g, {
          action: e
        }, e.id))
      })]
    })
  },
  g = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: A.classificationActionsTakenRow,
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
      className: A.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: A.classificationPolicyCardIcon,
        children: (0, i.jsx)(o.ShieldIcon, {
          width: 24,
          height: 24,
          color: a.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: A.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: A.classificationPolicyLinkIcon,
        children: (0, i.jsx)(s.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: a.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  U = () => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  R = e => (0, i.jsx)(u.Text, {
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
  y = e => (0, i.jsx)("div", {
    className: A.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(U, {}) : (0, i.jsx)(R, {
      appealLink: T.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  x = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: r,
      policyExplainerLink: l,
      appealComponent: a
    } = e;
    return (0, i.jsxs)("div", {
      className: A.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
      }), (0, i.jsx)(u.Text, {
        className: A.guidelinesExplanation,
        variant: "text-sm/normal",
        children: v.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(L, {
        classificationTypeText: r,
        policyExplainerLink: l
      }), a]
    })
  };
var P = e => {
  var t, n;
  let {
    classificationId: a,
    source: s,
    onError: o
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: v,
    isDsaEligible: g
  } = (0, p.useSafetyHubClassification)(a), L = (0, S.useSafetyHubAccountStanding)(), U = null != u && null != u.flagged_content && u.flagged_content.length > 0;
  return (r.useEffect(() => {
    d.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: T.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: L.state,
      classification_ids: [Number(a)],
      source: s,
      is_violative_content_shown: U,
      is_dsa_eligible: g
    })
  }, []), null == u && f === E.ClassificationRequestState.FAILED) ? (o(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: A.classificationContainer,
    children: [(0, i.jsx)(N, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), U && !(0, _.isGuildClassification)(u) && (0, i.jsx)(h.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : []
    }), (0, i.jsx)(m, {
      actions: u.actions
    }), (0, i.jsx)(x, {
      classificationTypeText: u.description,
      tosLink: T.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: T.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(y, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(C.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: T.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: L.state,
            classification_ids: [Number(a)],
            source: s,
            is_violative_content_shown: U,
            is_dsa_eligible: g
          }), v && (c.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), I.default.open(a))
        },
        isAppealEligible: v
      })
    })]
  })
}