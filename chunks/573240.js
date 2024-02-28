"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
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
  S = n("422671"),
  p = n("57242"),
  m = n("380676"),
  A = n("170213"),
  g = n("49111"),
  I = n("782340"),
  C = n("765516");
let v = e => {
    let {
      classificationTypeText: t,
      guildName: n
    } = e, a = (0, f.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail");
    return (0, i.jsx)("div", {
      className: C.classificationHeader,
      children: (0, i.jsx)(u.Heading, {
        variant: "heading-xl/normal",
        children: a && null != n ? I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
          guildName: n,
          classification_type: t,
          classificationHook: (e, t) => (0, i.jsx)("strong", {
            children: e
          }, t)
        }) : I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V2.format({
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
      className: C.classificationActionsTakenContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, i.jsx)("ul", {
        className: C.classificationActionsTakenList,
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
        className: C.classificationActionsTakenRow,
        children: (0, i.jsx)(u.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  y = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: n
    } = e;
    return (0, i.jsxs)(u.Anchor, {
      href: n,
      className: C.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: C.classificationPolicyCardIcon,
        children: (0, i.jsx)(o.ShieldIcon, {
          width: 24,
          height: 24,
          color: r.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: C.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(u.Text, {
          variant: "text-md/normal",
          children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: C.classificationPolicyLinkIcon,
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
    children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  w = e => (0, i.jsx)(u.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, n) => (0, i.jsx)(u.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, n)
    })
  }),
  x = e => (0, i.jsx)("div", {
    className: C.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(L, {}) : (0, i.jsx)(w, {
      appealLink: A.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  R = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: n,
      classificationTypeText: a,
      policyExplainerLink: l,
      appealComponent: r
    } = e;
    return (0, i.jsxs)("div", {
      className: C.classificationActionExplanationContainer,
      children: [(0, i.jsx)(u.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, i.jsx)(u.Text, {
        className: C.guidelinesExplanation,
        variant: "text-sm/normal",
        children: I.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: n
        })
      }), (0, i.jsx)(y, {
        classificationTypeText: a,
        policyExplainerLink: l
      }), r]
    })
  };
var b = e => {
  var t, n;
  let {
    classificationId: r,
    source: s,
    onError: o
  } = e, {
    classification: u,
    classificationRequestState: f,
    isAppealEligible: I,
    isDsaEligible: N
  } = (0, h.useSafetyHubClassification)(r), y = (0, _.useSafetyHubAccountStanding)(), L = null != u && null != u.flagged_content && u.flagged_content.length > 0, w = (0, S.useSafetyHubInitialized)();
  return (a.useEffect(() => {
    w && d.default.track(g.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: A.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: y.state,
      classification_ids: [Number(r)],
      source: s,
      is_violative_content_shown: L,
      is_dsa_eligible: N
    })
  }, [w]), null == u && f === E.ClassificationRequestState.FAILED) ? (o(), null) : null == u ? null : (0, i.jsxs)("div", {
    className: C.classificationContainer,
    children: [(0, i.jsx)(v, {
      classificationTypeText: u.description,
      guildName: null == u ? void 0 : null === (t = u.guild_metadata) || void 0 === t ? void 0 : t.name
    }), (0, i.jsx)(m.ClassificationEvidence, {
      flaggedContent: null !== (n = u.flagged_content) && void 0 !== n ? n : [],
      actions: u.actions,
      guildMetadata: u.guild_metadata
    }), (0, i.jsx)(T, {
      actions: u.actions
    }), (0, i.jsx)(R, {
      classificationTypeText: u.description,
      tosLink: A.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: A.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: u.explainer_link,
      appealComponent: (0, i.jsx)(x, {
        hasBeenAppealed: null != u.appeal_status,
        onLetUsKnowClick: () => {
          d.default.track(g.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: A.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: y.state,
            classification_ids: [Number(r)],
            source: s,
            is_violative_content_shown: L,
            is_dsa_eligible: N
          }), I && (c.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), p.default.open(r))
        },
        isAppealEligible: I
      })
    })]
  })
}