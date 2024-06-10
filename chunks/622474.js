"use strict";
s.r(t), s("47120"), s("653041");
var a = s("735250"),
  n = s("470079"),
  l = s("120356"),
  i = s.n(l),
  r = s("913527"),
  o = s.n(r),
  d = s("374470"),
  u = s("399606"),
  c = s("481060"),
  S = s("570140"),
  E = s("37234"),
  T = s("960359"),
  _ = s("853197"),
  I = s("430492"),
  N = s("688465"),
  g = s("594174"),
  f = s("55935"),
  m = s("702512"),
  C = s("689938"),
  A = s("193225");
let O = "YYYY-MM-DD HH:mm";

function h(e) {
  let {
    drop: t,
    enrolled: s,
    completed: l
  } = e, i = n.useRef(null), r = e => {
    let t = e.target;
    (0, d.isElement)(t, HTMLAnchorElement) && (0, E.popLayer)()
  };
  (0, n.useEffect)(() => {
    let e = i.current;
    return null != e && e.addEventListener("click", r), () => {
      null != e && e.removeEventListener("click", r)
    }
  }, []);
  let {
    title: u,
    endDate: I,
    dropsQuestId: N,
    assets: g,
    articleUrl: f
  } = t, m = (0, _.getDropByQuestId)(N);
  if (null == m) return null;
  let O = () => {
    (0, T.enrollDropsUser)(N).then(() => {
      S.default.wait(async () => {
        await (0, T.fetchDropsUserStatus)()
      })
    })
  };
  return (0, a.jsxs)("div", {
    className: A.dropContainer,
    children: [(0, a.jsx)("div", {
      className: A.dropCard,
      children: (0, a.jsxs)("div", {
        className: A.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: A.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: A.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: g.iconSrc,
              className: A.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: u
            }), (0, a.jsx)(c.Text, {
              variant: "text-xs/medium",
              color: "text-normal",
              className: A.availableUntil,
              children: C.default.Messages.DROPS_CARD_REDEEM_UNTIL.format({
                endDate: o()(I, "YYYY-MM-DD HH:mm").format("MMMM Do, YYYY")
              })
            })]
          })]
        }), (0, a.jsx)(c.Tooltip, {
          text: s && !l ? C.default.Messages.DROPS_GIFT_INVENTORY_REDEMPTION_TOOLTIP : null,
          tooltipContentClassName: A.redeemTooltipContent,
          children: e => (0, a.jsx)(c.Button, {
            className: A.promotionCardButton,
            color: c.Button.Colors.BRAND,
            size: c.Button.Sizes.SMALL,
            onClick: O,
            disabled: s && !l,
            ...e,
            children: s ? C.default.Messages.REDEEM : C.default.Messages.DROPS_GIFT_INVENTORY_ENROLL
          })
        })]
      })
    }), (0, a.jsxs)("div", {
      className: A.dropCriteria,
      children: [(0, a.jsx)("img", {
        alt: "",
        src: g.rewardSrc,
        className: A.dropRewardImage
      }), (0, a.jsx)("div", {
        ref: i,
        children: (0, a.jsx)(c.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          className: A.dropCriteriaText,
          children: m.messages.giftInfo()
        })
      }), (0, a.jsx)(c.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        className: A.dropLearnMore,
        children: C.default.Messages.DROPS_LEARN_MORE.format({
          faqUrl: f
        })
      })]
    })]
  })
}

function p(e) {
  let {
    drop: t,
    code: s,
    platform: l
  } = e, [r, d] = n.useState(!1), u = void 0 !== s, S = (0, f.dateFormat)(o()(t.endDate), "LL"), E = C.default.Messages.DROPS_CARD_REDEEM_UNTIL.format({
    endDate: S
  }), T = u ? C.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : C.default.Messages.PROMOTION_CARD_ACTION_CLAIM, _ = n.useCallback(() => d(!1), []);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: i()(A.skuCard, A.promotionCard),
      children: (0, a.jsxs)("div", {
        className: A.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: A.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: A.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: t.assets.iconSrc,
              className: A.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              children: t.title
            }), (0, a.jsx)(c.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: A.__invalid_promotionText,
              children: E
            })]
          })]
        }), (0, a.jsx)(c.Button, {
          color: c.Button.Colors.BRAND,
          size: c.Button.Sizes.SMALL,
          onClick: () => d(!0),
          children: T
        })]
      })
    }), r && (0, a.jsx)(c.Modal, {
      renderModal: e => (0, a.jsx)(I.default, {
        ...e,
        onClose: _,
        code: s,
        drop: t,
        platform: l
      }),
      onCloseRequest: _
    })]
  })
}
t.default = function(e) {
  var t;
  let {
    dropsOptedOut: s,
    dropsStatuses: n
  } = e, l = [], i = [], r = (0, u.useStateFromStores)([g.default], () => g.default.getCurrentUser()), d = !1;
  if (null == n) return null;
  for (let e of Object.keys(n)) {
    let t = (0, _.getDropByQuestId)(e);
    if (null == t) continue;
    let s = n[e],
      a = (0, _.getDropsPartnerGameNameByQuestId)(e);
    if (null == a) continue;
    let u = (0, _.getEligibilityByRunningGameDetection)(a),
      c = s.eligible && u,
      S = (0, _.getDropsExperiment)(a);
    if (null == S) continue;
    c && S.trackExposure({
      location: "ENTITLEMENT_GIFTS"
    });
    let E = !!((null == r ? void 0 : r.isStaff()) && S.getCurrentConfig({
      location: "076035_2"
    }, {
      autoTrackExposure: !1
    }).showUnenroll);
    if (!S.getCurrentConfig({
        location: "076035_3"
      }, {
        autoTrackExposure: !1
      }).dropsEnabled) continue;
    d = !0;
    let T = o()(t.endDate, O),
      I = o()();
    c && null == s.completed_at || null != s.enrolled_at && null == s.completed_at && s.eligible ? I < T && l.push({
      dropsQuestId: e,
      dropsStatus: s,
      showUnenroll: E,
      experiment: S
    }) : (null != s.code || null != s.completed_at) && I < o()(t.finalClaimDate, O) && i.push({
      dropsQuestId: e,
      dropsStatus: s,
      showUnenroll: E,
      experiment: S
    })
  }
  let S = (0, a.jsxs)("div", {
    className: A.dropsHeaderContainer,
    children: [(0, a.jsx)(c.Heading, {
      variant: "heading-md/semibold",
      children: C.default.Messages.DROPS_GIFT_INVENTORY_TITLE
    }), (0, a.jsx)(N.default, {
      className: A.betaTagIcon
    })]
  });
  return d && 0 === l.length && 0 === i.length && s ? (0, a.jsxs)(c.FormSection, {
    children: [S, (0, a.jsx)(c.FormDivider, {
      className: A.divider
    }), (0, a.jsx)("div", {
      className: A.dropsHelpText,
      children: C.default.Messages.DROPS_READ_BLOG_TO_ENABLE.format({
        blogURL: m.DropsFaqUrl
      })
    })]
  }) : 0 === l.length && 0 === i.length ? null : (0, a.jsxs)(c.FormSection, {
    children: [S, (0, a.jsx)(c.FormDivider, {
      className: A.divider
    }), l.map(e => {
      let t = (0, _.getDropByQuestId)(e.dropsQuestId),
        s = null != e.dropsStatus.enrolled_at,
        n = null != e.dropsStatus.completed_at;
      return null != t ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(h, {
          drop: {
            ...t
          },
          enrolled: s,
          completed: n
        }, t.dropsQuestId), e.showUnenroll && (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: () => (0, T.unenrollDropsUser)(e.dropsQuestId),
          children: "UNENROLL"
        })]
      }) : null
    }), i.map(e => {
      var t, s;
      let n = (0, _.getDropByQuestId)(e.dropsQuestId);
      return null != n ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(p, {
          drop: n,
          code: null !== (t = e.dropsStatus.code) && void 0 !== t ? t : void 0,
          platform: null !== (s = e.dropsStatus.platform) && void 0 !== s ? s : void 0
        }, e.dropsQuestId), e.showUnenroll && (0, a.jsx)(c.Button, {
          size: c.Button.Sizes.SMALL,
          onClick: () => (0, T.unenrollDropsUser)(e.dropsQuestId),
          children: "UNENROLL"
        })]
      }) : null
    }), "string" == typeof(null == r ? void 0 : r.id) && i.length > 0 ? (0, a.jsx)("div", {
      className: A.feedback,
      children: C.default.Messages.DROPS_REQUEST_FEEDBACK_SUCCESS.format({
        feedbackURL: "https://survey.alchemer.com/s3/7043098/Discord-Drops-CSAT?user_id=".concat(null !== (t = null == r ? void 0 : r.id) && void 0 !== t ? t : "")
      })
    }) : null]
  })
}