n.d(t, {
    Q5: function () {
        return R;
    },
    Sf: function () {
        return b;
    },
    ZP: function () {
        return Z;
    }
}),
    n(47120);
var i,
    r = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(512722),
    c = n.n(o),
    d = n(442837),
    u = n(692547),
    m = n(481060),
    h = n(570140),
    g = n(484614),
    x = n(852860),
    p = n(881052),
    f = n(751189),
    C = n(409059),
    I = n(518936),
    _ = n(999382),
    N = n(58346),
    v = n(388032),
    T = n(759985),
    j = n(113207);
function E(e, t, n) {
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
class S extends (i = d.ZP.Store) {
    getTemplate() {
        let e = _.Z.getProps().guild;
        if (null == e) return null;
        let t = C.Z.getForGuild(e.id);
        return null != t && t.state !== N.Rj.RESOLVING ? t : null;
    }
    showNotice() {
        let e = this.getTemplate();
        return null != e && null != this.name && '' !== this.name && (this.name.trim() !== e.name || this.description.trim() !== e.description);
    }
    constructor(...e) {
        super(...e),
            E(this, 'name', ''),
            E(this, 'description', ''),
            E(this, 'error', null),
            E(this, 'reset', () => {
                let e = this.getTemplate();
                if (null != e) {
                    var t, n;
                    (this.name = null !== (t = e.name) && void 0 !== t ? t : this.name), (this.description = null !== (n = e.description) && void 0 !== n ? n : this.description);
                } else (this.name = ''), (this.description = '');
                this.emitChange();
            }),
            E(this, 'setName', (e) => {
                (this.name = e), this.emitChange();
            }),
            E(this, 'setDescription', (e) => {
                (this.description = e), this.emitChange();
            }),
            E(this, 'setError', (e) => {
                (this.error = e), this.emitChange();
            }),
            E(this, 'save', async () => {
                await f.Z.updateGuildTemplate(_.Z.getProps().guild.id, this.getTemplate().code, this.name, this.description), this.emitChange();
            });
    }
}
E(S, 'displayName', 'GuildSettingsTemplateMetadataStore_');
let b = new S(h.Z);
function R() {
    let [e, t] = l.useState(!1),
        n = async () => {
            t(!0), await b.save(), t(!1);
        };
    return (0, r.jsx)(x.Z, {
        submitting: e,
        onReset: b.reset,
        onSave: n
    });
}
function Z() {
    return (0, r.jsx)(m.FormSection, {
        className: j.marginBottom4,
        children: (0, r.jsxs)(m.HeadingLevel, {
            component: (0, r.jsx)(m.FormTitle, {
                tag: m.FormTitleTags.H1,
                children: v.intl.string(v.t.KUw7Sk)
            }),
            children: [
                (0, r.jsx)(m.FormText, {
                    className: j.marginBottom20,
                    type: m.FormTextTypes.DESCRIPTION,
                    children: v.intl.format(v.t.c0m8bG, {})
                }),
                (0, r.jsx)(L, {}),
                (0, r.jsx)(m.FormDivider, { className: T.divider }),
                (0, r.jsx)(A, {})
            ]
        })
    });
}
function A() {
    let { guild: e } = _.Z.getProps();
    c()(null != e, 'guild cannot be null');
    let t = (0, d.e7)([b], () => b.error),
        [n, i] = l.useState(!0),
        { loading: s, guildTemplate: a } = (function (e) {
            let [t, n] = l.useState(!0);
            return (
                l.useEffect(() => {
                    (async function t() {
                        n(!0);
                        try {
                            await f.Z.loadTemplatesForGuild(e), n(!1);
                        } catch (e) {
                            b.setError(new p.Hx(e));
                        }
                    })();
                }, [e]),
                {
                    loading: t,
                    guildTemplate: (0, d.e7)([C.Z], () => C.Z.getForGuild(e), [e])
                }
            );
        })(e.id);
    if (
        (l.useEffect(() => {
            if (!!n && !s) {
                if (null != a) {
                    var e, t;
                    b.setName(null !== (e = a.name) && void 0 !== e ? e : ''), b.setDescription(null !== (t = a.description) && void 0 !== t ? t : '');
                }
                i(!1);
            }
        }, [n, a, s]),
        l.useEffect(
            () => () => {
                b.reset(), b.setError(null);
            },
            []
        ),
        n)
    )
        return null != t
            ? (0, r.jsx)(m.Text, {
                  color: 'text-danger',
                  variant: 'text-sm/normal',
                  children: t.message
              })
            : (0, r.jsx)(m.Spinner, { className: j.marginTop40 });
    let o = null != t && null == t.getFirstFieldErrorMessage('name') && null == t.getFirstFieldErrorMessage('description');
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(D, {}),
            (0, r.jsx)(O, {
                guild: e,
                guildTemplate: a
            }),
            o
                ? (0, r.jsx)(m.Text, {
                      className: j.marginTop8,
                      color: 'text-danger',
                      variant: 'text-sm/normal',
                      children: t.getAnyErrorMessage()
                  })
                : null
        ]
    });
}
function L() {
    return (0, r.jsxs)('div', {
        className: T.descriptionBox,
        children: [
            (0, r.jsxs)('div', {
                className: T.descriptionSection,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'eyebrow',
                        children: v.intl.string(v.t['f8u+VF'])
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.intl.string(v.t.K2tn19)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.intl.string(v.t.om5gNj)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleCheckIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.GREEN_360.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.intl.string(v.t['/VNqdH'])
                        ]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: T.descriptionSection,
                children: [
                    (0, r.jsx)(m.Heading, {
                        variant: 'eyebrow',
                        children: v.intl.string(v.t['8zhJEh'])
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleXIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.intl.string(v.t.WOKI6u)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleXIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.intl.string(v.t.ddhDJC)
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: T.descriptionRow,
                        children: [
                            (0, r.jsx)(m.CircleXIcon, {
                                size: 'md',
                                className: T.descriptionIcon,
                                color: u.Z.unsafe_rawColors.RED_400.css,
                                secondaryColor: u.Z.unsafe_rawColors.WHITE_500.css
                            }),
                            v.intl.string(v.t['6Q/DHh'])
                        ]
                    })
                ]
            })
        ]
    });
}
function y(e) {
    let { cancel: t, confirm: n } = e;
    return (0, r.jsx)(m.DeclarativeConfirmModal, {
        dismissable: !0,
        header: v.intl.string(v.t['cN/RFB']),
        confirmText: v.intl.string(v.t['cN/RFB']),
        cancelText: v.intl.string(v.t['ETE/oK']),
        onCancel: t,
        onConfirm: n,
        children: (0, r.jsx)(m.Text, {
            variant: 'text-md/normal',
            color: 'text-normal',
            children: v.intl.string(v.t.apCQv7)
        })
    });
}
function D() {
    let e = (0, d.e7)([b], () => b.name),
        t = (0, d.e7)([b], () => b.description),
        n = (0, d.e7)([b], () => b.error);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.FormItem, {
                className: j.marginBottom20,
                title: v.intl.string(v.t.z1a9R0),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('name'),
                children: (0, r.jsx)(m.TextInput, {
                    value: e,
                    onChange: (e) => b.setName(e),
                    placeholder: v.intl.string(v.t.bMlpvr),
                    maxLength: 100
                })
            }),
            (0, r.jsx)(m.FormItem, {
                className: j.marginBottom20,
                title: v.intl.string(v.t.GxirWV),
                error: null == n ? void 0 : n.getFirstFieldErrorMessage('description'),
                children: (0, r.jsx)(m.TextArea, {
                    value: t,
                    onChange: (e) => b.setDescription(e),
                    placeholder: v.intl.string(v.t.n1FBXl),
                    maxLength: 120
                })
            })
        ]
    });
}
function O(e) {
    let { guild: t, guildTemplate: n } = e;
    return null == n
        ? (0, r.jsx)(M, { guild: t })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m.FormItem, {
                      title: v.intl.string(v.t.zGGcLy),
                      children: (0, r.jsx)(g.Z, {
                          buttonLook: m.Button.Looks.FILLED,
                          buttonColor: m.Button.Colors.BRAND,
                          value: (0, I.Z)(n.code)
                      })
                  }),
                  n.isDirty &&
                      (0, r.jsx)(m.Text, {
                          color: 'text-warning',
                          className: j.marginTop8,
                          variant: 'text-sm/normal',
                          children: v.intl.string(v.t.aWsjtL)
                      }),
                  (0, r.jsxs)('div', {
                      className: a()(j.marginTop20, T.buttonContainer),
                      children: [
                          n.isDirty &&
                              (0, r.jsx)(P, {
                                  guild: t,
                                  guildTemplate: n
                              }),
                          (0, r.jsxs)('div', {
                              className: T.rightButtonContainer,
                              children: [
                                  (0, r.jsx)(k, {
                                      guild: t,
                                      guildTemplate: n
                                  }),
                                  (0, r.jsx)(w, { guildTemplate: n })
                              ]
                          })
                      ]
                  }),
                  n.isDirty &&
                      (0, r.jsx)('div', {
                          className: T.lastSync,
                          children: v.intl.format(v.t.v0AVur, { timestamp: new Date(n.updatedAt) })
                      })
              ]
          });
}
function M(e) {
    var t;
    let { guild: n } = e,
        i = (0, d.e7)([b], () => b.name),
        [s, a] = l.useState(!1),
        o = async () => {
            b.setError(null), a(!0);
            try {
                await f.Z.createGuildTemplate(n.id, b.name, b.description);
            } catch (e) {
                b.setError(new p.Hx(e));
            }
            a(!1);
        };
    return (0, r.jsx)(m.Button, {
        submitting: s,
        disabled: !(null != (t = i) && t.trim().length >= 2),
        color: m.Button.Colors.BRAND,
        onClick: o,
        children: v.intl.string(v.t.Wxdi8P)
    });
}
function P(e) {
    let { guild: t, guildTemplate: n } = e,
        [i, s] = l.useState(!1),
        a = async () => {
            b.setError(null), s(!0);
            try {
                await f.Z.syncGuildTemplate(t.id, n.code);
            } catch (e) {
                b.setError(new p.Hx(e));
            }
            s(!1);
        };
    return (0, r.jsx)(m.Button, {
        submitting: i,
        className: T.button,
        onClick: a,
        children: v.intl.string(v.t['Nw+0Y2'])
    });
}
function k(e) {
    let { guild: t, guildTemplate: n } = e,
        [i, s] = l.useState(!1),
        a = async () => {
            b.setError(null);
            try {
                await f.Z.deleteGuildTemplate(t.id, n.code), b.setName(''), b.setDescription('');
            } catch (e) {
                b.setError(new p.Hx(e));
            }
            s(!1);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(m.Button, {
                look: m.Button.Looks.OUTLINED,
                className: T.button,
                color: m.Button.Colors.RED,
                onClick: () => s(!0),
                children: v.intl.string(v.t['cN/RFB'])
            }),
            i
                ? (0, r.jsx)(y, {
                      confirm: a,
                      cancel: () => s(!1)
                  })
                : null
        ]
    });
}
function w(e) {
    let { guildTemplate: t } = e;
    return (0, r.jsx)(m.Button, {
        color: m.Button.Colors.PRIMARY,
        className: T.button,
        onClick: () =>
            (0, m.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('10778'), n.e('27815')]).then(n.bind(n, 766775));
                return (n) =>
                    (0, r.jsx)(e, {
                        ...n,
                        guildTemplate: t
                    });
            }),
        children: v.intl.string(v.t.YI3iV1)
    });
}
