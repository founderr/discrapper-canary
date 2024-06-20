t.d(s, {
  N: function() {
    return G
  }
});
var n = t(399606),
  a = t(780384),
  r = t(230711),
  i = t(410030),
  l = t(594174),
  o = t(74538),
  _ = t(981631),
  c = t(526761),
  E = t(689938),
  u = t(323780),
  d = t(101732),
  R = t(450598),
  I = t(633030),
  T = t(97942),
  A = t(269987),
  M = t(548629),
  S = t(507084),
  N = t(680313),
  p = t(926433),
  m = t(302036),
  C = t(994554),
  g = t(1549),
  f = t(13327),
  P = t(59137),
  O = t(405991),
  x = t(24615),
  h = t(193943),
  L = t(334347),
  b = t(943734),
  v = t(603076),
  Z = t(472656),
  D = t(912429),
  U = t(772969),
  B = t(926262);
let j = (e, s, t) => (0, a.wj)(e) ? s : t,
  G = e => {
    let {
      styles: s
    } = e, t = (0, i.ZP)(), a = (0, n.e7)([l.default], () => {
      let e = l.default.getCurrentUser();
      return o.ZP.canUsePremiumProfileCustomization(e)
    }), G = E.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE;
    return {
      badge: {
        title: E.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: R,
        imageClassName: s.badgeImage
      },
      badgeAlt: {
        title: E.Z.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: E.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: j(t, u, d),
        imageClassName: s.badgeNewImage
      },
      clientThemes: {
        title: E.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
        className: s.clientThemesCard,
        imageSource: x,
        imageClassName: s.clientThemesImage
      },
      customAppIcons: {
        title: E.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
        imageSource: h,
        imageClassName: s.customAppIconImage
      },
      emoji: {
        title: E.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
        imageSource: L,
        imageClassName: s.emojiImage
      },
      guildProfile: {
        title: E.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
        description: e => {
          let s = () => {
            r.Z.open(_.oAB.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: c.Y_.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return a ? E.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
            onCheckItOutClick: s
          }) : E.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
            onTryItOutClick: s
          })
        },
        imageSource: T,
        imageClassName: s.perGuildProfilesImage
      },
      longerMessages: {
        title: E.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
        imageSource: j(t, b, v),
        imageClassName: s.longerMessagesImage
      },
      moreGuilds: {
        title: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: j(t, I, Z),
        imageClassName: s.moreGuildsImage
      },
      moreGuildsAlt: {
        title: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: j(t, S, N),
        imageClassName: s.moreGuildsAltImage
      },
      remix: {
        title: E.Z.Messages.REMIXING_PERKS_CARD_TITLE,
        description: E.Z.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: j(t, A, M),
        imageClassName: s.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: E.Z.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: E.Z.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: j(t, p, m),
        imageClassName: s.soundboardImage
      },
      stickers: {
        title: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: j(t, C, D),
        imageClassName: s.stickersImage
      },
      stickersBurst: {
        title: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: j(t, C, D),
        imageClassName: s.stickersImage
      },
      stickersPerkDiscoverability: {
        title: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: j(t, C, D),
        imageClassName: s.stickersImage
      },
      streaming: {
        title: E.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: U,
        imageClassName: s.streamingImage
      },
      superReactions: {
        title: E.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
        description: E.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
        imageSource: j(t, g, f),
        imageClassName: s.superReactionsImage
      },
      upload: {
        title: E.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: G
        }),
        description: E.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: G
        }),
        imageSource: B,
        imageClassName: s.uploadImage
      },
      videoBackground: {
        title: E.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: E.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: j(t, P, O),
        imageClassName: s.videoBackgroundImage
      }
    }
  }