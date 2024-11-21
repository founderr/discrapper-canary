n.d(t, {
    a: function () {
        return I;
    }
}),
    n(47120);
var r,
    i,
    a,
    s = n(200651),
    o = n(192379),
    l = n(120356),
    u = n.n(l),
    c = n(692547),
    d = n(481060),
    f = n(169525),
    _ = n(823379),
    p = n(388032),
    h = n(705418);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
((a = r || (r = {})).TEXT = 'text'), (a.ATTACHMENT = 'attachment'), (a.EMBED = 'embed');
let g = (e) => {
        let { className: t } = e;
        return (0, s.jsx)('div', {
            className: u()(h.spoilerWarning, t),
            children: p.intl.string(p.t['F+x38P'])
        });
    },
    E = (e) => {
        let { className: t, isSingleMosaicItem: n, obscureOnly: r } = e;
        return (0, s.jsx)('div', {
            className: u()(h.explicitContentWarning, t),
            children: r
                ? null
                : (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(d.ImageWarningIcon, {
                              size: 'lg',
                              color: c.Z.colors.WHITE
                          }),
                          n &&
                              (0, s.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'always-white',
                                  className: h.explicitContentWarningText,
                                  children: p.intl.string(p.t.SpxcUV)
                              })
                      ]
                  })
        });
    },
    v = (e) => {
        let { reason: t = f.wk.SPOILER, className: n, isSingleMosaicItem: r = !1 } = e;
        switch (t) {
            case f.wk.SPOILER:
                return (0, s.jsx)(g, { className: n });
            case f.wk.EXPLICIT_CONTENT:
                return (0, s.jsx)(E, {
                    isSingleMosaicItem: r,
                    className: n
                });
            case f.wk.POTENTIAL_EXPLICIT_CONTENT:
                return (0, s.jsx)(E, {
                    isSingleMosaicItem: r,
                    className: n,
                    obscureOnly: !0
                });
            default:
                return (0, _.vE)(t);
        }
    },
    b = (e) => {
        let { obscureReason: t, isVisible: n, handleToggleObscurity: r, obscurityControlClassName: i } = e;
        return t !== f.wk.EXPLICIT_CONTENT
            ? null
            : (0, s.jsx)('div', {
                  className: u()(h.obscureButtonContainer, i),
                  children: (0, s.jsx)(d.Clickable, {
                      className: u()(h.obscureHoverButton),
                      onClick: r,
                      'aria-label': p.intl.string(p.t.ex5G9v),
                      children: n
                          ? (0, s.jsx)(d.EyeIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                          : (0, s.jsx)(d.EyeSlashIcon, {
                                size: 'md',
                                color: 'currentColor'
                            })
                  })
              });
    },
    I = o.createContext(!1);
class T extends (i = o.PureComponent) {
    renderWithTooltip(e) {
        return (0, s.jsx)(d.Tooltip, {
            position: 'left',
            text: this.state.visible ? null : this.tooltipText,
            children: (t) => {
                let { onMouseEnter: n, onMouseLeave: r } = t;
                return o.cloneElement(o.Children.only(e), {
                    onMouseEnter: n,
                    onMouseLeave: r
                });
            }
        });
    }
    renderObscuredAttachment() {
        let { children: e, inline: t, className: n, containerStyles: r, obscured: i = !0, reason: a = f.wk.SPOILER, isSingleMosaicItem: o = !1, obscurityControlClassName: l } = this.props,
            { visible: c } = this.state,
            _ = (0, s.jsx)(I.Consumer, {
                children: (_) => {
                    let p = _ || c || !i;
                    return [f.wk.EXPLICIT_CONTENT, f.wk.POTENTIAL_EXPLICIT_CONTENT].includes(a) && !t
                        ? (0, s.jsxs)('div', {
                              'aria-label': p ? void 0 : this.ariaLabel,
                              'aria-expanded': p,
                              style: r,
                              className: u()(n, h.spoilerContent, h.spoilerContainer, {
                                  [h.hidden]: !p,
                                  [h.constrainedObscureContent]: o
                              }),
                              role: p ? 'presentation' : 'button',
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p || t
                                      ? null
                                      : (0, s.jsx)(v, {
                                            reason: a,
                                            isSingleMosaicItem: o
                                        }),
                                  (0, s.jsx)('div', {
                                      'aria-hidden': !p,
                                      className: h.spoilerInnerContainer,
                                      children: e(!p)
                                  }),
                                  (0, s.jsx)(b, {
                                      obscureReason: a,
                                      isVisible: c,
                                      handleToggleObscurity: this.handleToggleObscurity,
                                      obscurityControlClassName: l
                                  })
                              ]
                          })
                        : (0, s.jsxs)(d.Clickable, {
                              onClick: p ? void 0 : this.removeObscurity,
                              'aria-label': p ? void 0 : this.ariaLabel,
                              'aria-expanded': p,
                              style: r,
                              className: u()(n, h.spoilerContent, h.spoilerContainer, {
                                  [h.hidden]: !p,
                                  [h.hiddenSpoiler]: !p
                              }),
                              role: p ? 'presentation' : 'button',
                              tabIndex: p ? -1 : 0,
                              children: [
                                  p || t
                                      ? null
                                      : (0, s.jsx)(v, {
                                            reason: a,
                                            isSingleMosaicItem: o
                                        }),
                                  (0, s.jsx)('div', {
                                      'aria-hidden': !p,
                                      className: h.spoilerInnerContainer,
                                      children: e(!p)
                                  })
                              ]
                          });
                }
            });
        return t ? this.renderWithTooltip(_) : _;
    }
    renderObscuredEmbed() {
        let { children: e, className: t, containerStyles: n, isSingleMosaicItem: r, obscurityControlClassName: i, reason: a = f.wk.SPOILER } = this.props,
            { visible: o } = this.state;
        return (0, s.jsx)(I.Consumer, {
            children: (l) => {
                let c = l || o;
                return [f.wk.EXPLICIT_CONTENT, f.wk.POTENTIAL_EXPLICIT_CONTENT].includes(a)
                    ? (0, s.jsxs)('div', {
                          'aria-label': o ? void 0 : this.ariaLabel,
                          'aria-expanded': c,
                          style: n,
                          className: u()(t, h.spoilerContent, h.spoilerContainer, { [h.hidden]: !c }),
                          role: c ? 'presentation' : 'button',
                          tabIndex: c ? -1 : 0,
                          children: [
                              c
                                  ? null
                                  : (0, s.jsx)(v, {
                                        reason: a,
                                        isSingleMosaicItem: r
                                    }),
                              (0, s.jsx)('div', {
                                  'aria-hidden': !c,
                                  className: h.spoilerInnerContainer,
                                  children: e(!c)
                              }),
                              (0, s.jsx)(b, {
                                  obscureReason: a,
                                  isVisible: o,
                                  handleToggleObscurity: this.handleToggleObscurity,
                                  obscurityControlClassName: i
                              })
                          ]
                      })
                    : (0, s.jsxs)(d.Clickable, {
                          'aria-label': this.ariaLabel,
                          'aria-expanded': c,
                          className: u()(t, h.spoilerContent, h.spoilerContainer, { [h.hidden]: !c }),
                          onClick: c ? void 0 : this.removeObscurity,
                          style: n,
                          role: c ? 'presentation' : 'button',
                          tabIndex: c ? -1 : 0,
                          children: [
                              c
                                  ? null
                                  : (0, s.jsx)(v, {
                                        reason: a,
                                        className: h.embed
                                    }),
                              (0, s.jsx)('div', {
                                  'aria-hidden': !c,
                                  children: e(!c)
                              })
                          ]
                      });
            }
        });
    }
    renderObscuredText() {
        let { children: e, renderTextElement: t, className: n } = this.props,
            { visible: r } = this.state,
            i = (0, s.jsx)(I.Consumer, {
                children: (i) => {
                    let a = i || r,
                        l = o.Children.toArray(e(a)),
                        c = o.Children.map(l, (e) => (o.isValidElement(e) && null != t ? t(e, a) : e));
                    return (0, s.jsx)(d.Clickable, {
                        tag: 'span',
                        onClick: a ? void 0 : this.removeObscurity,
                        'aria-label': a ? void 0 : this.ariaLabel,
                        'aria-expanded': a,
                        tabIndex: a ? -1 : 0,
                        role: a ? 'presentation' : 'button',
                        className: u()(n, h.spoilerContent, h.spoilerMarkdownContent, { [h.hidden]: !a }),
                        children: (0, s.jsx)('span', {
                            className: h.obscuredTextContent,
                            children: (0, s.jsx)('span', {
                                'aria-hidden': !a,
                                className: h.obscuredTextContentInner,
                                children: c
                            })
                        })
                    });
                }
            });
        return this.renderWithTooltip(i);
    }
    render() {
        let { type: e = 'text' } = this.props;
        switch (e) {
            case 'text':
                return this.renderObscuredText();
            case 'attachment':
                return this.renderObscuredAttachment();
            case 'embed':
                return this.renderObscuredEmbed();
            default:
                return (0, _.vE)(e);
        }
    }
    get ariaLabel() {
        let { reason: e = f.wk.SPOILER } = this.props;
        switch (e) {
            case f.wk.SPOILER:
                return p.intl.string(p.t['F+x38P']);
            case f.wk.EXPLICIT_CONTENT:
                return p.intl.string(p.t.mlJ8VV);
            case f.wk.POTENTIAL_EXPLICIT_CONTENT:
                return p.intl.string(p.t['MRdR7+']);
            default:
                return (0, _.vE)(e);
        }
    }
    get tooltipText() {
        let { reason: e = f.wk.SPOILER } = this.props;
        switch (e) {
            case f.wk.SPOILER:
                return p.intl.string(p.t['F+x38P']);
            case f.wk.EXPLICIT_CONTENT:
                return p.intl.string(p.t.mlJ8VV);
            case f.wk.POTENTIAL_EXPLICIT_CONTENT:
                return p.intl.string(p.t['MRdR7+']);
            default:
                return (0, _.vE)(e);
        }
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { visible: !1 }),
            m(this, 'removeObscurity', (e) => {
                let { visible: t } = this.state;
                if (t) return;
                !t && (e.preventDefault(), e.stopPropagation()), this.setState({ visible: !0 });
                let { onReveal: n } = this.props;
                null != n && n();
            }),
            m(this, 'handleToggleObscurity', (e) => {
                e.stopPropagation(), e.nativeEvent.stopPropagation();
                let { onToggleObscurity: t } = this.props;
                null != t && t(e), this.setState((e) => ({ visible: !e.visible }));
            }),
            m(this, 'obscure', () => {
                let { visible: e } = this.state;
                e && this.setState({ visible: !1 });
            });
    }
}
m(T, 'Types', r), m(T, 'Reasons', f.wk), (t.Z = T);
