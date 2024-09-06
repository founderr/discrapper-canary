var i = n(544891),
    s = n(570140),
    a = n(981631);
t.Z = {
    show(e, t) {
        s.Z.wait(() =>
            s.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_SHOW',
                tutorialId: e,
                renderData: t
            })
        );
    },
    hide(e) {
        s.Z.wait(() =>
            s.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_HIDE',
                tutorialId: e
            })
        );
    },
    dismiss(e) {
        s.Z.wait(() =>
            s.Z.dispatch({
                type: 'TUTORIAL_INDICATOR_DISMISS',
                tutorialId: e
            })
        ),
            i.tn.put({
                url: a.ANM.TUTORIAL_INDICATOR(e),
                oldFormErrors: !0
            });
    },
    suppressAll() {
        s.Z.dispatch({ type: 'TUTORIAL_INDICATOR_SUPPRESS_ALL' }),
            i.tn.post({
                url: a.ANM.TUTORIAL_INDICATORS_SUPPRESS,
                oldFormErrors: !0
            });
    }
};
