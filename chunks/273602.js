l.r(t),
    l.d(t, {
        default: function () {
            return A;
        }
    }),
    l(47120);
var n = l(200651),
    i = l(192379),
    a = l(442837),
    o = l(481060),
    r = l(904245),
    s = l(166459),
    d = l(680287),
    u = l(313201),
    c = l(247206),
    m = l(813197),
    f = l(592125),
    h = l(703558),
    g = l(430824),
    p = l(375954),
    x = l(403182),
    _ = l(709054),
    v = l(127654),
    E = l(979956),
    b = l(228392),
    I = l(404616),
    C = l(470623),
    j = l(981631),
    M = l(231338),
    S = l(388032),
    P = l(947251);
function A(e) {
    var t;
    let { threadId: l, attachments: A, sendMessage: Z, transitionState: z, onClose: y } = e,
        T = (0, u.Dt)(),
        N = (0, a.e7)([f.Z], () => f.Z.getChannel(l), [l]),
        R = (0, a.e7)([g.Z], () => g.Z.getGuild(null == N ? void 0 : N.getGuildId()), [N]),
        w = (0, a.e7)([f.Z], () => f.Z.getChannel(null == N ? void 0 : N.parent_id), [N]),
        L = null === (t = A[0]) || void 0 === t ? void 0 : t.item,
        [k, U] = i.useState(null);
    i.useEffect(() => {
        null != L && (0, m.Fq)(L.file, (e, t) => U(e), M.dG);
    }, [L]);
    let B =
            null != L && null != k
                ? {
                      src: k,
                      width: I.TJ,
                      height: I.Lp,
                      spoiler: A[0].spoiler,
                      alt: A[0].description
                  }
                : null,
        [D, G] = i.useState(!1),
        O = i.useCallback(() => {
            (0, b.xI)({ added: !1 }), Z(), y();
        }, [Z, y]),
        $ = i.useCallback(() => {
            null != N &&
                null != R &&
                ((0, b.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: l, setIsUploading: n, guild: i, onClose: a } = e,
                        o = new d.Z(j.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    o.on('start', () => {
                        n(!0);
                    }),
                        o.on('progress', (e) => {
                            let r = (0, x.dg)(i.id);
                            e.currentSize > r && (o.cancel(), n(!1), a(), (0, v.G)(t, (0, E.KZ)(l)));
                        }),
                        o.on('error', (e, l, i) => {
                            n(!1), l === j.evJ.EXPLICIT_CONTENT && (a(), r.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(t.id, h.d.ChannelMessage));
                        }),
                        o.on('complete', () => {
                            n(!1), a(), s.Z.clearAll(t.id, h.d.ChannelMessage);
                        });
                    let u = p.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != u ? u.attachments : [];
                    o.uploadFiles(l, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: N,
                    attachments: A,
                    setIsUploading: G,
                    guild: R,
                    onClose: y
                }));
        }, [N, A, G, R, y]);
    return null == w
        ? null
        : (0, n.jsxs)(o.ModalRoot, {
              transitionState: z,
              size: o.ModalSize.SMALL,
              className: P.modalRoot,
              'aria-labelledby': T,
              children: [
                  (0, n.jsxs)(o.ModalContent, {
                      className: P.modal,
                      children: [
                          (0, n.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              className: P.header,
                              id: T,
                              children: S.intl.string(S.t.hMWWMT)
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: P.__invalid_body,
                              children: S.intl.string(S.t.zMsUsr)
                          }),
                          (0, n.jsx)('div', {
                              className: P.forumPost,
                              children: (0, n.jsx)(C.oL, {
                                  createStore: () => (0, C.NU)(w),
                                  children: (0, n.jsx)(I.ZP, {
                                      threadId: l,
                                      goToThread: M.dG,
                                      overrideMedia: B
                                  })
                              })
                          })
                      ]
                  }),
                  (0, n.jsxs)(o.ModalFooter, {
                      className: P.modalFooter,
                      children: [
                          (0, n.jsx)(o.Button, {
                              look: o.Button.Looks.BLANK,
                              className: P.cancelButton,
                              disabled: D,
                              onClick: y,
                              children: S.intl.string(S.t['ETE/oK'])
                          }),
                          (0, n.jsx)(o.Button, {
                              color: o.Button.Colors.PRIMARY,
                              className: P.dontAddButton,
                              disabled: D,
                              onClick: O,
                              children: S.intl.string(S.t['8rKVHB'])
                          }),
                          (0, n.jsx)(o.Button, {
                              color: o.Button.Colors.BRAND,
                              className: P.__invalid_button,
                              submitting: D,
                              onClick: $,
                              autoFocus: !0,
                              children: S.intl.string(S.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
