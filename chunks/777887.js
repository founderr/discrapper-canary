n.d(t, {
    Z: function () {
        return v;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(592125), s = n(944486), l = n(246946), u = n(5192), c = n(621853), d = n(741308), _ = n(940730), E = n(681837), f = n(724593), h = n(678738), p = n(530), m = n(580512), I = n(67152), T = n(579285), g = n(287612), S = n(228168), A = n(689938), N = n(335182);
function v(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: v,
            guild: O,
            isHovering: R,
            onOpenProfile: C,
            channelId: y,
            onClose: D
        } = e, L = u.ZP.getName(null == O ? void 0 : O.id, y, t), b = (0, i.e7)([c.Z], () => {
            var e;
            return null === (e = c.Z.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application;
        }), M = (0, i.e7)([
            o.Z,
            s.Z
        ], () => o.Z.getChannel(s.Z.getChannelId())), P = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation), U = null == O ? null : (0, r.jsx)(T.Z, {
            user: t,
            currentUser: n,
            guild: O,
            onOpenProfile: () => null == C ? void 0 : C({ subsection: S.Tb.ROLES })
        });
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: N.body,
        children: [
            (0, r.jsx)(p.Z, {
                user: t,
                profileType: S.y0.BITE_SIZE,
                onOpenProfile: C,
                nickname: L,
                pronouns: null == v ? void 0 : v.pronouns,
                tags: (0, r.jsx)(d.Z, {
                    displayProfile: v,
                    profileType: S.y0.BITE_SIZE,
                    onClose: D
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.Z, { userId: t.id }),
                        !P && (0, r.jsx)(f.Z, {
                            user: t,
                            isHovering: R,
                            onOpenProfile: () => null == C ? void 0 : C({ subsection: S.Tb.NOTE })
                        })
                    ]
                })
            }),
            (0, r.jsx)(g.Z, {
                user: t,
                onOpenProfile: e => null == C ? void 0 : C({ section: e })
            }),
            (0, r.jsx)(I.Z, {
                user: t,
                bio: null == v ? void 0 : v.bio,
                hidePersonalInformation: P,
                onClose: D
            }),
            (0, r.jsx)(m.Z, {
                user: t,
                guild: O,
                channelId: y,
                onClose: D
            }),
            (null == b ? void 0 : b.popularApplicationCommandIds) != null && null != M && (0, r.jsx)(_.Z, {
                applicationId: b.id,
                commandIds: b.popularApplicationCommandIds,
                channel: M,
                guildId: null == O ? void 0 : O.id,
                onClick: D
            }),
            null != U && (0, r.jsx)(h.Z, {
                title: A.Z.Messages.ROLES,
                children: U
            })
        ]
    });
}
