n(411104);
var i = n(141795),
    l = n(476326),
    a = n(956664),
    r = n(693824);
t.Z = class e {
    toDataUrl(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'png',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return e.toDataURL(t, n);
    }
    async exportCanvas(e, t) {
        let { format: n, fileType: o = 'png', quality: s = 1, fileName: u } = t;
        if (n === r.kH.Base64) return this.toDataUrl(e, o, s);
        if (n === r.kH.Blob) {
            let t = this.toDataUrl(e, o, s);
            return (0, a.kD)(t);
        }
        if (n === r.kH.File) {
            let t = this.toDataUrl(e, o, s);
            return await (0, a.Bo)(t, u, 'image/png');
        }
        if (n === r.kH.CloudUpload) {
            let { channelId: n } = t,
                r = this.toDataUrl(e, o, s),
                c = await (0, a.Bo)(r, u, 'image/png');
            return new i.n(
                {
                    file: c,
                    platform: l.ow.WEB,
                    isThumbnail: !1
                },
                n
            );
        }
        throw Error('DiscordCanvas: '.concat(n, ' is not a valid export format.'));
    }
};
