e.r(n),
    e.d(n, {
        default: function () {
            return b;
        }
    }),
    e(47120);
var l = e(200651),
    a = e(192379),
    s = e(442837),
    i = e(481060),
    o = e(91176),
    r = e(906732),
    c = e(346486),
    u = e(313201),
    d = e(594174),
    h = e(626135),
    m = e(71619),
    p = e(590433),
    f = e(981631),
    v = e(388032),
    x = e(757621);
function b(t) {
    var n, e;
    let { guildId: b, userId: g, anaylticsLocations: C, transitionState: y, onClose: j } = t,
        k = (0, u.Dt)(),
        { analyticsLocations: w } = (0, r.ZP)(),
        D = null !== (e = null !== (n = null == C ? void 0 : C[0]) && void 0 !== n ? n : null == w ? void 0 : w[0]) && void 0 !== e ? e : null,
        _ = (0, s.e7)([d.default], () => d.default.getUser(g), [g]),
        [T, N] = (0, m.ZP)(g, b),
        [I, E] = a.useState(!1),
        S = a.useCallback(async () => {
            if (null != _) {
                E(!0);
                try {
                    await o.Z.setCommunicationDisabledDuration(b, g, null, null, D), (0, i.showToast)((0, i.createToast)(v.intl.string(v.t['/Mmbfn']), i.ToastType.SUCCESS)), j();
                } catch (t) {
                    (0, i.showToast)((0, i.createToast)(v.intl.string(v.t.epyCur), i.ToastType.FAILURE));
                } finally {
                    E(!1);
                }
            }
        }, [b, _, g, j, D]),
        M = a.useCallback(() => {
            !N && j();
        }, [N, j]);
    return (a.useEffect(() => {
        if (null != _)
            h.default.track(f.rMx.OPEN_MODAL, {
                type: p.av,
                guild_id: b,
                other_user_id: _.id
            });
    }, []),
    a.useEffect(() => {
        (null == _ || null == b) && j();
    }),
    null == _ || null == b)
        ? null
        : (0, l.jsxs)(i.ModalRoot, {
              transitionState: y,
              'aria-labelledby': k,
              children: [
                  (0, l.jsxs)(i.ModalHeader, {
                      className: x.header,
                      separator: !1,
                      children: [
                          (0, l.jsx)(i.Heading, {
                              variant: 'heading-lg/semibold',
                              children: v.intl.string(v.t['+ZD3oq'])
                          }),
                          (0, l.jsx)(i.Clickable, {
                              onClick: j,
                              className: x.closeButton,
                              'aria-label': v.intl.string(v.t.cpT0Cg),
                              children: (0, l.jsx)(i.XSmallIcon, {
                                  size: 'xs',
                                  color: 'currentColor',
                                  className: x.closeIcon
                              })
                          })
                      ]
                  }),
                  (0, l.jsxs)(i.ModalContent, {
                      children: [
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t['t+abNT'], {
                                  username: _.username,
                                  countdown: (t) =>
                                      null == T
                                          ? null
                                          : (0, l.jsx)(c.Z, {
                                                className: x.countdown,
                                                deadline: new Date(T),
                                                onInterval: M,
                                                showUnits: !0,
                                                stopAtOneSec: !0
                                            })
                              })
                          }),
                          (0, l.jsx)(i.Text, {
                              className: x.cta,
                              variant: 'text-md/normal',
                              color: 'interactive-normal',
                              children: v.intl.format(v.t.KtENkJ, { link: p.cu })
                          })
                      ]
                  }),
                  (0, l.jsxs)(i.ModalFooter, {
                      children: [
                          (0, l.jsx)(i.Button, {
                              color: i.Button.Colors.RED,
                              onClick: S,
                              submitting: I,
                              children: v.intl.string(v.t.qXtNtb)
                          }),
                          (0, l.jsx)(i.Button, {
                              type: 'button',
                              look: i.Button.Looks.LINK,
                              color: i.Button.Colors.PRIMARY,
                              onClick: j,
                              children: v.intl.string(v.t['ETE/oK'])
                          })
                      ]
                  })
              ]
          });
}
