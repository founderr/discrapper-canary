n.d(t, {
    Z: function () {
        return j;
    }
}),
    n(653041);
var i = n(200651),
    r = n(192379),
    l = n(913527),
    a = n.n(l),
    o = n(91192),
    s = n(442837),
    c = n(481060),
    d = n(135938),
    u = n(900164),
    m = n(554838),
    h = n(493892),
    f = n(661824),
    p = n(37772),
    g = n(695346),
    _ = n(314897),
    C = n(496675),
    E = n(594174),
    I = n(55935),
    x = n(655354),
    v = n(809780),
    N = n(981631),
    T = n(388032),
    S = n(896845);
let b = {
    left: 4,
    right: -12
};
function A(e) {
    var t;
    let { channel: n, message: l, compact: a, isGroupStart: s, treatSpam: d, gotoChannel: u } = e,
        m = (0, o.JA)(null !== (t = l.id) && void 0 !== t ? t : ''),
        h = r.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key) {
                    var t;
                    null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus();
                }
            },
            [n.id]
        );
    return (0, i.jsx)(c.FocusRing, {
        offset: b,
        children: (0, i.jsxs)(
            'div',
            {
                className: S.messageContainer,
                onKeyDown: h,
                ...m,
                children: [
                    (0, i.jsx)(x.Z, {
                        className: S.jumpButton,
                        onJump: (e) => u(e, l.id)
                    }),
                    (0, i.jsx)(p.Z, {
                        id: l.id,
                        message: l,
                        channel: n,
                        className: S.message,
                        compact: a,
                        animateAvatar: !1,
                        isGroupStart: s,
                        onKeyDown: h,
                        treatSpam: d
                    })
                ]
            },
            l.id
        )
    });
}
function j(e) {
    var t, n;
    let { channel: r, channelRecord: l, gotoChannel: o } = e,
        { enabled: p } = d.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        x = g.jU.useSetting(),
        b = (0, s.e7)([C.Z], () => C.Z.can(N.Plq.CREATE_INSTANT_INVITE, l)),
        j = (0, h.P1)(l),
        Z = !1,
        R = 0 === r.messages.length || a()(r.messages[0].timestamp).isSame(a()(), 'day'),
        P = null !== (n = null === (t = E.default.getUser(_.default.getId())) || void 0 === t ? void 0 : t.hasFlag(N.xW$.SPAMMER)) && void 0 !== n && n,
        y = [];
    if (!r.collapsed) {
        let e = null,
            t = null,
            n = r.messages.slice(0, v.hC);
        n.forEach((n) => {
            if (!(0, u.Z)(n, b)) {
                if (!R && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, I.vc)(n.timestamp, 'LL');
                    y.push(
                        (0, i.jsx)(
                            f.Z,
                            {
                                className: S.divider,
                                children: t
                            },
                            t
                        )
                    ),
                        (e = a()(n.timestamp));
                }
                let r = null == t || (0, m.Z)(l, t, n);
                (t = n),
                    (Z = Z || (0, h.DQ)(n)),
                    y.push(
                        (0, i.jsx)(
                            A,
                            {
                                channel: l,
                                message: n,
                                compact: x,
                                isGroupStart: r,
                                treatSpam: !P && p && (0, h.DQ)(n) && j,
                                gotoChannel: o
                            },
                            n.id
                        )
                    );
            }
        }),
            r.messages.length >= v.hC &&
                y.push(
                    (0, i.jsxs)(
                        c.Button,
                        {
                            color: c.Button.Colors.LINK,
                            look: c.Button.Looks.LINK,
                            onClick: (e) => o(e, n[n.length - 1].id),
                            children: [T.intl.string(T.t['9OB9ho']), ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === y.length && (y = [(0, i.jsx)(c.Spinner, {}, 'spinner')]);
    }
    return (
        Z && j && d.Z.trackExposure({ location: '20e3b0_2' }),
        (0, i.jsx)('div', {
            className: S.messages,
            children: y
        })
    );
}
