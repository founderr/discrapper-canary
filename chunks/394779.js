t.d(n, {
    s: function () {
        return E;
    }
});
var a = t(735250),
    r = t(470079),
    i = t(120356),
    l = t.n(i),
    s = t(481060),
    u = t(346610),
    o = t(868643),
    c = t(912332),
    d = t(701865),
    _ = t(689938),
    f = t(760997);
function h() {
    (0, s.closeModal)(d.U);
}
function m(e) {
    let { className: n, message: t, target: i } = e,
        u = r.useCallback(() => {
            if ('embed' === i.type) {
                (0, c.l8)({
                    messageId: t.id,
                    channelId: t.channel_id,
                    message: t,
                    source: 'media-viewer',
                    forwardOptions: { onlyEmbedIndices: [i.embedIndex] },
                    onRequestSent: h
                });
                return;
            }
            (0, c.l8)({
                messageId: t.id,
                channelId: t.channel_id,
                message: t,
                source: 'media-viewer',
                forwardOptions: { onlyAttachmentIds: [i.attachmentId] },
                onRequestSent: h
            });
        }, [t, i]);
    return (0, a.jsx)(s.Clickable, {
        className: l()(f.container, n),
        onClick: u,
        children: (0, a.jsx)(s.Text, {
            className: f.text,
            variant: 'text-sm/medium',
            color: 'always-white',
            children: _.Z.Messages.MESSAGE_ACTION_FORWARD
        })
    });
}
function E(e, n) {
    let { canForwardMessages: t } = (0, u.WT)({ location: 'ForwardLink' }, { autoTrackExposure: !1 });
    return t && (0, o.h)(e)
        ? (t) => {
              let { className: r } = t;
              return (0, a.jsx)(m, {
                  className: r,
                  message: e,
                  target: n
              });
          }
        : () => null;
}
