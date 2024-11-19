n.d(t, {
    V: function () {
        return L;
    },
    w: function () {
        return N;
    }
});
var r = n(392711),
    i = n.n(r),
    l = n(976649),
    u = n(454000),
    a = n(731965),
    o = n(881052),
    c = n(823379),
    s = n(539573),
    f = n(236413),
    E = n(85960),
    d = n(36459),
    g = n(422303),
    S = n(866894),
    A = n(981631),
    _ = n(388032);
let R = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }),
    j = (0, u.F)((e, t) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            let r = t().editingRule,
                l = null != n && null != r && n.id === r.id,
                u = i().cloneDeep(n);
            null != u &&
                (u = {
                    ...u,
                    actions: u.actions.filter(c.lm)
                }),
                (0, a.j)(() =>
                    e({
                        editingRule: u,
                        hasChanges: l,
                        errorMessage: null
                    })
                );
        },
        createNewEditingRule: (t, n, r) => {
            let i = {
                ...(0, f.ep)(t, n),
                ...(null != r ? r : {})
            };
            return (
                (0, a.j)(() =>
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
            (0, a.j)(() => e({ ...R }));
        },
        saveRule: async (t, n) => {
            if (null == t) return (0, a.j)(() => e({ ...R })), null;
            try {
                var r, i, l;
                (0, f.DO)(t) && ((t.triggerMetadata.keywordFilter = (0, g.cb)((0, g.Ze)(null !== (r = t.triggerMetadata.keywordFilter) && void 0 !== r ? r : []))), (t.triggerMetadata.allowList = (0, g.cb)((0, g.Ze)(null !== (i = t.triggerMetadata.allowList) && void 0 !== i ? i : [])))), (0, f.Fn)(t) && (t.triggerMetadata.allowList = (0, g.cb)((0, g.Ze)(null !== (l = t.triggerMetadata.allowList) && void 0 !== l ? l : []))), (0, E.yU)(t, n), (0, f.QO)(t);
            } catch (t) {
                return (
                    t instanceof s.V6
                        ? (0, a.j)(() => {
                              e({
                                  errorMessage: _.intl.string(_.t['4Dxaur']),
                                  isLoading: !1
                              });
                          })
                        : t instanceof s.uS
                          ? (0, a.j)(() => {
                                e({
                                    errorMessage: _.intl.string(_.t.hDPEu7),
                                    isLoading: !1
                                });
                            })
                          : (0, a.j)(() => {
                                e({
                                    errorMessage: t.message,
                                    isLoading: !1
                                });
                            }),
                    null
                );
            }
            try {
                (0, a.j)(() => {
                    e({ isLoading: !0 });
                });
                let n = null;
                return (n = (0, f.Vb)(t) && !(0, S.U)(t.id) ? await (0, d.Je)(t) : await (0, d.JK)(t)), (0, a.j)(() => e({ ...R })), n;
            } catch (n) {
                let t = new o.Hx(n);
                (0, a.j)(() => {
                    e({
                        isLoading: !1,
                        errorMessage: (function (e) {
                            if (e.code === A.evJ.INVALID_FORM_BODY) {
                                var t, n;
                                if ((null === (n = e.errors) || void 0 === n ? void 0 : null === (t = n.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns) != null) return _.intl.string(_.t.hDPEu7);
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
function N() {
    return j(
        (e) => ({
            hasChanges: e.hasChanges,
            editingRule: e.editingRule,
            isLoading: e.isLoading,
            errorMessage: e.errorMessage,
            saveRule: e.saveRule,
            saveEditingRule: e.saveEditingRule,
            cancelEditingRule: e.cancelEditingRule
        }),
        l.X
    );
}
function L() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = j(
            (e) => ({
                hasChanges: e.hasChanges,
                editingRule: e.editingRule,
                setEditingRule: e.setEditingRule,
                createNewEditingRule: e.createNewEditingRule
            }),
            l.X
        );
    return null != e && t.setEditingRule(e), t;
}
