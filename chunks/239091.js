r.d(n, {
    Zy: function () {
        return d;
    },
    jW: function () {
        return _;
    },
    vq: function () {
        return f;
    }
});
var i = r(773603);
var a = r(570140),
    s = r(40851),
    o = r(358085),
    l = r(601993),
    u = r(981631);
function c(e) {
    a.Z.dispatch({
        type: 'CONTEXT_MENU_OPEN',
        contextMenu: e
    });
}
function d(e) {
    {
        let { flushSync: n } = r(995295);
        n(() => {
            a.Z.wait(() => {
                a.Z.dispatch({ type: 'CONTEXT_MENU_CLOSE' }).finally(e);
            });
        });
    }
}
function f(e, n, r, i) {
    var a, d, f;
    if ((e.stopPropagation(), null != e.currentTarget.contains && !e.currentTarget.contains(e.target))) return;
    let _ = 0,
        h = 0;
    if (('pageX' in e && ((_ = e.pageX), (h = e.pageY)), 0 === _ && 0 === h)) {
        let n = null === (a = e.target) || void 0 === a ? void 0 : a.getBoundingClientRect(),
            { left: r = 0, top: i = 0, width: s = 0, height: o = 0 } = null != n ? n : {};
        (_ = r + s / 2), (h = i + o / 2);
    }
    let p = {
        render: n,
        renderLazy: i,
        target: null !== (d = e.target) && void 0 !== d ? d : e.currentTarget,
        rect: new DOMRect(_, h, 0, 0),
        config: {
            context: __OVERLAY__ ? u.IlC.OVERLAY : null !== (f = (0, s.GB)()) && void 0 !== f ? f : u.IlC.APP,
            ...r
        }
    };
    if ((null == r ? void 0 : r.enableSpellCheck) && (0, o.isDesktop)()) {
        let e = () => {
                n(), c(p);
            },
            n = (0, l.RD)(e);
    } else e.preventDefault(), c(p);
}
function _(e, n, r) {
    f(e, void 0, r, n);
}
