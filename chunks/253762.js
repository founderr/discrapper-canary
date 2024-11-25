e.r(t),
    e.d(t, {
        default: function () {
            return f;
        }
    });
var i = e(200651);
e(192379);
var o = e(481060),
    r = e(864762),
    l = e(428681),
    c = e(42338),
    s = e(569932),
    a = e(555638),
    d = e(42011),
    u = e(798930),
    C = e(38920);
function f(n) {
    let { transitionState: t, onClose: e, analyticsLocation: f, platformType: h } = n,
        { slide: T, gotoNext: A, gotoError: p, handleWaitingForConnection: x, handleAuthToken: I, expectedCallbackState: P, callbackData: _, errorCode: v } = (0, r.k)(f, h);
    return (0, i.jsx)(o.ModalRoot, {
        className: C.modal,
        transitionState: t,
        disableTrack: !0,
        children: (0, i.jsxs)(o.Slides, {
            activeSlide: T,
            width: 408,
            children: [
                (0, i.jsx)(o.Slide, {
                    id: u.O.LANDING,
                    children: (0, i.jsx)(s.A, {
                        platformType: h,
                        onContinue: A,
                        onClose: e
                    })
                }),
                (0, i.jsx)(o.Slide, {
                    id: u.O.PRE_CONNECT,
                    children: (0, i.jsx)(a.A, {
                        platformType: h,
                        isWaitingForConnection: !1,
                        onWaitingForConnection: x,
                        onAuthToken: I,
                        onError: p,
                        onClose: e
                    })
                }),
                (0, i.jsx)(o.Slide, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, i.jsx)(a.A, {
                        platformType: h,
                        isWaitingForConnection: !0,
                        expectedCallbackState: P,
                        onAuthToken: I,
                        onError: p,
                        onClose: e
                    })
                }),
                (0, i.jsx)(o.Slide, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, i.jsx)(l.E, {
                        platformType: h,
                        authToken: _,
                        onContinue: A,
                        onError: p,
                        onClose: e
                    })
                }),
                (0, i.jsx)(o.Slide, {
                    id: u.O.ERROR,
                    children: (0, i.jsx)(c.X, {
                        onContinue: A,
                        onClose: e,
                        errorCode: v
                    })
                }),
                (0, i.jsx)(o.Slide, {
                    id: u.O.SUCCESS,
                    children: (0, i.jsx)(d.W, { onClose: e })
                })
            ]
        })
    });
}
