t(47120);
var n = t(735250),
  a = t(470079),
  r = t(120356),
  i = t.n(r),
  l = t(442837),
  o = t(481060),
  _ = t(232567),
  c = t(100527),
  E = t(906732),
  u = t(204197),
  R = t(598077),
  d = t(594174),
  I = t(626135),
  T = t(63063),
  A = t(276444),
  M = t(520540),
  S = t(197115),
  N = t(119269),
  p = t(981631),
  m = t(689938),
  C = t(695314),
  g = t(691766);
let P = e => {
    let {
      userRecord: s,
      placement: t
    } = e, {
      avatarSrc: a,
      eventHandlers: r
    } = (0, u.Z)({
      user: s,
      size: o.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }), i = null != s, l = i ? (0, n.jsx)(o.Avatar, {
      src: a,
      "aria-label": s.username,
      size: o.AvatarSizes.SIZE_32,
      ...r
    }) : (0, n.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: C.userAvatarProgressBarUnitNum,
      children: t
    });
    return (0, n.jsx)(o.Tooltip, {
      text: m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !i,
      tooltipContentClassName: C.unsentTooltipContent,
      children: e => (0, n.jsx)("div", {
        className: C.userAvatarProgressBarUnit,
        ...e,
        children: l
      })
    })
  },
  O = e => {
    let {
      numSentReferrals: s,
      placement: t
    } = e;
    return (0, n.jsxs)("div", {
      className: C.avatarProgressBarUnitConnectorContainer,
      children: [(0, n.jsx)("div", {
        className: C.avatarProgressBarUnitConnectorBase
      }), (0, n.jsx)("div", {
        className: i()({
          [C.fullHighlight]: s > t,
          [C.halfHighlight]: s === t
        })
      })]
    })
  },
  f = e => {
    let {
      userRecords: s
    } = e, t = s.length, a = t < 1 ? null : s[0], r = t < 2 ? null : s[1], i = t < 3 ? null : s[2];
    return (0, n.jsxs)("div", {
      className: C.userAvatarProgressBarContainer,
      children: [(0, n.jsx)(P, {
        userRecord: a,
        placement: 1
      }), (0, n.jsx)(O, {
        numSentReferrals: t,
        placement: 1
      }), (0, n.jsx)(P, {
        userRecord: r,
        placement: 2
      }), (0, n.jsx)(O, {
        numSentReferrals: t,
        placement: 2
      }), (0, n.jsx)(P, {
        userRecord: i,
        placement: 3
      })]
    })
  },
  x = (e, s, t, n) => e ? m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: n
  }) : s ? m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - t,
    helpdeskArticle: n
  }) : m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: n
  });
s.Z = e => {
  let {
    isInSettings: s = !1
  } = e, r = (0, l.Wu)([A.Z], () => A.Z.getSentUserIds()), u = (0, l.Wu)([d.default], () => r.map(e => d.default.getUser(e)).filter(e => null != e)), P = a.useMemo(() => u.map(e => new R.Z(e)), [u]), {
    subscriberHomeVariant: O
  } = M.g.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), L = O === M.p.VARIANT_2;
  a.useEffect(() => {
    r.forEach(e => {
      (0, _.PR)(e)
    })
  }, [r]);
  let h = r.length,
    b = 3 === h,
    v = T.Z.getArticleURL(p.BhN.REFERRAL_PROGRAM),
    Z = b ? m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : m.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: D
    } = (0, E.ZP)(c.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    U = a.useRef(null),
    [B, j] = a.useState(!1),
    G = () => {
      if (null != U.current) {
        let {
          clientWidth: e
        } = U.current;
        j(e <= 568)
      }
    };
  a.useEffect(() => (G(), window.addEventListener("resize", G), () => {
    window.removeEventListener("resize", G)
  }), []);
  let W = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(N.Z, {
      percentage: h / 3 * 100,
      progressCircleVariation: N.Q.NITRO_LOGO,
      iconClassName: i()({
        [C.referralProgressBarIcon]: !s,
        [C.referralProgressBarIconSettings]: s
      })
    }), (0, n.jsxs)("div", {
      className: C.expandedProgressBarContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: s ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: C.expandedProgressBarHeader,
        children: Z
      }), (0, n.jsx)(f, {
        userRecords: P
      }), (0, n.jsx)(o.Text, {
        variant: s ? "text-sm/normal" : "text-lg/medium",
        children: x(b, h > 0, r.length, v)
      }), (0, n.jsxs)("div", {
        className: i()(C.expandedProgressBarButtonContainer, {
          [C.expandedProgressBarButtonContainerMinLayout]: B && !s,
          [C.expandedProgressBarButtonContainerLayout]: !B && !s
        }),
        children: [!s && !L && (0, n.jsx)(S.Z, {
          color: o.ButtonColors.CUSTOM,
          buttonText: m.Z.Messages.GIFT_NITRO,
          className: i()(C.expandedProgressBarGiftingCTA, {
            [C.expandedProgressBarGiftingCTAMinLayout]: B && !s,
            [C.expandedProgressBarGiftingCTALayout]: !B && !s
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, n.jsx)(o.ShinyButton, {
          className: C.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            I.default.track(p.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: D
            }), (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([t.e("99387"), t.e("47435")]).then(t.bind(t, 204387));
              return s => (0, n.jsx)(e, {
                ...s,
                sourceAnalyticsLocations: D
              })
            })
          },
          onlyShineOnHover: !0,
          children: (0, n.jsxs)("div", {
            className: C.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, n.jsx)("img", {
              src: g,
              alt: "",
              className: C.expandedProgressBarSelectFriendsIcon
            }), b ? m.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : m.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, n.jsx)(E.Gt, {
    value: D,
    children: (0, n.jsx)("div", {
      ref: U,
      className: i()({
        [C.expandedProgressBarContainer]: !s,
        [C.expandedProgressBarContainerSettingsPage]: s,
        [C.expandedProgressBarContainerVariant1]: !L && !s,
        [C.expandedProgressBarContainerVariant2]: L && !s,
        [C.allReferralsSentBorder]: 3 === r.length
      }),
      children: W
    })
  })
}