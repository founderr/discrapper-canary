n.d(i, {
    Z: function () {
        return p;
    }
});
var s = n(735250), l = n(470079), t = n(442837), o = n(481060), r = n(666520), a = n(580552), d = n(169559), c = n(369077), u = n(706454), I = n(246946), _ = n(785717), f = n(648067), E = n(588822), m = n(900927), S = n(652853), v = n(335191), Z = n(988246), x = n(689938), h = n(678108);
function p(e) {
    var i;
    let {
            user: n,
            displayProfile: p,
            autoFocusNote: g = !1,
            scrollToConnections: T = !1
        } = e, {trackUserProfileAction: N} = (0, _.KZ)(), C = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {theme: j} = (0, S.z)(), A = (0, t.e7)([u.default], () => u.default.locale), O = (0, d.Z)('user_profile'), M = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, a.Z)(n.id), R = (0, f.Z)(n.id), U = l.useRef(null);
    return (l.useLayoutEffect(() => {
        if (T) {
            var e;
            null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
        }
    }, [T]), C) ? (0, s.jsx)(Z.Z, {}) : (0, s.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: h.infoScroller,
        children: [
            (0, s.jsxs)('div', {
                className: h.userInfoSection,
                children: [
                    M && (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(o.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_ABOUT_ME
                            }),
                            (0, s.jsx)(E.Z, {
                                className: h.userInfoText,
                                userBio: null !== (i = null == p ? void 0 : p.bio) && void 0 !== i ? i : '',
                                userId: n.id
                            })
                        ]
                    }),
                    (0, s.jsxs)('div', {
                        children: [
                            (0, s.jsx)(o.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
                            }),
                            (0, s.jsx)(m.Z, {
                                userId: n.id,
                                textClassName: h.userInfoText
                            })
                        ]
                    }),
                    O && (0, s.jsx)('div', {
                        className: h.clans,
                        children: (0, s.jsx)('div', {
                            className: h.userInfoText,
                            children: (0, s.jsx)(c.Gd, { userId: n.id })
                        })
                    }),
                    !n.isNonUserBot() && (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(o.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.NOTE
                            }),
                            (0, s.jsx)(r.Z, {
                                userId: n.id,
                                autoFocus: g,
                                className: h.note,
                                onUpdate: () => N({ action: 'SET_NOTE' })
                            })
                        ]
                    })
                ]
            }),
            (0, s.jsx)(v.OA, {
                ref: U,
                connectedAccounts: R,
                theme: j,
                locale: A,
                className: h.userInfoSection,
                userId: n.id
            })
        ]
    });
}
