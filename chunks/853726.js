a.d(n, {
    Z: function () {
        return p;
    }
});
var t = a(735250);
a(470079);
var s = a(442837),
    c = a(648052),
    o = a(530),
    i = a(420654),
    r = a(116854),
    d = a(271383),
    l = a(246946),
    u = a(654904),
    A = a(228168),
    f = a(451563);
function p(e) {
    var n;
    let { user: a, displayProfile: p, guild: E, pendingAvatar: _, pendingNickname: L, pendingGlobalName: I, pendingBio: P, pendingPronouns: R, isTryItOutFlow: b, hideBioSection: Z } = e,
        N = (0, s.e7)([d.ZP], () => (null == E ? null : d.ZP.getMember(E.id, a.id))),
        m = (0, s.e7)([l.Z], () => l.Z.hidePersonalInformation),
        T = null == p ? void 0 : null === (n = p.getPreviewBio(P)) || void 0 === n ? void 0 : n.value,
        v = null != R ? R : null == p ? void 0 : p.pronouns,
        M = (0, u.Ly)({
            pendingNickname: L,
            pendingGlobalName: I,
            user: a,
            guildMember: N
        });
    return (0, t.jsxs)('div', {
        inert: '',
        className: f.body,
        children: [
            (0, t.jsx)(o.Z, {
                user: a,
                profileType: A.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != N)) return;
                    if (null !== _ && !!(null != N.avatar || null != _))
                        return (0, t.jsx)(r.Z, {
                            user: a,
                            nickname: M
                        });
                })(),
                nickname: M,
                pronouns: v,
                isTryItOut: b,
                tags: (0, t.jsx)(c.Z, {
                    displayProfile: p,
                    profileType: A.y0.BITE_SIZE
                })
            }),
            !Z &&
                null != T &&
                '' !== T &&
                (0, t.jsx)(i.Z, {
                    user: a,
                    bio: T,
                    hidePersonalInformation: m,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
