n.r(t),
    n.d(t, {
        AddMembersBody: function () {
            return w;
        },
        MemberRoleSelector: function () {
            return C;
        },
        default: function () {
            return M;
        }
    }),
    n(47120),
    n(653041);
var l = n(200651),
    i = n(192379),
    r = n(442837),
    s = n(481060),
    a = n(741361),
    o = n(461745),
    c = n(600164),
    d = n(313201),
    u = n(131704),
    m = n(592125),
    h = n(271383),
    x = n(430824),
    g = n(626135),
    b = n(934415),
    T = n(892880),
    E = n(226951),
    f = n(605436),
    S = n(971628),
    y = n(71080),
    j = n(981631),
    p = n(388032),
    R = n(194419);
let v = (0, d.hQ)();
function L(e, t) {
    return t ? e.slice(1) : e;
}
function w(e) {
    let t,
        { guild: n, channel: s, permission: a, pendingAdditions: c, setPendingAdditions: d, isStageChannel: u = null != s && s.isGuildStageVoice(), description: m } = e,
        [g, b] = i.useState(!1),
        [j, R] = i.useState(''),
        v = (0, r.e7)([x.Z], () => x.Z.getRoles(n.id));
    function w(e) {
        let t = L(j.trim(), g);
        return RegExp(''.concat(E.Z.escape(t)), 'i').test(e);
    }
    let M = (0, r.Wu)([h.ZP], () => h.ZP.getMemberIds(n.id));
    g ? (t = []) : u ? (t = f.Wx(n, v, s, a, w)) : 0 === (t = f.ik(n, v, s, a, w)).length && '' === j.trim() && !f.RD(n, v) && (t = f.aq());
    let A = f.iI(M, s, n, a, w),
        {
            placeholderText: N,
            hintText: k,
            renderEmptyText: Z
        } = (function () {
            return {
                placeholderText: p.intl.string(p.t.iezLLi),
                hintText: p.intl.string(p.t['rwFx8/']),
                renderEmptyText: (e) => p.intl.format(p.t.ErpIY2, { query: e })
            };
        })();
    return (0, l.jsx)(C, {
        pendingAdditions: c,
        query: j,
        onQueryChange: function (e) {
            let t = e.trim(),
                l = '@' === t.charAt(0);
            T.Z.requestMembers(n.id, L(t, l), y.EQ), R(e), b(l);
        },
        onClickRow: function (e) {
            let t = (0, S.G)(e);
            d((n) => {
                let l = { ...n };
                if (t in l) delete l[t];
                else {
                    let n;
                    e.rowType === y.aC.ROLE || e.rowType === y.aC.ADMINISTRATOR
                        ? (n = {
                              type: o.Fj.ROLE,
                              label: e.name,
                              color: e.colorString
                          })
                        : (e.rowType === y.aC.MEMBER || e.rowType === y.aC.OWNER) &&
                          (n = {
                              type: o.Fj.MEMBER,
                              label: e.name,
                              avatar: e.avatarURL
                          }),
                        null != n &&
                            (l[t] = {
                                display: n,
                                row: e
                            });
                }
                return l;
            });
        },
        onRemovePendingAddition: function (e) {
            d((t) => {
                let { [e]: n, ...l } = t;
                return l;
            });
        },
        roles: t,
        members: A,
        placeholderText: N,
        hintText: k,
        renderEmptyText: Z,
        isStageChannel: u,
        description: m
    });
}
function C(e) {
    let t,
        { listClassName: n, pendingAdditions: i, query: r, onQueryChange: a, onClickRow: o, onRemovePendingAddition: c, roles: d, members: u, placeholderText: m, hintText: h, renderEmptyText: x, isStageChannel: g, focusSearchAfterReady: b, isReady: T, description: E } = e;
    return (0, l.jsxs)('div', {
        className: R.content,
        children: [
            (null == (t = E) && g && (t = p.intl.string(p.t.f7VbhI)), null == t || '' === t)
                ? null
                : (0, l.jsx)(s.Text, {
                      color: 'header-secondary',
                      className: R.description,
                      variant: 'text-sm/normal',
                      children: t
                  }),
            (0, l.jsx)(S.Z, {
                listClassName: n,
                pendingAdditions: i,
                query: r,
                onQueryChange: a,
                onClickRow: o,
                onRemovePendingAddition: c,
                roles: d,
                members: u,
                placeholderText: m,
                hintText: h,
                renderEmptyText: x,
                disabledText: g ? p.intl.string(p.t.MVVOCg) : null,
                focusSearchAfterReady: b,
                isReady: T
            })
        ]
    });
}
function M(e) {
    let { transitionState: t, onClose: n, channelId: o, newChannel: d, inSettings: h } = e,
        [T, E] = i.useState(!1),
        [f, S] = i.useState({}),
        L = (0, r.e7)([m.Z], () => m.Z.getChannel(o), [o]),
        C = (0, r.e7)([x.Z], () => x.Z.getGuild(null == L ? void 0 : L.getGuildId()));
    if (
        (i.useEffect(() => {
            g.default.track(j.rMx.OPEN_MODAL, { type: 'Grant Channel Access' });
        }, []),
        null == L || null == C)
    )
        return null;
    let M = d && 0 === Object.keys(f).length;
    async function A() {
        if (null == L || 0 === Object.keys(f).length) {
            n();
            return;
        }
        E(!0);
        try {
            await (function (e, t, n) {
                let l = [];
                return (
                    Object.values(t).forEach((t) => {
                        let { row: n } = t;
                        null != n.id && '' !== n.id && (n.rowType === y.aC.ROLE ? l.push((0, b.rX)(n.id, e.type)) : n.rowType === y.aC.MEMBER && l.push((0, b.jZ)(n.id, e.type)));
                    }),
                    (0, a.hw)(e.id, l, n)
                );
            })(L, f, h),
                n(),
                E(!1);
        } catch (e) {
            E(!1);
        }
    }
    let N = (0, u.zi)(L.type) ? s.TextLockIcon : s.VoiceLockIcon;
    return (0, l.jsxs)(s.ModalRoot, {
        transitionState: t,
        size: s.ModalSize.SMALL,
        'aria-labelledby': v,
        className: R.modalRoot,
        children: [
            (0, l.jsxs)(s.ModalHeader, {
                separator: !1,
                direction: c.Z.Direction.VERTICAL,
                align: c.Z.Align.CENTER,
                className: R.header,
                children: [
                    (0, l.jsx)(s.Heading, {
                        id: v,
                        variant: 'heading-xl/semibold',
                        children: p.intl.string(p.t.dMJ3Y2)
                    }),
                    (0, l.jsxs)(s.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: R.headerSubtitle,
                        children: [
                            (0, l.jsx)(N, {
                                size: 'xs',
                                color: 'currentColor',
                                className: R.headerSubtitleIcon
                            }),
                            L.name
                        ]
                    })
                ]
            }),
            (0, l.jsx)(w, {
                guild: C,
                channel: L,
                permission: L.accessPermissions,
                pendingAdditions: f,
                setPendingAdditions: S
            }),
            (0, l.jsxs)(s.ModalFooter, {
                children: [
                    !M &&
                        (0, l.jsxs)(l.Fragment, {
                            children: [
                                (0, l.jsx)(s.Button, {
                                    onClick: A,
                                    look: s.Button.Looks.FILLED,
                                    size: s.Button.Sizes.SMALL,
                                    className: R.button,
                                    submitting: T,
                                    children: p.intl.string(p.t.i4jeWV)
                                }),
                                (0, l.jsx)(s.Button, {
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.TRANSPARENT,
                                    onClick: n,
                                    size: s.Button.Sizes.SMALL,
                                    children: p.intl.string(p.t['ETE/oK'])
                                })
                            ]
                        }),
                    M &&
                        (0, l.jsx)(s.Button, {
                            look: s.Button.Looks.FILLED,
                            color: s.Button.Colors.PRIMARY,
                            onClick: n,
                            size: s.Button.Sizes.SMALL,
                            children: p.intl.string(p.t.u46sxc)
                        })
                ]
            })
        ]
    });
}
