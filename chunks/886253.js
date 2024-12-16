t.d(n, {
    A: function () {
        return _;
    }
});
var l = t(200651);
t(192379);
var o = t(442837),
    i = t(481060),
    a = t(264043),
    r = t(812206),
    s = t(352057),
    c = t(757746),
    d = t(572004),
    u = t(601911),
    m = t(504211),
    x = t(533159),
    h = t(981631),
    v = t(388032),
    f = t(671702),
    p = t(689762);
function _(e) {
    let { appId: n, skuId: t, transitionState: _, onClose: j, onHeaderTitleClick: N, children: I, footer: S } = e,
        C = (0, s.h$)({ location: 'store_modal' }),
        b = (0, o.e7)(
            [r.Z, a.Z],
            () => {
                var e;
                return null !== (e = r.Z.getApplication(n)) && void 0 !== e ? e : a.Z.getApplicationRecord(n);
            },
            [n]
        ),
        { data: B } = (0, c.Z)(t);
    if (null == b) return null;
    let T = (0, u.y)(b, 25),
        { termsOfServiceUrl: g, privacyPolicyUrl: k } = b;
    return (null == B ? void 0 : B.applicationId) !== n
        ? (0, l.jsxs)(i.ModalRoot, {
              transitionState: _,
              size: i.ModalSize.SMALL,
              children: [
                  (0, l.jsxs)(i.ModalContent, {
                      className: p.content,
                      children: [
                          (0, l.jsx)(i.ModalCloseButton, {
                              onClick: j,
                              className: f.modalCloseBtn
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-lg/semibold',
                              color: 'header-primary',
                              className: p.unavailableTitle,
                              children: v.intl.string(v.t['0Bf80N'])
                          }),
                          (0, l.jsx)(i.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              className: p.unavailableBody,
                              children: v.intl.string(v.t.omH3bm)
                          })
                      ]
                  }),
                  (0, l.jsx)(i.ModalFooter, {
                      children: (0, l.jsx)(i.Button, {
                          className: p.button,
                          color: i.Button.Colors.BRAND,
                          onClick: j,
                          size: i.Button.Sizes.LARGE,
                          children: v.intl.string(v.t.BddRzc)
                      })
                  })
              ]
          })
        : (0, l.jsxs)(i.ModalRoot, {
              transitionState: _,
              size: i.ModalSize.DYNAMIC,
              className: p.modal,
              children: [
                  (0, l.jsxs)(i.ModalHeader, {
                      className: f.modalHeader,
                      children: [
                          (0, l.jsxs)(i.Clickable, {
                              className: f.modalTitle,
                              onClick: N,
                              children: [
                                  null != T &&
                                      (0, l.jsx)('img', {
                                          src: T.href,
                                          alt: '',
                                          className: p.appIcon
                                      }),
                                  (0, l.jsx)(i.Heading, {
                                      variant: 'heading-md/semibold',
                                      children: b.name
                                  })
                              ]
                          }),
                          (0, l.jsx)(i.ModalCloseButton, {
                              onClick: j,
                              className: f.modalCloseBtn
                          })
                      ]
                  }),
                  I,
                  (0, l.jsxs)(i.ModalFooter, {
                      className: p.footer,
                      children: [
                          null != g || null != k
                              ? (0, l.jsx)(i.Text, {
                                    color: 'header-primary',
                                    variant: 'text-sm/normal',
                                    children: (0, l.jsx)(x.Z, {
                                        termsOfServiceUrl: g,
                                        privacyPolicyUrl: k
                                    })
                                })
                              : (0, l.jsx)(i.Text, {
                                    color: 'header-primary',
                                    variant: 'text-xs/normal',
                                    children: v.intl.string(v.t['3ZY+0N'])
                                }),
                          (0, l.jsxs)('div', {
                              className: p.footerButtons,
                              children: [
                                  d.wS &&
                                      (0, l.jsx)(i.Button, {
                                          look: i.Button.Looks.FILLED,
                                          size: i.Button.Sizes.ICON,
                                          color: i.Button.Colors.PRIMARY,
                                          'aria-label': v.intl.string(v.t.WqhZsr),
                                          className: p.linkButton,
                                          innerClassName: p.innerLinkButton,
                                          onClick: () => {
                                              let e = ''
                                                  .concat(location.protocol, '//')
                                                  .concat(location.host)
                                                  .concat(C ? h.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU(n, t) : h.Z5c.APPLICATION_DIRECTORY_PROFILE_STORE_SKU(n, t));
                                              (0, d.JG)(e), (0, i.showToast)((0, i.createToast)(v.intl.string(v.t['L/PwZW']), i.ToastType.SUCCESS)), (0, m.X)(n, m.B.DETAILS_MODAL, t);
                                          },
                                          children: (0, l.jsx)(i.LinkIcon, {
                                              size: 'xs',
                                              color: 'currentColor'
                                          })
                                      }),
                                  S
                              ]
                          })
                      ]
                  })
              ]
          });
}
