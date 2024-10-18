n.d(t, {
    OG: function () {
        return x;
    },
    Zu: function () {
        return N;
    }
}),
    n(47120);
var i = n(735250),
    l = n(470079),
    r = n(120356),
    a = n.n(r),
    s = n(512722),
    o = n.n(s),
    c = n(290843),
    u = n(749210),
    d = n(626135),
    h = n(727258),
    p = n(662146),
    f = n(981631),
    m = n(689938),
    _ = n(577837);
function g(e) {
    let t = l.useRef(null),
        n = e.map((e) => e[0]);
    return (
        l.useLayoutEffect(() => {
            let n = requestAnimationFrame(() => {
                let n = t.current;
                if (null != n) for (let [t, i] of e) t ? n.classList.add(i) : n.classList.remove(i);
            });
            return () => cancelAnimationFrame(n);
        }, n),
        t
    );
}
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return (
        o()(t.type !== h.eD.ROOT, '[GuildDropTarget] Tried using a root node as a drop target.'),
        {
            accept: e,
            canDrop: (e) => e.nodeId !== t.id && (!i || e.type !== h.eD.FOLDER || t.type !== h.eD.FOLDER) && (e.type !== h.eD.FOLDER || null == t.parentId) && !0,
            drop(e) {
                let { nodeId: l } = e;
                i && t.type !== h.eD.FOLDER && d.default.track(f.rMx.GUILD_FOLDER_CREATED), u.Z.moveById(l, t.id, n, i);
            },
            collect: (e) => ({
                canDrop: e.canDrop(),
                isOver: e.isOver()
            })
        }
    );
}
function I(e) {
    let { name: t, targetNode: n, combine: r, below: s } = e,
        o = l.useMemo(() => C([h.eD.GUILD, h.eD.FOLDER], n, s, r), [n, s, r]),
        [{ canDrop: u, isOver: d }, p] = (0, c.L)(o),
        f = g([
            [u, _.autoPointerEvents],
            [d, _.dragOver]
        ]);
    return (0, i.jsx)('div', {
        ref: (e) => {
            (f.current = e), p(e);
        },
        'data-dnd-name': m.Z.Messages.DND_DROP_ABOVE.format({ itemName: t }),
        className: a()(_.target)
    });
}
function E(e) {
    let { name: t, targetNode: n, onDragOverChanged: r } = e,
        [{ canDrop: s, isOver: o }, u] = (0, c.L)(() => C([h.eD.GUILD], n, !0, !0));
    l.useEffect(() => {
        null == r || r(o);
    }, [r, o]);
    let d = g([
        [s, _.autoPointerEvents],
        [o, _.dragOver]
    ]);
    return (0, i.jsx)(p.Z, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        tooltipClass: _.centerTargetTooltip,
        children: (0, i.jsx)('div', {
            ref: (e) => {
                (d.current = e), u(e);
            },
            'data-dnd-name': m.Z.Messages.DND_DROP_COMBINE.format({ itemName: t }),
            className: a()(_.centerTarget, {})
        })
    });
}
function N(e) {
    let { name: t, targetNode: n } = e,
        [{ canDrop: l, isOver: r }, s] = (0, c.L)(() => C([h.eD.GUILD], n, !0, !0)),
        o = g([[r, _.wrapperOver]]),
        u = g([
            [r, _.dragOver],
            [l, _.autoPointerEvents]
        ]);
    return (0, i.jsx)('div', {
        ref: o,
        className: a()(_.folderEndWrapper),
        'aria-hidden': !0,
        children: (0, i.jsx)('div', {
            className: _.folderTarget,
            children: (0, i.jsx)('div', {
                ref: (e) => {
                    (u.current = e), s(e);
                },
                'aria-label': 'At end of '.concat(t),
                className: a()(_.target)
            })
        })
    });
}
function x(e) {
    let { children: t } = e,
        [, n] = (0, c.L)({ accept: [] });
    return (0, i.jsx)('div', {
        ref: n,
        children: t
    });
}
t.ZP = l.memo(function (e) {
    let { name: t, targetNode: n, noCombine: l = !1, below: r = !1, onDragOverChanged: a } = e,
        s = !l && null == n.parentId;
    return (0, i.jsxs)('div', {
        className: _.wrapper,
        'aria-hidden': !0,
        children: [
            (0, i.jsx)(I, {
                name: t,
                targetNode: n,
                below: r
            }),
            s
                ? (0, i.jsx)(E, {
                      name: t,
                      targetNode: n,
                      onDragOverChanged: a
                  })
                : null
        ]
    });
});
