n.d(e, {
    V: function () {
        return g;
    },
    w: function () {
        return A;
    }
});
var r = n(392711),
    i = n.n(r),
    l = n(903797),
    u = n(731965),
    a = n(881052),
    o = n(823379),
    E = n(539573),
    s = n(236413),
    c = n(85960),
    d = n(36459),
    S = n(422303),
    T = n(866894),
    f = n(981631),
    N = n(388032);
let _ = Object.freeze({
        editingRule: null,
        hasChanges: !1,
        isLoading: !1,
        errorMessage: null
    }),
    I = (0, l.Z)((t, e) => ({
        editingRule: null,
        hasChanges: !1,
        setEditingRule: (n) => {
            let r = e().editingRule,
                l = null != n && null != r && n.id === r.id,
                a = i().cloneDeep(n);
            null != a &&
                (a = {
                    ...a,
                    actions: a.actions.filter(o.lm)
                }),
                (0, u.j)(() =>
                    t({
                        editingRule: a,
                        hasChanges: l,
                        errorMessage: null
                    })
                );
        },
        createNewEditingRule: (e, n, r) => {
            let i = {
                ...(0, s.ep)(e, n),
                ...(null != r ? r : {})
            };
            return (
                (0, u.j)(() =>
                    t({
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
            (0, u.j)(() => t({ ..._ }));
        },
        saveRule: async (e, n) => {
            if (null == e) return (0, u.j)(() => t({ ..._ })), null;
            try {
                var r, i, l;
                (0, s.DO)(e) && ((e.triggerMetadata.keywordFilter = (0, S.cb)((0, S.Ze)(null !== (r = e.triggerMetadata.keywordFilter) && void 0 !== r ? r : []))), (e.triggerMetadata.allowList = (0, S.cb)((0, S.Ze)(null !== (i = e.triggerMetadata.allowList) && void 0 !== i ? i : [])))), (0, s.Fn)(e) && (e.triggerMetadata.allowList = (0, S.cb)((0, S.Ze)(null !== (l = e.triggerMetadata.allowList) && void 0 !== l ? l : []))), (0, c.yU)(e, n), (0, s.QO)(e);
            } catch (e) {
                return (
                    e instanceof E.V6
                        ? (0, u.j)(() => {
                              t({
                                  errorMessage: N.intl.string(N.t['4Dxaur']),
                                  isLoading: !1
                              });
                          })
                        : e instanceof E.uS
                          ? (0, u.j)(() => {
                                t({
                                    errorMessage: N.intl.string(N.t.hDPEu7),
                                    isLoading: !1
                                });
                            })
                          : (0, u.j)(() => {
                                t({
                                    errorMessage: e.message,
                                    isLoading: !1
                                });
                            }),
                    null
                );
            }
            try {
                (0, u.j)(() => {
                    t({ isLoading: !0 });
                });
                let n = null;
                return (n = (0, s.Vb)(e) && !(0, T.U)(e.id) ? await (0, d.Je)(e) : await (0, d.JK)(e)), (0, u.j)(() => t({ ..._ })), n;
            } catch (n) {
                let e = new a.Hx(n);
                (0, u.j)(() => {
                    t({
                        isLoading: !1,
                        errorMessage: (function (t) {
                            if (t.code === f.evJ.INVALID_FORM_BODY) {
                                var e, n;
                                if ((null === (n = t.errors) || void 0 === n ? void 0 : null === (e = n.trigger_metadata) || void 0 === e ? void 0 : e.regex_patterns) != null) return N.intl.string(N.t.hDPEu7);
                            }
                            return t.getAnyErrorMessage();
                        })(e)
                    });
                });
            }
            return null;
        },
        saveEditingRule: (t) => {
            let { editingRule: n, saveRule: r } = e();
            return r(n, t);
        }
    }));
function A() {
    return I((t) => ({
        hasChanges: t.hasChanges,
        editingRule: t.editingRule,
        isLoading: t.isLoading,
        errorMessage: t.errorMessage,
        saveRule: t.saveRule,
        saveEditingRule: t.saveEditingRule,
        cancelEditingRule: t.cancelEditingRule
    }));
}
function g() {
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        e = I((t) => ({
            hasChanges: t.hasChanges,
            editingRule: t.editingRule,
            setEditingRule: t.setEditingRule,
            createNewEditingRule: t.createNewEditingRule
        }));
    return null != t && e.setEditingRule(t), e;
}
