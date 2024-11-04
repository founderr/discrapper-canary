n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(627494),
    n(757143),
    n(653041);
var l = n(200651),
    a = n(192379),
    i = n(423875),
    r = n(442837),
    o = n(902704),
    s = n(481060),
    c = n(952164),
    u = n(768419),
    d = n(424678),
    m = n(239470),
    x = n(894344),
    h = n(314897),
    p = n(908841),
    C = n(5192),
    v = n(379357),
    g = n(561308),
    f = n(319604),
    j = n(206295),
    I = n(551228),
    Z = n(591853),
    P = n(371991),
    y = n(410441),
    L = n(981631),
    T = n(616922),
    N = n(388032),
    _ = n(290500),
    S = n(738127);
let E = (e, t, n) => {
    let { artist: l, media: a } = e,
        i = N.t['6iNxrq'],
        r = C.ZP.getName(t.guild_id, t.id, n);
    return N.intl
        .formatToMarkdownString(i, {
            artist: l,
            userName: r,
            media: a
        })
        .replaceAll('*', '');
};
function A(e) {
    let { activity: t } = e,
        n = t.timestamps,
        i = (0, P.tS)(),
        { durationTimestamp: r, seekBarStyles: o } = a.useMemo(() => {
            var e;
            let { start: n, end: l } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == l) return {};
            let a = Math.min(l, i),
                r = l - n,
                o = Math.floor((Math.max(a - n, 0) / r) * 100);
            return {
                seekBarStyles: { width: ''.concat(o, '%') },
                durationTimestamp: (0, g.T_)({ start: 0 }, r)
            };
        }, [t, i]);
    return null == o
        ? null
        : (0, l.jsxs)('div', {
              className: _.listeningTimeline,
              children: [
                  (0, l.jsx)(P.x3, { entry: n }),
                  (0, l.jsx)('div', {
                      className: _.seekBarContainer,
                      children: (0, l.jsx)('div', {
                          className: _.seekBarFill,
                          style: o
                      })
                  }),
                  (0, l.jsx)(s.Text, {
                      className: _.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function M(e) {
    var t, n, C;
    let P,
        _,
        M,
        { channel: k, entry: w, closePopout: R, onReaction: b, onVoiceChannelPreview: H } = e,
        { largeImage: O } = (0, v.rv)({ entry: w }),
        { activity: V, currentEntry: B, artist: U, title: D, user: G } = (0, I.pi)(w),
        { primaryColor: z, secondaryColor: q } = (0, j.Z)(null == O ? void 0 : O.src),
        Y = (0, r.e7)([u.Z, h.default], () => ((null == V ? void 0 : V.type) === L.IIU.LISTENING && null != G ? (0, m.Z)(u.Z, h.default, G, V) : void 0), [V, G], o.Z),
        W = a.useCallback(() => {
            var e;
            if (null == k || null == G) return;
            let t = null === (e = V.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, g.T_)(null != t ? { start: t } : w, Date.now());
            return (0, f.CR)({
                user: G,
                channel: k,
                mediaImageSrc: null == O ? void 0 : O.src,
                artist: U,
                description: E(
                    {
                        artist: U,
                        media: D
                    },
                    k,
                    G
                ),
                colors: [z, q],
                badges: (0, f.jE)({ timestamp: n })
            });
        }, [V, U, k, w, null == O ? void 0 : O.src, z, q, D, G]);
    if (null == V || null == B) return null;
    let F = U,
        J = [];
    if (B.media.provider === i.p.SPOTIFY) {
        (_ = () => {
            (0, c.aG)(V);
        }),
            (M = () => {
                (0, c.Z5)(V, G.id);
            }),
            (P = () => {
                (0, c.aG)(V);
            });
        (F = (0, l.jsx)(d.Z, {
            artists: U,
            canOpen: null != V.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, c.d$)(V, G.id, e);
            }
        })),
            (null == Y ? void 0 : Y.syncDisabled) === !1 &&
                J.push(
                    (0, l.jsx)(
                        Z.Ll,
                        {
                            onClick: () => {
                                (0, x.Z)(Y, T.kG.USER_ACTIVITY_SYNC), R();
                            },
                            IconComponent: s.UserPlayIcon,
                            children: N.intl.string(N.t.eU3inJ)
                        },
                        'listen-along'
                    )
                );
    }
    let K = (0, l.jsx)(Z.wG, {
        onClickThumbnail: M,
        channel: k,
        entry: w,
        headerIcons:
            B.media.provider === i.p.SPOTIFY
                ? (0, l.jsx)(y.Z, {
                      onClick: P,
                      'aria-label': N.intl.string(N.t.rRffNz),
                      Icon: p.Z
                  })
                : null,
        userDescription: (0, g.kr)(w) ? N.t.Tzx5Dw : N.t.CcVI1d,
        title: D,
        onClickTitle: _,
        subtitle: F,
        badges: null,
        children: (null === (t = V.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, l.jsx)(A, { activity: V })
    });
    return (0, l.jsxs)(Z.yR, {
        children: [
            K,
            (0, l.jsx)(Z.St, {
                children: (0, l.jsx)(Z.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: H,
                    user: G,
                    channel: k,
                    generateReactionImage: W,
                    reactionImageAltText:
                        ((n = U),
                        (C = G),
                        N.intl.formatToPlainString(N.t.h2yWWV, {
                            username: C.username,
                            activity: n
                        })),
                    entry: w,
                    buttons: J
                })
            })
        ]
    });
}
