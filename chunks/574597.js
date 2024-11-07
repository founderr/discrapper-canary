l.d(n, {
    Z: function () {
        return I;
    }
});
var t = l(200651),
    i = l(192379),
    r = l(866442),
    a = l(481060),
    s = l(129861),
    o = l(91218),
    u = l(829883),
    c = l(518738),
    d = l(14263),
    m = l(592125),
    p = l(430824),
    f = l(158776),
    x = l(594174),
    v = l(970184),
    h = l(280501),
    C = l(811654),
    g = l(344991),
    j = l(981631),
    S = l(688860);
function I(e) {
    var n;
    let l = (0, v.CJ)(),
        I = null == l ? void 0 : null === (n = l.message) || void 0 === n ? void 0 : n.getChannelId(),
        N = m.Z.getChannel(I),
        E = p.Z.getGuild(null == N ? void 0 : N.getGuildId()),
        b = (0, d.Z)(null == E ? void 0 : E.id, C.HI),
        Z = i.useMemo(() => (0, C.tx)(e.defaultValues, null == E ? void 0 : E.id), [e.defaultValues, E]);
    return (0, t.jsx)(g.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, C._H)(e.type, n, I),
        renderIcon: (e, n) => {
            let l = n === g.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === h.tM.USER) {
                let i = x.default.getUser(e.value);
                if (null == i) return;
                return (0, t.jsx)(a.Avatar, {
                    size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: i.getAvatarURL(null == E ? void 0 : E.id, n),
                    status: l ? null : f.Z.getStatus(i.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === h.tM.ROLE) {
                var i;
                let l = null != E ? p.Z.getRole(E.id, e.value) : void 0;
                if (null == l || null == E) return;
                let s = (0, u._b)(E, l) ? (0, c.Kz)(l, n) : null;
                return null != s
                    ? (0, t.jsx)(o.Z, { ...s })
                    : (0, t.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (i = l.colorString) && void 0 !== i ? i : (0, r.Rf)(j.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === h.tM.USER) {
                let l = x.default.getUser(e.value);
                null != l &&
                    (n = (0, t.jsx)(s.Z, {
                        className: S.tag,
                        usernameClass: S.username,
                        discriminatorClass: S.discriminator,
                        botClass: S.bot,
                        user: l,
                        forceUsername: !0
                    }));
            } else if (e.type === h.tM.ROLE) {
                let l = null != E ? p.Z.getRole(E.id, e.value) : void 0,
                    i = null == l ? null : null == b ? void 0 : b[l.id];
                null != i &&
                    (n = (0, t.jsxs)('div', {
                        className: S.roleCountContainer,
                        children: [
                            (0, t.jsx)(a.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: S.roleCountIcon
                            }),
                            (0, t.jsx)('span', {
                                className: S.roleCountText,
                                children: i
                            })
                        ]
                    }));
            }
            return (0, t.jsxs)('span', {
                className: S.label,
                children: [
                    (0, t.jsx)('span', {
                        className: S.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: Z
    });
}
