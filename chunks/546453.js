r.d(t, {
    w: function () {
        return o;
    }
});
var a = r(617726),
    n = r(151122),
    _ = r(166394);
let o = (0, n._I)(() => ({
    name: 'ModuleMetadata',
    setup(e) {
        e.on('beforeEnvelope', (e) => {
            (0, a.gv)(e, (e, t) => {
                if ('event' === t) {
                    let t = Array.isArray(e) ? e[1] : void 0;
                    t && ((0, _.CC)(t), (e[1] = t));
                }
            });
        }),
            e.on('applyFrameMetadata', (t) => {
                if (t.type) return;
                let r = e.getOptions().stackParser;
                (0, _.GY)(r, t);
            });
    }
}));
