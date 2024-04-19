"use strict";
s.r(t), s("47120");
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("442837"),
  o = s("780384"),
  u = s("481060"),
  d = s("232567"),
  c = s("410030"),
  _ = s("100527"),
  E = s("906732"),
  C = s("204197"),
  f = s("598077"),
  T = s("594174"),
  I = s("976644"),
  R = s("63063"),
  S = s("276444"),
  p = s("520540"),
  m = s("197115"),
  A = s("550473"),
  N = s("578767"),
  g = s("228059"),
  O = s("110377"),
  P = s("981631"),
  M = s("689938"),
  h = s("347584"),
  L = s("691766");
let x = e => {
    let {
      height: t,
      width: s
    } = e, i = (0, c.useTheme)();
    return (0, o.isThemeLight)(i) ? (0, a.jsx)(N.default, {
      height: t,
      width: s
    }) : (0, a.jsx)(A.default, {
      height: t,
      width: s
    })
  },
  v = e => {
    let {
      height: t,
      width: s
    } = e, i = (0, c.useTheme)();
    return (0, o.isThemeLight)(i) ? (0, a.jsx)(O.default, {
      height: t,
      width: s
    }) : (0, a.jsx)(g.default, {
      height: t,
      width: s
    })
  },
  j = e => {
    let {
      userRecord: t,
      placement: s
    } = e, {
      avatarSrc: i,
      eventHandlers: r
    } = (0, C.default)({
      user: t,
      size: u.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }), l = null != t, n = l ? (0, a.jsx)(u.Avatar, {
      src: i,
      "aria-label": t.username,
      size: u.AvatarSizes.SIZE_32,
      ...r
    }) : (0, a.jsx)(u.Heading, {
      variant: "heading-md/semibold",
      className: h.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, a.jsx)(u.Tooltip, {
      text: M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !l,
      tooltipContentClassName: h.unsentTooltipContent,
      children: e => (0, a.jsx)("div", {
        className: h.userAvatarProgressBarUnit,
        ...e,
        children: n
      })
    })
  },
  D = e => {
    let {
      numSentReferrals: t,
      placement: s
    } = e;
    return (0, a.jsxs)("div", {
      className: h.avatarProgressBarUnitConnectorContainer,
      children: [(0, a.jsx)("div", {
        className: h.avatarProgressBarUnitConnectorBase
      }), (0, a.jsx)("div", {
        className: l()({
          [h.fullHighlight]: t > s,
          [h.halfHighlight]: t === s
        })
      })]
    })
  },
  b = e => {
    let {
      userRecords: t
    } = e, s = t.length, i = s < 1 ? null : t[0], r = s < 2 ? null : t[1], l = s < 3 ? null : t[2];
    return (0, a.jsxs)("div", {
      className: h.userAvatarProgressBarContainer,
      children: [(0, a.jsx)(j, {
        userRecord: i,
        placement: 1
      }), (0, a.jsx)(D, {
        numSentReferrals: s,
        placement: 1
      }), (0, a.jsx)(j, {
        userRecord: r,
        placement: 2
      }), (0, a.jsx)(D, {
        numSentReferrals: s,
        placement: 2
      }), (0, a.jsx)(j, {
        userRecord: l,
        placement: 3
      })]
    })
  },
  U = (e, t, s, a) => e ? M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
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
  } = e, r = (0, n.useStateFromStoresArray)([S.default], () => S.default.getSentUserIds()), o = (0, n.useStateFromStoresArray)([T.default], () => r.map(e => T.default.getUser(e)).filter(e => null != e)), c = i.useMemo(() => o.map(e => new f.default(e)), [o]), {
    subscriberHomeVariant: C
  } = p.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), A = C === p.SubscriberHomeVariant.VARIANT_2;
  i.useEffect(() => {
    r.forEach(e => {
      (0, d.getUser)(e)
    })
  }, [r]);
  let N = r.length,
    g = 3 === N,
    O = R.default.getArticleURL(P.HelpdeskArticles.REFERRAL_PROGRAM),
    j = g ? M.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : M.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: D
    } = (0, E.default)(_.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    y = i.useRef(null),
    [B, G] = i.useState(!1),
    k = () => {
      if (null != y.current) {
        let {
          clientWidth: e
        } = y.current;
        G(e <= 568)
      }
    };
  i.useEffect(() => (k(), window.addEventListener("resize", k), () => {
    window.removeEventListener("resize", k)
  }), []);
  let H = (0, a.jsxs)(a.Fragment, {
    children: [g ? (0, a.jsx)(x, {}) : (0, a.jsx)(v, {}), (0, a.jsxs)("div", {
      className: l()(h.expandedProgressBarContent, {
        [h.expandedProgressBarContentVariant1]: !A,
        [h.expandedProgressBarContentVariant2]: A
      }),
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-xxl/extrabold",
        className: h.expandedProgressBarHeader,
        children: j
      }), (0, a.jsx)(b, {
        userRecords: c
      }), (0, a.jsx)(u.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: U(g, N > 0, r.length, O)
      }), (0, a.jsxs)("div", {
        className: l()(h.expandedProgressBarButtonContainer, {
          [h.expandedProgressBarButtonContainerMinLayout]: B && !t,
          [h.expandedProgressBarButtonContainerLayout]: !B && !t
        }),
        children: [!t && !A && (0, a.jsx)(m.default, {
          color: u.ButtonColors.CUSTOM,
          buttonText: M.default.Messages.GIFT_NITRO,
          className: l()(h.expandedProgressBarGiftingCTA, {
            [h.expandedProgressBarGiftingCTAMinLayout]: B && !t,
            [h.expandedProgressBarGiftingCTALayout]: !B && !t
          }),
          look: u.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, a.jsx)(I.default, {
          className: h.expandedProgressBarSelectFriendsCTA,
          color: u.ButtonColors.CUSTOM,
          onClick: () => {
            (0, u.openModalLazy)(async () => {
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
            className: h.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, a.jsx)("img", {
              src: L,
              alt: "",
              className: h.expandedProgressBarSelectFriendsIcon
            }), g ? M.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : M.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, a.jsx)(E.AnalyticsLocationProvider, {
    value: D,
    children: (0, a.jsx)("div", {
      ref: y,
      className: l()({
        [h.expandedProgressBarContainer]: !t,
        [h.expandedProgressBarContainerSettingsPage]: t,
        [h.expandedProgressBarContainerVariant1]: !A && !t,
        [h.expandedProgressBarContainerVariant2]: A && !t,
        [h.allReferralsSentBorder]: 3 === r.length
      }),
      children: H
    })
  })
}