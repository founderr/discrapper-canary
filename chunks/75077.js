t.d(s, {
  BS: function() {
    return g
  },
  Op: function() {
    return h
  },
  gx: function() {
    return f
  },
  k3: function() {
    return p
  },
  mN: function() {
    return L
  },
  sP: function() {
    return x
  },
  t2: function() {
    return C
  },
  vZ: function() {
    return m
  }
}), t(653041), t(627341);
var n = t(278074),
  a = t(442837),
  r = t(780384),
  i = t(410154),
  l = t(594174),
  o = t(78839),
  _ = t(74538),
  c = t(331119),
  E = t(575595),
  u = t(528865),
  d = t(915296),
  R = t(650032),
  I = t(781922),
  T = t(885462),
  A = t(391110),
  M = t(474936),
  S = t(735825),
  N = t(689938);
let p = e => {
    switch (e) {
      case S.EB.PENDING:
        return N.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case S.EB.REDEEMABLE:
        return N.Z.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case S.EB.REDEEMED:
        return N.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  m = (e, s) => {
    switch (e) {
      case S.EB.PENDING:
        return s === S.Ft.FREE_GUILD_BOOST_1_MONTH ? N.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : N.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case S.EB.REDEEMABLE:
        return s === S.Ft.FREE_GUILD_BOOST_1_MONTH ? N.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : N.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case S.EB.REDEEMED:
        return N.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  g = e => {
    switch (e) {
      case S.EB.PENDING:
        return N.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case S.EB.REDEEMABLE:
        return;
      case S.EB.REDEEMED:
        return N.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function C(e, s) {
  switch (e) {
    case S.EB.PENDING:
      return null != s ? N.Z.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: s
      }) : "";
    case S.EB.REDEEMABLE:
      return N.Z.Messages.REDEEM;
    case S.EB.REDEEMED:
      return N.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let f = (e, s, t) => (0, r.wj)(e) ? s : t,
  P = "getWhatsNewRow",
  O = e => {
    let {
      cards: s,
      perksCards: t,
      isFullScreen: n,
      showTenureCard: a,
      shopMarketingVariation: r
    } = e, l = n ? 3 : 2, o = e => {
      let {
        card: t
      } = e;
      s.length < l && s.push(t)
    }, _ = () => {
      r !== i.C5.DEFAULT ? o({
        card: t.specialShopPerks
      }) : o({
        card: t.specialMemberPricing
      })
    }, {
      shouldShowCard: d
    } = u.W.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: A
    } = T.e.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: M
    } = I.X.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      enabled: S
    } = R._.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      enabled: N
    } = E.r.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), {
      enabled: p
    } = c.C.getCurrentConfig({
      location: P
    }, {
      autoTrackExposure: !1
    }), m = b();
    return null != t.freeBoost && !0 === a && o({
      card: t.freeBoost
    }), n && m && d && A ? (0 === s.length && _(), o({
      card: t.newAppStylesUpdateJune2024
    }), o({
      card: t.serverProfiles
    })) : n && !m && d && A && (M && S && !N && !p ? o({
      card: t.referralProgram
    }) : _(), o({
      card: t.newAppStylesUpdateJune2024
    }), o({
      card: t.serverProfiles
    })), o({
      card: t.earlyAccess
    }), _(), o({
      card: t.unlimitedSuperReactions
    }), s
  },
  x = e => {
    let {
      perksCards: s,
      variant: t,
      shopMarketingVariation: a,
      isFullScreen: r,
      showTenureCard: i,
      tileOrderVariant: l,
      isPremiumSubscriber: o
    } = e, _ = [];
    switch (t) {
      case A.R0.PERKS_DISCOVERABILITY:
        _ = (0, n.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [s.profiles, s.moreEmojiPower, s.largeUploads]).with({
          tileOrderVariant: d.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [s.profiles, s.moreEmojiPower, s.largeUploads, s.hdVideo, s.clientThemes, s.customAppIcons]).otherwise(() => [s.profiles, s.clientThemes, s.serverBoosts]);
        break;
      case A.R0.WHATS_NEW:
        _ = O({
          cards: _,
          perksCards: s,
          isFullScreen: r,
          showTenureCard: i,
          shopMarketingVariation: a
        });
        break;
      case A.R0.CARD_CAROUSEL_FIRST_ROW:
        _ = (0, n.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [s.hdVideo, s.serverBoosts, s.superReactions, s.earlyAccessSeeAllVariant, s.specialShopPerks]).with({
          tileOrderVariant: d.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [s.serverBoosts, s.superReactions, s.earlyAccessSeeAllVariant, s.specialShopPerks]).otherwise(() => [s.customAppIcons, s.moreEmojiPower, s.customSoundsEverywhere, s.specialStickerAccess]);
        break;
      case A.R0.CARD_CAROUSEL_SECOND_ROW:
        _ = (0, n.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [s.clientThemes, s.customAppIcons, s.customSoundsEverywhere, s.specialStickerAccess]).with({
          tileOrderVariant: d.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [s.customSoundsEverywhere, s.specialStickerAccess]).otherwise(() => [s.earlyAccessSeeAllVariant, s.specialMemberPricingSeeAllVariant, s.largeUploads, s.hdVideo, s.superReactions]);
        break;
      case A.R0.CARD_CAROUSEL_THIRD_ROW:
        _ = [s.entranceSoundsSeeAllVariation, s.badge]
    }
    return !r && (_ = _.filter(e => !e.hideOnNarrowScreen)), _
  },
  h = e => {
    let s = (0, a.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
      t = null != s ? _.ZP.getPremiumPlanItem(s) : null,
      n = (null != t ? _.ZP.getSkuIdForPlan(t.planId) : null) === M.Si.TIER_2;
    if (e) return n ? {
      title: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: N.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: N.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: N.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  L = () => {
    let e = (0, a.e7)([l.default], () => l.default.getCurrentUser());
    return (0, _.I5)(e)
  },
  b = () => {
    let e = l.default.getCurrentUser();
    return (0, _.M5)(e, M.p9.TIER_2)
  }