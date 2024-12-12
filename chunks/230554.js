r.d(n, {
    Z: function () {
        return I;
    }
});
var i = r(47120);
var a = r(757143);
var s = r(192379),
    o = r(270445),
    l = r(911969),
    u = r(998698),
    c = r(91313),
    d = r(53529),
    f = r(436660),
    _ = r(887490),
    h = r(515270),
    p = r(847302),
    m = r(42530);
let g = (e, n, r) => ({
    getSlateEditor: () => e,
    submit(e) {
        e.preventDefault(), r();
    },
    focus() {
        _.bN.focus(e);
    },
    blur() {
        o.F3.blur(e);
    },
    getCurrentWord() {
        let n = e.selection;
        if (null == n || !_.Ew.isValid(e, n) || _.M8.isExpanded(n) || (0, h.L6)(e))
            return {
                word: null,
                isAtStart: !1
            };
        let [r, i] = _.bN.node(e, _.C0.parent(n.anchor.path)),
            [a, s] = _.bN.node(e, n.anchor.path),
            o = n.anchor.offset;
        if (!_.C0.hasPrevious(s) && _.LC.isText(a)) {
            let e = a.text.substring(0, o);
            if (_.aj.isType(r, 'applicationCommand') && o < r.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0
                };
        }
        let l = '',
            u = !1;
        for (;;) {
            if (--o < 0) {
                if (!_.C0.hasPrevious(s)) {
                    u = !0;
                    break;
                }
                [a, s] = _.bN.node(e, _.C0.previous(s));
            }
            if (!_.LC.isText(a)) break;
            let n = a.text[o];
            if (m.i$.test(n)) break;
            l = n + l;
        }
        return {
            word: l,
            isAtStart: u && _.C0.isFirstEditorBlock(i)
        };
    },
    getFirstText() {
        var n, r;
        return null !== (r = null === (n = _.bN.getFirstText(e)) || void 0 === n ? void 0 : n.text) && void 0 !== r ? r : '';
    },
    getCurrentCommandOption() {
        let n = c.HZ(e);
        return null == n ? null : n[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var r;
        let i = c.HZ(e);
        if (null == i) return [];
        let a = u.Z.getActiveCommand(n.id),
            s = null == a ? void 0 : null === (r = a.options) || void 0 === r ? void 0 : r.find((e) => e.name === i[0].optionName);
        return null == s ? [] : c.IB(e, s, i[0], n.id);
    },
    getCommandOptionValues() {
        let r = u.Z.getActiveCommand(n.id);
        return null == r ? {} : c.tM(e, r, n.id);
    },
    insertText(r) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        d.T.withSingleEntry(e, () => {
            let s = c.HZ(e),
                o = null != s && E(n, s[0]);
            if ((null != i && o && (f.Q.removeInlineChildren(e, s), (a = !1)), v(e, r, i, a), null != i && o)) {
                let r = c.cr(e);
                if (((s = _.q.updateElement(e, s)), null != r)) {
                    let i = _.q.markdown(r[0], n.guild_id);
                    (0, p.Gg)(e, s, n.id, i) && (s = _.q.updateElement(e, s));
                }
                c.xi(e, n.guild_id, n.id, _.q.updateElement(e, s), !1), f.Q.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(r) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        d.T.withSingleEntry(e, () => {
            let s = c.HZ(e),
                o = null != s && E(n, s[0]);
            if (o) f.Q.removeInlineChildren(e, s), (a = !1);
            else {
                let { word: n } = this.getCurrentWord();
                null != n &&
                    n.length > 0 &&
                    f.Q.delete(e, {
                        distance: n.length,
                        unit: 'character',
                        reverse: !0
                    });
            }
            v(e, r, i, a), o && f.Q.selectNextCommandOption(e);
        });
    },
    insertEmoji(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        d.T.withSingleEntry(e, () => {
            var i, a;
            let s = n.animated ? 'a' : '',
                o = null !== (a = null !== (i = n.originalName) && void 0 !== i ? i : n.name) && void 0 !== a ? a : '',
                l = ':'.concat(n.name, ':');
            v(e, l, null != n.id ? '<'.concat(s, ':').concat(o.replace(/:/g, ''), ':').concat(n.id, '>') : null, r);
        });
    }
});
function E(e, n) {
    var r;
    let i = u.Z.getActiveCommand(e.id),
        a = null == i ? void 0 : null === (r = i.options) || void 0 === r ? void 0 : r.find((e) => e.name === n.optionName);
    return null != a && (a.type !== l.jw.STRING || (null == a ? void 0 : a.choices) != null || (null == a ? void 0 : a.autocomplete));
}
function v(e, n, r, i) {
    let a = _.bN.areStylesDisabled(e) || null == r ? n : r;
    d.T.withSingleEntry(e, () => {
        f.Q.insertText(e, i ? a + ' ' : a);
    });
}
function I(e, n, r, i) {
    s.useImperativeHandle(e, () => g(n, r, i), [n, r, i]);
}
