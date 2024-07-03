n(627494), n(757143);
var i = n(735250), a = n(470079), s = n(317261), l = n(70956), r = n(5192), o = n(561308), c = n(919394), d = n(206295), u = n(555672), h = n(297781), p = n(591853), m = n(265048), _ = n(689938);
let f = (e, t, n, i) => {
        let a = function (e) {
                if (e === s._.WEEK)
                    return _.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME_WEEK_POPOUT;
            }(i), l = r.ZP.getName(t.guild_id, t.id, n), o = e.extra.game_name;
        return a.plainFormat({
            gameName: o,
            userName: l
        }).replaceAll('*', '');
    }, E = (e, t) => _.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_PLAYING.format({
        username: t.username,
        activity: e.extra.game_name
    });
t.Z = e => {
    let {
            channel: t,
            entry: n,
            requestId: s,
            closePopout: r
        } = e, {
            iconUrl: C,
            iconTitle: g,
            user: I,
            details: x,
            gameTitle: T
        } = (0, m.F)(n), {
            primaryColor: v,
            secondaryColor: N
        } = (0, d.Z)(C), S = (0, o.yA)(n), Z = (0, o.Nq)(n), A = a.useCallback(e => {
            if (null != I && null != S && null != Z && !!(0, u.qy)(Z))
                return (0, c.SO)({
                    entry: n,
                    applicationImageSrc: C,
                    avatarSrcs: [I.getAvatarURL(t.guild_id, 128)],
                    description: f(n, t, I, Z),
                    timestamp: _.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_FOR_HOURS.format({ hours: Math.round(S / l.Z.Seconds.HOUR) }),
                    colors: [
                        v,
                        N
                    ],
                    channelId: e
                });
        }, [
            C,
            t,
            S,
            n,
            v,
            Z,
            N,
            I
        ]);
    return null != I && null != S && null != Z && (0, u.qy)(Z) ? (0, i.jsxs)(p.yR, {
        children: [
            (0, i.jsx)(p.wG, {
                thumbnailSrc: C,
                thumbnailTitle: g,
                channel: t,
                entry: n,
                userDescription: _.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED,
                title: T,
                subtitle: x,
                badges: (0, i.jsx)(h.Gk, {
                    location: h.Gt.POPOUT,
                    children: u.Hs.map((e, t) => (0, i.jsx)(e, { entry: n }, t))
                })
            }),
            (0, i.jsx)(p.St, {
                children: (0, i.jsx)(p.WT, {
                    closePopout: r,
                    user: I,
                    channel: t,
                    generateReactionImage: A,
                    reactionImageAltText: E(n, I),
                    entry: n,
                    requestId: s
                })
            })
        ]
    }) : null;
};
