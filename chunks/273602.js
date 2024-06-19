i.r(t), i.d(t, {
  default: function() {
    return C
  }
}), i(47120);
var l = i(735250),
  n = i(470079),
  s = i(442837),
  a = i(481060),
  r = i(904245),
  o = i(166459),
  u = i(680287),
  d = i(163268),
  c = i(813197),
  _ = i(592125),
  m = i(703558),
  f = i(430824),
  g = i(375954),
  h = i(153124),
  E = i(403182),
  A = i(709054),
  M = i(127654),
  p = i(979956),
  x = i(228392),
  I = i(404616),
  T = i(470623),
  O = i(981631),
  v = i(231338),
  R = i(689938),
  L = i(441371);

function C(e) {
  var t;
  let {
    threadId: i,
    attachments: C,
    sendMessage: b,
    transitionState: Z,
    onClose: D
  } = e, P = (0, h.Dt)(), j = (0, s.e7)([_.Z], () => _.Z.getChannel(i), [i]), S = (0, s.e7)([f.Z], () => f.Z.getGuild(null == j ? void 0 : j.getGuildId()), [j]), N = (0, s.e7)([_.Z], () => _.Z.getChannel(null == j ? void 0 : j.parent_id), [j]), U = null === (t = C[0]) || void 0 === t ? void 0 : t.item, [y, z] = n.useState(null);
  n.useEffect(() => {
    null != U && (0, c.Fq)(U.file, (e, t) => z(e), v.dG)
  }, [U]);
  let G = null != U && null != y ? {
      src: y,
      width: I.TJ,
      height: I.Lp,
      spoiler: C[0].spoiler,
      alt: C[0].description
    } : null,
    [w, k] = n.useState(!1),
    B = n.useCallback(() => {
      (0, x.xI)({
        added: !1
      }), b(), D()
    }, [b, D]),
    F = n.useCallback(() => {
      null != j && null != S && ((0, x.xI)({
        added: !0
      }), ! function(e) {
        let {
          thread: t,
          attachments: i,
          setIsUploading: l,
          guild: n,
          onClose: s
        } = e, a = new u.Z(O.ANM.MESSAGE(t.id, A.default.castChannelIdAsMessageId(t.id)), "PATCH");
        a.on("start", () => {
          l(!0)
        }), a.on("progress", e => {
          let r = (0, E.dg)(n.id);
          e.currentSize > r && (a.cancel(), l(!1), s(), (0, M.G)(t, (0, p.KZ)(i)))
        }), a.on("error", (e, i, n) => {
          l(!1), i === O.evJ.EXPLICIT_CONTENT && (s(), r.Z.sendExplicitMediaClydeError(t.id, null == n ? void 0 : n.attachments, d.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), o.Z.clearAll(t.id, m.d.ChannelMessage))
        }), a.on("complete", () => {
          l(!1), s(), o.Z.clearAll(t.id, m.d.ChannelMessage)
        });
        let c = g.Z.getMessages(t.id).get(A.default.castChannelIdAsMessageId(t.id)),
          _ = null != c ? c.attachments : [];
        a.uploadFiles(i, {
          attachments: [..._]
        }, {
          addFilesTo: "attachments"
        })
      }({
        thread: j,
        attachments: C,
        setIsUploading: k,
        guild: S,
        onClose: D
      }))
    }, [j, C, k, S, D]);
  return null == N ? null : (0, l.jsxs)(a.ModalRoot, {
    transitionState: Z,
    size: a.ModalSize.SMALL,
    className: L.modalRoot,
    "aria-labelledby": P,
    children: [(0, l.jsxs)(a.ModalContent, {
      className: L.modal,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-md/semibold",
        className: L.header,
        id: P,
        children: R.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        className: L.__invalid_body,
        children: R.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
      }), (0, l.jsx)("div", {
        className: L.forumPost,
        children: (0, l.jsx)(T.oL, {
          createStore: () => (0, T.NU)(N),
          children: (0, l.jsx)(I.ZP, {
            threadId: i,
            goToThread: v.dG,
            overrideMedia: G
          })
        })
      })]
    }), (0, l.jsxs)(a.ModalFooter, {
      className: L.modalFooter,
      children: [(0, l.jsx)(a.Button, {
        look: a.Button.Looks.BLANK,
        className: L.cancelButton,
        disabled: w,
        onClick: D,
        children: R.Z.Messages.CANCEL
      }), (0, l.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        className: L.dontAddButton,
        disabled: w,
        onClick: B,
        children: R.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
      }), (0, l.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        className: L.__invalid_button,
        submitting: w,
        onClick: F,
        autoFocus: !0,
        children: R.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
      })]
    })]
  })
}