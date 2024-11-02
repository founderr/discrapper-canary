n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(627494),
    n(757143),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(423875),
    r = n(442837),
    o = n(902704),
    s = n(481060),
    u = n(952164),
    c = n(768419),
    d = n(424678),
    h = n(239470),
    m = n(894344),
    x = n(314897),
    v = n(908841),
    f = n(5192),
    p = n(379357),
    g = n(561308),
    C = n(256726),
    I = n(206295),
    P = n(551228),
    Z = n(591853),
    y = n(371991),
    j = n(410441),
    w = n(981631),
    T = n(616922),
    L = n(388032),
    S = n(290500),
    N = n(738127);
let E = (e, t, n) => {
    let { artist: i, media: l } = e,
        a = L.t['6iNxrq'],
        r = f.ZP.getName(t.guild_id, t.id, n);
    return L.intl
        .formatToMarkdownString(a, {
            artist: i,
            userName: r,
            media: l
        })
        .replaceAll('*', '');
};
function _(e) {
    let { activity: t } = e,
        n = t.timestamps,
        a = (0, y.tS)(),
        { durationTimestamp: r, seekBarStyles: o } = l.useMemo(() => {
            var e;
            let { start: n, end: i } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == i) return {};
            let l = Math.min(i, a),
                r = i - n,
                o = Math.floor((Math.max(l - n, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(o, '%') },
                durationTimestamp: (0, g.T_)({ start: 0 }, r)
            };
        }, [t, a]);
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: S.listeningTimeline,
              children: [
                  (0, i.jsx)(y.x3, { entry: n }),
                  (0, i.jsx)('div', {
                      className: S.seekBarContainer,
                      children: (0, i.jsx)('div', {
                          className: S.seekBarFill,
                          style: o
                      })
                  }),
                  (0, i.jsx)(s.Text, {
                      className: S.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function A(e) {
    var t, n, f;
    let y,
        S,
        A,
        { channel: R, entry: b, closePopout: M, onReaction: O, onVoiceChannelPreview: k } = e,
        { largeImage: H } = (0, p.rv)({ entry: b }),
        { activity: U, currentEntry: D, artist: B, title: V, user: F } = (0, P.pi)(b),
        { primaryColor: G, secondaryColor: z } = (0, I.Z)(null == H ? void 0 : H.src),
        W = (0, r.e7)([c.Z, x.default], () => ((null == U ? void 0 : U.type) === w.IIU.LISTENING && null != F ? (0, h.Z)(c.Z, x.default, F, U) : void 0), [U, F], o.Z),
        q = l.useCallback(() => {
            var e;
            if (null == R || null == F) return;
            let t = null === (e = U.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, g.T_)(null != t ? { start: t } : b, Date.now());
            return (0, C.CR)({
                user: F,
                channel: R,
                mediaImageSrc: null == H ? void 0 : H.src,
                artist: B,
                description: E(
                    {
                        artist: B,
                        media: V
                    },
                    R,
                    F
                ),
                colors: [G, z],
                badges: (0, C.jE)({ timestamp: n })
            });
        }, [U, B, R, b, null == H ? void 0 : H.src, G, z, V, F]);
    if (null == U || null == D) return null;
    let Y = B,
        J = [];
    if (D.media.provider === a.p.SPOTIFY) {
        (S = () => {
            (0, u.aG)(U);
        }),
            (A = () => {
                (0, u.Z5)(U, F.id);
            }),
            (y = () => {
                (0, u.aG)(U);
            });
        (Y = (0, i.jsx)(d.Z, {
            artists: B,
            canOpen: null != U.sync_id,
            linkClassName: N.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, u.d$)(U, F.id, e);
            }
        })),
            (null == W ? void 0 : W.syncDisabled) === !1 &&
                J.push(
                    (0, i.jsx)(
                        Z.Ll,
                        {
                            onClick: () => {
                                (0, m.Z)(W, T.kG.USER_ACTIVITY_SYNC), M();
                            },
                            IconComponent: s.UserPlayIcon,
                            children: L.intl.string(L.t.eU3inJ)
                        },
                        'listen-along'
                    )
                );
    }
    let X = (0, i.jsx)(Z.wG, {
        onClickThumbnail: A,
        channel: R,
        entry: b,
        headerIcons:
            D.media.provider === a.p.SPOTIFY
                ? (0, i.jsx)(j.Z, {
                      onClick: y,
                      'aria-label': L.intl.string(L.t.rRffNz),
                      Icon: v.Z
                  })
                : null,
        userDescription: (0, g.kr)(b) ? L.t.Tzx5Dw : L.t.CcVI1d,
        title: V,
        onClickTitle: S,
        subtitle: Y,
        badges: null,
        children: (null === (t = U.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, i.jsx)(_, { activity: U })
    });
    return (0, i.jsxs)(Z.yR, {
        children: [
            X,
            (0, i.jsx)(Z.St, {
                children: (0, i.jsx)(Z.WT, {
                    onReaction: O,
                    onVoiceChannelPreview: k,
                    user: F,
                    channel: R,
                    generateReactionImage: q,
                    reactionImageAltText:
                        ((n = B),
                        (f = F),
                        L.intl.formatToPlainString(L.t.h2yWWV, {
                            username: f.username,
                            activity: n
                        })),
                    entry: b,
                    buttons: J
                })
            })
        ]
    });
}
