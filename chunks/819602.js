t.d(n, {
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
    t(653041);
var c = t(200651),
    l = t(192379),
    o = t(120356),
    a = t.n(o),
    r = t(692547),
    i = t(780384),
    s = t(481060),
    u = t(99690),
    d = t(726542),
    T = t(367907),
    A = t(132871),
    E = t(147890),
    m = t(122021),
    p = t(275759),
    _ = t(888496),
    N = t(753194),
    I = t(598077),
    h = t(671533),
    C = t(49012),
    x = t(981631),
    v = t(856651),
    O = t(388032),
    f = t(962586);
function P(e) {
    var n, t;
    let l,
        o,
        u,
        { connectedAccount: A, theme: E, locale: I, userId: P, className: R, showMetadata: L, showInvisibleIcon: D } = e;
    null == L && (L = !0);
    let g = null !== (t = A.metadata) && void 0 !== t ? t : {},
        j = L ? (0, p.FI)(g[v.PC.CREATED_AT], I) : null,
        b = (0, s.useToken)(r.Z.unsafe_rawColors.TWITTER).hex(),
        y = O.intl.string(O.t['6H6h1t']);
    if (L)
        switch (A.type) {
            case x.ABu.REDDIT:
                l = (0, _.oP)(g);
                break;
            case x.ABu.STEAM:
                l = (0, _.Dq)(g);
                break;
            case x.ABu.TWITTER:
                (l = (0, _.rJ)(g)), '1' === g[v.PC.TWITTER_VERIFIED] && ((o = b), (y = O.intl.string(O.t.Jebrw8)));
                break;
            case x.ABu.PAYPAL:
                l = (0, _.li)(g);
                break;
            case x.ABu.EBAY:
                l = (0, _.ul)(g);
                break;
            case x.ABu.TIKTOK:
                l = (0, _.hf)(g);
        }
    let w = d.Z.get((0, m.rR)(A.type)),
        U = null == w ? void 0 : null === (n = w.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(w, A);
    null != D && D
        ? (u = (0, c.jsx)(s.EyeSlashIcon, {
              size: 'md',
              color: 'currentColor',
              className: a()(f.__invalid_connectedAccountOpenIconContainer, f.connectedAccountHideIcon)
          }))
        : null != U &&
          (u = (0, c.jsx)(s.Anchor, {
              href: U,
              onClick: (e) => {
                  var n, t;
                  (n = A.type),
                      (t = P),
                      (0, T.yw)(x.rMx.CONNECTED_ACCOUNT_VIEWED, {
                          platform_type: n,
                          other_user_id: t
                      }),
                      (0, C.q)(
                          {
                              href: U,
                              trusted: (null == w ? void 0 : w.type) !== x.ABu.DOMAIN
                          },
                          e
                      );
              },
              children: (0, c.jsx)(h.Z, {
                  className: f.connectedAccountOpenIcon,
                  direction: h.Z.Directions.RIGHT
              })
          }));
    let S = (0, s.useToken)(r.Z.colors.INTERACTIVE_MUTED).hex(),
        M = (0, s.useToken)(r.Z.colors.INTERACTIVE_ACTIVE).hex(),
        V = A.verified
            ? (0, c.jsx)(N.Z, {
                  className: f.connectedAccountVerifiedIcon,
                  color: null != o ? o : S,
                  forcedIconColor: M,
                  size: 16,
                  tooltipText: y
              })
            : null;
    return (0, c.jsxs)('div', {
        className: a()(f.connectedAccountContainer, (null != l && l.length > 0) || null != j ? f.connectedAccountContainerWithMetadata : null, R),
        children: [
            (0, c.jsxs)('div', {
                className: f.connectedAccount,
                children: [
                    (0, c.jsx)(s.Tooltip, {
                        text: null == w ? void 0 : w.name,
                        children: (e) =>
                            (0, c.jsx)('img', {
                                ...e,
                                alt: O.intl.formatToPlainString(O.t.rtm15O, { name: null == w ? void 0 : w.name }),
                                className: f.connectedAccountIcon,
                                src: (0, i.wj)(E) ? (null == w ? void 0 : w.icon.darkSVG) : null == w ? void 0 : w.icon.lightSVG
                            })
                    }),
                    (0, c.jsxs)('div', {
                        className: f.connectedAccountNameContainer,
                        children: [
                            (0, c.jsxs)('div', {
                                className: f.connectedAccountName,
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: f.connectedAccountNameTextContainer,
                                        children: [
                                            (0, c.jsx)(s.Tooltip, {
                                                overflowOnly: !0,
                                                text: A.name,
                                                children: (e) =>
                                                    (0, c.jsx)(s.Text, {
                                                        ...e,
                                                        variant: 'text-md/semibold',
                                                        color: 'interactive-active',
                                                        className: f.connectedAccountNameText,
                                                        children: A.name
                                                    })
                                            }),
                                            V
                                        ]
                                    }),
                                    u
                                ]
                            }),
                            null != j
                                ? (0, c.jsx)(s.Text, {
                                      variant: 'text-xs/normal',
                                      color: 'header-secondary',
                                      children: O.intl.format(O.t['9rfonp'], { date: j })
                                  })
                                : null
                        ]
                    })
                ]
            }),
            null != l && l.length > 0
                ? (0, c.jsx)('div', {
                      className: f.connectedAccountChildren,
                      children: l
                  })
                : null
        ]
    });
}
function R(e) {
    let { applicationRoleConnection: n, className: t, locale: l, onApplicationClicked: o, selectedGuildId: r } = e,
        i = (0, _.rm)(n, void 0, l),
        d = () => {
            null == o || o(),
                (0, E.goToAppDirectory)({
                    view: A.ApplicationDirectoryViews.APPLICATION,
                    applicationId: n.application.id,
                    guildId: r,
                    entrypoint: { name: A.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_URL }
                });
        };
    return (0, c.jsxs)('div', {
        className: a()(f.connectedAccountContainer, null != i && i.length > 0 ? f.connectedAccountContainerWithMetadata : null, t),
        children: [
            (0, c.jsx)('div', {
                className: f.connectedAccount,
                children: (0, c.jsxs)(s.Clickable, {
                    className: a()(f.connectedAccountNameContainer, f.connectedAccountNameContainerClickable),
                    onClick: d,
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
                                  className: f.connectedAccountName,
                                  children: (0, c.jsx)('div', {
                                      className: f.connectedAccountNameTextContainer,
                                      children: (0, c.jsx)(s.Text, {
                                          variant: 'text-md/semibold',
                                          color: 'interactive-active',
                                          className: f.connectedAccountNameText,
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
                      className: a()(f.connectedAccountChildren, f.connectedAccountChildrenNoIcon),
                      children: i
                  })
                : null,
            (0, c.jsx)('div', {
                children: (0, c.jsx)(s.Clickable, {
                    className: f.connectedAccountPoweredBy,
                    onClick: d,
                    children: (0, c.jsx)(s.Text, {
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: O.intl.format(O.t.zIT9YG, {
                            applicationHook: () =>
                                (0, c.jsxs)('div', {
                                    className: f.connectedAccountPoweredByText,
                                    children: [
                                        null != n.application.bot
                                            ? (0, c.jsx)(u.Z, {
                                                  user: new I.Z(n.application.bot),
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
let L = l.forwardRef(function (e, n) {
    let { connectedAccounts: t, theme: l, locale: o, className: r, userId: i } = e;
    if (null == t || 0 === t.length) return null;
    let s = t
            .filter((e) => d.Z.isSupported(e.type))
            .map((e) =>
                (0, c.jsx)(
                    P,
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
        let n = s[e];
        e % 2 == 0 ? u.push(n) : T.push(n);
    }
    return (0, c.jsxs)('div', {
        ref: n,
        className: a()(f.connectedAccounts, r),
        children: [
            (0, c.jsx)('div', {
                className: f.connectedAccountsColumn,
                children: u
            }),
            (0, c.jsx)('div', {
                className: f.connectedAccountsColumn,
                children: T
            })
        ]
    });
});
