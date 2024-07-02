i.d(n, {
    s: function () {
        return b;
    }
});
var t = i(735250), o = i(470079), a = i(120356), r = i.n(a), l = i(481060), c = i(346610), s = i(868643), d = i(912332), u = i(503349), f = i(689938), _ = i(691523);
function m() {
    (0, l.closeModal)(u.c);
}
function I(e) {
    let {
            className: n,
            channelId: i,
            messageId: a,
            target: c
        } = e, s = o.useCallback(() => {
            if ('embed' === c.type) {
                (0, d.l8)({
                    messageId: a,
                    channelId: i,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [c.embedIndex] },
                    onRequestSent: m
                });
                return;
            }
            (0, d.l8)({
                messageId: a,
                channelId: i,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [c.attachmentId] },
                onRequestSent: m
            });
        }, [
            i,
            a,
            c
        ]);
    return (0, t.jsx)(l.Clickable, {
        className: r()(_.container, n),
        onClick: s,
        children: (0, t.jsx)(l.Text, {
            className: _.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: f.Z.Messages.MESSAGE_ACTION_FORWARD
        })
    });
}
function b(e, n) {
    let {canForwardMessages: i} = c.w.getCurrentConfig({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return i && (0, s.h)(e) ? i => {
        let {className: o} = i;
        return (0, t.jsx)(I, {
            className: o,
            channelId: e.channel_id,
            messageId: e.id,
            target: n
        });
    } : () => null;
}
