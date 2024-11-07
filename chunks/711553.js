var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(518084),
    o = n(981631),
    c = n(388032),
    d = n(1310);
t.Z = function (e) {
    let t;
    let { title: n, header: r, children: u, renderSettings: h, onDragStart: p } = e;
    return (
        (t =
            null != n
                ? (0, i.jsxs)(l.ZP.Bar, {
                      className: s()(d.header, d.draggableStartArea),
                      onMouseDown: p,
                      children: [
                          (0, i.jsx)(l.ZP.Content, {
                              className: s()(d.headerTitle, d.draggableStartArea),
                              dynamicSize: !0,
                              children: n
                          }),
                          (0, i.jsx)(l.ZP.Content, {
                              children: (0, i.jsx)(a.Popout, {
                                  position: 'right',
                                  renderPopout: null != h ? h : o.dG4,
                                  autoInvert: !1,
                                  children: (e) =>
                                      (0, i.jsx)(l.ZP.Icon, {
                                          ...e,
                                          icon: a.SettingsIcon,
                                          label: c.intl.string(c.t['3D5yo6'])
                                      })
                              })
                          })
                      ]
                  })
                : r),
        (0, i.jsxs)('div', {
            className: d.sidebar,
            children: [
                t,
                (0, i.jsx)('div', {
                    className: d.children,
                    children: u
                })
            ]
        })
    );
};
