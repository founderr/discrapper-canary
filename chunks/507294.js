n.r(t),
    n.d(t, {
        openGuildRoleConnectionsConnectAccountModal: function () {
            return L;
        }
    }),
    n(47120),
    n(536091);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(780384),
    c = n(481060),
    d = n(239091),
    u = n(749210),
    h = n(410030),
    m = n(726542),
    p = n(884338),
    g = n(367907),
    f = n(313201),
    _ = n(598077),
    E = n(314897),
    I = n(271383),
    C = n(430824),
    v = n(626135),
    S = n(63063),
    N = n(134433),
    T = n(225104),
    b = n(981631),
    A = n(388032),
    x = n(698948),
    Z = n(795661);
function L(e, t) {
    (0, c.openModalLazy)(async () => {
        let { default: r } = await Promise.all([n.e('56630'), n.e('82412'), n.e('83953')]).then(n.bind(n, 107807));
        return (n) =>
            (0, i.jsx)(r, {
                role: e,
                guildId: t,
                ...n
            });
    });
}
t.default = function (e) {
    let { guildId: t, transitionState: l, onClose: y } = e,
        P = (0, o.e7)([C.Z], () => C.Z.getRoles(t)),
        O = (0, o.e7)([E.default], () => E.default.getId()),
        R = (0, o.e7)([I.ZP], () => I.ZP.getMember(t, O)),
        [j, D] = r.useState([]),
        M = (0, h.ZP)(),
        w = (0, f.Dt)();
    if (
        (r.useEffect(() => {
            if (0 !== j.length)
                v.default.track(b.rMx.PASSPORT_ENTRY_VIEWED, {
                    role_ids: j.map((e) => {
                        let { role_id: t } = e;
                        return t;
                    }),
                    ...(0, g.hH)(t)
                });
        }, [t, j]),
        r.useEffect(() => {
            u.Z.getGuildRoleConnectionsConfigurations(t).then((e) => D(e));
        }, [t]),
        null == R)
    )
        return null;
    let k = Object.values(P).filter((e) => {
        var t;
        return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null;
    });
    return (0, i.jsxs)(c.ModalRoot, {
        transitionState: l,
        'aria-labelledby': w,
        className: x.modal,
        children: [
            (0, i.jsxs)(c.ModalHeader, {
                separator: !1,
                children: [
                    (0, i.jsx)(N.Z, {
                        className: x.headerIcon,
                        size: 24
                    }),
                    (0, i.jsx)(c.Heading, {
                        variant: 'text-md/medium',
                        color: 'header-primary',
                        children: A.intl.string(A.t.ghtnsr)
                    }),
                    (0, i.jsx)(c.ModalCloseButton, {
                        className: x.modalCloseButton,
                        onClick: y
                    })
                ]
            }),
            (0, i.jsxs)(c.ModalContent, {
                className: x.container,
                children: [
                    (0, i.jsx)(c.Heading, {
                        variant: 'heading-md/semibold',
                        color: 'header-primary',
                        children: A.intl.format(A.t['Y+TsER'], { helpdeskArticleUrl: S.Z.getArticleURL(b.BhN.CONNECTION_DETAILS) })
                    }),
                    (0, i.jsx)('div', {
                        className: x.verifiedRoles,
                        children: k.map((e) => {
                            let l = R.roles.includes(e.id),
                                o = (function (e) {
                                    let n = j.find((t) => {
                                        let { role_id: n } = t;
                                        return n === e;
                                    });
                                    if (null == n) return [];
                                    let r = {};
                                    for (let e of n.rules.flat()) {
                                        let o;
                                        if (null != e.application_id) {
                                            var l;
                                            let r = null === (l = n.applications) || void 0 === l ? void 0 : l[e.application_id];
                                            o =
                                                (null == r ? void 0 : r.bot) != null
                                                    ? (0, i.jsx)('img', {
                                                          src: new _.Z(r.bot).getAvatarURL(t, 24),
                                                          alt: '',
                                                          className: a()(x.botAvatar, Z.avatar)
                                                      })
                                                    : null;
                                        } else {
                                            let t = m.Z.get(e.connection_type);
                                            o = (0, i.jsx)('img', {
                                                src: (0, s.ap)(M) ? t.icon.lightSVG : t.icon.darkSVG,
                                                alt: '',
                                                className: Z.avatar
                                            });
                                        }
                                        if (null != o) r[''.concat(e.connection_type, ':').concat(e.application_id)] = o;
                                    }
                                    return Object.values(r);
                                })(e.id);
                            return (0, i.jsxs)(
                                c.Clickable,
                                {
                                    className: a()(x.verifiedRole, l ? x.verifiedRoleHasRole : null),
                                    onClick: l ? void 0 : () => L(e, t),
                                    onContextMenu: l
                                        ? (r) => {
                                              var l, a, o;
                                              return (
                                                  (l = t),
                                                  (a = e.id),
                                                  (o = r),
                                                  void (0, d.jW)(o, async () => {
                                                      let { default: e } = await n.e('60079').then(n.bind(n, 850902));
                                                      return (t) =>
                                                          (0, i.jsx)(e, {
                                                              ...t,
                                                              roleId: a,
                                                              onLeaveRole: () => u.Z.unassignGuildRoleConnection(l, a)
                                                          });
                                                  })
                                              );
                                          }
                                        : void 0,
                                    children: [
                                        l
                                            ? (0, i.jsx)('div', {
                                                  className: x.roleCheckmark,
                                                  children: (0, i.jsx)(c.CheckmarkSmallIcon, {
                                                      size: 'xs',
                                                      color: 'currentColor'
                                                  })
                                              })
                                            : null,
                                        (0, i.jsx)(T.Z, {
                                            guildId: t,
                                            role: e,
                                            size: 24
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: x.verifiedRoleNameDescriptionContainer,
                                            children: [
                                                (0, i.jsx)(c.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'header-primary',
                                                    className: x.verifiedRoleName,
                                                    children: e.name
                                                }),
                                                void 0 !== e.description
                                                    ? (0, i.jsx)(c.Text, {
                                                          variant: 'text-xs/normal',
                                                          color: 'header-secondary',
                                                          className: x.verifiedRoleDescription,
                                                          children: e.description
                                                      })
                                                    : null
                                            ]
                                        }),
                                        (0, i.jsx)(p.Z, {
                                            showUserPopout: !1,
                                            guildId: t,
                                            users: o.map(() => null),
                                            renderUser: (e, t, n) => (0, i.jsx)(r.Fragment, { children: o[n] }, n),
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
