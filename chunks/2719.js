t.d(s, {
    Z: function () {
        return z;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(512722),
    l = t.n(o),
    c = t(442837),
    d = t(692547),
    u = t(481060),
    _ = t(230711),
    E = t(129861),
    T = t(279837),
    I = t(952306),
    S = t(299206),
    N = t(295474),
    m = t(144114),
    C = t(918505),
    g = t(332473),
    A = t(921801),
    h = t(290421),
    O = t(318661),
    p = t(78675),
    x = t(80132),
    R = t(204197),
    f = t(25990),
    M = t(594174),
    D = t(572004),
    P = t(51144),
    L = t(998502),
    b = t(695346),
    Z = t(461877),
    v = t(726985),
    j = t(981631),
    B = t(815660),
    U = t(801461),
    G = t(689938),
    y = t(523193);
let F = L.ZP.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;
function V(e) {
    var s, i;
    let { className: o, user: l } = e,
        c = a.useRef(null),
        _ = (0, C.o9)(),
        E = (0, g.b)(),
        T = (0, N.gS)(),
        I = null !== (i = null == T ? void 0 : null === (s = T.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== i ? i : null,
        [S, m] = a.useState(!1);
    a.useEffect(() => {
        m(null != c.current && c.current.scrollWidth > c.current.clientWidth);
    }, [l.username]);
    let A = !l.isClaimed(),
        h = (_ && !l.isPomelo() && !l.hasVerifiedEmailOrPhone()) || A,
        O = h ? G.Z.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
    return (0, n.jsxs)('div', {
        className: r()(y.field, o),
        children: [
            (0, n.jsx)('div', {
                className: y.constrainedRow,
                children: (0, n.jsxs)('div', {
                    className: y.usernameRow,
                    children: [
                        (0, n.jsx)(u.FormTitle, {
                            className: y.fieldTitle,
                            children: G.Z.Messages.USER_SETTINGS_LABEL_USERNAME
                        }),
                        (0, n.jsxs)('div', {
                            className: y.usernameInnerRow,
                            ref: c,
                            children: [
                                (0, n.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: l.username
                                }),
                                !l.isPomelo() &&
                                    (0, n.jsxs)(u.Text, {
                                        tag: 'span',
                                        color: 'header-secondary',
                                        variant: 'text-md/normal',
                                        children: ['#', l.discriminator]
                                    })
                            ]
                        })
                    ]
                })
            }),
            E &&
                (0, n.jsx)('div', {
                    className: y.pomeloWarning,
                    children: (0, n.jsx)(u.Tooltip, {
                        text: G.Z.Messages.ACTION_NEEDED,
                        children: (e) =>
                            (0, n.jsx)(u.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            null != I &&
                (0, n.jsx)('div', {
                    className: y.pomeloWarning,
                    children: (0, n.jsx)(u.Tooltip, {
                        text: I,
                        'aria-label': !1,
                        children: (e) =>
                            (0, n.jsx)(u.CircleWarningIcon, {
                                size: 'custom',
                                width: 20,
                                height: 20,
                                ...e,
                                color: d.Z.colors.STATUS_WARNING.css
                            })
                    })
                }),
            (0, n.jsx)(u.Tooltip, {
                text: O,
                children: (e) =>
                    (0, n.jsx)(u.Button, {
                        ...e,
                        disabled: h,
                        size: u.Button.Sizes.SMALL,
                        className: y.fieldButton,
                        color: u.Button.Colors.PRIMARY,
                        'aria-label': G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
                        onClick: () =>
                            (0, u.openModalLazy)(async () => {
                                if (E) {
                                    let { default: e } = await Promise.all([t.e('85342'), t.e('2137')]).then(t.bind(t, 193049));
                                    return (s) =>
                                        (0, n.jsx)(e, {
                                            source: U.Kq.USER_SETTINGS_EDIT,
                                            ...s
                                        });
                                }
                                {
                                    let { default: e } = await Promise.all([t.e('75492'), t.e('84956'), t.e('42758')]).then(t.bind(t, 2702));
                                    return (s) => (0, n.jsx)(e, { ...s });
                                }
                            }),
                        children: S ? G.Z.Messages.DISAPPROVAL : G.Z.Messages.EDIT
                    })
            })
        ]
    });
}
function w(e) {
    var s, t;
    let { user: i, className: o } = e,
        l = (0, N.gS)(),
        c = null !== (t = null == l ? void 0 : null === (s = l.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== t ? t : null,
        _ = P.ZP.getGlobalName(i),
        E = a.useRef(null),
        [T, I] = a.useState(!1);
    return (
        a.useEffect(() => {
            I(null != E.current && E.current.scrollWidth > E.current.clientWidth);
        }, [_]),
        (0, n.jsxs)('div', {
            className: r()(y.field, o),
            children: [
                (0, n.jsx)('div', {
                    className: y.constrainedRow,
                    children: (0, n.jsxs)('div', {
                        className: y.usernameRow,
                        children: [
                            (0, n.jsx)(u.FormTitle, {
                                className: y.fieldTitle,
                                children: G.Z.Messages.DISPLAY_NAME
                            }),
                            (0, n.jsx)('div', {
                                className: y.usernameInnerRow,
                                ref: E,
                                children: (0, n.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: null == _ ? G.Z.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : _
                                })
                            })
                        ]
                    })
                }),
                null != c &&
                    (0, n.jsx)('div', {
                        className: y.pomeloWarning,
                        children: (0, n.jsx)(u.Tooltip, {
                            text: c,
                            'aria-label': !1,
                            children: (e) =>
                                (0, n.jsx)(u.CircleWarningIcon, {
                                    size: 'custom',
                                    width: 20,
                                    height: 20,
                                    ...e,
                                    color: d.Z.colors.STATUS_WARNING.css
                                })
                        })
                    }),
                (0, n.jsx)(u.Button, {
                    className: y.fieldButton,
                    size: u.Button.Sizes.SMALL,
                    color: u.Button.Colors.PRIMARY,
                    'aria-label': G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
                    onClick: K,
                    children: T ? G.Z.Messages.DISAPPROVAL : G.Z.Messages.EDIT
                })
            ]
        })
    );
}
function k(e) {
    let { text: s, censor: t, revealLabel: i, hideLabel: r } = e,
        [o, l] = a.useState(!1),
        c = o ? s : t(s);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            c,
            (0, n.jsx)(u.Button, {
                look: u.Button.Looks.LINK,
                size: u.Button.Sizes.MIN,
                color: u.Button.Colors.LINK,
                'aria-label': o ? r : i,
                onClick: () => l(!o),
                children: o ? G.Z.Messages.HIDE : G.Z.Messages.REVEAL
            })
        ]
    });
}
function Y(e) {
    let s,
        { className: a, user: i } = e;
    if (i.isClaimed()) {
        if (null == i.email)
            s = {
                buttonText: G.Z.Messages.ADD,
                buttonAriaLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
                buttonColor: u.Button.Colors.PRIMARY,
                valueMessage: G.Z.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
                handleClick: () =>
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([t.e('9343'), t.e('12409')]).then(t.bind(t, 642298));
                        return (s) => (0, n.jsx)(e, { ...s });
                    })
            };
        else {
            let { email: e } = i;
            s = {
                buttonText: G.Z.Messages.EDIT,
                buttonAriaLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
                buttonColor: u.Button.Colors.PRIMARY,
                valueMessage: (0, n.jsx)(k, {
                    text: e,
                    censor: Z.E,
                    revealLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
                    hideLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
                }),
                handleClick: () =>
                    (0, u.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([t.e('9343'), t.e('12409')]).then(t.bind(t, 642298));
                        return (s) => (0, n.jsx)(e, { ...s });
                    })
            };
        }
    } else
        s = {
            buttonText: G.Z.Messages.CLAIM_ACCOUNT_SHORT,
            buttonAriaLabel: G.Z.Messages.CLAIM_ACCOUNT_SHORT,
            buttonColor: u.Button.Colors.BRAND,
            valueMessage: G.Z.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
            handleClick: () => I.Z.openClaimAccountModal()
        };
    return (0, n.jsxs)('div', {
        className: r()(y.field, a),
        children: [
            (0, n.jsx)('div', {
                className: y.constrainedRow,
                children: (0, n.jsxs)('div', {
                    children: [
                        (0, n.jsx)(u.FormTitle, {
                            className: y.fieldTitle,
                            children: G.Z.Messages.USER_SETTINGS_LABEL_EMAIL
                        }),
                        (0, n.jsx)('div', {
                            children: (0, n.jsx)(u.Text, {
                                tag: 'span',
                                color: 'header-primary',
                                variant: 'text-md/normal',
                                children: s.valueMessage
                            })
                        })
                    ]
                })
            }),
            (0, n.jsx)(u.Button, {
                className: y.fieldButton,
                size: u.Button.Sizes.SMALL,
                color: u.Button.Colors.PRIMARY,
                'aria-label': s.buttonAriaLabel,
                onClick: s.handleClick,
                children: s.buttonText
            })
        ]
    });
}
function H(e) {
    let s,
        { className: a, user: i } = e;
    if (!i.isClaimed()) return null;
    let { phone: o, email: l } = i,
        c = null != o;
    return (
        (s = c
            ? (0, n.jsx)(k, {
                  text: o,
                  censor: Z.n,
                  revealLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
                  hideLabel: G.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
              })
            : G.Z.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER),
        (0, n.jsxs)('div', {
            className: r()(y.field, a),
            children: [
                (0, n.jsx)('div', {
                    className: y.constrainedRow,
                    children: (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsx)(u.FormTitle, {
                                className: y.fieldTitle,
                                children: G.Z.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
                            }),
                            (0, n.jsx)('div', {
                                children: (0, n.jsx)(u.Text, {
                                    tag: 'span',
                                    color: 'header-primary',
                                    variant: 'text-md/normal',
                                    children: s
                                })
                            })
                        ]
                    })
                }),
                (0, n.jsxs)('div', {
                    className: y.fieldButtonList,
                    children: [
                        c && null != l
                            ? (0, n.jsx)(u.Button, {
                                  className: r()(y.fieldButton, y.removeButton),
                                  size: u.Button.Sizes.SMALL,
                                  look: u.Button.Looks.LINK,
                                  color: u.Button.Colors.PRIMARY,
                                  'aria-label': G.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
                                  onClick: function () {
                                      (0, u.openModal)((e) =>
                                          (0, n.jsx)(T.default, {
                                              ...e,
                                              title: G.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
                                              children: i.hasFlag(j.xW$.MFA_SMS) ? G.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING : void 0,
                                              actionText: G.Z.Messages.REMOVE,
                                              handleSubmit: (e) => m.Z.removePhone(e, m.L.USER_SETTINGS_UPDATE)
                                          })
                                      );
                                  },
                                  children: G.Z.Messages.REMOVE
                              })
                            : null,
                        (0, n.jsx)(u.Button, {
                            className: y.fieldButton,
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.PRIMARY,
                            'aria-label': c ? G.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL : G.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
                            onClick: function () {
                                (0, u.openModalLazy)(
                                    async () => {
                                        let { default: e } = await Promise.resolve().then(t.bind(t, 607018));
                                        return (s) =>
                                            (0, n.jsx)(e, {
                                                reason: m.L.USER_SETTINGS_UPDATE,
                                                ...s
                                            });
                                    },
                                    { modalKey: B.M }
                                );
                            },
                            children: c ? G.Z.Messages.EDIT : G.Z.Messages.ADD
                        })
                    ]
                })
            ]
        })
    );
}
function W(e) {
    let { user: s } = e,
        t = (0, S.Z)({
            id: s.id,
            label: G.Z.Messages.COPY_ID_USER
        });
    return b.Sb.useSetting() && D.wS
        ? (0, n.jsx)(u.Popout, {
              renderPopout: (e) => {
                  let { closePopout: s } = e;
                  return (0, n.jsx)(u.Menu, {
                      onClose: s,
                      onSelect: void 0,
                      navId: 'copy-id',
                      'aria-label': G.Z.Messages.USER_MORE_ACTIONS_MENU_LABEL,
                      children: t
                  });
              },
              children: (e) =>
                  (0, n.jsx)(u.Clickable, {
                      ...e,
                      className: y.overflowMenuButton,
                      'aria-label': G.Z.Messages.ACTIONS,
                      children: (0, n.jsx)(u.MoreHorizontalIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: y.overflowMenuIcon
                      })
                  })
          })
        : null;
}
function K() {
    _.Z.setSection(j.oAB.PROFILE_CUSTOMIZATION);
}
function z() {
    var e;
    let s = (0, c.e7)([M.default], () => {
            let e = M.default.getCurrentUser();
            return l()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
        }),
        t = (0, O.ZP)(s.id),
        a = (0, h.Z)(t),
        i = b.co.useSetting(),
        r = (0, c.e7)([f.Z], () => f.Z.getErrors()),
        o = null == r ? void 0 : null === (e = r.avatar) || void 0 === e ? void 0 : e[0],
        { avatarSrc: d, avatarDecorationSrc: _ } = (0, R.Z)({
            user: s,
            size: u.AvatarSizes.SIZE_80
        });
    return (0, n.jsxs)('div', {
        className: y.accountProfileCard,
        children: [
            (0, n.jsx)(p.p, {
                user: s,
                displayProfile: t,
                avatarSize: u.AvatarSizes.SIZE_80,
                avatarOffsetX: 16,
                avatarOffsetY: -22,
                bannerWidth: 660,
                bannerHeight: 100,
                themePadding: 0
            }),
            (0, n.jsxs)('div', {
                className: y.userInfo,
                children: [
                    (0, n.jsx)(F, {
                        className: y.avatar,
                        src: d,
                        avatarDecoration: _,
                        status: i,
                        size: u.AvatarSizes.SIZE_80,
                        'aria-label': s.username
                    }),
                    (0, n.jsxs)('div', {
                        children: [
                            (0, n.jsxs)('div', {
                                className: y.profileCardUsernameRow,
                                children: [
                                    (0, n.jsx)(E.Z, {
                                        user: s,
                                        className: y.userTag,
                                        discriminatorClass: y.discriminator
                                    }),
                                    (0, n.jsx)(W, { user: s })
                                ]
                            }),
                            (0, n.jsx)(x.Z, {
                                badges: a,
                                className: y.badgeList,
                                badgeClassName: y.badge
                            })
                        ]
                    }),
                    (0, n.jsx)(u.Button, {
                        onClick: K,
                        size: u.Button.Sizes.SMALL,
                        children: G.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
                    })
                ]
            }),
            (0, n.jsxs)('div', {
                className: y.background,
                children: [
                    null != o
                        ? (0, n.jsx)(u.Text, {
                              className: y.avatarError,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: o
                          })
                        : null,
                    (0, n.jsxs)('div', {
                        className: y.fieldList,
                        children: [
                            (0, n.jsx)(A.F, {
                                setting: v.s6.ACCOUNT_DISPLAY_NAME,
                                children: (0, n.jsx)(w, {
                                    className: y.fieldSpacerBottom,
                                    user: s
                                })
                            }),
                            (0, n.jsx)(A.F, {
                                setting: v.s6.ACCOUNT_USERNAME,
                                children: (0, n.jsx)(V, { user: s })
                            }),
                            (0, n.jsx)(A.F, {
                                setting: v.s6.ACCOUNT_EMAIL,
                                children: (0, n.jsx)(Y, {
                                    className: y.fieldSpacer,
                                    user: s
                                })
                            }),
                            (0, n.jsx)(A.F, {
                                setting: v.s6.ACCOUNT_PHONE_NUMBER,
                                children: (0, n.jsx)(H, {
                                    className: y.fieldSpacer,
                                    user: s
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
