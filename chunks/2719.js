n.d(t, {
    Z: function () {
        return K;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(512722),
    o = n.n(a),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    m = n(230711),
    h = n(129861),
    g = n(279837),
    p = n(952306),
    x = n(299206),
    S = n(295474),
    T = n(144114),
    C = n(918505),
    _ = n(332473),
    E = n(921801),
    f = n(485341),
    I = n(687158),
    N = n(518950),
    A = n(184325),
    b = n(867176),
    v = n(25990),
    j = n(594174),
    O = n(572004),
    R = n(51144),
    P = n(998502),
    D = n(695346),
    y = n(461877),
    B = n(726985),
    L = n(981631),
    Z = n(815660),
    F = n(801461),
    M = n(388032),
    k = n(529733);
let w = P.ZP.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;
function U(e) {
    var t, r;
    let { className: a, user: o } = e,
        c = s.useRef(null),
        m = (0, C.o9)(),
        h = (0, _.b)(),
        g = (0, S.gS)(),
        p = null !== (r = null == g ? void 0 : null === (t = g.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : null,
        [x, T] = s.useState(!1);
    s.useEffect(() => {
        T(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [o.username]);
    let E = !o.isClaimed(),
        f = (m && !o.isPomelo() && !o.hasVerifiedEmailOrPhone()) || E,
        I = f ? M.intl.string(M.t['7Ngnys']) : void 0;
    return (0, i.jsxs)('div', {
        className: l()(k.field, a),
        children: [
            (0, i.jsx)('div', {
                className: k.constrainedRow,
                children: (0, i.jsxs)('div', {
                    className: k.usernameRow,
                    children: [
                        (0, i.jsx)(u.FormTitle, {
                            className: k.fieldTitle,
                            children: M.intl.string(M.t.qqhR3N)
                        }),
                        (0, i.jsxs)('div', {
                            className: k.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: o.username
                                }),
                                !o.isPomelo() &&
                                    (0, i.jsxs)(u.Text, {
                                        tag: 'span',
                                        color: 'header-secondary',
                                        variant: 'text-md/normal',
                                        children: ['#', o.discriminator]
                                    })
                            ]
                        })
                    ]
                })
            }),
            h &&
                (0, i.jsx)('div', {
                    className: k.pomeloWarning,
                    children: (0, i.jsx)(u.Tooltip, {
                        text: M.intl.string(M.t.HHC5Z2),
                        children: (e) =>
                            (0, i.jsx)(u.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            null != p &&
                (0, i.jsx)('div', {
                    className: k.pomeloWarning,
                    children: (0, i.jsx)(u.Tooltip, {
                        text: p,
                        'aria-label': !1,
                        children: (e) =>
                            (0, i.jsx)(u.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            (0, i.jsx)(u.Tooltip, {
                text: I,
                children: (e) =>
                    (0, i.jsx)(u.Button, {
                        ...e,
                        disabled: f,
                        size: u.Button.Sizes.SMALL,
                        className: k.fieldButton,
                        color: u.Button.Colors.PRIMARY,
                        'aria-label': M.intl.string(M.t['JECa9/']),
                        onClick: () =>
                            (0, u.openModalLazy)(async () => {
                                if (h) {
                                    let { default: e } = await Promise.all([n.e('85342'), n.e('5106')]).then(n.bind(n, 193049));
                                    return (t) =>
                                        (0, i.jsx)(e, {
                                            source: F.Kq.USER_SETTINGS_EDIT,
                                            ...t
                                        });
                                }
                                {
                                    let { default: e } = await Promise.all([n.e('75492'), n.e('84956'), n.e('42758')]).then(n.bind(n, 2702));
                                    return (t) => (0, i.jsx)(e, { ...t });
                                }
                            }),
                        children: x ? M.intl.string(M.t['16kTw8']) : M.intl.string(M.t.bt75u7)
                    })
            })
        ]
    });
}
function V(e) {
    var t, n;
    let { user: r, className: a } = e,
        o = (0, S.gS)(),
        c = null !== (n = null == o ? void 0 : null === (t = o.nick) || void 0 === t ? void 0 : t[0]) && void 0 !== n ? n : null,
        m = R.ZP.getGlobalName(r),
        h = s.useRef(null),
        [g, p] = s.useState(!1);
    return (
        s.useEffect(() => {
            p(null != h.current && h.current.scrollWidth > h.current.clientWidth);
        }, [m]),
        (0, i.jsxs)('div', {
            className: l()(k.field, a),
            children: [
                (0, i.jsx)('div', {
                    className: k.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        className: k.usernameRow,
                        children: [
                            (0, i.jsx)(u.FormTitle, {
                                className: k.fieldTitle,
                                children: M.intl.string(M.t['9AjdkJ'])
                            }),
                            (0, i.jsx)('div', {
                                className: k.usernameInnerRow,
                                ref: h,
                                children: (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == m ? M.intl.string(M.t.ep5kjI) : m
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, i.jsx)('div', {
                        className: k.pomeloWarning,
                        children: (0, i.jsx)(u.Tooltip, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, i.jsx)(u.CircleWarningIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    color: d.Z.colors.STATUS_WARNING.css
                                })
                        })
                    }),
                (0, i.jsx)(u.Button, {
                    className: k.fieldButton,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.PRIMARY,
                    'aria-label': M.intl.string(M.t.YXeWYG),
                    onClick: W,
                    children: g ? M.intl.string(M.t['16kTw8']) : M.intl.string(M.t.bt75u7)
                })
            ]
        })
    );
}
function G(e) {
    let { text: t, censor: n, revealLabel: r, hideLabel: l } = e,
        [a, o] = s.useState(!1),
        c = a ? t : n(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c,
            (0, i.jsx)(u.Button, {
                look: u.Button.Looks.LINK,
                size: u.Button.Sizes.MIN,
                color: u.Button.Colors.LINK,
                'aria-label': a ? l : r,
                onClick: () => o(!a),
                children: a ? M.intl.string(M.t.fgq1go) : M.intl.string(M.t.dcztdX)
            })
        ]
    });
}
function Y(e) {
    let t,
        { className: s, user: r } = e;
    if (r.isClaimed()) {
        if (null == r.email)
            t = {
                buttonText: M.intl.string(M.t.OYkgVl),
                buttonAriaLabel: M.intl.string(M.t['pvBD+f']),
                buttonColor: u.Button.Colors.PRIMARY,
                valueMessage: M.intl.string(M.t['8SfTNz']),
                handleClick: () =>
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('30566')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            };
        else {
            let { email: e } = r;
            t = {
                buttonText: M.intl.string(M.t.bt75u7),
                buttonAriaLabel: M.intl.string(M.t['8peUT0']),
                buttonColor: u.Button.Colors.PRIMARY,
                valueMessage: (0, i.jsx)(G, {
                    text: e,
                    censor: y.E,
                    revealLabel: M.intl.string(M.t['Zvx+yc']),
                    hideLabel: M.intl.string(M.t.nqTD4e)
                }),
                handleClick: () =>
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e('9343'), n.e('30566')]).then(n.bind(n, 642298));
                        return (t) => (0, i.jsx)(e, { ...t });
                    })
            };
        }
    } else
        t = {
            buttonText: M.intl.string(M.t.BleMPD),
            buttonAriaLabel: M.intl.string(M.t.BleMPD),
            buttonColor: u.Button.Colors.BRAND,
            valueMessage: M.intl.string(M.t.qxk9zs),
            handleClick: () => p.Z.openClaimAccountModal()
        };
    return (0, i.jsxs)('div', {
        className: l()(k.field, s),
        children: [
            (0, i.jsx)('div', {
                className: k.constrainedRow,
                children: (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(u.FormTitle, {
                            className: k.fieldTitle,
                            children: M.intl.string(M.t.tlZllJ)
                        }),
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(u.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: t.valueMessage
                            })
                        })
                    ]
                })
            }),
            (0, i.jsx)(u.Button, {
                className: k.fieldButton,
                size: u.Button.Sizes.SMALL,
                color: u.Button.Colors.PRIMARY,
                'aria-label': t.buttonAriaLabel,
                onClick: t.handleClick,
                children: t.buttonText
            })
        ]
    });
}
function H(e) {
    let t,
        { className: s, user: r } = e;
    if (!r.isClaimed()) return null;
    let { phone: a, email: o } = r,
        c = null != a;
    return (
        (t = c
            ? (0, i.jsx)(G, {
                  text: a,
                  censor: y.n,
                  revealLabel: M.intl.string(M.t.eY3xlZ),
                  hideLabel: M.intl.string(M.t.jllbv7)
              })
            : M.intl.string(M.t.I5kDqq)),
        (0, i.jsxs)('div', {
            className: l()(k.field, s),
            children: [
                (0, i.jsx)('div', {
                    className: k.constrainedRow,
                    children: (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)(u.FormTitle, {
                                className: k.fieldTitle,
                                children: M.intl.string(M.t.kerONj)
                            }),
                            (0, i.jsx)('div', {
                                children: (0, i.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: t
                                })
                            })
                        ]
                    })
                }),
                (0, i.jsxs)('div', {
                    className: k.fieldButtonList,
                    children: [
                        c && null != o
                            ? (0, i.jsx)(u.Button, {
                                  className: l()(k.fieldButton, k.removeButton),
                                  size: u.Button.Sizes.SMALL,
                                  look: u.Button.Looks.LINK,
                                  color: u.Button.Colors.PRIMARY,
                                  'aria-label': M.intl.string(M.t.Rpn4Aw),
                                  onClick: function () {
                                      (0, u.openModal)((e) =>
                                          (0, i.jsx)(g.default, {
                                              ...e,
                                              title: M.intl.string(M.t['3CTiKi']),
                                              children: r.hasFlag(L.xW$.MFA_SMS) ? M.intl.string(M.t.jrhJys) : void 0,
                                              actionText: M.intl.string(M.t.N86XcH),
                                              handleSubmit: (e) => T.Z.removePhone(e, T.L.USER_SETTINGS_UPDATE)
                                          })
                                      );
                                  },
                                  children: M.intl.string(M.t.N86XcH)
                              })
                            : null,
                        (0, i.jsx)(u.Button, {
                            className: k.fieldButton,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            'aria-label': c ? M.intl.string(M.t.YDabSU) : M.intl.string(M.t.SfUuEx),
                            onClick: function () {
                                (0, u.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(n.bind(n, 607018));
                                        return (t) =>
                                            (0, i.jsx)(e, {
                                                reason: T.L.USER_SETTINGS_UPDATE,
                                                ...t
                                            });
                                    },
                                    { modalKey: Z.M }
                                );
                            },
                            children: c ? M.intl.string(M.t.bt75u7) : M.intl.string(M.t.OYkgVl)
                        })
                    ]
                })
            ]
        })
    );
}
function z(e) {
    let { user: t } = e,
        n = (0, x.Z)({
            id: t.id,
            label: M.intl.string(M.t['/AXYnJ'])
        });
    return D.Sb.useSetting() && O.wS
        ? (0, i.jsx)(u.Popout, {
              renderPopout: (e) => {
                  let { closePopout: t } = e;
                  return (0, i.jsx)(u.Menu, {
                      onClose: t,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': M.intl.string(M.t.RANhlJ),
                      children: n
                  });
              },
              children: (e) =>
                  (0, i.jsx)(u.Clickable, {
                      ...e,
                      className: k.overflowMenuButton,
                      'aria-label': M.intl.string(M.t.DEoVWV),
                      children: (0, i.jsx)(u.MoreHorizontalIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: k.overflowMenuIcon
                      })
                  })
          })
        : null;
}
function W() {
    m.Z.setSection(L.oAB.PROFILE_CUSTOMIZATION);
}
function K() {
    var e;
    let t = (0, c.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
        }),
        n = (0, I.ZP)(t.id),
        s = (0, f.Z)(n),
        r = D.co.useSetting(),
        l = (0, c.e7)([v.Z], () => v.Z.getErrors()),
        a = null == l ? void 0 : null === (e = l.avatar) || void 0 === e ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: m } = (0, N.Z)({
            user: t,
            size: u.AvatarSizes.SIZE_80
        });
    return (0, i.jsxs)('div', {
        className: k.accountProfileCard,
        children: [
            (0, i.jsx)(b.b, {
                user: t,
                displayProfile: n,
                avatarSize: u.AvatarSizes.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0
            }),
            (0, i.jsxs)('div', {
                className: k.userInfo,
                children: [
                    (0, i.jsx)(w, {
                        className: k.avatar,
                        src: d,
                        avatarDecoration: m,
                        status: r,
                        size: u.AvatarSizes.SIZE_80,
                        'aria-label': t.username
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsxs)('div', {
                                className: k.profileCardUsernameRow,
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: t,
                                        className: k.userTag,
                                        discriminatorClass: k.discriminator
                                    }),
                                    (0, i.jsx)(z, { user: t })
                                ]
                            }),
                            (0, i.jsx)(A.Z, {
                                badges: s,
                                className: k.badgeList,
                                badgeClassName: k.badge
                            })
                        ]
                    }),
                    (0, i.jsx)(u.Button, {
                        onClick: W,
                        size: u.Button.Sizes.SMALL,
                        children: M.intl.string(M.t['2p2aY2'])
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: k.background,
                children: [
                    null != a
                        ? (0, i.jsx)(u.Text, {
                              className: k.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: a
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: k.fieldList,
                        children: [
                            (0, i.jsx)(E.F, {
                                setting: B.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, i.jsx)(V, {
                                    className: k.fieldSpacerBottom,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(E.F, {
                                setting: B.s6.ACCOUNT_USERNAME,
                                children: (0, i.jsx)(U, { user: t })
                            }),
                            (0, i.jsx)(E.F, {
                                setting: B.s6.ACCOUNT_EMAIL,
                                children: (0, i.jsx)(Y, {
                                    className: k.fieldSpacer,
                                    user: t
                                })
                            }),
                            (0, i.jsx)(E.F, {
                                setting: B.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, i.jsx)(H, {
                                    className: k.fieldSpacer,
                                    user: t
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
