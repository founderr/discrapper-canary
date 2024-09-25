t.d(n, {
    E3: function () {
        return P;
    },
    OA: function () {
        return M;
    },
    tH: function () {
        return S;
    }
}),
    t(653041);
var a = t(735250),
    c = t(470079),
    l = t(120356),
    s = t.n(l),
    o = t(692547),
    i = t(780384),
    r = t(481060),
    u = t(99690),
    T = t(726542),
    E = t(367907),
    N = t(132871),
    d = t(147890),
    _ = t(122021),
    O = t(275759),
    I = t(888496),
    C = t(753194),
    A = t(598077),
    m = t(671533),
    x = t(49012),
    v = t(981631),
    h = t(856651),
    p = t(689938),
    R = t(962586);
function P(e) {
    var n, t;
    let c,
        l,
        u,
        { connectedAccount: N, theme: d, locale: A, userId: P, className: S, showMetadata: M, showInvisibleIcon: f } = e;
    null == M && (M = !0);
    let L = null !== (t = N.metadata) && void 0 !== t ? t : {},
        j = M ? (0, O.FI)(L[h.PC.CREATED_AT], A) : null,
        D = (0, r.useToken)(o.Z.unsafe_rawColors.TWITTER).hex(),
        g = p.Z.Messages.CONNECTION_VERIFIED;
    if (M)
        switch (N.type) {
            case v.ABu.REDDIT:
                c = (0, I.oP)(L);
                break;
            case v.ABu.STEAM:
                c = (0, I.Dq)(L);
                break;
            case v.ABu.TWITTER:
                (c = (0, I.rJ)(L)), '1' === L[h.PC.TWITTER_VERIFIED] && ((l = D), (g = p.Z.Messages.CONNECTION_VERIFIED_ON_TWITTER));
                break;
            case v.ABu.PAYPAL:
                c = (0, I.li)(L);
                break;
            case v.ABu.EBAY:
                c = (0, I.ul)(L);
                break;
            case v.ABu.TIKTOK:
                c = (0, I.hf)(L);
        }
    let b = T.Z.get((0, _.rR)(N.type)),
        y = null == b ? void 0 : null === (n = b.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(b, N);
    null != f && f
        ? (u = (0, a.jsx)(r.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: s()(R.__invalid_connectedAccountOpenIconContainer, R.connectedAccountHideIcon)
          }))
        : null != y &&
          (u = (0, a.jsx)(r.Anchor, {
              href: y,
              onClick: (e) => {
                  var n, t;
                  (n = N.type),
                      (t = P),
                      (0, E.yw)(v.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: t
                      }),
                      (0, x.q)(
                          {
                              href: y,
                              trusted: (null == b ? void 0 : b.type) !== v.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, a.jsx)(m.Z, {
                  className: R.connectedAccountOpenIcon,
                  direction: m.Z.Directions.RIGHT
              })
          }));
    let F = (0, r.useToken)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        K = (0, r.useToken)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        U = N.verified
            ? (0, a.jsx)(C.Z, {
                  className: R.connectedAccountVerifiedIcon,
                  color: null != l ? l : F,
                  forcedIconColor: K,
                  size: 16,
                  tooltipText: g
              })
            : null;
    return (0, a.jsxs)('div', {
        className: s()(R.connectedAccountContainer, (null != c && c.length > 0) || null != j ? R.connectedAccountContainerWithMetadata : null, S),
        children: [
            (0, a.jsxs)('div', {
                className: R.connectedAccount,
                children: [
                    (0, a.jsx)(r.Tooltip, {
                        text: null == b ? void 0 : b.name,
                        children: (e) =>
                            (0, a.jsx)('img', {
                                ...e,
                                alt: p.Z.Messages.IMG_ALT_LOGO.format({ name: null == b ? void 0 : b.name }),
                                className: R.connectedAccountIcon,
                                src: (0, i.wj)(d) ? (null == b ? void 0 : b.icon.darkSVG) : null == b ? void 0 : b.icon.lightSVG
                            })
                    }),
                    (0, a.jsxs)('div', {
                        className: R.connectedAccountNameContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: R.connectedAccountName,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: R.connectedAccountNameTextContainer,
                                        children: [
                                            (0, a.jsx)(r.Tooltip, {
                                                overflowOnly: !0,
                                                text: N.name,
                                                children: (e) =>
                                                    (0, a.jsx)(r.Text, {
                                                        ...e,
                                                        variant: 'text-md/semibold',
                                                        color: 'interactive-active',
                                                        className: R.connectedAccountNameText,
                                                        children: N.name
                                                    })
                                            }),
                                            U
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != j
                                ? (0, a.jsx)(r.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: p.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: j })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != c && c.length > 0
                ? (0, a.jsx)('div', {
                      className: R.connectedAccountChildren,
                      children: c
                  })
                : null
        ]
    });
}
function S(e) {
    let { applicationRoleConnection: n, className: t, locale: c, onApplicationClicked: l, selectedGuildId: o } = e,
        i = (0, I.rm)(n, void 0, c),
        T = () => {
            null == l || l(),
                (0, d.goToAppDirectory)({
                    view: N.ApplicationDirectoryViews.APPLICATION,
                    applicationId: n.application.id,
                    guildId: o,
                    entrypoint: { name: N.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, a.jsxs)('div', {
        className: s()(R.connectedAccountContainer, null != i && i.length > 0 ? R.connectedAccountContainerWithMetadata : null, t),
        children: [
            (0, a.jsx)('div', {
                className: R.connectedAccount,
                children: (0, a.jsxs)(r.Clickable, {
                    className: s()(R.connectedAccountNameContainer, R.connectedAccountNameContainerClickable),
                    onClick: T,
                    children: [
                        null != n.platform_name
                            ? (0, a.jsx)(r.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: n.platform_name
                              })
                            : null,
                        null != n.platform_username
                            ? (0, a.jsx)('div', {
                                  className: R.connectedAccountName,
                                  children: (0, a.jsx)('div', {
                                      className: R.connectedAccountNameTextContainer,
                                      children: (0, a.jsx)(r.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'interactive-active',
                                          className: R.connectedAccountNameText,
                                          children: n.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != i && i.length > 0
                ? (0, a.jsx)('div', {
                      className: s()(R.connectedAccountChildren, R.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, a.jsx)('div', {
                children: (0, a.jsx)(r.Clickable, {
                    className: R.connectedAccountPoweredBy,
                    onClick: T,
                    children: (0, a.jsx)(r.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: p.Z.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                            applicationHook: () =>
                                (0, a.jsxs)('div', {
                                    className: R.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, a.jsx)(u.Z, {
                                                  user: new A.Z(n.application.bot),
                                                  size: r.AvatarSizes.SIZE_16
                                              })
                                            : null,
                                        (0, a.jsx)(r.Text, {
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
let M = c.forwardRef(function (e, n) {
    let { connectedAccounts: t, theme: c, locale: l, className: o, userId: i } = e;
    if (null == t || 0 === t.length) return null;
    let r = t
            .filter((e) => T.Z.isSupported(e.type))
            .map((e) =>
                (0, a.jsx)(
                    P,
                    {
                        connectedAccount: e,
                        theme: c,
                        locale: l,
                        userId: i
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        E = [];
    for (let e = 0; e < r.length; e++) {
        let n = r[e];
        e % 2 == 0 ? u.push(n) : E.push(n);
    }
    return (0, a.jsxs)('div', {
        ref: n,
        className: s()(R.connectedAccounts, o),
        children: [
            (0, a.jsx)('div', {
                className: R.connectedAccountsColumn,
                children: u
            }),
            (0, a.jsx)('div', {
                className: R.connectedAccountsColumn,
                children: E
            })
        ]
    });
});
