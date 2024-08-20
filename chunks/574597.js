l.d(n, {
    Z: function () {
        return I;
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
    E = l(430824),
    f = l(158776),
    p = l(594174),
    C = l(970184),
    N = l(280501),
    _ = l(811654),
    v = l(344991),
    T = l(981631),
    h = l(296555);
function I(e) {
    var n;
    let l = (0, C.CJ)(),
        I = null == l ? void 0 : null === (n = l.message) || void 0 === n ? void 0 : n.getChannelId(),
        x = m.Z.getChannel(I),
        O = E.Z.getGuild(null == x ? void 0 : x.getGuildId()),
        S = (0, d.Z)(null == O ? void 0 : O.id, _.HI),
        g = r.useMemo(() => (0, _.tx)(e.defaultValues, null == O ? void 0 : O.id), [e.defaultValues, O]);
    return (0, t.jsx)(v.ZP, {
        selectActionComponent: e,
        queryOptions: (n) => (0, _._H)(e.type, n, I),
        renderIcon: (e, n) => {
            let l = n === v.tE.PILL_ICON_SIZE;
            if ((null == e ? void 0 : e.type) === N.tM.USER) {
                let r = p.default.getUser(e.value);
                if (null == r) return;
                return (0, t.jsx)(a.Avatar, {
                    size: l ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                    src: r.getAvatarURL(null == O ? void 0 : O.id, n),
                    status: l ? null : f.Z.getStatus(r.id),
                    'aria-hidden': !0
                });
            }
            if ((null == e ? void 0 : e.type) === N.tM.ROLE) {
                var r;
                let l = null != O ? E.Z.getRole(O.id, e.value) : void 0;
                if (null == l || null == O) return;
                let s = (0, o._b)(O, l) ? (0, c.Kz)(l, n) : null;
                return null != s
                    ? (0, t.jsx)(u.Z, { ...s })
                    : (0, t.jsx)(a.ShieldUserIcon, {
                          size: 'custom',
                          color: null !== (r = l.colorString) && void 0 !== r ? r : (0, i.Rf)(T.p6O),
                          height: n,
                          width: n
                      });
            }
        },
        renderOptionLabel: (e) => {
            let n = null;
            if (e.type === N.tM.USER) {
                let l = p.default.getUser(e.value);
                null != l &&
                    (n = (0, t.jsx)(s.Z, {
                        className: h.tag,
                        usernameClass: h.username,
                        discriminatorClass: h.discriminator,
                        botClass: h.bot,
                        user: l,
                        forceUsername: !0
                    }));
            } else if (e.type === N.tM.ROLE) {
                let l = null != O ? E.Z.getRole(O.id, e.value) : void 0,
                    r = null == l ? null : null == S ? void 0 : S[l.id];
                null != r &&
                    (n = (0, t.jsxs)('div', {
                        className: h.roleCountContainer,
                        children: [
                            (0, t.jsx)(a.UserIcon, {
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
