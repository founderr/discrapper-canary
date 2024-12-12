r.d(n, {
    $: function () {
        return a;
    }
});
var i = r(239700);
function a(e = {}) {
    let [n, r] = (0, i.zk)(e.value, e.defaultValue || [], e.onChange);
    return {
        value: n,
        setValue(n) {
            !e.isReadOnly && !e.isDisabled && r(n);
        },
        isDisabled: e.isDisabled || !1,
        isReadOnly: e.isReadOnly || !1,
        isSelected: (e) => n.includes(e),
        addValue(i) {
            !e.isReadOnly && !e.isDisabled && !n.includes(i) && r(n.concat(i));
        },
        removeValue(i) {
            !e.isReadOnly && !e.isDisabled && n.includes(i) && r(n.filter((e) => e !== i));
        },
        toggleValue(i) {
            !e.isReadOnly && !e.isDisabled && (n.includes(i) ? r(n.filter((e) => e !== i)) : r(n.concat(i)));
        },
        validationState: e.validationState,
        isInvalid: e.isInvalid || 'invalid' === e.validationState
    };
}
