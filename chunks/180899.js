t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
var s = t(470079),
    a = t(512722),
    l = t.n(a),
    i = t(157925),
    r = t(765305);
function o(e) {
    let { stageInstance: n, defaultStep: t, error: a, onSave: o } = e,
        [c, d] = s.useState(t),
        [u, _] = s.useState(),
        [E, x] = s.useState(null);
    return (
        s.useEffect(() => {
            null != a && d(i.lv.STAGE_CHANNEL_SETTINGS);
        }, [a]),
        {
            modalStep: c,
            setModalStep: d,
            readySlide: E,
            handleSlideReady: function (e) {
                return x(e);
            },
            savedOptions: u,
            handleSettingsSave: function (e) {
                if ((_(e), e.privacyLevel === r.j8.PUBLIC && (null == n ? void 0 : n.privacy_level) !== r.j8.PUBLIC)) {
                    d(i.lv.PUBLIC_STAGE_PREVIEW);
                    return;
                }
                o(e);
            },
            handleDelayedSave: function () {
                l()(null != u, 'Must have some saved options.'), o(u);
            }
        }
    );
}
