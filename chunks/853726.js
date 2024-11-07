t.d(n, {
    Z: function () {
        return m;
    }
});
var i = t(200651);
t(192379);
var a = t(442837),
    r = t(648052),
    o = t(530),
    l = t(420654),
    s = t(116854),
    d = t(271383),
    c = t(246946),
    u = t(654904),
    f = t(228168),
    p = t(653134);
function m(e) {
    var n;
    let { user: t, displayProfile: m, guild: g, pendingAvatar: _, pendingNickname: b, pendingGlobalName: h, pendingBio: x, pendingPronouns: C, isTryItOutFlow: v, hideBioSection: S } = e,
        I = (0, a.e7)([d.ZP], () => (null == g ? null : d.ZP.getMember(g.id, t.id))),
        j = (0, a.e7)([c.Z], () => c.Z.hidePersonalInformation),
        T = null == m ? void 0 : null === (n = m.getPreviewBio(x)) || void 0 === n ? void 0 : n.value,
        y = null != C ? C : null == m ? void 0 : m.pronouns,
        E = (0, u.Ly)({
            pendingNickname: b,
            pendingGlobalName: h,
            user: t,
            guildMember: I
        });
    return (0, i.jsxs)('div', {
        inert: '',
        className: p.body,
        children: [
            (0, i.jsx)(o.Z, {
                user: t,
                profileType: f.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != I)) return;
                    if (null !== _ && !!(null != I.avatar || null != _))
                        return (0, i.jsx)(s.Z, {
                            user: t,
                            nickname: E
                        });
                })(),
                nickname: E,
                pronouns: y,
                isTryItOut: v,
                tags: (0, i.jsx)(r.Z, {
                    displayProfile: m,
                    profileType: f.y0.BITE_SIZE
                })
            }),
            !S &&
                null != T &&
                '' !== T &&
                (0, i.jsx)(l.Z, {
                    user: t,
                    bio: T,
                    hidePersonalInformation: j,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
