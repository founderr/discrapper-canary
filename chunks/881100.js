s.d(t, {
  N: function() {
    return B
  }
});
var n = s(399606),
  a = s(780384),
  i = s(230711),
  r = s(410030),
  l = s(594174),
  o = s(74538),
  c = s(981631),
  E = s(526761),
  _ = s(689938),
  u = s(323780),
  d = s(101732),
  T = s(450598),
  I = s(633030),
  R = s(97942),
  A = s(269987),
  N = s(548629),
  C = s(507084),
  g = s(680313),
  m = s(926433),
  M = s(302036),
  S = s(994554),
  p = s(1549),
  h = s(13327),
  f = s(59137),
  O = s(405991),
  x = s(24615),
  L = s(193943),
  P = s(334347),
  v = s(943734),
  Z = s(603076),
  b = s(472656),
  D = s(912429),
  U = s(772969),
  j = s(926262);
let G = (e, t, s) => (0, a.wj)(e) ? t : s,
  B = e => {
    let {
      styles: t
    } = e, s = (0, r.ZP)(), a = (0, n.e7)([l.default], () => {
      let e = l.default.getCurrentUser();
      return o.ZP.canUsePremiumProfileCustomization(e)
    }), B = _.Z.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_2_INCREASE;
    return {
      badge: {
        title: _.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
        imageSource: T,
        imageClassName: t.badgeImage
      },
      badgeAlt: {
        title: _.Z.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
        description: _.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
        imageSource: G(s, u, d),
        imageClassName: t.badgeNewImage
      },
      clientThemes: {
        title: _.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
        className: t.clientThemesCard,
        imageSource: x,
        imageClassName: t.clientThemesImage
      },
      customAppIcons: {
        title: _.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
        imageSource: L,
        imageClassName: t.customAppIconImage
      },
      emoji: {
        title: _.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
        imageSource: P,
        imageClassName: t.emojiImage
      },
      guildProfile: {
        title: _.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
        description: e => {
          let t = () => {
            i.Z.open(c.oAB.PROFILE_CUSTOMIZATION, null, {
              scrollPosition: E.Y_.TRY_IT_OUT,
              analyticsLocations: e
            })
          };
          return a ? _.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({
            onCheckItOutClick: t
          }) : _.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({
            onTryItOutClick: t
          })
        },
        imageSource: R,
        imageClassName: t.perGuildProfilesImage
      },
      longerMessages: {
        title: _.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
        imageSource: G(s, v, Z),
        imageClassName: t.longerMessagesImage
      },
      moreGuilds: {
        title: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: G(s, I, b),
        imageClassName: t.moreGuildsImage
      },
      moreGuildsAlt: {
        title: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
        imageSource: G(s, C, g),
        imageClassName: t.moreGuildsAltImage
      },
      remix: {
        title: _.Z.Messages.REMIXING_PERKS_CARD_TITLE,
        description: _.Z.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
        imageSource: G(s, A, N),
        imageClassName: t.remixingImage,
        isEarlyAccess: !0
      },
      soundboard: {
        title: _.Z.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
        description: _.Z.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
        imageSource: G(s, m, M),
        imageClassName: t.soundboardImage
      },
      stickers: {
        title: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
        description: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: G(s, S, D),
        imageClassName: t.stickersImage
      },
      stickersBurst: {
        title: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
        imageSource: G(s, S, D),
        imageClassName: t.stickersImage
      },
      stickersPerkDiscoverability: {
        title: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
        imageSource: G(s, S, D),
        imageClassName: t.stickersImage
      },
      streaming: {
        title: _.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
        imageSource: U,
        imageClassName: t.streamingImage
      },
      superReactions: {
        title: _.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
        description: _.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
        imageSource: G(s, p, h),
        imageClassName: t.superReactionsImage
      },
      upload: {
        title: _.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({
          premiumMaxSize: B
        }),
        description: _.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({
          premiumMaxSize: B
        }),
        imageSource: j,
        imageClassName: t.uploadImage
      },
      videoBackground: {
        title: _.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
        description: _.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
        imageSource: G(s, f, O),
        imageClassName: t.videoBackgroundImage
      }
    }
  }