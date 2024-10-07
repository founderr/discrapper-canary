t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(735250);
t(470079);
var a = t(481060),
    r = t(695346),
    i = t(981631);
function s(e, n) {
    r.qF.getSetting()
        ? (0, a.openModalLazy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('8821'), t.e('62010')]).then(t.bind(t, 601572));
                  return (t) =>
                      (0, l.jsx)(n, {
                          ...t,
                          onEnable: e,
                          videoEnabled: !1
                      });
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: n === i.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
              }
          )
        : null == e || e();
}
