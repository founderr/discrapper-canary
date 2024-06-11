"use strict";
t.r(s), t("627341"), t("47120"), t("724458"), t("653041");
var a = t("735250"),
  l = t("470079"),
  i = t("120356"),
  r = t.n(i),
  n = t("512722"),
  o = t.n(n),
  u = t("392711"),
  d = t.n(u),
  c = t("278074"),
  _ = t("442837"),
  m = t("780384"),
  I = t("481060"),
  f = t("570140"),
  C = t("179360"),
  E = t("230711"),
  T = t("410030"),
  N = t("607070"),
  p = t("44315"),
  S = t("543241"),
  A = t("906411"),
  L = t("822179"),
  R = t("419922"),
  x = t("484459"),
  g = t("318661"),
  M = t("735336"),
  h = t("502762"),
  O = t("652853"),
  P = t("430824"),
  j = t("594174"),
  U = t("314884"),
  v = t("346656"),
  y = t("180828"),
  F = t("709586"),
  b = t("466111"),
  G = t("154921"),
  D = t("626135"),
  k = t("768581"),
  H = t("63063"),
  B = t("998502"),
  w = t("53900"),
  Y = t("789155"),
  z = t("55610"),
  V = t("798769"),
  K = t("474936"),
  W = t("981631"),
  Z = t("228168"),
  q = t("689938"),
  J = t("7625"),
  X = t("834982"),
  Q = t("912450"),
  $ = t("703548"),
  ee = t("869333"),
  es = t("652528"),
  et = t("874692"),
  ea = t("391458"),
  el = t("70967"),
  ei = t("674264"),
  er = t("360088"),
  en = t("304880");
let eo = B.default.getEnableHardwareAcceleration() ? I.AnimatedAvatar : I.Avatar,
  eu = {
    boostItemVisual: es,
    emojiStickersVisual: et,
    screenShareItemVisual: er,
    uploadsMessagesItemVisual: ea,
    uploadsMessagesItemVisualV2: el,
    PL: ei,
    TR: en
  },
  ed = {
    boostItemVisual: X,
    emojiStickersVisual: Q,
    screenShareItemVisual: er,
    uploadsMessagesItemVisual: $,
    uploadsMessagesItemVisualV2: ee,
    PL: ei,
    TR: en
  };

function ec() {
  let e = (0, T.default)();
  return (0, m.isThemeDark)(e) ? ed : eu
}

function e_(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: l
  } = e;
  return (0, a.jsxs)("div", {
    className: J.whatYouLoseItem,
    children: [(0, a.jsxs)("div", {
      className: J.whatYouLoseItemLeftColumn,
      children: [(0, a.jsx)(I.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, a.jsx)(I.Button, {
        look: I.Button.Looks.LINK,
        color: I.Button.Colors.LINK,
        size: I.Button.Sizes.NONE,
        className: J.whatYouLoseItemLearnMore,
        onClick: t,
        children: q.default.Messages.LEARN_MORE
      })]
    }), (0, a.jsx)("div", {
      className: J.whatYouLoseItemRightColumn,
      children: l()
    })]
  })
}

function em(e) {
  let {
    ...s
  } = e, {
    theme: t
  } = (0, O.useUserProfileThemeContext)(), l = (0, p.useThemedColorValue)(W.ThemeColor.INTERACTIVE_ACTIVE, t);
  return (0, a.jsx)(b.default, {
    ...s,
    color: l.hex
  })
}

function eI(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: l
  } = e, i = (0, g.default)(s.id), r = (0, _.useStateFromStores)([N.default], () => N.default.useReducedMotion), n = t === K.PremiumTypes.TIER_1, o = (0, c.match)(null == i ? void 0 : i.premiumType).with(K.PremiumTypes.TIER_2, () => (0, a.jsxs)(h.default, {
    user: s,
    displayProfile: i,
    forceShowPremium: !0,
    profileType: Z.UserProfileTypes.CANCEL_MODAL,
    className: J.profileCard,
    children: [(0, a.jsx)("div", {
      className: J.profileBanner,
      children: (0, a.jsx)(M.default, {
        displayProfile: i,
        user: s,
        allowEdit: !1,
        profileType: Z.UserProfileTypes.CANCEL_MODAL
      })
    }), (0, a.jsx)(eo, {
      className: J.profileAvatar,
      src: s.getAvatarURL(void 0, (0, I.getAvatarSize)(I.AvatarSizes.SIZE_56), !r),
      size: I.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsx)(h.default.Overlay, {
      className: J.profileInner,
      children: (0, a.jsxs)("div", {
        className: J.profileUserInfo,
        children: [(0, a.jsx)(y.default, {
          className: J.profileNameTag,
          usernameClass: J.profileNameTagUsername,
          name: s.toString()
        }), (0, a.jsx)(em, {
          className: J.profilePremiumIcon
        })]
      })
    })]
  })).otherwise(() => (0, a.jsxs)("div", {
    className: J.profileCardTier1,
    children: [(0, a.jsx)(eo, {
      className: J.profileAvatarTier1,
      src: s.getAvatarURL(void 0, (0, I.getAvatarSize)(I.AvatarSizes.SIZE_56), !r),
      size: I.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsxs)("div", {
      className: J.profileUserInfoTier1,
      children: [(0, a.jsx)(y.default, {
        className: J.profileNameTag,
        usernameClass: J.profileNameTagUsername,
        name: s.toString()
      }), (0, a.jsx)(b.default, {
        className: J.profilePremiumIcon
      })]
    })]
  }));
  return (0, a.jsx)(e_, {
    description: n ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
    onLearnMore: () => {
      l(), E.default.open(W.UserSettingsSections.PROFILE_CUSTOMIZATION), D.default.track(W.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => o
  }, "profile-item")
}

function ef(e) {
  let {
    premiumType: s
  } = e, t = (0, _.useStateFromStores)([N.default], () => N.default.useReducedMotion), l = (0, S.useFrequentlyUsedEmojis)(null).filter(e => e.type === A.EmojiTypes.GUILD && (e.animated || null != e.guildId)).slice(0, 3), i = (0, _.useStateFromStoresArray)([L.default], () => L.default.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - l.length)), r = ec().emojiStickersVisual, n = s === K.PremiumTypes.TIER_1;
  return (0, a.jsx)(e_, {
    description: n ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
    onLearnMore: () => {
      window.open(H.default.getArticleURL(W.HelpdeskArticles.PREMIUM_DETAILS)), D.default.track(W.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != l && l.length > 0 || !n && null != i && i.length > 0 ? (0, a.jsxs)("div", {
      className: J.emojiStickersPersonalizedContainer,
      children: [l.map(e => null == e.id ? e.url : k.default.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map(e => null != e ? (0, a.jsx)("img", {
        className: J.personalizedEmoji,
        alt: "",
        src: e
      }) : null), n ? null : i.map(e => (0, a.jsx)(R.default, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: !1
      }, e.id))]
    }) : (0, a.jsx)("img", {
      className: J.nonPersonalizedGraphic,
      alt: "",
      src: r
    })
  }, "emoji-stickers-item")
}

function eC(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  l.useEffect(() => f.default.wait(() => (0, C.fetchGuildBoostSlots)()), []);
  let i = (0, _.useStateFromStores)([N.default], () => N.default.useReducedMotion),
    [n, o] = (0, _.useStateFromStoresArray)([U.default, P.default], () => {
      let e = U.default.boostSlots,
        s = new Map;
      d()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
        if (null != P.default.getGuild(e)) {
          var t;
          let a = null !== (t = s.get(e)) && void 0 !== t ? t : 0;
          s.set(e, a + 1)
        }
      });
      let t = null,
        a = 0;
      return s.size > 0 && ([t, a] = Array.from(s.entries()).reduce((e, s) => s[1] > e[1] ? s : e)), [P.default.getGuild(t), a]
    }),
    u = null != n && o > 0,
    c = ec().boostItemVisual;
  return (0, a.jsx)(e_, {
    description: s === K.PremiumTypes.TIER_1 ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
    onLearnMore: () => {
      t(), E.default.open(W.UserSettingsSections.GUILD_BOOSTING), D.default.track(W.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => u ? (0, a.jsx)("div", {
      className: J.boostCardContainer,
      children: (0, a.jsxs)("div", {
        className: J.boostCard,
        children: [(0, a.jsx)(v.default, {
          guild: n,
          size: v.default.Sizes.MEDIUM,
          animate: !i,
          className: J.boostCardIcon
        }), (0, a.jsxs)("div", {
          className: J.boostCardInfo,
          children: [(0, a.jsx)(I.Text, {
            variant: "text-md/normal",
            className: r()(J.textSingleLineEllipsis, J.boostCardTitle),
            children: n.name
          }), (0, a.jsxs)("div", {
            className: J.boostCardSubtitle,
            children: [(0, a.jsx)(F.default, {
              className: J.boostCardGem
            }), (0, a.jsx)(I.Text, {
              variant: "text-xs/normal",
              className: r()(J.textSingleLineEllipsis, J.boostCardCount),
              children: q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                boostCount: o
              })
            })]
          })]
        })]
      })
    }) : (0, a.jsx)("img", {
      alt: "",
      src: c
    })
  }, "boost-item")
}
let eE = () => {
  let e = ec().screenShareItemVisual;
  return (0, a.jsx)(e_, {
    description: q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
    onLearnMore: () => {
      window.open(H.default.getArticleURL(W.HelpdeskArticles.STREAM_QUALITY_SETTINGS)), D.default.track(W.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: e
    })
  }, "screen-share-item")
};

function eT(e) {
  let {
    premiumType: s
  } = e, t = ec().uploadsMessagesItemVisual;
  return (0, a.jsx)(e_, {
    description: s === K.PremiumTypes.TIER_2 ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
    onLearnMore: () => {
      window.open(H.default.getArticleURL(W.HelpdeskArticles.PREMIUM_DETAILS)), D.default.track(W.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: t
    })
  }, "uploads-item")
}
let eN = e => {
  let {
    country: s
  } = e, t = ec(), l = "PL" === s ? t.PL : t.TR;
  return (0, a.jsx)(e_, {
    description: ("PL" === s ? q.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : q.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
    onLearnMore: () => {
      window.open(H.default.getArticleURL(W.HelpdeskArticles.LOCALIZED_PRICING)), D.default.track(W.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "grandfathered_prices"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: l
    })
  }, "grandfathered-prices-item")
};

function ep(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: i,
    isDowngrade: r = !1
  } = e, n = (0, w.default)(), u = (0, z.useShouldShowLegacyPricingNotice)(), d = l.useMemo(() => {
    let e = [];
    switch (u && (o()(null != n, "Subscription billing country should not be null"), e.push((0, a.jsx)(eN, {
        country: n
      }))), t) {
      case K.PremiumTypes.TIER_0:
        e.push((0, a.jsx)(ef, {
          premiumType: t
        }), (0, a.jsx)(eT, {
          premiumType: t
        }));
        break;
      case K.PremiumTypes.TIER_1:
        r ? e.push((0, a.jsx)(eI, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(eE, {}), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: i
        })) : e.push((0, a.jsx)(eI, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(ef, {
          premiumType: t
        }), (0, a.jsx)(eE, {}), (0, a.jsx)(eT, {
          premiumType: t
        }), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: i
        }));
        break;
      case K.PremiumTypes.TIER_2:
        r ? e.push((0, a.jsx)(eI, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(eE, {})) : e.push((0, a.jsx)(eI, {
          currentUser: s,
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(ef, {
          premiumType: t
        }), (0, a.jsx)(eC, {
          premiumType: t,
          onClose: i
        }), (0, a.jsx)(eE, {}), (0, a.jsx)(eT, {
          premiumType: t
        }))
    }
    return e
  }, [t, s, i, r, u, n]);
  return (0, a.jsx)("div", {
    className: J.whatYouLoseItemContainer,
    children: d
  })
}
s.default = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: i,
    footer: r,
    onClose: n,
    onDiscountClaim: u,
    onContinue: d,
    analyticsLocations: c,
    isLoading: m = !1,
    churnUserDiscountOffer: f = null,
    isDowngrade: C = !1,
    subtitleIcon: E,
    subtitleClassName: T
  } = e, N = (0, _.useStateFromStores)([j.default], () => {
    let e = j.default.getCurrentUser();
    return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  l.useEffect(() => {
    (0, x.default)(N.id, N.getAvatarURL(null, 80))
  }, [N]);
  let p = null != f && !m;
  return (l.useEffect(() => {
    p && D.default.track(W.AnalyticEvents.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: c,
      discount_id: null == f ? void 0 : f.discount_id
    })
  }, [p, c, f]), m) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(V.default, {
      premiumType: s,
      onClose: n
    }), (0, a.jsx)(I.ModalContent, {
      className: J.body,
      children: (0, a.jsx)(I.Spinner, {
        className: J.spinner
      })
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(V.default, {
      premiumType: s,
      onClose: n
    }), (0, a.jsxs)(I.ModalContent, {
      className: J.body,
      children: [(0, a.jsx)(G.default, {
        size: G.default.Sizes.SIZE_24,
        className: J.title,
        children: t
      }), (0, a.jsxs)("div", {
        className: T,
        children: [E, (0, a.jsx)(I.Text, {
          variant: "text-md/normal",
          className: J.subtitle,
          children: i
        })]
      }), (0, a.jsx)(ep, {
        currentUser: N,
        premiumType: s,
        onClose: n,
        isDowngrade: C
      })]
    }), !p && (0, a.jsx)(I.ModalFooter, {
      children: r
    }), p && (0, a.jsx)(Y.default, {
      churnUserDiscountOffer: f,
      onDiscountClaim: u,
      onContinue: d
    })]
  })
}