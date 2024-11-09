i.r(t),
    i.d(t, {
        default: function () {
            return y;
        }
    }),
    i(47120);
var l = i(200651),
    n = i(192379),
    a = i(442837),
    s = i(481060),
    o = i(904245),
    r = i(166459),
    d = i(680287),
    u = i(313201),
    c = i(247206),
    m = i(813197),
    f = i(592125),
    h = i(703558),
    g = i(430824),
    p = i(375954),
    x = i(403182),
    _ = i(709054),
    b = i(127654),
    v = i(979956),
    E = i(228392),
    M = i(404616),
    j = i(470623),
    C = i(981631),
    I = i(231338),
    S = i(388032),
    P = i(947251);
function y(e) {
    var t;
    let { threadId: i, attachments: y, sendMessage: T, transitionState: z, onClose: A } = e,
        w = (0, u.Dt)(),
        Z = (0, a.e7)([f.Z], () => f.Z.getChannel(i), [i]),
        N = (0, a.e7)([g.Z], () => g.Z.getGuild(null == Z ? void 0 : Z.getGuildId()), [Z]),
        L = (0, a.e7)([f.Z], () => f.Z.getChannel(null == Z ? void 0 : Z.parent_id), [Z]),
        R = null === (t = y[0]) || void 0 === t ? void 0 : t.item,
        [B, U] = n.useState(null);
    n.useEffect(() => {
        null != R && (0, m.Fq)(R.file, (e, t) => U(e), I.dG);
    }, [R]);
    let k =
            null != R && null != B
                ? {
                      src: B,
                      width: M.TJ,
                      height: M.Lp,
                      spoiler: y[0].spoiler,
                      alt: y[0].description
                  }
                : null,
        [D, O] = n.useState(!1),
        G = n.useCallback(() => {
            (0, E.xI)({ added: !1 }), T(), A();
        }, [T, A]),
        $ = n.useCallback(() => {
            null != Z &&
                null != N &&
                ((0, E.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: i, setIsUploading: l, guild: n, onClose: a } = e,
                        s = new d.Z(C.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        l(!0);
                    }),
                        s.on('progress', (e) => {
                            let o = (0, x.dg)(n.id);
                            e.currentSize > o && (s.cancel(), l(!1), a(), (0, b.G)(t, (0, v.KZ)(i)));
                        }),
                        s.on('error', (e, i, n) => {
                            l(!1), i === C.evJ.EXPLICIT_CONTENT && (a(), o.Z.sendExplicitMediaClydeError(t.id, null == n ? void 0 : n.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, h.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            l(!1), a(), r.Z.clearAll(t.id, h.d.ChannelMessage);
                        });
                    let u = p.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != u ? u.attachments : [];
                    s.uploadFiles(i, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: Z,
                    attachments: y,
                    setIsUploading: O,
                    guild: N,
                    onClose: A
                }));
        }, [Z, y, O, N, A]);
    return null == L
        ? null
        : (0, l.jsxs)(s.ModalRoot, {
              transitionState: z,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              'aria-labelledby': w,
              children: [
                  (0, l.jsxs)(s.ModalContent, {
                      className: P.modal,
                      children: [
                          (0, l.jsx)(s.Heading, {
                              variant: 'heading-md/semibold',
                              className: P.header,
                              id: w,
                              children: S.intl.string(S.t.hMWWMT)
                          }),
                          (0, l.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: P.__invalid_body,
                              children: S.intl.string(S.t.zMsUsr)
                          }),
                          (0, l.jsx)('div', {
                              className: P.forumPost,
                              children: (0, l.jsx)(j.oL, {
                                  createStore: () => (0, j.NU)(L),
                                  children: (0, l.jsx)(M.ZP, {
                                      threadId: i,
                                      goToThread: I.dG,
                                      overrideMedia: k
                                  })
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)(s.ModalFooter, {
                      className: P.modalFooter,
                      children: [
                          (0, l.jsx)(s.Button, {
                              look: s.Button.Looks.BLANK,
                              className: P.cancelButton,
                              disabled: D,
                              onClick: A,
                              children: S.intl.string(S.t['ETE/oK'])
                          }),
                          (0, l.jsx)(s.Button, {
                              color: s.Button.Colors.PRIMARY,
                              className: P.dontAddButton,
                              disabled: D,
                              onClick: G,
                              children: S.intl.string(S.t['8rKVHB'])
                          }),
                          (0, l.jsx)(s.Button, {
                              color: s.Button.Colors.BRAND,
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
