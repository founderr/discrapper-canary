n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(493683),
    o = n(447543),
    s = n(955415),
    c = n(598077),
    u = n(314897),
    d = n(592125),
    m = n(699516),
    h = n(51144),
    f = n(981631),
    p = n(388032),
    g = n(691784);
function _(e) {
    var t;
    let { invite: n, getAcceptInviteContext: _ } = e,
        C = (0, l.e7)([u.default], () => u.default.getId()),
        E = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === C,
        I = n.state === f.r2o.ACCEPTING,
        x = (0, l.e7)([m.Z], () => {
            var e;
            return null != n.inviter && m.Z.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id);
        }),
        v = r.useCallback(() => {
            null != n.inviter && null != d.Z.getDMFromUserId(n.inviter.id) && a.Z.openPrivateChannel([n.inviter.id]);
        }, [n.inviter]),
        N = r.useCallback(() => {
            let e = _('Invite Button Embed');
            o.Z.acceptInviteAndTransitionToInviteChannel({
                inviteKey: n.code,
                context: e
            });
        }, [n.code, _]);
    if (null == n.inviter) return null;
    let T = x ? v : N,
        S = p.intl.string(p.t.ib7Ng4),
        b = s.Z.Button.Colors.GREEN;
    x ? ((S = p.intl.string(p.t.xhxnPj)), (b = s.Z.Button.Colors.PRIMARY)) : E && ((S = p.intl.string(p.t.ib7Ng4)), (b = s.Z.Button.Colors.PRIMARY));
    let A = E ? p.intl.string(p.t.eQyu1N) : p.intl.string(p.t.PYJHW1),
        j = null != n.inviter ? ''.concat(n.inviter.username) : '',
        Z = null != n.inviter ? h.ZP.getUserTag(n.inviter) : '';
    return (0, i.jsxs)(s.Z, {
        children: [
            (0, i.jsx)(s.Z.Header, { text: A }),
            (0, i.jsxs)(s.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.headerLine,
                        children: [
                            (0, i.jsx)(s.Z.Icon, {
                                user: new c.Z(n.inviter),
                                onClick: x ? T : void 0
                            }),
                            (0, i.jsx)(s.Z.Info, {
                                title: j,
                                onClick: x ? T : void 0,
                                children: Z
                            })
                        ]
                    }),
                    (0, i.jsx)(s.Z.Button, {
                        onClick: T,
                        submitting: I,
                        isDisabled: E,
                        color: b,
                        children: S
                    })
                ]
            })
        ]
    });
}
