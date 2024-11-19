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
    h = n(894344),
    x = n(314897),
    p = n(908841),
    C = n(5192),
    v = n(379357),
    g = n(561308),
    f = n(319604),
    I = n(206295),
    j = n(551228),
    P = n(591853),
    Z = n(371991),
    L = n(410441),
    y = n(981631),
    T = n(616922),
    N = n(388032),
    _ = n(426159),
    E = n(634140);
let S = (e, t, n) => {
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
        i = (0, Z.tS)(),
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
                  (0, l.jsx)(Z.x3, { entry: n }),
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
    let Z,
        _,
        M,
        { channel: k, entry: w, closePopout: R, onReaction: b, onVoiceChannelPreview: H } = e,
        { largeImage: O } = (0, v.rv)({ entry: w }),
        { activity: V, currentEntry: B, artist: U, title: D, user: G } = (0, j.pi)(w),
        { primaryColor: z, secondaryColor: W } = (0, I.Z)(null == O ? void 0 : O.src),
        q = (0, r.e7)([u.Z, x.default], () => ((null == V ? void 0 : V.type) === y.IIU.LISTENING && null != G ? (0, m.Z)(u.Z, x.default, G, V) : void 0), [V, G], o.Z),
        Y = a.useCallback(() => {
            var e;
            if (null == k || null == G) return;
            let t = null === (e = V.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, g.T_)(null != t ? { start: t } : w, Date.now());
            return (0, f.CR)({
                user: G,
                channel: k,
                mediaImageSrc: null == O ? void 0 : O.src,
                artist: U,
                description: S(
                    {
                        artist: U,
                        media: D
                    },
                    k,
                    G
                ),
                colors: [z, W],
                badges: (0, f.jE)({ timestamp: n })
            });
        }, [V, U, k, w, null == O ? void 0 : O.src, z, W, D, G]);
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
            (Z = () => {
                (0, c.aG)(V);
            });
        (F = (0, l.jsx)(d.Z, {
            artists: U,
            canOpen: null != V.sync_id,
            linkClassName: E.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, c.d$)(V, G.id, e);
            }
        })),
            (null == q ? void 0 : q.syncDisabled) === !1 &&
                J.push(
                    (0, l.jsx)(
                        P.Ll,
                        {
                            onClick: () => {
                                (0, h.Z)(q, T.kG.USER_ACTIVITY_SYNC), R();
                            },
                            IconComponent: s.UserPlayIcon,
                            children: N.intl.string(N.t.eU3inJ)
                        },
                        'listen-along'
                    )
                );
    }
    let K = (0, l.jsx)(P.wG, {
        onClickThumbnail: M,
        channel: k,
        entry: w,
        headerIcons:
            B.media.provider === i.p.SPOTIFY
                ? (0, l.jsx)(L.Z, {
                      onClick: Z,
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
    return (0, l.jsxs)(P.yR, {
        children: [
            K,
            (0, l.jsx)(P.St, {
                children: (0, l.jsx)(P.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: H,
                    user: G,
                    channel: k,
                    generateReactionImage: Y,
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
