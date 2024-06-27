n(47120);
var s = n(735250),
  a = n(470079),
  i = n(120356),
  r = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(232567),
  d = n(100527),
  _ = n(906732),
  E = n(204197),
  u = n(598077),
  T = n(594174),
  I = n(626135),
  R = n(63063),
  C = n(276444),
  g = n(520540),
  p = n(197115),
  A = n(119269),
  N = n(981631),
  m = n(689938),
  S = n(695314),
  f = n(691766);
let M = e => {
    let {
      userRecord: t,
      placement: n
    } = e, {
      avatarSrc: a,
      eventHandlers: i
    } = (0, E.Z)({
      user: t,
      size: o.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }), r = null != t, l = r ? (0, s.jsx)(o.Avatar, {
      src: a,
      "aria-label": t.username,
      size: o.AvatarSizes.SIZE_32,
      ...i
    }) : (0, s.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: S.userAvatarProgressBarUnitNum,
      children: n
    });
    return (0, s.jsx)(o.Tooltip, {
      text: m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !r,
      tooltipContentClassName: S.unsentTooltipContent,
      children: e => (0, s.jsx)("div", {
        className: S.userAvatarProgressBarUnit,
        ...e,
        children: l
      })
    })
  },
  h = e => {
    let {
      numSentReferrals: t,
      placement: n
    } = e;
    return (0, s.jsxs)("div", {
      className: S.avatarProgressBarUnitConnectorContainer,
      children: [(0, s.jsx)("div", {
        className: S.avatarProgressBarUnitConnectorBase
      }), (0, s.jsx)("div", {
        className: r()({
          [S.fullHighlight]: t > n,
          [S.halfHighlight]: t === n
        })
      })]
    })
  },
  b = e => {
    let {
      userRecords: t
    } = e, n = t.length, a = n < 1 ? null : t[0], i = n < 2 ? null : t[1], r = n < 3 ? null : t[2];
    return (0, s.jsxs)("div", {
      className: S.userAvatarProgressBarContainer,
      children: [(0, s.jsx)(M, {
        userRecord: a,
        placement: 1
      }), (0, s.jsx)(h, {
        numSentReferrals: n,
        placement: 1
      }), (0, s.jsx)(M, {
        userRecord: i,
        placement: 2
      }), (0, s.jsx)(h, {
        numSentReferrals: n,
        placement: 2
      }), (0, s.jsx)(M, {
        userRecord: r,
        placement: 3
      })]
    })
  },
  x = (e, t, n, s) => e ? m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: s
  }) : t ? m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - n,
    helpdeskArticle: s
  }) : m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: s
  });
t.Z = e => {
  let {
    isInSettings: t = !1
  } = e, i = (0, l.Wu)([C.Z], () => C.Z.getSentUserIds()), E = (0, l.Wu)([T.default], () => i.map(e => T.default.getUser(e)).filter(e => null != e)), M = a.useMemo(() => E.map(e => new u.Z(e)), [E]), {
    subscriberHomeVariant: h
  } = g.g.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), O = h === g.p.VARIANT_2;
  a.useEffect(() => {
    i.forEach(e => {
      (0, c.PR)(e)
    })
  }, [i]);
  let P = i.length,
    L = 3 === P,
    v = R.Z.getArticleURL(N.BhN.REFERRAL_PROGRAM),
    Z = L ? m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : m.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: D
    } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    B = a.useRef(null),
    [U, j] = a.useState(!1),
    G = () => {
      if (null != B.current) {
        let {
          clientWidth: e
        } = B.current;
        j(e <= 568)
      }
    };
  a.useEffect(() => (G(), window.addEventListener("resize", G), () => {
    window.removeEventListener("resize", G)
  }), []);
  let H = (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(A.Z, {
      percentage: P / 3 * 100,
      progressCircleVariation: A.Q.NITRO_LOGO,
      iconClassName: r()({
        [S.referralProgressBarIcon]: !t,
        [S.referralProgressBarIconSettings]: t
      })
    }), (0, s.jsxs)("div", {
      className: S.expandedProgressBarContent,
      children: [(0, s.jsx)(o.Heading, {
        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: S.expandedProgressBarHeader,
        children: Z
      }), (0, s.jsx)(b, {
        userRecords: M
      }), (0, s.jsx)(o.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: x(L, P > 0, i.length, v)
      }), (0, s.jsxs)("div", {
        className: r()(S.expandedProgressBarButtonContainer, {
          [S.expandedProgressBarButtonContainerMinLayout]: U && !t,
          [S.expandedProgressBarButtonContainerLayout]: !U && !t
        }),
        children: [!t && !O && (0, s.jsx)(p.Z, {
          color: o.ButtonColors.CUSTOM,
          buttonText: m.Z.Messages.GIFT_NITRO,
          className: r()(S.expandedProgressBarGiftingCTA, {
            [S.expandedProgressBarGiftingCTAMinLayout]: U && !t,
            [S.expandedProgressBarGiftingCTALayout]: !U && !t
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, s.jsx)(o.ShinyButton, {
          className: S.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            I.default.track(N.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: D
            }), (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await n.e("47435").then(n.bind(n, 204387));
              return t => (0, s.jsx)(e, {
                ...t,
                sourceAnalyticsLocations: D
              })
            })
          },
          onlyShineOnHover: !0,
          children: (0, s.jsxs)("div", {
            className: S.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, s.jsx)("img", {
              src: f,
              alt: "",
              className: S.expandedProgressBarSelectFriendsIcon
            }), L ? m.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : m.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, s.jsx)(_.Gt, {
    value: D,
    children: (0, s.jsx)("div", {
      ref: B,
      className: r()({
        [S.expandedProgressBarContainer]: !t,
        [S.expandedProgressBarContainerSettingsPage]: t,
        [S.expandedProgressBarContainerVariant1]: !O && !t,
        [S.expandedProgressBarContainerVariant2]: O && !t,
        [S.allReferralsSentBorder]: 3 === i.length
      }),
      children: H
    })
  })
}