i.d(n, {
    Z: function () {
        return N;
    }
});
var l = i(735250), s = i(470079), o = i(442837), t = i(481060), a = i(666520), r = i(580552), d = i(169559), c = i(369077), u = i(706454), I = i(246946), f = i(785717), _ = i(648067), E = i(588822), m = i(900927), Z = i(652853), v = i(335191), S = i(988246), x = i(689938), h = i(678108);
function N(e) {
    var n;
    let {
            user: i,
            displayProfile: N,
            autoFocusNote: p = !1,
            scrollToConnections: g = !1
        } = e, {trackUserProfileAction: T} = (0, f.KZ)(), C = (0, o.e7)([I.Z], () => I.Z.hidePersonalInformation), {theme: j} = (0, Z.z)(), R = (0, o.e7)([u.default], () => u.default.locale), A = (0, d.Z)('user_profile'), M = (null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== '' || (0, r.Z)(i.id), P = (0, _.Z)(i.id), U = s.useRef(null);
    return (s.useLayoutEffect(() => {
        if (g) {
            var e;
            null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
        }
    }, [g]), C) ? (0, l.jsx)(S.Z, {}) : (0, l.jsxs)(t.ScrollerThin, {
        fade: !0,
        className: h.infoScroller,
        children: [
            (0, l.jsxs)('div', {
                className: h.userInfoSection,
                children: [
                    M && (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(t.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_ABOUT_ME
                            }),
                            (0, l.jsx)(E.Z, {
                                className: h.userInfoText,
                                userBio: null !== (n = null == N ? void 0 : N.bio) && void 0 !== n ? n : '',
                                userId: i.id
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(t.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
                            }),
                            (0, l.jsx)(m.Z, {
                                userId: i.id,
                                textClassName: h.userInfoText
                            })
                        ]
                    }),
                    A && (0, l.jsx)('div', {
                        className: h.clans,
                        children: (0, l.jsx)('div', {
                            className: h.userInfoText,
                            children: (0, l.jsx)(c.Gd, { userId: i.id })
                        })
                    }),
                    !i.isNonUserBot() && (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(t.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.NOTE
                            }),
                            (0, l.jsx)(a.Z, {
                                userId: i.id,
                                autoFocus: p,
                                className: h.note,
                                onUpdate: () => T({ action: 'SET_NOTE' })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(v.OA, {
                ref: U,
                connectedAccounts: P,
                theme: j,
                locale: R,
                className: h.userInfoSection,
                userId: i.id
            })
        ]
    });
}
