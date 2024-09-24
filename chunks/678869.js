n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(627494),
    n(757143),
    n(653041);
var l = n(735250),
    a = n(470079),
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
    _ = n(5192),
    v = n(379357),
    T = n(561308),
    p = n(256726),
    f = n(206295),
    g = n(551228),
    I = n(591853),
    C = n(371991),
    N = n(410441),
    P = n(981631),
    Z = n(616922),
    A = n(689938),
    S = n(290500),
    M = n(738127);
let y = (e, t, n) => {
    let { artist: l, media: a } = e,
        i = A.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
        r = _.ZP.getName(t.guild_id, t.id, n);
    return i
        .plainFormat({
            artist: l,
            userName: r,
            media: a
        })
        .replaceAll('*', '');
};
function O(e) {
    let { activity: t } = e,
        n = t.timestamps,
        i = (0, C.tS)(),
        { durationTimestamp: r, seekBarStyles: s } = a.useMemo(() => {
            var e;
            let { start: n, end: l } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == l) return {};
            let a = Math.min(l, i),
                r = l - n,
                s = Math.floor((Math.max(a - n, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(s, '%') },
                durationTimestamp: (0, T.T_)({ start: 0 }, r)
            };
        }, [t, i]);
    return null == s
        ? null
        : (0, l.jsxs)('div', {
              className: S.listeningTimeline,
              children: [
                  (0, l.jsx)(C.x3, { entry: n }),
                  (0, l.jsx)('div', {
                      className: S.seekBarContainer,
                      children: (0, l.jsx)('div', {
                          className: S.seekBarFill,
                          style: s
                      })
                  }),
                  (0, l.jsx)(o.Text, {
                      className: S.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function R(e) {
    var t, n, _;
    let C,
        S,
        R,
        { channel: j, entry: L, closePopout: w, onReaction: b, onVoiceChannelPreview: D } = e,
        { largeImage: U } = (0, v.rv)({ entry: L }),
        { activity: B, currentEntry: k, artist: F, title: G, user: H } = (0, g.pi)(L),
        { primaryColor: V, secondaryColor: Y } = (0, f.Z)(null == U ? void 0 : U.src),
        z = (0, r.e7)([c.Z, x.default], () => ((null == B ? void 0 : B.type) === P.IIU.LISTENING && null != H ? (0, h.Z)(c.Z, x.default, H, B) : void 0), [B, H], s.Z),
        W = a.useCallback(() => {
            var e;
            if (null == j || null == H) return;
            let t = null === (e = B.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, T.T_)(null != t ? { start: t } : L, Date.now());
            return (0, p.CR)({
                user: H,
                channel: j,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: F,
                description: y(
                    {
                        artist: F,
                        media: G
                    },
                    j,
                    H
                ),
                colors: [V, Y],
                badges: (0, p.jE)({ timestamp: n })
            });
        }, [B, F, j, L, null == U ? void 0 : U.src, V, Y, G, H]);
    if (null == B || null == k) return null;
    let q = F,
        J = [];
    if (k.media.provider === i.p.SPOTIFY) {
        (S = () => {
            (0, u.aG)(B);
        }),
            (R = () => {
                (0, u.Z5)(B, H.id);
            }),
            (C = () => {
                (0, u.aG)(B);
            });
        (q = (0, l.jsx)(d.Z, {
            artists: F,
            canOpen: null != B.sync_id,
            linkClassName: M.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, u.d$)(B, H.id, e);
            }
        })),
            (null == z ? void 0 : z.syncDisabled) === !1 &&
                J.push(
                    (0, l.jsx)(
                        I.Ll,
                        {
                            onClick: () => {
                                (0, m.Z)(z, Z.kG.USER_ACTIVITY_SYNC), w();
                            },
                            IconComponent: o.UserPlayIcon,
                            children: A.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
                        },
                        'listen-along'
                    )
                );
    }
    let K = (0, l.jsx)(I.wG, {
        onClickThumbnail: R,
        channel: j,
        entry: L,
        headerIcons:
            k.media.provider === i.p.SPOTIFY
                ? (0, l.jsx)(N.Z, {
                      onClick: C,
                      'aria-label': A.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                      Icon: E.Z
                  })
                : null,
        userDescription: (0, T.kr)(L) ? A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2 : A.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
        title: G,
        onClickTitle: S,
        subtitle: q,
        badges: null,
        children: (null === (t = B.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, l.jsx)(O, { activity: B })
    });
    return (0, l.jsxs)(I.yR, {
        children: [
            K,
            (0, l.jsx)(I.St, {
                children: (0, l.jsx)(I.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: D,
                    user: H,
                    channel: j,
                    generateReactionImage: W,
                    reactionImageAltText:
                        ((n = F),
                        (_ = H),
                        A.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                            username: _.username,
                            activity: n
                        })),
                    entry: L,
                    buttons: J
                })
            })
        ]
    });
}
