n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(724458),
    n(653041);
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(955415),
    s = n(131704),
    c = n(592125),
    u = n(594174),
    d = n(823379),
    m = n(358595),
    f = n(981631),
    h = n(388032),
    p = n(691784);
function g(e) {
    let t,
        { invite: n, author: r, currentUserId: g, onTransitionToInviteChannel: _, onAcceptInstantInvite: C } = e,
        E = g === r.id,
        I = n.state === f.r2o.ACCEPTING,
        x = (0, a.e7)([c.Z], () => (null != n.channel ? c.Z.getChannel(n.channel.id) : null), [n]);
    l()(null == x || x.isPrivate(), 'must be a private channel');
    let v = null != x;
    if (null == x) {
        if (null == n.channel) return (0, i.jsx)(m.Z, {});
        (x = (0, s.jD)(n.channel)), (t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []);
    } else {
        t = x.recipients.reduce((e, t) => {
            let n = u.default.getUser(t);
            return null != n && e.push(n), e;
        }, []);
        let e = u.default.getCurrentUser();
        v && null != e && t.push(e);
    }
    let N = x.name;
    (null == N || '' === N) &&
        (N =
            t.length > 0
                ? t
                      .filter(d.lm)
                      .map((e) => e.username)
                      .join(', ')
                : h.intl.string(h.t.LJpTRE));
    let T = v ? _ : C,
        S = h.intl.string(h.t.XpeFYm),
        b = o.Z.Button.Colors.GREEN;
    v && ((S = h.intl.string(h.t.cEnaW1)), (b = o.Z.Button.Colors.PRIMARY));
    let A = h.intl.string(h.t['3p3/BA']);
    return (
        E && (A = h.intl.string(h.t.qmtuXF)),
        (0, i.jsxs)(o.Z, {
            children: [
                (0, i.jsx)(o.Z.Header, { text: A }),
                (0, i.jsxs)(o.Z.Body, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: p.headerLine,
                            children: [
                                (0, i.jsx)(o.Z.Icon, {
                                    channel: x,
                                    onClick: v ? T : void 0
                                }),
                                (0, i.jsx)(o.Z.Info, {
                                    title: N,
                                    onClick: v ? T : void 0,
                                    children: (0, i.jsx)(o.Z.Data, { members: t.length })
                                })
                            ]
                        }),
                        (0, i.jsx)(o.Z.Button, {
                            onClick: T,
                            submitting: I,
                            isDisabled: v,
                            color: b,
                            children: S
                        })
                    ]
                })
            ]
        })
    );
}
