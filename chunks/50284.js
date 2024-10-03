n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(544891),
    i = n(710845),
    a = n(569471),
    o = n(346479),
    s = n(592125),
    l = n(375954),
    u = n(306680),
    c = n(594174),
    d = n(709054),
    _ = n(981631);
let E = new i.Z('markUnread');
async function f(e, t) {
    let n = c.default.getCurrentUser();
    if (null == n) return;
    let i = l.Z.getMessages(e),
        f = i
            .toArray()
            .filter((e) => 0 > d.default.compare(e.id, t))
            .sort((e, t) => d.default.compare(e.id, t.id))
            .reverse()[0],
        h = null == f ? d.default.atPreviousMillisecond(t) : f.id,
        p = 0;
    i.forAll((e) => {
        d.default.compare(e.id, h) > 0 && (0, u.Ex)(e, n) && p++;
    });
    let m = s.Z.getChannel(e);
    null != m && m.isThread() && (m.isArchivedThread() && (await o.Z.unarchiveThread(m, !1)), !a.Z.hasJoined(e) && (await o.Z.joinThread(m, 'Mark Unread'))),
        E.log('Marking unread', {
            channelId: e,
            messageId: t
        }),
        r.tn.post({
            url: _.ANM.MESSAGE_ACK(e, h),
            body: {
                manual: !0,
                mention_count: p
            },
            oldFormErrors: !0
        });
}
