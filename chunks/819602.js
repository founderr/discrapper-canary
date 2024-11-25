n.d(t, {
    E3: function () {
        return P;
    },
    OA: function () {
        return L;
    },
    tH: function () {
        return R;
    }
}),
    n(653041);
var c = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(692547),
    i = n(780384),
    u = n(481060),
    s = n(99690),
    d = n(726542),
    T = n(367907),
    E = n(132871),
    A = n(147890),
    p = n(122021),
    _ = n(275759),
    m = n(888496),
    I = n(753194),
    O = n(598077),
    N = n(671533),
    f = n(49012),
    h = n(981631),
    C = n(856651),
    v = n(388032),
    x = n(196161);
function P(e) {
    var t, n;
    let l,
        r,
        s,
        { connectedAccount: E, theme: A, locale: O, userId: P, className: R, showMetadata: L, showInvisibleIcon: S } = e;
    null == L && (L = !0);
    let g = null !== (n = E.metadata) && void 0 !== n ? n : {},
        D = L ? (0, _.FI)(g[C.PC.CREATED_AT], O) : null,
        b = (0, u.useToken)(o.Z.unsafe_rawColors.TWITTER).hex(),
        y = v.intl.string(v.t['6H6h1t']);
    if (L)
        switch (E.type) {
            case h.ABu.REDDIT:
                l = (0, m.oP)(g);
                break;
            case h.ABu.STEAM:
                l = (0, m.Dq)(g);
                break;
            case h.ABu.BLUESKY:
            case h.ABu.MASTODON:
            case h.ABu.TWITTER:
                (l = (0, m.rJ)(g)), '1' === g[C.PC.TWITTER_VERIFIED] && ((r = b), (y = v.intl.string(v.t.Jebrw8)));
                break;
            case h.ABu.PAYPAL:
                l = (0, m.li)(g);
                break;
            case h.ABu.EBAY:
                l = (0, m.ul)(g);
                break;
            case h.ABu.TIKTOK:
                l = (0, m.hf)(g);
        }
    let j = d.Z.get((0, p.rR)(E.type)),
        U = null == j ? void 0 : null === (t = j.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(j, E);
    null != S && S
        ? (s = (0, c.jsx)(u.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: a()(x.__invalid_connectedAccountOpenIconContainer, x.connectedAccountHideIcon)
          }))
        : null != U &&
          (s = (0, c.jsx)(u.Anchor, {
              href: U,
              onClick: (e) => {
                  var t, n;
                  (t = E.type),
                      (n = P),
                      (0, T.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: n
                      }),
                      (0, f.q)(
                          {
                              href: U,
                              trusted: (null == j ? void 0 : j.type) !== h.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(N.Z, {
                  className: x.connectedAccountOpenIcon,
                  direction: N.Z.Directions.RIGHT
              })
          }));
    let w = (0, u.useToken)(o.Z.colors.INTERACTIVE_MUTED).hex(),
        V = (0, u.useToken)(o.Z.colors.INTERACTIVE_ACTIVE).hex(),
        M = E.verified
            ? (0, c.jsx)(I.Z, {
                  className: x.connectedAccountVerifiedIcon,
                  color: null != r ? r : w,
                  forcedIconColor: V,
                  size: 16,
                  tooltipText: y
              })
            : null;
    return (0, c.jsxs)('div', {
        className: a()(x.connectedAccountContainer, (null != l && l.length > 0) || null != D ? x.connectedAccountContainerWithMetadata : null, R),
        children: [
            (0, c.jsxs)('div', {
                className: x.connectedAccount,
                children: [
                    (0, c.jsx)(u.Tooltip, {
                        text: null == j ? void 0 : j.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: v.intl.formatToPlainString(v.t.rtm15O, { name: null == j ? void 0 : j.name }),
                                className: x.connectedAccountIcon,
                                src: (0, i.wj)(A) ? (null == j ? void 0 : j.icon.darkSVG) : null == j ? void 0 : j.icon.lightSVG
                            })
                    }),
                    (0, c.jsxs)('div', {
                        className: x.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)('div', {
                                className: x.connectedAccountName,
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: x.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(u.Tooltip, {
                                                overflowOnly: !0,
                                                text: E.name,
                                                children: (e) =>
                                                    (0, c.jsx)(u.Text, {
                                                        ...e,
                                                        variant: 'text-md/semibold',
                                                        color: 'interactive-active',
                                                        className: x.connectedAccountNameText,
                                                        children: E.name
                                                    })
                                            }),
                                            M
                                        ]
                                    }),
                                    s
                                ]
                            }),
                            null != D
                                ? (0, c.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: v.intl.format(v.t['9rfonp'], { date: D })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != l && l.length > 0
                ? (0, c.jsx)('div', {
                      className: x.connectedAccountChildren,
                      children: l
                  })
                : null
        ]
    });
}
function R(e) {
    let { applicationRoleConnection: t, className: n, locale: l, onApplicationClicked: r, selectedGuildId: o } = e,
        i = (0, m.rm)(t, void 0, l),
        d = () => {
            null == r || r(),
                (0, A.goToAppDirectory)({
                    view: E.ApplicationDirectoryViews.APPLICATION,
                    applicationId: t.application.id,
                    guildId: o,
                    entrypoint: { name: E.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: a()(x.connectedAccountContainer, null != i && i.length > 0 ? x.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, c.jsx)('div', {
                className: x.connectedAccount,
                children: (0, c.jsxs)(u.Clickable, {
                    className: a()(x.connectedAccountNameContainer, x.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != t.platform_name
                            ? (0, c.jsx)(u.Text, {
                                  variant: 'eyebrow',
                                  color: 'interactive-normal',
                                  children: t.platform_name
                              })
                            : null,
                        null != t.platform_username
                            ? (0, c.jsx)('div', {
                                  className: x.connectedAccountName,
                                  children: (0, c.jsx)('div', {
                                      className: x.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(u.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'interactive-active',
                                          className: x.connectedAccountNameText,
                                          children: t.platform_username
                                      })
                                  })
                              })
                            : null
                    ]
                })
            }),
            null != i && i.length > 0
                ? (0, c.jsx)('div', {
                      className: a()(x.connectedAccountChildren, x.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(u.Clickable, {
                    className: x.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(u.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: v.intl.format(v.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: x.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, c.jsx)(s.Z, {
                                                  user: new O.Z(t.application.bot),
                                                  size: u.AvatarSizes.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(u.Text, {
                                            variant: 'text-xs/normal',
                                            color: 'text-normal',
                                            children: t.application.name
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
let L = l.forwardRef(function (e, t) {
    let { connectedAccounts: n, theme: l, locale: r, className: o, userId: i } = e;
    if (null == n || 0 === n.length) return null;
    let u = n
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, c.jsx)(
                    P,
                    {
                        connectedAccount: e,
                        theme: l,
                        locale: r,
                        userId: i
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        s = [],
        T = [];
    for (let e = 0; e < u.length; e++) {
        let t = u[e];
        e % 2 == 0 ? s.push(t) : T.push(t);
    }
    return (0, c.jsxs)('div', {
        ref: t,
        className: a()(x.connectedAccounts, o),
        children: [
            (0, c.jsx)('div', {
                className: x.connectedAccountsColumn,
                children: s
            }),
            (0, c.jsx)('div', {
                className: x.connectedAccountsColumn,
                children: T
            })
        ]
    });
});
