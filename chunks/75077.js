n.d(t, {
  BS: function() {
    return S
  },
  Op: function() {
    return O
  },
  gx: function() {
    return h
  },
  k3: function() {
    return N
  },
  mN: function() {
    return P
  },
  sP: function() {
    return b
  },
  t2: function() {
    return f
  },
  vZ: function() {
    return m
  }
}), n(653041), n(627341);
var s = n(278074),
  a = n(442837),
  r = n(780384),
  i = n(410154),
  l = n(594174),
  o = n(78839),
  c = n(74538),
  d = n(331119),
  _ = n(575595),
  E = n(528865),
  u = n(915296),
  T = n(650032),
  I = n(781922),
  R = n(885462),
  C = n(391110),
  g = n(474936),
  p = n(735825),
  A = n(689938);
let N = e => {
    switch (e) {
      case p.EB.PENDING:
        return A.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case p.EB.REDEEMABLE:
        return A.Z.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case p.EB.REDEEMED:
        return A.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  m = (e, t) => {
    switch (e) {
      case p.EB.PENDING:
        return t === p.Ft.FREE_GUILD_BOOST_1_MONTH ? A.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : A.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case p.EB.REDEEMABLE:
        return t === p.Ft.FREE_GUILD_BOOST_1_MONTH ? A.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : A.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case p.EB.REDEEMED:
        return A.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  S = e => {
    switch (e) {
      case p.EB.PENDING:
        return A.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case p.EB.REDEEMABLE:
        return;
      case p.EB.REDEEMED:
        return A.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function f(e, t) {
  switch (e) {
    case p.EB.PENDING:
      return null != t ? A.Z.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case p.EB.REDEEMABLE:
      return A.Z.Messages.REDEEM;
    case p.EB.REDEEMED:
      return A.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let h = (e, t, n) => (0, r.wj)(e) ? t : n,
  M = "getWhatsNewRow",
  x = e => {
    let {
      cards: t,
      perksCards: n,
      isFullScreen: s,
      showTenureCard: a,
      shopMarketingVariation: r
    } = e, l = s ? 3 : 2, o = e => {
      let {
        card: n
      } = e;
      t.length < l && t.push(n)
    }, c = () => {
      r !== i.C5.DEFAULT ? o({
        card: n.specialShopPerks
      }) : o({
        card: n.specialMemberPricing
      })
    }, {
      shouldShowCard: u
    } = E.W.getCurrentConfig({
      location: M
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: C
    } = R.e.getCurrentConfig({
      location: M
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: g
    } = I.X.getCurrentConfig({
      location: M
    }, {
      autoTrackExposure: !1
    }), {
      enabled: p
    } = T._.getCurrentConfig({
      location: M
    }, {
      autoTrackExposure: !1
    }), {
      enabled: A
    } = _.r.getCurrentConfig({
      location: M
    }, {
      autoTrackExposure: !1
    }), {
      enabled: N
    } = d.C.getCurrentConfig({
      location: M
    }, {
      autoTrackExposure: !1
    }), m = L();
    return null != n.freeBoost && !0 === a && o({
      card: n.freeBoost
    }), s && m && u && C ? (0 === t.length && c(), o({
      card: n.newAppStylesUpdateJune2024
    }), o({
      card: n.serverProfiles
    })) : s && !m && u && C && (g && p && !A && !N ? o({
      card: n.referralProgram
    }) : c(), o({
      card: n.newAppStylesUpdateJune2024
    }), o({
      card: n.serverProfiles
    })), o({
      card: n.earlyAccess
    }), c(), o({
      card: n.unlimitedSuperReactions
    }), t
  },
  b = e => {
    let {
      perksCards: t,
      variant: n,
      shopMarketingVariation: a,
      isFullScreen: r,
      showTenureCard: i,
      tileOrderVariant: l,
      isPremiumSubscriber: o
    } = e, c = [];
    switch (n) {
      case C.R0.PERKS_DISCOVERABILITY:
        c = (0, s.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: u.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads]).with({
          tileOrderVariant: u.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]).otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
        break;
      case C.R0.WHATS_NEW:
        c = x({
          cards: c,
          perksCards: t,
          isFullScreen: r,
          showTenureCard: i,
          shopMarketingVariation: a
        });
        break;
      case C.R0.CARD_CAROUSEL_FIRST_ROW:
        c = (0, s.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: u.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).with({
          tileOrderVariant: u.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
        break;
      case C.R0.CARD_CAROUSEL_SECOND_ROW:
        c = (0, s.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: u.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]).with({
          tileOrderVariant: u.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.customSoundsEverywhere, t.specialStickerAccess]).otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
        break;
      case C.R0.CARD_CAROUSEL_THIRD_ROW:
        c = [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return !r && (c = c.filter(e => !e.hideOnNarrowScreen)), c
  },
  O = e => {
    let t = (0, a.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
      n = null != t ? c.ZP.getPremiumPlanItem(t) : null,
      s = (null != n ? c.ZP.getSkuIdForPlan(n.planId) : null) === g.Si.TIER_2;
    if (e) return s ? {
      title: A.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: A.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: A.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: A.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: A.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: A.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  P = () => {
    let e = (0, a.e7)([l.default], () => l.default.getCurrentUser());
    return (0, c.I5)(e)
  },
  L = () => {
    let e = l.default.getCurrentUser();
    return (0, c.M5)(e, g.p9.TIER_2)
  }