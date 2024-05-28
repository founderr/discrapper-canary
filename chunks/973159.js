"use strict";
t.r(s), t("627341"), t("47120"), t("724458"), t("653041");
var a = t("735250"),
  r = t("470079"),
  l = t("120356"),
  i = t.n(l),
  n = t("512722"),
  o = t.n(n),
  u = t("392711"),
  c = t.n(u),
  d = t("278074"),
  m = t("442837"),
  f = t("780384"),
  _ = t("481060"),
  C = t("570140"),
  I = t("179360"),
  p = t("230711"),
  N = t("410030"),
  E = t("607070"),
  L = t("44315"),
  x = t("543241"),
  T = t("906411"),
  A = t("822179"),
  h = t("419922"),
  g = t("484459"),
  j = t("318661"),
  S = t("735336"),
  R = t("502762"),
  M = t("652853"),
  P = t("430824"),
  v = t("594174"),
  U = t("314884"),
  O = t("346656"),
  b = t("180828"),
  y = t("709586"),
  G = t("466111"),
  k = t("154921"),
  D = t("626135"),
  F = t("768581"),
  w = t("63063"),
  W = t("998502"),
  Y = t("53900"),
  V = t("789155"),
  z = t("55610"),
  B = t("798769"),
  H = t("474936"),
  K = t("981631"),
  Z = t("228168"),
  q = t("689938"),
  J = t("7625"),
  Q = t("834982"),
  X = t("912450"),
  $ = t("703548"),
  ee = t("869333"),
  es = t("652528"),
  et = t("874692"),
  ea = t("391458"),
  er = t("70967"),
  el = t("674264"),
  ei = t("360088"),
  en = t("304880");
let eo = W.default.getEnableHardwareAcceleration() ? _.AnimatedAvatar : _.Avatar,
  eu = {
    boostItemVisual: es,
    emojiStickersVisual: et,
    screenShareItemVisual: ei,
    uploadsMessagesItemVisual: ea,
    uploadsMessagesItemVisualV2: er,
    PL: el,
    TR: en
  },
  ec = {
    boostItemVisual: Q,
    emojiStickersVisual: X,
    screenShareItemVisual: ei,
    uploadsMessagesItemVisual: $,
    uploadsMessagesItemVisualV2: ee,
    PL: el,
    TR: en
  };

function ed() {
  let e = (0, N.default)();
  return (0, f.isThemeDark)(e) ? ec : eu
}

function em(e) {
  let {
    description: s,
    onLearnMore: t,
    renderVisual: r
  } = e;
  return (0, a.jsxs)("div", {
    className: J.whatYouLoseItem,
    children: [(0, a.jsxs)("div", {
      className: J.whatYouLoseItemLeftColumn,
      children: [(0, a.jsx)(_.Text, {
        variant: "text-md/normal",
        children: s
      }), (0, a.jsx)(_.Button, {
        look: _.Button.Looks.LINK,
        color: _.Button.Colors.LINK,
        size: _.Button.Sizes.NONE,
        className: J.whatYouLoseItemLearnMore,
        onClick: t,
        children: q.default.Messages.LEARN_MORE
      })]
    }), (0, a.jsx)("div", {
      className: J.whatYouLoseItemRightColumn,
      children: r()
    })]
  })
}

function ef(e) {
  let {
    ...s
  } = e, {
    theme: t
  } = (0, M.useUserProfileThemeContext)(), r = (0, L.useThemedColorValue)(K.ThemeColor.INTERACTIVE_ACTIVE, t);
  return (0, a.jsx)(G.default, {
    ...s,
    color: r.hex
  })
}

function e_(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: r
  } = e, l = (0, j.default)(s.id), i = (0, m.useStateFromStores)([E.default], () => E.default.useReducedMotion), n = t === H.PremiumTypes.TIER_1, o = (0, d.match)(null == l ? void 0 : l.premiumType).with(H.PremiumTypes.TIER_2, () => (0, a.jsxs)(R.default, {
    user: s,
    displayProfile: l,
    forceShowPremium: !0,
    profileType: Z.UserProfileTypes.CANCEL_MODAL,
    className: J.profileCard,
    children: [(0, a.jsx)("div", {
      className: J.profileBanner,
      children: (0, a.jsx)(S.default, {
        displayProfile: l,
        user: s,
        allowEdit: !1,
        profileType: Z.UserProfileTypes.CANCEL_MODAL
      })
    }), (0, a.jsx)(eo, {
      className: J.profileAvatar,
      src: s.getAvatarURL(void 0, (0, _.getAvatarSize)(_.AvatarSizes.SIZE_56), !i),
      size: _.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsx)(R.default.Overlay, {
      className: J.profileInner,
      children: (0, a.jsxs)("div", {
        className: J.profileUserInfo,
        children: [(0, a.jsx)(b.default, {
          className: J.profileNameTag,
          usernameClass: J.profileNameTagUsername,
          name: s.toString()
        }), (0, a.jsx)(ef, {
          className: J.profilePremiumIcon
        })]
      })
    })]
  })).otherwise(() => (0, a.jsxs)("div", {
    className: J.profileCardTier1,
    children: [(0, a.jsx)(eo, {
      className: J.profileAvatarTier1,
      src: s.getAvatarURL(void 0, (0, _.getAvatarSize)(_.AvatarSizes.SIZE_56), !i),
      size: _.AvatarSizes.SIZE_56,
      "aria-label": s.username
    }), (0, a.jsxs)("div", {
      className: J.profileUserInfoTier1,
      children: [(0, a.jsx)(b.default, {
        className: J.profileNameTag,
        usernameClass: J.profileNameTagUsername,
        name: s.toString()
      }), (0, a.jsx)(G.default, {
        className: J.profilePremiumIcon
      })]
    })]
  }));
  return (0, a.jsx)(em, {
    description: n ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE_TIER_1.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_PROFILE.format(),
    onLearnMore: () => {
      r(), p.default.open(K.UserSettingsSections.PROFILE_CUSTOMIZATION), D.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "user_profile_customization"
      })
    },
    renderVisual: () => o
  }, "profile-item")
}

function eC(e) {
  let {
    premiumType: s
  } = e, t = (0, m.useStateFromStores)([E.default], () => E.default.useReducedMotion), r = (0, x.useFrequentlyUsedEmojis)(null).filter(e => e.type === T.EmojiTypes.GUILD && (e.animated || null != e.guildId)).slice(0, 3), l = (0, m.useStateFromStoresArray)([A.default], () => A.default.stickerFrecencyWithoutFetchingLatest.frequently.slice(0, 3 - r.length)), i = ed().emojiStickersVisual, n = s === H.PremiumTypes.TIER_1;
  return (0, a.jsx)(em, {
    description: n ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS_TIER_1.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_EMOJI_STICKERS.format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(K.HelpdeskArticles.PREMIUM_DETAILS)), D.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "emojis_stickers"
      })
    },
    renderVisual: () => null != r && r.length > 0 || !n && null != l && l.length > 0 ? (0, a.jsxs)("div", {
      className: J.emojiStickersPersonalizedContainer,
      children: [r.map(e => null == e.id ? e.url : F.default.getEmojiURL({
        id: e.id,
        animated: !t && e.animated,
        size: 58
      })).map(e => null != e ? (0, a.jsx)("img", {
        className: J.personalizedEmoji,
        alt: "",
        src: e
      }) : null), n ? null : l.map(e => (0, a.jsx)(h.default, {
        disableAnimation: t,
        sticker: e,
        size: 58,
        withLoadingIndicator: !1
      }, e.id))]
    }) : (0, a.jsx)("img", {
      className: J.nonPersonalizedGraphic,
      alt: "",
      src: i
    })
  }, "emoji-stickers-item")
}

function eI(e) {
  let {
    premiumType: s,
    onClose: t
  } = e;
  r.useEffect(() => C.default.wait(() => (0, I.fetchGuildBoostSlots)()), []);
  let l = (0, m.useStateFromStores)([E.default], () => E.default.useReducedMotion),
    [n, o] = (0, m.useStateFromStoresArray)([U.default, P.default], () => {
      let e = U.default.boostSlots,
        s = new Map;
      c()(e).map("premiumGuildSubscription").map("guildId").forEach(e => {
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
    d = ed().boostItemVisual;
  return (0, a.jsx)(em, {
    description: s === H.PremiumTypes.TIER_1 ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_TIER_1.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS.format(),
    onLearnMore: () => {
      t(), p.default.open(K.UserSettingsSections.GUILD_BOOSTING), D.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "boosts"
      })
    },
    renderVisual: () => u ? (0, a.jsx)("div", {
      className: J.boostCardContainer,
      children: (0, a.jsxs)("div", {
        className: J.boostCard,
        children: [(0, a.jsx)(O.default, {
          guild: n,
          size: O.default.Sizes.MEDIUM,
          animate: !l,
          className: J.boostCardIcon
        }), (0, a.jsxs)("div", {
          className: J.boostCardInfo,
          children: [(0, a.jsx)(_.Text, {
            variant: "text-md/normal",
            className: i()(J.textSingleLineEllipsis, J.boostCardTitle),
            children: n.name
          }), (0, a.jsxs)("div", {
            className: J.boostCardSubtitle,
            children: [(0, a.jsx)(y.default, {
              className: J.boostCardGem
            }), (0, a.jsx)(_.Text, {
              variant: "text-xs/normal",
              className: i()(J.textSingleLineEllipsis, J.boostCardCount),
              children: q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BOOSTS_APPLIED.format({
                boostCount: o
              })
            })]
          })]
        })]
      })
    }) : (0, a.jsx)("img", {
      alt: "",
      src: d
    })
  }, "boost-item")
}
let ep = () => {
  let e = ed().screenShareItemVisual;
  return (0, a.jsx)(em, {
    description: q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SCREENSHARE.format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(K.HelpdeskArticles.STREAM_QUALITY_SETTINGS)), D.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "screen_share"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: e
    })
  }, "screen-share-item")
};

function eN(e) {
  let {
    premiumType: s
  } = e, t = ed().uploadsMessagesItemVisual;
  return (0, a.jsx)(em, {
    description: s === H.PremiumTypes.TIER_2 ? q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES.format() : q.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_UPLOADS_MESSAGES_TIER_1.format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(K.HelpdeskArticles.PREMIUM_DETAILS)), D.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "msgs_uploads"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: t
    })
  }, "uploads-item")
}
let eE = e => {
  let {
    country: s
  } = e, t = ed(), r = "PL" === s ? t.PL : t.TR;
  return (0, a.jsx)(em, {
    description: ("PL" === s ? q.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK : q.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING_NO_HELP_CENTER_LINK).format(),
    onLearnMore: () => {
      window.open(w.default.getArticleURL(K.HelpdeskArticles.LOCALIZED_PRICING)), D.default.track(K.AnalyticEvents.PREMIUM_UNCANCEL_WINBACK_CTA_CLICKED, {
        action: "grandfathered_prices"
      })
    },
    renderVisual: () => (0, a.jsx)("img", {
      alt: "",
      src: r
    })
  }, "grandfathered-prices-item")
};

function eL(e) {
  let {
    currentUser: s,
    premiumType: t,
    onClose: l,
    isDowngrade: i = !1
  } = e, n = (0, Y.default)(), u = (0, z.useShouldShowLegacyPricingNotice)(), c = r.useMemo(() => {
    let e = [];
    switch (u && (o()(null != n, "Subscription billing country should not be null"), e.push((0, a.jsx)(eE, {
        country: n
      }))), t) {
      case H.PremiumTypes.TIER_0:
        e.push((0, a.jsx)(eC, {
          premiumType: t
        }), (0, a.jsx)(eN, {
          premiumType: t
        }));
        break;
      case H.PremiumTypes.TIER_1:
        i ? e.push((0, a.jsx)(e_, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(ep, {}), (0, a.jsx)(eI, {
          premiumType: t,
          onClose: l
        })) : e.push((0, a.jsx)(e_, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(eC, {
          premiumType: t
        }), (0, a.jsx)(ep, {}), (0, a.jsx)(eN, {
          premiumType: t
        }), (0, a.jsx)(eI, {
          premiumType: t,
          onClose: l
        }));
        break;
      case H.PremiumTypes.TIER_2:
        i ? e.push((0, a.jsx)(e_, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(eI, {
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(ep, {})) : e.push((0, a.jsx)(e_, {
          currentUser: s,
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(eC, {
          premiumType: t
        }), (0, a.jsx)(eI, {
          premiumType: t,
          onClose: l
        }), (0, a.jsx)(ep, {}), (0, a.jsx)(eN, {
          premiumType: t
        }))
    }
    return e
  }, [t, s, l, i, u, n]);
  return (0, a.jsx)("div", {
    className: J.whatYouLoseItemContainer,
    children: c
  })
}
s.default = function(e) {
  let {
    premiumType: s,
    titleText: t,
    subtitleText: l,
    footer: i,
    onClose: n,
    onDiscountClaim: u,
    onContinue: c,
    analyticsLocations: d,
    isLoading: f = !1,
    churnUserDiscountOffer: C = null,
    isDowngrade: I = !1,
    subtitleIcon: p,
    subtitleClassName: N
  } = e, E = (0, m.useStateFromStores)([v.default], () => {
    let e = v.default.getCurrentUser();
    return o()(null != e, "ProfileItem: currentUser cannot be undefined"), e
  });
  r.useEffect(() => {
    (0, g.default)(E.id, E.getAvatarURL(null, 80))
  }, [E]);
  let L = null != C && !f;
  return (r.useEffect(() => {
    L && D.default.track(K.AnalyticEvents.CANCELLATION_FLOW_DISCOUNT_OFFER_PROMPT_VIEWED, {
      location_stack: d,
      discount_id: null == C ? void 0 : C.discount_id
    })
  }, [L, d, C]), f) ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(B.default, {
      premiumType: s,
      onClose: n
    }), (0, a.jsx)(_.ModalContent, {
      className: J.body,
      children: (0, a.jsx)(_.Spinner, {
        className: J.spinner
      })
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(B.default, {
      premiumType: s,
      onClose: n
    }), (0, a.jsxs)(_.ModalContent, {
      className: J.body,
      children: [(0, a.jsx)(k.default, {
        size: k.default.Sizes.SIZE_24,
        className: J.title,
        children: t
      }), (0, a.jsxs)("div", {
        className: N,
        children: [p, (0, a.jsx)(_.Text, {
          variant: "text-md/normal",
          className: J.subtitle,
          children: l
        })]
      }), (0, a.jsx)(eL, {
        currentUser: E,
        premiumType: s,
        onClose: n,
        isDowngrade: I
      })]
    }), !L && (0, a.jsx)(_.ModalFooter, {
      children: i
    }), L && (0, a.jsx)(V.default, {
      churnUserDiscountOffer: C,
      onDiscountClaim: u,
      onContinue: c
    })]
  })
}