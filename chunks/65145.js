n.d(t, {
    Pk: function () {
        return _;
    },
    dv: function () {
        return c;
    }
});
var r,
    i = n(411104);
var a = n(47120);
var o = n(735250),
    s = n(470079),
    l = n(823379);
!(function (e) {
    (e.POLL_ANSWERS = 'POLL_ANSWERS'), (e.ACTION_BUTTON = 'ACTION_BUTTON');
})(r || (r = {}));
let u = s.createContext(void 0);
function c() {
    let e = s.useContext(u);
    if (null == e) throw Error('No PollFocusContextProvider found');
    return e;
}
function d(e) {
    let { children: t, actionButtonRef: n, pollAnswerRef: r, manageFocusOnAction: i } = e,
        a = s.useMemo(
            () => ({
                actionButtonRef: n,
                pollAnswerRef: r,
                manageFocusOnAction: i
            }),
            [n, r, i]
        );
    return (0, o.jsx)(u.Provider, {
        value: a,
        children: t
    });
}
function _(e) {
    let { children: t } = e,
        [n, r] = s.useState(),
        i = s.useRef(null),
        a = s.useRef(null),
        u = (e) => {
            switch (e) {
                case 'submit':
                case 'cancel':
                    r('ACTION_BUTTON');
                    break;
                case 'remove':
                case 'showVotes':
                    r('POLL_ANSWERS');
                    break;
                case 'showVoterDetails':
                    break;
                default:
                    (0, l.vE)(e);
            }
        };
    return (
        s.useEffect(() => {
            var e, t, r;
            'POLL_ANSWERS' === n && null != a.current && (null === (t = a.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), 'ACTION_BUTTON' === n && null != i.current && (null === (r = i.current) || void 0 === r || r.focus());
        }, [n]),
        (0, o.jsx)(d, {
            pollAnswerRef: a,
            actionButtonRef: i,
            manageFocusOnAction: u,
            children: t
        })
    );
}
