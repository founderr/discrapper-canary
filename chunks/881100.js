n.d(t, {
    N: function () {
        return H;
    }
});
var s = n(399606),
    a = n(780384),
    r = n(230711),
    i = n(410030),
    l = n(594174),
    o = n(424218),
    c = n(74538),
    _ = n(474936),
    d = n(981631),
    E = n(526761),
    u = n(689938),
    T = n(323780),
    I = n(101732),
    R = n(450598),
    g = n(633030),
    N = n(97942),
    C = n(269987),
    m = n(548629),
    A = n(507084),
    f = n(680313),
    p = n(926433),
    M = n(302036),
    S = n(994554),
    h = n(1549),
    x = n(13327),
    b = n(59137),
    O = n(405991),
    P = n(24615),
    v = n(193943),
    L = n(334347),
    Z = n(943734),
    D = n(603076),
    U = n(472656),
    B = n(912429),
    j = n(772969),
    G = n(926262);
let w = (e, t, n) => ((0, a.wj)(e) ? t : n),
    H = (e) => {
        let { styles: t } = e,
            n = (0, i.ZP)(),
            a = (0, s.e7)([l.default], () => {
                let e = l.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            H = (0, o.BU)(_.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: u.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_BADGE_PERK_DESCRIPTION,
                imageSource: R,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: u.Z.Messages.PREMIUM_MARKETING_PERK_GRID_ITEM_HEADING_PREMIUM_SUBSCRIPTION_BADGE,
                description: u.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_BADGE_DESCRIPTION_VARIANT_1,
                imageSource: w(n, T, I),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: u.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_VARIANT_2_FEATURE_CLIENT_THEMES_DESCRIPTION,
                className: t.clientThemesCard,
                imageSource: P,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: u.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_FEATURE_CUSTOM_APP_ICONS_DESCRIPTION,
                imageSource: v,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: u.Z.Messages.PREMIUM_MARKETING_FEATURE_EMOJI_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_EMOJI_PERK_TITLE,
                imageSource: L,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: u.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILES_PERK_TITLE,
                description: (e) => {
                    let t = () => {
                        r.Z.open(d.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: E.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return a ? u.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_CHECK_IT_OUT.format({ onCheckItOutClick: t }) : u.Z.Messages.PREMIUM_MARKETING_PER_GUILD_PROFILE_THEMES_PERK_DESCRIPTION_TRY_IT_OUT.format({ onTryItOutClick: t });
                },
                imageSource: N,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: u.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_LONGER_MESSAGES_PERK_DESCRIPTION,
                imageSource: w(n, Z, D),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: u.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
                imageSource: w(n, g, U),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: u.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_MORE_GUILDS_PERK_DESCRIPTION,
                imageSource: w(n, A, f),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: u.Z.Messages.REMIXING_PERKS_CARD_TITLE,
                description: u.Z.Messages.REMIXING_PERKS_CARD_DESCRIPTION,
                imageSource: w(n, C, m),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: u.Z.Messages.SOUND_BOARD_MARKETING_USE_CUSTOM_SOUNDS,
                description: u.Z.Messages.SOUNDBOARD_MARKETING_REACT_WITH_SOUNDBOARD,
                imageSource: w(n, p, M),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: u.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE_OLD,
                description: u.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
                imageSource: w(n, S, B),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: u.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_DESCRIPTION,
                imageSource: w(n, S, B),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: u.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_STICKER_PERK_LONG_DESCRIPTION,
                imageSource: w(n, S, B),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: u.Z.Messages.PREMIUM_MARKETING_FEATURE_PREMIUM_GO_LIVE_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_STREAMING_SMALL_PERK_DESCRIPTION,
                imageSource: j,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: u.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_TITLE_V2,
                description: u.Z.Messages.PREMIUM_MARKETING_SUPER_REACTIONS_PERK_DESCRIPTION_V2,
                imageSource: w(n, h, x),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: u.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_TITLE.format({ premiumMaxSize: H }),
                description: u.Z.Messages.PREMIUM_MARKETING_UPLOADS_SMALL_PERK_DESCRIPTION.format({ premiumMaxSize: H }),
                imageSource: G,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: u.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_TITLE,
                description: u.Z.Messages.PREMIUM_MARKETING_VIDEO_BACKGROUND_PERK_DESCRIPTION,
                imageSource: w(n, b, O),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
