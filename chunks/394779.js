n.d(t, {
    s: function () {
        return p;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(346610),
    u = n(868643),
    c = n(912332),
    d = n(701865),
    _ = n(689938),
    E = n(760997);
function f() {
    (0, o.closeModal)(d.U);
}
function h(e) {
    let { className: t, message: n, target: a } = e,
        l = i.useCallback(() => {
            if ('embed' === a.type) {
                (0, c.l8)({
                    messageId: n.id,
                    channelId: n.channel_id,
                    message: n,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [a.embedIndex] },
                    onRequestSent: f
                });
                return;
            }
            (0, c.l8)({
                messageId: n.id,
                channelId: n.channel_id,
                message: n,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [a.attachmentId] },
                onRequestSent: f
            });
        }, [n, a]);
    return (0, r.jsx)(o.Clickable, {
        className: s()(E.container, t),
        onClick: l,
        children: (0, r.jsx)(o.Text, {
            className: E.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD
        })
    });
}
function p(e, t) {
    let { canForwardMessages: n } = (0, l.WT)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return n && (0, u.h)(e)
        ? (n) => {
              let { className: i } = n;
              return (0, r.jsx)(h, {
                  className: i,
                  message: e,
                  target: t
              });
          }
        : () => null;
}
