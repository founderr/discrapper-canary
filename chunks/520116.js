n.d(t, {
    Z: function () {
        return L;
    }
});
var r = n(653041);
var i = n(735250),
    a = n(470079),
    o = n(913527),
    s = n.n(o),
    l = n(91192),
    u = n(442837),
    c = n(481060),
    d = n(135938),
    _ = n(900164),
    E = n(554838),
    f = n(493892),
    h = n(661824),
    p = n(37772),
    m = n(695346),
    I = n(314897),
    T = n(496675),
    g = n(594174),
    S = n(55935),
    A = n(655354),
    v = n(809780),
    N = n(981631),
    O = n(689938),
    R = n(896845);
let C = {
    left: 4,
    right: -12
};
function y(e) {
    var t;
    let { channel: n, message: r, compact: o, isGroupStart: s, treatSpam: u, gotoChannel: d } = e,
        _ = (0, l.JA)(null !== (t = r.id) && void 0 !== t ? t : ''),
        E = a.useCallback(
            (e) => {
                if ('ArrowLeft' === e.key) {
                    var t;
                    null === (t = document.querySelector('[data-recents-channel="'.concat(n.id, '"]'))) || void 0 === t || t.focus();
                }
            },
            [n.id]
        );
    return (0, i.jsx)(c.FocusRing, {
        offset: C,
        children: (0, i.jsxs)(
            'div',
            {
                className: R.messageContainer,
                onKeyDown: E,
                ..._,
                children: [
                    (0, i.jsx)(A.Z, {
                        className: R.jumpButton,
                        onJump: (e) => d(e, r.id)
                    }),
                    (0, i.jsx)(p.Z, {
                        id: r.id,
                        message: r,
                        channel: n,
                        className: R.message,
                        compact: o,
                        animateAvatar: !1,
                        isGroupStart: s,
                        onKeyDown: E,
                        treatSpam: u
                    })
                ]
            },
            r.id
        )
    });
}
function L(e) {
    var t, n;
    let { channel: r, channelRecord: a, gotoChannel: o } = e,
        { enabled: l } = d.Z.useExperiment({ location: '20e3b0_1' }, { autoTrackExposure: !1 }),
        p = m.jU.useSetting(),
        A = (0, u.e7)([T.Z], () => T.Z.can(N.Plq.CREATE_INSTANT_INVITE, a)),
        C = (0, f.P1)(a),
        L = !1,
        b = 0 === r.messages.length || s()(r.messages[0].timestamp).isSame(s()(), 'day'),
        D = null !== (n = null === (t = g.default.getUser(I.default.getId())) || void 0 === t ? void 0 : t.hasFlag(N.xW$.SPAMMER)) && void 0 !== n && n,
        M = [];
    if (!r.collapsed) {
        let e = null,
            t = null,
            n = r.messages.slice(0, v.hC);
        n.forEach((n) => {
            if (!(0, _.Z)(n, A)) {
                if (!b && (null == e || !e.isSame(n.timestamp, 'day'))) {
                    let t = (0, S.vc)(n.timestamp, 'LL');
                    M.push(
                        (0, i.jsx)(
                            h.Z,
                            {
                                className: R.divider,
                                children: t
                            },
                            t
                        )
                    ),
                        (e = s()(n.timestamp));
                }
                let r = null == t || (0, E.Z)(a, t, n);
                (t = n),
                    (L = L || (0, f.DQ)(n)),
                    M.push(
                        (0, i.jsx)(
                            y,
                            {
                                channel: a,
                                message: n,
                                compact: p,
                                isGroupStart: r,
                                treatSpam: !D && l && (0, f.DQ)(n) && C,
                                gotoChannel: o
                            },
                            n.id
                        )
                    );
            }
        }),
            r.messages.length >= v.hC &&
                M.push(
                    (0, i.jsxs)(
                        c.Button,
                        {
                            color: c.Button.Colors.LINK,
                            look: c.Button.Looks.LINK,
                            onClick: (e) => o(e, n[n.length - 1].id),
                            children: [O.Z.Messages.UNREADS_VIEW_CHANNEL, ' \u203A']
                        },
                        'view-all'
                    )
                ),
            0 === M.length && (M = [(0, i.jsx)(c.Spinner, {}, 'spinner')]);
    }
    return (
        L && C && d.Z.trackExposure({ location: '20e3b0_2' }),
        (0, i.jsx)('div', {
            className: R.messages,
            children: M
        })
    );
}
