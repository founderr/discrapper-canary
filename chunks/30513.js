"use strict";
n.d(t, {
  VF: function() {
    return P
  },
  WW: function() {
    return L
  },
  XO: function() {
    return C
  },
  Yp: function() {
    return g
  },
  hC: function() {
    return M
  },
  o9: function() {
    return D
  },
  zC: function() {
    return v
  }
});
var i = n(692547),
  r = n(481060),
  s = n(15385),
  o = n(709586),
  a = n(123245),
  l = n(981631);
n(474936);
var u = n(689938);
let _ = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: r.ImagesIcon,
    description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_CUSTOM_INVITE
  }),
  c = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css;
    return {
      color: e,
      icon: r.GifIcon,
      description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_ICON
    }
  },
  d = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: r.ImagesIcon,
    description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_GUILD_BANNER
  }),
  E = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css,
    icon: r.GifIcon,
    description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ANIMATED_GUILD_BANNER
  }),
  I = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_ORANGE.css,
    icon: r.ShieldUserIcon,
    description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_ROLE_ICON
  }),
  T = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css;
    return {
      color: e,
      icon: r.StickerIcon,
      description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS
    }
  },
  h = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
      n = 0,
      s = 0;
    switch (e) {
      case l.Eu4.TIER_1:
        n = 15, s = 100;
        break;
      case l.Eu4.TIER_2:
        n = 30, s = 150;
        break;
      case l.Eu4.TIER_3:
        n = 60, s = 250
    }
    return {
      color: t,
      icon: r.StickerIcon,
      description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_STICKERS_AND_EMOJIS.format({
        numStickers: n,
        numEmojis: s
      })
    }
  },
  f = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_GOLD.css,
    icon: r.StarIcon,
    description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_VANITY_URL
  }),
  S = () => ({
    icon: s.Z,
    description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_PROFILE_BADGE
  }),
  A = () => ({
    icon: o.Z,
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_PINK.css,
    description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_BOOST_CRYSTAL
  }),
  N = () => ({
    icon: r.ShieldUserIcon,
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_YELLOW.css,
    description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_SPECIAL_ROLE
  }),
  m = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
    icon: r.ReactionIcon,
    description: u.Z.Messages.PREMIUM_GUILD_USER_FEATURE_OTHERS
  }),
  O = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_OTHER;
    return {
      color: i.Z.unsafe_rawColors.PREMIUM_PERK_BLUE.css,
      icon: r.ReactionIcon,
      description: e
    }
  },
  p = () => ({
    color: i.Z.unsafe_rawColors.PREMIUM_PERK_PURPLE.css,
    icon: a.Z,
    description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_FILE_UPLOAD_TIER_3
  }),
  R = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css;
    return {
      color: e,
      icon: r.ScreenArrowIcon,
      description: u.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_PERKS_SCREEN_SHARE_1080P
    }
  };

function g() {
  return [I(), d(), T(), O()]
}

function C() {
  return [I(), h(l.Eu4.TIER_2), R(), O()]
}

function v() {
  return [h(l.Eu4.TIER_3, i.Z.unsafe_rawColors.PREMIUM_PERK_GREEN.css), p(), f(), O()]
}

function L() {
  return [f(), E(), h(l.Eu4.TIER_3), O()]
}

function D() {
  return [_(), T(), c(), O()]
}

function M() {
  return [T(), O()]
}

function P() {
  return [A(), N(), S(), m()]
}