t.d(a, {
  l: function() {
    return r
  }
});
var n = t(470079),
  l = t(367907),
  s = t(981631);

function r(e, a, t) {
  return {
    trackPollCreationCancelled: n.useCallback(() => {
      let n = 0,
        r = 0,
        o = 0;
      e.forEach(e => {
        let a = e.image;
        null != a && (null != a.emoji ? r += 1 : null != a.stickerId ? o += 1 : null != a.mediaAttachmentState && (n += 1))
      }), l.ZP.trackWithMetadata(s.rMx.POLL_CREATION_CANCELLED, {
        answers_count: e.length,
        attachments_count: n,
        emojis_count: r,
        stickers_count: o,
        allow_multiselect: a,
        layout_type: t
      })
    }, [e, a, t])
  }
}