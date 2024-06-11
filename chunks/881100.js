"use strict";
s.r(t), s.d(t, {
  usePerkCards: function() {
    return G
  }
});
var a = s("399606"),
  r = s("780384"),
  i = s("230711"),
  n = s("410030"),
  l = s("594174"),
  o = s("74538"),
  u = s("981631"),
  c = s("526761"),
  d = s("689938"),
  _ = s("323780"),
  E = s("101732"),
  R = s("450598"),
  T = s("633030"),
  I = s("97942"),
  f = s("269987"),
  S = s("548629"),
  m = s("507084"),
  p = s("680313"),
  A = s("926433"),
  M = s("302036"),
  C = s("994554"),
  g = s("1549"),
  N = s("13327"),
  P = s("59137"),
  O = s("405991"),
  x = s("24615"),
  b = s("193943"),
  h = s("334347"),
  D = s("943734"),
  L = s("603076"),
  v = s("472656"),
  U = s("912429"),
  B = s("772969"),
  j = s("926262");
let k = (e, t, s) => (0, r.isThemeDark)(e) ? t : s,
  G = e => {
    let {
      styles: t
    } = e, s = (0, n.default)(), r = (0, a.useStateFromStores)([l.default], () => {
      let e = l.default.getCurrentUser();
      return o.default.canUsePremiumProfileCustomization(e)
    }), G = d.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE;
    return {
      badge: {
        title: d.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: R,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: d.default.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: d.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: k(s, _, E),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: d.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
        className: t.clientThemesCard,
        imageSource: x,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: d.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
        imageSource: b,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: d.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
        imageSource: h,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: d.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
        description: e => {
          let t = () => {
            i.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: c.ProfileCustomizationScrollPositions.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return r ? d.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
            onCheckItOutClick: t
          }) : d.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
            onTryItOutClick: t
          })
        },
        imageSource: I,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: d.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
        imageSource: k(s, D, L),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: d.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: k(s, T, v),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: d.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: k(s, m, p),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: d.default.Messages.REMIXING_PERKS_CARD_TITLE,
        description: d.default.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: k(s, f, S),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: d.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: d.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: k(s, A, M),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: d.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: d.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: k(s, C, U),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: d.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: k(s, C, U),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: d.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: k(s, C, U),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: d.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: B,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: d.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
        description: d.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
        imageSource: k(s, g, N),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: d.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: G
        }),
        description: d.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: G
        }),
        imageSource: j,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: d.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: d.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: k(s, P, O),
        imageClassName: t.videoBackgroundImage
      }
    }
  }