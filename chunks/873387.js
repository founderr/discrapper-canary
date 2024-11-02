t.d(n, {
    g: function () {
        return u;
    }
});
var i = t(149765),
    l = t(442837),
    a = t(665906),
    o = t(271383),
    r = t(496675),
    c = t(594174),
    d = t(981631);
function u(e) {
    let n = e.getGuildId(),
        t = (0, l.e7)([o.ZP, c.default], () => {
            var e, t;
            let i = c.default.getCurrentUser();
            return null !== (t = null != n && null != i ? (null === (e = o.ZP.getMember(n, i.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        { messagesDisabled: u } = (0, l.cj)(
            [r.Z],
            () => {
                let n = e.isPrivate(),
                    l = r.Z.computePermissions(e),
                    o = i.e$(l, d.Plq.SEND_MESSAGES),
                    c = (0, a.xl)(e);
                return { messagesDisabled: t || (!n && !o) || c };
            },
            [e, t]
        );
    return !u;
}
