"use strict";
a.r(t);
var i = a("735250"),
  n = a("470079"),
  l = a("286379"),
  s = a("692547"),
  o = a("465270"),
  r = a("914576"),
  c = a("481060"),
  d = a("797614"),
  u = a("626135"),
  m = a("219230"),
  _ = a("531441"),
  A = a("451284"),
  h = a("613734"),
  f = a("846488"),
  E = a("384725"),
  I = a("97568"),
  g = a("800530"),
  p = a("981631"),
  T = a("689938"),
  x = a("78275");
let C = e => {
    let {
      classificationTypeText: t,
      guildMetadata: a
    } = e, l = (0, m.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail"), s = n.useMemo(() => {
      let e = {
        classification_type: t,
        classificationHook: (e, t) => (0, i.jsx)("strong", {
          children: e
        }, t)
      };
      return l && null != a ? (null == a ? void 0 : a.member_type) === _.MemberType.OWNER ? T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
        ...e,
        guildName: null == a ? void 0 : a.name
      }) : T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
        ...e,
        guildName: null == a ? void 0 : a.name
      }) : T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(e)
    }, [t, a, l]);
    return (0, i.jsx)("div", {
      className: x.classificationHeader,
      children: (0, i.jsx)(c.Heading, {
        variant: "heading-xl/normal",
        children: s
      })
    })
  },
  S = e => {
    let {
      actions: t
    } = e;
    return 0 === t.filter(e => e.descriptions.length > 0).length ? null : (0, i.jsxs)("div", {
      className: x.classificationActionsTakenContainer,
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, i.jsx)("ul", {
        className: x.classificationActionsTakenList,
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
        className: x.classificationActionsTakenRow,
        children: (0, i.jsx)(c.Text, {
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
      policyExplainerLink: a
    } = e;
    return (0, i.jsxs)(c.Anchor, {
      href: a,
      className: x.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: x.classificationPolicyCardIcon,
        children: (0, i.jsx)(r.ShieldIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: x.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: x.classificationPolicyLinkIcon,
        children: (0, i.jsx)(o.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  N = () => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  M = e => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, a) => (0, i.jsx)(c.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, a)
    })
  }),
  D = e => (0, i.jsx)("div", {
    className: x.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(N, {}) : (0, i.jsx)(M, {
      appealLink: g.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  y = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: a,
      classificationTypeText: n,
      policyExplainerLink: l,
      appealComponent: s
    } = e;
    return (0, i.jsxs)("div", {
      className: x.classificationActionExplanationContainer,
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, i.jsx)(c.Text, {
        className: x.guidelinesExplanation,
        variant: "text-sm/normal",
        children: T.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: a
        })
      }), (0, i.jsx)(L, {
        classificationTypeText: n,
        policyExplainerLink: l
      }), s]
    })
  };
t.default = e => {
  var t;
  let {
    classificationId: a,
    source: s,
    onError: o
  } = e, {
    classification: r,
    classificationRequestState: c,
    isAppealEligible: m,
    isDsaEligible: T
  } = (0, h.useSafetyHubClassification)(a), v = (0, A.useSafetyHubAccountStanding)(), L = null != r && null != r.flagged_content && r.flagged_content.length > 0, N = (0, f.useSafetyHubInitialized)();
  return (n.useEffect(() => {
    N && u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: g.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: v.state,
      classification_ids: [Number(a)],
      source: s,
      is_violative_content_shown: L,
      is_dsa_eligible: T
    })
  }, [N]), null == r && c === _.ClassificationRequestState.FAILED) ? (o(), null) : null == r ? null : (0, i.jsxs)("div", {
    className: x.classificationContainer,
    children: [(0, i.jsx)(C, {
      classificationTypeText: r.description,
      guildMetadata: null == r ? void 0 : r.guild_metadata
    }), (0, i.jsx)(I.ClassificationEvidence, {
      flaggedContent: null !== (t = r.flagged_content) && void 0 !== t ? t : [],
      actions: r.actions,
      guildMetadata: r.guild_metadata
    }), (0, i.jsx)(S, {
      actions: r.actions
    }), (0, i.jsx)(y, {
      classificationTypeText: r.description,
      tosLink: g.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: g.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: r.explainer_link,
      appealComponent: (0, i.jsx)(D, {
        hasBeenAppealed: null != r.appeal_status,
        onLetUsKnowClick: () => {
          u.default.track(p.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: g.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: v.state,
            classification_ids: [Number(a)],
            source: s,
            is_violative_content_shown: L,
            is_dsa_eligible: T
          }), m && (d.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), E.default.open(a))
        },
        isAppealEligible: m
      })
    })]
  })
}