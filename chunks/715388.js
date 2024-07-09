i.d(n, {
    Z: function () {
        return x;
    }
});
var l = i(735250);
i(470079);
var s = i(442837), o = i(481060), t = i(666520), a = i(592125), r = i(430824), d = i(944486), c = i(785717), u = i(621853), I = i(588822), f = i(940730), _ = i(900927), E = i(678738), m = i(351707), Z = i(228168), v = i(689938), S = i(247321);
function x(e) {
    var n;
    let {
            user: i,
            currentUser: x,
            displayProfile: h,
            subsection: N,
            onClose: p
        } = e, {trackUserProfileAction: g} = (0, c.KZ)(), T = (0, s.e7)([r.Z], () => (null == h ? void 0 : h.guildId) != null ? r.Z.getGuild(h.guildId) : null), C = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(i.id)) || void 0 === e ? void 0 : e.application;
        }), j = (0, s.e7)([
            a.Z,
            d.Z
        ], () => a.Z.getChannel(d.Z.getChannelId()));
    return (0, l.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: S.scroller,
        children: [
            (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, l.jsx)(I.Z, {
                userBio: h.bio,
                setLineClamp: !1
            }),
            (null == C ? void 0 : C.popularApplicationCommandIds) != null && null != j && (0, l.jsx)(f.Z, {
                applicationId: C.id,
                commandIds: C.popularApplicationCommandIds,
                channel: j,
                guildId: null !== (n = null == h ? void 0 : h.guildId) && void 0 !== n ? n : void 0,
                onClick: p
            }),
            null != T && (0, l.jsx)(m.Z, {
                user: i,
                currentUser: x,
                guild: T,
                scrollIntoView: N === Z.Tb.ROLES
            }),
            (0, l.jsx)(E.Z, {
                title: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, l.jsx)(_.Z, {
                    userId: i.id,
                    guildId: null == h ? void 0 : h.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            (0, l.jsx)(E.Z, {
                title: v.Z.Messages.NOTE,
                scrollIntoView: N === Z.Tb.NOTE,
                children: (0, l.jsx)(t.Z, {
                    userId: i.id,
                    className: S.note,
                    autoFocus: N === Z.Tb.NOTE,
                    onUpdate: () => g({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
