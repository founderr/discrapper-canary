t.d(n, {
    Z: function () {
        return R;
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
    u = t(952164),
    c = t(768419),
    d = t(424678),
    _ = t(239470),
    m = t(894344),
    E = t(314897),
    T = t(908841),
    h = t(5192),
    x = t(379357),
    N = t(561308),
    I = t(256726),
    p = t(206295),
    C = t(551228),
    g = t(591853),
    v = t(371991),
    f = t(410441),
    M = t(981631),
    P = t(616922),
    Z = t(689938),
    A = t(346292),
    S = t(164384);
let O = (e, n, t) => {
    let { artist: a, media: l } = e,
        i = Z.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
        r = h.ZP.getName(n.guild_id, n.id, t);
    return i
        .plainFormat({
            artist: a,
            userName: r,
            media: l
        })
        .replaceAll('*', '');
};
function j(e) {
    let { activity: n } = e,
        t = n.timestamps,
        i = (0, v.tS)(),
        { durationTimestamp: r, seekBarStyles: s } = l.useMemo(() => {
            var e;
            let { start: t, end: a } = null !== (e = n.timestamps) && void 0 !== e ? e : {};
            if (null == t || null == a) return {};
            let l = Math.min(a, i),
                r = a - t,
                s = Math.floor((Math.max(l - t, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(s, '%') },
                durationTimestamp: (0, N.T_)({ start: 0 }, r)
            };
        }, [n, i]);
    return null == s
        ? null
        : (0, a.jsxs)('div', {
              className: A.listeningTimeline,
              children: [
                  (0, a.jsx)(v.x3, { entry: t }),
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
function R(e) {
    var n, t, h;
    let v,
        A,
        R,
        { channel: y, entry: L, closePopout: w, onReaction: B, onVoiceChannelPreview: k } = e,
        { largeImage: U } = (0, x.rv)({ entry: L }),
        { activity: b, currentEntry: G, artist: D, title: H, user: V } = (0, C.pi)(L),
        { primaryColor: Y, secondaryColor: F } = (0, p.Z)(null == U ? void 0 : U.src),
        W = (0, r.e7)([c.Z, E.default], () => ((null == b ? void 0 : b.type) === M.IIU.LISTENING && null != V ? (0, _.Z)(c.Z, E.default, V, b) : void 0), [b, V], s.Z),
        z = l.useCallback(() => {
            var e;
            if (null == y || null == V) return;
            let n = null === (e = b.timestamps) || void 0 === e ? void 0 : e.start,
                t = (0, N.T_)(null != n ? { start: n } : L, Date.now());
            return (0, I.CR)({
                user: V,
                channel: y,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: D,
                description: O(
                    {
                        artist: D,
                        media: H
                    },
                    y,
                    V
                ),
                colors: [Y, F],
                badges: (0, I.jE)({ timestamp: t })
            });
        }, [b, D, y, L, null == U ? void 0 : U.src, Y, F, H, V]);
    if (null == b || null == G) return null;
    let q = D,
        K = [];
    if (G.media.provider === i.p.SPOTIFY) {
        (A = () => {
            (0, u.aG)(b);
        }),
            (R = () => {
                (0, u.Z5)(b, V.id);
            }),
            (v = () => {
                (0, u.aG)(b);
            });
        (q = (0, a.jsx)(d.Z, {
            artists: D,
            canOpen: null != b.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, u.d$)(b, V.id, e);
            }
        })),
            (null == W ? void 0 : W.syncDisabled) === !1 &&
                K.push(
                    (0, a.jsx)(
                        g.Ll,
                        {
                            onClick: () => {
                                (0, m.Z)(W, P.kG.USER_ACTIVITY_SYNC), w();
                            },
                            IconComponent: o.UserPlayIcon,
                            children: Z.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
                        },
                        'listen-along'
                    )
                );
    }
    let J = (0, a.jsx)(g.wG, {
        onClickThumbnail: R,
        channel: y,
        entry: L,
        headerIcons:
            G.media.provider === i.p.SPOTIFY
                ? (0, a.jsx)(f.Z, {
                      onClick: v,
                      'aria-label': Z.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                      Icon: T.Z
                  })
                : null,
        userDescription: (0, N.kr)(L) ? Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2 : Z.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
        title: H,
        onClickTitle: A,
        subtitle: q,
        badges: null,
        children: (null === (n = b.timestamps) || void 0 === n ? void 0 : n.start) != null && (0, a.jsx)(j, { activity: b })
    });
    return (0, a.jsxs)(g.yR, {
        children: [
            J,
            (0, a.jsx)(g.St, {
                children: (0, a.jsx)(g.WT, {
                    onReaction: B,
                    onVoiceChannelPreview: k,
                    user: V,
                    channel: y,
                    generateReactionImage: z,
                    reactionImageAltText:
                        ((t = D),
                        (h = V),
                        Z.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                            username: h.username,
                            activity: t
                        })),
                    entry: L,
                    buttons: K
                })
            })
        ]
    });
}
