t.d(s, {
    Z: function () {
        return I;
    }
});
var n = t(735250);
t(470079);
var a = t(524437),
    i = t(481060),
    r = t(63063),
    o = t(78451),
    l = t(695346),
    c = t(838436),
    d = t(973005),
    u = t(726985),
    _ = t(981631),
    E = t(689938),
    T = t(900965);
function I() {
    var e, s, t;
    let I = l.Xr.useSetting(),
        S = l.UP.useSetting();
    let N = ((e = I), (s = S), e !== a.Xr.DEFAULT_UNSET ? e : null !== (t = d.O7.get(s)) && void 0 !== t ? t : a.Xr.NON_FRIENDS);
    return (0, n.jsxs)(c.U, {
        setting: u.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2,
        children: [
            (0, n.jsx)(c.H, {
                header: E.Z.Messages.USER_DM_SPAM_FILTER,
                description: E.Z.Messages.USER_DM_SPAM_FILTER_HELP.format({ appealLink: r.Z.getArticleURL(_.BhN.SAFE_DIRECT_MESSAGING) })
            }),
            (0, n.jsx)(i.RadioGroup, {
                radioItemClassName: T.radioGroupItem,
                value: N,
                options: (0, o.c7)(),
                onChange: (e) => {
                    let { value: s } = e;
                    return l.Xr.updateSetting(s);
                }
            })
        ]
    });
}
