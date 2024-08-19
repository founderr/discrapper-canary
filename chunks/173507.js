t.d(n, {
    Z: function () {
        return s;
    }
});
var l = t(735250);
t(470079);
var a = t(481060),
    i = t(695346),
    r = t(981631);
function s(e, n) {
    i.qF.getSetting()
        ? (0, a.openModalLazy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('5528'), t.e('59967')]).then(t.bind(t, 601572));
                  return (t) =>
                      (0, l.jsx)(n, {
                          ...t,
                          onEnable: e,
                          videoEnabled: !1
                      });
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: n === r.IlC.POPOUT ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT
              }
          )
        : null == e || e();
}
