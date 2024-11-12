l.r(t),
    l.d(t, {
        default: function () {
            return y;
        }
    }),
    l(47120);
var n = l(200651),
    i = l(192379),
    a = l(442837),
    s = l(481060),
    o = l(904245),
    r = l(166459),
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
    M = l(470623),
    j = l(981631),
    C = l(231338),
    S = l(388032),
    P = l(947251);
function y(e) {
    var t;
    let { threadId: l, attachments: y, sendMessage: z, transitionState: T, onClose: A } = e,
        w = (0, u.Dt)(),
        Z = (0, a.e7)([f.Z], () => f.Z.getChannel(l), [l]),
        N = (0, a.e7)([g.Z], () => g.Z.getGuild(null == Z ? void 0 : Z.getGuildId()), [Z]),
        L = (0, a.e7)([f.Z], () => f.Z.getChannel(null == Z ? void 0 : Z.parent_id), [Z]),
        R = null === (t = y[0]) || void 0 === t ? void 0 : t.item,
        [B, D] = i.useState(null);
    i.useEffect(() => {
        null != R && (0, m.Fq)(R.file, (e, t) => D(e), C.dG);
    }, [R]);
    let U =
            null != R && null != B
                ? {
                      src: B,
                      width: I.TJ,
                      height: I.Lp,
                      spoiler: y[0].spoiler,
                      alt: y[0].description
                  }
                : null,
        [k, G] = i.useState(!1),
        O = i.useCallback(() => {
            (0, b.xI)({ added: !1 }), z(), A();
        }, [z, A]),
        $ = i.useCallback(() => {
            null != Z &&
                null != N &&
                ((0, b.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: l, setIsUploading: n, guild: i, onClose: a } = e,
                        s = new d.Z(j.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        n(!0);
                    }),
                        s.on('progress', (e) => {
                            let o = (0, x.dg)(i.id);
                            e.currentSize > o && (s.cancel(), n(!1), a(), (0, v.G)(t, (0, E.KZ)(l)));
                        }),
                        s.on('error', (e, l, i) => {
                            n(!1), l === j.evJ.EXPLICIT_CONTENT && (a(), o.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, h.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            n(!1), a(), r.Z.clearAll(t.id, h.d.ChannelMessage);
                        });
                    let u = p.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != u ? u.attachments : [];
                    s.uploadFiles(l, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: Z,
                    attachments: y,
                    setIsUploading: G,
                    guild: N,
                    onClose: A
                }));
        }, [Z, y, G, N, A]);
    return null == L
        ? null
        : (0, n.jsxs)(s.ModalRoot, {
              transitionState: T,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              'aria-labelledby': w,
              children: [
                  (0, n.jsxs)(s.ModalContent, {
                      className: P.modal,
                      children: [
                          (0, n.jsx)(s.Heading, {
                              variant: 'heading-md/semibold',
                              className: P.header,
                              id: w,
                              children: S.intl.string(S.t.hMWWMT)
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: P.__invalid_body,
                              children: S.intl.string(S.t.zMsUsr)
                          }),
                          (0, n.jsx)('div', {
                              className: P.forumPost,
                              children: (0, n.jsx)(M.oL, {
                                  createStore: () => (0, M.NU)(L),
                                  children: (0, n.jsx)(I.ZP, {
                                      threadId: l,
                                      goToThread: C.dG,
                                      overrideMedia: U
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
                              onClick: A,
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
