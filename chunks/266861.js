n.d(t, {
    i: function () {
        return i;
    }
});
var r = n(192379);
function i(e) {
    let { keyboardDelegate: t, selectionManager: n, onTypeSelect: i } = e,
        a = (0, r.useRef)({
            search: '',
            timeout: null
        }).current;
    return {
        typeSelectProps: {
            onKeyDownCapture: t.getKeyForSearch
                ? (e) => {
                      let r = (function (e) {
                          return 1 !== e.length && /^[A-Z]/i.test(e) ? '' : e;
                      })(e.key);
                      if (!r || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
                      ' ' === r && a.search.trim().length > 0 && (e.preventDefault(), !('continuePropagation' in e) && e.stopPropagation()), (a.search += r);
                      let s = t.getKeyForSearch(a.search, n.focusedKey);
                      null == s && (s = t.getKeyForSearch(a.search)),
                          null != s && (n.setFocusedKey(s), i && i(s)),
                          clearTimeout(a.timeout),
                          (a.timeout = setTimeout(() => {
                              a.search = '';
                          }, 1000));
                  }
                : null
        }
    };
}
