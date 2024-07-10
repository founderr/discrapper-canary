n.d(i, {
    Z: function () {
        return x;
    }
});
var l = n(735250);
n(470079);
var s = n(442837), t = n(481060), o = n(666520), a = n(592125), r = n(430824), d = n(944486), c = n(785717), u = n(621853), I = n(588822), f = n(940730), _ = n(900927), E = n(678738), m = n(351707), Z = n(228168), v = n(689938), S = n(247321);
function x(e) {
    var i;
    let {
            user: n,
            currentUser: x,
            displayProfile: h,
            subsection: p,
            onClose: g
        } = e, {trackUserProfileAction: N} = (0, c.KZ)(), T = (0, s.e7)([r.Z], () => (null == h ? void 0 : h.guildId) != null ? r.Z.getGuild(h.guildId) : null), C = (0, s.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }), j = (0, s.e7)([
            a.Z,
            d.Z
        ], () => a.Z.getChannel(d.Z.getChannelId()));
    return (0, l.jsxs)(t.ScrollerThin, {
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
                guildId: null !== (i = null == h ? void 0 : h.guildId) && void 0 !== i ? i : void 0,
                onClick: g
            }),
            null != T && (0, l.jsx)(m.Z, {
                user: n,
                currentUser: x,
                guild: T,
                scrollIntoView: p === Z.Tb.ROLES
            }),
            (0, l.jsx)(E.Z, {
                title: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, l.jsx)(_.Z, {
                    userId: n.id,
                    guildId: null == h ? void 0 : h.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            (0, l.jsx)(E.Z, {
                title: v.Z.Messages.NOTE,
                scrollIntoView: p === Z.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: n.id,
                    className: S.note,
                    autoFocus: p === Z.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
