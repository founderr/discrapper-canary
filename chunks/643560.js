n.r(t),
    n.d(t, {
        default: function () {
            return h;
        }
    });
var i = n(200651),
    l = n(192379),
    r = n(481060),
    s = n(239091),
    a = n(299206),
    o = n(726521),
    c = n(99325),
    u = n(683818),
    d = n(388032);
function h(e) {
    let { entry: t, onSelect: h, closePopout: m, hideEditButton: p = !1 } = e,
        { isEntryAdmin: f, canEdit: g, canRemove: C } = (0, u.Z)(t),
        x = (0, a.Z)({
            id: t.guildId,
            label: d.intl.string(d.t['94lLDw']),
            onSuccess: m
        });
    l.useEffect(() => {
        !g && !C && null == x && (0, s.Zy)();
    });
    let v = () => {
        c.kx(t.channelId, t.guildId);
    };
    function _() {
        (0, s.Zy)(), null == m || m();
    }
    return (0, i.jsxs)(r.Menu, {
        navId: 'guild-entry-context',
        onClose: _,
        'aria-label': d.intl.string(d.t.HpQykZ),
        onSelect: h,
        children: [
            (0, i.jsxs)(r.MenuGroup, {
                children: [
                    g && !p
                        ? (0, i.jsx)(r.MenuItem, {
                              id: 'update-entry',
                              label: d.intl.string(d.t.XnuOvL),
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
                              label: d.intl.string(d.t.KUxYWF),
                              action: function () {
                                  (0, r.openModal)((e) =>
                                      (0, i.jsx)(r.ConfirmModal, {
                                          header: d.intl.string(d.t.KUxYWF),
                                          confirmText: d.intl.string(d.t.N86XcH),
                                          cancelText: d.intl.string(d.t['ETE/oK']),
                                          onConfirm: v,
                                          ...e,
                                          children: (0, i.jsx)(r.Text, {
                                              variant: 'text-md/normal',
                                              children: d.intl.format(d.t['/5y0ub'], { guildName: t.name })
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
                                  label: d.intl.string(d.t.Aen9en),
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
