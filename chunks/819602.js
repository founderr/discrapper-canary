t.d(n, {
    E3: function () {
        return f;
    },
    OA: function () {
        return L;
    },
    tH: function () {
        return P;
    }
}),
    t(653041);
var c = t(735250),
    a = t(470079),
    l = t(120356),
    o = t.n(l),
    r = t(692547),
    i = t(780384),
    s = t(481060),
    u = t(99690),
    T = t(726542),
    E = t(367907),
    d = t(132871),
    N = t(147890),
    _ = t(122021),
    I = t(275759),
    O = t(888496),
    A = t(753194),
    C = t(598077),
    m = t(671533),
    p = t(49012),
    h = t(981631),
    R = t(856651),
    x = t(689938),
    v = t(962586);
function f(e) {
    var n, t;
    let a,
        l,
        u,
        { connectedAccount: d, theme: N, locale: C, userId: f, className: P, showMetadata: L, showInvisibleIcon: D } = e;
    null == L && (L = !0);
    let S = null !== (t = d.metadata) && void 0 !== t ? t : {},
        g = L ? (0, I.FI)(S[R.PC.CREATED_AT], C) : null,
        M = (0, s.useToken)(r.Z.unsafe_rawColors.TWITTER).hex(),
        j = x.Z.Messages.CONNECTION_VERIFIED;
    if (L)
        switch (d.type) {
            case h.ABu.REDDIT:
                a = (0, O.oP)(S);
                break;
            case h.ABu.STEAM:
                a = (0, O.Dq)(S);
                break;
            case h.ABu.TWITTER:
                (a = (0, O.rJ)(S)), '1' === S[R.PC.TWITTER_VERIFIED] && ((l = M), (j = x.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER));
                break;
            case h.ABu.PAYPAL:
                a = (0, O.li)(S);
                break;
            case h.ABu.EBAY:
                a = (0, O.ul)(S);
                break;
            case h.ABu.TIKTOK:
                a = (0, O.hf)(S);
        }
    let y = T.Z.get((0, _.rR)(d.type)),
        b = null == y ? void 0 : null === (n = y.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(y, d);
    null != D && D
        ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: o()(v.__invalid_connectedAccountOpenIconContainer, v.connectedAccountHideIcon)
          }))
        : null != b &&
          (u = (0, c.jsx)(s.Anchor, {
              href: b,
              onClick: (e) => {
                  var n, t;
                  (n = d.type),
                      (t = f),
                      (0, E.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: t
                      }),
                      (0, p.q)(
                          {
                              href: b,
                              trusted: (null == y ? void 0 : y.type) !== h.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(m.Z, {
                  className: v.connectedAccountOpenIcon,
                  direction: m.Z.Directions.RIGHT
              })
          }));
    let U = (0, s.useToken)(r.Z.colors.INTERACTIVE_MUTED).hex(),
        w = (0, s.useToken)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
        F = d.verified
            ? (0, c.jsx)(A.Z, {
                  className: v.connectedAccountVerifiedIcon,
                  color: null != l ? l : U,
                  forcedIconColor: w,
                  size: 16,
                  tooltipText: j
              })
            : null;
    return (0, c.jsxs)('div', {
        className: o()(v.connectedAccountContainer, (null != a && a.length > 0) || null != g ? v.connectedAccountContainerWithMetadata : null, P),
        children: [
            (0, c.jsxs)('div', {
                className: v.connectedAccount,
                children: [
                    (0, c.jsx)(s.Tooltip, {
                        text: null == y ? void 0 : y.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: x.Z.Messages.IMG_ALT_LOGO.format({ name: null == y ? void 0 : y.name }),
                                className: v.connectedAccountIcon,
                                src: (0, i.wj)(N) ? (null == y ? void 0 : y.icon.darkSVG) : null == y ? void 0 : y.icon.lightSVG
                            })
                    }),
                    (0, c.jsxs)('div', {
                        className: v.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)('div', {
                                className: v.connectedAccountName,
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: v.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(s.Tooltip, {
                                                overflowOnly: !0,
                                                text: d.name,
                                                children: (e) =>
                                                    (0, c.jsx)(s.Text, {
                                                        ...e,
                                                        variant: 'text-md/semibold',
                                                        color: 'interactive-active',
                                                        className: v.connectedAccountNameText,
                                                        children: d.name
                                                    })
                                            }),
                                            F
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != g
                                ? (0, c.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: x.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: g })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != a && a.length > 0
                ? (0, c.jsx)('div', {
                      className: v.connectedAccountChildren,
                      children: a
                  })
                : null
        ]
    });
}
function P(e) {
    let { applicationRoleConnection: n, className: t, locale: a, onApplicationClicked: l, selectedGuildId: r } = e,
        i = (0, O.rm)(n, void 0, a),
        T = () => {
            null == l || l(),
                (0, N.goToAppDirectory)({
                    view: d.ApplicationDirectoryViews.APPLICATION,
                    applicationId: n.application.id,
                    guildId: r,
                    entrypoint: { name: d.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: o()(v.connectedAccountContainer, null != i && i.length > 0 ? v.connectedAccountContainerWithMetadata : null, t),
        children: [
            (0, c.jsx)('div', {
                className: v.connectedAccount,
                children: (0, c.jsxs)(s.Clickable, {
                    className: o()(v.connectedAccountNameContainer, v.connectedAccountNameContainerClickable),
                    onClick: T,
                    children: [
                        null != n.platform_name
                            ? (0, c.jsx)(s.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: n.platform_name
                              })
                            : null,
                        null != n.platform_username
                            ? (0, c.jsx)('div', {
                                  className: v.connectedAccountName,
                                  children: (0, c.jsx)('div', {
                                      className: v.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(s.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'interactive-active',
                                          className: v.connectedAccountNameText,
                                          children: n.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != i && i.length > 0
                ? (0, c.jsx)('div', {
                      className: o()(v.connectedAccountChildren, v.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(s.Clickable, {
                    className: v.connectedAccountPoweredBy,
                    onClick: T,
                    children: (0, c.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: x.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: v.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, c.jsx)(u.Z, {
                                                  user: new C.Z(n.application.bot),
                                                  size: s.AvatarSizes.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(s.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-normal',
                                            children: n.application.name
                                        })
                                    ]
                                })
                        })
                    })
                })
            })
        ]
    });
}
let L = a.forwardRef(function (e, n) {
    let { connectedAccounts: t, theme: a, locale: l, className: r, userId: i } = e;
    if (null == t || 0 === t.length) return null;
    let s = t
            .filter((e) => T.Z.isSupported(e.type))
            .map((e) =>
                (0, c.jsx)(
                    f,
                    {
                        connectedAccount: e,
                        theme: a,
                        locale: l,
                        userId: i
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        E = [];
    for (let e = 0; e < s.length; e++) {
        let n = s[e];
        e % 2 == 0 ? u.push(n) : E.push(n);
    }
    return (0, c.jsxs)('div', {
        ref: n,
        className: o()(v.connectedAccounts, r),
        children: [
            (0, c.jsx)('div', {
                className: v.connectedAccountsColumn,
                children: u
            }),
            (0, c.jsx)('div', {
                className: v.connectedAccountsColumn,
                children: E
            })
        ]
    });
});
