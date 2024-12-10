n.d(t, {
    g: function () {
        return I;
    }
}),
    n(653041);
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    a = n(44315),
    o = n(598077),
    s = n(246946),
    c = n(594174),
    d = n(626135),
    u = n(51144),
    h = n(480387),
    m = n(726745),
    p = n(251423),
    g = n(383832),
    f = n(981631),
    _ = n(388032),
    E = n(543395);
function I(e) {
    let t = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        n = (0, r.e7)([s.Z], () => s.Z.hidePersonalInformation),
        { multiAccountUsers: I } = (0, p.L)(),
        C = (e) => {
            if (e !== (null == t ? void 0 : t.id)) d.default.track(f.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: f.jXE.USER_PROFILE } }), h.yD(e);
        },
        v = I.map((r) => {
            let s = new o.Z(r),
                c = s.id === (null == t ? void 0 : t.id),
                d = r.tokenStatus === m.q.INVALID,
                h = n ? null : '#'.concat(s.discriminator);
            return (0, i.jsx)(
                l.MenuItem,
                {
                    id: s.id,
                    focusedClassName: E.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)('div', {
                            className: E.userMenuItem,
                            children: [
                                (0, i.jsx)(l.Avatar, {
                                    src: s.getAvatarURL(void 0, 40),
                                    size: l.AvatarSizes.SIZE_24,
                                    'aria-label': r.username
                                }),
                                (0, i.jsxs)('div', {
                                    className: E.userMenuUsername,
                                    children: [
                                        (0, i.jsx)(l.Text, {
                                            className: E.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: u.ZP.getUserTag(s, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !s.isPomelo() &&
                                            (0, i.jsx)(l.Text, {
                                                className: E.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: h
                                            })
                                    ]
                                }),
                                c &&
                                    (0, i.jsx)(l.CircleCheckIcon, {
                                        size: 'sm',
                                        color: (0, a.Lq)(t ? f.Ilk.WHITE_500 : f.Ilk.BRAND_500),
                                        secondaryColor: (0, a.Lq)(t ? f.Ilk.BRAND_500 : f.Ilk.WHITE_500),
                                        className: E.activeIcon
                                    }),
                                d &&
                                    (0, i.jsx)(l.CircleWarningIcon, {
                                        color: (0, a.Lq)(f.Ilk.RED_400),
                                        secondaryColor: (0, a.Lq)(f.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: E.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        null == e || e(), d ? (0, g.Z)() : C(s.id);
                    }
                },
                s.id
            );
        });
    return (
        v.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(l.MenuSeparator, {}),
                    (0, i.jsx)(l.MenuItem, {
                        id: 'manage-accounts',
                        label: _.intl.string(_.t.WbFpq6),
                        action: () => {
                            null == e || e(), (0, g.Z)();
                        }
                    })
                ]
            })
        ),
        v
    );
}
