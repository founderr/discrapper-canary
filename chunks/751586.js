n.d(t, {
    K: function () {
        return O;
    },
    y: function () {
        return N;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(873546),
    u = n(481060),
    c = n(425493),
    d = n(95398),
    _ = n(169525),
    E = n(585483),
    f = n(956664),
    h = n(589530),
    p = n(124347),
    m = n(80966),
    I = n(981631),
    T = n(689938),
    g = n(565986);
function S(e) {
    let { onClose: t } = e,
        n = a.useRef(null);
    return (0, i.jsx)('div', {
        className: g.mobileCloseWrapper,
        ref: n,
        children: (0, i.jsx)(u.FocusRingScope, {
            containerRef: n,
            children: (0, i.jsx)('div', {
                children: (0, i.jsx)(c.Z, {
                    closeAction: t,
                    keybind: 'ESC'
                })
            })
        })
    });
}
let A = (e) => {
    let { children: t, hasMediaControls: n, isObscured: r, src: o } = e,
        [l, u] = a.useState(!1),
        c = a.useRef(o),
        E = (e) => {
            e.stopPropagation(), e.nativeEvent.stopPropagation(), u((e) => !e);
        };
    return (a.useEffect(() => {
        o !== c.current && u(!r);
    }, [o, r]),
    r)
        ? (0, i.jsx)(d.a.Provider, {
              value: l,
              children: (0, i.jsx)(
                  d.Z,
                  {
                      type: d.Z.Types.ATTACHMENT,
                      reason: _.wk.EXPLICIT_CONTENT,
                      className: g.obscureContainer,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      obscurityControlClassName: s()({ [g.controlsOffset]: n && l }),
                      onToggleObscurity: E,
                      children: (e) =>
                          (0, i.jsx)(i.Fragment, {
                              children: (0, i.jsx)('div', {
                                  className: s()(g.obscureWrapper, { [g.obscure]: e }),
                                  children: t(e)
                              })
                          })
                  },
                  o
              )
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
};
function v(e) {
    let { src: t, renderLinkComponent: n, renderForwardComponent: r } = e,
        a = n({
            href: t,
            target: '_blank',
            rel: 'noreferrer noopener',
            className: g.downloadLink,
            children: T.Z.Messages.OPEN_IN_BROWSER
        }),
        o = r({ className: g.forward });
    return null == a && null == o
        ? null
        : (0, i.jsxs)('div', {
              className: g.optionsContainer,
              children: [a, o]
          });
}
function N(e) {
    let { src: t, original: n, placeholder: r, width: o, height: s, animated: u, children: c, responsive: d, renderLinkComponent: _, renderForwardComponent: h, maxWidth: m, maxHeight: T, shouldAnimate: N, onClose: O, shouldHideMediaOptions: R = !1, obscure: C = !1, ...y } = e,
        { width: b, height: L } = (0, f.zp)(o, s),
        D = l.tq && null != O;
    a.useEffect(() => {
        if (null != O)
            return (
                E.S.subscribe(I.CkL.MEDIA_MODAL_CLOSE, O),
                () => {
                    E.S.unsubscribe(I.CkL.MEDIA_MODAL_CLOSE, O);
                }
            );
    }, [O]);
    let M = R
        ? (e) => {
              e.stopPropagation(), e.preventDefault();
          }
        : y.onContextMenu;
    return (0, i.jsxs)('div', {
        className: g.wrapper,
        children: [
            D ? (0, i.jsx)(S, { onClose: O }) : null,
            (0, i.jsx)(A, {
                isObscured: C,
                src: t,
                children: (e) =>
                    (0, i.jsx)(
                        p.Z,
                        {
                            src: t,
                            placeholder: r,
                            shouldLink: !1,
                            width: o,
                            height: s,
                            maxWidth: b,
                            maxHeight: L,
                            children: c,
                            animated: !e && u,
                            autoPlay: !e,
                            responsive: d,
                            onContextMenu: M,
                            ...y
                        },
                        t
                    )
            }),
            null == n || R
                ? null
                : (0, i.jsx)(v, {
                      src: n,
                      renderLinkComponent: _,
                      renderForwardComponent: h
                  })
        ]
    });
}
function O(e) {
    let { src: t, width: n, height: r, onClose: a, renderLinkComponent: o, renderForwardComponent: u, shouldHideMediaOptions: c = !1, obscure: d = !1, ..._ } = e,
        { width: E, height: p } = (0, f.zp)(n, r),
        I = l.tq && null != a,
        T = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : _.onContextMenu;
    return (0, i.jsxs)('div', {
        className: s()(g.wrapper, g.videoWrapper),
        children: [
            I ? (0, i.jsx)(S, { onClose: a }) : null,
            (0, i.jsx)(A, {
                hasMediaControls: !0,
                isObscured: d,
                src: t,
                children: (e) =>
                    (0, i.jsx)(
                        m.Z,
                        {
                            src: t,
                            width: n,
                            height: r,
                            maxWidth: E,
                            maxHeight: p,
                            renderLinkComponent: o,
                            volume: h.FC,
                            autoMute: h.rs,
                            onVolumeChange: h.jA,
                            onMute: h.Zj,
                            autoPlay: !e,
                            onContextMenu: T,
                            ..._
                        },
                        t
                    )
            }),
            c
                ? null
                : (0, i.jsx)(v, {
                      src: t,
                      renderLinkComponent: o,
                      renderForwardComponent: u
                  })
        ]
    });
}
