l.r(t),
    l.d(t, {
        default: function () {
            return Z;
        }
    }),
    l(47120);
var n = l(200651),
    i = l(192379),
    a = l(442837),
    o = l(481060),
    s = l(904245),
    r = l(166459),
    d = l(680287),
    u = l(313201),
    c = l(247206),
    m = l(813197),
    f = l(592125),
    g = l(703558),
    h = l(430824),
    p = l(375954),
    x = l(403182),
    _ = l(709054),
    v = l(127654),
    I = l(979956),
    b = l(228392),
    j = l(404616),
    C = l(470623),
    E = l(981631),
    M = l(231338),
    P = l(388032),
    A = l(947251);
function Z(e) {
    var t;
    let { threadId: l, attachments: Z, sendMessage: S, transitionState: z, onClose: T } = e,
        y = (0, u.Dt)(),
        N = (0, a.e7)([f.Z], () => f.Z.getChannel(l), [l]),
        R = (0, a.e7)([h.Z], () => h.Z.getGuild(null == N ? void 0 : N.getGuildId()), [N]),
        L = (0, a.e7)([f.Z], () => f.Z.getChannel(null == N ? void 0 : N.parent_id), [N]),
        w = null === (t = Z[0]) || void 0 === t ? void 0 : t.item,
        [U, k] = i.useState(null);
    i.useEffect(() => {
        null != w && (0, m.Fq)(w.file, (e, t) => k(e), M.dG);
    }, [w]);
    let B =
            null != w && null != U
                ? {
                      src: U,
                      width: j.TJ,
                      height: j.Lp,
                      spoiler: Z[0].spoiler,
                      alt: Z[0].description
                  }
                : null,
        [D, G] = i.useState(!1),
        O = i.useCallback(() => {
            (0, b.xI)({ added: !1 }), S(), T();
        }, [S, T]),
        $ = i.useCallback(() => {
            null != N &&
                null != R &&
                ((0, b.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: l, setIsUploading: n, guild: i, onClose: a } = e,
                        o = new d.Z(E.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    o.on('start', () => {
                        n(!0);
                    }),
                        o.on('progress', (e) => {
                            let s = (0, x.dg)(i.id);
                            e.currentSize > s && (o.cancel(), n(!1), a(), (0, v.G)(t, (0, I.KZ)(l)));
                        }),
                        o.on('error', (e, l, i) => {
                            n(!1), l === E.evJ.EXPLICIT_CONTENT && (a(), s.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        o.on('complete', () => {
                            n(!1), a(), r.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let u = p.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != u ? u.attachments : [];
                    o.uploadFiles(l, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: N,
                    attachments: Z,
                    setIsUploading: G,
                    guild: R,
                    onClose: T
                }));
        }, [N, Z, G, R, T]);
    return null == L
        ? null
        : (0, n.jsxs)(o.ModalRoot, {
              transitionState: z,
              size: o.ModalSize.SMALL,
              className: A.modalRoot,
              'aria-labelledby': y,
              children: [
                  (0, n.jsxs)(o.ModalContent, {
                      className: A.modal,
                      children: [
                          (0, n.jsx)(o.Heading, {
                              variant: 'heading-md/semibold',
                              className: A.header,
                              id: y,
                              children: P.intl.string(P.t.hMWWMT)
                          }),
                          (0, n.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: A.__invalid_body,
                              children: P.intl.string(P.t.zMsUsr)
                          }),
                          (0, n.jsx)('div', {
                              className: A.forumPost,
                              children: (0, n.jsx)(C.oL, {
                                  channel: L,
                                  children: (0, n.jsx)(j.ZP, {
                                      threadId: l,
                                      goToThread: M.dG,
                                      overrideMedia: B
                                  })
                              })
                          })
                      ]
                  }),
                  (0, n.jsxs)(o.ModalFooter, {
                      className: A.modalFooter,
                      children: [
                          (0, n.jsx)(o.Button, {
                              look: o.Button.Looks.BLANK,
                              className: A.cancelButton,
                              disabled: D,
                              onClick: T,
                              children: P.intl.string(P.t['ETE/oK'])
                          }),
                          (0, n.jsx)(o.Button, {
                              color: o.Button.Colors.PRIMARY,
                              className: A.dontAddButton,
                              disabled: D,
                              onClick: O,
                              children: P.intl.string(P.t['8rKVHB'])
                          }),
                          (0, n.jsx)(o.Button, {
                              color: o.Button.Colors.BRAND,
                              className: A.__invalid_button,
                              submitting: D,
                              onClick: $,
                              autoFocus: !0,
                              children: P.intl.string(P.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
