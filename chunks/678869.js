n.d(t, {
    Z: function () {
        return k;
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
    u = n(952164),
    c = n(768419),
    d = n(424678),
    m = n(239470),
    h = n(894344),
    x = n(314897),
    C = n(908841),
    p = n(5192),
    v = n(379357),
    g = n(561308),
    f = n(319604),
    I = n(31074),
    j = n(206295),
    Z = n(551228),
    P = n(591853),
    L = n(371991),
    T = n(410441),
    y = n(981631),
    N = n(616922),
    _ = n(388032),
    S = n(290500),
    A = n(738127);
let E = (e, t, n) => {
    let { artist: l, media: a } = e,
        i = _.t['6iNxrq'],
        r = p.ZP.getName(t.guild_id, t.id, n);
    return _.intl
        .formatToMarkdownString(i, {
            artist: l,
            userName: r,
            media: a
        })
        .replaceAll('*', '');
};
function M(e) {
    let { activity: t } = e,
        n = t.timestamps,
        i = (0, L.tS)(),
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
              className: S.listeningTimeline,
              children: [
                  (0, l.jsx)(L.x3, { entry: n }),
                  (0, l.jsx)('div', {
                      className: S.seekBarContainer,
                      children: (0, l.jsx)('div', {
                          className: S.seekBarFill,
                          style: o
                      })
                  }),
                  (0, l.jsx)(s.Text, {
                      className: S.timestamp,
                      variant: 'text-xs/normal',
                      tabularNumbers: !0,
                      color: void 0,
                      children: r
                  })
              ]
          });
}
function k(e) {
    var t, n, p;
    let L,
        S,
        k,
        { channel: R, entry: w, closePopout: O, onReaction: b, onVoiceChannelPreview: H } = e,
        { largeImage: V } = (0, v.rv)({ entry: w }),
        { activity: B, currentEntry: U, artist: D, title: G, user: z } = (0, Z.pi)(w),
        { primaryColor: Y, secondaryColor: W } = (0, j.Z)(null == V ? void 0 : V.src),
        q = (0, I.Z)(y.ABu.SPOTIFY),
        F = (0, r.e7)([c.Z, x.default], () => ((null == B ? void 0 : B.type) === y.IIU.LISTENING && null != z ? (0, m.Z)(c.Z, x.default, z, B) : void 0), [B, z], o.Z),
        J = a.useCallback(() => {
            var e;
            if (null == R || null == z) return;
            let t = null === (e = B.timestamps) || void 0 === e ? void 0 : e.start,
                n = (0, g.T_)(null != t ? { start: t } : w, Date.now());
            return (0, f.CR)({
                user: z,
                channel: R,
                mediaImageSrc: null == V ? void 0 : V.src,
                artist: D,
                description: E(
                    {
                        artist: D,
                        media: G
                    },
                    R,
                    z
                ),
                colors: [Y, W],
                badges: (0, f.jE)({ timestamp: n })
            });
        }, [B, D, R, w, null == V ? void 0 : V.src, Y, W, G, z]);
    if (null == B || null == U) return null;
    let X = D,
        K = [];
    if (U.media.provider === i.p.SPOTIFY) {
        (S = () => {
            (0, u.aG)(B);
        }),
            (k = () => {
                (0, u.Z5)(B, z.id);
            }),
            (L = () => {
                var e;
                (null !== (e = null == q ? void 0 : q()) && void 0 !== e) || (0, u.aG)(B);
            });
        (X = (0, l.jsx)(d.Z, {
            artists: D,
            canOpen: null != B.sync_id,
            linkClassName: A.popoutTextSecondary,
            onOpenSpotifyArtist: (e) => {
                (0, u.d$)(B, z.id, e);
            }
        })),
            (null == F ? void 0 : F.syncDisabled) === !1 &&
                K.push(
                    (0, l.jsx)(
                        P.Ll,
                        {
                            onClick: () => {
                                (0, h.Z)(F, N.kG.USER_ACTIVITY_SYNC), O();
                            },
                            IconComponent: s.UserPlayIcon,
                            children: _.intl.string(_.t.eU3inJ)
                        },
                        'listen-along'
                    )
                );
    }
    let $ = (0, l.jsx)(P.wG, {
        onClickThumbnail: k,
        channel: R,
        entry: w,
        headerIcons:
            U.media.provider === i.p.SPOTIFY
                ? (0, l.jsx)(T.Z, {
                      onClick: L,
                      'aria-label': _.intl.string(_.t.rRffNz),
                      Icon: C.Z
                  })
                : null,
        userDescription: (0, g.kr)(w) ? _.t.Tzx5Dw : _.t.CcVI1d,
        title: G,
        onClickTitle: S,
        subtitle: X,
        badges: null,
        children: (null === (t = B.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, l.jsx)(M, { activity: B })
    });
    return (0, l.jsxs)(P.yR, {
        children: [
            $,
            (0, l.jsx)(P.St, {
                children: (0, l.jsx)(P.WT, {
                    onReaction: b,
                    onVoiceChannelPreview: H,
                    user: z,
                    channel: R,
                    generateReactionImage: J,
                    reactionImageAltText:
                        ((n = D),
                        (p = z),
                        _.intl.formatToPlainString(_.t.h2yWWV, {
                            username: p.username,
                            activity: n
                        })),
                    entry: w,
                    buttons: K
                })
            })
        ]
    });
}
