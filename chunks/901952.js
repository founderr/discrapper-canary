n.d(t, {
    Z: function () {
        return L;
    }
}), n(411104), n(47120);
var r = n(735250), i = n(470079), a = n(120356), o = n.n(a), s = n(481060), l = n(493683), u = n(904245), c = n(906732), d = n(541716), _ = n(752305), E = n(893718), f = n(957730), h = n(131704), p = n(592125), m = n(5192), I = n(838440), T = n(332390), g = n(785717), S = n(993409), A = n(261253), N = n(765365), v = n(981631), O = n(689938), R = n(767722), C = n(589273);
let y = (0, h.kt)({
        id: '1',
        type: v.d4z.DM
    }), D = async e => {
        let {
                userId: t,
                content: n,
                location: r
            } = e, {
                valid: i,
                failureReason: a
            } = await (0, I.v)({
                type: d.I.NORMAL,
                content: n,
                channel: null
            });
        if (!i)
            throw Error(a);
        let o = await l.Z.openPrivateChannel(t, !1, !1, r), s = p.Z.getChannel(o);
        if (null == s)
            throw Error('Failed to open private channel');
        let c = f.ZP.parse(s, n);
        return u.Z.sendMessage(s.id, c);
    };
function L(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            onClose: u
        } = e, {newestAnalyticsLocation: f} = (0, c.ZP)(), {trackUserProfileAction: h} = (0, g.KZ)(), {
            messageCtaEnabled: p,
            activeInviteToCallCtaEnabled: I,
            persistentCallCtaEnabled: v
        } = (0, T.l)({ location: 'BiteSizeProfileDirectMessageSection' }), L = (0, N.Z)({
            user: t,
            onClose: u,
            className: C.biteSizeButton
        }), [b, M] = i.useState(''), [P, U] = i.useState((0, _.JM)(b)), w = i.useRef(!1), x = () => {
            h({ action: 'SEND_MESSAGE' }), l.Z.openPrivateChannel(t.id, !1, !1, f), null == u || u();
        };
    if (p)
        return I && null != L ? (0, r.jsxs)('div', {
            className: C.ctaRow,
            children: [
                (0, r.jsx)(S.Z, {
                    fullWidth: !0,
                    variant: 'text',
                    color: C.engagementExpButton,
                    className: C.biteSizeButton,
                    tooltipContainerClassName: C.ctaTooltipContainer,
                    onClick: x,
                    icon: s.ChatIcon,
                    text: O.Z.Messages.USER_PROFILE_MESSAGE
                }),
                L
            ]
        }) : v ? (0, r.jsxs)('div', {
            className: C.ctaRow,
            children: [
                (0, r.jsx)(S.Z, {
                    fullWidth: !0,
                    variant: 'text',
                    color: o()(s.Button.Colors.BRAND, R.color),
                    onClick: x,
                    className: C.biteSizeButton,
                    icon: s.ChatIcon,
                    text: O.Z.Messages.USER_PROFILE_MESSAGE,
                    tooltipContainerClassName: C.ctaTooltipContainer
                }),
                (0, r.jsx)(A.Z, {
                    user: t,
                    onClose: u,
                    className: o()(C.engagementExpButton, C.biteSizeIconButton)
                })
            ]
        }) : (0, r.jsx)(S.Z, {
            fullWidth: !0,
            variant: 'text',
            className: C.biteSizeButton,
            color: o()(s.Button.Colors.BRAND, R.color),
            onClick: x,
            icon: s.ChatIcon,
            text: O.Z.Messages.USER_PROFILE_MESSAGE
        });
    return (0, r.jsx)(E.Z, {
        innerClassName: C.inner,
        editorClassName: C.editor,
        type: d.I.USER_PROFILE,
        placeholder: O.Z.Messages.QUICK_DM_USER.format({ name: m.ZP.getName(n, a, t) }),
        channel: y,
        textValue: b,
        richValue: P,
        onChange: (e, t, n) => {
            if (t !== b)
                M(t), U(n);
        },
        focused: w.current,
        onFocus: () => {
            w.current = !0;
        },
        onBlur: () => {
            w.current = !1;
        },
        onSubmit: async e => {
            let {value: n} = e;
            try {
                return h({ action: 'SEND_DIRECT_MESSAGE' }), await D({
                    userId: t.id,
                    content: n.trim(),
                    location: f
                }), null == u || u(), {
                    shouldClear: !0,
                    shouldRefocus: !1
                };
            } catch {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
