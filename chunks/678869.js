t.d(n, {
    Z: function () {
        return j;
    }
}),
    t(627494),
    t(757143),
    t(653041);
var a = t(735250),
    l = t(470079),
    i = t(423875),
    r = t(442837),
    s = t(902704),
    o = t(481060),
    c = t(952164),
    u = t(768419),
    d = t(424678),
    m = t(239470),
    _ = t(894344),
    E = t(314897),
    T = t(908841),
    h = t(5192),
    x = t(561308),
    N = t(256726),
    I = t(206295),
    C = t(551228),
    p = t(591853),
    g = t(371991),
    f = t(410441),
    v = t(981631),
    M = t(616922),
    P = t(689938),
    Z = t(346292),
    S = t(164384);
let A = (e, n, t) => {
    let { artist: a, media: l } = e,
        i = P.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
        r = h.ZP.getName(n.guild_id, n.id, t);
    return i
        .plainFormat({
            artist: a,
            userName: r,
            media: l
        })
        .replaceAll('*', '');
};
function O(e) {
    let { activity: n } = e,
        t = n.timestamps,
        i = (0, g.tS)(),
        { durationTimestamp: r, seekBarStyles: s } = l.useMemo(() => {
            var e;
            let { start: t, end: a } = null !== (e = n.timestamps) && void 0 !== e ? e : {};
            if (null == t || null == a) return {};
            let l = Math.min(a, i),
                r = a - t,
                s = Math.floor((Math.max(l - t, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(s, '%') },
                durationTimestamp: (0, x.T_)({ start: 0 }, r)
            };
        }, [n, i]);
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: Z.listeningTimeline,
              children: [
                  (0, a.jsx)(g.x3, { entry: t }),
                  (0, a.jsx)('div', {
                      className: Z.seekBarContainer,
                      children: (0, a.jsx)('div', {
                          className: Z.seekBarFill,
                          style: s
                      })
                  }),
                  (0, a.jsx)(o.Text, {
                      className: Z.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function j(e) {
    var n, t, h;
    let g,
        Z,
        j,
        { channel: R, entry: y, closePopout: L, onReaction: w, onVoiceChannelPreview: b } = e,
        { activity: k, currentEntry: B, artist: U, imageUrl: G, title: D, user: H } = (0, C.pi)(y),
        { primaryColor: Y, secondaryColor: V } = (0, I.Z)(G),
        F = (0, r.e7)([u.Z, E.default], () => ((null == k ? void 0 : k.type) === v.IIU.LISTENING && null != H ? (0, m.Z)(u.Z, E.default, H, k) : void 0), [k, H], s.Z),
        W = l.useCallback(() => {
            var e;
            if (null == R || null == H) return;
            let n = null === (e = k.timestamps) || void 0 === e ? void 0 : e.start,
                t = (0, x.T_)(null != n ? { start: n } : y, Date.now());
            return (0, N.CR)({
                user: H,
                channel: R,
                mediaImageSrc: G,
                artist: U,
                description: A(
                    {
                        artist: U,
                        media: D
                    },
                    R,
                    H
                ),
                colors: [Y, V],
                badges: (0, N.jE)({ timestamp: t })
            });
        }, [k, U, R, y, G, Y, V, D, H]);
    if (null == k || null == B) return null;
    let z = U,
        q = [];
    if (B.media.provider === i.p.SPOTIFY) {
        (Z = () => {
            (0, c.aG)(k);
        }),
            (j = () => {
                (0, c.Z5)(k, H.id);
            }),
            (g = () => {
                (0, c.aG)(k);
            });
        (z = (0, a.jsx)(d.Z, {
            artists: U,
            canOpen: null != k.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, c.d$)(k, H.id, e);
            }
        })),
            (null == F ? void 0 : F.syncDisabled) === !1 &&
                q.push(
                    (0, a.jsx)(
                        p.Ll,
                        {
                            onClick: () => {
                                (0, _.Z)(F, M.kG.USER_ACTIVITY_SYNC), L();
                            },
                            IconComponent: o.UserPlayIcon,
                            children: P.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
                        },
                        'listen-along'
                    )
                );
    }
    let K = (0, a.jsx)(p.wG, {
        thumbnailSrc: G,
        onClickThumbnail: j,
        channel: R,
        entry: y,
        headerIcons:
            B.media.provider === i.p.SPOTIFY
                ? (0, a.jsx)(f.Z, {
                      onClick: g,
                      'aria-label': P.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                      Icon: T.Z
                  })
                : null,
        userDescription: (0, x.kr)(y) ? P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : P.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
        title: D,
        onClickTitle: Z,
        subtitle: z,
        badges: null,
        children: (null === (n = k.timestamps) || void 0 === n ? void 0 : n.start) != null && (0, a.jsx)(O, { activity: k })
    });
    return (0, a.jsxs)(p.yR, {
        children: [
            K,
            (0, a.jsx)(p.St, {
                children: (0, a.jsx)(p.WT, {
                    onReaction: w,
                    onVoiceChannelPreview: b,
                    user: H,
                    channel: R,
                    generateReactionImage: W,
                    reactionImageAltText:
                        ((t = U),
                        (h = H),
                        P.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                            username: h.username,
                            activity: t
                        })),
                    entry: y,
                    buttons: q
                })
            })
        ]
    });
}
