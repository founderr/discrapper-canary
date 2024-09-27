n.d(t, {
    g: function () {
        return T;
    }
}),
    n(653041);
var i = n(735250);
n(470079);
var a = n(442837),
    s = n(481060),
    r = n(44315),
    l = n(598077),
    o = n(246946),
    c = n(594174),
    d = n(626135),
    u = n(51144),
    _ = n(480387),
    h = n(726745),
    E = n(251423),
    m = n(383832),
    I = n(981631),
    g = n(689938),
    p = n(703864);
function T(e) {
    let t = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        n = (0, a.e7)([o.Z], () => o.Z.hidePersonalInformation),
        { multiAccountUsers: T } = (0, E.L)(),
        f = (e) => {
            if (e !== (null == t ? void 0 : t.id)) d.default.track(I.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, { location: { section: I.jXE.USER_PROFILE } }), _.yD(e);
        },
        S = T.map((a) => {
            let o = new l.Z(a),
                c = o.id === (null == t ? void 0 : t.id),
                d = a.tokenStatus === h.q.INVALID,
                _ = n ? null : '#'.concat(o.discriminator);
            return (0, i.jsx)(
                s.MenuItem,
                {
                    id: o.id,
                    focusedClassName: p.focused,
                    label: (e) => {
                        let { isFocused: t } = e;
                        return (0, i.jsxs)('div', {
                            className: p.userMenuItem,
                            children: [
                                (0, i.jsx)(s.Avatar, {
                                    src: o.getAvatarURL(void 0, 40),
                                    size: s.AvatarSizes.SIZE_24,
                                    'aria-label': a.username
                                }),
                                (0, i.jsxs)('div', {
                                    className: p.userMenuUsername,
                                    children: [
                                        (0, i.jsx)(s.Text, {
                                            className: p.userMenuText,
                                            variant: 'text-sm/normal',
                                            children: u.ZP.getUserTag(o, {
                                                mode: 'username',
                                                identifiable: n ? 'never' : 'always'
                                            })
                                        }),
                                        !o.isPomelo() &&
                                            (0, i.jsx)(s.Text, {
                                                className: p.userMenuDiscriminator,
                                                variant: 'text-sm/normal',
                                                children: _
                                            })
                                    ]
                                }),
                                c &&
                                    (0, i.jsx)(s.CircleCheckIcon, {
                                        size: 'sm',
                                        color: (0, r.Lq)(t ? I.Ilk.WHITE_500 : I.Ilk.BRAND_500),
                                        secondaryColor: (0, r.Lq)(t ? I.Ilk.BRAND_500 : I.Ilk.WHITE_500),
                                        className: p.activeIcon
                                    }),
                                d &&
                                    (0, i.jsx)(s.CircleWarningIcon, {
                                        color: (0, r.Lq)(I.Ilk.RED_400),
                                        secondaryColor: (0, r.Lq)(I.Ilk.WHITE_500),
                                        size: 'xs',
                                        className: p.activeIcon
                                    })
                            ]
                        });
                    },
                    action: () => {
                        null == e || e(), d ? (0, m.Z)() : f(o.id);
                    }
                },
                o.id
            );
        });
    return (
        S.push(
            (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(s.MenuSeparator, {}),
                    (0, i.jsx)(s.MenuItem, {
                        id: 'manage-accounts',
                        label: g.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
                        action: () => {
                            null == e || e(), (0, m.Z)();
                        }
                    })
                ]
            })
        ),
        S
    );
}
