n.d(i, {
    Z: function () {
        return p;
    }
});
var l = n(735250), s = n(470079), t = n(442837), o = n(481060), a = n(666520), r = n(580552), d = n(169559), c = n(369077), u = n(706454), I = n(246946), f = n(785717), _ = n(648067), E = n(588822), m = n(900927), Z = n(652853), v = n(335191), S = n(988246), x = n(689938), h = n(678108);
function p(e) {
    var i;
    let {
            user: n,
            displayProfile: p,
            autoFocusNote: g = !1,
            scrollToConnections: N = !1
        } = e, {trackUserProfileAction: T} = (0, f.KZ)(), C = (0, t.e7)([I.Z], () => I.Z.hidePersonalInformation), {theme: j} = (0, Z.z)(), A = (0, t.e7)([u.default], () => u.default.locale), R = (0, d.Z)('user_profile'), U = (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' || (0, r.Z)(n.id), O = (0, _.Z)(n.id), M = s.useRef(null);
    return (s.useLayoutEffect(() => {
        if (N) {
            var e;
            null == M || null === (e = M.current) || void 0 === e || e.scrollIntoView();
        }
    }, [N]), C) ? (0, l.jsx)(S.Z, {}) : (0, l.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: h.infoScroller,
        children: [
            (0, l.jsxs)('div', {
                className: h.userInfoSection,
                children: [
                    U && (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_ABOUT_ME
                            }),
                            (0, l.jsx)(E.Z, {
                                className: h.userInfoText,
                                userBio: null !== (i = null == p ? void 0 : p.bio) && void 0 !== i ? i : '',
                                userId: n.id
                            })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        children: [
                            (0, l.jsx)(o.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.USER_PROFILE_MEMBER_SINCE
                            }),
                            (0, l.jsx)(m.Z, {
                                userId: n.id,
                                textClassName: h.userInfoText
                            })
                        ]
                    }),
                    R && (0, l.jsx)('div', {
                        className: h.clans,
                        children: (0, l.jsx)('div', {
                            className: h.userInfoText,
                            children: (0, l.jsx)(c.Gd, { userId: n.id })
                        })
                    }),
                    !n.isNonUserBot() && (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(o.Heading, {
                                variant: 'eyebrow',
                                className: h.userInfoSectionHeader,
                                children: x.Z.Messages.NOTE
                            }),
                            (0, l.jsx)(a.Z, {
                                userId: n.id,
                                autoFocus: g,
                                className: h.note,
                                onUpdate: () => T({ action: 'SET_NOTE' })
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(v.OA, {
                ref: M,
                connectedAccounts: O,
                theme: j,
                locale: A,
                className: h.userInfoSection,
                userId: n.id
            })
        ]
    });
}
