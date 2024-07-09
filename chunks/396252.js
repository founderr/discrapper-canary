n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), s = n.n(a), r = n(442837), l = n(481060), o = n(430824), c = n(467679), d = n(702346), u = n(739566), _ = n(464891), E = n(83561), m = n(674563), I = n(689938), T = n(713389);
function h(e) {
    var t;
    let {
            message: n,
            compact: a,
            usernameHook: h,
            channel: N
        } = e, p = (0, r.e7)([o.Z], () => o.Z.getGuild(N.guild_id)), f = (0, u.ZP)(n), C = h(f), {
            avatarSrc: g,
            eventHandlers: {
                onMouseEnter: S,
                onMouseLeave: A
            }
        } = (0, E.m)(!0);
    return (0, i.jsx)('div', {
        onMouseEnter: S,
        onMouseLeave: A,
        children: (0, i.jsx)(d.Z, {
            className: s()(T.mainContainer, { [T.compact]: a }),
            iconNode: a ? null : (0, i.jsx)(E.S, { src: g }),
            iconContainerClassName: T.iconContainer,
            compact: a,
            children: (0, i.jsxs)('div', {
                className: s()(T.content, { [T.compact]: a }),
                children: [
                    (0, i.jsx)(_.nD, {
                        message: n,
                        messageClassname: T.spanCorrection,
                        className: s()(T.usernameContainer, T.spanCorrection, { [T.compact]: a }),
                        username: (0, i.jsxs)('div', {
                            className: T.spanCorrection,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-brand',
                                    tag: 'span',
                                    className: T.username,
                                    children: I.Z.Messages.GUILD_AUTOMOD_USERNAME
                                }),
                                (0, i.jsx)(c.Z, {
                                    type: m.Hb.SYSTEM_DM,
                                    className: T.systemTag
                                })
                            ]
                        }),
                        compact: a,
                        showTimestamp: !0
                    }),
                    (0, i.jsx)('div', {
                        className: s()(T.__invalid_messageContent, { [T.compact]: a }),
                        children: I.Z.Messages.GUILD_RAID_REPORT_SYSTEM_MESSAGE.format({
                            username: f.nick,
                            usernameHook: C,
                            guildName: null !== (t = null == p ? void 0 : p.name) && void 0 !== t ? t : ''
                        })
                    })
                ]
            })
        })
    });
}
