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
  d = t(598077),
  R = t(594174),
  I = t(626135),
  T = t(63063),
  A = t(276444),
  M = t(520540),
  S = t(197115),
  N = t(119269),
  p = t(981631),
  m = t(689938),
  g = t(695314),
  C = t(691766);
let f = e => {
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
      className: g.userAvatarProgressBarUnitNum,
      children: t
    });
    return (0, n.jsx)(o.Tooltip, {
      text: m.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !i,
      tooltipContentClassName: g.unsentTooltipContent,
      children: e => (0, n.jsx)("div", {
        className: g.userAvatarProgressBarUnit,
        ...e,
        children: l
      })
    })
  },
  P = e => {
    let {
      numSentReferrals: s,
      placement: t
    } = e;
    return (0, n.jsxs)("div", {
      className: g.avatarProgressBarUnitConnectorContainer,
      children: [(0, n.jsx)("div", {
        className: g.avatarProgressBarUnitConnectorBase
      }), (0, n.jsx)("div", {
        className: i()({
          [g.fullHighlight]: s > t,
          [g.halfHighlight]: s === t
        })
      })]
    })
  },
  O = e => {
    let {
      userRecords: s
    } = e, t = s.length, a = t < 1 ? null : s[0], r = t < 2 ? null : s[1], i = t < 3 ? null : s[2];
    return (0, n.jsxs)("div", {
      className: g.userAvatarProgressBarContainer,
      children: [(0, n.jsx)(f, {
        userRecord: a,
        placement: 1
      }), (0, n.jsx)(P, {
        numSentReferrals: t,
        placement: 1
      }), (0, n.jsx)(f, {
        userRecord: r,
        placement: 2
      }), (0, n.jsx)(P, {
        numSentReferrals: t,
        placement: 2
      }), (0, n.jsx)(f, {
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
  } = e, r = (0, l.Wu)([A.Z], () => A.Z.getSentUserIds()), u = (0, l.Wu)([R.default], () => r.map(e => R.default.getUser(e)).filter(e => null != e)), f = a.useMemo(() => u.map(e => new d.Z(e)), [u]), {
    subscriberHomeVariant: P
  } = M.g.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), h = P === M.p.VARIANT_2;
  a.useEffect(() => {
    r.forEach(e => {
      (0, _.PR)(e)
    })
  }, [r]);
  let L = r.length,
    b = 3 === L,
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
  let H = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(N.Z, {
      percentage: L / 3 * 100,
      progressCircleVariation: N.Q.NITRO_LOGO,
      iconClassName: i()({
        [g.referralProgressBarIcon]: !s,
        [g.referralProgressBarIconSettings]: s
      })
    }), (0, n.jsxs)("div", {
      className: g.expandedProgressBarContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: s ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: g.expandedProgressBarHeader,
        children: Z
      }), (0, n.jsx)(O, {
        userRecords: f
      }), (0, n.jsx)(o.Text, {
        variant: s ? "text-sm/normal" : "text-lg/medium",
        children: x(b, L > 0, r.length, v)
      }), (0, n.jsxs)("div", {
        className: i()(g.expandedProgressBarButtonContainer, {
          [g.expandedProgressBarButtonContainerMinLayout]: B && !s,
          [g.expandedProgressBarButtonContainerLayout]: !B && !s
        }),
        children: [!s && !h && (0, n.jsx)(S.Z, {
          color: o.ButtonColors.CUSTOM,
          buttonText: m.Z.Messages.GIFT_NITRO,
          className: i()(g.expandedProgressBarGiftingCTA, {
            [g.expandedProgressBarGiftingCTAMinLayout]: B && !s,
            [g.expandedProgressBarGiftingCTALayout]: !B && !s
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, n.jsx)(o.ShinyButton, {
          className: g.expandedProgressBarSelectFriendsCTA,
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
            className: g.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, n.jsx)("img", {
              src: C,
              alt: "",
              className: g.expandedProgressBarSelectFriendsIcon
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
        [g.expandedProgressBarContainer]: !s,
        [g.expandedProgressBarContainerSettingsPage]: s,
        [g.expandedProgressBarContainerVariant1]: !h && !s,
        [g.expandedProgressBarContainerVariant2]: h && !s,
        [g.allReferralsSentBorder]: 3 === r.length
      }),
      children: H
    })
  })
}