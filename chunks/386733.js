"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("120356"),
  l = s.n(r),
  n = s("581051"),
  o = s("452165"),
  u = s("442837"),
  d = s("524437"),
  c = s("865824"),
  _ = s("780384"),
  E = s("481060"),
  C = s("232567"),
  f = s("410030"),
  T = s("100527"),
  I = s("906732"),
  R = s("605236"),
  S = s("963249"),
  p = s("204197"),
  m = s("675478"),
  A = s("598077"),
  g = s("594174"),
  N = s("976644"),
  O = s("63063"),
  P = s("276444"),
  M = s("520540"),
  h = s("197115"),
  x = s("550473"),
  L = s("578767"),
  v = s("228059"),
  j = s("110377"),
  D = s("831005"),
  b = s("981631"),
  U = s("689938"),
  y = s("347584"),
  B = s("691766");
let G = e => {
    let {
      height: t,
      width: s
    } = e, i = (0, f.useTheme)();
    return (0, _.isThemeLight)(i) ? (0, a.jsx)(L.default, {
      height: t,
      width: s
    }) : (0, a.jsx)(x.default, {
      height: t,
      width: s
    })
  },
  k = e => {
    let {
      height: t,
      width: s
    } = e, i = (0, f.useTheme)();
    return (0, _.isThemeLight)(i) ? (0, a.jsx)(j.default, {
      height: t,
      width: s
    }) : (0, a.jsx)(v.default, {
      height: t,
      width: s
    })
  },
  H = e => {
    let {
      userRecord: t,
      placement: s
    } = e, {
      avatarSrc: i,
      eventHandlers: r
    } = (0, p.default)({
      user: t,
      size: E.AvatarSizes.SIZE_32,
      animateOnHover: !0
    }), l = null != t, n = l ? (0, a.jsx)(E.Avatar, {
      src: i,
      "aria-label": t.username,
      size: E.AvatarSizes.SIZE_32,
      ...r
    }) : (0, a.jsx)(E.Heading, {
      variant: "heading-md/semibold",
      className: y.userAvatarProgressBarUnitNum,
      children: s
    });
    return (0, a.jsx)(E.Tooltip, {
      text: U.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
      shouldShow: !l,
      tooltipContentClassName: y.unsentTooltipContent,
      children: e => (0, a.jsx)("div", {
        className: y.userAvatarProgressBarUnit,
        ...e,
        children: n
      })
    })
  },
  F = e => {
    let {
      numSentReferrals: t,
      placement: s
    } = e;
    return (0, a.jsxs)("div", {
      className: y.avatarProgressBarUnitConnectorContainer,
      children: [(0, a.jsx)("div", {
        className: y.avatarProgressBarUnitConnectorBase
      }), (0, a.jsx)("div", {
        className: l()({
          [y.fullHighlight]: t > s,
          [y.halfHighlight]: t === s
        })
      })]
    })
  },
  w = e => {
    let {
      userRecords: t
    } = e, s = t.length, i = s < 1 ? null : t[0], r = s < 2 ? null : t[1], l = s < 3 ? null : t[2];
    return (0, a.jsxs)("div", {
      className: y.userAvatarProgressBarContainer,
      children: [(0, a.jsx)(H, {
        userRecord: i,
        placement: 1
      }), (0, a.jsx)(F, {
        numSentReferrals: s,
        placement: 1
      }), (0, a.jsx)(H, {
        userRecord: r,
        placement: 2
      }), (0, a.jsx)(F, {
        numSentReferrals: s,
        placement: 2
      }), (0, a.jsx)(H, {
        userRecord: l,
        placement: 3
      })]
    })
  },
  W = (e, t, s, a) => e ? U.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED_NO_REFRESH.format({
    helpdeskArticle: a
  }) : t ? U.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_AT_LEAST_ONE_SHARED.format({
    numFriends: 3 - s,
    helpdeskArticle: a
  }) : U.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER.format({
    numFriends: 3,
    helpdeskArticle: a
  });
t.default = e => {
  let {
    isInSettings: t = !1
  } = e, r = (0, u.useStateFromStoresArray)([P.default], () => P.default.getSentUserIds()), _ = (0, u.useStateFromStoresArray)([g.default], () => r.map(e => g.default.getUser(e)).filter(e => null != e)), f = i.useMemo(() => _.map(e => new A.default(e)), [_]), {
    subscriberHomeVariant: p
  } = M.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), x = p === M.SubscriberHomeVariant.VARIANT_2;
  i.useEffect(() => {
    r.forEach(e => {
      (0, C.getUser)(e)
    })
  }, [r]);
  let L = r.length,
    v = 3 === L,
    j = (0, R.useIsDismissibleContentDismissed)(d.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE),
    H = j ? () => (0, m.removeDismissedContent)(d.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE) : () => (0, R.markDismissibleContentAsDismissed)(d.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE),
    F = O.default.getArticleURL(b.HelpdeskArticles.REFERRAL_PROGRAM),
    K = v ? U.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : U.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: V
    } = (0, I.default)(T.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    Y = () => {
      (0, E.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([s.e("99387"), s.e("47435")]).then(s.bind(s, "204387"));
        return t => (0, a.jsx)(e, {
          ...t
        })
      })
    },
    z = (0, a.jsxs)(a.Fragment, {
      children: [v ? (0, a.jsx)(G, {}) : (0, a.jsx)(k, {}), (0, a.jsxs)("div", {
        className: l()(y.expandedProgressBarContent, {
          [y.expandedProgressBarContentVariant1]: !x,
          [y.expandedProgressBarContentVariant2]: x
        }),
        children: [(0, a.jsx)(E.Heading, {
          variant: "heading-xxl/extrabold",
          className: y.expandedProgressBarHeader,
          children: K
        }), (0, a.jsx)(w, {
          userRecords: f
        }), (0, a.jsx)(E.Text, {
          variant: t ? "text-sm/normal" : "text-lg/medium",
          children: W(v, L > 0, r.length, F)
        }), (0, a.jsxs)("div", {
          className: y.expandedProgressBarButtonContainer,
          children: [!t && !x && (0, a.jsx)(h.default, {
            color: E.ButtonColors.CUSTOM,
            buttonText: U.default.Messages.GIFT_NITRO,
            className: y.expandedProgressBarGiftingCTA,
            look: E.ButtonLooks.OUTLINED,
            isGift: !0
          }), (0, a.jsx)(N.default, {
            className: y.expandedProgressBarSelectFriendsCTA,
            color: E.ButtonColors.CUSTOM,
            onClick: Y,
            onlyShineOnHover: !0,
            children: (0, a.jsxs)("div", {
              className: y.expandedProgressBarSelectFriendsCTAInner,
              children: [(0, a.jsx)("img", {
                src: B,
                alt: "",
                className: y.expandedProgressBarSelectFriendsIcon
              }), v ? U.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : U.default.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS]
            })
          })]
        })]
      })]
    });
  return j && (z = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: y.collapsedProgressBarIconContainer,
      children: v ? (0, a.jsx)(G, {
        height: t ? 96 : 68,
        width: t ? 66 : 87
      }) : (0, a.jsx)(k, {
        height: t ? 96 : 68,
        width: t ? 66 : 87
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(E.Heading, {
        variant: "heading-xl/extrabold",
        children: K
      }), (0, a.jsx)(w, {
        userRecords: f
      })]
    }), (0, a.jsxs)("div", {
      className: y.collapsedProgressBarButtons,
      children: [!t && !x && (0, a.jsx)(E.Clickable, {
        onClick: () => (0, S.default)({
          isGift: !0,
          analyticsLocations: V
        }),
        className: y.collapsedGiftButton,
        children: (0, a.jsx)(o.GiftIcon, {
          className: y.giftIcon,
          color: E.tokens.colors.WHITE
        })
      }), (0, a.jsx)(E.Clickable, {
        className: y.collapsedShareReferralButton,
        onClick: Y,
        children: (0, a.jsx)(D.default, {
          width: 28,
          height: 28
        })
      })]
    })]
  })), (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: V,
    children: (0, a.jsxs)("div", {
      className: l()({
        [y.expandedProgressBarContainer]: !j && !t,
        [y.expandedProgressBarContainerSettingsPage]: !j && t,
        [y.collapsedProgressBarContainer]: j && !t,
        [y.collapsedProgressBarContainerSettingsPage]: j && t,
        [y.expandedProgressBarContainerVariant1]: !x && !t,
        [y.expandedProgressBarContainerVariant2]: x && !t,
        [y.allReferralsSentBorder]: 3 === r.length
      }),
      children: [(0, a.jsx)(E.Clickable, {
        className: l()(y.collapseToggle, {
          [y.collapseToggleInSettings]: t
        }),
        onClick: () => H(),
        children: j ? (0, a.jsx)(n.ChevronSmallDownIcon, {
          width: t ? 20 : 24,
          height: t ? 20 : 24
        }) : (0, a.jsx)(c.ChevronSmallUpIcon, {
          width: t ? 20 : 24,
          height: t ? 20 : 24
        })
      }), z]
    })
  })
}