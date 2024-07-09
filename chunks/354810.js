n.d(t, {
    Z: function () {
        return M;
    }
});
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(442837), o = n(974674), c = n(481060), d = n(420660), u = n(100527), h = n(906732), p = n(233440), m = n(199902), _ = n(158776), f = n(998502), E = n(785717), C = n(204197), g = n(78675), I = n(438163), x = n(652853), T = n(256059), v = n(228168), N = n(981631), S = n(739116);
let Z = f.ZP.getEnableHardwareAcceleration() ? o.Xo : o.qE, A = c.AvatarSizes.SIZE_80;
function M(e) {
    let {
            user: t,
            displayProfile: n,
            channel: s,
            isHovering: o,
            onOpenProfile: f
        } = e, {theme: M} = (0, x.z)(), {analyticsLocations: b} = (0, h.ZP)(u.Z.AVATAR), {trackUserProfileAction: R} = (0, E.KZ)(), j = null == n ? void 0 : n.canUsePremiumProfileCustomization, {
            avatarSrc: L,
            eventHandlers: P,
            avatarDecorationSrc: O
        } = (0, C.Z)({
            user: t,
            size: A,
            animateOnHover: !o
        }), y = a.useMemo(() => (0, p.W)(t, s.id), [
            t,
            s.id
        ]), {
            status: D,
            isMobileOnline: k
        } = (0, r.cj)([
            m.Z,
            _.Z
        ], () => {
            let e = null != m.Z.getAnyStreamForUser(t.id), n = _.Z.findActivity(t.id, t => {
                    let {type: n} = t;
                    return e ? n === N.IIU.PLAYING : n !== N.IIU.CUSTOM_STATUS;
                });
            return {
                status: (0, d.Z)(n) ? c.StatusTypes.STREAMING : _.Z.getStatus(t.id),
                isMobileOnline: _.Z.isMobileOnline(t.id)
            };
        }), U = () => {
            R({
                action: 'PRESS_VIEW_PROFILE',
                analyticsLocations: b
            }), null == f || f();
        }, w = (0, i.jsx)(Z, {
            src: L,
            avatarDecoration: O,
            size: A,
            imageClassName: S.overlay,
            status: y || t.isNonUserBot() ? c.StatusTypes.UNKNOWN : D,
            statusBackdropColor: j && !y ? (0, c.getStatusBackdropColor)(M) : void 0,
            'aria-label': t.username,
            isMobile: k,
            statusTooltip: !0,
            statusTooltipDelay: v.vB
        });
    return (0, i.jsxs)('header', {
        className: S.header,
        children: [
            (0, i.jsx)(g.Z, {
                user: t,
                displayProfile: n,
                profileType: v.y0.PANEL,
                animateOnHover: !o
            }),
            null == f ? (0, i.jsx)('div', {
                ...P,
                className: S.avatar,
                children: w
            }) : (0, i.jsx)(c.Clickable, {
                ...P,
                className: l()(S.avatar, S.clickable),
                onClick: U,
                children: w
            }),
            (0, i.jsx)(I.Z, {
                user: t,
                profileType: v.y0.PANEL
            }),
            (0, i.jsx)(T.Z, { user: t })
        ]
    });
}
