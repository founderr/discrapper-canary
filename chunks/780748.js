r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(192379),
    a = r(998698),
    s = r(436660),
    o = r(515270),
    l = r(417662),
    u = r(981631);
function c(e) {
    let { editor: n, channel: r, disableEnterToSubmit: c, onKeyDown: d, onKeyUp: f, onTab: _, onEnter: h, allowNewLines: p, submit: m, hideAutocomplete: g, moveSelection: E } = e,
        v = i.useCallback(
            (e) => {
                var i;
                switch (e.which) {
                    case u.yXg.ARROW_UP:
                        if (E(-1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case u.yXg.ARROW_DOWN:
                        if (E(1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case u.yXg.P:
                        if ((0, l.E)(e, { ctrl: !0 }) && E(-1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case u.yXg.N:
                        if ((0, l.E)(e, { ctrl: !0 }) && E(1)) {
                            e.preventDefault();
                            return;
                        }
                        break;
                    case u.yXg.ESCAPE:
                        null == g || g();
                        break;
                    case u.yXg.TAB:
                        if ((0, l.E)(e, {}) && (null == _ ? void 0 : _())) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                        if (null != a.Z.getActiveCommand(r.id)) {
                            e.preventDefault(), e.stopPropagation(), e.shiftKey ? s.Q.selectPreviousCommandOption(n) : s.Q.selectNextCommandOption(n);
                            return;
                        }
                        break;
                    case u.yXg.ENTER:
                        if ((0, l.E)(e, {}) && (null == h ? void 0 : h(e))) {
                            e.preventDefault(), e.stopPropagation();
                            return;
                        }
                }
                if ((null === (i = n.onKeyDown) || void 0 === i ? void 0 : i.call(n, e)) === !0) {
                    e.preventDefault(), e.stopPropagation();
                    return;
                }
                e.which === u.yXg.ENTER && ((!e.altKey && !e.shiftKey && (!c || e.ctrlKey) && !(0, o.L6)(n)) || !p) && (e.preventDefault(), e.stopPropagation(), m()), null == d || d(e);
            },
            [p, r.id, c, n, g, E, h, d, _, m]
        );
    return {
        handleKeyDown: v,
        handleKeyUp: i.useCallback(
            (e) => {
                null == f || f(e);
            },
            [f]
        )
    };
}
