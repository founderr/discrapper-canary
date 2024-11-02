n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120),
    n(315314),
    n(610138),
    n(216116),
    n(78328),
    n(815648);
var a = n(192379),
    l = n(263568),
    r = n(935369),
    i = n(398805),
    o = n(524100),
    s = n(316758),
    c = n(203143),
    u = n(79390),
    d = n(489887),
    m = n(388032);
function f(e, t, n) {
    let f = e.id,
        x = a.useRef();
    null == x.current && (x.current = [(0, u.Uu)(), (0, u.Uu)()]);
    let [g, p] = a.useState(x.current),
        [C, v] = a.useState(''),
        [j, I] = a.useState(l.C.DEFAULT),
        [w, _] = a.useState(!1),
        [b, A] = a.useState(d.lc.ONE_DAY),
        [k, N] = a.useState({}),
        [E, R] = a.useState(!1),
        P = g.filter((e) => (0, u.cS)(e, j)),
        S = g.filter((e) => (0, u.uY)(e, j)),
        T = C.length > 0 && P.length >= d.gY && 0 === S.length,
        [y, { error: D, loading: O }] = (0, r.Z)(c.Z.createPoll),
        L = g.length < d.fw,
        B = g.length > d.gY,
        M = a.useCallback((e) => {
            N((e) => {
                let t = { ...e };
                return delete t.question, t;
            }),
                v(e);
        }, []),
        Z = a.useCallback((e) => {
            let { text: t, index: n, localCreationAnswerId: a } = e;
            N((e) => {
                let t = { ...e };
                return delete t['answer-'.concat(a)], t;
            }),
                p((e) => {
                    let a = [...e];
                    return (
                        (a[n] = {
                            ...a[n],
                            text: t
                        }),
                        a
                    );
                });
        }, []),
        U = a.useCallback((e, t) => {
            p((n) => {
                let a = [...n];
                return (
                    (a[t] = {
                        ...a[t],
                        image: e
                    }),
                    a
                );
            });
        }, []),
        H = a.useCallback(
            (e, t, n) => {
                var a;
                let l = g[t],
                    r = null === (a = l.image) || void 0 === a ? void 0 : a.mediaAttachmentState;
                null != r && r.mediaURL !== n && s.P(e, l.localCreationAnswerId, (0, i.Yk)(l.localCreationAnswerId, r.mediaURL));
            },
            [g]
        ),
        F = a.useCallback(
            async (e, t, n) => {
                let a = g[t].localCreationAnswerId;
                if ((H(e, t), U(h(n, o._.PREPARING), t), null == (await s.IV(e, a, n)))) {
                    U(h(n, o._.ERROR), t);
                    return;
                }
                U(h(n, o._.READY_TO_UPLOAD), t);
            },
            [g, U, H]
        ),
        z = a.useCallback(
            (e, t, n) => {
                let a = g[t].localCreationAnswerId,
                    l = URL.createObjectURL(n);
                H(e, t), U(h(l, o._.PREPARING), t), s.fH(e, a, n), U(h(l, o._.READY_TO_UPLOAD), t);
            },
            [g, U, H]
        ),
        W = a.useCallback(
            (e, t) => {
                H(f, t),
                    U(
                        {
                            emoji: e,
                            stickerId: void 0,
                            mediaAttachmentState: void 0
                        },
                        t
                    );
            },
            [f, U, H]
        ),
        K = a.useCallback((e) => {
            p((t) => {
                let n = [...t];
                return (
                    (n[e] = {
                        ...n[e],
                        image: void 0
                    }),
                    n
                );
            });
        }, []),
        Y = a.useCallback(() => {
            if (!!L) p((e) => [...e, (0, u.Uu)()]);
        }, [L]),
        G = a.useCallback(
            (e) => {
                if (!B) return;
                let t = g.length;
                H(f, e),
                    p((t) => {
                        let n = [...t];
                        return n.splice(e, 1), n;
                    }),
                    null == n ||
                        n({
                            indexToRemove: e,
                            numberOfAnswers: t
                        });
            },
            [g.length, B, f, n, H]
        );
    a.useEffect(
        () => () => {
            s.xt(f);
        },
        [f]
    );
    let q = a.useCallback(() => {
            let e = !0,
                t = {};
            return (
                0 === C.trim().length && ((e = !1), (t.question = m.intl.string(m.t.gPX3oK))),
                g.filter((e) => (0, u.cS)(e, j)).length < d.gY && ((e = !1), (t['answer-'.concat(g[0].localCreationAnswerId)] = m.intl.string(m.t.fYvzER))),
                g.forEach((n) => {
                    (0, u.uY)(n, j) && ((e = !1), (t['answer-'.concat(n.localCreationAnswerId)] = m.intl.string(m.t['8Qqkc3'])));
                }),
                N(t),
                R(!e),
                e
            );
        }, [g, C, j]),
        V = a.useCallback(async () => {
            await y({
                channel: e,
                question: C,
                answers: P,
                allowMultiSelect: w,
                duration: b,
                layout: j,
                onClose: t
            });
        }, [C, P, w, b, y, e, j, t]),
        J = a.useCallback(() => {
            !O && q() && V();
        }, [V, O, q]);
    return {
        answers: g,
        question: C,
        setQuestion: v,
        selectedLayoutType: j,
        setSelectedLayoutType: I,
        allowMultiSelect: w,
        setAllowMultiSelect: _,
        duration: b,
        setDuration: A,
        canPost: T,
        canAddMoreAnswers: L,
        canRemoveMoreAnswers: B,
        handleQuestionChange: M,
        handleAnswerTextChange: Z,
        handleGifSelect: F,
        handleEmojiSelect: W,
        handleCustomUpload: z,
        handleAddAnswer: Y,
        handleRemoveAnswer: G,
        handleRemoveAnswerImage: K,
        fieldErrors: k,
        createPoll: V,
        handleSubmitPoll: J,
        submitting: O,
        createPollError: D,
        shouldFocusOnInvalidField: E,
        setShouldFocusOnInvalidField: R
    };
}
function h(e, t) {
    return {
        mediaAttachmentState: {
            status: t,
            mediaURL: e
        },
        emoji: void 0,
        stickerId: void 0
    };
}
