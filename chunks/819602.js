n.d(t, {
    E3: function () {
        return L;
    },
    OA: function () {
        return R;
    },
    tH: function () {
        return P;
    }
}),
    n(653041);
var c = n(200651),
    l = n(192379),
    o = n(120356),
    a = n.n(o),
    r = n(692547),
    i = n(780384),
    s = n(481060),
    u = n(99690),
    d = n(726542),
    T = n(367907),
    A = n(132871),
    E = n(147890),
    p = n(122021),
    _ = n(275759),
    I = n(888496),
    m = n(753194),
    O = n(598077),
    N = n(671533),
    v = n(49012),
    h = n(981631),
    C = n(856651),
    f = n(388032),
    x = n(196161);
function L(e) {
    var t, n;
    let l,
        o,
        u,
        { connectedAccount: A, theme: E, locale: O, userId: L, className: P, showMetadata: R, showInvisibleIcon: S } = e;
    null == R && (R = !0);
    let D = null !== (n = A.metadata) && void 0 !== n ? n : {},
        y = R ? (0, _.FI)(D[C.PC.CREATED_AT], O) : null,
        b = (0, s.useToken)(r.Z.unsafe_rawColors.TWITTER).hex(),
        g = f.intl.string(f.t['6H6h1t']);
    if (R)
        switch (A.type) {
            case h.ABu.REDDIT:
                l = (0, I.oP)(D);
                break;
            case h.ABu.STEAM:
                l = (0, I.Dq)(D);
                break;
            case h.ABu.BLUESKY:
            case h.ABu.MASTODON:
            case h.ABu.TWITTER:
                (l = (0, I.rJ)(D)), '1' === D[C.PC.TWITTER_VERIFIED] && ((o = b), (g = f.intl.string(f.t.Jebrw8)));
                break;
            case h.ABu.PAYPAL:
                l = (0, I.li)(D);
                break;
            case h.ABu.EBAY:
                l = (0, I.ul)(D);
                break;
            case h.ABu.TIKTOK:
                l = (0, I.hf)(D);
        }
    let j = d.Z.get((0, p.rR)(A.type)),
        U = null == j ? void 0 : null === (t = j.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(j, A);
    null != S && S
        ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: a()(x.__invalid_connectedAccountOpenIconContainer, x.connectedAccountHideIcon)
          }))
        : null != U &&
          (u = (0, c.jsx)(s.Anchor, {
              href: U,
              onClick: (e) => {
                  var t, n;
                  (t = A.type),
                      (n = L),
                      (0, T.yw)(h.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: n
                      }),
                      (0, v.q)(
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
    let w = (0, s.useToken)(r.Z.colors.INTERACTIVE_MUTED).hex(),
        V = (0, s.useToken)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
        G = A.verified
            ? (0, c.jsx)(m.Z, {
                  className: x.connectedAccountVerifiedIcon,
                  color: null != o ? o : w,
                  forcedIconColor: V,
                  size: 16,
                  tooltipText: g
              })
            : null;
    return (0, c.jsxs)('div', {
        className: a()(x.connectedAccountContainer, (null != l && l.length > 0) || null != y ? x.connectedAccountContainerWithMetadata : null, P),
        children: [
            (0, c.jsxs)('div', {
                className: x.connectedAccount,
                children: [
                    (0, c.jsx)(s.Tooltip, {
                        text: null == j ? void 0 : j.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: f.intl.formatToPlainString(f.t.rtm15O, { name: null == j ? void 0 : j.name }),
                                className: x.connectedAccountIcon,
                                src: (0, i.wj)(E) ? (null == j ? void 0 : j.icon.darkSVG) : null == j ? void 0 : j.icon.lightSVG
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
                                            (0, c.jsx)(s.Tooltip, {
                                                overflowOnly: !0,
                                                text: A.name,
                                                children: (e) =>
                                                    (0, c.jsx)(s.Text, {
                                                        ...e,
                                                        variant: 'text-md/semibold',
                                                        color: 'interactive-active',
                                                        className: x.connectedAccountNameText,
                                                        children: A.name
                                                    })
                                            }),
                                            G
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != y
                                ? (0, c.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: f.intl.format(f.t['9rfonp'], { date: y })
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
function P(e) {
    let { applicationRoleConnection: t, className: n, locale: l, onApplicationClicked: o, selectedGuildId: r } = e,
        i = (0, I.rm)(t, void 0, l),
        d = () => {
            null == o || o(),
                (0, E.goToAppDirectory)({
                    view: A.ApplicationDirectoryViews.APPLICATION,
                    applicationId: t.application.id,
                    guildId: r,
                    entrypoint: { name: A.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: a()(x.connectedAccountContainer, null != i && i.length > 0 ? x.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, c.jsx)('div', {
                className: x.connectedAccount,
                children: (0, c.jsxs)(s.Clickable, {
                    className: a()(x.connectedAccountNameContainer, x.connectedAccountNameContainerClickable),
                    onClick: d,
                    children: [
                        null != t.platform_name
                            ? (0, c.jsx)(s.Text, {
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
                                      children: (0, c.jsx)(s.Text, {
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
                children: (0, c.jsx)(s.Clickable, {
                    className: x.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: f.intl.format(f.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: x.connectedAccountPoweredByText,
                                    children: [
                                        null != t.application.bot
                                            ? (0, c.jsx)(u.Z, {
                                                  user: new O.Z(t.application.bot),
                                                  size: s.AvatarSizes.SIZE_16
                                              })
                                            : null,
                                        (0, c.jsx)(s.Text, {
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
let R = l.forwardRef(function (e, t) {
    let { connectedAccounts: n, theme: l, locale: o, className: r, userId: i } = e;
    if (null == n || 0 === n.length) return null;
    let s = n
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, c.jsx)(
                    L,
                    {
                        connectedAccount: e,
                        theme: l,
                        locale: o,
                        userId: i
                    },
                    ''.concat(e.type, ':').concat(e.id)
                )
            ),
        u = [],
        T = [];
    for (let e = 0; e < s.length; e++) {
        let t = s[e];
        e % 2 == 0 ? u.push(t) : T.push(t);
    }
    return (0, c.jsxs)('div', {
        ref: t,
        className: a()(x.connectedAccounts, r),
        children: [
            (0, c.jsx)('div', {
                className: x.connectedAccountsColumn,
                children: u
            }),
            (0, c.jsx)('div', {
                className: x.connectedAccountsColumn,
                children: T
            })
        ]
    });
});
