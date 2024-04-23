"use strict";
a.r(t);
var i = a("735250"),
  n = a("470079"),
  l = a("286379"),
  s = a("692547"),
  o = a("465270"),
  r = a("914576"),
  c = a("481060"),
  d = a("442837"),
  u = a("797614"),
  m = a("706454"),
  _ = a("626135"),
  A = a("219230"),
  f = a("531441"),
  h = a("788080"),
  E = a("451284"),
  I = a("613734"),
  T = a("846488"),
  g = a("384725"),
  p = a("97568"),
  x = a("800530"),
  S = a("981631"),
  C = a("689938"),
  v = a("78275");
let L = e => {
    let {
      classificationTypeText: t,
      guildMetadata: a
    } = e, l = (0, A.useIsSafetyHubDisplayGuildViolationsEnabled)("classification_detail"), s = n.useMemo(() => {
      let e = {
        classification_type: t,
        classificationHook: (e, t) => (0, i.jsx)("strong", {
          children: e
        }, t)
      };
      return l && null != a ? (null == a ? void 0 : a.member_type) === f.MemberType.OWNER ? C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD.format({
        ...e,
        guildName: null == a ? void 0 : a.name
      }) : C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_GUILD_PRESENCE.format({
        ...e,
        guildName: null == a ? void 0 : a.name
      }) : C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_HEADER_V3.format(e)
    }, [t, a, l]);
    return (0, i.jsx)("div", {
      className: v.classificationHeader,
      children: (0, i.jsx)(c.Heading, {
        variant: "heading-xl/normal",
        children: s
      })
    })
  },
  N = e => {
    let {
      actions: t,
      classificationExpiration: a
    } = e, n = (0, d.useStateFromStores)([m.default], () => m.default.locale);
    return 0 === t.filter(e => e.descriptions.length > 0).length && null == a ? null : (0, i.jsxs)("div", {
      className: v.classificationActionsTakenContainer,
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_HEADER_V2
      }), (0, i.jsxs)("ul", {
        className: v.classificationActionsTakenList,
        children: [t.map(e => (0, i.jsx)(D, {
          action: e
        }, e.id)), null != a ? (0, i.jsx)("li", {
          className: v.classificationActionsTakenRow,
          children: (0, i.jsx)(c.Text, {
            tag: "span",
            variant: "heading-md/normal",
            color: "text-normal",
            children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTIONS_TAKEN_VIOLATION_ACCOUNT_STATUS.format({
              expirationDate: a.toLocaleDateString(n)
            })
          })
        }, "expiration") : null]
      })]
    })
  },
  D = e => {
    let {
      action: t
    } = e;
    return (0, i.jsx)(i.Fragment, {
      children: t.descriptions.map((e, t) => (0, i.jsx)("li", {
        className: v.classificationActionsTakenRow,
        children: (0, i.jsx)(c.Text, {
          tag: "span",
          variant: "heading-md/normal",
          color: "text-normal",
          children: e
        })
      }, t))
    })
  },
  M = e => {
    let {
      classificationTypeText: t,
      policyExplainerLink: a
    } = e;
    return (0, i.jsxs)(c.Anchor, {
      href: a,
      className: v.classificationPolicyCard,
      useDefaultUnderlineStyles: !1,
      children: [(0, i.jsx)("div", {
        className: v.classificationPolicyCardIcon,
        children: (0, i.jsx)(r.ShieldIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.FOCUS_PRIMARY
        })
      }), (0, i.jsx)("div", {
        className: v.classificationPolicyDescriptionContainer,
        children: (0, i.jsx)(c.Text, {
          variant: "text-md/normal",
          children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_POLICY_CARD_HEADER_V2.format({
            classificationDescription: t
          })
        })
      }), (0, i.jsx)("div", {
        className: v.classificationPolicyLinkIcon,
        children: (0, i.jsx)(o.ChevronSmallRightIcon, {
          width: 24,
          height: 24,
          color: s.default.colors.INTERACTIVE_NORMAL
        })
      })]
    })
  },
  y = () => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_APPEAL_STATUS
  }),
  F = e => (0, i.jsx)(c.Text, {
    variant: "text-md/normal",
    color: "text-muted",
    children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_ACTION_APPEAL_V2.format({
      letUsKnowHook: (t, a) => (0, i.jsx)(c.Anchor, {
        href: e.isAppealEligible ? void 0 : e.appealLink,
        onClick: e.letUsKnowClick,
        children: t
      }, a)
    })
  }),
  j = e => (0, i.jsx)("div", {
    className: v.classificationLetUsKnowContainer,
    children: e.hasBeenAppealed ? (0, i.jsx)(y, {}) : (0, i.jsx)(F, {
      appealLink: x.SafetyHubLinks.APPEALS_LINK,
      letUsKnowClick: e.onLetUsKnowClick,
      isAppealEligible: e.isAppealEligible
    })
  }),
  H = e => {
    let {
      tosLink: t,
      communityGuidelinesLink: a,
      classificationTypeText: n,
      policyExplainerLink: l,
      appealComponent: s
    } = e;
    return (0, i.jsxs)("div", {
      className: v.classificationActionExplanationContainer,
      children: [(0, i.jsx)(c.Text, {
        variant: "eyebrow",
        color: "text-muted",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_HEADER
      }), (0, i.jsx)(c.Text, {
        className: v.guidelinesExplanation,
        variant: "text-sm/normal",
        children: C.default.Messages.SAFETY_HUB_CLASSIFICATION_DETAIL_WHAT_YOU_CAN_DO_DESCRIPTION.format({
          tosLink: t,
          communityGuidelinesLink: a
        })
      }), (0, i.jsx)(M, {
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
    isAppealEligible: d,
    isDsaEligible: m,
    violationType: A
  } = (0, I.useSafetyHubClassification)(a), C = (0, E.useSafetyHubAccountStanding)(), D = null != r && null != r.flagged_content && r.flagged_content.length > 0, M = (0, T.useSafetyHubInitialized)();
  return (n.useEffect(() => {
    M && _.default.track(S.AnalyticEvents.SAFETY_HUB_ACTION, {
      action: x.SafetyHubAnalyticsActions.ViewViolationDetail,
      account_standing: C.state,
      classification_ids: [Number(a)],
      source: s,
      is_violative_content_shown: D,
      is_dsa_eligible: m,
      violation_type: A
    })
  }, [M]), null == r && c === f.ClassificationRequestState.FAILED) ? (o(), null) : null == r ? null : (0, i.jsxs)("div", {
    className: v.classificationContainer,
    children: [(0, i.jsx)(L, {
      classificationTypeText: r.description,
      guildMetadata: null == r ? void 0 : r.guild_metadata
    }), (0, i.jsx)(p.ClassificationEvidence, {
      flaggedContent: null !== (t = r.flagged_content) && void 0 !== t ? t : [],
      actions: r.actions,
      guildMetadata: r.guild_metadata
    }), (0, i.jsx)(N, {
      actions: r.actions,
      classificationExpiration: (0, h.getClassificationExpiration)(r)
    }), (0, i.jsx)(H, {
      classificationTypeText: r.description,
      tosLink: x.SafetyHubLinks.TOS_LINK,
      communityGuidelinesLink: x.SafetyHubLinks.COMMUNITY_GUIDELINES,
      policyExplainerLink: r.explainer_link,
      appealComponent: (0, i.jsx)(j, {
        hasBeenAppealed: null != r.appeal_status,
        onLetUsKnowClick: () => {
          _.default.track(S.AnalyticEvents.SAFETY_HUB_ACTION, {
            action: x.SafetyHubAnalyticsActions.ClickLetUsKnow,
            account_standing: C.state,
            classification_ids: [Number(a)],
            source: s,
            is_violative_content_shown: D,
            is_dsa_eligible: m,
            violation_type: A
          }), d && (u.default.increment({
            name: l.MetricEvents.APPEAL_INGESTION_VIEW
          }), g.default.open(a))
        },
        isAppealEligible: d
      })
    })]
  })
}