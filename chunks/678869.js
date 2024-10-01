n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(627494),
    n(757143),
    n(653041);
var a = n(735250),
    l = n(470079),
    i = n(423875),
    r = n(442837),
    s = n(902704),
    o = n(481060),
    u = n(952164),
    c = n(768419),
    d = n(424678),
    h = n(239470),
    m = n(894344),
    x = n(314897),
    v = n(908841),
    E = n(5192),
    _ = n(379357),
    f = n(561308),
    p = n(256726),
    T = n(206295),
    g = n(551228),
    I = n(591853),
    C = n(371991),
    N = n(410441),
    P = n(981631),
    Z = n(616922),
    S = n(689938),
    A = n(290500),
    R = n(738127);
let M = (e, t, n) => {
    let { artist: a, media: l } = e,
        i = S.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
        r = E.ZP.getName(t.guild_id, t.id, n);
    return i
        .plainFormat({
            artist: a,
            userName: r,
            media: l
        })
        .replaceAll('*', '');
};
function y(e) {
    let { activity: t } = e,
        n = t.timestamps,
        i = (0, C.tS)(),
        { durationTimestamp: r, seekBarStyles: s } = l.useMemo(() => {
            var e;
            let { start: n, end: a } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == a) return {};
            let l = Math.min(a, i),
                r = a - n,
                s = Math.floor((Math.max(l - n, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(s, '%') },
                durationTimestamp: (0, f.T_)({ start: 0 }, r)
            };
        }, [t, i]);
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: A.listeningTimeline,
              children: [
                  (0, a.jsx)(C.x3, { entry: n }),
                  (0, a.jsx)('div', {
                      className: A.seekBarContainer,
                      children: (0, a.jsx)('div', {
                          className: A.seekBarFill,
                          style: s
                      })
                  }),
                  (0, a.jsx)(o.Text, {
                      className: A.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function O(e) {
    var t, n, E;
    let C,
        A,
        O,
        { channel: j, entry: w, closePopout: L, onReaction: b, onVoiceChannelPreview: k } = e,
        { largeImage: D } = (0, _.rv)({ entry: w }),
        { activity: U, currentEntry: B, artist: G, title: F, user: H } = (0, g.pi)(w),
        { primaryColor: V, secondaryColor: Y } = (0, T.Z)(null == D ? void 0 : D.src),
        z = (0, r.e7)([c.Z, x.default], () => ((null == U ? void 0 : U.type) === P.IIU.LISTENING && null != H ? (0, h.Z)(c.Z, x.default, H, U) : void 0), [U, H], s.Z),
        W = l.useCallback(() => {
            var e;
            if (null == j || null == H) return;
            let t = null === (e = U.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, f.T_)(null != t ? { start: t } : w, Date.now());
            return (0, p.CR)({
                user: H,
                channel: j,
                mediaImageSrc: null == D ? void 0 : D.src,
                artist: G,
                description: M(
                    {
                        artist: G,
                        media: F
                    },
                    j,
                    H
                ),
                colors: [V, Y],
                badges: (0, p.jE)({ timestamp: n })
            });
        }, [U, G, j, w, null == D ? void 0 : D.src, V, Y, F, H]);
    if (null == U || null == B) return null;
    let q = G,
        J = [];
    if (B.media.provider === i.p.SPOTIFY) {
        (A = () => {
            (0, u.aG)(U);
        }),
            (O = () => {
                (0, u.Z5)(U, H.id);
            }),
            (C = () => {
                (0, u.aG)(U);
            });
        (q = (0, a.jsx)(d.Z, {
            artists: G,
            canOpen: null != U.sync_id,
            linkClassName: R.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, u.d$)(U, H.id, e);
            }
        })),
            (null == z ? void 0 : z.syncDisabled) === !1 &&
                J.push(
                    (0, a.jsx)(
                        I.Ll,
                        {
                            onClick: () => {
                                (0, m.Z)(z, Z.kG.USER_ACTIVITY_SYNC), L();
                            },
                            IconComponent: o.UserPlayIcon,
                            children: S.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
                        },
                        'listen-along'
                    )
                );
    }
    let K = (0, a.jsx)(I.wG, {
        onClickThumbnail: O,
        channel: j,
        entry: w,
        headerIcons:
            B.media.provider === i.p.SPOTIFY
                ? (0, a.jsx)(N.Z, {
                      onClick: C,
                      'aria-label': S.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                      Icon: v.Z
                  })
                : null,
        userDescription: (0, f.kr)(w) ? S.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2 : S.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
        title: F,
        onClickTitle: A,
        subtitle: q,
        badges: null,
        children: (null === (t = U.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(y, { activity: U })
    });
    return (0, a.jsxs)(I.yR, {
        children: [
            K,
            (0, a.jsx)(I.St, {
                children: (0, a.jsx)(I.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: k,
                    user: H,
                    channel: j,
                    generateReactionImage: W,
                    reactionImageAltText:
                        ((n = G),
                        (E = H),
                        S.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                            username: E.username,
                            activity: n
                        })),
                    entry: w,
                    buttons: J
                })
            })
        ]
    });
}
