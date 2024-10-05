t.d(n, {
    g: function () {
        return u;
    }
});
var i = t(149765),
    a = t(442837),
    l = t(665906),
    o = t(271383),
    c = t(496675),
    d = t(594174),
    r = t(981631);
function u(e) {
    let n = e.getGuildId(),
        t = (0, a.e7)([o.ZP, d.default], () => {
            var e, t;
            let i = d.default.getCurrentUser();
            return null !== (t = null != n && null != i ? (null === (e = o.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { messagesDisabled: u } = (0, a.cj)(
            [c.Z],
            () => {
                let n = e.isPrivate(),
                    a = c.Z.computePermissions(e),
                    o = i.e$(a, r.Plq.SEND_MESSAGES),
                    d = (0, l.xl)(e);
                return { messagesDisabled: t || (!n && !o) || d };
            },
            [e, t]
        );
    return !u;
}
