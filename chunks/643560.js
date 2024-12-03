n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    a = n(239091),
    s = n(299206),
    o = n(726521),
    c = n(99325),
    d = n(683818),
    u = n(388032);
function h(e) {
    let { entry: t, onSelect: h, closePopout: p, hideEditButton: m = !1 } = e,
        { isEntryAdmin: f, canEdit: g, canRemove: C } = (0, d.Z)(t),
        x = (0, s.Z)({
            id: t.guildId,
            label: u.intl.string(u.t['94lLDw']),
            onSuccess: p
        });
    l.useEffect(() => {
        !g && !C && null == x && (0, a.Zy)();
    });
    let v = () => {
        c.kx(t.channelId, t.guildId);
    };
    function _() {
        (0, a.Zy)(), null == p || p();
    }
    return (0, i.jsxs)(r.Menu, {
        navId: 'guild-entry-context',
        onClose: _,
        'aria-label': u.intl.string(u.t.HpQykZ),
        onSelect: h,
        children: [
            (0, i.jsxs)(r.MenuGroup, {
                children: [
                    g && !m
                        ? (0, i.jsx)(r.MenuItem, {
                              id: 'update-entry',
                              label: u.intl.string(u.t.XnuOvL),
                              action: function () {
                                  (0, r.openModalLazy)(async () => {
                                      let { default: e } = await n.e('34191').then(n.bind(n, 303647));
                                      return (n) =>
                                          (0, i.jsx)(e, {
                                              ...n,
                                              entry: t
                                          });
                                  }),
                                      _();
                              }
                          })
                        : null,
                    C
                        ? (0, i.jsx)(r.MenuItem, {
                              id: 'remove-from-hub',
                              label: u.intl.string(u.t.KUxYWF),
                              action: function () {
                                  (0, r.openModal)((e) =>
                                      (0, i.jsx)(r.ConfirmModal, {
                                          header: u.intl.string(u.t.KUxYWF),
                                          confirmText: u.intl.string(u.t.N86XcH),
                                          cancelText: u.intl.string(u.t['ETE/oK']),
                                          onConfirm: v,
                                          ...e,
                                          children: (0, i.jsx)(r.Text, {
                                              variant: 'text-md/normal',
                                              children: u.intl.format(u.t['/5y0ub'], { guildName: t.name })
                                          })
                                      })
                                  ),
                                      _();
                              },
                              color: 'danger'
                          })
                        : null,
                    f
                        ? null
                        : (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)(r.MenuItem, {
                                  id: 'report-server-listing',
                                  label: u.intl.string(u.t.Aen9en),
                                  action: function () {
                                      null != t && ((0, o.sq)(t), _());
                                  },
                                  icon: r.FlagIcon,
                                  color: 'danger'
                              })
                          })
                ]
            }),
            (0, i.jsx)(r.MenuGroup, { children: x })
        ]
    });
}
