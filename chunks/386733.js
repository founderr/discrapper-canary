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
  m = s("63063"),
  I = s("276444"),
  S = s("520540"),
  p = s("197115"),
  A = s("119269"),
  g = s("981631"),
  N = s("689938"),
  M = s("847548"),
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
      className: M.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, a.jsx)(o.Tooltip, {
      text: N.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !n,
      tooltipContentClassName: M.unsentTooltipContent,
      children: e => (0, a.jsx)("div", {
        className: M.userAvatarProgressBarUnit,
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
      className: M.avatarProgressBarUnitConnectorContainer,
      children: [(0, a.jsx)("div", {
        className: M.avatarProgressBarUnitConnectorBase
      }), (0, a.jsx)("div", {
        className: n()({
          [M.fullHighlight]: t > s,
          [M.halfHighlight]: t === s
        })
      })]
    })
  },
  x = e => {
    let {
      userRecords: t
    } = e, s = t.length, r = s < 1 ? null : t[0], i = s < 2 ? null : t[1], n = s < 3 ? null : t[2];
    return (0, a.jsxs)("div", {
      className: M.userAvatarProgressBarContainer,
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
  b = (e, t, s, a) => e ? N.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: a
  }) : t ? N.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - s,
    helpdeskArticle: a
  }) : N.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: a
  });
t.default = e => {
  let {
    isInSettings: t = !1
  } = e, i = (0, l.useStateFromStoresArray)([I.default], () => I.default.getSentUserIds()), _ = (0, l.useStateFromStoresArray)([R.default], () => i.map(e => R.default.getUser(e)).filter(e => null != e)), P = r.useMemo(() => _.map(e => new E.default(e)), [_]), {
    subscriberHomeVariant: O
  } = S.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), h = O === S.SubscriberHomeVariant.VARIANT_2;
  r.useEffect(() => {
    i.forEach(e => {
      (0, u.getUser)(e)
    })
  }, [i]);
  let D = i.length,
    v = 3 === D,
    L = m.default.getArticleURL(g.HelpdeskArticles.REFERRAL_PROGRAM),
    U = v ? N.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : N.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: B
    } = (0, d.default)(c.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    k = r.useRef(null),
    [j, G] = r.useState(!1),
    y = () => {
      if (null != k.current) {
        let {
          clientWidth: e
        } = k.current;
        G(e <= 568)
      }
    };
  r.useEffect(() => (y(), window.addEventListener("resize", y), () => {
    window.removeEventListener("resize", y)
  }), []);
  let H = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A.default, {
      percentage: D / 3 * 100,
      progressCircleVariation: A.ProgressCircleVariation.NITRO_LOGO,
      iconClassName: n()({
        [M.referralProgressBarIcon]: !t,
        [M.referralProgressBarIconSettings]: t
      })
    }), (0, a.jsxs)("div", {
      className: M.expandedProgressBarContent,
      children: [(0, a.jsx)(o.Heading, {
        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: M.expandedProgressBarHeader,
        children: U
      }), (0, a.jsx)(x, {
        userRecords: P
      }), (0, a.jsx)(o.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: b(v, D > 0, i.length, L)
      }), (0, a.jsxs)("div", {
        className: n()(M.expandedProgressBarButtonContainer, {
          [M.expandedProgressBarButtonContainerMinLayout]: j && !t,
          [M.expandedProgressBarButtonContainerLayout]: !j && !t
        }),
        children: [!t && !h && (0, a.jsx)(p.default, {
          color: o.ButtonColors.CUSTOM,
          buttonText: N.default.Messages.GIFT_NITRO,
          className: n()(M.expandedProgressBarGiftingCTA, {
            [M.expandedProgressBarGiftingCTAMinLayout]: j && !t,
            [M.expandedProgressBarGiftingCTALayout]: !j && !t
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, a.jsx)(T.default, {
          className: M.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            f.default.track(g.AnalyticEvents.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
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
            className: M.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, a.jsx)("img", {
              src: C,
              alt: "",
              className: M.expandedProgressBarSelectFriendsIcon
            }), v ? N.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : N.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, a.jsx)(d.AnalyticsLocationProvider, {
    value: B,
    children: (0, a.jsx)("div", {
      ref: k,
      className: n()({
        [M.expandedProgressBarContainer]: !t,
        [M.expandedProgressBarContainerSettingsPage]: t,
        [M.expandedProgressBarContainerVariant1]: !h && !t,
        [M.expandedProgressBarContainerVariant2]: h && !t,
        [M.allReferralsSentBorder]: 3 === i.length
      }),
      children: H
    })
  })
}