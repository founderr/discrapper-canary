n.d(t, {
    Z: function () {
        return y;
    }
}),
    n(627494),
    n(757143),
    n(653041);
var l = n(200651),
    a = n(192379),
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
    C = n(561308),
    f = n(256726),
    p = n(206295),
    T = n(551228),
    g = n(591853),
    I = n(371991),
    N = n(410441),
    Z = n(981631),
    P = n(616922),
    M = n(689938),
    L = n(290500),
    S = n(738127);
let A = (e, t, n) => {
    let { artist: l, media: a } = e,
        i = M.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST,
        r = _.ZP.getName(t.guild_id, t.id, n);
    return i
        .plainFormat({
            artist: l,
            userName: r,
            media: a
        })
        .replaceAll('*', '');
};
function R(e) {
    let { activity: t } = e,
        n = t.timestamps,
        i = (0, I.tS)(),
        { durationTimestamp: r, seekBarStyles: s } = a.useMemo(() => {
            var e;
            let { start: n, end: l } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == l) return {};
            let a = Math.min(l, i),
                r = l - n,
                s = Math.floor((Math.max(a - n, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(s, '%') },
                durationTimestamp: (0, C.T_)({ start: 0 }, r)
            };
        }, [t, i]);
    return null == s
        ? null
        : (0, l.jsxs)('div', {
              className: L.listeningTimeline,
              children: [
                  (0, l.jsx)(I.x3, { entry: n }),
                  (0, l.jsx)('div', {
                      className: L.seekBarContainer,
                      children: (0, l.jsx)('div', {
                          className: L.seekBarFill,
                          style: s
                      })
                  }),
                  (0, l.jsx)(o.Text, {
                      className: L.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function y(e) {
    var t, n, _;
    let I,
        L,
        y,
        { channel: O, entry: j, closePopout: w, onReaction: b, onVoiceChannelPreview: D } = e,
        { largeImage: U } = (0, v.rv)({ entry: j }),
        { activity: k, currentEntry: H, artist: B, title: V, user: F } = (0, T.pi)(j),
        { primaryColor: G, secondaryColor: Y } = (0, p.Z)(null == U ? void 0 : U.src),
        z = (0, r.e7)([c.Z, x.default], () => ((null == k ? void 0 : k.type) === Z.IIU.LISTENING && null != F ? (0, h.Z)(c.Z, x.default, F, k) : void 0), [k, F], s.Z),
        W = a.useCallback(() => {
            var e;
            if (null == O || null == F) return;
            let t = null === (e = k.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, C.T_)(null != t ? { start: t } : j, Date.now());
            return (0, f.CR)({
                user: F,
                channel: O,
                mediaImageSrc: null == U ? void 0 : U.src,
                artist: B,
                description: A(
                    {
                        artist: B,
                        media: V
                    },
                    O,
                    F
                ),
                colors: [G, Y],
                badges: (0, f.jE)({ timestamp: n })
            });
        }, [k, B, O, j, null == U ? void 0 : U.src, G, Y, V, F]);
    if (null == k || null == H) return null;
    let q = B,
        J = [];
    if (H.media.provider === i.p.SPOTIFY) {
        (L = () => {
            (0, u.aG)(k);
        }),
            (y = () => {
                (0, u.Z5)(k, F.id);
            }),
            (I = () => {
                (0, u.aG)(k);
            });
        (q = (0, l.jsx)(d.Z, {
            artists: B,
            canOpen: null != k.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, u.d$)(k, F.id, e);
            }
        })),
            (null == z ? void 0 : z.syncDisabled) === !1 &&
                J.push(
                    (0, l.jsx)(
                        g.Ll,
                        {
                            onClick: () => {
                                (0, m.Z)(z, P.kG.USER_ACTIVITY_SYNC), w();
                            },
                            IconComponent: o.UserPlayIcon,
                            children: M.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
                        },
                        'listen-along'
                    )
                );
    }
    let K = (0, l.jsx)(g.wG, {
        onClickThumbnail: y,
        channel: O,
        entry: j,
        headerIcons:
            H.media.provider === i.p.SPOTIFY
                ? (0, l.jsx)(N.Z, {
                      onClick: I,
                      'aria-label': M.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
                      Icon: E.Z
                  })
                : null,
        userDescription: (0, C.kr)(j) ? M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING_V2 : M.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED_V2,
        title: V,
        onClickTitle: L,
        subtitle: q,
        badges: null,
        children: (null === (t = k.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, l.jsx)(R, { activity: k })
    });
    return (0, l.jsxs)(g.yR, {
        children: [
            K,
            (0, l.jsx)(g.St, {
                children: (0, l.jsx)(g.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: D,
                    user: F,
                    channel: O,
                    generateReactionImage: W,
                    reactionImageAltText:
                        ((n = B),
                        (_ = F),
                        M.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                            username: _.username,
                            activity: n
                        })),
                    entry: j,
                    buttons: J
                })
            })
        ]
    });
}
