n.r(t),
    n.d(t, {
        openGuildRoleConnectionsConnectAccountModal: function () {
            return O;
        }
    }),
    n(47120),
    n(536091);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(780384),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    _ = n(410030),
    E = n(726542),
    h = n(884338),
    m = n(367907),
    I = n(313201),
    g = n(598077),
    p = n(314897),
    T = n(271383),
    S = n(430824),
    f = n(626135),
    C = n(63063),
    N = n(134433),
    A = n(225104),
    v = n(981631),
    L = n(689938),
    Z = n(140167),
    R = n(621925);
function O(e, t) {
    (0, c.openModalLazy)(async () => {
        let { default: a } = await Promise.all([n.e('82412'), n.e('18993')]).then(n.bind(n, 107807));
        return (n) =>
            (0, i.jsx)(a, {
                role: e,
                guildId: t,
                ...n
            });
    });
}
t.default = function (e) {
    let { guildId: t, transitionState: s, onClose: x } = e,
        b = (0, l.e7)([S.Z], () => S.Z.getRoles(t)),
        P = (0, l.e7)([p.default], () => p.default.getId()),
        M = (0, l.e7)([T.ZP], () => T.ZP.getMember(t, P)),
        [D, y] = a.useState([]),
        j = (0, _.ZP)(),
        U = (0, I.Dt)();
    if (
        (a.useEffect(() => {
            if (0 !== D.length)
                f.default.track(v.rMx.PASSPORT_ENTRY_VIEWED, {
                    role_ids: D.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, m.hH)(t)
                });
        }, [t, D]),
        a.useEffect(() => {
            u.Z.getGuildRoleConnectionsConfigurations(t).then((e) => y(e));
        }, [t]),
        null == M)
    )
        return null;
    let G = Object.values(b).filter((e) => {
        var t;
        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
    });
    return (0, i.jsxs)(c.ModalRoot, {
        transitionState: s,
        'aria-labelledby': U,
        className: Z.modal,
        children: [
            (0, i.jsxs)(c.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(N.Z, {
                        className: Z.headerIcon,
                        size: 24
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: L.Z.Messages.CONNECTIONS_ROLES_CHANNEL_NAME
                    }),
                    (0, i.jsx)(c.ModalCloseButton, {
                        className: Z.modalCloseButton,
                        onClick: x
                    })
                ]
            }),
            (0, i.jsxs)(c.ModalContent, {
                className: Z.container,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: L.Z.Messages.CONNECTIONS_ROLES_CHANNEL_CALL_TO_ACTION_LEARN_MORE.format({ helpdeskArticleUrl: C.Z.getArticleURL(v.BhN.CONNECTION_DETAILS) })
                    }),
                    (0, i.jsx)('div', {
                        className: Z.verifiedRoles,
                        children: G.map((e) => {
                            let s = M.roles.includes(e.id),
                                l = (function (e) {
                                    let n = D.find((t) => {
                                        let { role_id: n } = t;
                                        return n === e;
                                    });
                                    if (null == n) return [];
                                    let a = {};
                                    for (let e of n.rules.flat()) {
                                        let l;
                                        if (null != e.application_id) {
                                            var s;
                                            let a = null === (s = n.applications) || void 0 === s ? void 0 : s[e.application_id];
                                            l =
                                                (null == a ? void 0 : a.bot) != null
                                                    ? (0, i.jsx)('img', {
                                                          src: new g.Z(a.bot).getAvatarURL(t, 24),
                                                          alt: '',
                                                          className: r()(Z.botAvatar, R.avatar)
                                                      })
                                                    : null;
                                        } else {
                                            let t = E.Z.get(e.connection_type);
                                            l = (0, i.jsx)('img', {
                                                src: (0, o.ap)(j) ? t.icon.lightSVG : t.icon.darkSVG,
                                                alt: '',
                                                className: R.avatar
                                            });
                                        }
                                        if (null != l) a[''.concat(e.connection_type, ':').concat(e.application_id)] = l;
                                    }
                                    return Object.values(a);
                                })(e.id);
                            return (0, i.jsxs)(
                                c.Clickable,
                                {
                                    className: r()(Z.verifiedRole, s ? Z.verifiedRoleHasRole : null),
                                    onClick: s ? void 0 : () => O(e, t),
                                    onContextMenu: s
                                        ? (a) => {
                                              var s, r, l;
                                              return (
                                                  (s = t),
                                                  (r = e.id),
                                                  (l = a),
                                                  void (0, d.jW)(l, async () => {
                                                      let { default: e } = await n.e('60079').then(n.bind(n, 850902));
                                                      return (t) =>
                                                          (0, i.jsx)(e, {
                                                              ...t,
                                                              roleId: r,
                                                              onLeaveRole: () => u.Z.unassignGuildRoleConnection(s, r)
                                                          });
                                                  })
                                              );
                                          }
                                        : void 0,
                                    children: [
                                        s
                                            ? (0, i.jsx)('div', {
                                                  className: Z.roleCheckmark,
                                                  children: (0, i.jsx)(c.CheckmarkSmallIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  })
                                              })
                                            : null,
                                        (0, i.jsx)(A.Z, {
                                            guildId: t,
                                            role: e,
                                            size: 24
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: Z.verifiedRoleNameDescriptionContainer,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'header-primary',
                                                    className: Z.verifiedRoleName,
                                                    children: e.name
                                                }),
                                                void 0 !== e.description
                                                    ? (0, i.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'header-secondary',
                                                          className: Z.verifiedRoleDescription,
                                                          children: e.description
                                                      })
                                                    : null
                                            ]
                                        }),
                                        (0, i.jsx)(h.Z, {
                                            showUserPopout: !1,
                                            guildId: t,
                                            users: l.map(() => null),
                                            renderUser: (e, t, n) => (0, i.jsx)(a.Fragment, { children: l[n] }, n),
                                            max: 3
                                        })
                                    ]
                                },
                                e.id
                            );
                        })
                    })
                ]
            })
        ]
    });
};
