n.d(t, {
    Z: function () {
        return f;
    }
});
var i = n(544891),
    r = n(710845),
    l = n(569471),
    a = n(346479),
    o = n(592125),
    s = n(375954),
    c = n(306680),
    u = n(594174),
    d = n(709054),
    m = n(981631);
let h = new r.Z('markUnread');
async function f(e, t) {
    let n = u.default.getCurrentUser();
    if (null == n) return;
    let r = s.Z.getMessages(e),
        f = r
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        p = null == f ? d.default.atPreviousMillisecond(t) : f.id,
        g = 0;
    r.forAll((e) => {
        d.default.compare(e.id, p) > 0 && (0, c.Ex)(e, n) && g++;
    });
    let _ = o.Z.getChannel(e);
    null != _ && _.isThread() && (_.isArchivedThread() && (await a.Z.unarchiveThread(_, !1)), !l.Z.hasJoined(e) && (await a.Z.joinThread(_, 'Mark Unread'))),
        h.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        i.tn.post({
            url: m.ANM.MESSAGE_ACK(e, p),
            body: {
                manual: !0,
                mention_count: g
            },
            oldFormErrors: !0,
            rejectWithError: !0
        });
}
