n.d(t, {
    Z: function () {
        return T;
    }
});
var r = n(47120);
var i = n(757143);
var a = n(470079),
    o = n(519953),
    s = n(911969),
    l = n(998698),
    u = n(91313),
    c = n(53529),
    d = n(436660),
    _ = n(887490),
    E = n(515270),
    f = n(847302),
    h = n(42530);
let p = (e, t, n) => ({
    getSlateEditor: () => e,
    submit(e) {
        e.preventDefault(), n();
    },
    focus() {
        _.bN.focus(e);
    },
    blur() {
        o.F3.blur(e);
    },
    getCurrentWord() {
        let t = e.selection;
        if (null == t || !_.Ew.isValid(e, t) || _.M8.isExpanded(t) || (0, E.L6)(e))
            return {
                word: null,
                isAtStart: !1
            };
        let [n, r] = _.bN.node(e, _.C0.parent(t.anchor.path)),
            [i, a] = _.bN.node(e, t.anchor.path),
            o = t.anchor.offset;
        if (!_.C0.hasPrevious(a) && _.LC.isText(i)) {
            let e = i.text.substring(0, o);
            if (_.aj.isType(n, 'applicationCommand') && o < n.command.displayName.length + 2)
                return {
                    word: e,
                    isAtStart: !0
                };
        }
        let s = '',
            l = !1;
        for (;;) {
            if (--o < 0) {
                if (!_.C0.hasPrevious(a)) {
                    l = !0;
                    break;
                }
                [i, a] = _.bN.node(e, _.C0.previous(a));
            }
            if (!_.LC.isText(i)) break;
            let t = i.text[o];
            if (h.i$.test(t)) break;
            s = t + s;
        }
        return {
            word: s,
            isAtStart: l && _.C0.isFirstEditorBlock(r)
        };
    },
    getFirstText() {
        var t, n;
        return null !== (n = null === (t = _.bN.getFirstText(e)) || void 0 === t ? void 0 : t.text) && void 0 !== n ? n : '';
    },
    getCurrentCommandOption() {
        let t = u.HZ(e);
        return null == t ? null : t[0].optionName;
    },
    getCurrentCommandOptionValue() {
        var n;
        let r = u.HZ(e);
        if (null == r) return [];
        let i = l.Z.getActiveCommand(t.id),
            a = null == i ? void 0 : null === (n = i.options) || void 0 === n ? void 0 : n.find((e) => e.name === r[0].optionName);
        return null == a ? [] : u.IB(e, a, r[0], t.id);
    },
    getCommandOptionValues() {
        let n = l.Z.getActiveCommand(t.id);
        return null == n ? {} : u.tM(e, n, t.id);
    },
    insertText(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        c.T.withSingleEntry(e, () => {
            let a = u.HZ(e),
                o = null != a && m(t, a[0]);
            if ((null != r && o && (d.Q.removeInlineChildren(e, a), (i = !1)), I(e, n, r, i), null != r && o)) {
                let n = u.cr(e);
                if (((a = _.q.updateElement(e, a)), null != n)) {
                    let r = _.q.markdown(n[0], t.guild_id);
                    (0, f.Gg)(e, a, t.id, r) && (a = _.q.updateElement(e, a));
                }
                u.xi(e, t.guild_id, t.id, _.q.updateElement(e, a), !1), d.Q.selectNextCommandOption(e);
            }
        });
    },
    insertAutocomplete(n) {
        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        c.T.withSingleEntry(e, () => {
            let a = u.HZ(e),
                o = null != a && m(t, a[0]);
            if (o) d.Q.removeInlineChildren(e, a), (i = !1);
            else {
                let { word: t } = this.getCurrentWord();
                null != t &&
                    t.length > 0 &&
                    d.Q.delete(e, {
                        distance: t.length,
                        unit: 'character',
                        reverse: !0
                    });
            }
            I(e, n, r, i), o && d.Q.selectNextCommandOption(e);
        });
    },
    insertEmoji(t) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        c.T.withSingleEntry(e, () => {
            var r, i;
            let a = t.animated ? 'a' : '',
                o = null !== (i = null !== (r = t.originalName) && void 0 !== r ? r : t.name) && void 0 !== i ? i : '',
                s = ':'.concat(t.name, ':');
            I(e, s, null != t.id ? '<'.concat(a, ':').concat(o.replace(/:/g, ''), ':').concat(t.id, '>') : null, n);
        });
    }
});
function m(e, t) {
    var n;
    let r = l.Z.getActiveCommand(e.id),
        i = null == r ? void 0 : null === (n = r.options) || void 0 === n ? void 0 : n.find((e) => e.name === t.optionName);
    return null != i && (i.type !== s.jw.STRING || (null == i ? void 0 : i.choices) != null || (null == i ? void 0 : i.autocomplete));
}
function I(e, t, n, r) {
    let i = _.bN.areStylesDisabled(e) || null == n ? t : n;
    c.T.withSingleEntry(e, () => {
        d.Q.insertText(e, r ? i + ' ' : i);
    });
}
function T(e, t, n, r) {
    a.useImperativeHandle(e, () => p(t, n, r), [t, n, r]);
}
