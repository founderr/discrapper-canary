n.d(t, {
    Z: function () {
        return R;
    }
});
var s = n(735250);
n(470079);
var a = n(442837),
    r = n(954138),
    i = n(979264),
    l = n(648052),
    o = n(530),
    c = n(420654),
    d = n(116854),
    _ = n(271383),
    E = n(246946),
    u = n(654904),
    T = n(228168),
    I = n(451563);
function R(e) {
    var t;
    let { user: n, displayProfile: R, guild: g, pendingAvatar: N, pendingNickname: C, pendingGlobalName: m, pendingBio: f, pendingPronouns: A, isTryItOutFlow: p, hideBioSection: M } = e,
        S = (0, a.e7)([_.ZP], () => (null == g ? null : _.ZP.getMember(g.id, n.id))),
        h = (0, a.e7)([E.Z], () => E.Z.hidePersonalInformation),
        x = (0, r.Z)('ProfileCustomizationPreviewBody'),
        b = null == R ? void 0 : null === (t = R.getPreviewBio(f)) || void 0 === t ? void 0 : t.value,
        O = null != A ? A : null == R ? void 0 : R.pronouns,
        P = (0, u.Ly)({
            pendingNickname: C,
            pendingGlobalName: m,
            user: n,
            guildMember: S
        });
    return (0, s.jsxs)('div', {
        inert: '',
        className: I.body,
        children: [
            (0, s.jsx)(o.Z, {
                user: n,
                profileType: T.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != S)) return;
                    if (null !== N && !!(null != S.avatar || null != N))
                        return (0, s.jsx)(d.Z, {
                            user: n,
                            nickname: P
                        });
                })(),
                nickname: P,
                pronouns: O,
                isTryItOut: p,
                tags: (0, s.jsx)(l.Z, {
                    displayProfile: R,
                    profileType: T.y0.BITE_SIZE
                })
            }),
            x &&
                (0, s.jsx)(i.ZP, {
                    userId: n.id,
                    inline: !1
                }),
            !M &&
                null != b &&
                '' !== b &&
                (0, s.jsx)(c.Z, {
                    user: n,
                    bio: b,
                    hidePersonalInformation: h,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
