t.d(n, {
    Z: function () {
        return r;
    }
});
var l = t(200651);
t(192379);
var i = t(481060),
    a = t(695346),
    u = t(981631);
function r(e, n) {
    a.qF.getSetting()
        ? (0, i.openModalLazy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('8821'), t.e('50753')]).then(t.bind(t, 601572));
                  return (t) =>
                      (0, l.jsx)(n, {
                          ...t,
                          onEnable: e,
                          videoEnabled: !1
                      });
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: n === u.IlC.POPOUT ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT
              }
          )
        : null == e || e();
}
