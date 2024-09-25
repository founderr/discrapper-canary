n.d(t, {
    Z: function () {
        return p;
    },
    q: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(442837),
    o = n(481060),
    s = n(144144),
    l = n(592125),
    u = n(496675),
    c = n(944486),
    d = n(585483),
    _ = n(51144),
    E = n(981631),
    f = n(689938);
function h(e, t) {
    let { id: n } = e,
        r = '@'.concat(_.ZP.getUserTag(e, { decoration: 'never' })),
        i = '<@'.concat(n, '>');
    d.S.dispatchToLastSubscribed(E.CkL.INSERT_TEXT, {
        plainText: r,
        rawText: i
    }),
        null != t && s.Z.startTyping(t);
}
function p(e, t, n) {
    let [r, s] = (0, a.Wu)(
            [c.Z, l.Z, u.Z],
            () => {
                let e = c.Z.getChannelId(t),
                    n = l.Z.getChannel(e);
                return [e, null != n && (n.isMultiUserDM() || u.Z.can(E.Plq.SEND_MESSAGES, n))];
            },
            [t]
        ),
        d = n === E.IlC.POPOUT;
    if (!s || d) return null;
    function _() {
        h(e, r);
    }
    return (0, i.jsx)(o.MenuItem, {
        id: 'mention',
        label: f.Z.Messages.MENTION,
        action: _
    });
}
