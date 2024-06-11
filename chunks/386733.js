"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("481060"),
  u = s("232567"),
  c = s("100527"),
  d = s("906732"),
  _ = s("204197"),
  E = s("598077"),
  R = s("594174"),
  T = s("626135"),
  I = s("63063"),
  f = s("276444"),
  S = s("520540"),
  m = s("197115"),
  p = s("119269"),
  A = s("981631"),
  M = s("689938"),
  C = s("847548"),
  g = s("691766");
let N = e => {
    let {
      userRecord: t,
      placement: s
    } = e, {
      avatarSrc: r,
      eventHandlers: i
    } = (0, _.default)({
      user: t,
      size: o.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }), n = null != t, l = n ? (0, a.jsx)(o.Avatar, {
      src: r,
      "aria-label": t.username,
      size: o.AvatarSizes.SIZE_32,
      ...i
    }) : (0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: C.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, a.jsx)(o.Tooltip, {
      text: M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !n,
      tooltipContentClassName: C.unsentTooltipContent,
      children: e => (0, a.jsx)("div", {
        className: C.userAvatarProgressBarUnit,
        ...e,
        children: l
      })
    })
  },
  P = e => {
    let {
      numSentReferrals: t,
      placement: s
    } = e;
    return (0, a.jsxs)("div", {
      className: C.avatarProgressBarUnitConnectorContainer,
      children: [(0, a.jsx)("div", {
        className: C.avatarProgressBarUnitConnectorBase
      }), (0, a.jsx)("div", {
        className: n()({
          [C.fullHighlight]: t > s,
          [C.halfHighlight]: t === s
        })
      })]
    })
  },
  O = e => {
    let {
      userRecords: t
    } = e, s = t.length, r = s < 1 ? null : t[0], i = s < 2 ? null : t[1], n = s < 3 ? null : t[2];
    return (0, a.jsxs)("div", {
      className: C.userAvatarProgressBarContainer,
      children: [(0, a.jsx)(N, {
        userRecord: r,
        placement: 1
      }), (0, a.jsx)(P, {
        numSentReferrals: s,
        placement: 1
      }), (0, a.jsx)(N, {
        userRecord: i,
        placement: 2
      }), (0, a.jsx)(P, {
        numSentReferrals: s,
        placement: 2
      }), (0, a.jsx)(N, {
        userRecord: n,
        placement: 3
      })]
    })
  },
  x = (e, t, s, a) => e ? M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: a
  }) : t ? M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - s,
    helpdeskArticle: a
  }) : M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: a
  });
t.default = e => {
  let {
    isInSettings: t = !1
  } = e, i = (0, l.useStateFromStoresArray)([f.default], () => f.default.getSentUserIds()), _ = (0, l.useStateFromStoresArray)([R.default], () => i.map(e => R.default.getUser(e)).filter(e => null != e)), N = r.useMemo(() => _.map(e => new E.default(e)), [_]), {
    subscriberHomeVariant: P
  } = S.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), b = P === S.SubscriberHomeVariant.VARIANT_2;
  r.useEffect(() => {
    i.forEach(e => {
      (0, u.getUser)(e)
    })
  }, [i]);
  let h = i.length,
    D = 3 === h,
    L = I.default.getArticleURL(A.HelpdeskArticles.REFERRAL_PROGRAM),
    v = D ? M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : M.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: U
    } = (0, d.default)(c.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    B = r.useRef(null),
    [j, k] = r.useState(!1),
    G = () => {
      if (null != B.current) {
        let {
          clientWidth: e
        } = B.current;
        k(e <= 568)
      }
    };
  r.useEffect(() => (G(), window.addEventListener("resize", G), () => {
    window.removeEventListener("resize", G)
  }), []);
  let H = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(p.default, {
      percentage: h / 3 * 100,
      progressCircleVariation: p.ProgressCircleVariation.NITRO_LOGO,
      iconClassName: n()({
        [C.referralProgressBarIcon]: !t,
        [C.referralProgressBarIconSettings]: t
      })
    }), (0, a.jsxs)("div", {
      className: C.expandedProgressBarContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: C.expandedProgressBarHeader,
        children: v
      }), (0, a.jsx)(O, {
        userRecords: N
      }), (0, a.jsx)(o.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: x(D, h > 0, i.length, L)
      }), (0, a.jsxs)("div", {
        className: n()(C.expandedProgressBarButtonContainer, {
          [C.expandedProgressBarButtonContainerMinLayout]: j && !t,
          [C.expandedProgressBarButtonContainerLayout]: !j && !t
        }),
        children: [!t && !b && (0, a.jsx)(m.default, {
          color: o.ButtonColors.CUSTOM,
          buttonText: M.default.Messages.GIFT_NITRO,
          className: n()(C.expandedProgressBarGiftingCTA, {
            [C.expandedProgressBarGiftingCTAMinLayout]: j && !t,
            [C.expandedProgressBarGiftingCTALayout]: !j && !t
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, a.jsx)(o.ShinyButton, {
          className: C.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            T.default.track(A.AnalyticEvents.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: U
            }), (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([s.e("99387"), s.e("47435")]).then(s.bind(s, "204387"));
              return t => (0, a.jsx)(e, {
                ...t,
                sourceAnalyticsLocations: U
              })
            })
          },
          onlyShineOnHover: !0,
          children: (0, a.jsxs)("div", {
            className: C.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, a.jsx)("img", {
              src: g,
              alt: "",
              className: C.expandedProgressBarSelectFriendsIcon
            }), D ? M.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : M.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)("div", {
      ref: B,
      className: n()({
        [C.expandedProgressBarContainer]: !t,
        [C.expandedProgressBarContainerSettingsPage]: t,
        [C.expandedProgressBarContainerVariant1]: !b && !t,
        [C.expandedProgressBarContainerVariant2]: b && !t,
        [C.allReferralsSentBorder]: 3 === i.length
      }),
      children: H
    })
  })
}