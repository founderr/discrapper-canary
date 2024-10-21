t.r(n),
    t.d(n, {
        default: function () {
            return N;
        }
    });
var o = t(200651);
t(192379);
var i = t(481060),
    r = t(864762),
    s = t(779341),
    c = t(642566),
    l = t(742699),
    a = t(686494),
    C = t(573703),
    u = t(798930),
    d = t(981631),
    _ = t(879137);
function N(e) {
    let { transitionState: n, onClose: t, analyticsLocation: N } = e,
        { slide: L, gotoNext: R, gotoError: h, handleWaitingForConnection: O, handleAuthToken: x, expectedCallbackState: p, callbackData: T } = (0, r.k)(N, d.ABu.CRUNCHYROLL);
    return (0, o.jsx)(i.ModalRoot, {
        className: _.modal,
        transitionState: n,
        disableTrack: !0,
        children: (0, o.jsxs)(i.Slides, {
            activeSlide: L,
            width: 408,
            children: [
                (0, o.jsx)(i.Slide, {
                    id: u.O.LANDING,
                    children: (0, o.jsx)(l.Z, {
                        onContinue: R,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.PRE_CONNECT,
                    children: (0, o.jsx)(a.Z, {
                        isWaitingForConnection: !1,
                        onWaitingForConnection: O,
                        onAuthToken: x,
                        onError: h,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.PRE_CONNECT_WAITING,
                    children: (0, o.jsx)(a.Z, {
                        isWaitingForConnection: !0,
                        expectedCallbackState: p,
                        onAuthToken: x,
                        onError: h,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.DISCORD_CONSENT,
                    children: (0, o.jsx)(s.Z, {
                        authToken: T,
                        onContinue: R,
                        onError: h,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.ERROR,
                    children: (0, o.jsx)(c.Z, {
                        onContinue: R,
                        onClose: t
                    })
                }),
                (0, o.jsx)(i.Slide, {
                    id: u.O.SUCCESS,
                    children: (0, o.jsx)(C.Z, { onClose: t })
                })
            ]
        })
    });
}
