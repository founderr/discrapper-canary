"use strict";
i.r(t);
var a = i("735250"),
  n = i("470079"),
  l = i("286379"),
  s = i("692547"),
  o = i("465270"),
  r = i("914576"),
  c = i("481060"),
  d = i("797614"),
  u = i("626135"),
  m = i("219230"),
  _ = i("531441"),
  A = i("451284"),
  h = i("613734"),
  f = i("846488"),
  E = i("384725"),
  I = i("97568"),
  g = i("800530"),
  p = i("981631"),
  T = i("689938"),
  x = i("78275");
let C = e => {
    let {
      classificationTypeText: t,
      guildMetadata: i
    } = e, l = (0, m.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail"), s = n.useMemo(() => {
      let e = {
        classification_type: t,
        classificationHook: (e, t) => (0, a.jsx)("strong", {
          children: e
        }, t)
      };
      return l && null != i ? (null == i ? void 0 : i.member_type) === _.MemberType.OWNER ? T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
        ...e,
        guildName: null == i ? void 0 : i.name
      }) : T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
        ...e,
        guildName: null == i ? void 0 : i.name
      }) : T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(e)
    }, [t, i, l]);
    return (0, a.jsx)("div", {
      className: x.classificationHeader,
      children: (0, a.jsx)(c.Heading, {
        variant: "heading-xl/normal",
        children: s
      })
    })
  },
  S = e => {
    let {
      actions: t
    } = e;
    return 0 === t.filter(e => e.descriptions.length > 0).length ? null : (0, a.jsxs)("div", {
      className: x.classificationActionsTakenContainer,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, a.jsx)("ul", {
        className: x.classificationActionsTakenList,
        children: t.map(e => (0, a.jsx)(v, {
          action: e
        }, e.id))
      })]
    })
  },
  v = e => {
    let {
      action: t
    } = e;
    return (0, a.jsx)(a.Fragment, {
      children: t.descriptions.map((e, t) => (0, a.jsx)("li", {
        className: x.classificationActionsTakenRow,
        children: (0, a.jsx)(c.Text, {
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
      policyExplainerLink: i
    } = e;
    return (0, a.jsxs)(c.Anchor, {
      href: i,
      className: x.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, a.jsx)("div", {
        className: x.classificationPolicyCardIcon,
        children: (0, a.jsx)(r.ShieldIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.FOCUS_PRIMARY
        })
      }), (0, a.jsx)("div", {
        className: x.classificationPolicyDescriptionContainer,
        children: (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, a.jsx)("div", {
        className: x.classificationPolicyLinkIcon,
        children: (0, a.jsx)(o.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  N = () => (0, a.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  M = e => (0, a.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, i) => (0, a.jsx)(c.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, i)
    })
  }),
  y = e => (0, a.jsx)("div", {
    className: x.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, a.jsx)(N, {}) : (0, a.jsx)(M, {
      appealLink: g.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  D = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: i,
      classificationTypeText: n,
      policyExplainerLink: l,
      appealComponent: s
    } = e;
    return (0, a.jsxs)("div", {
      className: x.classificationActionExplanationContainer,
      children: [(0, a.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, a.jsx)(c.Text, {
        className: x.guidelinesExplanation,
        variant: "text-sm/normal",
        children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: i
        })
      }), (0, a.jsx)(L, {
        classificationTypeText: n,
        policyExplainerLink: l
      }), s]
    })
  };
t.default = e => {
  var t;
  let {
    classificationId: i,
    source: s,
    onError: o
  } = e, {
    classification: r,
    classificationRequestState: c,
    isAppealEligible: m,
    isDsaEligible: T,
    violationType: v
  } = (0, h.useSafetyHubClassification)(i), L = (0, A.useSafetyHubAccountStanding)(), N = null != r && null != r.flagged_content && r.flagged_content.length > 0, M = (0, f.useSafetyHubInitialized)();
  return (n.useEffect(() => {
    M && u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: g.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: L.state,
      classification_ids: [Number(i)],
      source: s,
      is_violative_content_shown: N,
      is_dsa_eligible: T,
      violation_type: v
    })
  }, [M]), null == r && c === _.ClassificationRequestState.FAILED) ? (o(), null) : null == r ? null : (0, a.jsxs)("div", {
    className: x.classificationContainer,
    children: [(0, a.jsx)(C, {
      classificationTypeText: r.description,
      guildMetadata: null == r ? void 0 : r.guild_metadata
    }), (0, a.jsx)(I.ClassificationEvidence, {
      flaggedContent: null !== (t = r.flagged_content) && void 0 !== t ? t : [],
      actions: r.actions,
      guildMetadata: r.guild_metadata
    }), (0, a.jsx)(S, {
      actions: r.actions
    }), (0, a.jsx)(D, {
      classificationTypeText: r.description,
      tosLink: g.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: g.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: r.explainer_link,
      appealComponent: (0, a.jsx)(y, {
        hasBeenAppealed: null != r.appeal_status,
        onLetUsKnowClick: () => {
          u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: g.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: L.state,
            classification_ids: [Number(i)],
            source: s,
            is_violative_content_shown: N,
            is_dsa_eligible: T,
            violation_type: v
          }), m && (d.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), E.default.open(i))
        },
        isAppealEligible: m
      })
    })]
  })
}