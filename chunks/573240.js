"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
});
var i = n("37983"),
  a = n("884691"),
  r = n("432710"),
  l = n("669491"),
  s = n("748802"),
  u = n("877585"),
  o = n("77078"),
  c = n("155084"),
  d = n("599110"),
  f = n("667963"),
  E = n("908539"),
  _ = n("736393"),
  S = n("132206"),
  T = n("698609"),
  I = n("57242"),
  p = n("380676"),
  h = n("170213"),
  A = n("49111"),
  N = n("782340"),
  C = n("765516");
let m = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, a = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: C.classificationHeader,
      children: (0, i.jsx)(o.Heading, {
        variant: "heading-xl/normal",
        children: a && null != n ? N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: n,
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        }) : N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        })
      })
    })
  },
  g = e => {
    let {
      actions: t
    } = e, n = t.filter(e => e.descriptions.length > 0);
    return 0 === n.length ? null : (0, i.jsxs)("div", {
      className: C.classificationActionsTakenContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, i.jsx)("ul", {
        className: C.classificationActionsTakenList,
        children: t.map(e => (0, i.jsx)(v, {
          action: e
        }, e.id))
      })]
    })
  },
  v = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: C.classificationActionsTakenRow,
        children: (0, i.jsx)(o.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  R = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(o.Anchor, {
      href: n,
      className: C.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: C.classificationPolicyCardIcon,
        children: (0, i.jsx)(u.ShieldIcon, {
          width: 24,
          height: 24,
          color: l.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: C.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: C.classificationPolicyLinkIcon,
        children: (0, i.jsx)(s.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: l.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  U = () => (0, i.jsx)(o.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  L = e => (0, i.jsx)(o.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, n) => (0, i.jsx)(o.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  P = e => (0, i.jsx)("div", {
    className: C.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(U, {}) : (0, i.jsx)(L, {
      appealLink: h.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  D = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: r,
      appealComponent: l
    } = e;
    return (0, i.jsxs)("div", {
      className: C.classificationActionExplanationContainer,
      children: [(0, i.jsx)(o.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, i.jsx)(o.Text, {
        className: C.guidelinesExplanation,
        variant: "text-sm/normal",
        children: N.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(R, {
        classificationTypeText: a,
        policyExplainerLink: r
      }), l]
    })
  };
var y = e => {
  var t, n;
  let {
    classificationId: l,
    source: s,
    onError: u
  } = e, {
    classification: o,
    classificationRequestState: f,
    isAppealEligible: N,
    isDsaEligible: v
  } = (0, T.useSafetyHubClassification)(l), R = (0, S.useSafetyHubAccountStanding)(), U = null != o && null != o.flagged_content && o.flagged_content.length > 0;
  return (a.useEffect(() => {
    d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: h.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: R.state,
      classification_ids: [Number(l)],
      source: s,
      is_violative_content_shown: U,
      is_dsa_eligible: v
    })
  }, []), null == o && f === E.ClassificationRequestState.FAILED) ? (u(), null) : null == o ? null : (0, i.jsxs)("div", {
    className: C.classificationContainer,
    children: [(0, i.jsx)(m, {
      classificationTypeText: o.description,
      guildName: null == o ? void 0 : null === (t = o.guild_metadata) || void 0 === t ? void 0 : t.name
    }), U && !(0, _.isGuildClassification)(o) && (0, i.jsx)(p.ClassificationEvidence, {
      flaggedContent: null !== (n = o.flagged_content) && void 0 !== n ? n : []
    }), (0, i.jsx)(g, {
      actions: o.actions
    }), (0, i.jsx)(D, {
      classificationTypeText: o.description,
      tosLink: h.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: h.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: o.explainer_link,
      appealComponent: (0, i.jsx)(P, {
        hasBeenAppealed: null != o.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(A.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: h.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: R.state,
            classification_ids: [Number(l)],
            source: s,
            is_violative_content_shown: U,
            is_dsa_eligible: v
          }), N && (c.default.increment({
            name: r.MetricEvents.APPEAL_INGESTION_VIEW
          }), I.default.open(l))
        },
        isAppealEligible: N
      })
    })]
  })
}