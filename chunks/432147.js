n.d(t, {
    Z: function () {
        return I;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    c = n(901461),
    d = n(592125),
    u = n(709054),
    m = n(723774),
    h = n(144140),
    f = n(91159),
    p = n(576799),
    g = n(488131),
    _ = n(981631),
    C = n(388032),
    E = n(119487);
function I(e) {
    let { message: t, compact: n } = e,
        r = (0, a.e7)([d.Z], () => d.Z.getChannel(u.default.castMessageIdAsChannelId(t.id)));
    return null == r
        ? null
        : (0, i.jsx)(x, {
              channel: r,
              compact: n,
              isSystemMessage: (0, c.Z)(t)
          });
}
function x(e) {
    let { channel: t, compact: r, isSystemMessage: c } = e,
        d = (0, a.e7)([h.Z], () => h.Z.getCount(t.id)),
        u = (function (e) {
            var t;
            let n = (0, a.e7)([h.Z], () => h.Z.getMostRecentMessage(e.id)),
                r = (0, a.e7)([h.Z], () => h.Z.getCount(e.id)),
                l = (0, f.Ok)(e);
            return (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.archived)
                ? C.intl.string(C.t.ZTo4HR)
                : null == r || 0 === r
                  ? C.intl.string(C.t.HYtNyM)
                  : null == n
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('span', { children: C.intl.string(C.t.ZTo4HR) }),
                              (0, i.jsx)('span', {
                                  className: E.timestamp,
                                  children: (0, f.Ye)(l)
                              })
                          ]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(p.Z, {
                                  message: n,
                                  channel: e
                              }),
                              (0, i.jsx)('span', {
                                  className: E.timestamp,
                                  children: (0, f.Ye)(l)
                              })
                          ]
                      });
        })(t),
        I = null != d && d > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: l()(E.spine, {
                    [E.cozy]: !r,
                    [E.systemMessageSpine]: c
                })
            }),
            (0, i.jsx)(o.Clickable, {
                onClick: function (e) {
                    e.stopPropagation(), (0, g.ok)(t, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let n = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        i = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.which === _.yXg.SPACE || e.which === _.yXg.ENTER) && (e.preventDefault(), (n || i) && (0, g.ok)(t, i));
                },
                onContextMenu: function (e) {
                    (0, s.jW)(e, async () => {
                        let { default: e } = await Promise.all([n.e('38902'), n.e('77564'), n.e('13154')]).then(n.bind(n, 422200));
                        return (n) =>
                            (0, i.jsx)(e, {
                                channel: t,
                                ...n
                            });
                    });
                },
                'aria-roledescription': C.intl.string(C.t['8ipxiY']),
                className: l()(E.container, { [E.systemMessageContainer]: c }),
                children: (0, i.jsxs)(o.BlockInteractions, {
                    children: [
                        (0, i.jsxs)('div', {
                            className: E.topLine,
                            children: [
                                (0, i.jsx)(o.HiddenVisually, { children: C.intl.string(C.t['7Xm5QE']) }),
                                (0, i.jsx)('span', {
                                    className: E.name,
                                    children: t.name
                                }),
                                (0, i.jsx)('span', {
                                    className: E.cta,
                                    'aria-hidden': !I,
                                    children: (0, m.WE)(d, t.id)
                                })
                            ]
                        }),
                        (0, i.jsx)('span', {
                            'aria-hidden': !0,
                            className: l()(E.bottomLine),
                            children: u
                        })
                    ]
                })
            })
        ]
    });
}
