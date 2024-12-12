n.r(t),
    n.d(t, {
        default: function () {
            return p;
        }
    });
var o = n(200651);
n(192379);
var r = n(481060),
    i = n(864762),
    c = n(509340),
    s = n(135184),
    l = n(409553),
    a = n(494801),
    d = n(319392),
    u = n(798930),
    x = n(981631),
    C = n(38920);
function p(e) {
    let { transitionState: t, onClose: n, analyticsLocation: p } = e,
        { slide: f, gotoNext: g, gotoError: h, handleWaitingForConnection: b, handleAuthToken: _, expectedCallbackState: j, callbackData: A } = (0, i.k)(p, x.ABu.XBOX);
    return (0, o.jsx)(r.ModalRoot, {
        className: C.modal,
        transitionState: t,
        disableTrack: !0,
        children: (0, o.jsxs)(r.Slides, {
            activeSlide: f,
            width: 408,
            children: [
                (0, o.jsx)(r.Slide, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: g,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Slide, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(a.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: b,
                        onAuthToken: _,
                        onError: h,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Slide, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(a.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: j,
                        onAuthToken: _,
                        onError: h,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Slide, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(c.Z, {
                        authToken: A,
                        onContinue: g,
                        onError: h,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Slide, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(s.Z, {
                        onContinue: g,
                        onClose: n
                    })
                }),
                (0, o.jsx)(r.Slide, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(d.Z, { onClose: n })
                })
            ]
        })
    });
}
