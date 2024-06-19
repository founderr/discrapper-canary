t(47120), t(653041);
var n = t(735250),
  i = t(470079),
  a = t(120356),
  l = t.n(a),
  r = t(913527),
  o = t.n(r),
  c = t(374470),
  E = t(399606),
  d = t(481060),
  _ = t(570140),
  T = t(37234),
  S = t(960359),
  u = t(853197),
  I = t(430492),
  N = t(688465),
  A = t(594174),
  C = t(55935),
  O = t(702512),
  m = t(689938),
  h = t(612011);
let g = "YYYY-MM-DD HH:mm";

function R(e) {
  let {
    drop: s,
    enrolled: t,
    completed: a
  } = e, l = i.useRef(null), r = e => {
    let s = e.target;
    (0, c.k)(s, HTMLAnchorElement) && (0, T.xf)()
  };
  (0, i.useEffect)(() => {
    let e = l.current;
    return null != e && e.addEventListener("click", r), () => {
      null != e && e.removeEventListener("click", r)
    }
  }, []);
  let {
    title: E,
    endDate: I,
    dropsQuestId: N,
    assets: A,
    articleUrl: C
  } = s, O = (0, u.EW)(N);
  if (null == O) return null;
  let g = () => {
    (0, S.RJ)(N).then(() => {
      _.Z.wait(async () => {
        await (0, S.R5)()
      })
    })
  };
  return (0, n.jsxs)("div", {
    className: h.dropContainer,
    children: [(0, n.jsx)("div", {
      className: h.dropCard,
      children: (0, n.jsxs)("div", {
        className: h.mainPromotionCardContainer,
        children: [(0, n.jsxs)("div", {
          className: h.promotionCardLeftContainer,
          children: [(0, n.jsx)("div", {
            className: h.promotionIcon,
            children: (0, n.jsx)("img", {
              alt: "",
              src: A.iconSrc,
              className: h.promotionIconImage
            })
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              children: E
            }), (0, n.jsx)(d.Text, {
              variant: "text-xs/medium",
              color: "text-normal",
              className: h.availableUntil,
              children: m.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({
                endDate: o()(I, "YYYY-MM-DD HH:mm").format("MMMM Do, YYYY")
              })
            })]
          })]
        }), (0, n.jsx)(d.Tooltip, {
          text: t && !a ? m.Z.Messages.DROPS_GIFT_INVENTORY_REDEMPTION_TOOLTIP : null,
          tooltipContentClassName: h.redeemTooltipContent,
          children: e => (0, n.jsx)(d.Button, {
            className: h.promotionCardButton,
            color: d.Button.Colors.BRAND,
            size: d.Button.Sizes.SMALL,
            onClick: g,
            disabled: t && !a,
            ...e,
            children: t ? m.Z.Messages.REDEEM : m.Z.Messages.DROPS_GIFT_INVENTORY_ENROLL
          })
        })]
      })
    }), (0, n.jsxs)("div", {
      className: h.dropCriteria,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: A.rewardSrc,
        className: h.dropRewardImage
      }), (0, n.jsx)("div", {
        ref: l,
        children: (0, n.jsx)(d.Text, {
          color: "text-muted",
          variant: "text-sm/normal",
          className: h.dropCriteriaText,
          children: O.messages.giftInfo()
        })
      }), (0, n.jsx)(d.Text, {
        color: "text-muted",
        variant: "text-sm/normal",
        className: h.dropLearnMore,
        children: m.Z.Messages.DROPS_LEARN_MORE.format({
          faqUrl: C
        })
      })]
    })]
  })
}

function M(e) {
  let {
    drop: s,
    code: t,
    platform: a
  } = e, [r, c] = i.useState(!1), E = void 0 !== t, _ = (0, C.vc)(o()(s.endDate), "LL"), T = m.Z.Messages.DROPS_CARD_REDEEM_UNTIL.format({
    endDate: _
  }), S = E ? m.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : m.Z.Messages.PROMOTION_CARD_ACTION_CLAIM, u = i.useCallback(() => c(!1), []);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: l()(h.skuCard, h.promotionCard),
      children: (0, n.jsxs)("div", {
        className: h.mainPromotionCardContainer,
        children: [(0, n.jsxs)("div", {
          className: h.promotionCardLeftContainer,
          children: [(0, n.jsx)("div", {
            className: h.promotionIcon,
            children: (0, n.jsx)("img", {
              alt: "",
              src: s.assets.iconSrc,
              className: h.promotionIconImage
            })
          }), (0, n.jsxs)("div", {
            children: [(0, n.jsx)(d.Heading, {
              variant: "heading-md/semibold",
              children: s.title
            }), (0, n.jsx)(d.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: h.__invalid_promotionText,
              children: T
            })]
          })]
        }), (0, n.jsx)(d.Button, {
          color: d.Button.Colors.BRAND,
          size: d.Button.Sizes.SMALL,
          onClick: () => c(!0),
          children: S
        })]
      })
    }), r && (0, n.jsx)(d.Modal, {
      renderModal: e => (0, n.jsx)(I.ZP, {
        ...e,
        onClose: u,
        code: t,
        drop: s,
        platform: a
      }),
      onCloseRequest: u
    })]
  })
}
s.Z = function(e) {
  var s;
  let {
    dropsOptedOut: t,
    dropsStatuses: i
  } = e, a = [], l = [], r = (0, E.e7)([A.default], () => A.default.getCurrentUser()), c = !1;
  if (null == i) return null;
  for (let e of Object.keys(i)) {
    let s = (0, u.EW)(e);
    if (null == s) continue;
    let t = i[e],
      n = (0, u.x8)(e);
    if (null == n) continue;
    let E = (0, u.Xt)(n),
      d = t.eligible && E,
      _ = (0, u.A5)(n);
    if (null == _) continue;
    d && _.trackExposure({
      location: "ENTITLEMENT_GIFTS"
    });
    let T = !!((null == r ? void 0 : r.isStaff()) && _.getCurrentConfig({
      location: "076035_2"
    }, {
      autoTrackExposure: !1
    }).showUnenroll);
    if (!_.getCurrentConfig({
        location: "076035_3"
      }, {
        autoTrackExposure: !1
      }).dropsEnabled) continue;
    c = !0;
    let S = o()(s.endDate, g),
      I = o()();
    d && null == t.completed_at || null != t.enrolled_at && null == t.completed_at && t.eligible ? I < S && a.push({
      dropsQuestId: e,
      dropsStatus: t,
      showUnenroll: T,
      experiment: _
    }) : (null != t.code || null != t.completed_at) && I < o()(s.finalClaimDate, g) && l.push({
      dropsQuestId: e,
      dropsStatus: t,
      showUnenroll: T,
      experiment: _
    })
  }
  let _ = (0, n.jsxs)("div", {
    className: h.dropsHeaderContainer,
    children: [(0, n.jsx)(d.Heading, {
      variant: "heading-md/semibold",
      children: m.Z.Messages.DROPS_GIFT_INVENTORY_TITLE
    }), (0, n.jsx)(N.Z, {
      className: h.betaTagIcon
    })]
  });
  return c && 0 === a.length && 0 === l.length && t ? (0, n.jsxs)(d.FormSection, {
    children: [_, (0, n.jsx)(d.FormDivider, {
      className: h.divider
    }), (0, n.jsx)("div", {
      className: h.dropsHelpText,
      children: m.Z.Messages.DROPS_READ_BLOG_TO_ENABLE.format({
        blogURL: O.n4
      })
    })]
  }) : 0 === a.length && 0 === l.length ? null : (0, n.jsxs)(d.FormSection, {
    children: [_, (0, n.jsx)(d.FormDivider, {
      className: h.divider
    }), a.map(e => {
      let s = (0, u.EW)(e.dropsQuestId),
        t = null != e.dropsStatus.enrolled_at,
        i = null != e.dropsStatus.completed_at;
      return null != s ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(R, {
          drop: {
            ...s
          },
          enrolled: t,
          completed: i
        }, s.dropsQuestId), e.showUnenroll && (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => (0, S.VT)(e.dropsQuestId),
          children: "UNENROLL"
        })]
      }) : null
    }), l.map(e => {
      var s, t;
      let i = (0, u.EW)(e.dropsQuestId);
      return null != i ? (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(M, {
          drop: i,
          code: null !== (s = e.dropsStatus.code) && void 0 !== s ? s : void 0,
          platform: null !== (t = e.dropsStatus.platform) && void 0 !== t ? t : void 0
        }, e.dropsQuestId), e.showUnenroll && (0, n.jsx)(d.Button, {
          size: d.Button.Sizes.SMALL,
          onClick: () => (0, S.VT)(e.dropsQuestId),
          children: "UNENROLL"
        })]
      }) : null
    }), "string" == typeof(null == r ? void 0 : r.id) && l.length > 0 ? (0, n.jsx)("div", {
      className: h.feedback,
      children: m.Z.Messages.DROPS_REQUEST_FEEDBACK_SUCCESS.format({
        feedbackURL: "https://survey.alchemer.com/s3/7043098/Discord-Drops-CSAT?user_id=".concat(null !== (s = null == r ? void 0 : r.id) && void 0 !== s ? s : "")
      })
    }) : null]
  })
}