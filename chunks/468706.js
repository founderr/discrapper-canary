n.d(t, {
    e: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(240872),
    o = n(923500),
    s = n(163268),
    l = n(774863),
    u = n(689938);
function c(e, t) {
    if (
        ((0, s.aP)({
            action: s.Yy.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
            messageId: t,
            channelId: e
        }),
        !l.Z.canSubmitFpReport(t))
    ) {
        a.Z.show({
            title: u.Z.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
            body: u.Z.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
            confirmText: u.Z.Messages.OKAY
        }),
            o.Z.disableFalsePositiveButton(e, t);
        return;
    }
    (0, i.openModalLazy)(async () => {
        let { default: i } = await n(773276);
        return (n) =>
            (0, r.jsx)(i, {
                channelId: e,
                messageId: t,
                ...n
            });
    });
}
