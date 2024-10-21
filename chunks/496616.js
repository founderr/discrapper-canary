n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(153867),
    l = n(468026),
    r = n(740492),
    o = n(689938);
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
        n = (t) => {
            a.ZP.updatedUnsyncedSettings({ disableEmbeddedActivityPopOutAlert: !0 }), t(), e();
        };
    r.ZP.disableEmbeddedActivityPopOutAlert
        ? e()
        : (0, s.openModal)(
              (s) =>
                  (0, i.jsx)(l.default, {
                      confirmText: o.Z.Messages.EMBEDDED_ACTIVITIES_YEP,
                      secondaryConfirmText: o.Z.Messages.DONT_ASK_AGAIN,
                      title: o.Z.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                      cancelText: o.Z.Messages.EMBEDDED_ACTIVITIES_NVM,
                      onConfirm: () => {
                          s.onClose(), e();
                      },
                      onCancel: t,
                      onConfirmSecondary: () => n(s.onClose),
                      body: o.Z.Messages.EMBEDDED_ACTIVITIES_POP_IN_WARNING,
                      ...s
                  }),
              {},
              s.POPOUT_MODAL_CONTEXT
          );
}
