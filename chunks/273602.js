"use strict";
l.r(t), l.d(t, {
  default: function() {
    return S
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  i = l("442837"),
  s = l("481060"),
  r = l("904245"),
  o = l("166459"),
  u = l("680287"),
  d = l("163268"),
  c = l("813197"),
  f = l("592125"),
  m = l("703558"),
  _ = l("430824"),
  p = l("375954"),
  E = l("153124"),
  g = l("403182"),
  M = l("709054"),
  h = l("127654"),
  A = l("979956"),
  x = l("228392"),
  T = l("404616"),
  I = l("470623"),
  C = l("981631"),
  O = l("231338"),
  L = l("689938"),
  R = l("680098");

function S(e) {
  var t;
  let {
    threadId: l,
    attachments: S,
    sendMessage: b,
    transitionState: v,
    onClose: P
  } = e, U = (0, E.useUID)(), y = (0, i.useStateFromStores)([f.default], () => f.default.getChannel(l), [l]), D = (0, i.useStateFromStores)([_.default], () => _.default.getGuild(null == y ? void 0 : y.getGuildId()), [y]), z = (0, i.useStateFromStores)([f.default], () => f.default.getChannel(null == y ? void 0 : y.parent_id), [y]), N = null === (t = S[0]) || void 0 === t ? void 0 : t.item, [F, j] = n.useState(null);
  n.useEffect(() => {
    null != N && (0, c.processImage)(N.file, (e, t) => j(e), O.NOOP)
  }, [N]);
  let w = null != N && null != F ? {
      src: F,
      width: T.MAX_THUMBNAIL_WIDTH,
      height: T.MAX_THUMBNAIL_HEIGHT,
      spoiler: S[0].spoiler,
      alt: S[0].description
    } : null,
    [k, G] = n.useState(!1),
    B = n.useCallback(() => {
      (0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !1
      }), b(), P()
    }, [b, P]),
    H = n.useCallback(() => {
      null != y && null != D && ((0, x.trackForumAddMediaToOriginalPostClicked)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: l,
          setIsUploading: a,
          guild: n,
          onClose: i
        } = e, s = new u.default(C.Endpoints.MESSAGE(t.id, M.default.castChannelIdAsMessageId(t.id)), "PATCH");
        s.on("start", () => {
          a(!0)
        }), s.on("progress", e => {
          let r = (0, g.maxFileSize)(n.id);
          e.currentSize > r && (s.cancel(), a(!1), i(), (0, h.showUploadFileSizeExceededError)(t, (0, A.getWebUploadFiles)(l)))
        }), s.on("error", (e, l, n) => {
          a(!1), l === C.AbortCodes.EXPLICIT_CONTENT && (i(), r.default.sendExplicitMediaClydeError(t.id, null == n ? void 0 : n.attachments, d.TrackMediaRedactionContext.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), o.default.clearAll(t.id, m.DraftType.ChannelMessage))
        }), s.on("complete", () => {
          a(!1), i(), o.default.clearAll(t.id, m.DraftType.ChannelMessage)
        });
        let c = p.default.getMessages(t.id).get(M.default.castChannelIdAsMessageId(t.id)),
          f = null != c ? c.attachments : [];
        s.uploadFiles(l, {
          attachments: [...f]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: y,
        attachments: S,
        setIsUploading: G,
        guild: D,
        onClose: P
      }))
    }, [y, S, G, D, P]);
  return null == z ? null : (0, a.jsxs)(s.ModalRoot, {
    transitionState: v,
    size: s.ModalSize.SMALL,
    className: R.modalRoot,
    "aria-labelledby": U,
    children: [(0, a.jsxs)(s.ModalContent, {
      className: R.modal,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-md/semibold",
        className: R.header,
        id: U,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        className: R.__invalid_body,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, a.jsx)("div", {
        className: R.forumPost,
        children: (0, a.jsx)(I.ForumPostComposerStoreProvider, {
          createStore: () => (0, I.createForumPostComposerStore)(z),
          children: (0, a.jsx)(T.default, {
            threadId: l,
            goToThread: O.NOOP,
            overrideMedia: w
          })
        })
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      className: R.modalFooter,
      children: [(0, a.jsx)(s.Button, {
        look: s.Button.Looks.BLANK,
        className: R.cancelButton,
        disabled: k,
        onClick: P,
        children: L.default.Messages.CANCEL
      }), (0, a.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        className: R.dontAddButton,
        disabled: k,
        onClick: B,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, a.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        className: R.__invalid_button,
        submitting: k,
        onClick: H,
        autoFocus: !0,
        children: L.default.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}