"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    [17081], {
        484991: (a, s, e) => {
            e.r(s);
            e.d(s, {
                default: () => m
            });
            var t = e(785893),
                o = (e(667294), e(294184)),
                l = e.n(o),
                n = e(304548),
                i = e(714898),
                d = e(51353),
                r = e.n(d);

            function m(a) {
                var s = a.className,
                    e = a.transitionState,
                    o = a.items,
                    d = a.startingIndex,
                    m = a.onClose,
                    C = a.onIndexChange,
                    c = a.modalCarouselClassName,
                    h = a.modalCarouselItemClassName;
                return (0, t.jsx)(n.ModalRoot, {
                    hideShadow: !0,
                    className: l()(r().carouselModal, s),
                    size: n.ModalSize.DYNAMIC,
                    transitionState: e,
                    "aria-label": "",
                    onClick: m,
                    children: (0, t.jsx)(i.Z, {
                        className: c,
                        items: o,
                        startWith: d,
                        onIndexChange: C,
                        modalCarouselItemClassName: h
                    })
                })
            }
        }
    }
]);