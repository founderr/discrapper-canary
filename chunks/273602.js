i.r(t),
    i.d(t, {
        default: function () {
            return z;
        }
    }),
    i(47120);
var n = i(200651),
    l = i(192379),
    a = i(442837),
    s = i(481060),
    r = i(904245),
    o = i(166459),
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
    v = i(127654),
    E = i(979956),
    b = i(228392),
    I = i(404616),
    j = i(470623),
    C = i(981631),
    M = i(231338),
    S = i(388032),
    P = i(947251);
function z(e) {
    var t;
    let { threadId: i, attachments: z, sendMessage: A, transitionState: y, onClose: T } = e,
        Z = (0, u.Dt)(),
        w = (0, a.e7)([f.Z], () => f.Z.getChannel(i), [i]),
        L = (0, a.e7)([g.Z], () => g.Z.getGuild(null == w ? void 0 : w.getGuildId()), [w]),
        N = (0, a.e7)([f.Z], () => f.Z.getChannel(null == w ? void 0 : w.parent_id), [w]),
        R = null === (t = z[0]) || void 0 === t ? void 0 : t.item,
        [B, U] = l.useState(null);
    l.useEffect(() => {
        null != R && (0, m.Fq)(R.file, (e, t) => U(e), M.dG);
    }, [R]);
    let D =
            null != R && null != B
                ? {
                      src: B,
                      width: I.TJ,
                      height: I.Lp,
                      spoiler: z[0].spoiler,
                      alt: z[0].description
                  }
                : null,
        [k, G] = l.useState(!1),
        O = l.useCallback(() => {
            (0, b.xI)({ added: !1 }), A(), T();
        }, [A, T]),
        $ = l.useCallback(() => {
            null != w &&
                null != L &&
                ((0, b.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: i, setIsUploading: n, guild: l, onClose: a } = e,
                        s = new d.Z(C.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        n(!0);
                    }),
                        s.on('progress', (e) => {
                            let r = (0, x.dg)(l.id);
                            e.currentSize > r && (s.cancel(), n(!1), a(), (0, v.G)(t, (0, E.KZ)(i)));
                        }),
                        s.on('error', (e, i, l) => {
                            n(!1), i === C.evJ.EXPLICIT_CONTENT && (a(), r.Z.sendExplicitMediaClydeError(t.id, null == l ? void 0 : l.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), o.Z.clearAll(t.id, h.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            n(!1), a(), o.Z.clearAll(t.id, h.d.ChannelMessage);
                        });
                    let u = p.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != u ? u.attachments : [];
                    s.uploadFiles(i, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: w,
                    attachments: z,
                    setIsUploading: G,
                    guild: L,
                    onClose: T
                }));
        }, [w, z, G, L, T]);
    return null == N
        ? null
        : (0, n.jsxs)(s.ModalRoot, {
              transitionState: y,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              'aria-labelledby': Z,
              children: [
                  (0, n.jsxs)(s.ModalContent, {
                      className: P.modal,
                      children: [
                          (0, n.jsx)(s.Heading, {
                              variant: 'heading-md/semibold',
                              className: P.header,
                              id: Z,
                              children: S.intl.string(S.t.hMWWMT)
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: P.__invalid_body,
                              children: S.intl.string(S.t.zMsUsr)
                          }),
                          (0, n.jsx)('div', {
                              className: P.forumPost,
                              children: (0, n.jsx)(j.oL, {
                                  createStore: () => (0, j.NU)(N),
                                  children: (0, n.jsx)(I.ZP, {
                                      threadId: i,
                                      goToThread: M.dG,
                                      overrideMedia: D
                                  })
                              })
                          })
                      ]
                  }),
                  (0, n.jsxs)(s.ModalFooter, {
                      className: P.modalFooter,
                      children: [
                          (0, n.jsx)(s.Button, {
                              look: s.Button.Looks.BLANK,
                              className: P.cancelButton,
                              disabled: k,
                              onClick: T,
                              children: S.intl.string(S.t['ETE/oK'])
                          }),
                          (0, n.jsx)(s.Button, {
                              color: s.Button.Colors.PRIMARY,
                              className: P.dontAddButton,
                              disabled: k,
                              onClick: O,
                              children: S.intl.string(S.t['8rKVHB'])
                          }),
                          (0, n.jsx)(s.Button, {
                              color: s.Button.Colors.BRAND,
                              className: P.__invalid_button,
                              submitting: k,
                              onClick: $,
                              autoFocus: !0,
                              children: S.intl.string(S.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
