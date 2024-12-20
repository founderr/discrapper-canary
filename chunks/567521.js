t.d(e, {
    Z: function () {
        return c;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(471253),
    o = t(146085),
    a = t(496675),
    d = t(388032);
function c(n, e) {
    let t = (0, l.e7)([a.Z], () => a.Z.can(o.yP, n), [n]);
    return null != e && t
        ? (0, i.jsx)(r.MenuItem, {
              id: 'end-stage',
              label: d.intl.string(d.t.saZaRU),
              color: 'danger',
              action: function () {
                  (0, r.openModal)((e) =>
                      (0, i.jsx)(r.ConfirmModal, {
                          ...e,
                          header: d.intl.string(d.t.gW9je3),
                          confirmText: d.intl.string(d.t.saZaRU),
                          cancelText: d.intl.string(d.t['ETE/oK']),
                          onConfirm: () => (0, u.NZ)(n),
                          children: (0, i.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: d.intl.string(d.t.mT7jwM)
                          })
                      })
                  );
              }
          })
        : null;
}
