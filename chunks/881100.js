n.d(t, {
    N: function () {
        return y;
    }
});
var s = n(399606),
    a = n(780384),
    r = n(230711),
    i = n(410030),
    o = n(594174),
    l = n(424218),
    c = n(74538),
    d = n(474936),
    _ = n(981631),
    u = n(526761),
    E = n(689938),
    T = n(323780),
    I = n(101732),
    R = n(450598),
    m = n(633030),
    g = n(97942),
    N = n(269987),
    C = n(548629),
    p = n(507084),
    f = n(680313),
    A = n(926433),
    S = n(302036),
    h = n(994554),
    M = n(1549),
    x = n(13327),
    b = n(59137),
    O = n(405991),
    v = n(24615),
    P = n(193943),
    L = n(334347),
    Z = n(943734),
    D = n(603076),
    B = n(472656),
    U = n(912429),
    j = n(772969),
    G = n(926262);
let w = (e, t, n) => ((0, a.wj)(e) ? t : n),
    y = (e) => {
        let { styles: t } = e,
            n = (0, i.ZP)(),
            a = (0, s.e7)([o.default], () => {
                let e = o.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            y = (0, l.BU)(d.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: E.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
                imageSource: R,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: E.Z.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
                description: E.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
                imageSource: w(n, T, I),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: E.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
                className: t.clientThemesCard,
                imageSource: v,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: E.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                imageSource: P,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: E.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                imageSource: L,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: E.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
                description: (e) => {
                    let t = () => {
                        r.Z.open(_.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: u.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return a ? E.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({ onCheckItOutClick: t }) : E.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({ onTryItOutClick: t });
                },
                imageSource: g,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: E.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
                imageSource: w(n, Z, D),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
                imageSource: w(n, m, B),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
                imageSource: w(n, p, f),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: E.Z.Messages.REMIXING_PERKS_CARD_TITLE,
                description: E.Z.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
                imageSource: w(n, N, C),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: E.Z.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
                description: E.Z.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
                imageSource: w(n, A, S),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
                description: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
                imageSource: w(n, h, U),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
                imageSource: w(n, h, U),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                imageSource: w(n, h, U),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: E.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                imageSource: j,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: E.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
                description: E.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
                imageSource: w(n, M, x),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: E.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: y }),
                description: E.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({ premiumMaxSize: y }),
                imageSource: G,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: E.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
                description: E.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
                imageSource: w(n, b, O),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
