t.d(e, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    u = t(471253),
    a = t(146085),
    o = t(496675),
    c = t(388032);
function d(n, e) {
    let t = (0, l.e7)([o.Z], () => o.Z.can(a.yP, n), [n]);
    return null != e && t
        ? (0, i.jsx)(r.MenuItem, {
              id: 'end-stage',
              label: c.intl.string(c.t.saZaRU),
              color: 'danger',
              action: function () {
                  (0, r.openModal)((e) =>
                      (0, i.jsx)(r.ConfirmModal, {
                          ...e,
                          header: c.intl.string(c.t.gW9je3),
                          confirmText: c.intl.string(c.t.saZaRU),
                          cancelText: c.intl.string(c.t['ETE/oK']),
                          onConfirm: () => (0, u.NZ)(n),
                          children: (0, i.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'header-secondary',
                              children: c.intl.string(c.t.mT7jwM)
                          })
                      })
                  );
              }
          })
        : null;
}
