n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    s = n(194359),
    o = n(699516),
    l = n(388032);
function u(e) {
    let { user: t, color: n, location: u, onAction: c } = e;
    return !(0, i.e7)([o.Z], () => o.Z.isFriend(t.id)) || t.isNonUserBot()
        ? null
        : (0, r.jsx)(a.MenuItem, {
              id: 'remove-friend',
              color: n,
              label: l.intl.string(l.t.cvSt1N),
              action: () => {
                  (0, a.openModal)((e) =>
                      (0, r.jsx)(a.ConfirmModal, {
                          header: l.intl.formatToPlainString(l.t.fPLvZW, { name: t.username }),
                          confirmText: l.intl.string(l.t.cvSt1N),
                          cancelText: l.intl.string(l.t['ETE/oK']),
                          onConfirm: () => {
                              null == c || c(), s.Z.removeFriend(t.id, null != u ? { location: u } : void 0);
                          },
                          ...e,
                          children: (0, r.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              children: l.intl.format(l.t.l5FFq6, { name: t.username })
                          })
                      })
                  );
              }
          });
}
