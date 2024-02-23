"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  useCreateForumPost: function() {
    return S
  }
});
var l = n("884691"),
  a = n("16470"),
  s = n("404118"),
  i = n("783480"),
  r = n("681736"),
  o = n("578198"),
  u = n("884351"),
  d = n("474643"),
  c = n("305961"),
  f = n("254490"),
  h = n("730498"),
  m = n("49111"),
  p = n("782340");

function E(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: a,
    privateThreadMode: s,
    location: r,
    onThreadCreated: o,
    useDefaultThreadName: c
  } = e, f = l.useCallback((e, t, n, l) => {
    i.default.uploadFiles({
      channelId: e.id,
      uploads: t,
      draftType: d.DraftType.FirstThreadMessage,
      options: {
        stickerIds: l
      },
      parsedMessage: u.default.parse(e, n)
    })
  }, []);
  return (0, h.useCreateThreadCommon)({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: a,
    privateThreadMode: s,
    location: r,
    onThreadCreated: o,
    useDefaultThreadName: c,
    uploadHandler: f
  })
}

function S(e) {
  let {
    parentChannel: t
  } = e, {
    name: n,
    appliedTags: l
  } = (0, o.useForumPostComposerStore)(e => {
    let {
      name: t,
      appliedTags: n
    } = e;
    return {
      name: t,
      appliedTags: n
    }
  }, a.default);
  return (0, h.useCreateForumPostCommon)({
    parentChannel: t,
    name: n,
    appliedTags: l,
    upload: function(e, n, l) {
      return new Promise((a, i) => {
        let o = new r.default(e);
        o.on("error", (e, n, l) => {
          if (n === m.AbortCodes.EXPLICIT_CONTENT) {
            var a;
            let e = c.default.getGuild(null !== (a = t.getGuildId()) && void 0 !== a ? a : m.EMPTY_STRING_GUILD_ID);
            null != e && s.default.show({
              title: p.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
              body: p.default.Messages.BOT_GUILD_EXPLICIT_CONTENT.format({
                name: e.toString()
              })
            })
          } else if (n === m.AbortCodes.ENTITY_TOO_LARGE) {
            let e = (0, f.maxFileSize)(t.getGuildId());
            s.default.show({
              title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              body: p.default.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: (0, f.sizeString)(e)
              })
            })
          } else n === m.AbortCodes.TOO_MANY_ATTACHMENTS && s.default.show({
            title: p.default.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            body: p.default.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: m.MAX_UPLOAD_COUNT
            })
          });
          i({
            body: l
          })
        }), o.on("complete", (e, t) => {
          a({
            body: t
          })
        }), o.uploadFiles(l, n, {
          addFilesTo: "message.attachments"
        })
      })
    }
  })
}