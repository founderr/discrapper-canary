t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(695346),
    a = t(981631);
function o(e, n) {
    l.qF.getSetting()
        ? (0, r.openModalLazy)(
              async () => {
                  let { default: n } = await Promise.all([t.e('8821'), t.e('39607')]).then(t.bind(t, 601572));
                  return (t) =>
                      (0, i.jsx)(n, {
                          ...t,
                          onEnable: e,
                          videoEnabled: !1
                      });
              },
              {
                  modalKey: 'camera-preview',
                  contextKey: n === a.IlC.POPOUT ? r.POPOUT_MODAL_CONTEXT : r.DEFAULT_MODAL_CONTEXT
              }
          )
        : null == e || e();
}
