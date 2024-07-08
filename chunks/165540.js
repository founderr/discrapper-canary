n(47120);
var i = n(735250), a = n(470079), s = n(120356), l = n.n(s), r = n(149765), o = n(442837), c = n(481060), d = n(499254), u = n(424602), h = n(541099), p = n(827498), m = n(663924), _ = n(998698), f = n(747127), E = n(665906), C = n(271383), g = n(496675), I = n(594174), x = n(583027), T = n(981631), v = n(314734), N = n(689938), S = n(979030);
let Z = a.forwardRef(function (e, t) {
    let [n, s] = a.useState(!1), r = (0, o.e7)([h.Z], () => h.Z.shouldShowPopup()), u = a.useCallback(() => {
            r ? d.y(p.ti.DISMISSED) : d._(p._b.TEXT);
        }, [r]), m = () => {
            s(!0);
        }, _ = () => {
            s(!1);
        }, E = a.useRef(), C = (0, f.Z)(t, E);
    return a.useEffect(() => x.H.subscribe(e => {
        let {channelTextAreaHeight: t} = e;
        return t;
    }, e => {
        let t = E.current;
        null != t && (t.style.transform = null != e ? 'translateY(calc(100% - '.concat(e, 'px)') : '');
    }), []), (0, i.jsx)(c.Tooltip, {
        text: N.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
        children: e => (0, i.jsx)('div', {
            ...e,
            className: l()(S.buttonContainer, v.t4),
            ref: C,
            children: (0, i.jsx)(c.Button, {
                look: c.Button.Looks.BLANK,
                size: c.Button.Sizes.NONE,
                tabIndex: 0,
                className: S.button,
                onClick: u,
                onMouseEnter: m,
                onMouseOver: m,
                onMouseLeave: _,
                onFocus: m,
                onBlur: _,
                'aria-label': N.Z.Messages.APP_LAUNCHER_USE_APP_TOOLTIP,
                focusProps: {
                    offset: {
                        top: 4,
                        bottom: 4,
                        left: -4,
                        right: -4
                    }
                },
                innerClassName: S.buttonContents,
                children: (0, i.jsx)(c.AppsIcon, { className: l()(n ? S.iconHovered : S.iconUnhovered) })
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
                    C.ZP,
                    I.default
                ], () => {
                    var e, t;
                    let i = I.default.getCurrentUser();
                    return null !== (t = null != n && null != i ? null === (e = C.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending : null) && void 0 !== t && t;
                }), {messagesDisabled: a} = (0, o.cj)([g.Z], () => {
                    var n, a;
                    let s = e.isPrivate(), l = g.Z.computePermissions(e), o = r.e$(l, T.Plq.CREATE_PUBLIC_THREADS) || r.e$(l, T.Plq.CREATE_PRIVATE_THREADS), c = (!(null === (n = t.permissions) || void 0 === n ? void 0 : n.requireCreateTherads) || o) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || r.e$(l, T.Plq.SEND_MESSAGES)), d = (0, E.xl)(e);
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
        className: S.channelAppLauncher,
        children: [
            (0, i.jsx)(Z, { ref: s }),
            p ? (0, i.jsx)(m.Z, {
                positionTargetRef: s,
                channel: t
            }) : null
        ]
    }) : null;
}));
