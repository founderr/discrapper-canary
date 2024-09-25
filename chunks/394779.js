n.d(t, {
    s: function () {
        return p;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(346610),
    u = n(868643),
    c = n(912332),
    d = n(503349),
    _ = n(689938),
    E = n(760997);
function f() {
    (0, s.closeModal)(d.c);
}
function h(e) {
    let { className: t, channelId: n, messageId: a, target: l } = e,
        u = i.useCallback(() => {
            if ('embed' === l.type) {
                (0, c.l8)({
                    messageId: a,
                    channelId: n,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [l.embedIndex] },
                    onRequestSent: f
                });
                return;
            }
            (0, c.l8)({
                messageId: a,
                channelId: n,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [l.attachmentId] },
                onRequestSent: f
            });
        }, [n, a, l]);
    return (0, r.jsx)(s.Clickable, {
        className: o()(E.container, t),
        onClick: u,
        children: (0, r.jsx)(s.Text, {
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
                  channelId: e.channel_id,
                  messageId: e.id,
                  target: t
              });
          }
        : () => null;
}
