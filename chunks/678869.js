n.d(t, {
    Z: function () {
        return M;
    }
}), n(627494), n(757143), n(653041);
var i = n(735250), a = n(470079), s = n(423875), l = n(442837), r = n(902704), o = n(481060), c = n(952164), d = n(768419), u = n(239470), h = n(314897), p = n(936195), m = n(5192), _ = n(561308), f = n(256726), E = n(206295), C = n(551228), g = n(591853), I = n(371991), x = n(410441), T = n(981631), N = n(689938), v = n(153602), S = n(331679);
let Z = (e, t, n) => {
    let {
            artist: i,
            media: a
        } = e, s = N.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, l = m.ZP.getName(t.guild_id, t.id, n);
    return s.plainFormat({
        artist: i,
        userName: l,
        media: a
    }).replaceAll('*', '');
};
function A(e) {
    let {activity: t} = e, n = t.timestamps, s = (0, I.tS)(n), {
            durationTimestamp: l,
            seekBarStyles: r
        } = a.useMemo(() => {
            var e;
            let {
                start: n,
                end: i
            } = null !== (e = t.timestamps) && void 0 !== e ? e : {};
            if (null == n || null == i)
                return {};
            let a = Math.min(i, s), l = i - n, r = Math.floor((a - n) / l * 100);
            return {
                seekBarStyles: { width: ''.concat(r, '%') },
                durationTimestamp: (0, _.T_)({ start: i }, n)
            };
        }, [
            t,
            s
        ]);
    return null == r ? null : (0, i.jsxs)('div', {
        className: v.listeningTimeline,
        children: [
            (0, i.jsx)(I.x3, { entry: n }),
            (0, i.jsx)('div', {
                className: v.seekBarContainer,
                children: (0, i.jsx)('div', {
                    className: v.seekBarFill,
                    style: r
                })
            }),
            (0, i.jsx)(o.Text, {
                variant: 'text-xs/normal',
                tabularNumbers: !0,
                color: void 0,
                children: l
            })
        ]
    });
}
function M(e) {
    var t, n, m;
    let I, v, M, {
            channel: b,
            entry: R,
            requestId: j,
            closePopout: L
        } = e, {
            activity: P,
            currentEntry: O,
            artist: y,
            imageUrl: D,
            title: k,
            user: U
        } = (0, C.pi)(R), {
            primaryColor: w,
            secondaryColor: B
        } = (0, E.Z)(D), H = (0, l.e7)([
            d.Z,
            h.default
        ], () => (null == P ? void 0 : P.type) === T.IIU.LISTENING && null != U ? (0, u.Z)(d.Z, h.default, U, P) : void 0, [
            P,
            U
        ], r.Z), G = a.useCallback(() => {
            var e;
            if (null == b || null == U)
                return;
            let t = null === (e = P.timestamps) || void 0 === e ? void 0 : e.start, n = (0, _.T_)(null != t ? { start: t } : R, Date.now());
            return (0, f.CR)({
                user: U,
                channel: b,
                mediaImageSrc: D,
                artist: y,
                description: Z({
                    artist: y,
                    media: k
                }, b, U),
                colors: [
                    w,
                    B
                ],
                badges: (0, f.jE)({ timestamp: n })
            });
        }, [
            P,
            y,
            b,
            R,
            D,
            w,
            B,
            k,
            U
        ]);
    if (null == P || null == O)
        return null;
    let V = y, F = [];
    if (O.media.provider === s.p.SPOTIFY && (null == H ? void 0 : H.syncDisabled) === !1) {
        I = () => {
            (0, c.aG)(P);
        }, F.push((0, i.jsx)(g.Ll, {
            onClick: I,
            IconComponent: o.UserPlayIcon,
            children: N.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
        }, 'listen-along'));
        V = (0, i.jsx)(p.Z, {
            artists: y,
            canOpen: null != P.sync_id,
            linkClassName: S.popoutTextSecondary,
            onOpenSpotifyArtist: e => {
                (0, c.d$)(P, U.id, e);
            }
        }), v = () => {
            (0, c.aG)(P);
        }, M = () => {
            (0, c.Z5)(P, U.id);
        };
    }
    let W = (0, i.jsx)(g.wG, {
        thumbnailSrc: D,
        onClickThumbnail: M,
        channel: b,
        entry: R,
        headerIcons: (0, i.jsx)(x.Z, {
            onClick: I,
            'aria-label': N.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
            provider: O.media.provider
        }),
        userDescription: (0, _.kr)(R) ? N.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : N.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
        title: k,
        onClickTitle: v,
        subtitle: V,
        badges: null,
        children: (null === (t = P.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, i.jsx)(A, { activity: P })
    });
    return (0, i.jsxs)(g.yR, {
        children: [
            W,
            (0, i.jsx)(g.St, {
                children: (0, i.jsx)(g.WT, {
                    closePopout: L,
                    user: U,
                    channel: b,
                    generateReactionImage: G,
                    reactionImageAltText: (n = y, m = U, N.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
                        username: m.username,
                        activity: n
                    })),
                    entry: R,
                    requestId: j,
                    buttons: F
                })
            })
        ]
    });
}
