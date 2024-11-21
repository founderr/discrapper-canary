n.d(t, {
    d: function () {
        return o;
    }
});
var r = n(192379),
    i = n(346110),
    a = n(317559);
class s {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        (this.defaultPrevented = !0), this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation(), (this.isPropagationStopped = () => !0);
    }
    isPropagationStopped() {
        return !1;
    }
    persist() {}
    constructor(e, t) {
        (this.nativeEvent = t), (this.target = t.target), (this.currentTarget = t.currentTarget), (this.relatedTarget = t.relatedTarget), (this.bubbles = t.bubbles), (this.cancelable = t.cancelable), (this.defaultPrevented = t.defaultPrevented), (this.eventPhase = t.eventPhase), (this.isTrusted = t.isTrusted), (this.timeStamp = t.timeStamp), (this.type = e);
    }
}
function o(e) {
    let t = (0, r.useRef)({
        isFocused: !1,
        observer: null
    });
    (0, i.b)(() => {
        let e = t.current;
        return () => {
            e.observer && (e.observer.disconnect(), (e.observer = null));
        };
    }, []);
    let n = (0, a.i)((t) => {
        null == e || e(t);
    });
    return (0, r.useCallback)(
        (e) => {
            if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target;
                r.addEventListener(
                    'focusout',
                    (e) => {
                        (t.current.isFocused = !1), r.disabled && n(new s('blur', e)), t.current.observer && (t.current.observer.disconnect(), (t.current.observer = null));
                    },
                    { once: !0 }
                ),
                    (t.current.observer = new MutationObserver(() => {
                        if (t.current.isFocused && r.disabled) {
                            var e;
                            null === (e = t.current.observer) || void 0 === e || e.disconnect();
                            let n = r === document.activeElement ? null : document.activeElement;
                            r.dispatchEvent(new FocusEvent('blur', { relatedTarget: n })),
                                r.dispatchEvent(
                                    new FocusEvent('focusout', {
                                        bubbles: !0,
                                        relatedTarget: n
                                    })
                                );
                        }
                    })),
                    t.current.observer.observe(r, {
                        attributes: !0,
                        attributeFilter: ['disabled']
                    });
            }
        },
        [n]
    );
}
