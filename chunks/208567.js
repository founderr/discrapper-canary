t.d(n, {
    S: function () {
        return j;
    }
}),
    t(47120);
var l,
    i = t(200651),
    r = t(192379),
    a = t(120356),
    s = t.n(a),
    o = t(512722),
    d = t.n(o),
    c = t(481060),
    u = t(624138),
    m = t(813197),
    x = t(981631),
    h = t(388032),
    g = t(640041);
function v(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
function j(e) {
    let { className: n, icon: t = null } = e;
    return (0, i.jsx)(c.ThemeProvider, {
        theme: x.BRd.LIGHT,
        children: (e) =>
            (0, i.jsx)('div', {
                className: s()(g.imageUploaderIcon, n, e),
                children: t
            })
    });
}
class p extends (l = r.PureComponent) {
    handleExternalFileChange(e) {
        d()(null != this.inputRef.current, 'ImageInputRef asked to handleExternalFileChange when not mounted'), this.inputRef.current.handleFileChange(e);
    }
    render() {
        var e;
        let n, t, l, r;
        let { image: a, hint: o, name: d, makeURL: v, disabled: p, onChange: f, showIcon: I, showIconDisabled: N, className: C, imageClassName: E, iconClassName: S, iconWrapperClassName: T, icon: y, hideSize: b, imageStyle: Z, showRemoveButton: _, maxFileSizeBytes: R, onFileSizeError: k, onOpenImageSelectModal: A, 'aria-label': D } = this.props;
        if (
            (null != (n = null != a && /^data:/.test(a) ? a : v(a))
                ? (t = 'url("'.concat(n, '")'))
                : null != d &&
                  (l = (0, i.jsx)(c.Heading, {
                      variant: 'heading-xxl/normal',
                      color: 'always-white',
                      className: g.imageUploaderAcronym,
                      children: (0, u.Zg)(d)
                  })),
            p)
        )
            return (0, i.jsx)('div', {
                className: s()(g.imageUploader, g.disabled, C),
                children: (0, i.jsxs)('div', {
                    className: s()(g.imageUploaderInner, E),
                    style: {
                        ...Z,
                        backgroundImage: t
                    },
                    children: [
                        l,
                        N &&
                            (0, i.jsx)('div', {
                                className: s()(g.imageUploaderIcon, g.imageUploaderIconDisabled, S),
                                children: y
                            })
                    ]
                })
            });
        null != a
            ? (r = (0, i.jsx)(c.Anchor, {
                  className: g.removeButton,
                  onClick: this.handleRemove,
                  children: h.intl.string(h.t.N86XcH)
              }))
            : !b &&
              (r = (0, i.jsx)('small', {
                  className: g.sizeInfo,
                  children: h.intl.format(h.t.AH4c7e, { size: x.IXf })
              }));
        let L = null !== (e = null != D ? D : o) && void 0 !== e ? e : h.intl.string(h.t['Ge+94+']);
        return (0, i.jsxs)('div', {
            className: s()(g.imageUploader, C),
            children: [
                (0, i.jsx)(c.FocusRing, {
                    within: !0,
                    children: (0, i.jsxs)('div', {
                        className: I ? s()(g.imageUploaderIconWrapper, T) : void 0,
                        children: [
                            (0, i.jsxs)('div', {
                                className: s()(g.imageUploaderInner, E),
                                style: {
                                    ...Z,
                                    backgroundImage: t
                                },
                                children: [
                                    (0, i.jsx)('span', {
                                        'aria-hidden': !0,
                                        children: l
                                    }),
                                    null != A
                                        ? (0, i.jsx)(c.Clickable, {
                                              className: g.imageUploaderFileInput,
                                              'aria-label': L,
                                              onClick: A
                                          })
                                        : (0, i.jsx)(m.ZP, {
                                              ref: this.inputRef,
                                              onChange: f,
                                              className: g.imageUploaderFileInput,
                                              'aria-label': L,
                                              tabIndex: 0,
                                              maxFileSizeBytes: R,
                                              onFileSizeError: k
                                          })
                                ]
                            }),
                            null != o &&
                                (0, i.jsx)('div', {
                                    className: g.imageUploaderHint,
                                    'aria-hidden': 'true',
                                    children: o
                                }),
                            I &&
                                (0, i.jsx)(j, {
                                    className: S,
                                    icon: y
                                })
                        ]
                    })
                }),
                _ ? r : null
            ]
        });
    }
    constructor(...e) {
        super(...e),
            v(this, 'inputRef', r.createRef()),
            v(this, 'handleRemove', () => {
                this.props.onChange(null);
            });
    }
}
v(p, 'defaultProps', {
    name: '',
    makeURL: (e) => e,
    disabled: !1,
    showIcon: !1,
    hideSize: !1,
    showRemoveButton: !0,
    maxFileSizeBytes: 1 / 0,
    icon: null
}),
    (n.Z = p);
