l.d(n, {
    Z: function () {
        return x;
    }
});
var t = l(735250),
    r = l(470079),
    a = l(866442),
    i = l(481060),
    s = l(129861),
    u = l(91218),
    o = l(829883),
    c = l(518738),
    d = l(14263),
    m = l(592125),
    E = l(430824),
    p = l(158776),
    N = l(594174),
    f = l(970184),
    _ = l(280501),
    C = l(811654),
    T = l(344991),
    v = l(981631),
    h = l(296555);
function x(e) {
    var n;
    let l = (0, f.CJ)(),
        x = null == l ? void 0 : null === (n = l.message) || void 0 === n ? void 0 : n.getChannelId(),
        I = m.Z.getChannel(x),
        S = E.Z.getGuild(null == I ? void 0 : I.getGuildId()),
        O = (0, d.Z)(null == S ? void 0 : S.id, C.HI),
        g = r.useMemo(() => (0, C.tx)(e.defaultValues, null == S ? void 0 : S.id), [e.defaultValues, S]);
    return (0, t.jsx)(T.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, C._H)(e.type, n, x),
        renderIcon: (e, n) => {
            let l = n === T.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === _.tM.USER) {
                let r = N.default.getUser(e.value);
                if (null == r) return;
                return (0, t.jsx)(i.Avatar, {
                    size: l ? i.AvatarSizes.SIZE_16 : i.AvatarSizes.SIZE_24,
                    src: r.getAvatarURL(null == S ? void 0 : S.id, n),
                    status: l ? null : p.Z.getStatus(r.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === _.tM.ROLE) {
                var r;
                let l = null != S ? E.Z.getRole(S.id, e.value) : void 0;
                if (null == l || null == S) return;
                let s = (0, o._b)(S, l) ? (0, c.Kz)(l, n) : null;
                return null != s
                    ? (0, t.jsx)(u.Z, { ...s })
                    : (0, t.jsx)(i.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (r = l.colorString) && void 0 !== r ? r : (0, a.Rf)(v.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === _.tM.USER) {
                let l = N.default.getUser(e.value);
                null != l &&
                    (n = (0, t.jsx)(s.Z, {
                        className: h.tag,
                        usernameClass: h.username,
                        discriminatorClass: h.discriminator,
                        botClass: h.bot,
                        user: l,
                        forceUsername: !0
                    }));
            } else if (e.type === _.tM.ROLE) {
                let l = null != S ? E.Z.getRole(S.id, e.value) : void 0,
                    r = null == l ? null : null == O ? void 0 : O[l.id];
                null != r &&
                    (n = (0, t.jsxs)('div', {
                        className: h.roleCountContainer,
                        children: [
                            (0, t.jsx)(i.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: h.roleCountIcon
                            }),
                            (0, t.jsx)('span', {
                                className: h.roleCountText,
                                children: r
                            })
                        ]
                    }));
            }
            return (0, t.jsxs)('span', {
                className: h.label,
                children: [
                    (0, t.jsx)('span', {
                        className: h.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: g
    });
}
