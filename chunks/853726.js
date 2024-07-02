t.d(n, {
    Z: function () {
        return C;
    }
});
var i = t(735250);
t(470079);
var a = t(442837), r = t(954138), o = t(979264), s = t(741308), l = t(530), c = t(790711), d = t(67152), u = t(271383), f = t(246946), p = t(654904), _ = t(228168), m = t(335182);
function C(e) {
    var n;
    let {
            user: t,
            displayProfile: C,
            guild: b,
            pendingAvatar: g,
            pendingNickname: v,
            pendingGlobalName: x,
            pendingBio: h,
            pendingPronouns: E,
            isTryItOutFlow: T,
            hideBioSection: I
        } = e, S = (0, a.e7)([u.ZP], () => null == b ? null : u.ZP.getMember(b.id, t.id)), A = (0, a.e7)([f.Z], () => f.Z.hidePersonalInformation), N = (0, r.Z)('ProfileCustomizationPreviewBody'), y = null == C ? void 0 : null === (n = C.getPreviewBio(h)) || void 0 === n ? void 0 : n.value, P = null != E ? E : null == C ? void 0 : C.pronouns, j = (0, p.Ly)({
            pendingNickname: v,
            pendingGlobalName: x,
            user: t,
            guildMember: S
        });
    return (0, i.jsxs)('div', {
        inert: '',
        className: m.body,
        children: [
            (0, i.jsx)(l.Z, {
                user: t,
                profileType: _.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != S))
                        return;
                    if (null !== g && !!(null != S.avatar || null != g))
                        return (0, i.jsx)(c.Z, {
                            user: t,
                            nickname: j
                        });
                })(),
                nickname: j,
                pronouns: P,
                isTryItOut: T,
                tags: (0, i.jsx)(s.Z, {
                    displayProfile: C,
                    profileType: _.y0.BITE_SIZE
                })
            }),
            N && (0, i.jsx)(o.ZP, {
                userId: t.id,
                inline: !1
            }),
            !I && null != y && '' !== y && (0, i.jsx)(d.Z, {
                user: t,
                bio: y,
                hidePersonalInformation: A
            })
        ]
    });
}
