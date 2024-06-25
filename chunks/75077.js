s.d(t, {
  BS: function() {
    return S
  },
  Op: function() {
    return L
  },
  gx: function() {
    return h
  },
  k3: function() {
    return m
  },
  mN: function() {
    return P
  },
  sP: function() {
    return x
  },
  t2: function() {
    return p
  },
  vZ: function() {
    return M
  }
}), s(653041), s(627341);
var n = s(278074),
  a = s(442837),
  i = s(780384),
  r = s(410154),
  l = s(594174),
  o = s(78839),
  c = s(74538),
  E = s(331119),
  _ = s(575595),
  u = s(528865),
  d = s(915296),
  T = s(650032),
  I = s(781922),
  R = s(885462),
  A = s(391110),
  N = s(474936),
  C = s(735825),
  g = s(689938);
let m = e => {
    switch (e) {
      case C.EB.PENDING:
        return g.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_TITLE;
      case C.EB.REDEEMABLE:
        return g.Z.Messages.NITRO_HOME_REWARDING_REDEEMABLE_STATE_TITLE;
      case C.EB.REDEEMED:
        return g.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
      default:
        return ""
    }
  },
  M = (e, t) => {
    switch (e) {
      case C.EB.PENDING:
        return t === C.Ft.FREE_GUILD_BOOST_1_MONTH ? g.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_1_MONTH_VARIANT : g.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_LOCKED_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case C.EB.REDEEMABLE:
        return t === C.Ft.FREE_GUILD_BOOST_1_MONTH ? g.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_1_MONTH_VARIANT : g.Z.Messages.NITRO_HOME_REWARDING_FREE_BOOST_REDEEMABLE_STATE_SUBTITLE_3_MONTHS_VARIANT;
      case C.EB.REDEEMED:
        return g.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_SUBTITLE;
      default:
        return
    }
  },
  S = e => {
    switch (e) {
      case C.EB.PENDING:
        return g.Z.Messages.NITRO_HOME_REWARDING_LOCKED_STATE_DESCRIPTION;
      case C.EB.REDEEMABLE:
        return;
      case C.EB.REDEEMED:
        return g.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_STATE_DESCRIPTION;
      default:
        return
    }
  };

function p(e, t) {
  switch (e) {
    case C.EB.PENDING:
      return null != t ? g.Z.Messages.NITRO_HOME_REWARDING_TENURE_BOOST_AVAILABLE_DATE.format({
        days: t
      }) : "";
    case C.EB.REDEEMABLE:
      return g.Z.Messages.REDEEM;
    case C.EB.REDEEMED:
      return g.Z.Messages.NITRO_HOME_REWARDING_REDEEMED_LABEL;
    default:
      return ""
  }
}
let h = (e, t, s) => (0, i.wj)(e) ? t : s,
  f = "getWhatsNewRow",
  O = e => {
    let {
      cards: t,
      perksCards: s,
      isFullScreen: n,
      showTenureCard: a,
      shopMarketingVariation: i
    } = e, l = n ? 3 : 2, o = e => {
      let {
        card: s
      } = e;
      t.length < l && t.push(s)
    }, c = () => {
      i !== r.C5.DEFAULT ? o({
        card: s.specialShopPerks
      }) : o({
        card: s.specialMemberPricing
      })
    }, {
      shouldShowCard: d
    } = u.W.getCurrentConfig({
      location: f
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: A
    } = R.e.getCurrentConfig({
      location: f
    }, {
      autoTrackExposure: !1
    }), {
      shouldShowCard: N
    } = I.X.getCurrentConfig({
      location: f
    }, {
      autoTrackExposure: !1
    }), {
      enabled: C
    } = T._.getCurrentConfig({
      location: f
    }, {
      autoTrackExposure: !1
    }), {
      enabled: g
    } = _.r.getCurrentConfig({
      location: f
    }, {
      autoTrackExposure: !1
    }), {
      enabled: m
    } = E.C.getCurrentConfig({
      location: f
    }, {
      autoTrackExposure: !1
    }), M = v();
    return null != s.freeBoost && !0 === a && o({
      card: s.freeBoost
    }), n && M && d && A ? (0 === t.length && c(), o({
      card: s.newAppStylesUpdateJune2024
    }), o({
      card: s.serverProfiles
    })) : n && !M && d && A && (N && C && !g && !m ? o({
      card: s.referralProgram
    }) : c(), o({
      card: s.newAppStylesUpdateJune2024
    }), o({
      card: s.serverProfiles
    })), o({
      card: s.earlyAccess
    }), c(), o({
      card: s.unlimitedSuperReactions
    }), t
  },
  x = e => {
    let {
      perksCards: t,
      variant: s,
      shopMarketingVariation: a,
      isFullScreen: i,
      showTenureCard: r,
      tileOrderVariant: l,
      isPremiumSubscriber: o
    } = e, c = [];
    switch (s) {
      case A.R0.PERKS_DISCOVERABILITY:
        c = (0, n.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads]).with({
          tileOrderVariant: d.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.profiles, t.moreEmojiPower, t.largeUploads, t.hdVideo, t.clientThemes, t.customAppIcons]).otherwise(() => [t.profiles, t.clientThemes, t.serverBoosts]);
        break;
      case A.R0.WHATS_NEW:
        c = O({
          cards: c,
          perksCards: t,
          isFullScreen: i,
          showTenureCard: r,
          shopMarketingVariation: a
        });
        break;
      case A.R0.CARD_CAROUSEL_FIRST_ROW:
        c = (0, n.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.hdVideo, t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).with({
          tileOrderVariant: d.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.serverBoosts, t.superReactions, t.earlyAccessSeeAllVariant, t.specialShopPerks]).otherwise(() => [t.customAppIcons, t.moreEmojiPower, t.customSoundsEverywhere, t.specialStickerAccess]);
        break;
      case A.R0.CARD_CAROUSEL_SECOND_ROW:
        c = (0, n.EQ)({
          tileOrderVariant: l,
          isPremiumSubscriber: o
        }).with({
          tileOrderVariant: d.mJ.VARIANT_1,
          isPremiumSubscriber: !1
        }, () => [t.clientThemes, t.customAppIcons, t.customSoundsEverywhere, t.specialStickerAccess]).with({
          tileOrderVariant: d.mJ.VARIANT_2,
          isPremiumSubscriber: !1
        }, () => [t.customSoundsEverywhere, t.specialStickerAccess]).otherwise(() => [t.earlyAccessSeeAllVariant, t.specialMemberPricingSeeAllVariant, t.largeUploads, t.hdVideo, t.superReactions]);
        break;
      case A.R0.CARD_CAROUSEL_THIRD_ROW:
        c = [t.entranceSoundsSeeAllVariation, t.badge]
    }
    return !i && (c = c.filter(e => !e.hideOnNarrowScreen)), c
  },
  L = e => {
    let t = (0, a.e7)([o.ZP], () => o.ZP.getPremiumTypeSubscription()),
      s = null != t ? c.ZP.getPremiumPlanItem(t) : null,
      n = (null != s ? c.ZP.getSkuIdForPlan(s.planId) : null) === N.Si.TIER_2;
    if (e) return n ? {
      title: g.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_SUB,
      subtitle: g.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_SUB
    } : {
      title: g.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_TITLE_NON_SUB,
      subtitle: g.Z.Messages.PREMIUM_MARKETING_WHATS_NEW_SUBTITLE_NON_SUB
    };
    return {
      title: g.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_TITLE,
      subtitle: g.Z.Messages.PREMIUM_MARKETING_PERKS_DISCOVERABILITY_SUBTITLE
    }
  },
  P = () => {
    let e = (0, a.e7)([l.default], () => l.default.getCurrentUser());
    return (0, c.I5)(e)
  },
  v = () => {
    let e = l.default.getCurrentUser();
    return (0, c.M5)(e, N.p9.TIER_2)
  }