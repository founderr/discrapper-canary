r.d(t, {
    U0: function () {
        return e6;
    },
    fA: function () {
        return g;
    },
    gS: function () {
        return eZ;
    },
    qm: function () {
        return w;
    },
    rp: function () {
        return v;
    }
});
var n = r(263449),
    a = r(425930),
    _ = r(899517),
    o = r(467510),
    i = r(622916),
    E = r(26506);
let c = _.n,
    s = c.document,
    l = c.navigator,
    u = 'Report a Bug',
    I = 'Cancel',
    R = 'Send Bug Report',
    N = 'Confirm',
    A = 'Report a Bug',
    T = 'your.email@example.org',
    d = 'Email',
    f = "What's the bug? What did you expect?",
    L = 'Description',
    O = 'Your Name',
    p = 'Name',
    h = 'Thank you for your report!',
    S = '(required)',
    D = 'Add a screenshot',
    C = 'Remove screenshot',
    g = (e, t = { includeReplay: !0 }) => {
        if (!e.message) throw Error('Unable to submit feedback with empty message');
        let r = (0, n.s3)();
        if (!r) throw Error('No client setup, cannot send feedback.');
        e.tags && Object.keys(e.tags).length && (0, n.nZ)().setTags(e.tags);
        let _ = (0, a.N)(
            {
                source: 'api',
                url: (0, o.l4)(),
                ...e
            },
            t
        );
        return new Promise((e, t) => {
            let n = setTimeout(() => t('Unable to determine if Feedback was correctly sent.'), 5000),
                a = r.on('afterSendEvent', (r, o) => (r.event_id !== _ ? void 0 : (clearTimeout(n), a(), o && 'number' == typeof o.statusCode && o.statusCode >= 200 && o.statusCode < 300 && e(_), o && 'number' == typeof o.statusCode && 0 === o.statusCode) ? t('Unable to send Feedback. This is because of network issues, or because you are using an ad-blocker.') : t('Unable to send Feedback. This could be because of network issues, or because you are using an ad-blocker')));
        });
    },
    U = 'undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__;
function P(e, t) {
    return {
        ...e,
        ...t,
        tags: {
            ...e.tags,
            ...t.tags
        },
        onFormOpen: () => {
            t.onFormOpen && t.onFormOpen(), e.onFormOpen && e.onFormOpen();
        },
        onFormClose: () => {
            t.onFormClose && t.onFormClose(), e.onFormClose && e.onFormClose();
        },
        onSubmitSuccess: (r) => {
            t.onSubmitSuccess && t.onSubmitSuccess(r), e.onSubmitSuccess && e.onSubmitSuccess(r);
        },
        onSubmitError: (r) => {
            t.onSubmitError && t.onSubmitError(r), e.onSubmitError && e.onSubmitError(r);
        },
        onFormSubmitted: () => {
            t.onFormSubmitted && t.onFormSubmitted(), e.onFormSubmitted && e.onFormSubmitted();
        },
        themeDark: {
            ...e.themeDark,
            ...t.themeDark
        },
        themeLight: {
            ...e.themeLight,
            ...t.themeLight
        }
    };
}
function M(e, t) {
    return (
        Object.entries(t).forEach(([t, r]) => {
            e.setAttributeNS(null, t, r);
        }),
        e
    );
}
let G = 'rgba(88, 74, 192, 1)',
    m = {
        foreground: '#2b2233',
        background: '#ffffff',
        accentForeground: 'white',
        accentBackground: G,
        successColor: '#268d75',
        errorColor: '#df3338',
        border: '1.5px solid rgba(41, 35, 47, 0.13)',
        boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
        outline: '1px auto var(--accent-background)',
        interactiveFilter: 'brightness(95%)'
    },
    y = {
        foreground: '#ebe6ef',
        background: '#29232f',
        accentForeground: 'white',
        accentBackground: G,
        successColor: '#2da98c',
        errorColor: '#f55459',
        border: '1.5px solid rgba(235, 230, 239, 0.15)',
        boxShadow: '0px 4px 24px 0px rgba(43, 34, 51, 0.12)',
        outline: '1px auto var(--accent-background)',
        interactiveFilter: 'brightness(150%)'
    };
function b(e) {
    return `
  --foreground: ${e.foreground};
  --background: ${e.background};
  --accent-foreground: ${e.accentForeground};
  --accent-background: ${e.accentBackground};
  --success-color: ${e.successColor};
  --error-color: ${e.errorColor};
  --border: ${e.border};
  --box-shadow: ${e.boxShadow};
  --outline: ${e.outline};
  --interactive-filter: ${e.interactiveFilter};
  `;
}
let v =
    ({ lazyLoadIntegration: e, getModalIntegration: t, getScreenshotIntegration: r }) =>
    ({
        id: a = 'sentry-feedback',
        autoInject: _ = !0,
        showBranding: o = !0,
        isEmailRequired: G = !1,
        isNameRequired: v = !1,
        showEmail: w = !0,
        showName: B = !0,
        enableScreenshot: W = !0,
        useSentryUser: H = {
            email: 'email',
            name: 'username'
        },
        tags: x,
        colorScheme: Y = 'system',
        themeLight: K = {},
        themeDark: V = {},
        addScreenshotButtonLabel: k = D,
        cancelButtonLabel: F = I,
        confirmButtonLabel: X = N,
        emailLabel: j = d,
        emailPlaceholder: $ = T,
        formTitle: q = A,
        isRequiredLabel: z = S,
        messageLabel: J = L,
        messagePlaceholder: Q = f,
        nameLabel: Z = p,
        namePlaceholder: ee = O,
        removeScreenshotButtonLabel: et = C,
        submitButtonLabel: er = R,
        successMessageText: en = h,
        triggerLabel: ea = u,
        triggerAriaLabel: e_ = '',
        onFormOpen: eo,
        onFormClose: ei,
        onSubmitSuccess: eE,
        onSubmitError: ec,
        onFormSubmitted: es
    } = {}) => {
        let el = {
                id: a,
                autoInject: _,
                showBranding: o,
                isEmailRequired: G,
                isNameRequired: v,
                showEmail: w,
                showName: B,
                enableScreenshot: W,
                useSentryUser: H,
                tags: x,
                colorScheme: Y,
                themeDark: V,
                themeLight: K,
                triggerLabel: ea,
                triggerAriaLabel: e_,
                cancelButtonLabel: F,
                submitButtonLabel: er,
                confirmButtonLabel: X,
                formTitle: q,
                emailLabel: j,
                emailPlaceholder: $,
                messageLabel: J,
                messagePlaceholder: Q,
                nameLabel: Z,
                namePlaceholder: ee,
                successMessageText: en,
                isRequiredLabel: z,
                addScreenshotButtonLabel: k,
                removeScreenshotButtonLabel: et,
                onFormClose: ei,
                onFormOpen: eo,
                onSubmitError: ec,
                onSubmitSuccess: eE,
                onFormSubmitted: es
            },
            eu = null,
            eI = [],
            eR = (e) => {
                if (!eu) {
                    let t = s.createElement('div');
                    (t.id = String(e.id)),
                        s.body.appendChild(t),
                        (eu = t.attachShadow({ mode: 'open' })).appendChild(
                            (function ({ colorScheme: e, themeDark: t, themeLight: r }) {
                                let n = s.createElement('style');
                                return (
                                    (n.textContent = `
:host {
  --font-family: system-ui, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 14px;
  --z-index: 100000;

  --page-margin: 16px;
  --inset: auto 0 0 auto;
  --actor-inset: var(--inset);

  font-family: var(--font-family);
  font-size: var(--font-size);

  ${'system' !== e ? 'color-scheme: only light;' : ''}

  ${b(
      'dark' === e
          ? {
                ...y,
                ...t
            }
          : {
                ...m,
                ...r
            }
  )}
}

${
    'system' === e
        ? `
@media (prefers-color-scheme: dark) {
  :host {
    ${b({
        ...y,
        ...t
    })}
  }
}`
        : ''
}
}
`),
                                    n
                                );
                            })(e)
                        );
                }
                return eu;
            },
            eN = async (t, r, a) => {
                let _ = (0, n.s3)(),
                    o = _ && _.getIntegrationByName(t);
                if (o) return o;
                let i = ((r && r()) || (await e(a)))();
                return _ && _.addIntegration(i), i;
            },
            eA = async (e) => {
                let n = e.enableScreenshot && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(l.userAgent) || (/Macintosh/i.test(l.userAgent) && l.maxTouchPoints && l.maxTouchPoints > 1)) && !!isSecureContext && !0,
                    [a, _] = await Promise.all([eN('FeedbackModal', t, 'feedbackModalIntegration'), n ? eN('FeedbackScreenshot', r, 'feedbackScreenshotIntegration') : void 0]);
                if (!a) throw (U && i.kg.error('[Feedback] Missing feedback modal integration. Try using `feedbackSyncIntegration` in your `Sentry.init`.'), Error('[Feedback] Missing feedback modal integration!'));
                return (
                    n && !_ && U && i.kg.error('[Feedback] Missing feedback screenshot integration. Proceeding without screenshots.'),
                    a.createDialog({
                        options: e,
                        screenshotIntegration: n ? _ : void 0,
                        sendFeedback: g,
                        shadow: eR(e)
                    })
                );
            },
            eT = (e, t = {}) => {
                let r = P(el, t),
                    n = 'string' == typeof e ? s.querySelector(e) : 'function' == typeof e.addEventListener ? e : null;
                if (!n) throw (U && i.kg.error('[Feedback] Unable to attach to target element'), Error('Unable to attach to target element'));
                let a = null,
                    _ = async () => {
                        !a &&
                            (a = await eA({
                                ...r,
                                onFormClose: () => {
                                    a && a.close(), r.onFormClose && r.onFormClose();
                                },
                                onFormSubmitted: () => {
                                    a && a.removeFromDom(), r.onFormSubmitted && r.onFormSubmitted();
                                }
                            })),
                            a.appendToDom(),
                            a.open();
                    };
                n.addEventListener('click', _);
                let o = () => {
                    (eI = eI.filter((e) => e !== o)), a && a.removeFromDom(), (a = null), n.removeEventListener('click', _);
                };
                return eI.push(o), o;
            },
            ed = (e = {}) => {
                let t = P(el, e),
                    r = eR(t),
                    n = (function ({ triggerLabel: e, triggerAriaLabel: t, shadow: r }) {
                        let n = s.createElement('button');
                        if (
                            ((n.type = 'button'),
                            (n.className = 'widget__actor'),
                            (n.ariaHidden = 'false'),
                            (n.ariaLabel = t || e || u),
                            n.appendChild(
                                (function () {
                                    let e = (e) => c.document.createElementNS('http://www.w3.org/2000/svg', e),
                                        t = M(e('svg'), {
                                            width: '20',
                                            height: '20',
                                            viewBox: '0 0 20 20',
                                            fill: 'var(--foreground)'
                                        }),
                                        r = M(e('g'), { clipPath: 'url(#clip0_57_80)' }),
                                        n = M(e('path'), {
                                            'fill-rule': 'evenodd',
                                            'clip-rule': 'evenodd',
                                            d: 'M15.6622 15H12.3997C12.2129 14.9959 12.031 14.9396 11.8747 14.8375L8.04965 12.2H7.49956V19.1C7.4875 19.3348 7.3888 19.5568 7.22256 19.723C7.05632 19.8892 6.83435 19.9879 6.59956 20H2.04956C1.80193 19.9968 1.56535 19.8969 1.39023 19.7218C1.21511 19.5467 1.1153 19.3101 1.11206 19.0625V12.2H0.949652C0.824431 12.2017 0.700142 12.1783 0.584123 12.1311C0.468104 12.084 0.362708 12.014 0.274155 11.9255C0.185602 11.8369 0.115689 11.7315 0.0685419 11.6155C0.0213952 11.4995 -0.00202913 11.3752 -0.00034808 11.25V3.75C-0.00900498 3.62067 0.0092504 3.49095 0.0532651 3.36904C0.0972798 3.24712 0.166097 3.13566 0.255372 3.04168C0.344646 2.94771 0.452437 2.87327 0.571937 2.82307C0.691437 2.77286 0.82005 2.74798 0.949652 2.75H8.04965L11.8747 0.1625C12.031 0.0603649 12.2129 0.00407221 12.3997 0H15.6622C15.9098 0.00323746 16.1464 0.103049 16.3215 0.278167C16.4966 0.453286 16.5964 0.689866 16.5997 0.9375V3.25269C17.3969 3.42959 18.1345 3.83026 18.7211 4.41679C19.5322 5.22788 19.9878 6.32796 19.9878 7.47502C19.9878 8.62209 19.5322 9.72217 18.7211 10.5333C18.1345 11.1198 17.3969 11.5205 16.5997 11.6974V14.0125C16.6047 14.1393 16.5842 14.2659 16.5395 14.3847C16.4948 14.5035 16.4268 14.6121 16.3394 14.7042C16.252 14.7962 16.147 14.8698 16.0307 14.9206C15.9144 14.9714 15.7891 14.9984 15.6622 15ZM1.89695 10.325H1.88715V4.625H8.33715C8.52423 4.62301 8.70666 4.56654 8.86215 4.4625L12.6872 1.875H14.7247V13.125H12.6872L8.86215 10.4875C8.70666 10.3835 8.52423 10.327 8.33715 10.325H2.20217C2.15205 10.3167 2.10102 10.3125 2.04956 10.3125C1.9981 10.3125 1.94708 10.3167 1.89695 10.325ZM2.98706 12.2V18.1625H5.66206V12.2H2.98706ZM16.5997 9.93612V5.01393C16.6536 5.02355 16.7072 5.03495 16.7605 5.04814C17.1202 5.13709 17.4556 5.30487 17.7425 5.53934C18.0293 5.77381 18.2605 6.06912 18.4192 6.40389C18.578 6.73866 18.6603 7.10452 18.6603 7.47502C18.6603 7.84552 18.578 8.21139 18.4192 8.54616C18.2605 8.88093 18.0293 9.17624 17.7425 9.41071C17.4556 9.64518 17.1202 9.81296 16.7605 9.90191C16.7072 9.91509 16.6536 9.9265 16.5997 9.93612Z'
                                        });
                                    t.appendChild(r).appendChild(n);
                                    let a = e('defs'),
                                        _ = M(e('clipPath'), { id: 'clip0_57_80' }),
                                        o = M(e('rect'), {
                                            width: '20',
                                            height: '20',
                                            fill: 'white'
                                        });
                                    return _.appendChild(o), a.appendChild(_), t.appendChild(a).appendChild(_).appendChild(o), t;
                                })()
                            ),
                            e)
                        ) {
                            let t = s.createElement('span');
                            t.appendChild(s.createTextNode(e)), n.appendChild(t);
                        }
                        let a = (function () {
                            let e = s.createElement('style');
                            return (
                                (e.textContent = `
.widget__actor {
  position: fixed;
  z-index: var(--z-index);
  margin: var(--page-margin);
  inset: var(--actor-inset);

  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;

  font-family: inherit;
  font-size: var(--font-size);
  font-weight: 600;
  line-height: 1.14em;
  text-decoration: none;

  background: var(--actor-background, var(--background));
  border-radius: var(--actor-border-radius, 1.7em/50%);
  border: var(--actor-border, var(--border));
  box-shadow: var(--actor-box-shadow, var(--box-shadow));
  color: var(--actor-color, var(--foreground));
  fill: var(--actor-color, var(--foreground));
  cursor: pointer;
  opacity: 1;
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0) scale(1);
}
.widget__actor[aria-hidden="true"] {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  transform: translate(0, 16px) scale(0.98);
}

.widget__actor:hover {
  background: var(--actor-hover-background, var(--background));
  filter: var(--interactive-filter);
}

.widget__actor svg {
  width: 1.14em;
  height: 1.14em;
}

@media (max-width: 600px) {
  .widget__actor span {
    display: none;
  }
}
`),
                                e
                            );
                        })();
                        return {
                            el: n,
                            appendToDom() {
                                r.appendChild(a), r.appendChild(n);
                            },
                            removeFromDom() {
                                r.removeChild(n), r.removeChild(a);
                            },
                            show() {
                                n.ariaHidden = 'false';
                            },
                            hide() {
                                n.ariaHidden = 'true';
                            }
                        };
                    })({
                        triggerLabel: t.triggerLabel,
                        triggerAriaLabel: t.triggerAriaLabel,
                        shadow: r
                    });
                return (
                    eT(n.el, {
                        ...t,
                        onFormOpen() {
                            n.hide();
                        },
                        onFormClose() {
                            n.show();
                        },
                        onFormSubmitted() {
                            n.show();
                        }
                    }),
                    n
                );
            };
        return {
            name: 'Feedback',
            setupOnce() {
                if (!!(0, E.j)() && !!el.autoInject) 'loading' === s.readyState ? s.addEventListener('DOMContentLoaded', () => ed().appendToDom()) : ed().appendToDom();
            },
            attachTo: eT,
            createWidget(e = {}) {
                let t = ed(P(el, e));
                return t.appendToDom(), t;
            },
            createForm: async (e = {}) => eA(P(el, e)),
            remove() {
                eu && (eu.parentElement && eu.parentElement.remove(), (eu = null)), eI.forEach((e) => e()), (eI = []);
            }
        };
    };
function w() {
    let e = (0, n.s3)();
    return e && e.getIntegrationByName('Feedback');
}
var B,
    W,
    H,
    x,
    Y,
    K,
    V,
    k = {},
    F = [],
    X = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
    j = Array.isArray;
function $(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
}
function q(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
}
function z(e, t, r) {
    var n,
        a,
        _,
        o = {};
    for (_ in t) 'key' == _ ? (n = t[_]) : 'ref' == _ ? (a = t[_]) : (o[_] = t[_]);
    if ((arguments.length > 2 && (o.children = arguments.length > 3 ? B.call(arguments, 2) : r), 'function' == typeof e && null != e.defaultProps)) for (_ in e.defaultProps) void 0 === o[_] && (o[_] = e.defaultProps[_]);
    return J(e, o, n, a, null);
}
function J(e, t, r, n, a) {
    var _ = {
        type: e,
        props: t,
        key: r,
        ref: n,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == a ? ++H : a,
        __i: -1,
        __u: 0
    };
    return null == a && null != W.vnode && W.vnode(_), _;
}
function Q(e) {
    return e.children;
}
function Z(e, t) {
    (this.props = e), (this.context = t);
}
function ee(e, t) {
    if (null == t) return e.__ ? ee(e.__, e.__i + 1) : null;
    for (var r; t < e.__k.length; t++) if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
    return 'function' == typeof e.type ? ee(e) : null;
}
function et(e) {
    ((!e.__d && (e.__d = !0) && x.push(e) && !er.__r++) || Y !== W.debounceRendering) && ((Y = W.debounceRendering) || K)(er);
}
function er() {
    var e,
        t,
        r,
        n = [],
        a = [];
    for (x.sort(V); (e = x.shift()); )
        e.__d &&
            ((r = x.length),
            (t =
                (function (e, t, r) {
                    var n,
                        a = e.__v,
                        _ = a.__e,
                        o = e.__P;
                    if (o)
                        return (
                            ((n = $({}, a)).__v = a.__v + 1),
                            W.vnode && W.vnode(n),
                            eE(o, n, a, e.__n, void 0 !== o.ownerSVGElement, 32 & a.__u ? [_] : null, t, null == _ ? ee(a) : _, !!(32 & a.__u), r),
                            (n.__.__k[n.__i] = n),
                            (n.__d = void 0),
                            n.__e != _ &&
                                (function e(t) {
                                    var r, n;
                                    if (null != (t = t.__) && null != t.__c) {
                                        for (t.__e = t.__c.base = null, r = 0; r < t.__k.length; r++)
                                            if (null != (n = t.__k[r]) && null != n.__e) {
                                                t.__e = t.__c.base = n.__e;
                                                break;
                                            }
                                        return e(t);
                                    }
                                })(n),
                            n
                        );
                })(e, n, a) || t),
            0 === r || x.length > r ? (ec(n, t, a), (a.length = n.length = 0), (t = void 0), x.sort(V)) : t && W.__c && W.__c(t, F));
    t && ec(n, t, a), (er.__r = 0);
}
function en(e, t, r, n, a, _, o, i, E, c, s) {
    var l,
        u,
        I,
        R,
        N,
        A = (n && n.__k) || F,
        T = t.length;
    for (
        r.__d = E,
            (function (e, t, r) {
                var n,
                    a,
                    _,
                    o,
                    i,
                    E = t.length,
                    c = r.length,
                    s = c,
                    l = 0;
                for (e.__k = [], n = 0; n < E; n++)
                    null != (a = e.__k[n] = null == (a = t[n]) || 'boolean' == typeof a || 'function' == typeof a ? null : 'string' == typeof a || 'number' == typeof a || 'bigint' == typeof a || a.constructor == String ? J(null, a, null, null, a) : j(a) ? J(Q, { children: a }, null, null, null) : void 0 === a.constructor && a.__b > 0 ? J(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a)
                        ? ((a.__ = e),
                          (a.__b = e.__b + 1),
                          (i = (function (e, t, r, n) {
                              var a = e.key,
                                  _ = e.type,
                                  o = r - 1,
                                  i = r + 1,
                                  E = t[r];
                              if (null === E || (E && a == E.key && _ === E.type)) return r;
                              if (n > (null != E && 0 == (131072 & E.__u) ? 1 : 0))
                                  for (; o >= 0 || i < t.length; ) {
                                      if (o >= 0) {
                                          if ((E = t[o]) && 0 == (131072 & E.__u) && a == E.key && _ === E.type) return o;
                                          o--;
                                      }
                                      if (i < t.length) {
                                          if ((E = t[i]) && 0 == (131072 & E.__u) && a == E.key && _ === E.type) return i;
                                          i++;
                                      }
                                  }
                              return -1;
                          })(a, r, (o = n + l), s)),
                          (a.__i = i),
                          (_ = null),
                          -1 !== i && (s--, (_ = r[i]) && (_.__u |= 131072)),
                          null == _ || null === _.__v ? (-1 == i && l--, 'function' != typeof a.type && (a.__u |= 65536)) : i !== o && (i === o + 1 ? l++ : i > o ? (s > E - o ? (l += i - o) : l--) : (l = i < o && i == o - 1 ? i - o : 0), i !== n + l && (a.__u |= 65536)))
                        : (_ = r[n]) && null == _.key && _.__e && (_.__e == e.__d && (e.__d = ee(_)), el(_, _, !1), (r[n] = null), s--);
                if (s) for (n = 0; n < c; n++) null != (_ = r[n]) && 0 == (131072 & _.__u) && (_.__e == e.__d && (e.__d = ee(_)), el(_, _));
            })(r, t, A),
            E = r.__d,
            l = 0;
        l < T;
        l++
    )
        null != (I = r.__k[l]) &&
            'boolean' != typeof I &&
            'function' != typeof I &&
            ((u = -1 === I.__i ? k : A[I.__i] || k),
            (I.__i = l),
            eE(e, I, u, a, _, o, i, E, c, s),
            (R = I.__e),
            I.ref && u.ref != I.ref && (u.ref && es(u.ref, null, I), s.push(I.ref, I.__c || R, I)),
            null == N && null != R && (N = R),
            65536 & I.__u || u.__k === I.__k
                ? (E = (function e(t, r, n) {
                      var a, _;
                      if ('function' == typeof t.type) {
                          for (a = t.__k, _ = 0; a && _ < a.length; _++) a[_] && ((a[_].__ = t), (r = e(a[_], r, n)));
                          return r;
                      }
                      t.__e != r && (n.insertBefore(t.__e, r || null), (r = t.__e));
                      do r = r && r.nextSibling;
                      while (null != r && 8 === r.nodeType);
                      return r;
                  })(I, E, e))
                : 'function' == typeof I.type && void 0 !== I.__d
                  ? (E = I.__d)
                  : R && (E = R.nextSibling),
            (I.__d = void 0),
            (I.__u &= -196609));
    (r.__d = E), (r.__e = N);
}
function ea(e, t, r) {
    '-' === t[0] ? e.setProperty(t, null == r ? '' : r) : (e[t] = null == r ? '' : 'number' != typeof r || X.test(t) ? r : r + 'px');
}
function e_(e, t, r, n, a) {
    var _;
    t: if ('style' === t) {
        if ('string' == typeof r) e.style.cssText = r;
        else {
            if (('string' == typeof n && (e.style.cssText = n = ''), n)) for (t in n) (r && t in r) || ea(e.style, t, '');
            if (r) for (t in r) (n && r[t] === n[t]) || ea(e.style, t, r[t]);
        }
    } else if ('o' === t[0] && 'n' === t[1]) (_ = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, '$1'))), (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)), e.l || (e.l = {}), (e.l[t + _] = r), r ? (n ? (r.u = n.u) : ((r.u = Date.now()), e.addEventListener(t, _ ? ei : eo, _))) : e.removeEventListener(t, _ ? ei : eo, _);
    else {
        if (a) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
        else if ('width' !== t && 'height' !== t && 'href' !== t && 'list' !== t && 'form' !== t && 'tabIndex' !== t && 'download' !== t && 'rowSpan' !== t && 'colSpan' !== t && 'role' !== t && t in e)
            try {
                e[t] = null == r ? '' : r;
                break t;
            } catch (e) {}
        'function' == typeof r || (null == r || (!1 === r && '-' !== t[4]) ? e.removeAttribute(t) : e.setAttribute(t, r));
    }
}
function eo(e) {
    if (this.l) {
        var t = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= t.u) return;
        } else e.t = Date.now();
        return t(W.event ? W.event(e) : e);
    }
}
function ei(e) {
    if (this.l) return this.l[e.type + !0](W.event ? W.event(e) : e);
}
function eE(e, t, r, n, a, _, o, i, E, c) {
    var s,
        l,
        u,
        I,
        R,
        N,
        A,
        T,
        d,
        f,
        L,
        O,
        p,
        h,
        S,
        D = t.type;
    if (void 0 !== t.constructor) return null;
    128 & r.__u && ((E = !!(32 & r.__u)), (_ = [(i = t.__e = r.__e)])), (s = W.__b) && s(t);
    t: if ('function' == typeof D)
        try {
            if (((T = t.props), (d = (s = D.contextType) && n[s.__c]), (f = s ? (d ? d.props.value : s.__) : n), r.__c ? (A = (l = t.__c = r.__c).__ = l.__E) : ('prototype' in D && D.prototype.render ? (t.__c = l = new D(T, f)) : ((t.__c = l = new Z(T, f)), (l.constructor = D), (l.render = eu)), d && d.sub(l), (l.props = T), l.state || (l.state = {}), (l.context = f), (l.__n = n), (u = l.__d = !0), (l.__h = []), (l._sb = [])), null == l.__s && (l.__s = l.state), null != D.getDerivedStateFromProps && (l.__s == l.state && (l.__s = $({}, l.__s)), $(l.__s, D.getDerivedStateFromProps(T, l.__s))), (I = l.props), (R = l.state), (l.__v = t), u)) null == D.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
            else {
                if ((null == D.getDerivedStateFromProps && T !== I && null != l.componentWillReceiveProps && l.componentWillReceiveProps(T, f), !l.__e && ((null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(T, l.__s, f)) || t.__v === r.__v))) {
                    for (
                        t.__v !== r.__v && ((l.props = T), (l.state = l.__s), (l.__d = !1)),
                            t.__e = r.__e,
                            t.__k = r.__k,
                            t.__k.forEach(function (e) {
                                e && (e.__ = t);
                            }),
                            L = 0;
                        L < l._sb.length;
                        L++
                    )
                        l.__h.push(l._sb[L]);
                    (l._sb = []), l.__h.length && o.push(l);
                    break t;
                }
                null != l.componentWillUpdate && l.componentWillUpdate(T, l.__s, f),
                    null != l.componentDidUpdate &&
                        l.__h.push(function () {
                            l.componentDidUpdate(I, R, N);
                        });
            }
            if (((l.context = f), (l.props = T), (l.__P = e), (l.__e = !1), (O = W.__r), (p = 0), 'prototype' in D && D.prototype.render)) {
                for (l.state = l.__s, l.__d = !1, O && O(t), s = l.render(l.props, l.state, l.context), h = 0; h < l._sb.length; h++) l.__h.push(l._sb[h]);
                l._sb = [];
            } else
                do (l.__d = !1), O && O(t), (s = l.render(l.props, l.state, l.context)), (l.state = l.__s);
                while (l.__d && ++p < 25);
            (l.state = l.__s), null != l.getChildContext && (n = $($({}, n), l.getChildContext())), u || null == l.getSnapshotBeforeUpdate || (N = l.getSnapshotBeforeUpdate(I, R)), en(e, j((S = null != s && s.type === Q && null == s.key ? s.props.children : s)) ? S : [S], t, r, n, a, _, o, i, E, c), (l.base = t.__e), (t.__u &= -161), l.__h.length && o.push(l), A && (l.__E = l.__ = null);
        } catch (e) {
            (t.__v = null), E || null != _ ? ((t.__e = i), (t.__u |= E ? 160 : 32), (_[_.indexOf(i)] = null)) : ((t.__e = r.__e), (t.__k = r.__k)), W.__e(e, t, r);
        }
    else
        null == _ && t.__v === r.__v
            ? ((t.__k = r.__k), (t.__e = r.__e))
            : (t.__e = (function (e, t, r, n, a, _, o, i, E) {
                  var c,
                      s,
                      l,
                      u,
                      I,
                      R,
                      N,
                      A = r.props,
                      T = t.props,
                      d = t.type;
                  if (('svg' === d && (a = !0), null != _)) {
                      for (c = 0; c < _.length; c++)
                          if ((I = _[c]) && 'setAttribute' in I == !!d && (d ? I.localName === d : 3 === I.nodeType)) {
                              (e = I), (_[c] = null);
                              break;
                          }
                  }
                  if (null == e) {
                      if (null === d) return document.createTextNode(T);
                      (e = a ? document.createElementNS('http://www.w3.org/2000/svg', d) : document.createElement(d, T.is && T)), (_ = null), (i = !1);
                  }
                  if (null === d) A === T || (i && e.data === T) || (e.data = T);
                  else {
                      if (((_ = _ && B.call(e.childNodes)), (A = r.props || k), !i && null != _)) for (A = {}, c = 0; c < e.attributes.length; c++) A[(I = e.attributes[c]).name] = I.value;
                      for (c in A) (I = A[c]), 'children' == c || ('dangerouslySetInnerHTML' == c ? (l = I) : 'key' === c || c in T || e_(e, c, null, I, a));
                      for (c in T) (I = T[c]), 'children' == c ? (u = I) : 'dangerouslySetInnerHTML' == c ? (s = I) : 'value' == c ? (R = I) : 'checked' == c ? (N = I) : 'key' === c || (i && 'function' != typeof I) || A[c] === I || e_(e, c, I, A[c], a);
                      if (s) i || (l && (s.__html === l.__html || s.__html === e.innerHTML)) || (e.innerHTML = s.__html), (t.__k = []);
                      else if ((l && (e.innerHTML = ''), en(e, j(u) ? u : [u], t, r, n, a && 'foreignObject' !== d, _, o, _ ? _[0] : r.__k && ee(r, 0), i, E), null != _)) for (c = _.length; c--; ) null != _[c] && q(_[c]);
                      i || ((c = 'value'), void 0 === R || (R === e[c] && ('progress' !== d || R) && ('option' !== d || R === A[c])) || e_(e, c, R, A[c], !1), (c = 'checked'), void 0 !== N && N !== e[c] && e_(e, c, N, A[c], !1));
                  }
                  return e;
              })(r.__e, t, r, n, a, _, o, E, c));
    (s = W.diffed) && s(t);
}
function ec(e, t, r) {
    for (var n = 0; n < r.length; n++) es(r[n], r[++n], r[++n]);
    W.__c && W.__c(t, e),
        e.some(function (t) {
            try {
                (e = t.__h),
                    (t.__h = []),
                    e.some(function (e) {
                        e.call(t);
                    });
            } catch (e) {
                W.__e(e, t.__v);
            }
        });
}
function es(e, t, r) {
    try {
        'function' == typeof e ? e(t) : (e.current = t);
    } catch (e) {
        W.__e(e, r);
    }
}
function el(e, t, r) {
    var n, a;
    if ((W.unmount && W.unmount(e), (n = e.ref) && ((n.current && n.current !== e.__e) || es(n, null, t)), null != (n = e.__c))) {
        if (n.componentWillUnmount)
            try {
                n.componentWillUnmount();
            } catch (e) {
                W.__e(e, t);
            }
        (n.base = n.__P = null), (e.__c = void 0);
    }
    if ((n = e.__k)) for (a = 0; a < n.length; a++) n[a] && el(n[a], t, r || 'function' != typeof e.type);
    r || null == e.__e || q(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function eu(e, t, r) {
    return this.constructor(e, r);
}
(B = F.slice),
    (W = {
        __e: function (e, t, r, n) {
            for (var a, _, o; (t = t.__); )
                if ((a = t.__c) && !a.__)
                    try {
                        if (((_ = a.constructor) && null != _.getDerivedStateFromError && (a.setState(_.getDerivedStateFromError(e)), (o = a.__d)), null != a.componentDidCatch && (a.componentDidCatch(e, n || {}), (o = a.__d)), o)) return (a.__E = a);
                    } catch (t) {
                        e = t;
                    }
            throw e;
        }
    }),
    (H = 0),
    (Z.prototype.setState = function (e, t) {
        var r;
        (r = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = $({}, this.state))), 'function' == typeof e && (e = e($({}, r), this.props)), e && $(r, e), null != e && this.__v && (t && this._sb.push(t), et(this));
    }),
    (Z.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), et(this));
    }),
    (Z.prototype.render = Q),
    (x = []),
    (K = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (V = function (e, t) {
        return e.__v.__b - t.__v.__b;
    }),
    (er.__r = 0);
var eI,
    eR,
    eN,
    eA,
    eT = 0,
    ed = [],
    ef = [],
    eL = W,
    eO = eL.__b,
    ep = eL.__r,
    eh = eL.diffed,
    eS = eL.__c,
    eD = eL.unmount,
    eC = eL.__;
function eg(e, t) {
    eL.__h && eL.__h(eR, e, eT || t), (eT = 0);
    var r =
        eR.__H ||
        (eR.__H = {
            __: [],
            __h: []
        });
    return e >= r.__.length && r.__.push({ __V: ef }), r.__[e];
}
function eU(e) {
    return (eT = 1), eP(eW, e);
}
function eP(e, t, r) {
    var n = eg(eI++, 2);
    if (
        ((n.t = e),
        !n.__c &&
            ((n.__ = [
                r ? r(t) : eW(void 0, t),
                function (e) {
                    var t = n.__N ? n.__N[0] : n.__[0],
                        r = n.t(t, e);
                    t !== r && ((n.__N = [r, n.__[1]]), n.__c.setState({}));
                }
            ]),
            (n.__c = eR),
            !eR.u))
    ) {
        var a = function (e, t, r) {
            if (!n.__c.__H) return !0;
            var a = n.__c.__H.__.filter(function (e) {
                return !!e.__c;
            });
            if (
                a.every(function (e) {
                    return !e.__N;
                })
            )
                return !_ || _.call(this, e, t, r);
            var o = !1;
            return (
                a.forEach(function (e) {
                    if (e.__N) {
                        var t = e.__[0];
                        (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (o = !0);
                    }
                }),
                !(!o && n.__c.props === e) && (!_ || _.call(this, e, t, r))
            );
        };
        eR.u = !0;
        var _ = eR.shouldComponentUpdate,
            o = eR.componentWillUpdate;
        (eR.componentWillUpdate = function (e, t, r) {
            if (this.__e) {
                var n = _;
                (_ = void 0), a(e, t, r), (_ = n);
            }
            o && o.call(this, e, t, r);
        }),
            (eR.shouldComponentUpdate = a);
    }
    return n.__N || n.__;
}
function eM(e, t) {
    var r = eg(eI++, 4);
    !eL.__s && eB(r.__H, t) && ((r.__ = e), (r.i = t), eR.__h.push(r));
}
function eG(e, t) {
    var r = eg(eI++, 7);
    return eB(r.__H, t) ? ((r.__V = e()), (r.i = t), (r.__h = e), r.__V) : r.__;
}
function em(e, t) {
    return (
        (eT = 8),
        eG(function () {
            return e;
        }, t)
    );
}
function ey() {
    for (var e; (e = ed.shift()); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(ev), e.__H.__h.forEach(ew), (e.__H.__h = []);
            } catch (t) {
                (e.__H.__h = []), eL.__e(t, e.__v);
            }
}
(eL.__b = function (e) {
    (eR = null), eO && eO(e);
}),
    (eL.__ = function (e, t) {
        t.__k && t.__k.__m && (e.__m = t.__k.__m), eC && eC(e, t);
    }),
    (eL.__r = function (e) {
        ep && ep(e), (eI = 0);
        var t = (eR = e.__c).__H;
        t &&
            (eN === eR
                ? ((t.__h = []),
                  (eR.__h = []),
                  t.__.forEach(function (e) {
                      e.__N && (e.__ = e.__N), (e.__V = ef), (e.__N = e.i = void 0);
                  }))
                : (t.__h.forEach(ev), t.__h.forEach(ew), (t.__h = []), (eI = 0))),
            (eN = eR);
    }),
    (eL.diffed = function (e) {
        eh && eh(e);
        var t = e.__c;
        t &&
            t.__H &&
            (t.__H.__h.length &&
                ((1 !== ed.push(t) && eA === eL.requestAnimationFrame) ||
                    (
                        (eA = eL.requestAnimationFrame) ||
                        function (e) {
                            var t,
                                r = function () {
                                    clearTimeout(n), eb && cancelAnimationFrame(t), setTimeout(e);
                                },
                                n = setTimeout(r, 100);
                            eb && (t = requestAnimationFrame(r));
                        }
                    )(ey)),
            t.__H.__.forEach(function (e) {
                e.i && (e.__H = e.i), e.__V !== ef && (e.__ = e.__V), (e.i = void 0), (e.__V = ef);
            })),
            (eN = eR = null);
    }),
    (eL.__c = function (e, t) {
        t.some(function (e) {
            try {
                e.__h.forEach(ev),
                    (e.__h = e.__h.filter(function (e) {
                        return !e.__ || ew(e);
                    }));
            } catch (r) {
                t.some(function (e) {
                    e.__h && (e.__h = []);
                }),
                    (t = []),
                    eL.__e(r, e.__v);
            }
        }),
            eS && eS(e, t);
    }),
    (eL.unmount = function (e) {
        eD && eD(e);
        var t,
            r = e.__c;
        r &&
            r.__H &&
            (r.__H.__.forEach(function (e) {
                try {
                    ev(e);
                } catch (e) {
                    t = e;
                }
            }),
            (r.__H = void 0),
            t && eL.__e(t, r.__v));
    });
var eb = 'function' == typeof requestAnimationFrame;
function ev(e) {
    var t = eR,
        r = e.__c;
    'function' == typeof r && ((e.__c = void 0), r()), (eR = t);
}
function ew(e) {
    var t = eR;
    (e.__c = e.__()), (eR = t);
}
function eB(e, t) {
    return (
        !e ||
        e.length !== t.length ||
        t.some(function (t, r) {
            return t !== e[r];
        })
    );
}
function eW(e, t) {
    return 'function' == typeof t ? t(e) : t;
}
let eH = {
        __proto__: null,
        useCallback: em,
        useContext: function (e) {
            var t = eR.context[e.__c],
                r = eg(eI++, 9);
            return (r.c = e), t ? (null == r.__ && ((r.__ = !0), t.sub(eR)), t.props.value) : e.__;
        },
        useDebugValue: function (e, t) {
            eL.useDebugValue && eL.useDebugValue(t ? t(e) : e);
        },
        useEffect: function (e, t) {
            var r = eg(eI++, 3);
            !eL.__s && eB(r.__H, t) && ((r.__ = e), (r.i = t), eR.__H.__h.push(r));
        },
        useErrorBoundary: function (e) {
            var t = eg(eI++, 10),
                r = eU();
            return (
                (t.__ = e),
                eR.componentDidCatch ||
                    (eR.componentDidCatch = function (e, n) {
                        t.__ && t.__(e, n), r[1](e);
                    }),
                [
                    r[0],
                    function () {
                        r[1](void 0);
                    }
                ]
            );
        },
        useId: function () {
            var e = eg(eI++, 11);
            if (!e.__) {
                for (var t = eR.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
                var r = t.__m || (t.__m = [0, 0]);
                e.__ = 'P' + r[0] + '-' + r[1]++;
            }
            return e.__;
        },
        useImperativeHandle: function (e, t, r) {
            (eT = 6),
                eM(
                    function () {
                        return 'function' == typeof e
                            ? (e(t()),
                              function () {
                                  return e(null);
                              })
                            : e
                              ? ((e.current = t()),
                                function () {
                                    return (e.current = null);
                                })
                              : void 0;
                    },
                    null == r ? r : r.concat(e)
                );
        },
        useLayoutEffect: eM,
        useMemo: eG,
        useReducer: eP,
        useRef: function (e) {
            return (
                (eT = 5),
                eG(function () {
                    return { current: e };
                }, [])
            );
        },
        useState: eU
    },
    ex = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/DialogHeader.tsx';
function eY({ options: e }) {
    let t = eG(
        () => ({
            __html: (function () {
                let e = (e) => s.createElementNS('http://www.w3.org/2000/svg', e),
                    t = M(e('svg'), {
                        width: '32',
                        height: '30',
                        viewBox: '0 0 72 66',
                        fill: 'inherit'
                    }),
                    r = M(e('path'), {
                        transform: 'translate(11, 11)',
                        d: 'M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z'
                    });
                return t.appendChild(r), t;
            })().outerHTML
        }),
        []
    );
    return z(
        'h2',
        {
            class: 'dialog__header',
            __self: this,
            __source: {
                fileName: ex,
                lineNumber: 16
            }
        },
        e.formTitle,
        e.showBranding
            ? z('a', {
                  class: 'brand-link',
                  target: '_blank',
                  href: 'https://sentry.io/welcome/',
                  title: 'Powered by Sentry',
                  rel: 'noopener noreferrer',
                  dangerouslySetInnerHTML: t,
                  __self: this,
                  __source: {
                      fileName: ex,
                      lineNumber: 19
                  }
              })
            : null
    );
}
let eK = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Form.tsx';
function eV(e, t) {
    let r = e.get(t);
    return 'string' == typeof r ? r.trim() : '';
}
function ek({ options: e, defaultEmail: t, defaultName: r, onFormClose: n, onSubmit: a, onSubmitSuccess: _, onSubmitError: o, showEmail: E, showName: c, screenshotInput: s }) {
    let { tags: l, addScreenshotButtonLabel: u, removeScreenshotButtonLabel: I, cancelButtonLabel: R, emailLabel: N, emailPlaceholder: A, isEmailRequired: T, isNameRequired: d, messageLabel: f, messagePlaceholder: L, nameLabel: O, namePlaceholder: p, submitButtonLabel: h, isRequiredLabel: S } = e,
        [D, C] = eU(null),
        [g, P] = eU(!1),
        M = s && s.input,
        [G, m] = eU(null),
        y = em((e) => {
            m(e), P(!1);
        }, []),
        b = em(
            (e) => {
                let t = (function (e, t) {
                    let r = [];
                    return t.isNameRequired && !e.name && r.push(t.nameLabel), t.isEmailRequired && !e.email && r.push(t.emailLabel), !e.message && r.push(t.messageLabel), r;
                })(e, {
                    emailLabel: N,
                    isEmailRequired: T,
                    isNameRequired: d,
                    messageLabel: f,
                    nameLabel: O
                });
                return t.length > 0 ? C(`Please enter in the following required fields: ${t.join(', ')}`) : C(null), 0 === t.length;
            },
            [N, T, d, f, O]
        );
    return z(
        'form',
        {
            class: 'form',
            onSubmit: em(
                async (e) => {
                    try {
                        if ((e.preventDefault(), !(e.target instanceof HTMLFormElement))) return;
                        let t = new FormData(e.target),
                            r = await (s && g ? s.value() : void 0),
                            n = {
                                name: eV(t, 'name'),
                                email: eV(t, 'email'),
                                message: eV(t, 'message'),
                                attachments: r ? [r] : void 0
                            };
                        if (!b(n)) return;
                        try {
                            await a(
                                {
                                    name: n.name,
                                    email: n.email,
                                    message: n.message,
                                    source: 'widget',
                                    tags: l
                                },
                                { attachments: n.attachments }
                            ),
                                _(n);
                        } catch (e) {
                            U && i.kg.error(e), C(e), o(e);
                        }
                    } catch (e) {}
                },
                [s && g, _, o]
            ),
            __self: this,
            __source: {
                fileName: eK,
                lineNumber: 144
            }
        },
        M && g
            ? z(M, {
                  onError: y,
                  __self: this,
                  __source: {
                      fileName: eK,
                      lineNumber: 146
                  }
              })
            : null,
        z(
            'div',
            {
                class: 'form__right',
                'data-sentry-feedback': !0,
                __self: this,
                __source: {
                    fileName: eK,
                    lineNumber: 149
                }
            },
            z(
                'div',
                {
                    class: 'form__top',
                    __self: this,
                    __source: {
                        fileName: eK,
                        lineNumber: 150
                    }
                },
                D
                    ? z(
                          'div',
                          {
                              class: 'form__error-container',
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 151
                              }
                          },
                          D
                      )
                    : null,
                c
                    ? z(
                          'label',
                          {
                              for: 'name',
                              class: 'form__label',
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 154
                              }
                          },
                          z(eF, {
                              label: O,
                              isRequiredLabel: S,
                              isRequired: d,
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 155
                              }
                          }),
                          z('input', {
                              class: 'form__input',
                              defaultValue: r,
                              id: 'name',
                              name: 'name',
                              placeholder: p,
                              required: d,
                              type: 'text',
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 156
                              }
                          })
                      )
                    : z('input', {
                          'aria-hidden': !0,
                          value: r,
                          name: 'name',
                          type: 'hidden',
                          __self: this,
                          __source: {
                              fileName: eK,
                              lineNumber: 167
                          }
                      }),
                E
                    ? z(
                          'label',
                          {
                              for: 'email',
                              class: 'form__label',
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 171
                              }
                          },
                          z(eF, {
                              label: N,
                              isRequiredLabel: S,
                              isRequired: T,
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 172
                              }
                          }),
                          z('input', {
                              class: 'form__input',
                              defaultValue: t,
                              id: 'email',
                              name: 'email',
                              placeholder: A,
                              required: T,
                              type: 'email',
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 173
                              }
                          })
                      )
                    : z('input', {
                          'aria-hidden': !0,
                          value: t,
                          name: 'email',
                          type: 'hidden',
                          __self: this,
                          __source: {
                              fileName: eK,
                              lineNumber: 184
                          }
                      }),
                z(
                    'label',
                    {
                        for: 'message',
                        class: 'form__label',
                        __self: this,
                        __source: {
                            fileName: eK,
                            lineNumber: 187
                        }
                    },
                    z(eF, {
                        label: f,
                        isRequiredLabel: S,
                        isRequired: !0,
                        __self: this,
                        __source: {
                            fileName: eK,
                            lineNumber: 188
                        }
                    }),
                    z('textarea', {
                        autoFocus: !0,
                        class: 'form__input form__input--textarea',
                        id: 'message',
                        name: 'message',
                        placeholder: L,
                        required: !0,
                        rows: 5,
                        __self: this,
                        __source: {
                            fileName: eK,
                            lineNumber: 189
                        }
                    })
                ),
                M
                    ? z(
                          'label',
                          {
                              for: 'screenshot',
                              class: 'form__label',
                              __self: this,
                              __source: {
                                  fileName: eK,
                                  lineNumber: 201
                              }
                          },
                          z(
                              'button',
                              {
                                  class: 'btn btn--default',
                                  type: 'button',
                                  onClick: () => {
                                      m(null), P((e) => !e);
                                  },
                                  __self: this,
                                  __source: {
                                      fileName: eK,
                                      lineNumber: 202
                                  }
                              },
                              g ? I : u
                          ),
                          G
                              ? z(
                                    'div',
                                    {
                                        class: 'form__error-container',
                                        __self: this,
                                        __source: {
                                            fileName: eK,
                                            lineNumber: 212
                                        }
                                    },
                                    G.message
                                )
                              : null
                      )
                    : null
            ),
            z(
                'div',
                {
                    class: 'btn-group',
                    __self: this,
                    __source: {
                        fileName: eK,
                        lineNumber: 216
                    }
                },
                z(
                    'button',
                    {
                        class: 'btn btn--primary',
                        type: 'submit',
                        __self: this,
                        __source: {
                            fileName: eK,
                            lineNumber: 217
                        }
                    },
                    h
                ),
                z(
                    'button',
                    {
                        class: 'btn btn--default',
                        type: 'button',
                        onClick: n,
                        __self: this,
                        __source: {
                            fileName: eK,
                            lineNumber: 220
                        }
                    },
                    R
                )
            )
        )
    );
}
function eF({ label: e, isRequired: t, isRequiredLabel: r }) {
    return z(
        'span',
        {
            class: 'form__label__text',
            __self: this,
            __source: {
                fileName: eK,
                lineNumber: 239
            }
        },
        e,
        t &&
            z(
                'span',
                {
                    class: 'form__label__text--required',
                    __self: this,
                    __source: {
                        fileName: eK,
                        lineNumber: 241
                    }
                },
                r
            )
    );
}
let eX = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/components/Dialog.tsx';
function ej({ open: e, onFormSubmitted: t, ...r }) {
    let n = r.options,
        a = eG(
            () => ({
                __html: (function () {
                    let e = (e) => c.document.createElementNS('http://www.w3.org/2000/svg', e),
                        t = M(e('svg'), {
                            width: '16',
                            height: '17',
                            viewBox: '0 0 16 17',
                            fill: 'inherit'
                        }),
                        r = M(e('g'), { clipPath: 'url(#clip0_57_156)' }),
                        n = M(e('path'), {
                            'fill-rule': 'evenodd',
                            'clip-rule': 'evenodd',
                            d: 'M3.55544 15.1518C4.87103 16.0308 6.41775 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.91775 15.5308 5.37103 14.6518 4.05544C13.7727 2.73985 12.5233 1.71447 11.0615 1.10897C9.59966 0.503466 7.99113 0.34504 6.43928 0.653721C4.88743 0.962403 3.46197 1.72433 2.34315 2.84315C1.22433 3.96197 0.462403 5.38743 0.153721 6.93928C-0.15496 8.49113 0.00346625 10.0997 0.608967 11.5615C1.21447 13.0233 2.23985 14.2727 3.55544 15.1518ZM4.40546 3.1204C5.46945 2.40946 6.72036 2.03 8 2.03C9.71595 2.03 11.3616 2.71166 12.575 3.92502C13.7883 5.13838 14.47 6.78405 14.47 8.5C14.47 9.77965 14.0905 11.0306 13.3796 12.0945C12.6687 13.1585 11.6582 13.9878 10.476 14.4775C9.29373 14.9672 7.99283 15.0953 6.73777 14.8457C5.48271 14.596 4.32987 13.9798 3.42502 13.075C2.52018 12.1701 1.90397 11.0173 1.65432 9.76224C1.40468 8.50718 1.5328 7.20628 2.0225 6.02404C2.5122 4.8418 3.34148 3.83133 4.40546 3.1204Z'
                        }),
                        a = M(e('path'), { d: 'M6.68775 12.4297C6.78586 12.4745 6.89218 12.4984 7 12.5C7.11275 12.4955 7.22315 12.4664 7.32337 12.4145C7.4236 12.3627 7.51121 12.2894 7.58 12.2L12 5.63999C12.0848 5.47724 12.1071 5.28902 12.0625 5.11098C12.0178 4.93294 11.9095 4.77744 11.7579 4.67392C11.6064 4.57041 11.4221 4.52608 11.24 4.54931C11.0579 4.57254 10.8907 4.66173 10.77 4.79999L6.88 10.57L5.13 8.56999C5.06508 8.49566 4.98613 8.43488 4.89768 8.39111C4.80922 8.34735 4.713 8.32148 4.61453 8.31498C4.51605 8.30847 4.41727 8.32147 4.32382 8.35322C4.23038 8.38497 4.14413 8.43484 4.07 8.49999C3.92511 8.63217 3.83692 8.81523 3.82387 9.01092C3.81083 9.2066 3.87393 9.39976 4 9.54999L6.43 12.24C6.50187 12.3204 6.58964 12.385 6.68775 12.4297Z' });
                    t.appendChild(r).append(a, n);
                    let _ = e('defs'),
                        o = M(e('clipPath'), { id: 'clip0_57_156' }),
                        i = M(e('rect'), {
                            width: '16',
                            height: '16',
                            fill: 'white',
                            transform: 'translate(0 0.5)'
                        });
                    return o.appendChild(i), _.appendChild(o), t.appendChild(_).appendChild(o).appendChild(i), t;
                })().outerHTML
            }),
            []
        ),
        [_, o] = eU(null),
        i = em(() => {
            _ && (clearTimeout(_), o(null)), t();
        }, [_]),
        E = em(
            (e) => {
                r.onSubmitSuccess(e),
                    o(
                        setTimeout(() => {
                            t(), o(null);
                        }, 5000)
                    );
            },
            [t]
        );
    return z(
        Q,
        {
            __self: this,
            __source: {
                fileName: eX,
                lineNumber: 48
            }
        },
        _
            ? z(
                  'div',
                  {
                      class: 'success__position',
                      onClick: i,
                      __self: this,
                      __source: {
                          fileName: eX,
                          lineNumber: 50
                      }
                  },
                  z(
                      'div',
                      {
                          class: 'success__content',
                          __self: this,
                          __source: {
                              fileName: eX,
                              lineNumber: 51
                          }
                      },
                      n.successMessageText,
                      z('span', {
                          class: 'success__icon',
                          dangerouslySetInnerHTML: a,
                          __self: this,
                          __source: {
                              fileName: eX,
                              lineNumber: 53
                          }
                      })
                  )
              )
            : z(
                  'dialog',
                  {
                      class: 'dialog',
                      onClick: n.onFormClose,
                      open: e,
                      __self: this,
                      __source: {
                          fileName: eX,
                          lineNumber: 57
                      }
                  },
                  z(
                      'div',
                      {
                          class: 'dialog__position',
                          __self: this,
                          __source: {
                              fileName: eX,
                              lineNumber: 58
                          }
                      },
                      z(
                          'div',
                          {
                              class: 'dialog__content',
                              onClick: (e) => {
                                  e.stopPropagation();
                              },
                              __self: this,
                              __source: {
                                  fileName: eX,
                                  lineNumber: 59
                              }
                          },
                          z(eY, {
                              options: n,
                              __self: this,
                              __source: {
                                  fileName: eX,
                                  lineNumber: 66
                              }
                          }),
                          z(ek, {
                              ...r,
                              onSubmitSuccess: E,
                              __self: this,
                              __source: {
                                  fileName: eX,
                                  lineNumber: 67
                              }
                          })
                      )
                  )
              )
    );
}
let e$ = `
.dialog {
  position: fixed;
  z-index: var(--z-index);
  margin: 0;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  height: 100vh;
  width: 100vw;

  color: var(--dialog-color, var(--foreground));
  fill: var(--dialog-color, var(--foreground));
  line-height: 1.75em;

  background-color: rgba(0, 0, 0, 0.05);
  border: none;
  inset: 0;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.dialog__position {
  position: fixed;
  z-index: var(--z-index);
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  display: flex;
  max-height: calc(100vh - (2 * var(--page-margin)));
}
@media (max-width: 600px) {
  .dialog__position {
    inset: var(--page-margin);
    padding: 0;
  }
}

.dialog__position:has(.editor) {
  inset: var(--page-margin);
  padding: 0;
}

.dialog:not([open]) {
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
}
.dialog:not([open]) .dialog__content {
  transform: translate(0, -16px) scale(0.98);
}

.dialog__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: var(--dialog-padding, 24px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  overflow: auto;

  background: var(--dialog-background, var(--background));
  border-radius: var(--dialog-border-radius, 20px);
  border: var(--dialog-border, var(--border));
  box-shadow: var(--dialog-box-shadow, var(--box-shadow));
  transform: translate(0, 0) scale(1);
  transition: transform 0.2s ease-in-out;
}
`,
    eq = `
.dialog__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: var(--dialog-header-weight, 600);
  margin: 0;
}

.brand-link {
  display: inline-flex;
}
.brand-link:focus-visible {
  outline: var(--outline);
}
`,
    ez = `
.form {
  display: flex;
  overflow: auto;
  flex-direction: row;
  gap: 16px;
  flex: 1 0;
}

.form__right {
  flex: 0 0 var(--form-width, 272px);
  width: var(--form-width, 272px);
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 600px) {
  .form__right {
    width: auto;
  }
}

.form__top {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form__error-container {
  color: var(--error-color);
  fill: var(--error-color);
}

.form__label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px;
}

.form__label__text {
  display: flex;
  gap: 4px;
  align-items: center;
}

.form__label__text--required {
  font-size: 0.85em;
}

.form__input {
  font-family: inherit;
  line-height: inherit;
  background: transparent;
  box-sizing: border-box;
  border: var(--input-border, var(--border));
  border-radius: var(--input-border-radius, 6px);
  color: var(--input-color, inherit);
  fill: var(--input-color, inherit);
  font-size: var(--input-font-size, inherit);
  font-weight: var(--input-font-weight, 500);
  padding: 6px 12px;
}

.form__input::placeholder {
  opacity: 0.65;
  color: var(--input-placeholder-color, inherit);
  filter: var(--interactive-filter);
}

.form__input:focus-visible {
  outline: var(--input-focus-outline, var(--outline));
}

.form__input--textarea {
  font-family: inherit;
  resize: vertical;
}

.error {
  color: var(--error-color);
  fill: var(--error-color);
}
`,
    eJ = `
.btn-group {
  display: grid;
  gap: 8px;
}

.btn {
  line-height: inherit;
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  cursor: pointer;
  font-family: inherit;
  font-size: var(--button-font-size, inherit);
  font-weight: var(--button-font-weight, 600);
  padding: var(--button-padding, 6px 16px);
}
.btn[disabled] {
  opacity: 0.6;
  pointer-events: none;
}

.btn--primary {
  color: var(--button-primary-color, var(--accent-foreground));
  fill: var(--button-primary-color, var(--accent-foreground));
  background: var(--button-primary-background, var(--accent-background));
  border: var(--button-primary-border, var(--border));
  border-radius: var(--button-primary-border-radius, 6px);
  font-weight: var(--button-primary-font-weight, 500);
}
.btn--primary:hover {
  color: var(--button-primary-hover-color, var(--accent-foreground));
  fill: var(--button-primary-hover-color, var(--accent-foreground));
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
}
.btn--primary:focus-visible {
  background: var(--button-primary-hover-background, var(--accent-background));
  filter: var(--interactive-filter);
  outline: var(--button-primary-focus-outline, var(--outline));
}

.btn--default {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-background, var(--background));
  border: var(--button-border, var(--border));
  border-radius: var(--button-border-radius, 6px);
  font-weight: var(--button-font-weight, 500);
}
.btn--default:hover {
  color: var(--button-color, var(--foreground));
  fill: var(--button-color, var(--foreground));
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
}
.btn--default:focus-visible {
  background: var(--button-hover-background, var(--background));
  filter: var(--interactive-filter);
  outline: var(--button-focus-outline, var(--outline));
}
`,
    eQ = `
.success__position {
  position: fixed;
  inset: var(--dialog-inset);
  padding: var(--page-margin);
  z-index: var(--z-index);
}
.success__content {
  background: var(--success-background, var(--background));
  border: var(--success-border, var(--border));
  border-radius: var(--success-border-radius, 1.7em/50%);
  box-shadow: var(--success-box-shadow, var(--box-shadow));
  font-weight: var(--success-font-weight, 600);
  color: var(--success-color);
  fill: var(--success-color);
  padding: 12px 24px;
  line-height: 1.75em;

  display: grid;
  align-items: center;
  grid-auto-flow: column;
  gap: 6px;
  cursor: default;
}

.success__icon {
  display: flex;
}
`,
    eZ = () => ({
        name: 'FeedbackModal',
        setupOnce() {},
        createDialog: ({ options: e, screenshotIntegration: t, sendFeedback: r, shadow: a }) => {
            let _ = e.useSentryUser,
                o = (function () {
                    let e = (0, n.nZ)().getUser(),
                        t = (0, n.aF)().getUser(),
                        r = (0, n.lW)().getUser();
                    return e && Object.keys(e).length ? e : t && Object.keys(t).length ? t : r;
                })(),
                i = s.createElement('div'),
                E = (function () {
                    let e = s.createElement('style');
                    return (
                        (e.textContent = `
:host {
  --dialog-inset: var(--inset);
}

${e$}
${eq}
${ez}
${eJ}
${eQ}
`),
                        e
                    );
                })(),
                c = '',
                l = {
                    get el() {
                        return i;
                    },
                    appendToDom() {
                        !a.contains(E) && !a.contains(i) && (a.appendChild(E), a.appendChild(i));
                    },
                    removeFromDom() {
                        a.removeChild(i), a.removeChild(E), (s.body.style.overflow = c);
                    },
                    open() {
                        I(!0), e.onFormOpen && e.onFormOpen(), (c = s.body.style.overflow), (s.body.style.overflow = 'hidden');
                    },
                    close() {
                        I(!1), (s.body.style.overflow = c);
                    }
                },
                u =
                    t &&
                    t.createInput({
                        h: z,
                        hooks: eH,
                        dialog: l,
                        options: e
                    }),
                I = (t) => {
                    var n, a, E, c, s, l, R;
                    (n = z(ej, {
                        options: e,
                        screenshotInput: u,
                        showName: e.showName || e.isNameRequired,
                        showEmail: e.showEmail || e.isEmailRequired,
                        defaultName: (_ && o && o[_.name]) || '',
                        defaultEmail: (_ && o && o[_.email]) || '',
                        onFormClose: () => {
                            I(!1), e.onFormClose && e.onFormClose();
                        },
                        onSubmit: r,
                        onSubmitSuccess: (t) => {
                            I(!1), e.onSubmitSuccess && e.onSubmitSuccess(t);
                        },
                        onSubmitError: (t) => {
                            e.onSubmitError && e.onSubmitError(t);
                        },
                        onFormSubmitted: () => {
                            e.onFormSubmitted && e.onFormSubmitted();
                        },
                        open: t,
                        __self: void 0,
                        __source: {
                            fileName: '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/modal/integration.tsx',
                            lineNumber: 67
                        }
                    })),
                        (a = i),
                        W.__ && W.__(n, a),
                        (s = ((c = false), (E && E.__k) || a.__k)),
                        (l = []),
                        (R = []),
                        eE(a, (n = ((!c && E) || a).__k = z(Q, null, [n])), s || k, k, void 0 !== a.ownerSVGElement, !c && E ? [E] : s ? null : a.firstChild ? B.call(a.childNodes) : null, l, !c && E ? E : s ? s.__e : a.firstChild, c, R),
                        (n.__d = void 0),
                        ec(l, n, R);
                };
            return l;
        }
    }),
    e0 = '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/ScreenshotEditor.tsx',
    e1 = 33,
    e2 = c.devicePixelRatio,
    e3 = (e) => ({
        x: Math.min(e.startX, e.endX),
        y: Math.min(e.startY, e.endY),
        width: Math.abs(e.startX - e.endX),
        height: Math.abs(e.startY - e.endY)
    }),
    e5 = (e) => {
        let t = e.clientHeight,
            r = e.clientWidth,
            n = e.width / e.height,
            a = t * n,
            _ = t;
        a > r && ((a = r), (_ = r / n));
        let o = (r - a) / 2,
            i = (t - _) / 2;
        return {
            startX: o,
            startY: i,
            endX: a + o,
            endY: _ + i
        };
    },
    e6 = () => ({
        name: 'FeedbackScreenshot',
        setupOnce() {},
        createInput: ({ h: e, hooks: t, dialog: r, options: n }) => {
            let a = s.createElement('canvas');
            return {
                input: (function ({ h: e, hooks: t, imageBuffer: r, dialog: n, options: a }) {
                    let _ = (function ({ hooks: e }) {
                        return function ({ onBeforeScreenshot: t, onScreenshot: r, onAfterScreenshot: n, onError: a }) {
                            e.useEffect(() => {
                                (async () => {
                                    t();
                                    let e = await l.mediaDevices.getDisplayMedia({
                                            video: {
                                                width: c.innerWidth * c.devicePixelRatio,
                                                height: c.innerHeight * c.devicePixelRatio
                                            },
                                            audio: !1,
                                            monitorTypeSurfaces: 'exclude',
                                            preferCurrentTab: !0,
                                            selfBrowserSurface: 'include',
                                            surfaceSwitching: 'exclude'
                                        }),
                                        a = s.createElement('video');
                                    await new Promise((t, n) => {
                                        (a.srcObject = e),
                                            (a.onloadedmetadata = () => {
                                                r(a), e.getTracks().forEach((e) => e.stop()), t();
                                            }),
                                            a.play().catch(n);
                                    }),
                                        n();
                                })().catch(a);
                            }, []);
                        };
                    })({ hooks: t });
                    return function ({ onError: o }) {
                        let i = t.useMemo(
                                () => ({
                                    __html: (function () {
                                        let e = s.createElement('style'),
                                            t = '#1A141F',
                                            r = '#302735';
                                        return (
                                            (e.textContent = `
.editor {
  padding: 10px;
  padding-top: 65px;
  padding-bottom: 65px;
  flex-grow: 1;

  background-color: ${t};
  background-image: repeating-linear-gradient(
      -145deg,
      transparent,
      transparent 8px,
      ${t} 8px,
      ${t} 11px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 15px,
      ${r} 15px,
      ${r} 16px
    );
}

.editor__canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.editor__canvas-container canvas {
  object-fit: contain;
  position: relative;
}

.editor__crop-btn-group {
  padding: 8px;
  gap: 8px;
  border-radius: var(--menu-border-radius, 6px);
  background: var(--button-primary-background, var(--background));
  width: 175px;
  position: absolute;
}

.editor__crop-corner {
  width: 30px;
  height: 30px;
  position: absolute;
  background: none;
  border: 3px solid #ffffff;
}

.editor__crop-corner--top-left {
  cursor: nwse-resize;
  border-right: none;
  border-bottom: none;
}
.editor__crop-corner--top-right {
  cursor: nesw-resize;
  border-left: none;
  border-bottom: none;
}
.editor__crop-corner--bottom-left {
  cursor: nesw-resize;
  border-right: none;
  border-top: none;
}
.editor__crop-corner--bottom-right {
  cursor: nwse-resize;
  border-left: none;
  border-top: none;
}
`),
                                            e
                                        );
                                    })().innerText
                                }),
                                []
                            ),
                            E = (function ({ h: e }) {
                                return function ({ top: t, left: r, corner: n, onGrabButton: a }) {
                                    return e('button', {
                                        class: `editor__crop-corner editor__crop-corner--${n} `,
                                        style: {
                                            top: t,
                                            left: r
                                        },
                                        onMouseDown: (e) => {
                                            e.preventDefault(), a(e, n);
                                        },
                                        onClick: (e) => {
                                            e.preventDefault();
                                        },
                                        __self: this,
                                        __source: {
                                            fileName: '/home/runner/work/sentry-javascript/sentry-javascript/packages/feedback/src/screenshot/components/CropCorner.tsx',
                                            lineNumber: 22
                                        }
                                    });
                                };
                            })({ h: e }),
                            l = t.useRef(null),
                            u = t.useRef(null),
                            I = t.useRef(null),
                            [R, N] = t.useState({
                                startX: 0,
                                startY: 0,
                                endX: 0,
                                endY: 0
                            }),
                            [A, T] = t.useState(!1),
                            [d, f] = t.useState(!1);
                        function L() {
                            let e = I.current,
                                t = e3(e5(r));
                            if (e) {
                                (e.width = t.width * e2), (e.height = t.height * e2), (e.style.width = `${t.width}px`), (e.style.height = `${t.height}px`);
                                let r = e.getContext('2d');
                                r && r.scale(e2, e2);
                            }
                            let n = u.current;
                            n && ((n.style.width = `${t.width}px`), (n.style.height = `${t.height}px`)),
                                N({
                                    startX: 0,
                                    startY: 0,
                                    endX: t.width,
                                    endY: t.height
                                });
                        }
                        function O(e, t) {
                            T(!1), f(!0);
                            let r = p(t),
                                n = () => {
                                    s.removeEventListener('mousemove', r), s.removeEventListener('mouseup', n), T(!0), f(!1);
                                };
                            s.addEventListener('mouseup', n), s.addEventListener('mousemove', r);
                        }
                        t.useEffect(() => {
                            c.addEventListener('resize', L, !1);
                        }, []),
                            t.useEffect(() => {
                                let e = I.current;
                                if (!e) return;
                                let t = e.getContext('2d');
                                if (!t) return;
                                let n = e3(e5(r)),
                                    a = e3(R);
                                t.clearRect(0, 0, n.width, n.height), (t.fillStyle = 'rgba(0, 0, 0, 0.5)'), t.fillRect(0, 0, n.width, n.height), t.clearRect(a.x, a.y, a.width, a.height), (t.strokeStyle = '#ffffff'), (t.lineWidth = 3), t.strokeRect(a.x + 1, a.y + 1, a.width - 2, a.height - 2), (t.strokeStyle = '#000000'), (t.lineWidth = 1), t.strokeRect(a.x + 3, a.y + 3, a.width - 6, a.height - 6);
                            }, [R]);
                        let p = t.useCallback(
                                (e) =>
                                    function (t) {
                                        if (!I.current) return;
                                        let r = I.current,
                                            n = r.getBoundingClientRect(),
                                            a = t.clientX - n.x,
                                            _ = t.clientY - n.y;
                                        switch (e) {
                                            case 'top-left':
                                                N((e) => ({
                                                    ...e,
                                                    startX: Math.min(Math.max(0, a), e.endX - e1),
                                                    startY: Math.min(Math.max(0, _), e.endY - e1)
                                                }));
                                                break;
                                            case 'top-right':
                                                N((e) => ({
                                                    ...e,
                                                    endX: Math.max(Math.min(a, r.width / e2), e.startX + e1),
                                                    startY: Math.min(Math.max(0, _), e.endY - e1)
                                                }));
                                                break;
                                            case 'bottom-left':
                                                N((e) => ({
                                                    ...e,
                                                    startX: Math.min(Math.max(0, a), e.endX - e1),
                                                    endY: Math.max(Math.min(_, r.height / e2), e.startY + e1)
                                                }));
                                                break;
                                            case 'bottom-right':
                                                N((e) => ({
                                                    ...e,
                                                    endX: Math.max(Math.min(a, r.width / e2), e.startX + e1),
                                                    endY: Math.max(Math.min(_, r.height / e2), e.startY + e1)
                                                }));
                                        }
                                    },
                                []
                            ),
                            h = t.useRef({
                                initialX: 0,
                                initialY: 0
                            });
                        return (
                            _({
                                onBeforeScreenshot: t.useCallback(() => {
                                    n.el.style.display = 'none';
                                }, []),
                                onScreenshot: t.useCallback(
                                    (e) => {
                                        let t = r.getContext('2d');
                                        if (!t) throw Error('Could not get canvas context');
                                        (r.width = e.videoWidth), (r.height = e.videoHeight), (r.style.width = '100%'), (r.style.height = '100%'), t.drawImage(e, 0, 0);
                                    },
                                    [r]
                                ),
                                onAfterScreenshot: t.useCallback(() => {
                                    n.el.style.display = 'block';
                                    let e = l.current;
                                    e && e.appendChild(r), L();
                                }, []),
                                onError: t.useCallback((e) => {
                                    (n.el.style.display = 'block'), o(e);
                                }, [])
                            }),
                            e(
                                'div',
                                {
                                    class: 'editor',
                                    __self: this,
                                    __source: {
                                        fileName: e0,
                                        lineNumber: 315
                                    }
                                },
                                e('style', {
                                    dangerouslySetInnerHTML: i,
                                    __self: this,
                                    __source: {
                                        fileName: e0,
                                        lineNumber: 316
                                    }
                                }),
                                e(
                                    'div',
                                    {
                                        class: 'editor__canvas-container',
                                        ref: l,
                                        __self: this,
                                        __source: {
                                            fileName: e0,
                                            lineNumber: 317
                                        }
                                    },
                                    e(
                                        'div',
                                        {
                                            class: 'editor__crop-container',
                                            style: {
                                                position: 'absolute',
                                                zIndex: 1
                                            },
                                            ref: u,
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 318
                                            }
                                        },
                                        e('canvas', {
                                            onMouseDown: function (e) {
                                                if (d) return;
                                                h.current = {
                                                    initialX: e.clientX,
                                                    initialY: e.clientY
                                                };
                                                let t = (e) => {
                                                        let t = I.current;
                                                        if (!t) return;
                                                        let r = e.clientX - h.current.initialX,
                                                            n = e.clientY - h.current.initialY;
                                                        N((a) => {
                                                            let _ = Math.max(0, Math.min(a.startX + r, t.width / e2 - (a.endX - a.startX))),
                                                                o = Math.max(0, Math.min(a.startY + n, t.height / e2 - (a.endY - a.startY))),
                                                                i = _ + (a.endX - a.startX),
                                                                E = o + (a.endY - a.startY);
                                                            return (
                                                                (h.current.initialX = e.clientX),
                                                                (h.current.initialY = e.clientY),
                                                                {
                                                                    startX: _,
                                                                    startY: o,
                                                                    endX: i,
                                                                    endY: E
                                                                }
                                                            );
                                                        });
                                                    },
                                                    r = () => {
                                                        s.removeEventListener('mousemove', t), s.removeEventListener('mouseup', r);
                                                    };
                                                s.addEventListener('mousemove', t), s.addEventListener('mouseup', r);
                                            },
                                            style: {
                                                position: 'absolute',
                                                cursor: A ? 'move' : 'auto'
                                            },
                                            ref: I,
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 319
                                            }
                                        }),
                                        e(E, {
                                            left: R.startX - 3,
                                            top: R.startY - 3,
                                            onGrabButton: O,
                                            corner: 'top-left',
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 324
                                            }
                                        }),
                                        e(E, {
                                            left: R.endX - 30 + 3,
                                            top: R.startY - 3,
                                            onGrabButton: O,
                                            corner: 'top-right',
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 330
                                            }
                                        }),
                                        e(E, {
                                            left: R.startX - 3,
                                            top: R.endY - 30 + 3,
                                            onGrabButton: O,
                                            corner: 'bottom-left',
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 336
                                            }
                                        }),
                                        e(E, {
                                            left: R.endX - 30 + 3,
                                            top: R.endY - 30 + 3,
                                            onGrabButton: O,
                                            corner: 'bottom-right',
                                            __self: this,
                                            __source: {
                                                fileName: e0,
                                                lineNumber: 342
                                            }
                                        }),
                                        e(
                                            'div',
                                            {
                                                style: {
                                                    left: Math.max(0, R.endX - 191),
                                                    top: Math.max(0, R.endY + 8),
                                                    display: A ? 'flex' : 'none'
                                                },
                                                class: 'editor__crop-btn-group',
                                                __self: this,
                                                __source: {
                                                    fileName: e0,
                                                    lineNumber: 348
                                                }
                                            },
                                            e(
                                                'button',
                                                {
                                                    onClick: (e) => {
                                                        e.preventDefault(),
                                                            I.current &&
                                                                N({
                                                                    startX: 0,
                                                                    startY: 0,
                                                                    endX: I.current.width / e2,
                                                                    endY: I.current.height / e2
                                                                }),
                                                            T(!1);
                                                    },
                                                    class: 'btn btn--default',
                                                    __self: this,
                                                    __source: {
                                                        fileName: e0,
                                                        lineNumber: 356
                                                    }
                                                },
                                                a.cancelButtonLabel
                                            ),
                                            e(
                                                'button',
                                                {
                                                    onClick: (e) => {
                                                        e.preventDefault(),
                                                            !(function () {
                                                                let e = s.createElement('canvas'),
                                                                    t = e3(e5(r)),
                                                                    n = e3(R);
                                                                (e.width = n.width * e2), (e.height = n.height * e2);
                                                                let a = e.getContext('2d');
                                                                a && r && a.drawImage(r, (n.x / t.width) * r.width, (n.y / t.height) * r.height, (n.width / t.width) * r.width, (n.height / t.height) * r.height, 0, 0, e.width, e.height);
                                                                let _ = r.getContext('2d');
                                                                _ && (_.clearRect(0, 0, r.width, r.height), (r.width = e.width), (r.height = e.height), (r.style.width = `${n.width}px`), (r.style.height = `${n.height}px`), _.drawImage(e, 0, 0), L());
                                                            })(),
                                                            T(!1);
                                                    },
                                                    class: 'btn btn--primary',
                                                    __self: this,
                                                    __source: {
                                                        fileName: e0,
                                                        lineNumber: 373
                                                    }
                                                },
                                                a.confirmButtonLabel
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    };
                })({
                    h: e,
                    hooks: t,
                    imageBuffer: a,
                    dialog: r,
                    options: n
                }),
                value: async () => {
                    let e = await new Promise((e) => {
                        a.toBlob(e, 'image/png');
                    });
                    if (e) {
                        let t = new Uint8Array(await e.arrayBuffer());
                        return {
                            data: t,
                            filename: 'screenshot.png',
                            contentType: 'application/png'
                        };
                    }
                }
            };
        }
    });
