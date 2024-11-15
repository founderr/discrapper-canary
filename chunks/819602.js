n.d(t, {
    E3: function () {
        return P;
    },
    OA: function () {
        return R;
    },
    tH: function () {
        return L;
    }
}),
    n(653041);
var c = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(692547),
    i = n(780384),
    u = n(481060),
    s = n(99690),
    d = n(726542),
    T = n(367907),
    E = n(132871),
    A = n(147890),
    p = n(122021),
    m = n(275759),
    _ = n(888496),
    I = n(753194),
    N = n(598077),
    f = n(671533),
    h = n(49012),
    C = n(981631),
    O = n(856651),
    v = n(388032),
    x = n(179588);
function P(e) {
    var t, n;
    let l,
        r,
        s,
        { connectedAccount: E, theme: A, locale: N, userId: P, className: L, showMetadata: R, showInvisibleIcon: g } = e;
    null == R && (R = !0);
    let S = null !== (n = E.metadata) && void 0 !== n ? n : {},
        b = R ? (0, m.FI)(S[O.PC.CREATED_AT], N) : null,
        D = (0, u.useToken)(a.Z.unsafe_rawColors.TWITTER).hex(),
        y = v.intl.string(v.t['6H6h1t']);
    if (R)
        switch (E.type) {
            case C.ABu.REDDIT:
                l = (0, _.oP)(S);
                break;
            case C.ABu.STEAM:
                l = (0, _.Dq)(S);
                break;
            case C.ABu.TWITTER:
                (l = (0, _.rJ)(S)), '1' === S[O.PC.TWITTER_VERIFIED] && ((r = D), (y = v.intl.string(v.t.Jebrw8)));
                break;
            case C.ABu.PAYPAL:
                l = (0, _.li)(S);
                break;
            case C.ABu.EBAY:
                l = (0, _.ul)(S);
                break;
            case C.ABu.TIKTOK:
                l = (0, _.hf)(S);
        }
    let U = d.Z.get((0, p.rR)(E.type)),
        j = null == U ? void 0 : null === (t = U.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(U, E);
    null != g && g
        ? (s = (0, c.jsx)(u.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: o()(x.__invalid_connectedAccountOpenIconContainer, x.connectedAccountHideIcon)
          }))
        : null != j &&
          (s = (0, c.jsx)(u.Anchor, {
              href: j,
              onClick: (e) => {
                  var t, n;
                  (t = E.type),
                      (n = P),
                      (0, T.yw)(C.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: t,
                          other_user_id: n
                      }),
                      (0, h.q)(
                          {
                              href: j,
                              trusted: (null == U ? void 0 : U.type) !== C.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(f.Z, {
                  className: x.connectedAccountOpenIcon,
                  direction: f.Z.Directions.RIGHT
              })
          }));
    let w = (0, u.useToken)(a.Z.colors.INTERACTIVE_MUTED).hex(),
        M = (0, u.useToken)(a.Z.colors.INTERACTIVE_ACTIVE).hex(),
        V = E.verified
            ? (0, c.jsx)(I.Z, {
                  className: x.connectedAccountVerifiedIcon,
                  color: null != r ? r : w,
                  forcedIconColor: M,
                  size: 16,
                  tooltipText: y
              })
            : null;
    return (0, c.jsxs)('div', {
        className: o()(x.connectedAccountContainer, (null != l && l.length > 0) || null != b ? x.connectedAccountContainerWithMetadata : null, L),
        children: [
            (0, c.jsxs)('div', {
                className: x.connectedAccount,
                children: [
                    (0, c.jsx)(u.Tooltip, {
                        text: null == U ? void 0 : U.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: v.intl.formatToPlainString(v.t.rtm15O, { name: null == U ? void 0 : U.name }),
                                className: x.connectedAccountIcon,
                                src: (0, i.wj)(A) ? (null == U ? void 0 : U.icon.darkSVG) : null == U ? void 0 : U.icon.lightSVG
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
                                            V
                                        ]
                                    }),
                                    s
                                ]
                            }),
                            null != b
                                ? (0, c.jsx)(u.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: v.intl.format(v.t['9rfonp'], { date: b })
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
function L(e) {
    let { applicationRoleConnection: t, className: n, locale: l, onApplicationClicked: r, selectedGuildId: a } = e,
        i = (0, _.rm)(t, void 0, l),
        d = () => {
            null == r || r(),
                (0, A.goToAppDirectory)({
                    view: E.ApplicationDirectoryViews.APPLICATION,
                    applicationId: t.application.id,
                    guildId: a,
                    entrypoint: { name: E.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: o()(x.connectedAccountContainer, null != i && i.length > 0 ? x.connectedAccountContainerWithMetadata : null, n),
        children: [
            (0, c.jsx)('div', {
                className: x.connectedAccount,
                children: (0, c.jsxs)(u.Clickable, {
                    className: o()(x.connectedAccountNameContainer, x.connectedAccountNameContainerClickable),
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
                      className: o()(x.connectedAccountChildren, x.connectedAccountChildrenNoIcon),
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
                                                  user: new N.Z(t.application.bot),
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
let R = l.forwardRef(function (e, t) {
    let { connectedAccounts: n, theme: l, locale: r, className: a, userId: i } = e;
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
        className: o()(x.connectedAccounts, a),
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
