n.d(t, {
    $G: function () {
        return u;
    },
    OR: function () {
        return c;
    },
    aL: function () {
        return l;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(345898),
    s = n(289659);
let l = 660,
    u = (e) =>
        (0, r.jsx)(o.Z, {
            ...e,
            className: a()(e.className, {
                [s.embedVertical]: !e.isHorizontal,
                [s.embedHorizontal]: e.isHorizontal
            })
        }),
    c = (e) => {
        let { isHorizontal: t } = e,
            n = () => (0, r.jsx)('div', { className: a()(s.loadingImage, { [s.loadingImageHorizontal]: t }) }),
            i = () =>
                (0, r.jsx)('div', {
                    className: a()(s.loadingDescription),
                    children: (0, r.jsx)('div', {
                        className: a()(s.loadingBackgroundWrapper, { [s.loadingBackgroundWrapperHorizontal]: t }),
                        children: (0, r.jsx)('div', { className: s.loadingBackground })
                    })
                });
        return (0, r.jsx)(u, {
            ...e,
            media: i,
            title: n
        });
    };
