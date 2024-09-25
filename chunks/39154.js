n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(789020);
var i = n(978003);
function a(e, t) {
    return null == (t = null != t ? t : (0, i.Z)(e) ? e.messageSnapshots[0] : void 0)
        ? e
        : e.merge({
              content: t.message.content,
              attachments: t.message.attachments,
              embeds: t.message.embeds,
              flags: t.message.flags,
              components: t.message.components,
              editedTimestamp: null,
              timestamp: t.message.timestamp,
              codedLinks: t.message.codedLinks,
              reactions: [],
              messageSnapshots: [],
              stickers: t.message.stickers,
              stickerItems: t.message.stickerItems,
              customRenderedContent: null
          });
}
