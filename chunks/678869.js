n.d(t, {
    Z: function () {
        return j;
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
    E = n(908841),
    v = n(5192),
    _ = n(379357),
    f = n(561308),
    T = n(256726),
    p = n(206295),
    g = n(551228),
    I = n(591853),
    N = n(371991),
    C = n(410441),
    A = n(981631),
    Z = n(616922),
    P = n(689938),
    S = n(290500),
    M = n(738127);
let O = (e, t, n) => {
    let { artist: a, media: l } = e,
        i = P.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
        r = v.ZP.getName(t.guild_id, t.id, n);
    return i
        .plainFormat({
            artist: a,
            userName: r,
            media: l
        })
        .replaceAll('*', '');
};
function R(e) {
    let { activity: t } = e,
        n = t.timestamps,
        i = (0, N.tS)(),
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
              className: S.listeningTimeline,
              children: [
                  (0, a.jsx)(N.x3, { entry: n }),
                  (0, a.jsx)('div', {
                      className: S.seekBarContainer,
                      children: (0, a.jsx)('div', {
                          className: S.seekBarFill,
                          style: s
                      })
                  }),
                  (0, a.jsx)(o.Text, {
                      className: S.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function j(e) {
    var t, n, v;
    let N,
        S,
        j,
        { channel: y, entry: L, closePopout: w, onReaction: D, onVoiceChannelPreview: b } = e,
        { largeImage: U } = (0, _.rv)({ entry: L }),
        { activity: B, currentEntry: k, artist: F, title: G, user: H } = (0, g.pi)(L),
        { primaryColor: Y, secondaryColor: z } = (0, p.Z)(null == U ? void 0 : U.src),
        V = (0, r.e7)([c.Z, x.default], () => ((null == B ? void 0 : B.type) === A.IIU.LISTENING && null != H ? (0, h.Z)(c.Z, x.default, H, B) : void 0), [B, H], s.Z),
        W = l.useCallback(() => {
            var e;
            if (null == y || null == H) return;
            let t = null === (e = B.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, f.T_)(null != t ? { start: t } : L, Date.now());
            return (0, T.CR)({
                user: H,
                channel: y,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: F,
                description: O(
                    {
                        artist: F,
                        media: G
                    },
                    y,
                    H
                ),
                colors: [Y, z],
                badges: (0, T.jE)({ timestamp: n })
            });
        }, [B, F, y, L, null == U ? void 0 : U.src, Y, z, G, H]);
    if (null == B || null == k) return null;
    let q = F,
        K = [];
    if (k.media.provider === i.p.SPOTIFY) {
        (S = () => {
            (0, u.aG)(B);
        }),
            (j = () => {
                (0, u.Z5)(B, H.id);
            }),
            (N = () => {
                (0, u.aG)(B);
            });
        (q = (0, a.jsx)(d.Z, {
            artists: F,
            canOpen: null != B.sync_id,
            linkClassName: M.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, u.d$)(B, H.id, e);
            }
        })),
            (null == V ? void 0 : V.syncDisabled) === !1 &&
                K.push(
                    (0, a.jsx)(
                        I.Ll,
                        {
                            onClick: () => {
                                (0, m.Z)(V, Z.kG.USER_ACTIVITY_SYNC), w();
                            },
                            IconComponent: o.UserPlayIcon,
                            children: P.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
                        },
                        'listen-along'
                    )
                );
    }
    let J = (0, a.jsx)(I.wG, {
        onClickThumbnail: j,
        channel: y,
        entry: L,
        headerIcons:
            k.media.provider === i.p.SPOTIFY
                ? (0, a.jsx)(C.Z, {
                      onClick: N,
                      'aria-label': P.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                      Icon: E.Z
                  })
                : null,
        userDescription: (0, f.kr)(L) ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2 : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
        title: G,
        onClickTitle: S,
        subtitle: q,
        badges: null,
        children: (null === (t = B.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, a.jsx)(R, { activity: B })
    });
    return (0, a.jsxs)(I.yR, {
        children: [
            J,
            (0, a.jsx)(I.St, {
                children: (0, a.jsx)(I.WT, {
                    onReaction: D,
                    onVoiceChannelPreview: b,
                    user: H,
                    channel: y,
                    generateReactionImage: W,
                    reactionImageAltText:
                        ((n = F),
                        (v = H),
                        P.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                            username: v.username,
                            activity: n
                        })),
                    entry: L,
                    buttons: K
                })
            })
        ]
    });
}
