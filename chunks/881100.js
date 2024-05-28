"use strict";
s.r(t), s.d(t, {
  usePerkCards: function() {
    return y
  }
});
var a = s("399606"),
  r = s("780384"),
  i = s("230711"),
  n = s("410030"),
  l = s("594174"),
  o = s("74538"),
  u = s("474936"),
  c = s("981631"),
  d = s("526761"),
  _ = s("689938"),
  E = s("323780"),
  R = s("101732"),
  T = s("450598"),
  f = s("633030"),
  m = s("97942"),
  I = s("269987"),
  S = s("548629"),
  p = s("507084"),
  A = s("680313"),
  g = s("926433"),
  N = s("302036"),
  M = s("994554"),
  C = s("1549"),
  P = s("13327"),
  O = s("59137"),
  x = s("405991"),
  b = s("24615"),
  h = s("193943"),
  D = s("334347"),
  v = s("943734"),
  L = s("603076"),
  U = s("472656"),
  B = s("912429"),
  k = s("772969"),
  j = s("926262");
let G = (e, t, s) => (0, r.isThemeDark)(e) ? t : s,
  y = e => {
    let {
      styles: t,
      selectedPremiumType: s
    } = e, r = (0, n.default)(), y = (0, a.useStateFromStores)([l.default], () => {
      let e = l.default.getCurrentUser();
      return o.default.canUsePremiumProfileCustomization(e)
    }), H = s !== u.PremiumTypes.TIER_0 ? _.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE : _.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED;
    return {
      badge: {
        title: _.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: T,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: _.default.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: _.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: G(r, E, R),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: _.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
        className: t.clientThemesCard,
        imageSource: b,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: _.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
        imageSource: h,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: _.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
        imageSource: D,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: _.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
        description: e => {
          let t = () => {
            i.default.open(c.UserSettingsSections.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: d.ProfileCustomizationScrollPositions.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return y ? _.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
            onCheckItOutClick: t
          }) : _.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
            onTryItOutClick: t
          })
        },
        imageSource: m,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: _.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
        imageSource: G(r, v, L),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: G(r, f, U),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: G(r, p, A),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: _.default.Messages.REMIXING_PERKS_CARD_TITLE,
        description: _.default.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: G(r, I, S),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: _.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: _.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: G(r, g, N),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: G(r, M, B),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: G(r, M, B),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: G(r, M, B),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: _.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: k,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: _.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
        description: _.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
        imageSource: G(r, C, P),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: _.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: H
        }),
        description: _.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: H
        }),
        imageSource: j,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: _.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: _.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: G(r, O, x),
        imageClassName: t.videoBackgroundImage
      }
    }
  }