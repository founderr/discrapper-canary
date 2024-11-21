n.d(t, {
    C: function () {
        return c;
    }
});
var r = n(315429),
    i = n(225750),
    a = n(654990),
    s = n(33693),
    o = n(650419),
    l = n(172669),
    u = n(192379);
function c(e) {
    let { selectionManager: t, key: n, ref: c, shouldSelectOnPressUp: _, shouldUseVirtualFocus: p, focus: h, isDisabled: m, onAction: g, allowsDifferentPressOrigin: E, linkBehavior: v = 'action' } = e,
        b = (0, a.tv)(),
        I = (e) => {
            if ('keyboard' === e.pointerType && (0, r.F)(e)) t.toggleSelection(n);
            else {
                if ('none' === t.selectionMode) return;
                if (t.isLink(n)) {
                    if ('selection' === v) {
                        let r = t.getItemProps(n);
                        b.open(c.current, e, r.href, r.routerOptions), t.setSelectedKeys(t.selectedKeys);
                        return;
                    }
                    if ('override' === v || 'none' === v) return;
                }
                'single' === t.selectionMode ? (t.isSelected(n) && !t.disallowEmptySelection ? t.toggleSelection(n) : t.replaceSelection(n)) : e && e.shiftKey ? t.extendSelection(n) : 'toggle' === t.selectionBehavior || (e && ((0, r.y)(e) || 'touch' === e.pointerType || 'virtual' === e.pointerType)) ? t.toggleSelection(n) : t.replaceSelection(n);
            }
        };
    (0, u.useEffect)(() => {
        n === t.focusedKey && t.isFocused && !p && (h ? h() : document.activeElement !== c.current && (0, i.e)(c.current));
    }, [c, n, t.focusedKey, t.childFocusStrategy, t.isFocused, p]),
        (m = m || t.isDisabled(n));
    let T = {};
    p || m
        ? m &&
          (T.onMouseDown = (e) => {
              e.preventDefault();
          })
        : (T = {
              tabIndex: n === t.focusedKey ? 0 : -1,
              onFocus(e) {
                  e.target === c.current && t.setFocusedKey(n);
              }
          });
    let S = t.isLink(n) && 'override' === v,
        y = t.isLink(n) && 'selection' !== v && 'none' !== v,
        A = !m && t.canSelectItem(n) && !S,
        N = (g || y) && !m,
        C = N && ('replace' === t.selectionBehavior ? !A : !A || t.isEmpty),
        R = N && A && 'replace' === t.selectionBehavior,
        O = C || R,
        D = (0, u.useRef)(null),
        L = O && A,
        x = (0, u.useRef)(!1),
        w = (0, u.useRef)(!1),
        M = (e) => {
            if ((g && g(), y)) {
                let r = t.getItemProps(n);
                b.open(c.current, e, r.href, r.routerOptions);
            }
        },
        P = {};
    _
        ? ((P.onPressStart = (e) => {
              (D.current = e.pointerType), (x.current = L), 'keyboard' === e.pointerType && (!O || f()) && I(e);
          }),
          E
              ? ((P.onPressUp = C
                    ? null
                    : (e) => {
                          'keyboard' !== e.pointerType && A && I(e);
                      }),
                (P.onPress = C ? M : null))
              : (P.onPress = (e) => {
                    C || (R && 'mouse' !== e.pointerType) ? ('keyboard' !== e.pointerType || !!d()) && M(e) : 'keyboard' !== e.pointerType && A && I(e);
                }))
        : ((P.onPressStart = (e) => {
              (D.current = e.pointerType), (x.current = L), (w.current = C), A && (('mouse' === e.pointerType && !C) || ('keyboard' === e.pointerType && (!N || f()))) && I(e);
          }),
          (P.onPress = (e) => {
              ('touch' === e.pointerType || 'pen' === e.pointerType || 'virtual' === e.pointerType || ('keyboard' === e.pointerType && O && d()) || ('mouse' === e.pointerType && w.current)) && (O ? M(e) : A && I(e));
          })),
        (T['data-key'] = n),
        (P.preventFocusOnPress = p);
    let { pressProps: k, isPressed: U } = (0, o.r)(P),
        G = R
            ? (e) => {
                  'mouse' === D.current && (e.stopPropagation(), e.preventDefault(), M(e));
              }
            : void 0,
        { longPressProps: B } = (0, l.T)({
            isDisabled: !L,
            onLongPress(e) {
                'touch' === e.pointerType && (I(e), t.setSelectionBehavior('toggle'));
            }
        }),
        Z = t.isLink(n)
            ? (e) => {
                  !a.nG.isOpening && e.preventDefault();
              }
            : void 0;
    return {
        itemProps: (0, s.d)(T, A || C ? k : {}, L ? B : {}, {
            onDoubleClick: G,
            onDragStartCapture: (e) => {
                'touch' === D.current && x.current && e.preventDefault();
            },
            onClick: Z
        }),
        isPressed: U,
        isSelected: t.isSelected(n),
        isFocused: t.isFocused && t.focusedKey === n,
        isDisabled: m,
        allowsSelection: A,
        hasAction: O
    };
}
function d() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === 'Enter';
}
function f() {
    let e = window.event;
    return (null == e ? void 0 : e.key) === ' ' || (null == e ? void 0 : e.code) === 'Space';
}
