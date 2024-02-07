"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
});
var i = n("37983"),
  l = n("884691"),
  a = n("432710"),
  s = n("669491"),
  r = n("748802"),
  o = n("877585"),
  u = n("77078"),
  c = n("155084"),
  d = n("599110"),
  f = n("667963"),
  h = n("908539"),
  p = n("736393"),
  E = n("132206"),
  _ = n("698609"),
  C = n("57242"),
  S = n("380676"),
  I = n("170213"),
  g = n("49111"),
  A = n("782340"),
  v = n("383496");
let m = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, l = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: v.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: l && null != n ? A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: n,
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        }) : A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
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
      className: v.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER
      }), (0, i.jsx)("ul", {
        className: v.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(y, {
          action: e
        }, e.id))
      })]
    })
  },
  y = e => {
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
  w = e => {
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
          color: s.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: v.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: v.classificationPolicyLinkIcon,
        children: (0, i.jsx)(r.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  L = () => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  N = e => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, n) => (0, i.jsx)(u.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  x = e => (0, i.jsx)("div", {
    className: v.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(L, {}) : (0, i.jsx)(N, {
      appealLink: I.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  b = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: l,
      policyExplainerLink: a,
      appealComponent: s
    } = e;
    return (0, i.jsxs)("div", {
      className: v.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_HEADER
      }), (0, i.jsx)(u.Text, {
        className: v.guidelinesExplanation,
        variant: "text-sm/normal",
        children: A.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_EXPLAINED_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(w, {
        classificationTypeText: l,
        policyExplainerLink: a
      }), s]
    })
  };
var R = e => {
  var t, n;
  let {
    classificationId: s,
    source: r,
    onError: o
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: A,
    isDsaEligible: y
  } = (0, _.useSafetyHubClassification)(s), w = (0, E.useSafetyHubAccountStanding)(), L = null != u && null != u.flagged_content && u.flagged_content.length > 0;
  return (l.useEffect(() => {
    d.default.track(g.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: I.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: w.state,
      classification_ids: [Number(s)],
      source: r,
      is_violative_content_shown: L,
      is_dsa_eligible: y
    })
  }, []), null == u && f === h.ClassificationRequestState.FAILED) ? (o(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: v.classificationContainer,
    children: [(0, i.jsx)(m, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), L && !(0, p.isGuildClassification)(u) && (0, i.jsx)(S.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : []
    }), (0, i.jsx)(T, {
      actions: u.actions
    }), (0, i.jsx)(b, {
      classificationTypeText: u.description,
      tosLink: I.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: I.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(x, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(g.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: I.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: w.state,
            classification_ids: [Number(s)],
            source: r,
            is_violative_content_shown: L,
            is_dsa_eligible: y
          }), A && (c.default.increment({
            name: a.MetricEvents.APPEAL_INGESTION_VIEW
          }), C.default.open(s))
        },
        isAppealEligible: A
      })
    })]
  })
}