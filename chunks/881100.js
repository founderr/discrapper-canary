n.d(t, {
    N: function () {
        return D;
    }
});
var i = n(399606),
    r = n(780384),
    a = n(230711),
    s = n(410030),
    l = n(594174),
    o = n(424218),
    c = n(74538),
    d = n(474936),
    u = n(981631),
    m = n(526761),
    g = n(388032),
    f = n(323780),
    p = n(101732),
    _ = n(450598),
    h = n(633030),
    E = n(97942),
    b = n(269987),
    x = n(548629),
    C = n(507084),
    T = n(680313),
    v = n(926433),
    N = n(302036),
    I = n(994554),
    S = n(1549),
    R = n(13327),
    A = n(59137),
    j = n(405991),
    P = n(24615),
    Z = n(193943),
    M = n(334347),
    B = n(943734),
    O = n(603076),
    w = n(472656),
    k = n(912429),
    y = n(772969),
    L = n(926262);
let U = (e, t, n) => ((0, r.wj)(e) ? t : n),
    D = (e) => {
        let { styles: t } = e,
            n = (0, s.ZP)(),
            r = (0, i.e7)([l.default], () => {
                let e = l.default.getCurrentUser();
                return c.ZP.canUsePremiumProfileCustomization(e);
            }),
            D = (0, o.BU)(d.Uq / 1024, { useKibibytes: !0 });
        return {
            badge: {
                title: g.intl.string(g.t.SS87ra),
                description: g.intl.string(g.t.oD6CRk),
                imageSource: _,
                imageClassName: t.badgeImage
            },
            badgeAlt: {
                title: g.intl.string(g.t['5cYMu7']),
                description: g.intl.string(g.t.vxk9vb),
                imageSource: U(n, f, p),
                imageClassName: t.badgeNewImage
            },
            clientThemes: {
                title: g.intl.string(g.t['/xvEMz']),
                description: g.intl.string(g.t.HKWdjo),
                className: t.clientThemesCard,
                imageSource: P,
                imageClassName: t.clientThemesImage
            },
            customAppIcons: {
                title: g.intl.string(g.t.OuItFh),
                description: g.intl.string(g.t.mPyrEx),
                imageSource: Z,
                imageClassName: t.customAppIconImage
            },
            emoji: {
                title: g.intl.string(g.t['R2IV/f']),
                description: g.intl.string(g.t.R5Xag4),
                imageSource: M,
                imageClassName: t.emojiImage
            },
            guildProfile: {
                title: g.intl.string(g.t.lKDhhI),
                description: (e) => {
                    let t = () => {
                        a.Z.open(u.oAB.PROFILE_CUSTOMIZATION, null, {
                            scrollPosition: m.Y_.TRY_IT_OUT,
                            analyticsLocations: e
                        });
                    };
                    return r ? g.intl.format(g.t.aj1pfX, { onCheckItOutClick: t }) : g.intl.format(g.t.d2oYS0, { onTryItOutClick: t });
                },
                imageSource: E,
                imageClassName: t.perGuildProfilesImage
            },
            longerMessages: {
                title: g.intl.string(g.t.BUSciY),
                description: g.intl.string(g.t.vN6Xpa),
                imageSource: U(n, B, O),
                imageClassName: t.longerMessagesImage
            },
            moreGuilds: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: U(n, h, w),
                imageClassName: t.moreGuildsImage
            },
            moreGuildsAlt: {
                title: g.intl.string(g.t.Bv8Pfn),
                description: g.intl.string(g.t.JMfaTU),
                imageSource: U(n, C, T),
                imageClassName: t.moreGuildsAltImage
            },
            remix: {
                title: g.intl.string(g.t.ZvulDg),
                description: g.intl.string(g.t['8GwCPT']),
                imageSource: U(n, b, x),
                imageClassName: t.remixingImage,
                isEarlyAccess: !0
            },
            soundboard: {
                title: g.intl.string(g.t['lGcW+f']),
                description: g.intl.string(g.t['/fDyOz']),
                imageSource: U(n, v, N),
                imageClassName: t.soundboardImage
            },
            stickers: {
                title: g.intl.string(g.t['1c+xwc']),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: U(n, I, k),
                imageClassName: t.stickersImage
            },
            stickersBurst: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.hJG8ZG),
                imageSource: U(n, I, k),
                imageClassName: t.stickersImage
            },
            stickersPerkDiscoverability: {
                title: g.intl.string(g.t.tzdIwM),
                description: g.intl.string(g.t.FXlU29),
                imageSource: U(n, I, k),
                imageClassName: t.stickersImage
            },
            streaming: {
                title: g.intl.string(g.t.RSXQYG),
                description: g.intl.string(g.t.ymCPxs),
                imageSource: y,
                imageClassName: t.streamingImage
            },
            superReactions: {
                title: g.intl.string(g.t.uZt5q6),
                description: g.intl.string(g.t.ZK3Zoa),
                imageSource: U(n, S, R),
                imageClassName: t.superReactionsImage
            },
            upload: {
                title: g.intl.formatToPlainString(g.t.jqhAdH, { premiumMaxSize: D }),
                description: g.intl.formatToPlainString(g.t['HI+cfn'], { premiumMaxSize: D }),
                imageSource: L,
                imageClassName: t.uploadImage
            },
            videoBackground: {
                title: g.intl.string(g.t.NaGpTU),
                description: g.intl.string(g.t['A8O/Q0']),
                imageSource: U(n, A, j),
                imageClassName: t.videoBackgroundImage
            }
        };
    };
