n.r(t),
    n.d(t, {
        default: function () {
            return Z;
        }
    }),
    n(47120);
var l = n(735250),
    a = n(470079),
    s = n(442837),
    o = n(481060),
    i = n(904245),
    d = n(166459),
    r = n(680287),
    _ = n(313201),
    u = n(163268),
    c = n(813197),
    A = n(592125),
    E = n(703558),
    f = n(430824),
    m = n(375954),
    h = n(403182),
    I = n(709054),
    T = n(127654),
    p = n(979956),
    M = n(228392),
    O = n(404616),
    g = n(470623),
    R = n(981631),
    L = n(231338),
    C = n(689938),
    D = n(947251);
function Z(e) {
    var t;
    let { threadId: n, attachments: Z, sendMessage: P, transitionState: N, onClose: U } = e,
        x = (0, _.Dt)(),
        S = (0, s.e7)([A.Z], () => A.Z.getChannel(n), [n]),
        B = (0, s.e7)([f.Z], () => f.Z.getGuild(null == S ? void 0 : S.getGuildId()), [S]),
        G = (0, s.e7)([A.Z], () => A.Z.getChannel(null == S ? void 0 : S.parent_id), [S]),
        v = null === (t = Z[0]) || void 0 === t ? void 0 : t.item,
        [F, z] = a.useState(null);
    a.useEffect(() => {
        null != v && (0, c.Fq)(v.file, (e, t) => z(e), L.dG);
    }, [v]);
    let b =
            null != v && null != F
                ? {
                      src: F,
                      width: O.TJ,
                      height: O.Lp,
                      spoiler: Z[0].spoiler,
                      alt: Z[0].description
                  }
                : null,
        [k, w] = a.useState(!1),
        j = a.useCallback(() => {
            (0, M.xI)({ added: !1 }), P(), U();
        }, [P, U]),
        y = a.useCallback(() => {
            null != S &&
                null != B &&
                ((0, M.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: n, setIsUploading: l, guild: a, onClose: s } = e,
                        o = new r.Z(R.ANM.MESSAGE(t.id, I.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    o.on('start', () => {
                        l(!0);
                    }),
                        o.on('progress', (e) => {
                            let i = (0, h.dg)(a.id);
                            e.currentSize > i && (o.cancel(), l(!1), s(), (0, T.G)(t, (0, p.KZ)(n)));
                        }),
                        o.on('error', (e, n, a) => {
                            l(!1), n === R.evJ.EXPLICIT_CONTENT && (s(), i.Z.sendExplicitMediaClydeError(t.id, null == a ? void 0 : a.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), d.Z.clearAll(t.id, E.d.ChannelMessage));
                        }),
                        o.on('complete', () => {
                            l(!1), s(), d.Z.clearAll(t.id, E.d.ChannelMessage);
                        });
                    let _ = m.Z.getMessages(t.id).get(I.default.castChannelIdAsMessageId(t.id)),
                        c = null != _ ? _.attachments : [];
                    o.uploadFiles(n, { attachments: [...c] }, { addFilesTo: 'attachments' });
                })({
                    thread: S,
                    attachments: Z,
                    setIsUploading: w,
                    guild: B,
                    onClose: U
                }));
        }, [S, Z, w, B, U]);
    return null == G
        ? null
        : (0, l.jsxs)(o.ModalRoot, {
              transitionState: N,
              size: o.ModalSize.SMALL,
              className: D.modalRoot,
              'aria-labelledby': x,
              children: [
                  (0, l.jsxs)(o.ModalContent, {
                      className: D.modal,
                      children: [
                          (0, l.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              className: D.header,
                              id: x,
                              children: C.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_TITLE
                          }),
                          (0, l.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: D.__invalid_body,
                              children: C.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DESCRIPTION
                          }),
                          (0, l.jsx)('div', {
                              className: D.forumPost,
                              children: (0, l.jsx)(g.oL, {
                                  createStore: () => (0, g.NU)(G),
                                  children: (0, l.jsx)(O.ZP, {
                                      threadId: n,
                                      goToThread: L.dG,
                                      overrideMedia: b
                                  })
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)(o.ModalFooter, {
                      className: D.modalFooter,
                      children: [
                          (0, l.jsx)(o.Button, {
                              look: o.Button.Looks.BLANK,
                              className: D.cancelButton,
                              disabled: k,
                              onClick: U,
                              children: C.Z.Messages.CANCEL
                          }),
                          (0, l.jsx)(o.Button, {
                              color: o.Button.Colors.PRIMARY,
                              className: D.dontAddButton,
                              disabled: k,
                              onClick: j,
                              children: C.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_DONT_ADD
                          }),
                          (0, l.jsx)(o.Button, {
                              color: o.Button.Colors.BRAND,
                              className: D.__invalid_button,
                              submitting: k,
                              onClick: y,
                              autoFocus: !0,
                              children: C.Z.Messages.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_ADD
                          })
                      ]
                  })
              ]
          });
}
