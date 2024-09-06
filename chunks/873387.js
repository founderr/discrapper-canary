n.d(t, {
    g: function () {
        return u;
    }
});
var o = n(149765),
    i = n(442837),
    a = n(665906),
    l = n(271383),
    r = n(496675),
    c = n(594174),
    d = n(981631);
function u(e) {
    let t = e.getGuildId(),
        n = (0, i.e7)([l.ZP, c.default], () => {
            var e, n;
            let o = c.default.getCurrentUser();
            return null !== (n = null != t && null != o ? (null === (e = l.ZP.getMember(t, o.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        { messagesDisabled: u } = (0, i.cj)(
            [r.Z],
            () => {
                let t = e.isPrivate(),
                    i = r.Z.computePermissions(e),
                    l = o.e$(i, d.Plq.SEND_MESSAGES),
                    c = (0, a.xl)(e);
                return { messagesDisabled: n || (!t && !l) || c };
            },
            [e, n]
        );
    return !u;
}
