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
  u = s("981631"),
  d = s("526761"),
  c = s("689938"),
  _ = s("323780"),
  E = s("101732"),
  T = s("450598"),
  I = s("633030"),
  R = s("97942"),
  f = s("269987"),
  S = s("548629"),
  A = s("507084"),
  m = s("680313"),
  N = s("926433"),
  p = s("302036"),
  g = s("994554"),
  C = s("1549"),
  P = s("13327"),
  O = s("59137"),
  M = s("405991"),
  h = s("24615"),
  L = s("193943"),
  x = s("334347"),
  v = s("943734"),
  D = s("603076"),
  b = s("472656"),
  U = s("912429"),
  j = s("772969"),
  G = s("926262");
let B = (e, t, s) => (0, r.isThemeDark)(e) ? t : s,
  y = e => {
    let {
      styles: t
    } = e, s = (0, n.default)(), r = (0, a.useStateFromStores)([l.default], () => {
      let e = l.default.getCurrentUser();
      return o.default.canUsePremiumProfileCustomization(e)
    }), y = c.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE;
    return {
      badge: {
        title: c.default.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: T,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: c.default.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: c.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: B(s, _, E),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: c.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
        className: t.clientThemesCard,
        imageSource: h,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: c.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
        imageSource: L,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: c.default.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
        imageSource: x,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: c.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
        description: e => {
          let t = () => {
            i.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: d.ProfileCustomizationScrollPositions.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return r ? c.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
            onCheckItOutClick: t
          }) : c.default.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
            onTryItOutClick: t
          })
        },
        imageSource: R,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: c.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
        imageSource: B(s, v, D),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: B(s, I, b),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: B(s, A, m),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: c.default.Messages.REMIXING_PERKS_CARD_TITLE,
        description: c.default.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: B(s, f, S),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: c.default.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: c.default.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: B(s, N, p),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: B(s, g, U),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: B(s, g, U),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: B(s, g, U),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: c.default.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: j,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: c.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
        description: c.default.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
        imageSource: B(s, C, P),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: c.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: y
        }),
        description: c.default.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: y
        }),
        imageSource: G,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: c.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: c.default.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: B(s, O, M),
        imageClassName: t.videoBackgroundImage
      }
    }
  }