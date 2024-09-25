n.d(t, {
    T: function () {
        return u;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(887490);
let o = 250,
    s = new WeakMap(),
    l = new WeakMap(),
    u = {
        isMerging(e) {
            var t;
            return null === (t = l.get(e)) || void 0 === t || t;
        },
        isSaving(e) {
            var t;
            return null === (t = s.get(e)) || void 0 === t || t;
        },
        withoutMerging(e, t) {
            let n = this.isMerging(e);
            l.set(e, !1);
            try {
                t();
            } finally {
                l.set(e, n);
            }
        },
        withoutSaving(e, t) {
            let n = this.isSaving(e);
            s.set(e, !1);
            try {
                t();
            } finally {
                s.set(e, n);
            }
        },
        withSingleEntry: (e, t) => c(e, 'other', !1, t),
        withMergedEntry: (e, t) => c(e, 'other', !0, t),
        currentEntry: (e) => (e.history.stack.length > 0 ? e.history.stack[e.history.index] : null),
        insertOrMergeEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = u.currentEntry(e);
            u.isMerging(e) && (null == r ? void 0 : r.mergeable) ? this.mergeEntry(e, n) : this.insertEntry(e, t, n);
        },
        insertEntry(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 ? arguments[4] : void 0;
            (i = null != i ? i : e.selection), (r = null != r ? r : a.bN.richValue(e));
            let { history: s } = e,
                l = u.currentEntry(e);
            for (null != l && (l.mergeable = !1), s.stack.length > 0 && (s.stack.length = s.index + 1); s.stack.length >= o; ) s.stack.shift();
            s.stack.push({
                type: t,
                mergeable: n,
                createdAt: Date.now(),
                value: r,
                selection: i
            }),
                (s.index = s.stack.length - 1);
        },
        mergeEntry(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                { selection: n } = e,
                r = a.bN.richValue(e),
                i = u.currentEntry(e);
            null != i && ((i.value = r), (i.selection = n), !t && (i.mergeable = !1));
        }
    };
function c(e, t, n, r) {
    let i = e.children,
        o = e.selection,
        l = u.isSaving(e);
    s.set(e, !1);
    try {
        let s = r();
        return l && (n ? u.mergeEntry(e) : e.children !== i ? u.insertEntry(e, t, !1) : u.isMerging(e) && null != e.selection && (null == o || !a.M8.equals(e.selection, o)) && u.mergeEntry(e)), s;
    } finally {
        s.set(e, l);
    }
}
