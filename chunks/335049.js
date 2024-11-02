t.d(n, {
    Z: function () {
        return E;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    a = t.n(r),
    o = t(512722),
    s = t.n(o),
    d = t(866442),
    c = t(442837),
    u = t(481060),
    m = t(239091),
    h = t(895924),
    p = t(581364),
    g = t(471445),
    f = t(91218),
    x = t(518738),
    b = t(592125),
    v = t(271383),
    C = t(430824),
    I = t(246946),
    N = t(594174),
    T = t(51144),
    _ = t(981631),
    j = t(388032),
    S = t(142208);
function E(e) {
    let { guild: n, id: r, type: a, isLocked: o, lockTooltipText: d } = e,
        c = !o || null != d;
    s()(c, 'No lockTooltipText provided while isLocked=true');
    let u = l.useCallback(
        (e) => {
            (0, m.jW)(e, async () => {
                let { default: e } = await t.e('5396').then(t.bind(t, 731646));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        id: r,
                        label: j.intl.string(j.t.oJ1Mu7)
                    });
            });
        },
        [r]
    );
    switch (a) {
        case h.Kw.CHANNEL:
            return (0, i.jsx)(Z, {
                guild: n,
                id: r,
                isLocked: o,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case h.Kw.ROLE:
            return (0, i.jsx)(A, {
                guild: n,
                id: r,
                isLocked: o,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
        case h.Kw.USER:
            return (0, i.jsx)(y, {
                guild: n,
                id: r,
                isLocked: o,
                lockTooltipText: d,
                openEntryContextMenu: u
            });
    }
}
function Z(e) {
    let { guild: n, id: t, isLocked: r, lockTooltipText: o, openEntryContextMenu: s } = e,
        d = (0, p.bD)(n.id),
        {
            icon: m,
            name: h,
            categoryName: f
        } = (0, c.cj)(
            [b.Z],
            () => {
                if (d === t)
                    return {
                        name: j.intl.string(j.t['7YqSGx']),
                        icon: u.TextIcon
                    };
                let e = b.Z.getChannel(t),
                    i = (null == e ? void 0 : e.parent_id) != null ? b.Z.getChannel(e.parent_id) : null;
                return {
                    icon: null != e ? (0, g.KS)(e, n) : null,
                    name: null == e ? void 0 : e.name,
                    categoryName: null == i ? void 0 : i.name
                };
            },
            [d, n, t]
        ),
        x = l.useCallback(
            (e) => {
                t !== d && s(e);
            },
            [d, t, s]
        );
    return null == m || null == h
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: x,
              className: S.identifier,
              children: [
                  (0, i.jsx)(m, {
                      size: 'custom',
                      width: 20,
                      height: 20,
                      color: 'currentColor',
                      className: a()(S.channelIcon, S.image)
                  }),
                  (0, i.jsx)(u.Text, {
                      className: S.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: h
                  }),
                  null != f
                      ? (0, i.jsxs)(u.Text, {
                            className: S.tag,
                            variant: 'text-sm/normal',
                            children: ['(', f, ')']
                        })
                      : null,
                  r ? (0, i.jsx)(R, { tooltipText: o }) : null
              ]
          });
}
function A(e) {
    var n;
    let { guild: r, id: o, isLocked: s, lockTooltipText: h } = e,
        p = (0, c.e7)([C.Z], () => C.Z.getRole(r.id, o)),
        g = (0, x.p9)({
            guildId: r.id,
            roleId: o,
            size: 24
        }),
        b = l.useCallback(
            (e) => {
                if (null != r && null != p)
                    (0, m.jW)(e, async () => {
                        let { default: e } = await t.e('14486').then(t.bind(t, 786746));
                        return (n) =>
                            (0, i.jsx)(e, {
                                ...n,
                                guild: r,
                                role: p
                            });
                    });
            },
            [r, p]
        );
    return (null == p ? void 0 : p.name) == null
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: b,
              className: S.identifier,
              children: [
                  null != g
                      ? (0, i.jsx)(f.Z, {
                            className: a()(S.__invalid_icon, S.image),
                            ...g
                        })
                      : (0, i.jsx)(u.ShieldUserIcon, {
                            size: 'custom',
                            width: 23,
                            height: 23,
                            className: a()(S.shield, S.image),
                            color: null !== (n = p.colorString) && void 0 !== n ? n : (0, d.Rf)(_.p6O)
                        }),
                  (0, i.jsx)(u.Text, {
                      className: S.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: p.name
                  }),
                  s ? (0, i.jsx)(R, { tooltipText: h }) : null
              ]
          });
}
function y(e) {
    let { guild: n, id: t, isLocked: l, lockTooltipText: r, openEntryContextMenu: a } = e,
        o = (0, c.e7)([N.default], () => N.default.getUser(t)),
        s = (0, c.e7)(
            [v.ZP],
            () => {
                var e;
                return null === (e = v.ZP.getMember(n.id, t)) || void 0 === e ? void 0 : e.nick;
            },
            [n.id, t]
        ),
        d = (0, c.e7)([I.Z], () => I.Z.hidePersonalInformation);
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              onContextMenu: a,
              className: S.identifier,
              children: [
                  (0, i.jsx)(u.Avatar, {
                      className: S.image,
                      src: o.getAvatarURL(n.id, 24),
                      'aria-label': o.username,
                      size: u.AvatarSizes.SIZE_24
                  }),
                  (0, i.jsx)(u.Text, {
                      className: S.roleName,
                      color: 'header-primary',
                      variant: 'text-md/normal',
                      children: null != s ? s : o.username
                  }),
                  d
                      ? null
                      : (0, i.jsx)(u.Text, {
                            className: S.tag,
                            variant: 'text-sm/normal',
                            children: T.ZP.getUserTag(o)
                        }),
                  l ? (0, i.jsx)(R, { tooltipText: r }) : null
              ]
          });
}
function R(e) {
    let { tooltipText: n } = e;
    return (0, i.jsx)(u.Tooltip, {
        text: n,
        children: (e) =>
            (0, i.jsx)('div', {
                className: S.lockIcon,
                ...e,
                children: (0, i.jsx)(u.LockIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            })
    });
}
