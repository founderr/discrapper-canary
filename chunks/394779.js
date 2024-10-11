t.d(n, {
    s: function () {
        return h;
    }
});
var i = t(735250),
    r = t(470079),
    a = t(120356),
    l = t.n(a),
    u = t(481060),
    o = t(346610),
    s = t(868643),
    c = t(912332),
    d = t(503349),
    _ = t(689938),
    f = t(760997);
function m() {
    (0, u.closeModal)(d.c);
}
function E(e) {
    let { className: n, channelId: t, messageId: a, target: o } = e,
        s = r.useCallback(() => {
            if ('embed' === o.type) {
                (0, c.l8)({
                    messageId: a,
                    channelId: t,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [o.embedIndex] },
                    onRequestSent: m
                });
                return;
            }
            (0, c.l8)({
                messageId: a,
                channelId: t,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [o.attachmentId] },
                onRequestSent: m
            });
        }, [t, a, o]);
    return (0, i.jsx)(u.Clickable, {
        className: l()(f.container, n),
        onClick: s,
        children: (0, i.jsx)(u.Text, {
            className: f.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD
        })
    });
}
function h(e, n) {
    let { canForwardMessages: t } = (0, o.WT)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return t && (0, s.h)(e)
        ? (t) => {
              let { className: r } = t;
              return (0, i.jsx)(E, {
                  className: r,
                  channelId: e.channel_id,
                  messageId: e.id,
                  target: n
              });
          }
        : () => null;
}
