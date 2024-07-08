i.d(n, {
    Z: function () {
        return h;
    }
});
var o = i(735250), s = i(470079), t = i(442837), l = i(481060), a = i(666520), r = i(580552), c = i(169559), d = i(369077), u = i(706454), I = i(246946), E = i(785717), _ = i(648067), f = i(588822), Z = i(900927), m = i(652853), v = i(335191), S = i(988246), x = i(689938), N = i(678108);
function h(e) {
    var n;
    let {
            user: i,
            displayProfile: h,
            autoFocusNote: g = !1,
            scrollToConnections: p = !1
        } = e, {trackUserProfileAction: C} = (0, E.KZ)(), T = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {theme: R} = (0, m.z)(), M = (0, t.e7)([u.default], () => u.default.locale), j = (0, c.Z)('user_profile'), A = (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' || (0, r.Z)(i.id), P = (0, _.Z)(i.id), U = s.useRef(null);
    return (s.useLayoutEffect(() => {
        if (p) {
            var e;
            null == U || null === (e = U.current) || void 0 === e || e.scrollIntoView();
        }
    }, [p]), T) ? (0, o.jsx)(S.Z, {}) : (0, o.jsxs)(l.ScrollerThin, {
        fade: !0,
        className: N.infoScroller,
        children: [
            (0, o.jsxs)('div', {
                className: N.userInfoSection,
                children: [
                    A && (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: N.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_ABOUT_ME
                            }),
                            (0, o.jsx)(f.Z, {
                                className: N.userInfoText,
                                userBio: null !== (n = null == h ? void 0 : h.bio) && void 0 !== n ? n : '',
                                userId: i.id
                            })
                        ]
                    }),
                    (0, o.jsxs)('div', {
                        children: [
                            (0, o.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: N.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
                            }),
                            (0, o.jsx)(Z.Z, {
                                userId: i.id,
                                textClassName: N.userInfoText
                            })
                        ]
                    }),
                    j && (0, o.jsx)('div', {
                        className: N.clans,
                        children: (0, o.jsx)('div', {
                            className: N.userInfoText,
                            children: (0, o.jsx)(d.Gd, { userId: i.id })
                        })
                    }),
                    !i.isNonUserBot() && (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(l.Heading, {
                                variant: 'eyebrow',
                                className: N.userInfoSectionHeader,
                                children: x.Z.Messages.NOTE
                            }),
                            (0, o.jsx)(a.Z, {
                                userId: i.id,
                                autoFocus: g,
                                className: N.note,
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
                className: N.userInfoSection,
                userId: i.id
            })
        ]
    });
}
