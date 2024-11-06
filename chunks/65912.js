n.d(t, {
    V: function () {
        return N;
    },
    w: function () {
        return j;
    }
});
var r = n(392711),
    i = n.n(r),
    l = n(903797),
    u = n(731965),
    a = n(881052),
    o = n(823379),
    c = n(539573),
    s = n(236413),
    f = n(85960),
    E = n(36459),
    d = n(422303),
    g = n(866894),
    S = n(981631),
    A = n(388032);
let _ = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }),
    R = (0, l.Z)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            let r = t().editingRule,
                l = null != n && null != r && n.id === r.id,
                a = i().cloneDeep(n);
            null != a &&
                (a = {
                    ...a,
                    actions: a.actions.filter(o.lm)
                }),
                (0, u.j)(() =>
                    e({
                        editingRule: a,
                        hasChanges: l,
                        errorMessage: null
                    })
                );
        },
        createNewEditingRule: (t, n, r) => {
            let i = {
                ...(0, s.ep)(t, n),
                ...(null != r ? r : {})
            };
            return (
                (0, u.j)(() =>
                    e({
                        editingRule: i,
                        hasChanges: !1
                    })
                ),
                i
            );
        },
        isLoading: !1,
        errorMessage: null,
        cancelEditingRule: () => {
            (0, u.j)(() => e({ ..._ }));
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, u.j)(() => e({ ..._ })), null;
            try {
                var r, i, l;
                (0, s.DO)(t) && ((t.triggerMetadata.keywordFilter = (0, d.cb)((0, d.Ze)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : []))), (t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : [])))), (0, s.Fn)(t) && (t.triggerMetadata.allowList = (0, d.cb)((0, d.Ze)(null !== (l = t.triggerMetadata.allowList) && void 0 !== l ? l : []))), (0, f.yU)(t, n), (0, s.QO)(t);
            } catch (t) {
                return (
                    t instanceof c.V6
                        ? (0, u.j)(() => {
                              e({
                                  errorMessage: A.intl.string(A.t['4Dxaur']),
                                  isLoading: !1
                              });
                          })
                        : t instanceof c.uS
                          ? (0, u.j)(() => {
                                e({
                                    errorMessage: A.intl.string(A.t.hDPEu7),
                                    isLoading: !1
                                });
                            })
                          : (0, u.j)(() => {
                                e({
                                    errorMessage: t.message,
                                    isLoading: !1
                                });
                            }),
                    null
                );
            }
            try {
                (0, u.j)(() => {
                    e({ isLoading: !0 });
                });
                let n = null;
                return (n = (0, s.Vb)(t) && !(0, g.U)(t.id) ? await (0, E.Je)(t) : await (0, E.JK)(t)), (0, u.j)(() => e({ ..._ })), n;
            } catch (n) {
                let t = new a.Hx(n);
                (0, u.j)(() => {
                    e({
                        isLoading: !1,
                        errorMessage: (function (e) {
                            if (e.code === S.evJ.INVALID_FORM_BODY) {
                                var t, n;
                                if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null) return A.intl.string(A.t.hDPEu7);
                            }
                            return e.getAnyErrorMessage();
                        })(t)
                    });
                });
            }
            return null;
        },
        saveEditingRule: (e) => {
            let { editingRule: n, saveRule: r } = t();
            return r(n, e);
        }
    }));
function j() {
    return R((e) => ({
        hasChanges: e.hasChanges,
        editingRule: e.editingRule,
        isLoading: e.isLoading,
        errorMessage: e.errorMessage,
        saveRule: e.saveRule,
        saveEditingRule: e.saveEditingRule,
        cancelEditingRule: e.cancelEditingRule
    }));
}
function N() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = R((e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            setEditingRule: e.setEditingRule,
            createNewEditingRule: e.createNewEditingRule
        }));
    return null != e && t.setEditingRule(e), t;
}
