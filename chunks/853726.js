a.d(n, {
    Z: function () {
        return _;
    }
});
var i = a(735250);
a(470079);
var s = a(442837),
    r = a(648052),
    o = a(530),
    l = a(420654),
    t = a(116854),
    c = a(271383),
    u = a(246946),
    d = a(654904),
    A = a(228168),
    E = a(451563);
function _(e) {
    var n;
    let { user: a, displayProfile: _, guild: I, pendingAvatar: p, pendingNickname: P, pendingGlobalName: v, pendingBio: m, pendingPronouns: N, isTryItOutFlow: C, hideBioSection: T } = e,
        f = (0, s.e7)([c.ZP], () => (null == I ? null : c.ZP.getMember(I.id, a.id))),
        L = (0, s.e7)([u.Z], () => u.Z.hidePersonalInformation),
        R = null == _ ? void 0 : null === (n = _.getPreviewBio(m)) || void 0 === n ? void 0 : n.value,
        M = null != N ? N : null == _ ? void 0 : _.pronouns,
        S = (0, d.Ly)({
            pendingNickname: P,
            pendingGlobalName: v,
            user: a,
            guildMember: f
        });
    return (0, i.jsxs)('div', {
        inert: '',
        className: E.body,
        children: [
            (0, i.jsx)(o.Z, {
                user: a,
                profileType: A.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != f)) return;
                    if (null !== p && !!(null != f.avatar || null != p))
                        return (0, i.jsx)(t.Z, {
                            user: a,
                            nickname: S
                        });
                })(),
                nickname: S,
                pronouns: M,
                isTryItOut: C,
                tags: (0, i.jsx)(r.Z, {
                    displayProfile: _,
                    profileType: A.y0.BITE_SIZE
                })
            }),
            !T &&
                null != R &&
                '' !== R &&
                (0, i.jsx)(l.Z, {
                    user: a,
                    bio: R,
                    hidePersonalInformation: L,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
