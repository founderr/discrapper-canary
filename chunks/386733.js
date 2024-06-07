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
  T = s("976644"),
  f = s("626135"),
  I = s("63063"),
  S = s("276444"),
  m = s("520540"),
  p = s("197115"),
  A = s("119269"),
  M = s("981631"),
  C = s("689938"),
  N = s("847548"),
  g = s("691766");
let P = e => {
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
      className: N.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, a.jsx)(o.Tooltip, {
      text: C.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !n,
      tooltipContentClassName: N.unsentTooltipContent,
      children: e => (0, a.jsx)("div", {
        className: N.userAvatarProgressBarUnit,
        ...e,
        children: l
      })
    })
  },
  O = e => {
    let {
      numSentReferrals: t,
      placement: s
    } = e;
    return (0, a.jsxs)("div", {
      className: N.avatarProgressBarUnitConnectorContainer,
      children: [(0, a.jsx)("div", {
        className: N.avatarProgressBarUnitConnectorBase
      }), (0, a.jsx)("div", {
        className: n()({
          [N.fullHighlight]: t > s,
          [N.halfHighlight]: t === s
        })
      })]
    })
  },
  x = e => {
    let {
      userRecords: t
    } = e, s = t.length, r = s < 1 ? null : t[0], i = s < 2 ? null : t[1], n = s < 3 ? null : t[2];
    return (0, a.jsxs)("div", {
      className: N.userAvatarProgressBarContainer,
      children: [(0, a.jsx)(P, {
        userRecord: r,
        placement: 1
      }), (0, a.jsx)(O, {
        numSentReferrals: s,
        placement: 1
      }), (0, a.jsx)(P, {
        userRecord: i,
        placement: 2
      }), (0, a.jsx)(O, {
        numSentReferrals: s,
        placement: 2
      }), (0, a.jsx)(P, {
        userRecord: n,
        placement: 3
      })]
    })
  },
  b = (e, t, s, a) => e ? C.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: a
  }) : t ? C.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - s,
    helpdeskArticle: a
  }) : C.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: a
  });
t.default = e => {
  let {
    isInSettings: t = !1
  } = e, i = (0, l.useStateFromStoresArray)([S.default], () => S.default.getSentUserIds()), _ = (0, l.useStateFromStoresArray)([R.default], () => i.map(e => R.default.getUser(e)).filter(e => null != e)), P = r.useMemo(() => _.map(e => new E.default(e)), [_]), {
    subscriberHomeVariant: O
  } = m.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), h = O === m.SubscriberHomeVariant.VARIANT_2;
  r.useEffect(() => {
    i.forEach(e => {
      (0, u.getUser)(e)
    })
  }, [i]);
  let D = i.length,
    L = 3 === D,
    v = I.default.getArticleURL(M.HelpdeskArticles.REFERRAL_PROGRAM),
    U = L ? C.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : C.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: B
    } = (0, d.default)(c.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    j = r.useRef(null),
    [k, G] = r.useState(!1),
    H = () => {
      if (null != j.current) {
        let {
          clientWidth: e
        } = j.current;
        G(e <= 568)
      }
    };
  r.useEffect(() => (H(), window.addEventListener("resize", H), () => {
    window.removeEventListener("resize", H)
  }), []);
  let W = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A.default, {
      percentage: D / 3 * 100,
      progressCircleVariation: A.ProgressCircleVariation.NITRO_LOGO,
      iconClassName: n()({
        [N.referralProgressBarIcon]: !t,
        [N.referralProgressBarIconSettings]: t
      })
    }), (0, a.jsxs)("div", {
      className: N.expandedProgressBarContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: N.expandedProgressBarHeader,
        children: U
      }), (0, a.jsx)(x, {
        userRecords: P
      }), (0, a.jsx)(o.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: b(L, D > 0, i.length, v)
      }), (0, a.jsxs)("div", {
        className: n()(N.expandedProgressBarButtonContainer, {
          [N.expandedProgressBarButtonContainerMinLayout]: k && !t,
          [N.expandedProgressBarButtonContainerLayout]: !k && !t
        }),
        children: [!t && !h && (0, a.jsx)(p.default, {
          color: o.ButtonColors.CUSTOM,
          buttonText: C.default.Messages.GIFT_NITRO,
          className: n()(N.expandedProgressBarGiftingCTA, {
            [N.expandedProgressBarGiftingCTAMinLayout]: k && !t,
            [N.expandedProgressBarGiftingCTALayout]: !k && !t
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, a.jsx)(T.default, {
          className: N.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            f.default.track(M.AnalyticEvents.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: B
            }), (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([s.e("99387"), s.e("47435")]).then(s.bind(s, "204387"));
              return t => (0, a.jsx)(e, {
                ...t,
                sourceAnalyticsLocations: B
              })
            })
          },
          onlyShineOnHover: !0,
          children: (0, a.jsxs)("div", {
            className: N.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, a.jsx)("img", {
              src: g,
              alt: "",
              className: N.expandedProgressBarSelectFriendsIcon
            }), L ? C.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : C.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, a.jsx)("div", {
      ref: j,
      className: n()({
        [N.expandedProgressBarContainer]: !t,
        [N.expandedProgressBarContainerSettingsPage]: t,
        [N.expandedProgressBarContainerVariant1]: !h && !t,
        [N.expandedProgressBarContainerVariant2]: h && !t,
        [N.allReferralsSentBorder]: 3 === i.length
      }),
      children: W
    })
  })
}