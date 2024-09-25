n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(544891),
    i = n(569471),
    a = n(346479),
    o = n(592125),
    s = n(375954),
    l = n(306680),
    u = n(594174),
    c = n(709054),
    d = n(981631);
async function _(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let _ = s.Z.getMessages(e),
        E = _.toArray()
            .filter((e) => 0 > c.default.compare(e.id, t))
            .sort((e, t) => c.default.compare(e.id, t.id))
            .reverse()[0],
        f = null == E ? c.default.atPreviousMillisecond(t) : E.id,
        h = 0;
    _.forAll((e) => {
        c.default.compare(e.id, f) > 0 && (0, l.Ex)(e, n) && h++;
    });
    let p = o.Z.getChannel(e);
    null != p && p.isThread() && (p.isArchivedThread() && (await a.Z.unarchiveThread(p, !1)), !i.Z.hasJoined(e) && (await a.Z.joinThread(p, 'Mark Unread'))),
        r.tn.post({
            url: d.ANM.MESSAGE_ACK(e, f),
            body: {
                manual: !0,
                mention_count: h
            },
            oldFormErrors: !0
        });
}
