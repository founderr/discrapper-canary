"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("222007"), a("702976");
var l = a("77078"),
  n = a("913144"),
  s = a("295426"),
  r = a("819689"),
  o = a("81594"),
  i = a("336522"),
  d = a("448993"),
  u = a("979911"),
  _ = a("282928"),
  E = a("966724"),
  c = a("681736"),
  f = a("447435"),
  p = a("600798"),
  A = a("692038"),
  L = a("815297"),
  g = a("168730"),
  T = a("562228"),
  h = a("529805"),
  M = a("685841"),
  m = a("804888"),
  O = a("474643"),
  P = a("585722"),
  U = a("568734"),
  D = a("305515"),
  S = a("49111"),
  y = a("782340");
async function R(e) {
  var t, a, l;
  let _, {
      channelId: E,
      uploads: R,
      draftType: I,
      parsedMessage: C,
      options: v = {},
      raiseEndpointErrors: G = !1
    } = e,
    N = new c.default(S.Endpoints.MESSAGES(E)),
    F = new D.Future,
    w = {
      content: "",
      nonce: "",
      channel_id: E,
      type: S.MessageTypes.DEFAULT,
      sticker_ids: null == v ? void 0 : v.stickerIds,
      poll: null == v ? void 0 : v.poll
    };
  null != C && (w.content = null == C ? void 0 : C.content);
  let b = M.default.getPendingReply(E);
  null != b && (w.type = S.MessageTypes.REPLY, w.message_reference = v.messageReference, w.allowed_mentions = v.allowedMentions, (0, h.deletePendingReply)(E));
  let [x, H] = (0, m.default)(w.content);
  x && (w.content = H, w.flags = (0, U.addFlag)(null !== (t = w.flags) && void 0 !== t ? t : 0, S.MessageFlags.SUPPRESS_NOTIFICATIONS));
  let k = null !== (a = v.nonce) && void 0 !== a ? a : (0, L.createNonce)(),
    z = (0, L.default)({
      channelId: E,
      content: w.content,
      tts: null !== (l = null == C ? void 0 : C.tts) && void 0 !== l && l,
      type: w.type,
      messageReference: w.message_reference,
      flags: w.flags,
      nonce: k,
      poll: (0, T.createPollServerDataFromCreateRequest)(v.poll)
    });
  return (w.nonce = k, N.on("start", e => {
    _ = (0, A.createMessageRecord)({
      ...z,
      id: e.id
    }), n.default.dispatch({
      type: "UPLOAD_START",
      channelId: E,
      file: e,
      message: _,
      uploader: N
    })
  }), N.on("progress", e => {
    n.default.dispatch({
      type: "UPLOAD_PROGRESS",
      channelId: E,
      file: e
    })
  })), N.on("error", (e, t, a, l) => {
    if (n.default.dispatch({
        type: "UPLOAD_FAIL",
        channelId: E,
        file: e,
        messageRecord: _
      }), (0, g.logMessageSendFailure)({
        fileItems: e.items,
        failureCode: t,
        errorMessage: null == l ? void 0 : l.msg
      }), t === S.AbortCodes.EXPLICIT_CONTENT) {
      r.default.sendExplicitMediaClydeError(E, null == a ? void 0 : a.attachments, f.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
      return
    }
    if (t === S.AbortCodes.AUTOMOD_MESSAGE_BLOCKED) {
      let e = {
          code: t,
          message: null == a ? void 0 : a.message
        },
        l = null == _ ? null : {
          type: u.MessageDataType.SEND,
          message: {
            ..._,
            channelId: E
          }
        };
      (0, i.openUploadError)({
        title: y.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
        help: (0, p.getAutomodErrorMessage)(l, e)
      });
      return
    }
    t !== S.AbortCodes.GUILD_FILE_UPLOAD_RATE_LIMITED_ACCESS && (G ? F.reject(new d.APIError({
      status: t,
      body: null != a ? a : {}
    }, t)) : (0, i.openUploadError)({
      title: y.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
      help: y.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_RETRY_HELP
    }), "" !== w.content && "" === O.default.getDraft(E, I) && s.default.saveDraft(E, w.content, I), 0 === P.default.getUploadCount(E, I) && o.default.setUploads({
      channelId: E,
      uploads: R,
      draftType: I
    }))
  }), N.on("complete", (e, t) => {
    n.default.dispatch({
      type: "UPLOAD_COMPLETE",
      channelId: E,
      file: e,
      aborted: N._aborted,
      messageRecord: t
    })
  }), await N.uploadFiles(R, w), F.resolve(), F.promise
}
var I = {
  instantBatchUpload: function(e) {
    let {
      channelId: t,
      files: a,
      draftType: l,
      isThumbnail: n = !1,
      filesMetadata: s = []
    } = e, r = Array.from(a).map((e, a) => {
      let l = null != s ? s[a] : {};
      return new _.CloudUpload({
        file: e,
        platform: E.UploadPlatform.WEB,
        isThumbnail: n,
        ...l
      }, t)
    });
    R({
      channelId: t,
      uploads: r,
      draftType: l
    })
  },
  upload: function e(t) {
    let {
      channelId: a,
      file: o,
      draftType: d,
      message: u,
      hasSpoiler: _,
      filename: E
    } = t, p = {
      content: "",
      tts: !1,
      hasSpoiler: _,
      filename: E
    };
    if (null != u) {
      p.content = u.content, p.tts = u.tts, p.channel_id = u.channel_id;
      let e = M.default.getPendingReply(a);
      if (null != e) {
        let t = r.default.getSendMessageOptionsForReply(e);
        p.type = S.MessageTypes.REPLY, p.message_reference = t.messageReference, p.allowed_mentions = t.allowedMentions, (0, h.deletePendingReply)(a)
      }
    }
    let A = new c.default(S.Endpoints.MESSAGES(a));
    A.on("start", e => {
      n.default.dispatch({
        type: "UPLOAD_START",
        channelId: a,
        file: e,
        uploader: A
      })
    }), A.on("progress", e => {
      n.default.dispatch({
        type: "UPLOAD_PROGRESS",
        channelId: a,
        file: e
      })
    }), A.on("error", (t, _, E) => {
      if (n.default.dispatch({
          type: "UPLOAD_FAIL",
          channelId: a,
          file: t
        }), (0, g.logMessageSendFailure)({
          fileItems: t.items,
          failureCode: _
        }), _ === S.AbortCodes.EXPLICIT_CONTENT) {
        r.default.sendExplicitMediaClydeError(a, null == E ? void 0 : E.attachments, f.TrackMediaRedactionContext.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED);
        return
      }(0, i.openUploadError)({
        title: y.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_TITLE,
        help: y.default.Messages.UPLOAD_AREA_UPLOAD_FAILED_HELP.format({
          onClick: () => {
            (0, l.closeModal)(i.UPLOAD_ERROR_MODAL_KEY), e({
              channelId: a,
              file: o,
              draftType: d,
              message: u
            })
          }
        })
      }), "" !== p.content && "" === O.default.getDraft(a, d) && s.default.saveDraft(a, p.content, d)
    }), A.on("complete", e => {
      n.default.dispatch({
        type: "UPLOAD_COMPLETE",
        channelId: a,
        file: e
      })
    }), A.upload(o, p)
  },
  uploadFiles: R,
  cancel(e) {
    if (n.default.dispatch({
        type: "UPLOAD_CANCEL_REQUEST",
        file: e
      }), null != e.draftContent && null != e.channelId) {
      let t = O.default.getDraft(e.channelId, O.DraftType.ChannelMessage);
      "" === t && n.default.dispatch({
        type: "DRAFT_SAVE",
        channelId: e.channelId,
        draft: e.draftContent,
        draftType: O.DraftType.ChannelMessage
      })
    }
  }
}