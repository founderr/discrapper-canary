s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  l = s(442837),
  o = s(481060),
  c = s(232567),
  E = s(100527),
  _ = s(906732),
  u = s(204197),
  d = s(598077),
  T = s(594174),
  I = s(626135),
  R = s(63063),
  A = s(276444),
  N = s(520540),
  C = s(197115),
  g = s(119269),
  m = s(981631),
  M = s(689938),
  S = s(695314),
  p = s(691766);
let h = e => {
    let {
      userRecord: t,
      placement: s
    } = e, {
      avatarSrc: a,
      eventHandlers: i
    } = (0, u.Z)({
      user: t,
      size: o.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }), r = null != t, l = r ? (0, n.jsx)(o.Avatar, {
      src: a,
      "aria-label": t.username,
      size: o.AvatarSizes.SIZE_32,
      ...i
    }) : (0, n.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: S.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, n.jsx)(o.Tooltip, {
      text: M.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !r,
      tooltipContentClassName: S.unsentTooltipContent,
      children: e => (0, n.jsx)("div", {
        className: S.userAvatarProgressBarUnit,
        ...e,
        children: l
      })
    })
  },
  f = e => {
    let {
      numSentReferrals: t,
      placement: s
    } = e;
    return (0, n.jsxs)("div", {
      className: S.avatarProgressBarUnitConnectorContainer,
      children: [(0, n.jsx)("div", {
        className: S.avatarProgressBarUnitConnectorBase
      }), (0, n.jsx)("div", {
        className: r()({
          [S.fullHighlight]: t > s,
          [S.halfHighlight]: t === s
        })
      })]
    })
  },
  O = e => {
    let {
      userRecords: t
    } = e, s = t.length, a = s < 1 ? null : t[0], i = s < 2 ? null : t[1], r = s < 3 ? null : t[2];
    return (0, n.jsxs)("div", {
      className: S.userAvatarProgressBarContainer,
      children: [(0, n.jsx)(h, {
        userRecord: a,
        placement: 1
      }), (0, n.jsx)(f, {
        numSentReferrals: s,
        placement: 1
      }), (0, n.jsx)(h, {
        userRecord: i,
        placement: 2
      }), (0, n.jsx)(f, {
        numSentReferrals: s,
        placement: 2
      }), (0, n.jsx)(h, {
        userRecord: r,
        placement: 3
      })]
    })
  },
  x = (e, t, s, n) => e ? M.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: n
  }) : t ? M.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - s,
    helpdeskArticle: n
  }) : M.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: n
  });
t.Z = e => {
  let {
    isInSettings: t = !1
  } = e, i = (0, l.Wu)([A.Z], () => A.Z.getSentUserIds()), u = (0, l.Wu)([T.default], () => i.map(e => T.default.getUser(e)).filter(e => null != e)), h = a.useMemo(() => u.map(e => new d.Z(e)), [u]), {
    subscriberHomeVariant: f
  } = N.g.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), L = f === N.p.VARIANT_2;
  a.useEffect(() => {
    i.forEach(e => {
      (0, c.PR)(e)
    })
  }, [i]);
  let P = i.length,
    v = 3 === P,
    Z = R.Z.getArticleURL(m.BhN.REFERRAL_PROGRAM),
    b = v ? M.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : M.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: D
    } = (0, _.ZP)(E.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    U = a.useRef(null),
    [j, G] = a.useState(!1),
    B = () => {
      if (null != U.current) {
        let {
          clientWidth: e
        } = U.current;
        G(e <= 568)
      }
    };
  a.useEffect(() => (B(), window.addEventListener("resize", B), () => {
    window.removeEventListener("resize", B)
  }), []);
  let H = (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(g.Z, {
      percentage: P / 3 * 100,
      progressCircleVariation: g.Q.NITRO_LOGO,
      iconClassName: r()({
        [S.referralProgressBarIcon]: !t,
        [S.referralProgressBarIconSettings]: t
      })
    }), (0, n.jsxs)("div", {
      className: S.expandedProgressBarContent,
      children: [(0, n.jsx)(o.Heading, {
        variant: t ? "heading-xl/extrabold" : "heading-xxl/extrabold",
        className: S.expandedProgressBarHeader,
        children: b
      }), (0, n.jsx)(O, {
        userRecords: h
      }), (0, n.jsx)(o.Text, {
        variant: t ? "text-sm/normal" : "text-lg/medium",
        children: x(v, P > 0, i.length, Z)
      }), (0, n.jsxs)("div", {
        className: r()(S.expandedProgressBarButtonContainer, {
          [S.expandedProgressBarButtonContainerMinLayout]: j && !t,
          [S.expandedProgressBarButtonContainerLayout]: !j && !t
        }),
        children: [!t && !L && (0, n.jsx)(C.Z, {
          color: o.ButtonColors.CUSTOM,
          buttonText: M.Z.Messages.GIFT_NITRO,
          className: r()(S.expandedProgressBarGiftingCTA, {
            [S.expandedProgressBarGiftingCTAMinLayout]: j && !t,
            [S.expandedProgressBarGiftingCTALayout]: !j && !t
          }),
          look: o.ButtonLooks.OUTLINED,
          isGift: !0
        }), (0, n.jsx)(o.ShinyButton, {
          className: S.expandedProgressBarSelectFriendsCTA,
          color: o.ButtonColors.CUSTOM,
          onClick: () => {
            I.default.track(m.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, {
              location_stack: D
            }), (0, o.openModalLazy)(async () => {
              let {
                default: e
              } = await Promise.all([s.e("99387"), s.e("47435")]).then(s.bind(s, 204387));
              return t => (0, n.jsx)(e, {
                ...t,
                sourceAnalyticsLocations: D
              })
            })
          },
          onlyShineOnHover: !0,
          children: (0, n.jsxs)("div", {
            className: S.expandedProgressBarSelectFriendsCTAInner,
            children: [(0, n.jsx)("img", {
              src: p,
              alt: "",
              className: S.expandedProgressBarSelectFriendsIcon
            }), v ? M.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : M.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
          })
        })]
      })]
    })]
  });
  return (0, n.jsx)(_.Gt, {
    value: D,
    children: (0, n.jsx)("div", {
      ref: U,
      className: r()({
        [S.expandedProgressBarContainer]: !t,
        [S.expandedProgressBarContainerSettingsPage]: t,
        [S.expandedProgressBarContainerVariant1]: !L && !t,
        [S.expandedProgressBarContainerVariant2]: L && !t,
        [S.allReferralsSentBorder]: 3 === i.length
      }),
      children: H
    })
  })
}