n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(149765), o = n(442837), c = n(481060), d = n(499254), u = n(424602), h = n(541099), p = n(827498), m = n(663924), _ = n(998698), f = n(665906), E = n(271383), C = n(496675), g = n(594174), I = n(583027), x = n(981631), T = n(314734), N = n(689938), v = n(979030);
let S = a.forwardRef(function (e, t) {
    let [n, s] = a.useState(!1), r = (0, o.e7)([h.Z], () => h.Z.shouldShowPopup()), u = (0, I.w)(), m = a.useCallback(() => {
            r ? d.y(p.ti.DISMISSED) : d._(p._b.TEXT);
        }, [r]), _ = () => {
            s(!0);
        }, f = () => {
            s(!1);
        };
    return (0, i.jsx)(c.Tooltip, {
        text: N.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
        children: e => (0, i.jsx)('div', {
            ...e,
            className: l()(v.buttonContainer, T.t4),
            ref: t,
            style: { transform: 'translateY(calc(100% - '.concat(u, 'px)') },
            children: (0, i.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                tabIndex: 0,
                className: v.button,
                onClick: m,
                onMouseEnter: _,
                onMouseOver: _,
                onMouseLeave: f,
                onFocus: _,
                onBlur: f,
                'aria-label': N.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: -4,
                        right: -4
                    }
                },
                innerClassName: v.buttonContents,
                children: (0, i.jsx)(c.AppsIcon, { className: l()(n ? v.iconHovered : v.iconUnhovered) })
            })
        })
    });
});
t.Z = a.memo(a.forwardRef(function (e) {
    let {
            channel: t,
            type: n
        } = e, s = a.useRef(null), l = function (e, t) {
            let n = e.getGuildId(), i = (0, o.e7)([
                    E.ZP,
                    g.default
                ], () => {
                    var e, t;
                    let i = g.default.getCurrentUser();
                    return null !== (t = null != n && null != i ? null === (e = E.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
                }), {messagesDisabled: a} = (0, o.cj)([C.Z], () => {
                    var n, a;
                    let s = e.isPrivate(), l = C.Z.computePermissions(e), o = r.e$(l, x.Plq.CREATE_PUBLIC_THREADS) || r.e$(l, x.Plq.CREATE_PRIVATE_THREADS), c = (!(null === (n = t.permissions) || void 0 === n ? void 0 : n.requireCreateTherads) || o) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || r.e$(l, x.Plq.SEND_MESSAGES)), d = (0, f.xl)(e);
                    return { messagesDisabled: i || !s && !c || d };
                }, [
                    e,
                    t.permissions.requireCreateTherads,
                    t.permissions.requireSendMessages,
                    i
                ]);
            return a;
        }(t, n), {activeCommand: c} = (0, o.cj)([_.Z], () => {
            var e;
            return { activeCommand: (null === (e = n.commands) || void 0 === e ? void 0 : e.enabled) ? _.Z.getActiveCommand(t.id) : null };
        }), d = u.T.useExperiment({ location: 'chat_input' }, { autoTrackExposure: !0 }).enabled, p = (0, o.e7)([h.Z], () => h.Z.shouldShowPopup(), []);
    return d && null == c && !l ? (0, i.jsxs)('div', {
        className: v.channelAppLauncher,
        children: [
            (0, i.jsx)(S, { ref: s }),
            p ? (0, i.jsx)(m.Z, {
                positionTargetRef: s,
                channel: t
            }) : null
        ]
    }) : null;
}));
