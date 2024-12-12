r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(192379);
function a(e, n) {
    let r = i.useRef(e);
    return (
        i.useEffect(() => {
            function e(e) {
                null != r.current && !r.current.contains(e.target) && n();
            }
            return (
                document.addEventListener('mousedown', e),
                () => {
                    document.removeEventListener('mousedown', e);
                }
            );
        }, [r, n]),
        r
    );
}
