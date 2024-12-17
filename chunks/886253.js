t.d(n, {
    A: function () {
        return j;
    }
});
var l = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    a = t(264043),
    r = t(812206),
    s = t(926061),
    c = t(757746),
    d = t(314897),
    u = t(572004),
    m = t(601911),
    x = t(504211),
    h = t(533159),
    f = t(981631),
    v = t(388032),
    p = t(671702),
    _ = t(689762);
function j(e) {
    let { appId: n, skuId: t, transitionState: j, onClose: N, onHeaderTitleClick: I, children: S, footer: C } = e,
        b = (0, o.e7)([d.default], () => d.default.isAuthenticated()),
        B = (0, s.YP)({ location: 'store_modal' }),
        T = (0, o.e7)(
            [r.Z, a.Z],
            () => {
                var e;
                return null !== (e = r.Z.getApplication(n)) && void 0 !== e ? e : a.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: g } = (0, c.Z)(t);
    if (null == T) return null;
    let k = (0, m.y)(T, 25),
        { termsOfServiceUrl: R, privacyPolicyUrl: E } = T;
    return (null == g ? void 0 : g.applicationId) !== n
        ? (0, l.jsxs)(i.ModalRoot, {
              transitionState: j,
              size: i.ModalSize.SMALL,
              children: [
                  (0, l.jsxs)(i.ModalContent, {
                      className: _.content,
                      children: [
                          (0, l.jsx)(i.ModalCloseButton, {
                              onClick: N,
                              className: p.modalCloseBtn
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: _.unavailableTitle,
                              children: v.intl.string(v.t['0Bf80N'])
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: _.unavailableBody,
                              children: v.intl.string(v.t.omH3bm)
                          })
                      ]
                  }),
                  (0, l.jsx)(i.ModalFooter, {
                      children: (0, l.jsx)(i.Button, {
                          className: _.button,
                          color: i.Button.Colors.BRAND,
                          onClick: N,
                          size: i.Button.Sizes.LARGE,
                          children: v.intl.string(v.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, l.jsxs)(i.ModalRoot, {
              transitionState: j,
              size: i.ModalSize.DYNAMIC,
              className: _.modal,
              children: [
                  (0, l.jsxs)(i.ModalHeader, {
                      className: p.modalHeader,
                      children: [
                          (0, l.jsxs)(i.Clickable, {
                              className: p.modalTitle,
                              onClick: I,
                              children: [
                                  null != k &&
                                      (0, l.jsx)('img', {
                                          src: k.href,
                                          alt: '',
                                          className: _.appIcon
                                      }),
                                  (0, l.jsx)(i.Heading, {
                                      variant: 'heading-md/semibold',
                                      children: T.name
                                  })
                              ]
                          }),
                          (0, l.jsx)(i.ModalCloseButton, {
                              onClick: N,
                              className: p.modalCloseBtn
                          })
                      ]
                  }),
                  S,
                  (0, l.jsxs)(i.ModalFooter, {
                      className: _.footer,
                      children: [
                          null != R || null != E
                              ? (0, l.jsx)(i.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, l.jsx)(h.Z, {
                                        termsOfServiceUrl: R,
                                        privacyPolicyUrl: E
                                    })
                                })
                              : (0, l.jsx)(i.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: v.intl.string(v.t['3ZY+0N'])
                                }),
                          (0, l.jsxs)('div', {
                              className: _.footerButtons,
                              children: [
                                  u.wS &&
                                      (0, l.jsx)(i.Button, {
                                          look: i.Button.Looks.FILLED,
                                          size: i.Button.Sizes.ICON,
                                          color: i.Button.Colors.PRIMARY,
                                          'aria-label': v.intl.string(v.t.WqhZsr),
                                          className: _.linkButton,
                                          innerClassName: _.innerLinkButton,
                                          onClick: () => {
                                              let e = ''
                                                  .concat(location.protocol, '//')
                                                  .concat(location.host)
                                                  .concat(B && b ? f.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t) : f.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                              (0, u.JG)(e), (0, i.showToast)((0, i.createToast)(v.intl.string(v.t['L/PwZW']), i.ToastType.SUCCESS)), (0, x.X)(n, x.B.DETAILS_MODAL, t);
                                          },
                                          children: (0, l.jsx)(i.LinkIcon, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  C
                              ]
                          })
                      ]
                  })
              ]
          });
}
