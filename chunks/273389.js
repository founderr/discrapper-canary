var r = n(200651),
    i = n(192379),
    a = n(481060),
    s = n(600164),
    o = n(388032),
    l = n(868786);
t.Z = (e) => {
    let t,
        { button: n, submitting: u, disableNext: c, onClick: d, canNavigateBack: f, onBackClicked: _ } = e,
        h = i.useRef(null),
        p = null != n && 'cancel' !== n.type,
        m = f && (null == n ? void 0 : n.type) !== 'done',
        g = p || m;
    if (
        (i.useEffect(() => {
            if ((null == n ? void 0 : n.type) === 'submit' || (null == n ? void 0 : n.type) === 'done') {
                var e;
                null === (e = h.current) || void 0 === e || e.focus();
            }
        }, [null == n ? void 0 : n.type]),
        !g)
    )
        return null;
    let E = o.intl.string(o.t.i4jeWV);
    return (
        (null == n ? void 0 : n.type) === 'submit' ? ((E = o.intl.string(o.t['G+vU8/'])), (t = a.Button.Colors.RED)) : (null == n ? void 0 : n.type) === 'next' ? (E = o.intl.string(o.t.PDTjLC)) : (null == n ? void 0 : n.type) === 'cancel' && ((E = o.intl.string(o.t['ETE/oK'])), (t = a.Button.Colors.TRANSPARENT)),
        (0, r.jsxs)(a.ModalFooter, {
            direction: s.Z.Direction.HORIZONTAL,
            children: [
                m &&
                    (0, r.jsx)(a.Button, {
                        onClick: _,
                        color: a.Button.Colors.TRANSPARENT,
                        disabled: u,
                        children: o.intl.string(o.t['13/7kZ'])
                    }),
                p &&
                    (0, r.jsx)(a.Button, {
                        onClick: () => {
                            if (null != n) d(n);
                        },
                        color: t,
                        className: l.actionButton,
                        disabled: u || c,
                        buttonRef: h,
                        children: E
                    })
            ]
        })
    );
};
