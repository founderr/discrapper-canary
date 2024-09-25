n.d(t, {
    Zy: function () {
        return c;
    },
    jW: function () {
        return _;
    },
    vq: function () {
        return d;
    }
});
var r = n(773603);
var i = n(570140),
    a = n(40851),
    o = n(358085),
    s = n(601993),
    l = n(981631);
function u(e) {
    i.Z.dispatch({
        type: 'CONTEXT_MENU_OPEN',
        contextMenu: e
    });
}
function c(e) {
    {
        let { flushSync: t } = n(699581);
        t(() => {
            i.Z.wait(() => {
                i.Z.dispatch({ type: 'CONTEXT_MENU_CLOSE' }).finally(e);
            });
        });
    }
}
function d(e, t, n, r) {
    var i, c, d;
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let _ = 0,
        E = 0;
    if (('pageX' in e && ((_ = e.pageX), (E = e.pageY)), 0 === _ && 0 === E)) {
        let t = null === (i = e.target) || void 0 === i ? void 0 : i.getBoundingClientRect(),
            { left: n = 0, top: r = 0, width: a = 0, height: o = 0 } = null != t ? t : {};
        (_ = n + a / 2), (E = r + o / 2);
    }
    let f = {
        render: t,
        renderLazy: r,
        target: null !== (c = e.target) && void 0 !== c ? c : e.currentTarget,
        rect: new DOMRect(_, E, 0, 0),
        config: {
            context: __OVERLAY__ ? l.IlC.OVERLAY : null !== (d = (0, a.GB)()) && void 0 !== d ? d : l.IlC.APP,
            ...n
        }
    };
    if ((null == n ? void 0 : n.enableSpellCheck) && (0, o.isDesktop)()) {
        let e = () => {
                t(), u(f);
            },
            t = (0, s.RD)(e);
    } else e.preventDefault(), u(f);
}
function _(e, t, n) {
    d(e, void 0, n, t);
}
