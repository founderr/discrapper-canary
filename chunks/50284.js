n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(544891),
    a = n(710845),
    s = n(569471),
    r = n(346479),
    l = n(592125),
    o = n(375954),
    c = n(306680),
    u = n(594174),
    d = n(709054),
    _ = n(981631);
let E = new a.Z('markUnread');
async function I(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let a = o.Z.getMessages(e),
        I = a
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        m = null == I ? d.default.atPreviousMillisecond(t) : I.id,
        f = 0;
    a.forAll((e) => {
        d.default.compare(e.id, m) > 0 && (0, c.Ex)(e, n) && f++;
    });
    let h = l.Z.getChannel(e);
    null != h && h.isThread() && (h.isArchivedThread() && (await r.Z.unarchiveThread(h, !1)), !s.Z.hasJoined(e) && (await r.Z.joinThread(h, 'Mark Unread'))),
        E.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        i.tn.post({
            url: _.ANM.MESSAGE_ACK(e, m),
            body: {
                manual: !0,
                mention_count: f
            },
            oldFormErrors: !0
        });
}
