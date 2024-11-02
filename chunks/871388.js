n.d(t, {
    B: function () {
        return i;
    }
});
var A = n(200651);
n(192379);
var r = n(481060),
    a = n(120651),
    l = n(388032);
function i(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, a.Z)({
        title: e,
        body:
            'string' == typeof t
                ? t
                : l.intl.formatToPlainString(t, {
                      highlightHook: (e) =>
                          (0, A.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              style: { display: 'inline' },
                              children: e
                          }),
                      ...i
                  }),
        cta: l.intl.string(l.t['NX+WJC']),
        onConfirm: () => {},
        iconVariant: n
    });
}
