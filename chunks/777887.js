n.d(t, {
    Z: function () {
        return I;
    }
});
var r = n(735250);
n(470079);
var i = n(442837), a = n(481060), o = n(246946), s = n(5192), l = n(741308), u = n(681837), c = n(724593), d = n(530), _ = n(580512), E = n(67152), f = n(579285), h = n(287612), p = n(228168), m = n(335182);
function I(e) {
    let {
            user: t,
            currentUser: n,
            displayProfile: I,
            guild: T,
            isHovering: g,
            onOpenProfile: S,
            channelId: A,
            onClose: N
        } = e, v = s.ZP.getName(null == T ? void 0 : T.id, A, t), O = (0, i.e7)([o.Z], () => o.Z.hidePersonalInformation);
    return (0, r.jsxs)(a.Scroller, {
        fade: !0,
        className: m.body,
        children: [
            (0, r.jsx)(d.Z, {
                user: t,
                profileType: p.y0.BITE_SIZE,
                onOpenProfile: S,
                nickname: v,
                pronouns: null == I ? void 0 : I.pronouns,
                tags: (0, r.jsx)(l.Z, {
                    displayProfile: I,
                    profileType: p.y0.BITE_SIZE,
                    onClose: N
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.Z, { userId: t.id }),
                        !O && (0, r.jsx)(c.Z, {
                            user: t,
                            isHovering: g,
                            onOpenProfile: () => null == S ? void 0 : S({ subsection: p.Tb.NOTE })
                        })
                    ]
                })
            }),
            (0, r.jsx)(h.Z, {
                user: t,
                onOpenProfile: e => null == S ? void 0 : S({ section: e })
            }),
            (0, r.jsx)(E.Z, {
                user: t,
                bio: null == I ? void 0 : I.bio,
                hidePersonalInformation: O,
                onClose: N
            }),
            (0, r.jsx)(_.Z, {
                user: t,
                guild: T,
                channelId: A,
                onClose: N
            }),
            null != T && (0, r.jsx)(f.Z, {
                user: t,
                currentUser: n,
                guild: T,
                onOpenProfile: () => null == S ? void 0 : S({ subsection: p.Tb.ROLES })
            })
        ]
    });
}
