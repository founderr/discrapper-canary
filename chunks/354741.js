t.r(e);
var i = t(200651);
t(192379);
var l = t(481060),
    a = t(493683),
    r = t(239091),
    u = t(883385),
    o = t(108843),
    d = t(947440),
    c = t(100527),
    s = t(299206),
    f = t(895563),
    h = t(212205),
    x = t(62420),
    I = t(122074),
    m = t(314897),
    _ = t(858687),
    M = t(461535),
    C = t(776568),
    g = t(981631),
    v = t(388032);
e.default = (0, o.Z)(
    (0, u.Z)(
        function (n) {
            let { channel: e, selected: u, onSelect: o } = n,
                c = e.isOwner(m.default.getId()),
                p = (0, M.Z)(e),
                T = (0, C.ZP)(e),
                j = (0, I.Uf)(g.aIL, e.id, 'top'),
                N = (0, _.Z)(e, u),
                O = (0, s.Z)({
                    id: e.id,
                    label: v.intl.string(v.t.gFHI3t)
                }),
                E = (0, d.Z)(e),
                S = (0, f.l)(e),
                b = (0, f.P)(e),
                Z = (0, h.Z)(e),
                U = (0, x.Z)(e);
            return null == e || e.isManaged()
                ? null
                : (0, i.jsxs)(l.Menu, {
                      navId: 'gdm-context',
                      'aria-label': v.intl.string(v.t.Xm41aW),
                      onClose: r.Zy,
                      onSelect: o,
                      children: [
                          (0, i.jsx)(l.MenuGroup, { children: p }),
                          (0, i.jsxs)(l.MenuGroup, {
                              children: [S, Z, U]
                          }),
                          (0, i.jsxs)(l.MenuGroup, {
                              children: [
                                  c
                                      ? (0, i.jsx)(l.MenuItem, {
                                            id: 'instant-invites',
                                            label: v.intl.string(v.t.ngRFjY),
                                            action: () =>
                                                (0, l.openModalLazy)(async () => {
                                                    let { default: n } = await t.e('97573').then(t.bind(t, 892382));
                                                    return (t) =>
                                                        (0, i.jsx)(n, {
                                                            channelId: e.id,
                                                            ...t
                                                        });
                                                })
                                        })
                                      : null,
                                  (0, i.jsx)(l.MenuControlItem, {
                                      id: 'change-icon',
                                      showDefaultFocus: !0,
                                      control: (n, t) =>
                                          (0, i.jsx)(l.MenuImageUploadControl, {
                                              onChange: (t) => {
                                                  var i;
                                                  a.Z.setIcon(e.id, t), null === (i = n.onClose) || void 0 === i || i.call(n);
                                              },
                                              multiple: !1,
                                              'aria-label': v.intl.string(v.t['6yrpFR']),
                                              ...n,
                                              ref: t
                                          }),
                                      label: v.intl.string(v.t['6yrpFR'])
                                  }),
                                  null != e.icon
                                      ? (0, i.jsx)(l.MenuItem, {
                                            id: 'remove-icon',
                                            label: v.intl.string(v.t['uY+Nk5']),
                                            action: () => a.Z.setIcon(e.id, null)
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsx)(l.MenuGroup, { children: E }),
                          (0, i.jsxs)(l.MenuGroup, {
                              children: [T, j]
                          }),
                          (0, i.jsx)(l.MenuGroup, { children: N }),
                          (0, i.jsx)(l.MenuGroup, { children: b }),
                          (0, i.jsx)(l.MenuGroup, { children: O })
                      ]
                  });
        },
        { object: g.qAy.CONTEXT_MENU }
    ),
    [c.Z.CONTEXT_MENU, c.Z.GROUP_DM_MENU]
);
