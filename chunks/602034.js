n.d(t, {
  Z: function() {
    return _
  },
  r: function() {
    return I
  }
});
var l = n(735250),
  i = n(470079),
  s = n(143927),
  a = n(481060),
  r = n(570140),
  o = n(668781),
  c = n(966390),
  u = n(680287),
  d = n(470623),
  h = n(957730),
  m = n(48854),
  E = n(703558),
  p = n(403182),
  g = n(928477),
  f = n(981631),
  C = n(689938);

function _(e) {
  let {
    parentChannel: t,
    parentMessageId: n,
    threadSettings: l,
    privateThreadMode: s,
    location: a,
    onThreadCreated: r,
    useDefaultThreadName: o
  } = e, u = i.useCallback((e, t, n, l) => {
    c.Z.uploadFiles({
      channelId: e.id,
      uploads: t,
      draftType: E.d.FirstThreadMessage,
      options: {
        stickerIds: l
      },
      parsedMessage: h.ZP.parse(e, n)
    })
  }, []);
  return (0, g.JA)({
    parentChannel: t,
    parentMessageId: n,
    threadSettings: l,
    privateThreadMode: s,
    location: a,
    onThreadCreated: r,
    useDefaultThreadName: o,
    uploadHandler: u
  })
}

function I(e) {
  let {
    parentChannel: t
  } = e, {
    name: i,
    appliedTags: c
  } = (0, d.xH)(e => {
    let {
      name: t,
      appliedTags: n
    } = e;
    return {
      name: t,
      appliedTags: n
    }
  }, s.Z);
  return (0, g.Wj)({
    parentChannel: t,
    name: i,
    appliedTags: c,
    upload: function(e, i, s) {
      return new Promise((c, d) => {
        let h = new u.Z(e);
        h.on("error", (e, i, s) => {
          if (i === f.evJ.EXPLICIT_CONTENT) {
            let e = (0, m.r)();
            null != s && null != s.attachments && s.attachments.length > 0 && (r.Z.dispatch({
              type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
              messageId: e,
              channelId: t.id,
              attachments: s.attachments
            }), (0, a.openModalLazy)(async () => {
              let {
                default: i
              } = await Promise.all([n.e("99387"), n.e("57539")]).then(n.bind(n, 924188));
              return n => (0, l.jsx)(i, {
                ...n,
                channelId: t.id,
                messageId: e
              })
            }))
          } else if (i === f.evJ.ENTITY_TOO_LARGE) {
            let e = (0, p.dg)(t.getGuildId());
            o.Z.show({
              title: C.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
              body: C.Z.Messages.UPLOAD_AREA_TOO_LARGE_HELP.format({
                maxSize: (0, p.Ng)(e)
              })
            })
          } else i === f.evJ.TOO_MANY_ATTACHMENTS && o.Z.show({
            title: C.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_TITLE,
            body: C.Z.Messages.ATTACHMENT_TOO_MANY_ERROR_MESSAGE.format({
              limit: f.dN1
            })
          });
          d({
            body: s
          })
        }), h.on("complete", (e, t) => {
          c({
            body: t
          })
        }), h.uploadFiles(s, i, {
          addFilesTo: "message.attachments"
        })
      })
    }
  })
}