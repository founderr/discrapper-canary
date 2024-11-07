n.r(t),
    n.d(t, {
        default: function () {
            return y;
        }
    }),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(904245),
    r = n(166459),
    d = n(680287),
    u = n(313201),
    c = n(247206),
    m = n(813197),
    f = n(592125),
    h = n(703558),
    g = n(430824),
    p = n(375954),
    x = n(403182),
    _ = n(709054),
    v = n(127654),
    b = n(979956),
    E = n(228392),
    I = n(404616),
    M = n(470623),
    j = n(981631),
    C = n(231338),
    S = n(388032),
    P = n(947251);
function y(e) {
    var t;
    let { threadId: n, attachments: y, sendMessage: z, transitionState: T, onClose: A } = e,
        w = (0, u.Dt)(),
        Z = (0, a.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        N = (0, a.e7)([g.Z], () => g.Z.getGuild(null == Z ? void 0 : Z.getGuildId()), [Z]),
        L = (0, a.e7)([f.Z], () => f.Z.getChannel(null == Z ? void 0 : Z.parent_id), [Z]),
        R = null === (t = y[0]) || void 0 === t ? void 0 : t.item,
        [B, D] = l.useState(null);
    l.useEffect(() => {
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
        [k, G] = l.useState(!1),
        O = l.useCallback(() => {
            (0, E.xI)({ added: !1 }), z(), A();
        }, [z, A]),
        $ = l.useCallback(() => {
            null != Z &&
                null != N &&
                ((0, E.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: n, setIsUploading: i, guild: l, onClose: a } = e,
                        s = new d.Z(j.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        i(!0);
                    }),
                        s.on('progress', (e) => {
                            let o = (0, x.dg)(l.id);
                            e.currentSize > o && (s.cancel(), i(!1), a(), (0, v.G)(t, (0, b.KZ)(n)));
                        }),
                        s.on('error', (e, n, l) => {
                            i(!1), n === j.evJ.EXPLICIT_CONTENT && (a(), o.Z.sendExplicitMediaClydeError(t.id, null == l ? void 0 : l.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, h.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            i(!1), a(), r.Z.clearAll(t.id, h.d.ChannelMessage);
                        });
                    let u = p.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != u ? u.attachments : [];
                    s.uploadFiles(n, { attachments: [...m] }, { addFilesTo: 'attachments' });
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
        : (0, i.jsxs)(s.ModalRoot, {
              transitionState: T,
              size: s.ModalSize.SMALL,
              className: P.modalRoot,
              'aria-labelledby': w,
              children: [
                  (0, i.jsxs)(s.ModalContent, {
                      className: P.modal,
                      children: [
                          (0, i.jsx)(s.Heading, {
                              variant: 'heading-md/semibold',
                              className: P.header,
                              id: w,
                              children: S.intl.string(S.t.hMWWMT)
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: P.__invalid_body,
                              children: S.intl.string(S.t.zMsUsr)
                          }),
                          (0, i.jsx)('div', {
                              className: P.forumPost,
                              children: (0, i.jsx)(M.oL, {
                                  createStore: () => (0, M.NU)(L),
                                  children: (0, i.jsx)(I.ZP, {
                                      threadId: n,
                                      goToThread: C.dG,
                                      overrideMedia: U
                                  })
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)(s.ModalFooter, {
                      className: P.modalFooter,
                      children: [
                          (0, i.jsx)(s.Button, {
                              look: s.Button.Looks.BLANK,
                              className: P.cancelButton,
                              disabled: k,
                              onClick: A,
                              children: S.intl.string(S.t['ETE/oK'])
                          }),
                          (0, i.jsx)(s.Button, {
                              color: s.Button.Colors.PRIMARY,
                              className: P.dontAddButton,
                              disabled: k,
                              onClick: O,
                              children: S.intl.string(S.t['8rKVHB'])
                          }),
                          (0, i.jsx)(s.Button, {
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
