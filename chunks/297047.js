n.d(t, {
    Z: function () {
        return p;
    },
    q: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(144144),
    o = n(592125),
    l = n(496675),
    u = n(944486),
    c = n(585483),
    d = n(51144),
    f = n(981631),
    _ = n(388032);
function h(e, t) {
    let { id: n } = e,
        r = '@'.concat(d.ZP.getUserTag(e, { decoration: 'never' }));
    c.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
        plainText: r,
        rawText: '<@'.concat(n, '>')
    }),
        null != t && s.Z.startTyping(t);
}
function p(e, t, n) {
    let [s, c] = (0, i.Wu)(
            [u.Z, o.Z, l.Z],
            () => {
                let e = u.Z.getChannelId(t),
                    n = o.Z.getChannel(e);
                return [e, null != n && (n.isMultiUserDM() || l.Z.can(f.Plq.SEND_MESSAGES, n))];
            },
            [t]
        ),
        d = n === f.IlC.POPOUT;
    return !c || d
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'mention',
              label: _.intl.string(_.t.P8tvKC),
              action: function () {
                  h(e, s);
              }
          });
}
