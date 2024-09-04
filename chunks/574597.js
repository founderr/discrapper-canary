l.d(n, {
    Z: function () {
        return T;
    }
});
var t = l(735250),
    r = l(470079),
    i = l(866442),
    a = l(481060),
    s = l(129861),
    u = l(91218),
    o = l(829883),
    c = l(518738),
    d = l(14263),
    m = l(592125),
    p = l(430824),
    f = l(158776),
    E = l(594174),
    N = l(970184),
    C = l(280501),
    v = l(811654),
    _ = l(344991),
    h = l(981631),
    x = l(296555);
function T(e) {
    var n;
    let l = (0, N.CJ)(),
        T = null == l ? void 0 : null === (n = l.message) || void 0 === n ? void 0 : n.getChannelId(),
        I = m.Z.getChannel(T),
        g = p.Z.getGuild(null == I ? void 0 : I.getGuildId()),
        S = (0, d.Z)(null == g ? void 0 : g.id, v.HI),
        O = r.useMemo(() => (0, v.tx)(e.defaultValues, null == g ? void 0 : g.id), [e.defaultValues, g]);
    return (0, t.jsx)(_.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, v._H)(e.type, n, T),
        renderIcon: (e, n) => {
            let l = n === _.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === C.tM.USER) {
                let r = E.default.getUser(e.value);
                if (null == r) return;
                return (0, t.jsx)(a.Avatar, {
                    size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: r.getAvatarURL(null == g ? void 0 : g.id, n),
                    status: l ? null : f.Z.getStatus(r.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === C.tM.ROLE) {
                var r;
                let l = null != g ? p.Z.getRole(g.id, e.value) : void 0;
                if (null == l || null == g) return;
                let s = (0, o._b)(g, l) ? (0, c.Kz)(l, n) : null;
                return null != s
                    ? (0, t.jsx)(u.Z, { ...s })
                    : (0, t.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (r = l.colorString) && void 0 !== r ? r : (0, i.Rf)(h.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === C.tM.USER) {
                let l = E.default.getUser(e.value);
                null != l &&
                    (n = (0, t.jsx)(s.Z, {
                        className: x.tag,
                        usernameClass: x.username,
                        discriminatorClass: x.discriminator,
                        botClass: x.bot,
                        user: l,
                        forceUsername: !0
                    }));
            } else if (e.type === C.tM.ROLE) {
                let l = null != g ? p.Z.getRole(g.id, e.value) : void 0,
                    r = null == l ? null : null == S ? void 0 : S[l.id];
                null != r &&
                    (n = (0, t.jsxs)('div', {
                        className: x.roleCountContainer,
                        children: [
                            (0, t.jsx)(a.UserIcon, {
                                size: 'sm',
                                color: 'currentColor',
                                className: x.roleCountIcon
                            }),
                            (0, t.jsx)('span', {
                                className: x.roleCountText,
                                children: r
                            })
                        ]
                    }));
            }
            return (0, t.jsxs)('span', {
                className: x.label,
                children: [
                    (0, t.jsx)('span', {
                        className: x.labelText,
                        children: e.label
                    }),
                    n
                ]
            });
        },
        defaultValues: O
    });
}
