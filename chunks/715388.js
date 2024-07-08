i.d(n, {
    Z: function () {
        return x;
    }
});
var o = i(735250);
i(470079);
var s = i(442837), t = i(481060), l = i(666520), a = i(592125), r = i(430824), c = i(944486), d = i(785717), u = i(621853), I = i(588822), E = i(940730), _ = i(900927), f = i(678738), Z = i(351707), m = i(228168), v = i(689938), S = i(247321);
function x(e) {
    var n;
    let {
            user: i,
            currentUser: x,
            displayProfile: N,
            subsection: h,
            onClose: g
        } = e, {trackUserProfileAction: p} = (0, d.KZ)(), C = (0, s.e7)([r.Z], () => (null == N ? void 0 : N.guildId) != null ? r.Z.getGuild(N.guildId) : null), T = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
        }), R = (0, s.e7)([
            a.Z,
            c.Z
        ], () => a.Z.getChannel(c.Z.getChannelId()));
    return (0, o.jsxs)(t.ScrollerThin, {
        fade: !0,
        className: S.scroller,
        children: [
            (null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== '' && (0, o.jsx)(I.Z, {
                userBio: N.bio,
                setLineClamp: !1
            }),
            (null == T ? void 0 : T.popularApplicationCommandIds) != null && null != R && (0, o.jsx)(E.Z, {
                applicationId: T.id,
                commandIds: T.popularApplicationCommandIds,
                channel: R,
                guildId: null !== (n = null == N ? void 0 : N.guildId) && void 0 !== n ? n : void 0,
                onClick: g
            }),
            null != C && (0, o.jsx)(Z.Z, {
                user: i,
                currentUser: x,
                guild: C,
                scrollIntoView: h === m.Tb.ROLES
            }),
            (0, o.jsx)(f.Z, {
                title: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, o.jsx)(_.Z, {
                    userId: i.id,
                    guildId: null == N ? void 0 : N.guildId,
                    tooltipDelay: m.vB
                })
            }),
            (0, o.jsx)(f.Z, {
                title: v.Z.Messages.NOTE,
                scrollIntoView: h === m.Tb.NOTE,
                children: (0, o.jsx)(l.Z, {
                    userId: i.id,
                    className: S.note,
                    autoFocus: h === m.Tb.NOTE,
                    onUpdate: () => p({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
