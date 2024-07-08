i.d(n, {
    Z: function () {
        return N;
    }
});
var o = i(735250), s = i(470079), t = i(442837), l = i(481060), a = i(666520), r = i(580552), c = i(169559), d = i(369077), u = i(706454), I = i(246946), E = i(785717), f = i(648067), _ = i(588822), Z = i(900927), m = i(652853), v = i(335191), S = i(988246), x = i(689938), h = i(678108);
function N(e) {
    var n;
    let {
            user: i,
            displayProfile: N,
            autoFocusNote: g = !1,
            scrollToConnections: p = !1
        } = e, {trackUserProfileAction: C} = (0, E.KZ)(), T = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {theme: R} = (0, m.z)(), M = (0, t.e7)([u.default], () => u.default.locale), j = (0, c.Z)('user_profile'), A = (null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== '' || (0, r.Z)(i.id), P = (0, f.Z)(i.id), U = s.useRef(null);
    return (s.useLayoutEffect(() => {
        if (p) {
            var e;
            null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
        }
    }, [p]), T) ? (0, o.jsx)(S.Z, {}) : (0, o.jsxs)(l.ScrollerThin, {
        fade: !0,
        className: h.infoScroller,
        children: [
            (0, o.jsxs)('div', {
                className: h.userInfoSection,
                children: [
                    A && (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_ABOUT_ME
                            }),
                            (0, o.jsx)(_.Z, {
                                className: h.userInfoText,
                                userBio: null !== (n = null == N ? void 0 : N.bio) && void 0 !== n ? n : '',
                                userId: i.id
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        children: [
                            (0, o.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
                            }),
                            (0, o.jsx)(Z.Z, {
                                userId: i.id,
                                textClassName: h.userInfoText
                            })
                        ]
                    }),
                    j && (0, o.jsx)('div', {
                        className: h.clans,
                        children: (0, o.jsx)('div', {
                            className: h.userInfoText,
                            children: (0, o.jsx)(d.Gd, { userId: i.id })
                        })
                    }),
                    !i.isNonUserBot() && (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.NOTE
                            }),
                            (0, o.jsx)(a.Z, {
                                userId: i.id,
                                autoFocus: g,
                                className: h.note,
                                onUpdate: () => C({ action: 'SET_NOTE' })
                            })
                        ]
                    })
                ]
            }),
            (0, o.jsx)(v.OA, {
                ref: U,
                connectedAccounts: P,
                theme: R,
                locale: M,
                className: h.userInfoSection,
                userId: i.id
            })
        ]
    });
}
