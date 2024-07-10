n.d(i, {
    Z: function () {
        return x;
    }
});
var s = n(735250);
n(470079);
var l = n(442837), t = n(481060), o = n(666520), r = n(592125), a = n(430824), d = n(944486), c = n(785717), u = n(621853), I = n(588822), _ = n(940730), f = n(900927), E = n(678738), m = n(351707), S = n(228168), v = n(689938), Z = n(247321);
function x(e) {
    var i;
    let {
            user: n,
            currentUser: x,
            displayProfile: h,
            subsection: p,
            onClose: g
        } = e, {trackUserProfileAction: T} = (0, c.KZ)(), N = (0, l.e7)([a.Z], () => (null == h ? void 0 : h.guildId) != null ? a.Z.getGuild(h.guildId) : null), C = (0, l.e7)([u.Z], () => {
            var e;
            return null === (e = u.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }), j = (0, l.e7)([
            r.Z,
            d.Z
        ], () => r.Z.getChannel(d.Z.getChannelId()));
    return (0, s.jsxs)(t.ScrollerThin, {
        fade: !0,
        className: Z.scroller,
        children: [
            (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, s.jsx)(I.Z, {
                userBio: h.bio,
                setLineClamp: !1
            }),
            (null == C ? void 0 : C.popularApplicationCommandIds) != null && null != j && (0, s.jsx)(_.Z, {
                applicationId: C.id,
                commandIds: C.popularApplicationCommandIds,
                channel: j,
                guildId: null !== (i = null == h ? void 0 : h.guildId) && void 0 !== i ? i : void 0,
                onClick: g
            }),
            null != N && (0, s.jsx)(m.Z, {
                user: n,
                currentUser: x,
                guild: N,
                scrollIntoView: p === S.Tb.ROLES
            }),
            (0, s.jsx)(E.Z, {
                title: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, s.jsx)(f.Z, {
                    userId: n.id,
                    guildId: null == h ? void 0 : h.guildId,
                    tooltipDelay: S.vB
                })
            }),
            (0, s.jsx)(E.Z, {
                title: v.Z.Messages.NOTE,
                scrollIntoView: p === S.Tb.NOTE,
                children: (0, s.jsx)(o.Z, {
                    userId: n.id,
                    className: Z.note,
                    autoFocus: p === S.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
