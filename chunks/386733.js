"use strict";
s.r(t);
var a = s("735250"),
  i = s("470079"),
  r = s("803997"),
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
  h = s("520540"),
  M = s("197115"),
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
  W = (e, t, s, a) => e ? U.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_SUBHEADER_ALL_SHARED.format({
    numReferrals: 3,
    numMonths: 6,
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
  } = e, s = (0, u.useStateFromStoresArray)([P.default], () => P.default.getSentUserIds()), r = (0, u.useStateFromStoresArray)([g.default], () => s.map(e => g.default.getUser(e)).filter(e => null != e)), _ = i.useMemo(() => r.map(e => new A.default(e)), [r]), {
    subscriberHomeVariant: f
  } = h.ReferralProgramSender.useExperiment({
    location: "ReferralProgramProgressBar"
  }, {
    autoTrackExposure: !1
  }), p = f === h.SubscriberHomeVariant.VARIANT_2;
  i.useEffect(() => {
    s.forEach(e => {
      (0, C.getUser)(e)
    })
  }, [s]);
  let x = s.length,
    L = 3 === x,
    v = (0, R.useIsDismissibleContentDismissed)(d.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE),
    j = v ? () => (0, m.removeDismissedContent)(d.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE) : () => (0, R.markDismissibleContentAsDismissed)(d.DismissibleContent.REFERRAL_PROGRAM_PROGRESS_BAR_TOGGLE),
    H = O.default.getArticleURL(b.HelpdeskArticles.REFERRAL_PROGRAM),
    F = L ? U.default.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_HEADER_ALL_SHARED : U.default.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS,
    {
      analyticsLocations: K
    } = (0, I.default)(T.default.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
    V = (0, a.jsxs)(a.Fragment, {
      children: [L ? (0, a.jsx)(G, {}) : (0, a.jsx)(k, {}), (0, a.jsxs)("div", {
        className: l()(y.expandedProgressBarContent, {
          [y.expandedProgressBarContentVariant1]: !p,
          [y.expandedProgressBarContentVariant2]: p
        }),
        children: [(0, a.jsx)(E.Heading, {
          variant: "heading-xxl/extrabold",
          className: y.expandedProgressBarHeader,
          children: F
        }), (0, a.jsx)(w, {
          userRecords: _
        }), (0, a.jsx)(E.Text, {
          variant: t ? "text-sm/normal" : "text-lg/medium",
          children: W(L, x > 0, s.length, H)
        }), (0, a.jsxs)("div", {
          className: y.expandedProgressBarButtonContainer,
          children: [!t && !p && (0, a.jsx)(M.default, {
            color: E.ButtonColors.CUSTOM,
            buttonText: U.default.Messages.GIFT_NITRO,
            className: y.expandedProgressBarGiftingCTA,
            look: E.ButtonLooks.OUTLINED,
            isGift: !0
          }), (0, a.jsx)(N.default, {
            className: y.expandedProgressBarSelectFriendsCTA,
            color: E.ButtonColors.CUSTOM,
            onlyShineOnHover: !0,
            children: (0, a.jsxs)("div", {
              className: y.expandedProgressBarSelectFriendsCTAInner,
              children: [(0, a.jsx)("img", {
                src: B,
                alt: "",
                className: y.expandedProgressBarSelectFriendsIcon
              }), U.default.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS]
            })
          })]
        })]
      })]
    });
  return v && (V = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: y.collapsedProgressBarIconContainer,
      children: L ? (0, a.jsx)(G, {
        height: t ? 96 : 68,
        width: t ? 66 : 87
      }) : (0, a.jsx)(k, {
        height: t ? 96 : 68,
        width: t ? 66 : 87
      })
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(E.Heading, {
        variant: "heading-xl/extrabold",
        children: F
      }), (0, a.jsx)(w, {
        userRecords: _
      })]
    }), (0, a.jsxs)("div", {
      className: y.collapsedProgressBarButtons,
      children: [!t && !p && (0, a.jsx)(E.Clickable, {
        onClick: () => (0, S.default)({
          isGift: !0,
          analyticsLocations: K
        }),
        className: y.collapsedGiftButton,
        children: (0, a.jsx)(o.GiftIcon, {
          className: y.giftIcon,
          color: E.tokens.colors.WHITE
        })
      }), (0, a.jsx)(E.Clickable, {
        className: y.collapsedShareReferralButton,
        children: (0, a.jsx)(D.default, {
          width: 28,
          height: 28
        })
      })]
    })]
  })), (0, a.jsx)(I.AnalyticsLocationProvider, {
    value: K,
    children: (0, a.jsxs)("div", {
      className: l()({
        [y.expandedProgressBarContainer]: !v && !t,
        [y.expandedProgressBarContainerSettingsPage]: !v && t,
        [y.collapsedProgressBarContainer]: v && !t,
        [y.collapsedProgressBarContainerSettingsPage]: v && t,
        [y.expandedProgressBarContainerVariant1]: !p && !t,
        [y.expandedProgressBarContainerVariant2]: p && !t,
        [y.allReferralsSentBorder]: 3 === s.length
      }),
      children: [(0, a.jsx)(E.Clickable, {
        className: l()(y.collapseToggle, {
          [y.collapseToggleInSettings]: t
        }),
        onClick: () => j(),
        children: v ? (0, a.jsx)(n.ChevronSmallDownIcon, {
          width: t ? 20 : 24,
          height: t ? 20 : 24
        }) : (0, a.jsx)(c.ChevronSmallUpIcon, {
          width: t ? 20 : 24,
          height: t ? 20 : 24
        })
      }), V]
    })
  })
}