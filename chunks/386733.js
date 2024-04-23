"use strict";
s.r(t), s("47120");
var a = s("735250"),
  r = s("470079"),
  i = s("120356"),
  n = s.n(i),
  l = s("442837"),
  o = s("481060"),
  u = s("232567"),
  d = s("100527"),
  c = s("906732"),
  _ = s("204197"),
  E = s("598077"),
  T = s("594174"),
  I = s("976644"),
  R = s("63063"),
  f = s("276444"),
  S = s("520540"),
  m = s("197115"),
  A = s("119269"),
  N = s("981631"),
  p = s("689938"),
  g = s("347584"),
  C = s("691766");
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
      className: g.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, a.jsx)(o.Tooltip, {
      text: p.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !n,
      tooltipContentClassName: g.unsentTooltipContent,
      children: e => (0, a.jsx)("div", {
        className: g.userAvatarProgressBarUnit,
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
      className: g.avatarProgressBarUnitConnectorContainer,
      children: [(0, a.jsx)("div", {
        className: g.avatarProgressBarUnitConnectorBase
      }), (0, a.jsx)("div", {
        className: n()({
          [g.fullHighlight]: t > s,
          [g.halfHighlight]: t === s
        })
      })]
    })
  },
  M = e => {
    let {
      userRecords: t
    } = e, s = t.length, r = s < 1 ? null : t[0], i = s < 2 ? null : t[1], n = s < 3 ? null : t[2];
    return (0, a.jsxs)("div", {
      className: g.userAvatarProgressBarContainer,
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
  h = (e, t, s, a) => e ? p.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: a
  }) : t ? p.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - s,
    helpdeskArticle: a
  }) : p.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: a
  });
t.default = e => {
  let {
    isInSettings: t = !1
  } = e, i = (0, l.useStateFromStoresArray)([f.default], () => f.default.getSentUserIds()), _ = (0, l.useStateFromStoresArray)([T.default], () => i.map(e => T.default.getUser(e)).filter(e => null != e)), P = r.useMemo(() => _.map(e => new E.default(e)), [_]), {
    subscriberHomeVariant: O
  } = S.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), L = O === S.SubscriberHomeVariant.VARIANT_2;
  r.useEffect(() => {
    i.forEach(e => {
      (0, u.getUser)(e)
    })
  }, [i]);
  let x = i.length,
    v = 3 === x,
    D = R.default.getArticleURL(N.HelpdeskArticles.REFERRAL_PROGRAM),
    b = v ? p.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : p.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: U
    } = (0, c.default)(d.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    j = r.useRef(null),
    [B, y] = r.useState(!1),
    G = () => {
      if (null != j.current) {
        let {
          clientWidth: e
        } = j.current;
        y(e <= 568)
      }
    };
  r.useEffect(() => (G(), window.addEventListener("resize", G), () => {
    window.removeEventListener("resize", G)
  }), []);
  let k = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A.default, {
      percentage: x / 3 * 100,
      progressCircleVariation: A.ProgressCircleVariation.NITRO_LOGO,
      iconClassName: n()({
        [g.referralProgressBarIcon]: !t,
        [g.referralProgressBarIconSettings]: t
      })
    }), (0, a.jsxs)("div", {
      className: n()(g.expandedProgressBarContent, {
        [g.expandedProgressBarContentVariant1]: !L,
        [g.expandedProgressBarContentVariant2]: L
      }),
      children: [(0, a.jsx)(o.Heading, {
        variant: "heading-xxl/extrabold",
        className: g.expandedProgressBarHeader,
        children: b
      }), (0, a.jsx)(M, {
        userRecords: P
      }), (0, a.jsx)(o.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: h(v, x > 0, i.length, D)
      }), (0, a.jsxs)("div", {
        className: n()(g.expandedProgressBarButtonContainer, {
          [g.expandedProgressBarButtonContainerMinLayout]: B && !t,
          [g.expandedProgressBarButtonContainerLayout]: !B && !t
        }),
        children: [!t && !L && (0, a.jsx)(m.default, {
          color: o.ButtonColors.CUSTOM,
          buttonText: p.default.Messages.GIFT_NITRO,
          className: n()(g.expandedProgressBarGiftingCTA, {
            [g.expandedProgressBarGiftingCTAMinLayout]: B && !t,
            [g.expandedProgressBarGiftingCTALayout]: !B && !t
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, a.jsx)(I.default, {
          className: g.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([s.e("99387"), s.e("47435")]).then(s.bind(s, "204387"));
              return t => (0, a.jsx)(e, {
                ...t
              })
            })
          },
          onlyShineOnHover: !0,
          children: (0, a.jsxs)("div", {
            className: g.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, a.jsx)("img", {
              src: C,
              alt: "",
              className: g.expandedProgressBarSelectFriendsIcon
            }), v ? p.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : p.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, a.jsx)(c.AnalyticsLocationProvider, {
    value: U,
    children: (0, a.jsx)("div", {
      ref: j,
      className: n()({
        [g.expandedProgressBarContainer]: !t,
        [g.expandedProgressBarContainerSettingsPage]: t,
        [g.expandedProgressBarContainerVariant1]: !L && !t,
        [g.expandedProgressBarContainerVariant2]: L && !t,
        [g.allReferralsSentBorder]: 3 === i.length
      }),
      children: k
    })
  })
}