"use strict";
n.r(t), n("47120"), n("789020");
var i = n("481060"),
  r = n("570140"),
  s = n("430742"),
  a = n("904245"),
  o = n("166459"),
  l = n("531643"),
  u = n("881052"),
  d = n("673750"),
  _ = n("141795"),
  c = n("476326"),
  E = n("680287"),
  I = n("163268"),
  T = n("539573"),
  f = n("786761"),
  S = n("3148"),
  h = n("48854"),
  A = n("785359"),
  m = n("79390"),
  N = n("623292"),
  p = n("807092"),
  O = n("467798"),
  C = n("703558"),
  R = n("117530"),
  g = n("630388"),
  L = n("226351"),
  v = n("981631"),
  D = n("689938");
async function M(e) {
  var t, n, i;
  let _, {
      channelId: c,
      uploads: M,
      draftType: y,
      parsedMessage: P,
      options: U = {},
      raiseEndpointErrors: b = !1
    } = e,
    G = new E.default(v.Endpoints.MESSAGES(c)),
    w = new L.Future,
    k = {
      content: "",
      nonce: "",
      channel_id: c,
      type: v.MessageTypes.DEFAULT,
      sticker_ids: null == U ? void 0 : U.stickerIds,
      poll: null == U ? void 0 : U.poll
    };
  null != P && (k.content = null == P ? void 0 : P.content), null != p.default.getPendingReply(c) && (k.type = v.MessageTypes.REPLY, k.message_reference = U.messageReference, k.allowed_mentions = U.allowedMentions, (0, N.deletePendingReply)(c));
  let [B, V] = (0, O.default)(k.content);
  B && (k.content = V, k.flags = (0, g.addFlag)(null !== (t = k.flags) && void 0 !== t ? t : 0, v.MessageFlags.SUPPRESS_NOTIFICATIONS));
  let x = null !== (n = U.nonce) && void 0 !== n ? n : (0, h.createNonce)(),
    F = (0, S.default)({
      channelId: c,
      content: k.content,
      tts: null !== (i = null == P ? void 0 : P.tts) && void 0 !== i && i,
      type: k.type,
      messageReference: k.message_reference,
      flags: k.flags,
      nonce: x,
      poll: (0, m.createPollServerDataFromCreateRequest)(U.poll)
    });
  return (k.nonce = x, G.on("start", e => {
    _ = (0, f.createMessageRecord)({
      ...F,
      id: e.id
    }), r.default.dispatch({
      type: "UPLOAD_START",
      channelId: c,
      file: e,
      message: _,
      uploader: G
    })
  }), G.on("progress", e => {
    r.default.dispatch({
      type: "UPLOAD_PROGRESS",
      channelId: c,
      file: e
    })
  })), G.on("error", (e, t, n, i) => {
    if (r.default.dispatch({
        type: "UPLOAD_FAIL",
        channelId: c,
        file: e,
        messageRecord: _
      }), (0, A.logMessageSendFailure)({
        fileItems: e.items,
        failureCode: t,
        errorMessage: null == i ? void 0 : i.msg
      }), t === v.AbortCodes.EXPLICIT_CONTENT) {
      a.default.sendExplicitMediaClydeError(c, null == n ? void 0 : n.attachments, I.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
      return
    }
    if (t === v.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
      let e = {
          code: t,
          message: null == n ? void 0 : n.message
        },
        i = null == _ ? null : {
          type: d.MessageDataType.SEND,
          message: {
            ..._,
            channelId: c
          }
        };
      (0, l.openUploadError)({
        title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
        help: (0, T.getAutomodErrorMessage)(i, e)
      });
      return
    }
    t !== v.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (b ? w.reject(new u.APIError({
      status: t,
      body: null != n ? n : {}
    }, t)) : (0, l.openUploadError)({
      title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
      help: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
    }), "" !== k.content && "" === C.default.getDraft(c, y) && s.default.saveDraft(c, k.content, y), 0 === R.default.getUploadCount(c, y) && o.default.setUploads({
      channelId: c,
      uploads: M,
      draftType: y
    }))
  }), G.on("complete", (e, t) => {
    r.default.dispatch({
      type: "UPLOAD_COMPLETE",
      channelId: c,
      file: e,
      aborted: G._aborted,
      messageRecord: t
    })
  }), await G.uploadFiles(M, k), w.resolve(), w.promise
}
t.default = {
  instantBatchUpload: function(e) {
    let {
      channelId: t,
      files: n,
      draftType: i,
      isThumbnail: r = !1,
      filesMetadata: s = []
    } = e, a = Array.from(n).map((e, n) => {
      let i = null != s ? s[n] : {};
      return new _.CloudUpload({
        file: e,
        platform: c.UploadPlatform.WEB,
        isThumbnail: r,
        ...i
      }, t)
    });
    M({
      channelId: t,
      uploads: a,
      draftType: i
    })
  },
  upload: function e(t) {
    let {
      channelId: n,
      file: o,
      draftType: u,
      message: d,
      hasSpoiler: _,
      filename: c
    } = t, T = {
      content: "",
      tts: !1,
      hasSpoiler: _,
      filename: c
    };
    if (null != d) {
      T.content = d.content, T.tts = d.tts, T.channel_id = d.channel_id;
      let e = p.default.getPendingReply(n);
      if (null != e) {
        let t = a.default.getSendMessageOptionsForReply(e);
        T.type = v.MessageTypes.REPLY, T.message_reference = t.messageReference, T.allowed_mentions = t.allowedMentions, (0, N.deletePendingReply)(n)
      }
    }
    let f = new E.default(v.Endpoints.MESSAGES(n));
    f.on("start", e => {
      r.default.dispatch({
        type: "UPLOAD_START",
        channelId: n,
        file: e,
        uploader: f
      })
    }), f.on("progress", e => {
      r.default.dispatch({
        type: "UPLOAD_PROGRESS",
        channelId: n,
        file: e
      })
    }), f.on("error", (t, _, c) => {
      if (r.default.dispatch({
          type: "UPLOAD_FAIL",
          channelId: n,
          file: t
        }), (0, A.logMessageSendFailure)({
          fileItems: t.items,
          failureCode: _
        }), _ === v.AbortCodes.EXPLICIT_CONTENT) {
        a.default.sendExplicitMediaClydeError(n, null == c ? void 0 : c.attachments, I.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
        return
      }(0, l.openUploadError)({
        title: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
        help: D.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
          onClick: () => {
            (0, i.closeModal)(l.UPLOAD_ERROR_MODAL_KEY), e({
              channelId: n,
              file: o,
              draftType: u,
              message: d
            })
          }
        })
      }), "" !== T.content && "" === C.default.getDraft(n, u) && s.default.saveDraft(n, T.content, u)
    }), f.on("complete", e => {
      r.default.dispatch({
        type: "UPLOAD_COMPLETE",
        channelId: n,
        file: e
      })
    }), f.upload(o, T)
  },
  uploadFiles: M,
  cancel(e) {
    r.default.dispatch({
      type: "UPLOAD_CANCEL_REQUEST",
      file: e
    }), null != e.draftContent && null != e.channelId && "" === C.default.getDraft(e.channelId, C.DraftType.ChannelMessage) && r.default.dispatch({
      type: "DRAFT_SAVE",
      channelId: e.channelId,
      draft: e.draftContent,
      draftType: C.DraftType.ChannelMessage
    })
  }
}